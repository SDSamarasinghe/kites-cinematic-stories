import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cinematic.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-mesh-gradient">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 animate-morph animate-parallax-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 animate-morph blur-2xl animate-float" 
             style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/20 animate-morph blur-lg animate-float" 
             style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/15 animate-morph blur-lg animate-parallax-float" 
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-secondary/20 animate-morph blur-md animate-float" 
             style={{ animationDelay: '6s' }}></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-reveal-up">
          Professional Visual
          <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] 
                         bg-clip-text text-transparent animate-text-shimmer animate-reveal-up"
                style={{ animationDelay: '0.3s' }}>
            Storytelling
          </span>
        </h1>
        
        <p className="font-poppins text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-reveal-up"
           style={{ animationDelay: '0.6s' }}>
          Capturing life's precious moments through exceptional photography and videography. 
          From weddings to corporate events, we create lasting memories with artistic excellence.
        </p>
        
        <div className="animate-reveal-up" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            className="font-poppins text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground 
                       shadow-gold hover:shadow-[0_15px_40px_hsl(20_90%_48%/0.4)] 
                       transform hover:animate-elastic transition-all duration-300 group"
          >
            <span className="group-hover:animate-magnetic">Book a Shoot</span>
          </Button>
        </div>
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