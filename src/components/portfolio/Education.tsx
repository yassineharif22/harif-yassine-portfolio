import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();
  
  const educationData = [
    {
      degree: t("education.degree1"),
      field: t("education.field1"),
      institution: t("education.institution1"),
      period: t("education.period1"),
      description: t("education.description1"),
      highlights: [t("education.highlight1_1"), t("education.highlight1_2"), t("education.highlight1_3"), t("education.highlight1_4")]
    },
    {
      degree: t("education.degree2"),
      field: t("education.field2"),
      institution: t("education.institution2"),
      period: t("education.period2"),
      description: t("education.description2"),
      highlights: [t("education.highlight2_1"), t("education.highlight2_2"), t("education.highlight2_3"), t("education.highlight2_4")]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              {t("education.title")}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("education.subtitle")}
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