import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ModernIndex from "./pages/ModernIndex";
import PhotographyPage from "./pages/PhotographyPage";
import VideoProjectsPage from "./pages/VideoProjectsPage";
import DesignProjectsPage from "./pages/DesignProjectsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<ModernIndex />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/photography/:category" element={<PhotographyPage />} />
          <Route path="/video-projects" element={<VideoProjectsPage />} />
          <Route path="/video-projects/:category" element={<VideoProjectsPage />} />
          <Route path="/design-projects" element={<DesignProjectsPage />} />
          <Route path="/design-projects/:category" element={<DesignProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
