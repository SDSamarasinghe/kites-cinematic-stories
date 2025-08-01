import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const ModernContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@kitesimage.com",
      href: "mailto:hello@kitesimage.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Available 9 AM - 6 PM EST"
    },
    {
      icon: MapPin,
      label: "Studio",
      value: "123 Creative Ave, Design District",
      href: "https://maps.google.com",
      description: "Visit us for consultations"
    }
  ];

  return (
    <section ref={ref} id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
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
            ✉️ Get In Touch
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Capture Your
            <motion.span 
              className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Special Moments
            </motion.span>
          </h2>
          
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to book your photography session? Contact us today to discuss your vision 
            and let us create beautiful memories that will last a lifetime.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <Card className="group relative bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500 overflow-hidden">
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="relative p-8 md:p-10">
                <motion.h3 
                  className="font-playfair text-2xl md:text-3xl font-semibold text-foreground mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  Send us a message
                </motion.h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-muted-foreground">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="relative group">
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder=" "
                          className={`peer bg-background/50 backdrop-blur-sm border-2 transition-all duration-300 
                            ${formErrors.name 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-border/50 focus:border-primary hover:border-border'
                            } 
                            focus:bg-background pt-6 pb-2`}
                        />
                        <label className="absolute left-3 top-3 text-muted-foreground transition-all duration-300 
                          peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary 
                          peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs
                          font-poppins">
                          Your Name *
                        </label>
                        {formErrors.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-red-500 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {formErrors.name}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="relative group">
                        <Input 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder=" "
                          className={`peer bg-background/50 backdrop-blur-sm border-2 transition-all duration-300 
                            ${formErrors.email 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-border/50 focus:border-primary hover:border-border'
                            } 
                            focus:bg-background pt-6 pb-2`}
                        />
                        <label className="absolute left-3 top-3 text-muted-foreground transition-all duration-300 
                          peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary 
                          peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs
                          font-poppins">
                          Email Address *
                        </label>
                        {formErrors.email && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-red-500 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {formErrors.email}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="relative group">
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder=" "
                          rows={5}
                          className={`peer bg-background/50 backdrop-blur-sm border-2 transition-all duration-300 
                            ${formErrors.message 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-border/50 focus:border-primary hover:border-border'
                            } 
                            focus:bg-background pt-6 pb-2 resize-none`}
                        />
                        <label className="absolute left-3 top-3 text-muted-foreground transition-all duration-300 
                          peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary 
                          peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs
                          font-poppins">
                          Tell us about your event or photography needs... *
                        </label>
                        {formErrors.message && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-red-500 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {formErrors.message}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-lg
                                   shadow-gold hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
                        >
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative flex items-center justify-center gap-2">
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                Send Message
                              </>
                            )}
                          </span>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Info Panel */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Information */}
            <Card className="bg-card/30 backdrop-blur-xl border border-border/30 shadow-elegant">
              <CardContent className="p-8">
                <motion.h3 
                  className="font-playfair text-2xl font-semibold text-foreground mb-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.4 }}
                >
                  Get in touch
                </motion.h3>
                
                <motion.p 
                  className="font-poppins text-muted-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  We're here to help you plan your perfect photo session. Whether it's a wedding, 
                  portrait, or special event, let's discuss how we can capture your story.
                </motion.p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </div>
                        <div className="font-poppins text-muted-foreground text-sm mb-1">
                          {item.description}
                        </div>
                        <div className="font-poppins text-foreground font-medium">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* WhatsApp Quick Response Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="relative bg-gradient-to-br from-secondary/20 to-secondary/10 backdrop-blur-xl border border-secondary/30 shadow-elegant overflow-hidden group hover:shadow-glow transition-all duration-500">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating WhatsApp Icon */}
                <motion.div
                  className="absolute -top-2 -right-2 w-16 h-16 bg-secondary/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <CardContent className="relative p-6 z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <motion.h4 
                        className="font-poppins font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        Quick Response Needed?
                      </motion.h4>
                      <p className="font-poppins text-sm text-muted-foreground">
                        Connect with us on WhatsApp for instant communication
                      </p>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-poppins font-semibold
                                 flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </motion.div>
                        <span>WhatsApp</span>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernContact;
