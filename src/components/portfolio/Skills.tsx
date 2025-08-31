import { Wrench, Database, Palette, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Technical Expertise",
    icon: Wrench,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "Electromechanics", level: "Expert" },
      { name: "Maintenance Management", level: "Advanced" },
      { name: "Automation Systems", level: "Advanced" },
      { name: "Electronics", level: "Intermediate" },
      { name: "Mechanics", level: "Advanced" }
    ]
  },
  {
    title: "Software & Tools",
    icon: Monitor,
    color: "text-tech-blue",
    bgColor: "bg-tech-blue/10",
    skills: [
      { name: "Office Tools", level: "Advanced" },
      { name: "Database Management", level: "Intermediate" },
      { name: "Machine Monitoring Systems", level: "Advanced" },
      { name: "Technical Documentation", level: "Expert" }
    ]
  },
  {
    title: "Creative Skills",
    icon: Palette,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Graphic Design", level: "Advanced" },
      { name: "Textile Printing Design", level: "Expert" },
      { name: "Embroidery Patterns", level: "Advanced" },
      { name: "Clothing Design", level: "Intermediate" }
    ]
  },
  {
    title: "Data Management",
    icon: Database,
    color: "text-secondary-foreground",
    bgColor: "bg-secondary",
    skills: [
      { name: "Product Recording", level: "Expert" },
      { name: "Inventory Management", level: "Advanced" },
      { name: "Quality Control", level: "Advanced" },
      { name: "Reporting Systems", level: "Advanced" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-accent text-accent-foreground";
    case "Advanced":
      return "bg-tech-blue text-white";
    case "Intermediate":
      return "bg-primary/20 text-primary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical competencies and areas of expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${category.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-space-grotesk font-semibold text-primary">
                      {category.title}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
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