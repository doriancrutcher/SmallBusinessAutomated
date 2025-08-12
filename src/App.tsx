import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { CaseStudies } from '@/components/CaseStudies';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyAgents } from '@/components/WhyAgents';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { initAllAnimations, destroyAllAnimations } from './animations/techAnimations';

export default function App() {
  useEffect(() => {
    // Initialize animations after component mounts
    initAllAnimations();
    
    // Cleanup on unmount
    return () => {
      destroyAllAnimations();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background app-root">
      <Header />
      <main>
        <About />
        <Services />
        <CaseStudies />
        <HowItWorks />
        <WhyAgents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}