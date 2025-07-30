import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-subtle-gradient overflow-hidden">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group relative bg-card/50 backdrop-blur-glass border border-glass-border 
                         hover:border-primary/50 transition-all duration-500 hover:shadow-glow 
                         hover:scale-105 animate-fade-in overflow-hidden"
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