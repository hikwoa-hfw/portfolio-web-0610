import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-yellow-100 py-24">
      <div className="container mx-auto grid grid-cols-3 justify-center items-center">
        <div className="flex justify-center flex-col col-span-2 gap-y-2 ml-8">
          <p>
            &lt;h2 className="text-lg"&gt;
            <span className="text-lg"> Hello, I am Hibban </span>
            &lt;/h2&gt;
          </p>
          <p>
            &lt;h1 className="text-teal-700 text-3xl"&gt;
            <span className="text-teal-700 text-3xl">
              {" "}
              Fullstack Web Developer{" "}
            </span>
            &lt;/h1&gt;
          </p>
          <div>
            <p className="my-2">&lt;p className="text-lg"&gt;</p>
            <p className="text-lg max-w-[940px] my-1">
              I'm a passionate Fullstack Web Developer specializing in building
              fast, scalable, and user-friendly applications. Let's collaborate
              and bring your ideas to life! 🚀
            </p>
            <p>&lt;/p&gt;</p>
          </div>
          <button className="rounded-lg hover:bg-teal-600 hover:text-black p-2 border-teal-700 border-[2px] hover:border-teal-600 w-[200px] mt-8">
          Reach Out!
        </button>
        </div>
        <div className="relative h-[500px] w-full">
          <Image src="/Computer.svg" fill alt="me" objectFit="contain" className="bg-transparent"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
