import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Gonzalez",
    company: "Bella Vista Restaurant",
    role: "Owner & Chef",
    quote: "Kites Digital transformed our social media presence completely. Our reservations increased by 180% after their visual content campaign. The food photography they created makes every dish look irresistible.",
    rating: 5,
    avatar: "MG",
    project: "Restaurant Marketing"
  },
  {
    name: "Jake Mitchell",
    company: "Iron Forge Gym",
    role: "Fitness Director", 
    quote: "Their fitness marketing strategy helped us increase membership by 250% in just 6 months. The motivational video content and targeted campaigns brought in exactly the right audience.",
    rating: 5,
    avatar: "JM",
    project: "Fitness Marketing Campaign"
  },
  {
    name: "Sarah Chen", 
    company: "Premier Auto Detailing",
    role: "Business Owner",
    quote: "The before-and-after videos they created showcase our work perfectly. Client bookings doubled after launching their digital marketing campaign. Exceptional ROI and professional service.",
    rating: 5,
    avatar: "SC",
    project: "Automotive Marketing"
  },
  {
    name: "Carlos Rivera",
    company: "Rivera Family Restaurant",
    role: "Marketing Manager",
    quote: "Their understanding of local restaurant marketing is phenomenal. The content they create tells our family story beautifully while driving real foot traffic and online orders.",
    rating: 5,
    avatar: "CR",
    project: "Local Restaurant Branding"
  },
  {
    name: "Amanda Foster",
    company: "FitLife Wellness Center",
    role: "Operations Director",
    quote: "The fitness transformation content and member success stories they produced increased our class bookings by 300%. Their visual storytelling connects with our community perfectly.",
    rating: 5,
    avatar: "AF",
    project: "Fitness Content Strategy"
  },
  {
    name: "Mike Thompson",
    company: "Thompson Auto Sales",
    role: "General Manager",
    quote: "Professional car photography and video tours that showcase our inventory beautifully. Online inquiries increased by 220% since starting their automotive marketing program.",
    rating: 5,
    avatar: "MT",
    project: "Automotive Visual Marketing"
  }
];

const ModernTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], originalIndex: index });
    }
    return result;
  };

  return (
    <section ref={ref} id="testimonials" className="relative py-24 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
      <div className="absolute top-10 left-5 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
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
            ⭐ Client Testimonials
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            What Our Clients
            <motion.span 
              className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Say About Us
            </motion.span>
          </h2>
          
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about 
            their experience working with Kites Image.
          </p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="group p-3 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="group p-3 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Testimonials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as any 
                }}
                onMouseEnter={() => setHoveredCard(testimonial.originalIndex)}
                onMouseLeave={() => setHoveredCard(null)}
                className="h-full"
              >
                <Card className={`group relative h-full bg-card/50 backdrop-blur-xl border transition-all duration-500 overflow-hidden
                  ${hoveredCard === testimonial.originalIndex 
                    ? 'border-primary/50 shadow-glow scale-105 bg-card/70' 
                    : 'border-border/50 hover:border-primary/30 hover:shadow-elegant hover:scale-102'
                  }`}
                >
                  {/* Card Background Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 transition-opacity duration-500
                    ${hoveredCard === testimonial.originalIndex ? 'opacity-100' : 'opacity-0'}
                  `} />
                  
                  {/* Floating Quote Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                    animate={hoveredCard === testimonial.originalIndex ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="w-4 h-4 text-primary" />
                  </motion.div>
                  
                  <CardContent className="relative p-8 h-full flex flex-col z-10">
                    {/* Star Rating */}
                    <motion.div 
                      className="flex mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.3 + index * 0.1 + i * 0.1,
                            type: "spring",
                            stiffness: 200 
                          }}
                        >
                          <Star 
                            className={`w-5 h-5 text-primary fill-current transition-all duration-300
                              ${hoveredCard === testimonial.originalIndex ? 'scale-110 drop-shadow-sm' : ''}
                            `}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Quote */}
                    <blockquote className={`font-poppins text-muted-foreground mb-6 leading-relaxed relative flex-1 transition-colors duration-300
                      ${hoveredCard === testimonial.originalIndex ? 'text-foreground' : ''}
                    `}>
                      <motion.span 
                        className="text-primary/30 font-playfair text-4xl absolute -top-2 -left-1 leading-none"
                        animate={hoveredCard === testimonial.originalIndex ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        "
                      </motion.span>
                      <span className="relative z-10">{testimonial.quote}</span>
                    </blockquote>
                    
                    {/* Project Badge */}
                    <motion.div 
                      className="mb-4"
                      animate={hoveredCard === testimonial.originalIndex ? { y: -2 } : { y: 0 }}
                    >
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-poppins font-medium transition-all duration-300
                        ${hoveredCard === testimonial.originalIndex 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-primary/10 text-primary/80'
                        }`}>
                        {testimonial.project}
                      </span>
                    </motion.div>
                    
                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      {/* Avatar */}
                      <motion.div 
                        className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm transition-all duration-300
                          ${hoveredCard === testimonial.originalIndex ? 'scale-110 shadow-lg' : ''}
                        `}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {testimonial.avatar}
                      </motion.div>
                      
                      {/* Name and Company */}
                      <div className="flex-1">
                        <motion.div 
                          className={`font-poppins font-semibold transition-colors duration-300
                            ${hoveredCard === testimonial.originalIndex ? 'text-primary' : 'text-foreground'}
                          `}
                          animate={hoveredCard === testimonial.originalIndex ? { x: 2 } : { x: 0 }}
                        >
                          {testimonial.name}
                        </motion.div>
                        <div className="font-poppins text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        <motion.div 
                          className={`font-poppins text-sm font-medium transition-colors duration-300
                            ${hoveredCard === testimonial.originalIndex ? 'text-primary/80' : 'text-primary/60'}
                          `}
                          animate={hoveredCard === testimonial.originalIndex ? { x: 2 } : { x: 0 }}
                        >
                          {testimonial.company}
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/30 rounded-lg opacity-0 pointer-events-none"
                    animate={hoveredCard === testimonial.originalIndex ? { 
                      opacity: [0, 1, 0],
                      scale: [0.95, 1.02, 1]
                    } : { opacity: 0 }}
                    transition={{ duration: 0.8, repeat: hoveredCard === testimonial.originalIndex ? Infinity : 0 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <motion.div 
            className="flex justify-center items-center space-x-2 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-primary/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernTestimonials;
