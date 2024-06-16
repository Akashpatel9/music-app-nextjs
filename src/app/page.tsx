import FeaturedCards from "./components/FeaturedCards";
import FeaturedCourses from "./components/UpcomingWebinars";
import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedSection/>
    <WhyChooseUs/>
    <FeaturedCards/>
    <FeaturedCourses/>
    <Instructor/>
    <Footer/>
   </main>
  );
}
