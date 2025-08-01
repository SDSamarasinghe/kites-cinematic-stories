import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Play, Award, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  client: string;
  awards?: string;
  videoUrl?: string;
  liveUrl?: string;
}

const ModernProjectShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Sample project data - replace with your actual projects
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "Cinematic Brand Story",
      category: "Brand Film",
      description: "A compelling narrative that captures the essence of luxury lifestyle, crafted with meticulous attention to visual storytelling and emotional resonance.",
      image: "/src/assets/portfolio-photography.jpg",
      tags: ["Cinematic", "Brand", "Luxury"],
      year: "2024",
      client: "Premium Brand Co.",
      awards: "Gold Film Award",
      videoUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Documentary Series",
      category: "Documentary",
      description: "An intimate exploration of human connections, featuring powerful storytelling through authentic moments and compelling character development.",
      image: "/src/assets/portfolio-videography.jpg",
      tags: ["Documentary", "Human Stories", "Series"],
      year: "2024",
      client: "Media Network",
      videoUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Commercial Campaign",
      category: "Advertisement",
      description: "High-impact commercial content designed to engage audiences and drive results, combining creative vision with strategic messaging.",
      image: "/src/assets/hero-cinematic.jpg",
      tags: ["Commercial", "Campaign", "Creative"],
      year: "2023",
      client: "Tech Startup",
      awards: "Best Commercial",
      videoUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Event Cinematography",
      category: "Event",
      description: "Capturing the magic of special moments with cinematic flair, creating lasting memories through artistic visual storytelling.",
      image: "/src/assets/team-photo.jpg",
      tags: ["Event", "Cinematography", "Wedding"],
      year: "2024",
      client: "Private Client",
      videoUrl: "#"
    }
  ];

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

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as any }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-poppins font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            🎬 Featured Work
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Stories That
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Inspire & Engage
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Explore our portfolio of cinematic masterpieces, each crafted with passion and precision to deliver unforgettable visual experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-elegant"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                layout
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </motion.div>

                  {/* Awards Badge */}
                  {project.awards && (
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/30">
                        <Award className="w-3 h-3 mr-1 text-primary" />
                        {project.awards}
                      </Badge>
                    </motion.div>
                  )}

                  {/* Play Button Overlay */}
                  {hoveredProject === project.id && project.videoUrl && (
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm"
                    >
                      <motion.button
                        className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground shadow-glow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </motion.button>
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.client}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 font-poppins leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.videoUrl && (
                      <Button 
                        size="sm" 
                        className="group/btn flex-1 bg-primary hover:bg-primary/90"
                      >
                        <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Watch Project
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="group/btn border-border/50 hover:border-primary/50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Live
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="group px-8 py-4 border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground font-poppins font-semibold"
          >
            View All Projects
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjectShowcase;
