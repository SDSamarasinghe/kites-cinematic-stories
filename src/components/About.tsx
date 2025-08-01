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
                Kites Digital
              </span>
            </h2>
            <p className="font-poppins text-lg text-muted-foreground mb-6 leading-relaxed">
              At Kites Digital, we specialize in elevating restaurants, gyms, and automotive businesses 
              through powerful visual storytelling and strategic digital marketing. We believe that 
              authentic engagement in the digital age starts with compelling content and data-driven strategies.
            </p>
            <p className="font-poppins text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to help local businesses connect with their communities through innovative 
              digital solutions. From social media management to comprehensive marketing campaigns, 
              we deliver results that matter to your bottom line.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  250+
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Campaigns Launched
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  4+
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  300%
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Average Growth
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
                alt="Kites Digital Marketing Team"
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