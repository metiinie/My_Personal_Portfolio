
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Server,
  Wrench,
  Palette,
  Database
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Palette className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS",],
      color: "blue"
    },
    {
      title: "Backend Core",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "Supabase", "Python", "REST APIs"],
      color: "purple"
    },
    {
      title: "Data Architecture",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "Neon"],
      color: "green"
    },
    {
      title: "Developer Experience",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Notion", "Vite", "Postman", "formspree.io"],
      color: "orange"
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-5xl font-black tracking-tight underline underline-offset-8 decoration-primary/30">Skills.</h2>
          <p className="text-muted-foreground text-lg">
            Proficient in the technologies I use daily, including:-
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="premium-card h-full p-10 flex flex-col gap-8 hover:bg-white/[0.04] transition-all">
                <div className="w-14 h-14 rounded-[1.25rem] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-110 group-hover:rotate-6">
                  {cat.icon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black tracking-tight">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                        <span className="text-sm font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Professional Proficiency</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default SkillsSection;
