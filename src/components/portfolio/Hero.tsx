import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold text-white mb-6">
            HARIF YASSINE
          </h1>

          <h2 className="text-xl md:text-2xl text-white/90 font-inter font-medium mb-4">
            Specialized Technician in Electromechanics of Automated Systems
          </h2>

          <div className="flex items-center justify-center text-white/80 mb-8">
            <MapPin size={20} className="mr-2" />
            <span className="text-lg">Casablanca, Morocco</span>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate electromechanics engineer with expertise in automated
            systems, maintenance management, and industrial operations. Driven
            by innovation and precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToAbout}
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3"
            >
              Explore My Work
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3"
            >
              <a
                href="https://drive.google.com/file/d/12welaYARXNlNMZoKCQQGpy9fEki54n9h/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-white/70 hover:text-white transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
