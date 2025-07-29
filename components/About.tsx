import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bot, Code, Users, Zap, MessageCircle, Calendar } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <Bot className="w-6 h-6" />,
      value: "10+",
      label: "Agents Built",
      description: "Custom AI solutions deployed"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "15+",
      label: "Happy Clients",
      description: "Businesses automated successfully"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: "500+", 
      label: "Hours Saved",
      description: "Per month across all clients"
    },
    {
      icon: <Code className="w-6 h-6" />,
      value: "5+",
      label: "Years",
      description: "Developer Relations experience"
    }
  ];

  const expertise = [
    {
      icon: <Bot className="w-5 h-5" />,
      title: "AI Agent Development",
      description: "Custom agents using OpenAI, RelevanceAI, and other cutting-edge platforms"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Workflow Automation", 
      description: "Zapier, Make.com, and custom API integrations to connect your tools"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "System Integration",
      description: "Connecting existing software and databases for seamless data flow"
    }
  ];

  const timeline = [
    {
      year: "2019-2024",
      title: "Developer Relations",
      description: "Worked with hundreds of developers and businesses to implement technical solutions"
    },
    {
      year: "2023",
      title: "First AI Agent",
      description: "Built my first business automation agent and saw the immediate impact"
    },
    {
      year: "2024",
      title: "Small Business Automated",
      description: "Launched to help small businesses leverage AI agents for growth"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-secondary/10 text-secondary-foreground border-secondary/20">
            Who You're Working With
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Just Me —{' '}
            <span className="text-secondary">Dorian</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a solo engineer who loves automation and helping business owners get their time back. 
            You won't get passed around — you work directly with me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - About Content */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="border-2 border-secondary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  {/* Profile Avatar Placeholder */}
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">D</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Dorian</h3>
                    <p className="text-lg text-secondary font-medium">AI Automation Engineer</p>
                    <p className="text-sm text-muted-foreground">Solo founder, direct communication</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  After 5+ years in Developer Relations, I've seen firsthand how the right automation 
                  can transform a business. I started Small Business Automated because I believe every 
                  business owner deserves access to the same AI tools that big companies use.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Why Work With Me?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">
                        <strong>Direct communication:</strong> No account managers or middlemen
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">
                        <strong>Business-first approach:</strong> I understand operations, not just code
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">
                        <strong>Long-term partnership:</strong> I'm here for ongoing support and improvements
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Expertise */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-6">What I Specialize In</h4>
              <div className="space-y-4">
                {expertise.map((skill, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                          {skill.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{skill.title}</h5>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Timeline */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="font-semibold text-sm mb-2">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Timeline */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-6">My Journey</h4>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        {index < timeline.length - 1 && <div className="w-px h-12 bg-secondary/30 mt-2"></div>}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-semibold text-secondary">{item.year}</span>
                          <span className="text-sm font-semibold text-foreground">{item.title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Links */}
            <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border border-secondary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-4">Let's Connect</h4>
                <div className="flex justify-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-secondary-foreground">LinkedIn</span>
                  </button>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-secondary-foreground">Book a Call</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}