import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, Play, ArrowLeft, Eye, Sparkles, ChevronRight } from "lucide-react";
import { videographyCategories } from "@/data/portfolio";
import ModernNavigation from "@/components/ModernNavigation";
import ModernFooter from "@/components/ModernFooter";

const VideoProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { category } = useParams();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const currentCategory = category 
    ? videographyCategories[category as keyof typeof videographyCategories]
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
          {/* Background with Beautiful Fallback */}
          <div className="absolute inset-0 w-full h-full">
            {/* Beautiful Background - Always Visible */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background">
              <div className="absolute inset-0 bg-cinematic-gradient opacity-90" />
              <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
            </div>
            
            {/* Video Layer - Loads on Top */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0"
              onLoadedData={(e) => {
                // Fade in video when loaded
                (e.target as HTMLVideoElement).style.opacity = '1';
                (e.target as HTMLVideoElement).style.transition = 'opacity 1s ease-in-out';
              }}
            >
              <source src="/videos/videography-category.mp4" type="video/mp4" />
            </video>
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <motion.div 
            className="relative z-10 text-center max-w-4xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/video-projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Video Projects
            </Link>
            
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-poppins font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Video className="w-4 h-4 mr-2" />
              Videography
            </motion.div>

            <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-6">
              {currentCategory.title}
            </h1>
            
            <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {currentCategory.description}
            </p>
          </motion.div>
        </section>

        {/* Video Gallery Section */}
        <section ref={ref} className="py-24 bg-background">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentCategory.gallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(item)}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                    <div className="relative h-80 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </motion.div>
                      </div>
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

  // Main video projects page with all categories
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Beautiful Fallback */}
        <div className="absolute inset-0 w-full h-full">
          {/* Beautiful Background - Always Visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background">
            <div className="absolute inset-0 bg-cinematic-gradient opacity-90" />
            <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
          </div>
          
          {/* Video Layer - Loads on Top */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0"
            onLoadedData={(e) => {
              // Fade in video when loaded
              (e.target as HTMLVideoElement).style.opacity = '1';
              (e.target as HTMLVideoElement).style.transition = 'opacity 1s ease-in-out';
            }}
          >
            <source src="/videos/videography-hero.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-sm font-poppins font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Video className="w-4 h-4 mr-2" />
            Video Projects
          </motion.div>

          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-6">
            Imagination is
            <motion.span 
              className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Everything
            </motion.span>
          </h1>
          
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe that every story deserves to be told. With our passion for filmmaking, 
            we specialize in cinematography, filming, and creative video content.
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
            {Object.entries(videographyCategories).map(([key, category], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="group"
              >
                <Link to={`/video-projects/${key}`}>
                  <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                    {category.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-secondary/90 text-secondary-foreground">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    <div className="relative h-64 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-8 h-8 text-secondary ml-1" />
                        </motion.div>
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Button size="sm" variant="secondary" className="bg-background/90">
                          <Play className="w-4 h-4 mr-2" />
                          Watch Videos
                        </Button>
                      </motion.div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                          {category.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <p className="font-poppins text-muted-foreground mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="font-poppins text-sm text-muted-foreground">
                          {category.gallery.length} videos
                        </span>
                        
                        {category.featured && (
                          <div className="flex items-center text-secondary">
                            <Sparkles className="w-4 h-4 mr-1" />
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

export default VideoProjectsPage;
