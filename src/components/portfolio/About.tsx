import { User, Calendar, Languages, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const personalInfo = [
  { icon: User, label: "Age", value: "27 years" },
  { icon: Calendar, label: "Experience", value: "5+ years" },
  { icon: Languages, label: "Languages", value: "Arabic, French, English" },
  { icon: Car, label: "License", value: "Type B Driving License" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I am a dedicated Electromechanics Technician specialized in
                Automated Systems with a strong foundation in industrial
                maintenance and operations. My experience spans across different
                sectors, from textile manufacturing to logistics operations at
                major facilities like Tanger Med.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                I combine technical expertise with practical problem-solving
                skills, always striving for operational excellence and system
                optimization. My passion for technology extends beyond work,
                including graphic design and continuous learning.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center text-accent">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="font-medium">
                    Based in Casablanca, Morocco
                  </span>
                </div>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
                >
                  <a
                    href="https://drive.google.com/file/d/12welaYARXNlNMZoKCQQGpy9fEki54n9h/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14m0 0l-7-7m7 7l7-7" />
                      </svg>
                    </span>
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
