import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const socialIcons = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-500" },
    { icon: Mail, href: "mailto:hello@kitesimage.com", label: "Email", color: "hover:bg-primary" },
    { icon: Phone, href: "tel:+1234567890", label: "Phone", color: "hover:bg-green-500" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Photography", href: "#services" },
    { name: "Videography", href: "#services" },
    { name: "Branding", href: "#services" },
    { name: "Social Media", href: "#services" },
    { name: "Digital Campaigns", href: "#services" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative bg-background border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </motion.div>
              <div>
                <motion.h3 
                  className="font-playfair text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Kites Image
                </motion.h3>
                <p className="text-xs text-muted-foreground font-poppins">
                  Cinematic Stories
                </p>
              </div>
            </motion.div>
            
            <p className="font-poppins text-muted-foreground mb-8 leading-relaxed max-w-md">
              Crafting cinematic stories that connect brands with their audiences 
              through powerful visual storytelling and creative excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <motion.a
                href="mailto:hello@kitesimage.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-poppins text-sm">hello@kitesimage.com</span>
              </motion.a>
              
              <motion.a
                href="tel:+1234567890"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-poppins text-sm">+1 (555) 123-4567</span>
              </motion.a>
              
              <motion.div
                className="flex items-center text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 mr-3" />
                <span className="font-poppins text-sm">123 Creative Ave, Design District</span>
              </motion.div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`group relative w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center 
                             hover:border-primary/50 transition-all duration-300 ${social.color} hover:text-white`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  <social.icon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card border border-border/50 px-2 py-1 rounded text-xs font-poppins opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {social.label}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-poppins font-semibold text-foreground mb-6 relative">
              Quick Links
              <motion.div
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.a 
                    href={link.href}
                    className="font-poppins text-muted-foreground hover:text-primary transition-all duration-300 group flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="w-1 h-1 bg-primary/40 rounded-full mr-3 group-hover:bg-primary group-hover:scale-150 transition-all"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-poppins font-semibold text-foreground mb-6 relative">
              Services
              <motion.div
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : { width: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.a 
                    href={service.href}
                    className="font-poppins text-muted-foreground hover:text-primary transition-all duration-300 group flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="w-1 h-1 bg-secondary/40 rounded-full mr-3 group-hover:bg-secondary group-hover:scale-150 transition-all"
                    />
                    {service.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Newsletter Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-border/50 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-poppins font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Stay Updated
            </motion.div>
            
            <h4 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Get the latest updates
            </h4>
            
            <p className="font-poppins text-muted-foreground mb-6">
              Subscribe to our newsletter for creative insights and project updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl font-poppins focus:border-primary focus:outline-none transition-all"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold rounded-xl">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center mb-4 md:mb-0"
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-poppins text-sm text-muted-foreground mr-2">
                © 2024 Kites Image. Made with
              </p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <p className="font-poppins text-sm text-muted-foreground ml-2">
                All rights reserved.
              </p>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <motion.a 
                href="#" 
                className="font-poppins text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="font-poppins text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.a>
              
              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                className="group p-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </footer>
  );
};

export default ModernFooter;
