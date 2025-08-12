import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// Portfolio Logo
const logo = '/SBA_logo_square.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Skills' },
    { id: 'case-studies', label: 'Projects' },
    { id: 'how-it-works', label: 'Process' },
    { id: 'why-agents', label: 'Demo' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(s => s.element);

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('about');
        return;
      }

      // Find the section that's currently in view
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const rect = sectionElements[i].element!.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
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
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-secondary text-secondary-foreground font-medium'
                    : 'text-foreground/80 hover:text-foreground hover:bg-foreground/10'
                }`}
              >
                {section.label}
              </button>
            ))}
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