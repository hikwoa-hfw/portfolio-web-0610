import AboutMe from "@/components/AboutMe";
import Expertise from "@/components/Expertise";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Expertise />
      <Testimonials/>
    </div>
  );
}
