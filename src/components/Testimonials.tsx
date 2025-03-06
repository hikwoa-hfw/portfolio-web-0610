'use client'

import { Marquee3D } from "./ui/marqueedialog";
import { MarqueeDemo } from "./ui/marqueehorizontal";

const Testimonials = () => {
  return (
    <main className="yellow min-h-screen py-8 sm:py-12 lg:py-16" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] rounded-lg sm:rounded-xl border-2 sm:border-[3px] border-black bg-[#fffcee] p-3 sm:p-4 lg:p-8 shadow-custom">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-700 text-center cursor-pointer transition-all duration-150 hover:underline hover:underline-offset-auto">
              Testimonials
            </p>
          </div>
        </div>

        {/* Marquee Sections */}
        <div className="mt-12 sm:mt-16 lg:mt-24">
          {/* Desktop/Tablet Marquee */}
          <div className="hidden md:block">
            <Marquee3D />
          </div>

          {/* Mobile Marquee */}
          <div className="md:hidden">
            <MarqueeDemo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;