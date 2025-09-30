import { User, Calendar, Languages, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  
  const personalInfo = [
    { icon: User, label: t("about.age"), value: t("about.ageValue") },
    { icon: Calendar, label: t("about.experience"), value: t("about.experienceValue") },
    { icon: Languages, label: t("about.languages"), value: t("about.languagesValue") },
    { icon: Car, label: t("about.license"), value: t("about.licenseValue") },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              {t("about.title")}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {t("about.paragraph1")}
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                {t("about.paragraph2")}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center text-accent">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="font-medium">
                    {t("about.location")}
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
                    {t("nav.downloadCV")}
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
