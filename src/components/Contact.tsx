import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-cinematic-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss 
            how we can elevate your brand through powerful visual storytelling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-card border-border animate-fade-in">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Email Address"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground
                           shadow-gold hover:shadow-[0_15px_40px_hsl(43_96%_56%/0.4)]
                           transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Get in touch
              </h3>
              <p className="font-poppins text-muted-foreground mb-8 leading-relaxed">
                We're here to answer your questions and discuss your creative needs. 
                Choose the method that works best for you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-foreground">Email</div>
                  <div className="font-poppins text-muted-foreground">hello@kitesimage.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-foreground">Phone</div>
                  <div className="font-poppins text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-foreground">Studio</div>
                  <div className="font-poppins text-muted-foreground">123 Creative Ave, Design District</div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <Card className="bg-secondary/10 border-secondary/20 hover:border-secondary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground mb-2">
                      Quick Response Needed?
                    </h4>
                    <p className="font-poppins text-sm text-muted-foreground">
                      Connect with us on WhatsApp for instant communication
                    </p>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground
                             flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;