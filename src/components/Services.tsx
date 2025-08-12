import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Bot, Zap, Database, Globe, Smartphone, ArrowRight } from "lucide-react";

export function Services() {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building fast, responsive interfaces with React, Next.js, and Vite. Drawing on my Developer Relations background, I design UIs that guide users intuitively from first click to confident usage, ensuring speed and accessibility.",
      technologies: [
        "React & Next.js",
        "Vite",
        "TypeScript & JavaScript",
        "Tailwind CSS & Styled Components",
        "Responsive Design & Accessibility"
      ],
      level: "Expert",
      popular: true
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Creating robust server-side applications and APIs that power modern web applications",
      technologies: [
        "Node.js & Express",
        "Python & FastAPI",
        "Firebase & AWS",
        "PostgreSQL & MongoDB",
        "RESTful APIs & GraphQL"
      ],
      level: "Advanced",
      popular: false
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Applications",
      description: "Building intelligent applications and AI agents that automate workflows and enhance user experiences using modern AI tools and platforms",
      technologies: [
        "AI Agent Development",
        "Zapier & Relevance AI",
        "OpenAI API Integration",
        "Workflow Automation"
      ],
      level: "Advanced",
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Developer Education & Engagement",
      description: "Creating resources and experiences that help developers learn, adopt, and succeed with technology",
      technologies: [
        "Live Coding Workshops",
        "Technical Documentation",
        "API Demos & Tutorials",
        "Community Building"
      ],
      level: "Advanced",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-foreground border-secondary/20">
            Technical Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
            <br />
            <span className="text-secondary">I Master</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From frontend frameworks to backend systems, I bring a comprehensive skill set 
            to every project. Here's what I can build for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`relative h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                skill.popular ? 'border-2 border-secondary shadow-lg glow-lime' : 'hover:border-secondary/30'
              }`}
            >
              {skill.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-foreground px-4 py-1">
                  Core Strength
                </Badge>
              )}
              
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  skill.popular ? 'bg-secondary/20' : 'bg-primary/5'
                }`}>
                  <div className={skill.popular ? 'text-secondary' : 'text-primary'}>
                    {skill.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{skill.title}</CardTitle>
                <div className={`text-lg font-semibold ${
                  skill.popular ? 'text-secondary' : 'text-primary'
                }`}>
                  {skill.level}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
                
                <ul className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 ${
                        skill.popular ? 'bg-secondary' : 'bg-primary'
                      }`}></div>
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => skill.title === "Frontend Development" 
                    ? window.open('https://github.com/doriancrutcher?tab=repositories', '_blank')
                    : skill.title === "Backend Development"
                    ? window.open('https://github.com/doriancrutcher?tab=repositories', '_blank')
                    : skill.title === "AI-Powered Applications"
                    ? window.open('https://www.youtube.com/shorts/RyJiqfWZEJE', '_blank')
                    : document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className={`w-full mt-6 pill-button group transition-all duration-300 flex items-center justify-center ${
                    skill.popular 
                      ? 'pill-button-primary hover-glow-lime' 
                      : 'pill-button-secondary hover:bg-secondary/10'
                  }`}
                >
                  <span>{skill.title === "Frontend Development" || skill.title === "Backend Development" ? "View GitHub Projects" : skill.title === "AI-Powered Applications" ? "Watch AI Demo" : "See Examples"}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}