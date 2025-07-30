import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Photography", href: "#photography" },
  { name: "Video Projects", href: "#video" },
  { name: "2D & 3D Design", href: "#design" },
  { name: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-12 h-12 bg-premium-gradient rounded-xl flex items-center justify-center 
                           shadow-gold group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
              <span className="font-playfair font-bold text-background text-xl">K</span>
              <div className="absolute inset-0 bg-premium-gradient rounded-xl opacity-0 group-hover:opacity-20 
                             transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-2xl font-bold text-foreground group-hover:text-primary 
                             transition-colors duration-300">
                Kites Image
              </span>
              <span className="font-poppins text-xs text-muted-foreground opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300">
                Creative Agency
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-poppins text-foreground hover:text-primary transition-all duration-300 
                          relative group py-3 px-4 rounded-lg hover:bg-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                               bg-premium-gradient group-hover:w-3/4 transition-all duration-500"></span>
                <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-10 
                               rounded-lg transition-opacity duration-300"></div>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              size="sm"
              className="ml-4 bg-premium-gradient hover:shadow-glow text-background font-medium
                        transition-all duration-500 hover:scale-105 relative overflow-hidden group
                        border-0"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground hover:text-primary hover:bg-primary/10 
                      transition-all duration-300 relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-20 
                             rounded transition-opacity duration-300"></div>
            </div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2 pt-4 border-t border-primary/20 bg-background/50 
                         backdrop-blur-lg rounded-lg mt-4 p-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-poppins text-foreground hover:text-primary transition-all duration-300 
                          text-left py-3 px-4 rounded-lg hover:bg-primary/10 relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-5 
                               rounded-lg transition-opacity duration-300"></div>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              size="sm"
              className="bg-premium-gradient hover:shadow-glow text-background font-medium
                        transition-all duration-500 hover:scale-105 w-fit mt-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;