import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="container mx-auto grid justify-center items-center py-24">
      <div>
        <h1 className="text-teal-700 text-4xl">
          About Me
        </h1>
      </div>
      <div className="grid grid-cols-3 my-14 gap-8">
        <div className="relative h-[500px] w-full">
          <Image src="/Hello.svg" alt="Me" fill objectFit="contain" />
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-lg leading-relaxed">
            As a Fullstack Web Developer, I am committed to building not just applications, but also strong, trust-based relationships with my clients and colleagues. My expertise in Next.js, Node.js, React.js, Express, HTML, CSS, JavaScript, TypeScript, and Docker allows me to deliver solutions that are both innovative and reliable. 🚀
            <br /><br />
            I believe in the power of solidarity and teamwork, always striving to support and uplift those I work with. 🤝 My loyalty to my projects and partners is unwavering, ensuring that I consistently deliver high-quality results with professionalism and integrity. 🔒
            <br /><br />
            I am dedicated to maintaining a high standard of excellence in every endeavor, and I am eager to collaborate with others who share these values. Together, we can achieve remarkable outcomes and drive success. 🌟 Let's build something exceptional together! 💡
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;