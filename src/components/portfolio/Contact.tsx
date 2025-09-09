import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0600190804",
    href: "tel:+212600190804",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Mail,
    label: "Email",
    value: "yassineharif22@gmail.com",
    href: "mailto:yassineharif22@gmail.com",
    color: "text-tech-blue",
    bgColor: "bg-tech-blue/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Casablanca, Morocco",
    href: "#",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const Contact = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would trigger the CV download
    console.log("Download CV clicked");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate or discuss opportunities? I&apos;d love to
              hear from you. Let&apos;s connect and explore how we can work
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <a
                    href={contact.href}
                    className="block"
                    onClick={(e) => contact.href === "#" && e.preventDefault()}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 ${contact.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className={`w-7 h-7 ${contact.color}`} />
                    </div>

                    <h3 className="font-semibold text-foreground mb-2">
                      {contact.label}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {contact.value}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-gradient-hero border-none shadow-elegant inline-block">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                  Download My CV
                </h3>

                <p className="text-white/90 mb-6 max-w-sm mx-auto">
                  Get the complete overview of my experience, education, and
                  skills.
                </p>

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
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Harif Yassine. Built with passion for excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
