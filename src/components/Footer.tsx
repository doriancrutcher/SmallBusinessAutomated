import { Mail, MessageCircle, Calendar, ArrowUp, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
// SBA Logo
const logo = '/SBA_logo_square.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Portfolio Logo" 
                className="w-10 h-10 object-contain bg-primary-foreground/10 rounded-xl p-2"
              />
              <div>
                <div className="font-bold text-lg">Dorian Crutcher</div>
                <div className="text-sm text-primary-foreground/60">Full-Stack Developer & AI Engineer</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building intelligent applications and scalable solutions. 
              Specializing in React, AI development, and developer education.
            </p>
          </div>

          {/* Portfolio Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Portfolio</h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Skills & Services
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="space-y-3">
              <button 
                onClick={() => window.open('mailto:crutcherdorian@gmail.com')}
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </button>
              <button 
                onClick={() => window.open('https://github.com/doriancrutcher', '_blank')}
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/dorian-crutcher/', '_blank')}
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>
            </div>


          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
     
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-primary-foreground/60">
                Made with ❤️ for developers and innovators
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}