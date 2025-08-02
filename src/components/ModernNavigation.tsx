import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const ModernNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    // Only handle scroll-based navigation on the home page
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      let foundSection = null;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            foundSection = section;
            break;
          }
        }
      }
      // If at the very top of the page, always select 'home'
      if (window.scrollY < 50) {
        setActiveSection("home");
      } else if (foundSection) {
        setActiveSection(foundSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/#services" },
    { 
      id: "portfolio", 
      label: "Portfolio", 
      href: "#", 
      dropdown: true,
      submenu: [
        { label: "Photography", href: "/photography" },
        { label: "Video Projects", href: "/video-projects" },
        { label: "Design Projects", href: "/design-projects" }
      ]
    },
    { id: "contact", label: "Contact", href: "/#contact" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      // Handle hash navigation on home page
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (href === "/") {
      // Navigate to home and scroll to top
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Navigate to home page from other pages
        window.location.href = "/";
      }
    }
    // For other routes, let React Router handle it
    setIsOpen(false);
    setPortfolioDropdown(false);
  };

  const isActiveRoute = (item: any) => {
    if (item.id === "home") {
      return location.pathname === "/";
    }
    if (item.id === "about") {
      return location.pathname === "/about";
    }
    if (item.id === "portfolio") {
      return location.pathname.includes("/photography") || 
             location.pathname.includes("/video-projects") || 
             location.pathname.includes("/design-projects");
    }
    return false;
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as any,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as any,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </motion.div>
              <div>
                <h1 className="font-playfair font-bold text-xl text-foreground">
                  Kites
                </h1>
                <p className="text-xs text-muted-foreground font-poppins">
                  Digital Marketing
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setPortfolioDropdown(true)}
                    onMouseLeave={() => setPortfolioDropdown(false)}
                  >
                    <motion.button
                      className={`flex items-center font-poppins font-medium transition-colors ${
                        isActiveRoute(item)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                      {isActiveRoute(item) && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                          layoutId="activeIndicator"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>

                    {/* Dropdown Menu */}
                    {portfolioDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-glow overflow-hidden z-50"
                        onMouseEnter={() => setPortfolioDropdown(true)}
                        onMouseLeave={() => setPortfolioDropdown(false)}
                      >
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-poppins"
                            onClick={() => {
                              setPortfolioDropdown(false);
                              window.scrollTo({ top: 0, behavior: 'auto' });
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <>
                    {item.href.startsWith("/#") || item.href === "/" ? (
                      <motion.button
                        onClick={() => handleNavigation(item.href)}
                        className={`relative font-poppins font-medium transition-colors ${
                          isActiveRoute(item)
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                        {isActiveRoute(item) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                            layoutId="activeIndicator"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    ) : (
                      <motion.button
                        onClick={() => handleNavigation(item.href)}
                        className={`relative font-poppins font-medium transition-colors ${
                          isActiveRoute(item)
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                        {isActiveRoute(item) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                            layoutId="activeIndicator"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button Removed */}

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-4 border-t border-border/20 mt-4">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.dropdown ? (
                  <div>
                    <motion.div
                      variants={mobileItemVariants}
                      className={`block w-full text-left px-4 py-3 rounded-xl font-poppins font-medium transition-all ${
                        isActiveRoute(item)
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-foreground hover:bg-card hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </motion.div>
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            window.scrollTo({ top: 0, behavior: 'auto' });
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {item.href.startsWith("/#") || item.href === "/" ? (
                      <motion.button
                        variants={mobileItemVariants}
                        onClick={() => handleNavigation(item.href)}
                        className={`block w-full text-left px-4 py-3 rounded-xl font-poppins font-medium transition-all ${
                          isActiveRoute(item)
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-foreground hover:bg-card hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    ) : (
                      <motion.button
                        variants={mobileItemVariants}
                        onClick={() => handleNavigation(item.href)}
                        className={`block w-full text-left px-4 py-3 rounded-xl font-poppins font-medium transition-all ${
                          isActiveRoute(item)
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-foreground hover:bg-card hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    )}
                  </>
                )}
              </div>
            ))}
            
            <motion.div
              variants={mobileItemVariants}
              className="pt-4"
            >
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold"
                onClick={() => handleNavigation("/#contact")}
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.nav>
  );
};

export default ModernNavigation;
