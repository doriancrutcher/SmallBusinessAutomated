import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, CheckCircle, ArrowRight, Clock, Zap, Bot } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    task: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        task: ''
      });
    }, 3000);
  };

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Free 30-Minute Audit",
      description: "I'll analyze your workflow and identify automation opportunities"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Custom Solution Design",
      description: "Get a tailored plan with clear ROI projections"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "No Obligation",
      description: "Valuable insights even if we don't work together"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollAnimation direction="up">
            <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-foreground border-secondary/20">
              Ready to Start?
            </Badge>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Build Something That
              <br />
              <span className="text-secondary">Saves You Hours</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Most small business owners are surprised by how much time they can save with 
              the right automation. Let's find out what's possible for your business.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Form */}
          <ScrollAnimation direction="left">
            <Card className="shadow-xl border-2 border-secondary/10">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Book Your Free Workflow Audit
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Tell me about your business and what's taking up too much of your time
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Thanks!</h3>
                    <p className="text-muted-foreground mb-6">
                      I've got your message and will get back to you within 24 hours. 
                      In the meantime, I'm already thinking about how to help automate your workflow.
                    </p>
                    <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                      <p className="text-sm text-secondary-foreground">
                        <strong>What's next:</strong> I'll review your submission and send you a 
                        calendar link to schedule our free audit call.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <StaggerItem>
                        <div>
                          <Label htmlFor="name">Your Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-2 rounded-xl border-border/50 focus:border-secondary/50"
                            required
                          />
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-2 rounded-xl border-border/50 focus:border-secondary/50"
                            required
                          />
                        </div>
                      </StaggerItem>
                    </StaggerContainer>

                    <ScrollAnimation direction="up" delay={0.4}>
                      <div>
                        <Label htmlFor="company">Company/Business Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-2 rounded-xl border-border/50 focus:border-secondary/50"
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="up" delay={0.6}>
                      <div>
                        <Label htmlFor="task">What would you like to automate? *</Label>
                        <Textarea
                          id="task"
                          name="task"
                          value={formData.task}
                          onChange={handleInputChange}
                          placeholder="Describe a task or process that takes up too much of your time. For example: 'I spend 2 hours every Monday manually updating our client database from emails and spreadsheets...'"
                          rows={5}
                          className="mt-2 rounded-xl border-border/50 focus:border-secondary/50"
                          required
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="up" delay={0.8}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full pill-button pill-button-primary hover-glow-lime text-lg py-6 group"
                        >
                          Book My Free Audit
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </ScrollAnimation>

                    <p className="text-xs text-muted-foreground text-center">
                      No spam, no sales pressure. Just valuable insights about your automation opportunities.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Right Column - Benefits & Alternative Contact */}
          <div className="space-y-8">
            {/* What You Get */}
            <ScrollAnimation direction="right">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">What You'll Get</h3>
                  <StaggerContainer className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <StaggerItem key={index}>
                        <motion.div 
                          className="flex items-start space-x-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Alternative Contact Methods */}
            <ScrollAnimation direction="right" delay={0.2}>
              <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border border-secondary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Prefer Another Way?</h3>
                  <p className="text-muted-foreground mb-6">
                    No problem! Reach out however works best for you.
                  </p>
                  <StaggerContainer className="space-y-4">
                    <StaggerItem>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className="w-full pill-button pill-button-secondary group"
                          onClick={() => window.open('https://calendly.com', '_blank')}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book on Calendly
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          variant="outline"
                          className="w-full pill-button group hover:bg-secondary/10 hover:border-secondary/30"
                          onClick={() => window.open('https://www.linkedin.com/in/dorian-crutcher/', '_blank')}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message on LinkedIn
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </StaggerItem>
                  </StaggerContainer>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Response Time */}
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="text-center">
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-secondary/10 rounded-full border border-secondary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-sm font-medium text-foreground">
                    I typically respond within 24 hours
                  </span>
                </motion.div>
              </div>
            </ScrollAnimation>

            {/* Quick Stats */}
            <ScrollAnimation direction="right" delay={0.6}>
              <StaggerContainer className="grid grid-cols-3 gap-4 text-center">
                <StaggerItem>
                  <motion.div 
                    className="p-4"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-secondary mb-1">2 weeks</div>
                    <div className="text-xs text-muted-foreground">Average setup time</div>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div 
                    className="p-4"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                    <div className="text-xs text-muted-foreground">Happy clients</div>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div 
                    className="p-4"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground">Agent uptime</div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}