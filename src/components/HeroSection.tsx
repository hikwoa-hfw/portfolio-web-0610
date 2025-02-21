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

const HeroSection = () => {
  return (
    <section className="py-20 Yellow">
      <div className="container mx-auto grid grid-cols-3 justify-center items-center">
        <div className="flex col-span-2 gap-y-2 ml-8 h-full">
          <div className="mx-auto">
            <Card className="w-[540px] border-[3px] border-black rounded-2xl shadow-custom bg-[#fffcee]">
              <CardHeader className="gap-y-2 m-2">
                <CardContent>
                  <Image
                    src="/HeroImage.png"
                    alt="thumbnail"
                    width={320}
                    height={80}
                    className="mx-auto border-[2px] border-black rounded-2xl"
                  />
                </CardContent>
                <CardTitle className="text-xl font-semibold">
                  Hello, I am Hibban
                </CardTitle>
                <CardDescription className="text-teal-700 text-4xl font-bold">
                  Fullstack Web Developer
                </CardDescription>
                <CardDescription className="max-w-[940px] text-black text-lg">
                  I'm a passionate Fullstack Web Developer specializing in
                  building fast, scalable, and user-friendly applications. Let's
                  collaborate and bring your ideas to life! 🚀
                </CardDescription>
                <CardContent >
                  <div className="flex justify-center mt-4" >
                    <button className="rounded-lg hover:bg-teal-700 mx-auto hover:text-[#fffcee] p-2 border-teal-700 border-[2px] transition-colors duration-150 hover:border-teal-700 w-[200px]">
                      Reach Out!
                    </button>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="relative h-[500px] w-full">
          <Image
            src="/Computer.svg"
            fill
            alt="me"
            objectFit="contain"
            className="bg-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
