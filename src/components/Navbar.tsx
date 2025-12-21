
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                className={cn(
                    "w-full max-w-4xl glass-morphism rounded-full px-6 py-3 transition-all duration-500 pointer-events-auto",
                    isScrolled ? "py-2 shadow-2xl scale-[0.98]" : "py-4 shadow-xl"
                )}
            >
                <div className="flex justify-between items-center">
                    <span
                        className="text-2xl font-black tracking-tighter text-primary cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Orion🌙
                    </span>
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Button
                                key={link.id}
                                variant="ghost"
                                onClick={() => scrollToSection(link.id)}
                                className="rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                            >
                                {link.name}
                            </Button>
                        ))}
                        <Button
                            onClick={() => scrollToSection('contact')}
                            className="rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 ml-4 hover:scale-105 transition-transform"
                        >
                            Let's Talk
                        </Button>
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" className="rounded-full">Menu</Button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
