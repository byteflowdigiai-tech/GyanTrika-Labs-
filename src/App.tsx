import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { init } from "@emailjs/browser";

// Initialize EmailJS with Public Key
init("zG-JXRtH0hQyn8B2V");
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LMSLanding from "./pages/lms/LMSLanding";
import CourseDetails from "./pages/lms/CourseDetails";
import Dashboard from "./pages/lms/Dashboard";
import ShopPage from "./pages/ShopPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ProgramsPage from "./pages/ProgramsPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import EventsPage from "./pages/EventsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* LMS Routes */}
              <Route path="/lms" element={<LMSLanding />} />
              <Route path="/lms/course/:courseId" element={<CourseDetails />} />
              <Route path="/lms/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />

              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/kits" element={<ShopPage />} />
              <Route path="/shop/bots" element={<ShopPage />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Projects Route - Single Page */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/robotics" element={<ProjectsPage />} />
              <Route path="/projects/iot" element={<ProjectsPage />} />
              <Route path="/projects/ai" element={<ProjectsPage />} />
              <Route path="/projects/pcb" element={<ProjectsPage />} />
              <Route path="/projects/3d" element={<ProjectsPage />} />

              <Route path="/books" element={<BooksPage />} />
              <Route path="/books/:category" element={<BooksPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-conditions" element={<TermsConditionsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
