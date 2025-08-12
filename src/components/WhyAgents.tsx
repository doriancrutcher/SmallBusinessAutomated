import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, User, CheckCircle, Clock, Brain, Zap, ArrowRight, Youtube } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { motion } from 'framer-motion';

export function WhyAgents() {
  const features = [
    "Automated Guest Messaging — Answers common questions instantly with accurate friendly responses",
    "Booking Management — Confirms and updates reservations across platforms",
    "Cleaner Notifications — Alerts cleaners after checkout and buffers before the next arrival",
    "Smart Home Integration — Controls lights thermostat and locks through connected services",
    "Database Updates — Logs guest and stay details for easy reference"
  ];

  return (
    <section id="why-agents" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollAnimation direction="up">
            <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-foreground border-secondary/20">
              Fictional Case Study
            </Badge>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Demo Case Study: Checkin+ for Hospitality
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              As a Solutions Engineer for this fictional product, here's how I would present its value to a hospitality client. The company and scenario are made up, but the approach reflects my real presentation style and technical process. It mirrors how I built my Airbnb Agent.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Human vs AI Comparison */}
          <ScrollAnimation direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">The Old Way vs The Checkin+ Way</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {/* Old Way */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="border-2 border-muted">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Manual Process</h4>
                            <p className="text-sm text-muted-foreground">Time-consuming & error-prone</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            Last-minute guest changes disrupt scheduling
                          </li>
                          <li className="flex items-center text-sm text-muted-foreground">
                            <User className="w-4 h-4 mr-2" />
                            Check-in delays cause poor reviews
                          </li>
                          <li className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            Cleaner schedules require constant manual updates
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Nova Way */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="border-2 border-secondary shadow-lg glow-lime">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                            <Bot className="w-6 h-6 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Checkin+ Agent</h4>
                            <p className="text-sm text-secondary">Automated & intelligent</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                            Automates responses, confirms bookings instantly, updates schedules in real time
                          </li>
                          <li className="flex items-center text-sm text-foreground">
                            <Brain className="w-4 h-4 mr-2 text-secondary" />
                            Works around the clock to handle inquiries, check-ins, and guest needs
                          </li>
                          <li className="flex items-center text-sm text-foreground">
                            <Zap className="w-4 h-4 mr-2 text-secondary" />
                            Proactively manages checkouts, cleaner scheduling, and property readiness
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Task Animation */}
          <ScrollAnimation direction="right">
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 border shadow-sm">
                <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                  Example Agent Features
                </h4>
                <StaggerContainer className="space-y-4">
                  {features.map((feature, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="flex items-start space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-secondary/5 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-foreground font-medium text-sm leading-relaxed">{feature}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                

              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Why This Works */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground">Why This Works</h3>
        </div>
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Custom Fit to Workflow</h4>
                  <p className="text-muted-foreground">
                    I scope each integration to match the client's exact processes
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Continuous Optimization</h4>
                  <p className="text-muted-foreground">
                    I monitor usage data and adjust configurations for peak performance
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Always Available</h4>
                  <p className="text-muted-foreground">
                    I ensure reliable deployment and ongoing system health
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <ScrollAnimation direction="up" delay={0.8}>
            <motion.button 
              onClick={() => window.open('https://www.youtube.com/watch?v=618woMJox54&t=168s', '_blank', 'rel=noopener noreferrer')}
              className="pill-button pill-button-primary hover-glow-lime text-lg px-10 py-6 group flex flex-col items-center space-y-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Watch the Real Build</span>
              <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </motion.button>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              See my real Airbnb Agent in action — the foundation for this fictional Checkin+ case study.
            </p>
          </ScrollAnimation>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground/70">
            Fictional case study for portfolio purposes. Company and scenario are made up. Methods and build reflect my real work.
          </p>
        </div>
      </div>
    </section>
  );
}