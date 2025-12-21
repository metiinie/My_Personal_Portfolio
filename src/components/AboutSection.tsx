
import { Card, CardContent } from "@/components/ui/card";
import { Book, Code, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: "Development",
              desc: "Passionate about building excellent software that improves lives of those around me (Local Market).",
              delay: "200ms"
            },
            {
              icon: Star,
              title: "Experience",
              desc: "Over 1 years of experience in developing web applications and solving complex problems.",
              delay: "400ms"
            },
            {
              icon: Book,
              title: "Education",
              desc: "Constantly learning and keeping up with the latest technologies and best practices.",
              delay: "600ms"
            }
          ].map((item, idx) => (
            <Card
              key={idx}
              className="glass-morphism border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-up"
              style={{ animationDelay: item.delay }}
            >
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="rounded-2xl bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
