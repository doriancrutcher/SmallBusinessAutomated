import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, Zap } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <ScrollAnimation direction="up" delay={0.2}>
                <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                  <Bot className="w-4 h-4 mr-2 text-secondary" />
                  <span className="text-sm font-medium text-foreground">AI Agents for Small Business</span>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Let AI Agents Handle the{' '}
                  <span className="text-secondary">Busywork</span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I help small business owners automate repetitive tasks and scale smarter — 
                  using custom-built agents designed just for your workflow.
                </p>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="pill-button pill-button-primary hover-glow-lime group text-lg px-10 py-4"
                >
                  Book a Free Workflow Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('why-agents')?.scrollIntoView({ behavior: 'smooth' })}
                  className="pill-button text-lg px-10 py-4 border-2"
                >
                  Learn About Agents
                </Button>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-3 gap-8 pt-8">
              <StaggerItem>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Always Working</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Agents Built</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Bot className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">Custom</div>
                  <div className="text-sm text-muted-foreground">Solutions</div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Column - Visual */}
          <ScrollAnimation direction="right" delay={0.3}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl p-8 border border-secondary/10">
                {/* Placeholder for agent demo or animated GIF */}
                <StaggerContainer className="space-y-6">
                  <StaggerItem>
                    <motion.div 
                      className="bg-card rounded-2xl p-6 shadow-sm border"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Bot className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Email Agent</h4>
                          <p className="text-sm text-muted-foreground">Processing new inquiries...</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full bg-muted rounded-lg h-2">
                          <motion.div 
                            className="bg-secondary h-full rounded-lg"
                            initial={{ width: 0 }}
                            whileInView={{ width: '75%' }}
                            transition={{ duration: 1.5, delay: 1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">Categorized 12 emails, scheduled 3 follow-ups</p>
                      </div>
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div 
                      className="bg-card rounded-2xl p-6 shadow-sm border"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Zap className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Scheduling Agent</h4>
                          <p className="text-sm text-muted-foreground">Optimizing calendar...</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full bg-muted rounded-lg h-2">
                          <motion.div 
                            className="bg-secondary h-full rounded-lg"
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            transition={{ duration: 1.5, delay: 1.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">Booked 5 appointments, sent confirmations</p>
                      </div>
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div 
                      className="bg-card rounded-2xl p-6 shadow-sm border"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Data Agent</h4>
                          <p className="text-sm text-muted-foreground">Analyzing performance...</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full bg-muted rounded-lg h-2">
                          <motion.div 
                            className="bg-secondary h-full rounded-lg"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: 1.6 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">Generated weekly report, identified trends</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Bot className="w-6 h-6 text-secondary" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-4 h-4 text-secondary" />
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}