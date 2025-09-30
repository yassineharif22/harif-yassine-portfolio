import { Wrench, Database, Palette, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      title: t("skills.category1"),
      icon: Wrench,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: t("skills.skill1_1"), level: t("skills.levelExpert") },
        { name: t("skills.skill1_2"), level: t("skills.levelAdvanced") },
        { name: t("skills.skill1_3"), level: t("skills.levelAdvanced") },
        { name: t("skills.skill1_4"), level: t("skills.levelIntermediate") },
        { name: t("skills.skill1_5"), level: t("skills.levelAdvanced") }
      ]
    },
    {
      title: t("skills.category2"),
      icon: Monitor,
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10",
      skills: [
        { name: t("skills.skill2_1"), level: t("skills.levelAdvanced") },
        { name: t("skills.skill2_2"), level: t("skills.levelIntermediate") },
        { name: t("skills.skill2_3"), level: t("skills.levelAdvanced") },
        { name: t("skills.skill2_4"), level: t("skills.levelExpert") }
      ]
    },
    {
      title: t("skills.category3"),
      icon: Palette,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: t("skills.skill3_1"), level: t("skills.levelAdvanced") },
        { name: t("skills.skill3_2"), level: t("skills.levelExpert") },
        { name: t("skills.skill3_3"), level: t("skills.levelAdvanced") },
        { name: t("skills.skill3_4"), level: t("skills.levelIntermediate") }
      ]
    },
    {
      title: t("skills.category4"),
      icon: Database,
      color: "text-secondary-foreground",
      bgColor: "bg-secondary",
      skills: [
        { name: t("skills.skill4_1"), level: t("skills.levelExpert") },
        { name: t("skills.skill4_2"), level: t("skills.levelAdvanced") },
        { name: t("skills.skill4_3"), level: t("skills.levelAdvanced") },
        { name: t("skills.skill4_4"), level: t("skills.levelAdvanced") }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              {t("skills.title")}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("skills.subtitle")}
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