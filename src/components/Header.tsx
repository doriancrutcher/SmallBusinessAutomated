import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Bot } from "lucide-react";
// Placeholder logo - replace with actual logo file
const logo = '/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'why-agents', label: 'Why Agents' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'case-studies', label: 'Case Studies' },
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
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
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
          alt="Small Business Automated Logo" 
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Pill Navigation */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="relative bg-black/80 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/10">
          {/* Progress bar */}
          <div 
            className="absolute top-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-secondary text-secondary-foreground font-medium'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
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
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-black/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10">
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-xl text-left transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-secondary text-secondary-foreground font-medium'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
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