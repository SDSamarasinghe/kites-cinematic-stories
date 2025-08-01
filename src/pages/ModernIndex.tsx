import { useState, useEffect } from "react";
import ModernNavigation from "@/components/ModernNavigation";
import ModernHero from "@/components/ModernHero";
import ModernProjectShowcase from "@/components/ModernProjectShowcase";
import ModernContact from "@/components/ModernContact";
import ModernTestimonials from "@/components/ModernTestimonials";
import ModernServices from "@/components/ModernServices";
import ModernFooter from "@/components/ModernFooter";
import ModernLoader from "@/components/ModernLoader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import About from "@/components/About";

const ModernIndex = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demonstration
    // In production, you might want to load critical resources here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ModernLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background font-poppins">
      <ModernNavigation />
      
      {/* Hero Section */}
      <ModernHero />
      
      {/* Services Section */}
      <AnimatedSection className="relative">
        <ModernServices />
      </AnimatedSection>
      
      {/* Portfolio Section - Using Modern Showcase */}
      <section id="portfolio">
        <ModernProjectShowcase />
      </section>
      
      {/* About Section */}
      <AnimatedSection direction="left" delay={0.2}>
        <About />
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <StaggerContainer>
        <StaggerItem>
          <ModernTestimonials />
        </StaggerItem>
      </StaggerContainer>
      
      {/* Contact Section */}
      <AnimatedSection direction="up" delay={0.1}>
        <ModernContact />
      </AnimatedSection>
      
      {/* Footer */}
      <ModernFooter />
    </div>
  );
};

export default ModernIndex;
