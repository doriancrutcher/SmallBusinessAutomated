import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { motion } from 'framer-motion';
import { Modal } from './Modal';
import { ProjectModalContent } from './ProjectModalContent';
import { useState } from 'react';
import { projects, Project } from '../data/projects';

export function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex-none w-72 md:w-80 lg:w-96"
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div 
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedId(project.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedId(project.id);
                      }
                    }}
                    tabIndex={0}
                    aria-label={`Open ${project.title} project details`}
                    role="button"
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30 h-full hover:shadow-[0_8px_30px_rgba(212,229,139,0.15)] transition-transform duration-200 hover:scale-[1.01]">
                      {/* Green under glow */}
                      <div 
                        className="pointer-events-none absolute inset-x-6 -bottom-3 h-6 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(212,229,139,0.45), rgba(212,229,139,0.0))' }}
                      />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <motion.div 
                          className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary"
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.icon}
                        </motion.div>
                        <Badge variant="outline" className="border-secondary/30 text-foreground">
                          {project.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Problem */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">The Problem</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      
                      {/* App Built */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">{project.builtLabel || "AI Agent Built"}</h4>
                        <p className="text-sm font-medium text-secondary">{project.agent}</p>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Tools Used</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.toolsUsed.map(tool => (
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
                          {project.results.map((result, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="pt-2 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
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
                    </div>
                  </motion.div>
              ))}
            </div>
            
            {/* Gradient overlay on the right */}
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none"></div>
          </div>
        </ScrollAnimation>

        {/* Project Modal */}
        {selectedId !== null && (() => {
          const activeProject = projects.find(p => p.id === selectedId);
          if (!activeProject) return null;
          
          return (
            <Modal
              isOpen={selectedId !== null}
              onClose={() => setSelectedId(null)}
              title={activeProject.title}
            >
              <ProjectModalContent
                title={activeProject.title}
                meta={activeProject.meta}
                problem={activeProject.problem}
                builtLabel={activeProject.builtLabel}
                builtValue={activeProject.agent}
                tools={activeProject.toolsUsed}
                results={activeProject.results}
                summary={activeProject.description}
                videoUrl={activeProject.videoUrl}
                links={activeProject.links}
              />
            </Modal>
          );
        })()}

      </div>
    </section>
  );
}