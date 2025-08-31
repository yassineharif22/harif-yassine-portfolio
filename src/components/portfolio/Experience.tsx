import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const experienceData = [
  {
    title: "Equipment Operator",
    company: "Insimaroc – Tanger Med",
    location: "Tanger, Morocco",
    period: "Aug–Sep 2022",
    type: "Contract",
    description: "Specialized in logistics operations at one of Africa's largest ports, managing critical equipment and cargo operations.",
    responsibilities: [
      "Handling, transfer, and loading of goods using specialized equipment",
      "Machine monitoring and operational reporting for optimal efficiency",
      "Organizing and recording moved products with precision tracking",
      "Ensuring safety protocols and equipment maintenance standards"
    ],
    skills: ["Equipment Operation", "Logistics Management", "Safety Protocols", "Data Recording"]
  },
  {
    title: "Machine Operator",
    company: "Plastima",
    location: "Casablanca, Morocco",
    period: "2017–2018",
    type: "Full-time",
    description: "Operated and maintained industrial machinery in a manufacturing environment, focusing on operational excellence and problem-solving.",
    responsibilities: [
      "Repaired technical problems on production machines",
      "Maintained smooth factory operations and production flow",
      "Performed preventive maintenance and troubleshooting",
      "Collaborated with technical teams for system optimization"
    ],
    skills: ["Machine Maintenance", "Troubleshooting", "Technical Repair", "Team Collaboration"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey spans diverse industrial environments, from manufacturing 
              to major logistics operations.
            </p>
          </div>

          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between flex-col lg:flex-row gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-space-grotesk font-semibold text-primary mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-accent font-medium mb-2">
                          {experience.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{experience.location}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{experience.period}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-tech-blue/10 text-tech-blue text-sm font-medium rounded-full border border-tech-blue/20"
                        >
                          {skill}
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