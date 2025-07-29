import { Mail, MessageCircle, Calendar, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
// TODO: Replace with actual logo file
// import logo from 'figma:asset/1dd4c83891726f10689327a212ce569719414992.png';
const logo = '/logo.png'; // Placeholder - replace with actual logo

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
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
                alt="Small Business Automated Logo" 
                className="w-10 h-10 object-contain bg-primary-foreground/10 rounded-xl p-2"
              />
              <div>
                <div className="font-bold text-lg">Small Business Automated</div>
                <div className="text-sm text-primary-foreground/60">by Dorian</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              AI agents and workflow automation for small businesses. 
              Direct communication, custom solutions, ongoing support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('why-agents')}
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Why AI Agents?
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                How It Works
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
                Get Started
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Let's Connect</h4>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>Book Free Audit</span>
              </button>
              <button 
                onClick={() => window.open('https://calendly.com', '_blank')}
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Calendar className="w-4 h-4" />
                <span>Calendly</span>
              </button>
              <button 
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>
            </div>

            <div className="pt-4">
              <div className="bg-secondary/20 rounded-lg p-4 border border-secondary/30">
                <p className="text-sm text-primary-foreground/90">
                  <strong>Response Time:</strong> Within 24 hours
                </p>
                <p className="text-sm text-primary-foreground/90">
                  <strong>Setup Time:</strong> 2 weeks average
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Small Business Automated. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-primary-foreground/60">
                Made with ❤️ for small business owners
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}