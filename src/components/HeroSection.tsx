
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import VoiceAssistant from "./VoiceAssistant";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-background text-foreground"
      id="hero"
    >
      {/* Dynamic Motion Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-breath transition-transform duration-300"
          style={{ transform: 'translate(calc(var(--mouse-x) * -1.5), calc(var(--mouse-y) * -1.5))' } as any}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse-breath transition-transform duration-300"
          style={{ animationDelay: '2s', transform: 'translate(var(--mouse-x), var(--mouse-y))' } as any}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

          {/* Left Content */}
          <div className="flex-1 text-left space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border-primary/20 text-primary text-sm font-semibold tracking-wide animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span>Orion Innovation Solution</span>
            </div>

            <div className="space-y-10 mb-8">
              <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-[1.1] text-foreground">
                I am a <br />
                <span className="roles text-primary">
                  <span>Software Engineer</span>
                  <span>Fullstack Developer</span>
                  <span>Mobile App Developer</span>
                  <span>Designer</span>
                  <span>Python/Java Learner</span>
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <Button
                size="lg"
                className="rounded-full px-10 h-16 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex gap-4">
                <a
                  href="https://github.com/metiinie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass-morphism hover:bg-primary/10 hover:border-primary/40 transition-all text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/metinie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass-morphism hover:bg-primary/10 hover:border-primary/40 transition-all text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Layered Motion Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] md:w-[550px] md:h-[550px] border border-primary/5 rounded-full animate-spin-slow" />
              <div className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] border border-dashed border-primary/10 rounded-full animate-reverse-spin-slow" />
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute -inset-10 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />

              <div className="absolute -bottom-4 -left-4 glass-morphism px-6 py-4 rounded-3xl shadow-2xl animate-bounce-slow border-primary/20">
                <p className="text-xs font-black tracking-widest text-primary uppercase mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-bold text-sm text-foreground">Open for Work</span>
                </div>
              </div>

              <div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[6px] border-white/10 dark:border-white/5 shadow-[0_0_80px_rgba(37,99,235,0.1)] transition-all duration-700 transform group-hover:scale-[1.05] group-hover:rotate-2 shadow-2xl"
                style={{ transform: 'translate(calc(var(--mouse-x) * 0.5), calc(var(--mouse-y) * 0.5))' } as any}
              >
                <img
                  src="/my_profile.png"
                  alt="Awol Ibrahim Ayalew"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-60 pointer-events-none" />
              </div>
              <VoiceAssistant />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
