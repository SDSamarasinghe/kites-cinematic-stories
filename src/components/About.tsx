import teamImage from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-cinematic-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-reveal-left">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              About
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] 
                             bg-clip-text text-transparent animate-text-shimmer">
                Kites Image
              </span>
            </h2>
            <p className="font-poppins text-lg text-muted-foreground mb-6 leading-relaxed">
              At Kites Image, we believe every moment deserves to be captured with artistic excellence. 
              Specializing in wedding photography, event coverage, and professional portraits, 
              we combine creative storytelling with technical expertise.
            </p>
            <p className="font-poppins text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team is passionate about creating timeless memories that you'll treasure forever. 
              From intimate ceremonies to grand celebrations, we capture the emotions, details, 
              and authentic moments that make your story unique.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  200+
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Weddings Captured
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  3+
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  100%
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Happy Couples
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-reveal-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl 
                            blur-xl group-hover:blur-2xl transition-all duration-500 animate-glow"></div>
              <img 
                src={teamImage} 
                alt="Kites Image Creative Team"
                className="relative w-full rounded-2xl shadow-cinematic transform group-hover:scale-[1.02] 
                         transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/30 to-transparent 
                            group-hover:from-background/10 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;