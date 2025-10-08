import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Wrench, CheckSquare, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <Search className="w-6 h-6" />,
      title: "Understand the Environment",
      description: "Begin with deep discovery to uncover the customer's workflow, existing systems, and core challenges. The goal is to define measurable success criteria that guide solution design.",
      details: ["Technical discovery and needs analysis", "Stakeholder alignment", "Success metric definition"]
    },
    {
      number: 2,
      icon: <Wrench className="w-6 h-6" />,
      title: "Design & Validate",
      description: "Collaborate with technical and business teams to design an architecture and workflow that fit the customer's goals. Prototype early to validate assumptions and demonstrate value.",
      details: ["Solution architecture & integration mapping", "Proof-of-concept (PoC) or demo design", "Technical validation checkpoints"]
    },
    {
      number: 3,
      icon: <CheckSquare className="w-6 h-6" />,
      title: "Build & Demonstrate",
      description: "Develop or configure the solution prototype, ensuring it clearly demonstrates the desired outcomes. Tailor the demo to different audiences, from engineers to executives.",
      details: ["Hands-on configuration or development", "Iterative demo refinement", "Business value storytelling"]
    },
    {
      number: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Enable & Optimize",
      description: "Work with customer teams post-validation to ensure successful adoption, training, and ongoing performance optimization.",
      details: ["Knowledge transfer & documentation", "Post-deployment enablement", "Feedback loop for continuous improvement"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-foreground border-secondary/20">
            My Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collaborative, technical approach focused on discovery, validation, and enablement 
            ensuring each solution is aligned with business outcomes and technical excellence.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 process-card">
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


                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="hover:shadow-lg transition-all duration-300 process-card">
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


      </div>
    </section>
  );
}