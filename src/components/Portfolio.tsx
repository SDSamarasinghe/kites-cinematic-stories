import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import photographyImage from "@/assets/portfolio-photography.jpg";
import videographyImage from "@/assets/portfolio-videography.jpg";

const portfolioItems = [
  {
    title: "Wedding Collection",
    category: "Photography",
    image: photographyImage,
    description: "Intimate moments captured with cinematic elegance"
  },
  {
    title: "Brand Campaign",
    category: "Videography", 
    image: videographyImage,
    description: "Commercial storytelling that drives engagement"
  },
  {
    title: "Fashion Editorial",
    category: "Photography",
    image: photographyImage,
    description: "High-fashion photography with dramatic lighting"
  },
  {
    title: "Product Launch",
    category: "Digital Campaign",
    image: videographyImage,
    description: "Multi-platform campaign generating 2M+ impressions"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest work showcasing the intersection of creativity, 
            technology, and storytelling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.title}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 
                         transition-all duration-300 hover:shadow-cinematic animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground 
                                     text-sm font-poppins rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-poppins text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="font-poppins border-primary text-primary hover:bg-primary hover:text-primary-foreground
                       px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;