import AboutMe from "@/components/AboutMe";
import Expertise from "@/components/Expertise";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Expertise />
    </div>
  );
}
