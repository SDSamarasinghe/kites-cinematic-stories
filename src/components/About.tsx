import teamImage from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-cinematic-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              About
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
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
          
          <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Kites Image Creative Team"
                className="w-full rounded-2xl shadow-cinematic"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;