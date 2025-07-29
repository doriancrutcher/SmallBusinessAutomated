import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyAgents } from './components/WhyAgents';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudies } from './components/CaseStudies';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyAgents />
        <HowItWorks />
        <CaseStudies />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}