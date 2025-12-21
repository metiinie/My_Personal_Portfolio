
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SebahLync Marketplace",
      category: "Full Stack / Real Estate",
      description: "A revolutionary peer-to-peer marketplace that eliminates middlemen, allowing direct property transactions with automated verification.",
      image: "/SebahLync_project.png",
      github: "https://github.com/metiinie/SebahLync",
      demo: "#",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"]
    },
    {
      title: "SebahNet Streaming",
      category: "Media / SaaS",
      description: "A hybrid streaming ecosystem combining high-definition video on-demand and lossless audio streaming with AI-powered discovery.",
      image: "/sebahnetstream.png",
      github: "https://github.com/metiinie/Sebah_Net",
      demo: "#",
      tags: ["TypeScript", "Supabase", "React Player", "Zustand"]
    },
    {
      title: "Scientific OS Calculator",
      category: "Utility / Desktop",
      description: "An advanced mathematical engine with symbolic computation features and a sleek, OS-integrated design for professionals.",
      image: "/ad_calculator.png",
      github: "https://github.com/metiinie/Advanced_Scientific_Calculator",
      demo: "#",
      tags: ["Java Swing", "MathEngine API", "Native Desktop"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-background/50">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-fade-up">
          <div className="inline-block space-y-4">
            <h2 className="text-xl md:text-3xl font-black tracking-tight">Sample <span className="text-primary">Projects.</span></h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto transition-all duration-700 hover:w-48" />
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed font-medium">
            Building digital solutions that solve complex problems and provide <br className="hidden md:block" /> seamless user experiences across all platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group premium-card animate-fade-up border-none"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-3">
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-primary hover:text-white" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer"><Github className="h-5 w-5" /></a>
                    </Button>
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-primary hover:text-white" asChild>
                      <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink className="h-5 w-5" /></a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-0 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{project.category}</p>
                    <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors hover:translate-x-1 hover:-translate-y-1 duration-300" />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
