import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Palette, Share2, Globe, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Camera,
    title: "Visual Content Creation",
    description: "Professional photography and videography that captures your brand's essence and engages your audience across all platforms",
    features: ["Product Photography", "Brand Video Content", "Social Media Visuals"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Video,
    title: "Social Media Strategy", 
    description: "Data-driven social media strategies tailored to restaurants, gyms, and automotive businesses that drive real results",
    features: ["Platform Strategy", "Content Planning", "Community Management"],
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: Palette,
    title: "Brand Development",
    description: "Creating cohesive brand identities that resonate with your customers and differentiate you from the competition",
    features: ["Brand Identity", "Logo Design", "Marketing Materials"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    description: "End-to-end digital marketing campaigns that elevate your brand and connect with your target audience effectively",
    features: ["PPC Advertising", "SEO Optimization", "Email Marketing"],
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: Globe,
    title: "Analytics & Growth",
    description: "Performance tracking and optimization strategies that deliver measurable growth for your business",
    features: ["Performance Analytics", "Growth Strategy", "ROI Optimization"],
    color: "from-indigo-500/20 to-blue-500/20"
  }
];

const ModernServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as any,
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section ref={ref} id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-poppins font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Creative Services
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Elevating Your
            <motion.span 
              className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Creative Vision
            </motion.span>
          </h2>
          
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From concept to creation, we offer comprehensive creative solutions 
            that elevate your brand and connect with your audience.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <Card className={`relative h-full bg-card/50 backdrop-blur-xl border transition-all duration-500 overflow-hidden cursor-pointer
                ${hoveredCard === index 
                  ? 'border-primary/50 shadow-glow scale-105 bg-card/70' 
                  : 'border-border/50 hover:border-primary/30 hover:shadow-elegant'
                }`}
              >
                {/* Dynamic Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                
                <CardContent className="relative p-8 text-center z-10 h-full flex flex-col">
                  {/* Icon Section */}
                  <motion.div 
                    className="mb-8 inline-flex items-center justify-center w-20 h-20 mx-auto relative"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {/* Icon Background */}
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-500"
                      animate={hoveredCard === index ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      } : {}}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Glowing Ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/30 rounded-2xl opacity-0 group-hover:opacity-100"
                      animate={hoveredCard === index ? {
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.8, 0],
                      } : {}}
                      transition={{ duration: 1, repeat: hoveredCard === index ? Infinity : 0 }}
                    />
                    
                    {/* Icon */}
                    <service.icon className="w-10 h-10 text-primary relative z-10 transition-all duration-300 group-hover:text-primary" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <motion.h3 
                      className="font-playfair text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
                      animate={hoveredCard === index ? { y: -2 } : { y: 0 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="font-poppins text-muted-foreground leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <motion.div 
                      className="space-y-2 mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={hoveredCard === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={hoveredCard === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn w-full border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground font-poppins"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
                
                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full"
                  animate={hoveredCard === index ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  } : {}}
                  transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                />
                
                <motion.div
                  className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/40 rounded-full"
                  animate={hoveredCard === index ? {
                    scale: [1, 2, 1],
                    opacity: [0.4, 0.8, 0.4],
                  } : {}}
                  transition={{ duration: 1.5, repeat: hoveredCard === index ? Infinity : 0, delay: 0.5 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-lg relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center gap-2">
                Explore All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernServices;
