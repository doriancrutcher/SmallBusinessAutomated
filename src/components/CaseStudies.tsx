import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, Calendar, MessageSquare, FileText, Zap, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { motion } from 'framer-motion';

export function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const caseStudies = [
    {
      title: "Property Management Company",
      industry: "Rental",
      problem: "Spending 15 hours/week manually coordinating maintenance requests between tenants, contractors, and landlords",
      toolsUsed: ["RelevanceAI", "Zapier", "Notion"],
      agent: "Maintenance Coordinator Agent",
      results: {
        timeSaved: "12 hours/week",
        efficiency: "80% faster response",
        satisfaction: "95% tenant satisfaction"
      },
      description: "Built an AI agent that automatically triages maintenance requests, schedules contractors, and keeps everyone updated via SMS.",
      icon: <Bot className="w-5 h-5" />,
      tags: ["Rental", "RelevanceAI", "Automation"]
    },
    {
      title: "Local Marketing Agency",
      industry: "Marketing",
              problem: "Reporting took 2 days every month - pulling data from 5 different platforms manually",
      toolsUsed: ["Make.com", "Google Sheets", "Slack"],
      agent: "Report Generation Agent",
      results: {
        timeSaved: "16 hours/month", 
        efficiency: "90% faster reporting",
        satisfaction: "Team loves the consistency"
      },
        description: "Created an agent that pulls performance data from all platforms and generates beautiful reports automatically.",
      icon: <TrendingUp className="w-5 h-5" />,
      tags: ["Marketing", "Make.com", "Reporting"]
    },
    {
      title: "Healthcare Practice",
      industry: "Healthcare", 
      problem: "Appointment no-shows costing $3K/month, plus staff spending hours on confirmation calls",
      toolsUsed: ["Calendly", "Twilio", "Custom API"],
      agent: "Appointment Shepherd Agent",
      results: {
        timeSaved: "20 hours/month",
        efficiency: "60% fewer no-shows", 
        satisfaction: "$2K+ monthly savings"
      },
      description: "Built an intelligent reminder system that adapts messaging based on patient history and appointment type.",
      icon: <Calendar className="w-5 h-5" />,
      tags: ["Healthcare", "Calendly", "SMS"]
    },
    {
      title: "E-commerce Store",
      industry: "Retail",
      problem: "Customer service emails piling up - taking 2-3 days to respond to simple questions about orders and returns",
      toolsUsed: ["OpenAI", "Shopify API", "Gmail"],
      agent: "Customer Service Agent", 
      results: {
        timeSaved: "25 hours/week",
        efficiency: "Instant responses",
        satisfaction: "4.8/5 customer rating"
      },
      description: "Deployed an AI that handles 80% of customer emails automatically, escalating complex issues to human staff.",
      icon: <MessageSquare className="w-5 h-5" />,
      tags: ["Retail", "OpenAI", "Customer Service"]
    },
    {
      title: "Consulting Firm", 
      industry: "Professional Services",
              problem: "Proposal writing taking 8+ hours per project, plus tracking follow-ups manually in spreadsheets",
      toolsUsed: ["Notion", "DocuSign", "Pipedrive"],
      agent: "Proposal & Follow-up Agent",
      results: {
        timeSaved: "30 hours/month",
        efficiency: "50% higher close rate",
        satisfaction: "Zero missed follow-ups"
      },
      description: "Agent generates custom proposals from templates and manages the entire follow-up sequence automatically.",
      icon: <FileText className="w-5 h-5" />,
      tags: ["Consulting", "Notion", "Sales"]
    },
    {
      title: "Fitness Studio Chain",
      industry: "Fitness",
      problem: "Managing class schedules, instructor assignments, and member communications across 3 locations manually",
      toolsUsed: ["MindBody", "Slack", "Google Calendar"],
      agent: "Studio Operations Agent",
      results: {
        timeSaved: "15 hours/week",
        efficiency: "Zero scheduling conflicts",
        satisfaction: "Happier instructors & members"
      },
      description: "Coordinates schedules, handles substitutions, and sends targeted communications to members about their favorite classes.",
      icon: <Zap className="w-5 h-5" />,
      tags: ["Fitness", "MindBody", "Scheduling"]
    },
    {
      title: "Real Estate Agency",
      industry: "Real Estate",
      problem: "Lead qualification taking 3+ hours daily, plus missed follow-ups causing lost deals",
      toolsUsed: ["HubSpot", "Calendly", "SMS API"],
      agent: "Lead Qualification Agent",
      results: {
        timeSaved: "20 hours/week",
        efficiency: "85% lead qualification accuracy",
        satisfaction: "30% more closed deals"
      },
      description: "Automatically qualifies leads, schedules viewings, and nurtures prospects with personalized follow-up sequences.",
      icon: <TrendingUp className="w-5 h-5" />,
      tags: ["Real Estate", "HubSpot", "Lead Gen"]
    },
    {
      title: "Restaurant Chain",
      industry: "Food Service",
      problem: "Inventory management across 4 locations taking full days each week, frequent stockouts",
      toolsUsed: ["Toast POS", "Google Sheets", "Slack"],
      agent: "Inventory Management Agent",
      results: {
        timeSaved: "18 hours/week",
        efficiency: "90% reduction in stockouts",
        satisfaction: "$5K+ monthly savings"
      },
      description: "Monitors inventory levels in real-time, predicts demand, and automatically reorders supplies before stockouts occur.",
      icon: <Bot className="w-5 h-5" />,
      tags: ["Food Service", "Toast", "Inventory"]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollAnimation direction="up">
            <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-foreground border-secondary/20">
              Real Results
            </Badge>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Projects & Impact
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every project is different, but the results are consistently the same: 
              more time, less stress, and systems that actually work.
            </p>
          </ScrollAnimation>
        </div>

        {/* Carousel Navigation */}
        <ScrollAnimation direction="up" delay={0.6}>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Scroll to explore projects</span>
              <div className="hidden sm:flex space-x-2">
                <motion.button
                  onClick={scrollLeft}
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </motion.button>
                <motion.button
                  onClick={scrollRight}
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Horizontal Scrolling Carousel */}
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-72 md:w-80 lg:w-96"
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-secondary/30 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <motion.div 
                          className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary"
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {study.icon}
                        </motion.div>
                        <Badge variant="outline" className="border-secondary/30 text-foreground">
                          {study.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Problem */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">The Problem</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
                      </div>
                      
                      {/* Agent Used */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">AI Agent Built</h4>
                        <p className="text-sm font-medium text-secondary">{study.agent}</p>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Tools Used</h4>
                        <div className="flex flex-wrap gap-1">
                          {study.toolsUsed.map(tool => (
                            <Badge key={tool} variant="secondary" className="text-xs bg-secondary/10 text-foreground border-secondary/20">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-3">Results</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Time Saved</span>
                            <span className="text-sm font-semibold text-secondary">{study.results.timeSaved}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Efficiency</span>
                            <span className="text-sm font-semibold text-secondary">{study.results.efficiency}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Impact</span>
                            <span className="text-sm font-semibold text-secondary">{study.results.satisfaction}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="pt-2 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.description}</p>
                      </div>

                      {/* Hover effect - Learn More */}
                      <motion.div 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-secondary text-sm font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span>Learn more about this project</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Gradient overlay on the right */}
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none"></div>
          </div>
        </ScrollAnimation>


      </div>
    </section>
  );
}