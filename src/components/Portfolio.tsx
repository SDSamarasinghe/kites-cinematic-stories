import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
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
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index].filter((v, i, arr) => arr.indexOf(v) === i));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="photography" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-in-left">
            Featured
            <span className="block bg-premium-gradient bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Explore our latest work showcasing the intersection of creativity, 
            technology, and storytelling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.title}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group overflow-hidden bg-card border-border hover:border-primary/50 
                         transition-all duration-700 hover:shadow-cinematic transform
                         ${visibleCards.includes(index) 
                           ? 'translate-y-0 opacity-100' 
                           : 'translate-y-20 opacity-0'
                         }`}
              style={{ 
                transitionDelay: visibleCards.includes(index) ? `${index * 150}ms` : '0ms',
                transitionDuration: '800ms'
              }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-4 py-2 bg-premium-gradient text-background 
                                     text-sm font-poppins rounded-full mb-3 shadow-glow">
                      {item.category}
                    </span>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-premium-gradient group-hover:w-full transition-all duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-premium-gradient group-hover:w-full transition-all duration-700 delay-200"></div>
                  <div className="absolute top-0 left-0 w-0.5 h-0 bg-premium-gradient group-hover:h-full transition-all duration-700 delay-100"></div>
                  <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-premium-gradient group-hover:h-full transition-all duration-700 delay-300"></div>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 
                               group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-poppins text-muted-foreground">
                  {item.description}
                </p>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-5 
                               transition-opacity duration-500 rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="font-poppins border-2 border-primary/30 text-primary hover:bg-primary 
                       hover:text-primary-foreground hover:border-primary px-8 py-6 
                       transition-all duration-500 hover:scale-105 hover:shadow-glow
                       bg-transparent backdrop-blur-sm relative overflow-hidden group"
          >
            <span className="relative z-10">View Full Portfolio</span>
            <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;