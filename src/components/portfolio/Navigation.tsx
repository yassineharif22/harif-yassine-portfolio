import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const navItems = [
  { label: "nav.about", href: "#about" },
  { label: "nav.education", href: "#education" },
  { label: "nav.experience", href: "#experience" },
  { label: "nav.portfolio", href: "#portfolio" },
  { label: "nav.skills", href: "#skills" },
  { label: "nav.contact", href: "#contact" },
];

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-xl font-space-grotesk font-bold text-primary hover:text-accent transition-colors"
            >
              HARIF YASSINE
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {t(item.label)}
                </button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-sm font-medium"
              >
                <Languages className="h-4 w-4 mr-1" />
                {i18n.language.toUpperCase()}
              </Button>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-2"
              >
                <a
                  href="https://drive.google.com/file/d/12welaYARXNlNMZoKCQQGpy9fEki54n9h/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("nav.downloadCV")}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-card/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-lg font-medium text-foreground hover:text-accent transition-colors"
              >
                {t(item.label)}
              </button>
            ))}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-lg font-medium"
            >
              <Languages className="h-5 w-5 mr-2" />
              {i18n.language.toUpperCase()}
            </Button>
            <Button
              asChild
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              <a
                href="https://drive.google.com/file/d/12welaYARXNlNMZoKCQQGpy9fEki54n9h/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.downloadCV")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
