import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const logo = '/SBA_logo_square.png';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Skills' },
  { id: 'case-studies', label: 'Projects' },
  { id: 'how-it-works', label: 'Process' },
  { id: 'why-agents', label: 'Demo' },
  { id: 'contact', label: 'Contact' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionElementsRef = useRef<Map<string, IntersectionObserverEntry>>(new Map<string, IntersectionObserverEntry>());

  // Scroll progress tracking
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  // Active section detection using IntersectionObserver
  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionElementsRef.current.set(entry.target.id, entry);
          } else {
            sectionElementsRef.current.delete(entry.target.id);
          }
        });

        // Determine active section based on intersection
        if (sectionElementsRef.current.size === 0) {
          // No sections are intersecting, find the closest one
          const scrollY = window.scrollY;
          const viewportCenter = scrollY + window.innerHeight / 2;
          
          let closestSection = sections[0].id;
          let minDistance = Infinity;

          sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementCenter = rect.top + scrollY + rect.height / 2;
              const distance = Math.abs(viewportCenter - elementCenter);
              
              if (distance < minDistance) {
                minDistance = distance;
                closestSection = section.id;
              }
            }
          });

          setActiveSection(closestSection);
        } else {
          // Find the most visible section
          let mostVisibleId = '';
          let maxRatio = 0;

          for (const [id, entry] of sectionElementsRef.current.entries()) {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisibleId = id;
            }
          }

          if (mostVisibleId) {
            setActiveSection(mostVisibleId);
          }
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is in upper 40% of viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    // Observe all sections
    const observer = observerRef.current;
    const timeoutId = setTimeout(() => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && observer) {
          observer.observe(element);
        }
      });
    }, 100);

    // Handle initial scroll position
    const handleInitialScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setActiveSection('about');
      } else {
        // Check which section is currently in view
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              setActiveSection(section.id);
            }
          }
        });
      }
    };

    handleInitialScroll();

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Temporarily disable the observer to prevent conflicts during smooth scroll
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);

      // Re-enable observer after scroll completes
      setTimeout(() => {
        if (observerRef.current) {
          sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) {
              observerRef.current?.observe(el);
            }
          });
        }
      }, 1000);
    }
  };

  return (
    <>
      {/* Logo - positioned outside the pill */}
      <div className="fixed top-6 left-6 z-50 flex items-center space-x-2">
        <img 
          src={logo} 
          alt="Portfolio Logo" 
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Pill Navigation */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="relative bg-background/80 backdrop-blur-md rounded-full px-4 py-1.5 shadow-lg border border-border">
          {/* Progress bar */}
          <div 
            className="absolute top-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ease-out"
            style={{ 
              left: '16px',
              width: `calc(${scrollProgress}% - 32px)`,
              maxWidth: 'calc(100% - 32px)'
            }}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-secondary text-secondary-foreground font-medium'
                      : 'text-foreground/80 hover:text-foreground hover:bg-foreground/10'
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground hover:bg-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-background/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-border">
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-xl text-left transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-secondary text-secondary-foreground font-medium'
                      : 'text-foreground/80 hover:text-foreground hover:bg-foreground/10'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
