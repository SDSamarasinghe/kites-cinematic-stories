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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            their experience working with Kites Image.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 
                         hover:shadow-cinematic hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="font-poppins text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-poppins font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-poppins text-sm text-primary">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;