import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, Bot, Zap, Headphones, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Workflow Audits",
      description: "I'll spend time understanding your business and identify the biggest automation opportunities",
      features: [
        "30-minute free consultation",
        "Process mapping & analysis", 
        "ROI projections for each opportunity",
        "Prioritized action plan"
      ],
      pricing: "Free for first audit",
      popular: false
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Custom Agent Development", 
      description: "From simple task automation to complex decision-making agents - built specifically for your workflow",
      features: [
        "Fully custom AI agents",
        "Integration with your existing tools",
        "Testing environment before go-live",
        "Performance monitoring & optimization"
      ],
      pricing: "Starting at $1,500",
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Zapier + Notion Integrations",
      description: "Connect your tools and create automated workflows that keep your data organized and accessible",
      features: [
        "Multi-platform integrations", 
        "Custom Notion databases",
        "Automated reporting dashboards",
        "Data sync & backup systems"
      ],
      pricing: "Starting at $500",
      popular: false
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Because automation isn't set-and-forget. I monitor, maintain, and improve your agents over time",
      features: [
        "24/7 agent monitoring",
        "Monthly performance reports",
        "Continuous improvements",
        "Priority support & updates"
      ],
      pricing: "$200-500/month",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-secondary-foreground border-secondary/20">
            What I Offer
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What I Can Build
            <br />
            <span className="text-secondary">For You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you need a simple automation or a complex AI agent, 
            I'll work directly with you to build exactly what your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                service.popular ? 'border-2 border-secondary shadow-lg glow-lime' : 'hover:border-secondary/30'
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  service.popular ? 'bg-secondary/20' : 'bg-primary/5'
                }`}>
                  <div className={service.popular ? 'text-secondary' : 'text-primary'}>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className={`text-lg font-semibold ${
                  service.popular ? 'text-secondary' : 'text-primary'
                }`}>
                  {service.pricing}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 ${
                        service.popular ? 'bg-secondary' : 'bg-primary'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full mt-6 pill-button group transition-all duration-300 ${
                    service.popular 
                      ? 'pill-button-primary hover-glow-lime' 
                      : 'pill-button-secondary hover:bg-secondary/10'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-3xl p-12 border border-secondary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every project begins with a free workflow audit. I'll help you identify 
              the biggest opportunities and create a plan that makes sense for your budget.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="pill-button pill-button-primary hover-glow-lime text-lg px-10 py-4"
            >
              Book Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}