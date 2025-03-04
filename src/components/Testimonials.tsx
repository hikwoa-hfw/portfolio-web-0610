'use client'

import { Marquee3D } from "./ui/marqueedialog";
import { MarqueeDemo } from "./ui/marqueehorizontal";

const Testimonials = () => {
  return (
    <main className="yellow h-screen" id="testimonials">
      <div className="yellow container mx-auto py-16">
        <div className="my-8 max-w-[240px] lg:max-w-[320px] rounded-xl border-[3px] border-black bg-[#fffcee] lg:mx-8 mx-auto p-4 lg:p-8 text-3xl lg:text-4xl font-semibold text-teal-700 shadow-custom">
          <p className="cursor-pointer transition-all duration-150 hover:underline hover:underline-offset-auto">
            Testimonials
          </p>
        </div>
        <div className="mt-24 hidden md:block">
          <Marquee3D />
        </div>
        <div className="mt-24 md:hidden">
          <MarqueeDemo />
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
