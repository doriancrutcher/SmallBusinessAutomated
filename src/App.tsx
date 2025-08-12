import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CaseStudies } from '@/components/CaseStudies';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyAgents } from '@/components/WhyAgents';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <About />
        <Hero />
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