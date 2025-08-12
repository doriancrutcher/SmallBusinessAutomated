import { Card, CardContent } from "@/components/ui/card";
import { Bot, Code, Users, Zap, Github, Linkedin, Mail, Presentation } from "lucide-react";
import { motion } from 'framer-motion';

export function About() {
  const stats = [
    {
      icon: <Code className="w-6 h-6" />,
      value: "5+",
      label: "Years Experience",
      description: "Full-stack development & relations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "20+",
      label: "Projects Completed",
      description: "From concept to deployment"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: "10x",
      label: "Product Engagement",
      description: "Increase in user activity"
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      value: "50+",
      label: "Workshops Taught",
      description: "Modern tech stack"
    }
  ];

  const expertise = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full-Stack Development",
      description: "React, Node.js, Python, and modern web technologies"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "AI & Machine Learning", 
      description: "Building intelligent applications and AI solutions"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "System Architecture",
      description: "Designing scalable, maintainable software systems"
    }
  ];

  const timeline = [
    {
      year: "2019-2023",
      title: "Developer Relations",
      description: "Worked with hundreds of developers and teams to implement technical solutions"
    },
    {
      year: "2023-2024",
      title: "Audioh – Co-Founder & Product Technical Manager",
      description: "Co-founded the first audiobook-book club app with friends. Built innovative features combining audio content with social reading experiences."
    },
    {
      year: "2024 - Today",
      title: "STERIS – Technical Solutions Engineer (Medical Technology)",
              description: "Worked with healthcare providers to deliver tailored technical solutions. Led on-site diagnostics, repairs, and preventive maintenance. Coordinated installation projects and ensured seamless integration, resulting in improved service delivery and team satisfaction."
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Hi, I'm{' '}
            <span className="text-secondary">Dorian</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Solutions Engineer & Developer Relations Specialist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I connect people and technology to turn ideas into impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          {/* Left Column - About Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Profile Card */}
            <Card className="border-2 border-secondary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  {/* Profile Avatar */}
                  <img 
                    src="/dorianheadshot.jpeg" 
                    alt="Dorian" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-secondary/20"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Dorian</h3>
                    <p className="text-lg text-secondary font-medium">Developer Relations</p>
                    <p className="text-sm text-muted-foreground">AI Enthusiast & Problem Solver</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I've spent 5+ years building and delivering solutions that work — from custom applications to complex system integrations. My work spans full-stack development, developer education, and AI-driven automation, always with a focus on practical, scalable, and user-friendly results. I've led live coding workshops for 50+ developers, brought creative solutions to hackathons, and grown YouTube engagement from hundreds to <strong>10,000+</strong>.
                </p>


              </CardContent>
            </Card>

            {/* What I Bring - Transformed from Custom Solutions */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-6">What I Bring</h4>
              <div className="grid grid-cols-1 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="bg-secondary/5 border-secondary/20 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                          <Code className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Translating Business Needs into Technical Solutions</h5>
                          <p className="text-sm text-muted-foreground">Turning client challenges into actionable, efficient, and scalable technical plans.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Card className="bg-secondary/5 border-secondary/20 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Rapid Prototyping & Iteration</h5>
                          <p className="text-sm text-muted-foreground">Building and testing solutions quickly to validate ideas and adapt based on feedback.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Card className="bg-secondary/5 border-secondary/20 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Clear Communication Across Teams</h5>
                          <p className="text-sm text-muted-foreground">Bridging technical and non-technical stakeholders to ensure alignment and successful delivery.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Timeline */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300 metric-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mx-auto mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="font-semibold text-sm mb-2">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-6">My Journey</h4>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex space-x-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      >
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
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border border-secondary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-4">Let's Connect</h4>
                  <div className="flex justify-center space-x-4">
                    <button 
                      onClick={() => window.open('https://www.linkedin.com/in/dorian-crutcher/', '_blank')}
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-foreground">LinkedIn</span>
                    </button>
                    <button 
                      onClick={() => window.open('https://github.com/doriancrutcher', '_blank')}
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
                    >
                      <Github className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-foreground">GitHub</span>
                    </button>
                    <button 
                      onClick={() => window.open('mailto:crutcherdorian@gmail.com')}
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-foreground">Email Me</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}