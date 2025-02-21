import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutMe = () => {
  return (
    <div className="Yellow">
      <div className="container mx-auto grid justify-center items-center py-16 Yellow">
          <h1 className="text-teal-700 text-4xl hidden">About Me</h1>
        <div className="grid grid-cols-3 my-12 gap-8">
          <div className="relative h-[640px] w-full">
            <Image src="/Hello.svg" alt="Me" fill objectFit="contain" />
          </div>
          <div className="col-span-2 flex items-center ml-12">
            <Card className="border-black rounded-2xl border-[3px] w-[830px] shadow-custom bg-[#fffcee] p-4">
              <CardHeader>
                <CardTitle className="text-teal-700 text-4xl font-bold">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  As a Fullstack Web Developer, I specialize in creating
                  innovative and reliable solutions using Next.js, Node.js,
                  React.js, and more. I am committed to building trust-based
                  relationships with my clients and colleagues, ensuring
                  high-quality results with professionalism and integrity. 🚀
                  <br />
                  <br />I believe in the power of teamwork and am dedicated to
                  supporting and uplifting those I work with. My loyalty to
                  projects and partners is unwavering, and I am eager to
                  collaborate with others who share these values. Together, we
                  can achieve remarkable outcomes and drive success. 🌟
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
