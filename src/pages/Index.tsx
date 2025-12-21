
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-active");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll(".section-reveal");
        revealElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
            {/* Global Grain/Noise Overlay for Texture */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <main>
                <div className="section-reveal">
                    <HeroSection />
                </div>

                <div className="section-reveal">
                    <AboutSection />
                </div>

                <div className="section-reveal">
                    <ProjectsSection />
                </div>

                <div className="section-reveal">
                    <SkillsSection />
                </div>

                <div className="section-reveal">
                    <ContactSection />
                </div>
            </main>
        </div>
    );
};

export default Index;
