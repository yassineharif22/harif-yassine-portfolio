import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Hobbies } from "@/components/portfolio/Hobbies";
import { Contact } from "@/components/portfolio/Contact";
import { Navigation } from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-inter">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Hobbies />
      <Contact />
    </main>
  );
};

export default Index;