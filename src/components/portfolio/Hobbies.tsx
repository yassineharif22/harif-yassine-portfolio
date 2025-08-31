import { BookOpen, Smartphone, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const hobbies = [
  {
    name: "Reading",
    icon: BookOpen,
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "Continuous learning through books and technical literature to stay updated with industry trends.",
    benefits: ["Knowledge Expansion", "Critical Thinking", "Professional Growth"]
  },
  {
    name: "Social Media",
    icon: Smartphone,
    color: "text-tech-blue",
    bgColor: "bg-tech-blue/10",
    description: "Connecting with industry professionals and sharing technical insights on various platforms.",
    benefits: ["Networking", "Industry Updates", "Knowledge Sharing"]
  },
  {
    name: "Swimming",
    icon: Waves,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Regular swimming for physical fitness and mental well-being, maintaining work-life balance.",
    benefits: ["Physical Fitness", "Stress Relief", "Mental Clarity"]
  }
];

export const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              Interests & Hobbies
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond work, I maintain a balanced lifestyle through diverse interests 
              that contribute to my personal and professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${hobby.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <hobby.icon className={`w-8 h-8 ${hobby.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-semibold text-primary mb-4">
                    {hobby.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {hobby.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Benefits
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {hobby.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};