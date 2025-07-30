import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cinematic.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in">
          Crafting Cinematic
          <span className="block bg-gold-gradient bg-clip-text text-transparent animate-fade-in-delay">
            Stories That Connect
          </span>
        </h1>
        
        <p className="font-poppins text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
          We bring your vision to life through stunning photography, cinematic videography, 
          and powerful digital campaigns that resonate with your audience.
        </p>
        
        <Button 
          size="lg" 
          className="font-poppins text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground 
                     shadow-gold hover:shadow-[0_15px_40px_hsl(20_90%_48%/0.4)] 
                     transform hover:scale-105 transition-all duration-300 animate-scale-in"
        >
          Book a Shoot
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;