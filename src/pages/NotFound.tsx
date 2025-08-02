import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Camera, 
  Video, 
  Palette, 
  ArrowLeft, 
  Search,
  AlertTriangle,
  Sparkles,
  RotateCcw
} from "lucide-react";
import ModernNavigation from "@/components/ModernNavigation";
import ModernFooter from "@/components/ModernFooter";

const NotFound = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleRefresh = () => {
    setIsAnimating(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  };

  const quickLinks = [
    { 
      icon: <Home className="w-5 h-5" />, 
      label: "Home", 
      href: "/",
      description: "Return to main page"
    },
    { 
      icon: <Camera className="w-5 h-5" />, 
      label: "Photography", 
      href: "/photography",
      description: "View our photo gallery"
    },
    { 
      icon: <Video className="w-5 h-5" />, 
      label: "Video Projects", 
      href: "/video-projects",
      description: "Explore our videos"
    },
    { 
      icon: <Palette className="w-5 h-5" />, 
      label: "Design Projects", 
      href: "/design-projects",
      description: "Check our designs"
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ModernNavigation />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-muted/30" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-10" />
        
        {/* Floating Elements */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
          className="absolute top-40 right-20 w-20 h-20 bg-secondary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 4 }
          }}
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/20 rounded-full blur-xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* 404 Number with Animation */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <motion.h1 
              className="font-playfair text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient"
            >
              404
            </motion.h1>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 text-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-full h-full" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 text-secondary"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <AlertTriangle className="w-full h-full" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-playfair text-2xl md:text-4xl font-semibold text-foreground mb-4">
              Oops! Page Not Found
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the creative void. 
              Don't worry, it happens to the best of us! Let's get you back on track.
            </p>
            
            {/* Current Path Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 inline-flex items-center px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground font-mono"
            >
              <Search className="w-4 h-4 mr-2" />
              Requested: {location.pathname}
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold"
                onClick={() => window.location.href = "/"}
              >
                <Home className="w-5 h-5 mr-2" />
                Take Me Home
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-muted font-poppins font-semibold"
                onClick={handleRefresh}
                disabled={isAnimating}
              >
                <motion.div
                  animate={isAnimating ? { rotate: 360 } : {}}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                </motion.div>
                {isAnimating ? "Refreshing..." : "Try Again"}
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost"
                className="text-muted-foreground hover:text-foreground font-poppins font-semibold"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-6">
              Or explore our work
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className="h-full bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {link.icon}
                      </motion.div>
                      
                      <h4 className="font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {link.label}
                      </h4>
                      
                      <p className="font-poppins text-sm text-muted-foreground">
                        {link.description}
                      </p>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3 w-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => window.location.href = link.href}
                      >
                        Visit Page
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Help Text */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="font-poppins text-sm text-muted-foreground">
              Still lost? Contact us and we'll help you find what you're looking for.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <ModernFooter />
    </div>
  );
};

export default NotFound;
