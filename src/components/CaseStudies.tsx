import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ExternalLink, Play } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { motion } from 'framer-motion';
import { Modal } from './Modal';
import { ProjectModalContent } from './ProjectModalContent';
import { useState } from 'react';
import { projects } from '../data/projects';

export function CaseStudies() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Debug log for mobile issues
  console.log('CaseStudies component loaded, projects count:', projects.length);

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
              Projects
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             These projects are a mixture of my work in developer relations, Startups I was a part of , and my own projects. Click on them to learn more!
            </p>
          </ScrollAnimation>
        </div>



        {/* Project Gallery Grid */}
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="relative">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-4 pt-4"
              style={{ minHeight: '200px' }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
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
                    <Card className="project-card group hover:shadow-[0_8px_30px_rgba(212,229,139,0.15)] transition-all duration-300 border-2 hover:border-secondary/30 h-full hover:scale-[1.005]">
                      {/* Green under glow */}
                      <div 
                        className="pointer-events-none absolute inset-x-6 -bottom-3 h-6 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(212,229,139,0.45), rgba(212,229,139,0.0))' }}
                      />
                      
                      {/* Card Content - Priority: Video > Screenshot > Icon */}
                      <div className="flex flex-col h-full">
                        {project.videoUrl ? (
                          // Video Card - Primary
                          <div className="relative h-32 bg-muted/20 overflow-hidden rounded-t-lg">
                            <img 
                              src={`https://img.youtube.com/vi/${project.videoUrl.split('embed/')[1]?.split('?')[0]}/hqdefault.jpg`}
                              alt={`${project.title} video thumbnail`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://img.youtube.com/vi/${project.videoUrl.split('embed/')[1]?.split('?')[0]}/default.jpg`;
                              }}
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                              <motion.div 
                                className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/30"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Play className="w-6 h-6 text-white ml-1 drop-shadow-lg" fill="currentColor" />
                              </motion.div>
                            </div>
                          </div>
                        ) : project.screenshot ? (
                          // Screenshot Card - Secondary
                          <div className="relative h-32 bg-muted/20 overflow-hidden rounded-t-lg">
                            <img 
                              src={project.screenshot}
                              alt={`${project.title} screenshot`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              style={{ 
                                objectPosition: project.id === 'pigeonQuill' 
                                  ? 'center 10%' 
                                  : 'center center' 
                              }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `
                                  <div class="w-full h-full flex items-center justify-center bg-muted/10 rounded-t-lg">
                                    <div class="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                                      ${project.icon}
                                    </div>
                                  </div>
                                `;
                              }}
                            />
                          </div>
                        ) : (
                          // Icon Card - Fallback
                          <div className="h-32 flex items-center justify-center bg-muted/10 rounded-t-lg">
                            <motion.div 
                              className="w-20 h-20 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary"
                              whileHover={{ rotate: 5, scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {project.icon}
                            </motion.div>
                          </div>
                        )}
                        
                        {/* Text Content - Same for all card types */}
                        <div className="flex-1 p-4 flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="border-secondary/30 text-foreground text-xs">
                              {project.industry}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">{project.title}</h3>
                          <p className="text-sm text-foreground/80 line-clamp-2 leading-relaxed flex-1">{project.description}</p>
                        </div>
                      </div>
                      
                      <CardContent className="pt-0">
                        {/* Click to learn more hint - positioned below the content */}
                        <motion.div 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-secondary text-sm font-medium py-4 mt-8"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span className="text-secondary">Click to learn more</span>
                          <ExternalLink className="w-4 h-4 ml-2 text-secondary" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
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