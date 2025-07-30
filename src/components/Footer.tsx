import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-4">
              Kites Image
            </h3>
            <p className="font-poppins text-muted-foreground mb-6 leading-relaxed max-w-md">
              Crafting cinematic stories that connect brands with their audiences 
              through powerful visual storytelling and creative excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center 
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300 
                           hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center 
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300 
                           hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center 
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300 
                           hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center 
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300 
                           hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="font-poppins text-muted-foreground hover:text-primary 
                               transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Photography", "Videography", "Branding", "Social Media", "Digital Campaigns"].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="font-poppins text-muted-foreground hover:text-primary 
                               transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-poppins text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Kites Image. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="font-poppins text-sm text-muted-foreground hover:text-primary 
                           transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="font-poppins text-sm text-muted-foreground hover:text-primary 
                           transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;