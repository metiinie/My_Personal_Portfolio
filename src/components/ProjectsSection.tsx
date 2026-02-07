
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Layout, Smartphone, Code2, Database, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Mobile App', 'Web App', 'Utility'];

  const projects = [
    {
      title: "FreeLync",
      category: "Full Stack",
      subCategory: "Real Estate & Escrow",
      description: "A secure digital brokerage platform for property and vehicle trading. Features verified listings, integrated escrow system, and real-time transaction notifications.",
      image: "/SebahLync_project.png",
      github: "https://github.com/metiinie/SebahLync",
      demo: "https://free-lync-site.vercel.app/",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      icon: <Globe className="w-4 h-4" />
    },
    {
      title: "Unique-Equb",
      category: "Mobile App",
      subCategory: "Fintech / Communal Savings",
      description: "Digital platform for Ethiopia's traditional Equb. Modernizes communal savings with automated payouts, real-time analytics, and secure financial reporting.",
      image: "/equb.jpg",
      github: "https://github.com/metiinie/Unique_Equb_Mob_App",
      demo: "https://expo.dev/accounts/abu-mahi/projects/unique-equb/builds/b4487bb3-3629-46d3-ab23-ce4cb6e874ee",
      tags: ["React Native", "Expo", "NativeWind", "Neon DB"],
      icon: <Smartphone className="w-4 h-4" />
    },
    {
      title: "Combined Streaming",
      category: "Full Stack",
      subCategory: "Media & SaaS",
      description: "A hybrid Netflix/Spotify platform. Features AI-powered recommendations, multi-format streaming, and a high-performance admin dashboard.",
      image: "/sebahnetstream.png",
      github: "https://github.com/metiinie/Combined_Streaming",
      demo: "https://sebahnets1.netlify.app",
      tags: ["TypeScript", "Supabase", "React Player", "Zustand"],
      icon: <Layout className="w-4 h-4" />
    },
    {
      title: "Nexus Tool",
      category: "Utility",
      subCategory: "Gamified Productivity",
      description: "Combat procrastination with a gamified task manager. Earn XP and achievements while managing team missions in a futuristic holographic interface.",
      image: "/tracking.png",
      github: "https://github.com/metiinie/Nexus--tool",
      demo: "https://nexus-phi-gules.vercel.app",
      tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
      icon: <Code2 className="w-4 h-4" />
    },
    {
      title: "EthioCare Clinic",
      category: "Web App",
      subCategory: "Healthcare Management",
      description: "Digital clinic ecosystem for appointment booking, medical history tracking, and patient-doctor communication with automated scheduling.",
      image: "/Clinic.png",
      github: "https://github.com/metiinie/Clinic_Appointment_System",
      demo: "https://clinic-appointment-system-j0lu5zvdt-metin-solutions-projects.vercel.app/",
      tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
      icon: <Database className="w-4 h-4" />
    },
  ];

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projects
      : projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6 animate-fade-up">
          <div className="inline-flex flex-col items-center">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              Featured <span className="text-primary">Works.</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mt-4" />
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed font-medium">
            A curated collection of digital experiences, ranging from <br className="hidden md:block" />
            fintech solutions to complex fullstack architectures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setFilter(cat)}
              variant={filter === cat ? "default" : "outline"}
              className={cn(
                "rounded-full px-8 py-6 text-sm font-bold transition-all duration-300",
                filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass-morphism border-white/10 hover:border-primary/50"
              )}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group premium-card animate-fade-up border-none overflow-visible"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category Badge on Image */}
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.icon}
                  <span className="text-[10px] font-black tracking-widest uppercase">{project.category}</span>
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex gap-4 scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Button size="icon" className="h-12 w-12 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all shadow-xl" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer" title="Github Repository">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="icon" className="h-12 w-12 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all shadow-xl" asChild>
                      <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-0 space-y-4 px-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{project.subCategory}</p>
                    <h3 className="text-2xl font-black group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                    </h3>
                  </div>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition-colors group/link">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover/link:text-primary transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center animate-fade-up">
          <div className="glass-morphism p-10 rounded-[3rem] border-white/10 max-w-4xl mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-4">Want to see more technical details?</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Check out my GitHub for more open-source contributions, <br className="hidden md:block" />
                system architectures, and experimental projects.
              </p>
              <Button size="lg" className="rounded-full px-10 h-14 bg-primary text-white font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20" asChild>
                <a href="https://github.com/metiinie" target="_blank" rel="noreferrer">
                  Explore All Repositories
                  <Github className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
