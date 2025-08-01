import { motion, useTransform, useViewportScroll } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  duration = 0.8 
}: AnimatedSectionProps) => {
  const directionMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ 
  children, 
  className = "", 
  staggerDelay = 0.1 
}: StaggerContainerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  speed?: "slow" | "medium" | "fast";
}

export const FloatingElement = ({ 
  children, 
  className = "", 
  intensity = "medium",
  speed = "medium" 
}: FloatingElementProps) => {
  const intensityMap = {
    subtle: { y: [-5, 5, -5], rotate: [-1, 1, -1] },
    medium: { y: [-10, 10, -10], rotate: [-2, 2, -2] },
    strong: { y: [-20, 20, -20], rotate: [-5, 5, -5] },
  };

  const speedMap = {
    slow: 8,
    medium: 6,
    fast: 4,
  };

  return (
    <motion.div
      animate={intensityMap[intensity]}
      transition={{
        duration: speedMap[speed],
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export const MagneticButton = ({ 
  children, 
  className = "", 
  strength = 20,
  onClick 
}: MagneticButtonProps) => {
  return (
    <motion.button
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0px, 0px) scale(1)";
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

interface ParallaxElementProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxElement = ({ 
  children, 
  className = "", 
  speed = 0.5 
}: ParallaxElementProps) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -speed * 100]);

  return (
    <motion.div
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

// Custom hook for scroll-triggered animations
export const useScrollAnimation = () => {
  const variants = {
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

  return { variants };
};
