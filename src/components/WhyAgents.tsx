import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, User, CheckCircle, Clock, Brain, Zap } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { motion } from 'framer-motion';

export function WhyAgents() {
  const tasks = [
    "Respond to emails",
    "Sort leads by priority",
    "Schedule appointments",
    "Update spreadsheets",
    "Text your cleaner",
    "Process orders"
  ];

  return (
    <section id="why-agents" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollAnimation direction="up">
            <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-foreground border-secondary/20">
              What's an Agent — and Why Should You Care?
            </Badge>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              AI Agents = Your Smartest Team Member
              <br />
              <span className="text-secondary">(That Works 24/7)</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Unlike basic automation that just follows simple "if this, then that" rules, 
              AI agents actually think, learn, and make decisions. They understand context, 
              adapt to new situations, and get smarter over time.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Human vs AI Comparison */}
          <ScrollAnimation direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">The Old Way vs The AI Way</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {/* Human Worker */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="border-2 border-muted">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Human Employee</h4>
                            <p className="text-sm text-muted-foreground">$3,000+ per month</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            Works 8 hours/day
                          </li>
                          <li className="flex items-center text-sm text-muted-foreground">
                            <User className="w-4 h-4 mr-2" />
                            Needs training & management
                          </li>
                          <li className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            Takes breaks, vacations, sick days
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* AI Agent */}
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
                            <h4 className="font-semibold text-foreground">AI Agent</h4>
                            <p className="text-sm text-secondary">From $200 per month</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                            Works 24/7/365
                          </li>
                          <li className="flex items-center text-sm text-foreground">
                            <Brain className="w-4 h-4 mr-2 text-secondary" />
                            Learns and improves automatically
                          </li>
                          <li className="flex items-center text-sm text-foreground">
                            <Zap className="w-4 h-4 mr-2 text-secondary" />
                            No sick days, ever
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
                  Watch AI Handle Your Tasks
                </h4>
                <StaggerContainer className="space-y-4">
                  {tasks.map((task, index) => (
                    <StaggerItem key={task}>
                      <motion.div
                        className="flex items-center space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-secondary/5 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-foreground font-medium">{task}</span>
                        <div className="ml-auto">
                          <div className="flex space-x-1">
                            <motion.div 
                              className="w-2 h-2 bg-secondary rounded-full"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-secondary/60 rounded-full"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-secondary/30 rounded-full"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                
                <ScrollAnimation direction="up" delay={0.8}>
                  <div className="mt-8 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">
                        ✨ All done! Your AI agent completed 6 tasks while you focused on growing your business.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Key Benefits */}
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
                  <h4 className="text-xl font-semibold text-foreground mb-2">Actually Thinks</h4>
                  <p className="text-muted-foreground">
                    Unlike simple automation, agents understand context and make intelligent decisions
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
                  <h4 className="text-xl font-semibold text-foreground mb-2">Learns & Improves</h4>
                  <p className="text-muted-foreground">
                    Gets better over time by learning from patterns and feedback
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
                  <h4 className="text-xl font-semibold text-foreground mb-2">Never Stops</h4>
                  <p className="text-muted-foreground">
                    Works around the clock, every day, without breaks or downtime
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}