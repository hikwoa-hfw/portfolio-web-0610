import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div id="home" >
      <HeroSection />
      <AboutMe />
      <Expertise />
      <Portfolio />
      <Experience /> 
      <Testimonials/>
    </div>
  );
}
