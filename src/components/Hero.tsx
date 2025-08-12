import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles, Zap, Github, ExternalLink } from "lucide-react";
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
                  <Code className="w-4 h-4 mr-2 text-secondary" />
                  <span className="text-sm font-medium text-foreground">Full-Stack Developer</span>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="up" delay={0.4}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Building{' '}
                  <span className="text-secondary">Digital Solutions</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I create modern web applications, intelligent systems, and innovative solutions 
                  that help businesses and users achieve their goals. Let me turn your ideas into reality.
                </p>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="pill-button pill-button-primary hover-glow-lime group text-lg px-10 py-4"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToContact}
                  className="pill-button text-lg px-10 py-4 border-2"
                >
                  Get In Touch
                </Button>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-3 gap-8 pt-8">
              <StaggerItem>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Code className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Column - Visual */}
          <ScrollAnimation direction="right" delay={0.3}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl p-8 border border-secondary/10">
                {/* Portfolio showcase */}
                <StaggerContainer className="space-y-6">
                  <StaggerItem>
                    <motion.div 
                      className="bg-card rounded-2xl p-6 shadow-sm border"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Code className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">E-Commerce Platform</h4>
                          <p className="text-sm text-muted-foreground">React + Node.js + MongoDB</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">React</span>
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Node.js</span>
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">MongoDB</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Full-stack e-commerce solution with payment integration</p>
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
                          <h4 className="font-semibold">AI Chat Application</h4>
                          <p className="text-sm text-muted-foreground">Python + OpenAI + FastAPI</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Python</span>
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">OpenAI</span>
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">FastAPI</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Intelligent chatbot with natural language processing</p>
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
                          <h4 className="font-semibold">Task Management App</h4>
                          <p className="text-sm text-muted-foreground">Vue.js + Express + PostgreSQL</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Vue.js</span>
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Express</span>
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">PostgreSQL</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Collaborative task management with real-time updates</p>
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
                <Github className="w-6 h-6 text-secondary" />
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
                <ExternalLink className="w-4 h-4 text-secondary" />
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}