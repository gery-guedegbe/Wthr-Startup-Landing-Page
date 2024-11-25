import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Blog from "../sections/Blog/Blog";
import Download from "../sections/Download/Download";
import Faq from "../sections/FAQ/Faq";
import Features from "../sections/Features/Features";
import HeroSection from "../sections/HeroSection/HeroSection";
import ScrollSection from "../sections/ScrollSection/ScrollSection";
import Testimonials from "../sections/Testimonials/Testimonials";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col items-start justify-center gap-16 py-6 lg:gap-28 larg:mx-auto larg:px-56">
      <CustomCursor />
      <NavBar />
      <HeroSection />
      <ScrollSection />
      <Features />
      <Testimonials />
      <Faq />
      <Blog />
      <Download />
      <Footer />
    </div>
  );
};

export default Layout;
