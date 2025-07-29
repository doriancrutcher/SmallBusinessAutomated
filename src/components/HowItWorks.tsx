import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Wrench, CheckSquare, TrendingUp, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <Search className="w-6 h-6" />,
      title: "Identify Time-Sucking Task",
      description: "We'll hop on a call to figure out what's eating up your time. Usually takes 15 minutes to spot the biggest opportunity.",
      details: ["Free 30-minute audit", "No commitment required", "Identify biggest pain points"]
    },
    {
      number: 2,
      icon: <Wrench className="w-6 h-6" />,
      title: "Design Your Custom Agent",
      description: "I'll map out exactly how your agent will work, what tools it needs, and how it fits into your existing workflow.",
      details: ["Custom workflow design", "Tool integration plan", "Clear timeline & pricing"]
    },
    {
      number: 3,
      icon: <CheckSquare className="w-6 h-6" />,
      title: "Approve and Build",
      description: "Once you're happy with the plan, I build your agent. You'll see progress updates and can test everything before it goes live.",
      details: ["Regular progress updates", "Test environment first", "Your approval at each step"]
    },
    {
      number: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Monitor and Refine",
      description: "Your agent starts working immediately. I monitor performance and make improvements based on real usage data.",
      details: ["Performance monitoring", "Continuous improvements", "Ongoing support included"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-secondary-foreground border-secondary/20">
            Simple Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What It's Like to Work
            <br />
            <span className="text-secondary">With Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No complicated sales process or lengthy contracts. Just a straightforward approach 
            to getting you the automation you need.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      {/* Step Number Circle */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto relative z-10 shadow-md">
                          <span className="text-2xl font-bold text-secondary-foreground">{step.number}</span>
                        </div>
                        <div className="w-20 h-20 bg-secondary/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>

                      {/* Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-md">
                        <span className="text-lg font-bold text-secondary-foreground">{step.number}</span>
                      </div>
                    </div>

                    <div className="flex-grow">
                      {/* Icon */}
                      <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mb-3">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{step.description}</p>

                      {/* Details */}
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Connection line for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-8 bg-secondary/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-3xl p-12 border border-secondary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Most clients see their first agent working within 2 weeks. 
              Let's chat about what's possible for your business.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="pill-button pill-button-primary hover-glow-lime text-lg px-10 py-4 group"
            >
              Book Your Free Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}