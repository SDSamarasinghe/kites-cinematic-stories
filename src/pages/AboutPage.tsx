import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Video, 
  Palette, 
  Award, 
  Users, 
  Target,
  Heart,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import ModernNavigation from "@/components/ModernNavigation";
import ModernFooter from "@/components/ModernFooter";
import { videoBackgrounds } from "@/config/videoBackgrounds";

const AboutPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const achievementsRef = useRef(null);

  // Use centralized config for video background
  const externalHeroVideoUrl = videoBackgrounds.aboutHero;

  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion-Driven",
      description: "Every project we undertake is fueled by genuine passion for visual storytelling and creative excellence."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Client-Focused",
      description: "Your vision is our mission. We collaborate closely to bring your unique story to life with precision."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "We embrace cutting-edge technology and creative techniques to deliver exceptional visual experiences."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Excellence",
      description: "No compromise on quality. Every frame, every design element is crafted to exceed expectations."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "50+", label: "Awards Won", icon: <Award className="w-5 h-5" /> },
    { number: "5", label: "Years Experience", icon: <Star className="w-5 h-5" /> }
  ];

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional photography services for weddings, real estate, products, and lifestyle shoots.",
      categories: ["Wedding", "Real Estate", "Product", "Lifestyle", "Headshots"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Videography",
      description: "Cinematic video production from commercial content to wedding films and music videos.",
      categories: ["Commercial", "Wedding", "Music Videos", "Social Media", "Motion Graphics"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Creative design solutions including 2D graphics, 3D animations, and compelling infographics.",
      categories: ["2D Design", "3D Animation", "Infographics", "Branding", "Web Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video or Vimeo Embed */}
        <div className="absolute inset-0 w-full h-full">
          {externalHeroVideoUrl && externalHeroVideoUrl.includes("player.vimeo.com") ? (
            <iframe
              src={externalHeroVideoUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full object-cover"
              title="about-hero"
              style={{ pointerEvents: 'none' }}
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/placeholder.svg"
              src={externalHeroVideoUrl || "/videos/about-hero.mp4"}
            />
          )}
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-poppins font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            About Kites Image
          </motion.div>

          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-6">
            Crafting Visual
            <motion.span 
              className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Stories
            </motion.span>
          </h1>
          
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            We are a passionate team of creatives specializing in photography, videography, and design. 
            Every project is an opportunity to tell a unique story through stunning visuals.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Our Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-24 bg-muted/20">
        <motion.div 
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isStoryInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-6">
                Our Story
              </Badge>
              
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
                Founded on Creative Passion
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kites Image was born from a simple belief: every moment, every brand, and every story 
                  deserves to be captured and told with exceptional creativity and technical excellence.
                </p>
                
                <p>
                  What started as a passion project has evolved into a full-service creative studio that 
                  serves clients across photography, videography, and design. We've had the privilege of 
                  working with amazing individuals, couples, and businesses to bring their visions to life.
                </p>
                
                <p>
                  Our approach combines artistic vision with cutting-edge technology, ensuring that every 
                  project we deliver exceeds expectations and creates lasting impact.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">Our Creative Journey</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-background">
        <motion.div 
          className="max-w-7xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isValuesInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              Our Values
            </Badge>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every interaction, every project, and every creative decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full text-center p-8 bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {value.icon}
                    </motion.div>
                    
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-muted/20">
        <motion.div 
          className="max-w-7xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isValuesInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              Our Expertise
            </Badge>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
              What We Do Best
            </h2>
            
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              From capturing precious moments to creating compelling brand visuals, we offer comprehensive creative services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full p-8 bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="font-poppins text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((category, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-24 bg-background">
        <motion.div 
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isAchievementsInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              Our Impact
            </Badge>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
              Achievements & Milestones
            </h2>
            
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <Card className="p-8 bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                  <CardContent className="p-0">
                    <motion.div
                      className="flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.2 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    
                    <motion.div
                      className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                    >
                      {achievement.number}
                    </motion.div>
                    
                    <p className="font-poppins text-sm text-muted-foreground">
                      {achievement.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default AboutPage;
