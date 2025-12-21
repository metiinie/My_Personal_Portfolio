
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter">LET'S <br /><span className="text-primary underline decoration-primary/20">Touch In.</span></h2>
              <p className="text-xl text-muted-foreground max-w-md font-medium">
                Got a project in mind? We should talk about how I can help you bring your vision to life.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "abumahilkerim@gmail.com", href: "mailto:abumahilkerim@gmail.com" },
                { icon: Phone, label: "Phone", value: "+251 918 982 161", href: "tel:+251918982161" },
                { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: "#" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-center gap-6 p-4 rounded-3xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-bold group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { Icon: Github, href: "https://github.com/metiinie" },
                { Icon: Linkedin, href: "https://linkedin.com/in/metinie" }
              ].map((social, idx) => (
                <Button key={idx} variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-white/10 glass-morphism hover:bg-primary/10 hover:border-primary/40 transition-all group" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.Icon className="h-6 w-6 group-hover:text-primary transition-colors" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <div className="premium-card p-12 bg-white/[0.02] border-white/5 backdrop-blur-2xl">
              <form
                action="https://formspree.io/f/xqezqygk"
                method="POST"
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Full Name</label>
                    <Input
                      name="name"
                      required
                      placeholder="Awol Ibrahim"
                      className="h-14 rounded-2xl bg-white/[0.03] border-white/5 focus:border-primary/50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="abumahilkerim@gmail.com"
                      className="h-14 rounded-2xl bg-white/[0.03] border-white/5 focus:border-primary/50 transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Project Message</label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="min-h-[180px] rounded-3xl bg-white/[0.03] border-white/5 focus:border-primary/50 transition-all font-medium resize-none p-5"
                  />
                </div>
                <Button type="submit" className="w-full h-16 rounded-2xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 transition-all group">
                  Send Message
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Modern Footer */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-sm font-medium">© 2025 AWOL IBRAHIM. BUILT WITH INNOVATION & SKILL.</p>
          <div className="flex gap-10">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(item => (
              <a key={item} href="#" className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
