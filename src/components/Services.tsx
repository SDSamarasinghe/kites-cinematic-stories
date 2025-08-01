import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Palette, Share2, Globe } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments with artistic precision and cinematic flair"
  },
  {
    icon: Video,
    title: "Videography", 
    description: "Creating compelling visual narratives that engage and inspire"
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Crafting distinctive brand identities that leave lasting impressions"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Building authentic connections through strategic social presence"
  },
  {
    icon: Globe,
    title: "Digital Campaigns",
    description: "Driving results with data-driven digital marketing strategies"
  }
];

const Services = () => {
  return (
    <section className="relative py-24 bg-cinematic-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-reveal-up">
            Our Creative
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] 
                           bg-clip-text text-transparent animate-text-shimmer">
              Services
            </span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto animate-reveal-up"
             style={{ animationDelay: '0.3s' }}>
            From concept to creation, we offer comprehensive creative solutions 
            that elevate your brand and connect with your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative bg-card/80 backdrop-blur-glass border border-border/50 
                         hover:border-primary/50 transition-all duration-500 hover:shadow-glow 
                         hover:scale-105 animate-reveal-up overflow-hidden"
              style={{ animationDelay: `${0.6 + index * 0.15}s` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <CardContent className="relative p-8 text-center z-10">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 
                               bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-500
                               group-hover:shadow-glow group-hover:animate-elastic">
                  <service.icon className="w-10 h-10 text-primary group-hover:scale-125 group-hover:animate-magnetic 
                                          transition-all duration-500" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4 
                               group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-px bg-premium-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <div className="absolute bottom-0 right-0 w-full h-px bg-premium-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-premium-gradient transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-premium-gradient transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;