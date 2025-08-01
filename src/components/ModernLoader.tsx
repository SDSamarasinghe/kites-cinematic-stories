import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ModernLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const ModernLoader = ({ onComplete, duration = 3000 }: ModernLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + (100 / (duration / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${progress}%`,
      transition: {
        duration: 0.1,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isComplete ? "exit" : "hidden"}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mb-12"
        >
          <motion.div
            className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-primary-foreground font-bold text-3xl">K</span>
          </motion.div>
          
          <motion.h1
            className="font-playfair text-4xl font-bold text-foreground mb-2"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Kites
          </motion.h1>
          
          <p className="text-muted-foreground font-poppins text-lg">
            Cinematic Stories
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative w-80 mx-auto">
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <motion.div
              variants={progressVariants}
              animate="visible"
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
            >
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>
          
          <motion.div
            className="mt-4 text-center"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <span className="text-sm text-muted-foreground font-poppins">
              {Math.round(progress)}%
            </span>
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="mt-8"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <p className="text-muted-foreground font-poppins">
            Crafting your experience...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ModernLoader;
