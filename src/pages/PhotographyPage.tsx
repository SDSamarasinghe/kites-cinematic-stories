import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, ArrowLeft, Eye, Heart, Star, ChevronRight } from "lucide-react";
import { photographyCategories } from "@/data/portfolio";
import ModernNavigation from "@/components/ModernNavigation";
import ModernFooter from "@/components/ModernFooter";

const PhotographyPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const currentCategory = category 
    ? photographyCategories[category as keyof typeof photographyCategories]
    : null;

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  // If specific category is selected, show category detail
  if (currentCategory) {
    return (
      <div className="min-h-screen bg-background">
        <ModernNavigation />
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/placeholder.svg"
            >
              <source src="/videos/photography-category.mp4" type="video/mp4" />
              {/* Fallback gradient */}
            </video>
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <motion.div 
            className="relative z-10 text-center max-w-4xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/photography" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Photography
            </Link>
            
            {/* <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-poppins font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Camera className="w-4 h-4 mr-2" />
              Photography
            </motion.div> */}

            <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-6">
              {currentCategory.title}
            </h1>
            
            <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {currentCategory.description}
            </p>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section ref={ref} className="py-24 bg-background">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.gallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-primary/60" />
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="bg-background/90 rounded-full p-3">
                          <Eye className="w-6 h-6 text-primary" />
                        </div>
                      </motion.div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-muted-foreground text-sm">
                        {item.description}
                      </p>
                      <Badge variant="secondary" className="mt-3">
                        {item.category}
                      </Badge>
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
  }

  // Main photography page with all categories
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src="/videos/photography-hero.mp4" type="video/mp4" />
            {/* Fallback gradient */}
          </video>
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
            <Camera className="w-4 h-4 mr-2" />
            Photography Portfolio
          </motion.div>

          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-6">
            Capturing Life's
            <motion.span 
              className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Perfect Moments
            </motion.span>
          </h1>
          
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From weddings to real estate, product photography to lifestyle shoots - 
            we specialize in creating stunning visuals that tell your story.
          </p>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section ref={ref} className="py-24 bg-background">
        <motion.div 
          className="max-w-7xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(photographyCategories).map(([key, category], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="group"
              >
                <Link to={`/photography/${key}`}>
                  <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                    {category.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    <div className="relative h-64 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-primary/60" />
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Button size="sm" variant="secondary" className="bg-background/90">
                          <Eye className="w-4 h-4 mr-2" />
                          View Gallery
                        </Button>
                      </motion.div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <p className="font-poppins text-muted-foreground mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="font-poppins text-sm text-muted-foreground">
                          {category.gallery.length} photos
                        </span>
                        
                        {category.featured && (
                          <div className="flex items-center text-primary">
                            <Heart className="w-4 h-4 mr-1" />
                            <span className="text-sm font-medium">Popular</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default PhotographyPage;
