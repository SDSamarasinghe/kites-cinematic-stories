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
    <section className="py-24 bg-cinematic-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Creative
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to creation, we offer comprehensive creative solutions 
            that elevate your brand and connect with your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 
                         hover:shadow-cinematic hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 
                               bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;