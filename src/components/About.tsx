import teamImage from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section className="py-24 bg-cinematic-gradient">
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
              Founded on the belief that every brand has a unique story to tell, Kites Image 
              combines artistic vision with cutting-edge technology to create visual experiences 
              that captivate and inspire.
            </p>
            <p className="font-poppins text-lg text-muted-foreground mb-8 leading-relaxed">
              Our passionate team of creatives brings together expertise in photography, 
              videography, and digital marketing to deliver results that exceed expectations 
              and elevate your brand presence.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  500+
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  5
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                  98%
                </div>
                <div className="font-poppins text-sm text-muted-foreground">
                  Client Satisfaction
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