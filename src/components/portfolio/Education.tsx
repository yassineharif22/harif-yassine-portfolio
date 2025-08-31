import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const educationData = [
  {
    degree: "Specialized Technician Diploma",
    field: "Electromechanics of Automated Systems",
    institution: "ISTA Casablanca",
    period: "2022–2024",
    description: "Advanced technical training in electromechanical systems, automation, industrial maintenance, and control systems.",
    highlights: ["Automation & Control Systems", "Industrial Maintenance", "Electrical Engineering", "Mechanical Systems"]
  },
  {
    degree: "Baccalaureate",
    field: "Life and Earth Sciences",
    institution: "Lycée WELLADA, Casablanca",
    period: "2012–2015",
    description: "Secondary education with focus on scientific principles and analytical thinking.",
    highlights: ["Scientific Foundation", "Analytical Skills", "Research Methods", "Academic Excellence"]
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My educational journey has provided a solid foundation in technical expertise 
              and scientific thinking.
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((education, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-space-grotesk font-semibold text-primary mb-1">
                          {education.degree}
                        </h3>
                        <p className="text-lg text-accent font-medium">
                          {education.field}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{education.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-4">
                    <p className="text-foreground font-medium mb-2">{education.institution}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {education.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {education.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-3 py-1 bg-tech-blue/10 text-tech-blue text-sm font-medium rounded-full border border-tech-blue/20"
                      >
                        {highlight}
                      </span>
                    ))}
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