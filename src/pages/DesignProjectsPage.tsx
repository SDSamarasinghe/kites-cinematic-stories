import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, ArrowLeft, Eye, Sparkles, ChevronRight, Layers, Box } from "lucide-react";
import { designCategories } from "@/data/portfolio";
import ModernNavigation from "@/components/ModernNavigation";
import ModernFooter from "@/components/ModernFooter";

const DesignProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { category } = useParams();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const currentCategory = category 
    ? designCategories[category as keyof typeof designCategories]
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

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case "2d-design":
        return <Layers className="w-5 h-5" />;
      case "3d-design":
        return <Box className="w-5 h-5" />;
      case "infographics":
        return <Palette className="w-5 h-5" />;
      default:
        return <Palette className="w-5 h-5" />;
    }
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
              <source src="/videos/design-category.mp4" type="video/mp4" />
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
            <Link to="/design-projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Design Projects
            </Link>
            
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-poppins font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Palette className="w-4 h-4 mr-2" />
              Design
            </motion.div>

            <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-6">
              {currentCategory.title}
            </h1>
            
            <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {currentCategory.description}
            </p>
          </motion.div>
        </section>

        {/* Design Gallery Section */}
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
                  onClick={() => setSelectedProject(item)}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                    <div className="relative h-80 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-6 h-6 text-primary-foreground" />
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

  // Main design projects page with all categories
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
            <source src="/videos/design-hero.mp4" type="video/mp4" />
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
            <Palette className="w-4 h-4 mr-2" />
            Design Projects
          </motion.div>

          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-6">
            Creative
            <motion.span 
              className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Excellence
            </motion.span>
          </h1>
          
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From stunning 2D graphics to immersive 3D animations, we create visual experiences 
            that captivate and inspire. Every design tells a story.
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
            {Object.entries(designCategories).map(([key, category], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="group"
              >
                <Link to={`/design-projects/${key}`}>
                  <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-xl border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500">
                    {category.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-primary/90 text-primary-foreground">
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
                          className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          {getCategoryIcon(key)}
                        </motion.div>
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Button size="sm" variant="default" className="bg-background/90 text-foreground hover:bg-background">
                          <Eye className="w-4 h-4 mr-2" />
                          View Designs
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
                          {category.gallery.length} projects
                        </span>
                        
                        {category.featured && (
                          <div className="flex items-center text-primary">
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

export default DesignProjectsPage;
