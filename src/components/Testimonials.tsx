import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Bloom Events",
    quote: "Kites Image transformed our brand identity with stunning visuals that perfectly capture our essence. Their cinematic approach elevated our entire marketing presence.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "TechStart Inc.",
    quote: "The video campaign they created for our product launch exceeded all expectations. Professional, creative, and incredibly effective in driving engagement.",
    rating: 5
  },
  {
    name: "Emma Rodriguez", 
    company: "Fashion Forward",
    quote: "Working with their team was seamless. They understood our vision and delivered photography that was both artistic and commercially successful.",
    rating: 5
  },
  {
    name: "David Park",
    company: "Urban Collective",
    quote: "Their 3D design work brought our architectural concepts to life in ways we never imagined. Absolutely stunning and incredibly detailed.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    company: "Creative Studios",
    quote: "The social media campaign they crafted resulted in a 300% increase in engagement. Their understanding of visual storytelling is unmatched.",
    rating: 5
  },
  {
    name: "James Wilson",
    company: "Tech Innovations",
    quote: "Professional, creative, and results-driven. Their digital campaigns have consistently exceeded our ROI expectations.",
    rating: 5
  }
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const autoScroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    const interval = setInterval(autoScroll, 50);

    // Pause on hover
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      const newInterval = setInterval(autoScroll, 50);
      return newInterval;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="testimonials" className="relative py-24 bg-subtle-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-5 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-parallax-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-in-left">
            Client
            <span className="block bg-premium-gradient bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Don't just take our word for it. Here's what our clients say about 
            their experience working with Kites Image.
          </p>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group relative bg-card/50 backdrop-blur-glass border border-glass-border 
                         hover:border-primary/50 transition-all duration-500 hover:shadow-glow 
                         hover:scale-105 animate-fade-in overflow-hidden flex-shrink-0 w-80"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <CardContent className="relative p-8 z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-primary fill-current transition-transform duration-300 group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <blockquote className="font-poppins text-muted-foreground mb-6 leading-relaxed relative">
                  <span className="text-primary/30 font-playfair text-6xl absolute -top-4 -left-2 leading-none">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                </blockquote>
                <div className="relative">
                  <div className="font-poppins font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="font-poppins text-sm text-primary/80 group-hover:text-primary transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
              
              {/* Hover Effect Lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-premium-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-premium-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;