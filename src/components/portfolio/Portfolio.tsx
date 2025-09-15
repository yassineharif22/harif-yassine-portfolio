import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const portfolioItems = [
  {
    id: 1,
    title: "Character Design - Embroidery Pattern",
    category: "Digital Embroidery",
    image: "/lovable-uploads/8021fd02-cb3d-4732-b35b-988e0243718d.png",
    description: "Custom character design created for embroidery applications using professional digitizing software.",
  },
  {
    id: 2,
    title: "Moroccan Coat of Arms - Embroidery",
    category: "Cultural Design",
    image: "/lovable-uploads/2bcee6e4-b1d1-4a0c-91a8-5e7103f4a9ea.png",
    description: "Traditional Moroccan coat of arms digitized for embroidery on various textile products.",
  },
  {
    id: 3,
    title: "One Piece Anime T-Shirt Design",
    category: "Print on Demand",
    image: "/lovable-uploads/8b0e12f9-db81-4926-9f7e-6606b84730d2.png",
    description: "Anime-inspired t-shirt design featuring One Piece characters with vibrant color scheme.",
  },
  {
    id: 4,
    title: "Dark Fantasy T-Shirt Design",
    category: "Print on Demand",
    image: "/lovable-uploads/b6915bdd-25ed-44b3-b601-9241b424c1f3.png",
    description: "Dark fantasy themed t-shirt design with mystical characters in blue tones.",
  },
  {
    id: 5,
    title: "Anime Character Embroidery Design",
    category: "Digital Embroidery",
    image: "/lovable-uploads/embroidery-design-1.png",
    description: "Detailed anime character embroidery pattern with purple energy effects and dynamic poses.",
  },
  {
    id: 6,
    title: "Multi-Character Embroidery Design",
    category: "Digital Embroidery", 
    image: "/lovable-uploads/embroidery-design-2.png",
    description: "Complex embroidery design featuring multiple anime characters with vibrant colors and intricate details.",
  },
  {
    id: 7,
    title: "Pink Hair Character Embroidery",
    category: "Digital Embroidery",
    image: "/lovable-uploads/embroidery-design-3.png",
    description: "Anime character embroidery design with pink hair and detailed facial expressions for textile applications.",
  },
  {
    id: 8,
    title: "Golden Warrior T-Shirt Design",
    category: "Print on Demand",
    image: "/lovable-uploads/tshirt-dark-fantasy.png",
    description: "Epic dark fantasy t-shirt design featuring a golden warrior with mystical elements and dramatic lighting.",
  },
  {
    id: 9,
    title: "No Pain No Gain Motivational Design",
    category: "Print on Demand",
    image: "/lovable-uploads/tshirt-no-pain-no-gain.png",
    description: "Motivational fitness t-shirt design with powerful character and inspiring typography in black and white.",
  },
  {
    id: 10,
    title: "Anime Character T-Shirt Design",
    category: "Print on Demand",
    image: "/lovable-uploads/tshirt-anime-1.png",
    description: "Monochrome anime-inspired t-shirt design with dynamic character pose and detailed linework.",
  },
  {
    id: 11,
    title: "One Piece Ace T-Shirt Design",
    category: "Print on Demand",
    image: "/lovable-uploads/tshirt-anime-ace.png",
    description: "One Piece inspired t-shirt design featuring Portgas D. Ace with signature hat and flame effects.",
  },
  {
    id: 12,
    title: "Samurai T-Shirt Design",
    category: "Print on Demand",
    image: "/lovable-uploads/tshirt-samurai.png",
    description: "Traditional samurai-inspired t-shirt design with detailed armor and weapons in artistic black and white style.",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-primary mb-6">
              My Portfolio
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my graphic design work including textile printing, embroidery patterns, 
              and print-on-demand designs for various clients and projects.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-space-grotesk font-semibold text-primary mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};