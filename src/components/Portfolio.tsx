import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/cardMod";
import Image from "next/image";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const datas = [
  {
    icon: <RiNextjsFill />,
    link: "https://nextjs.org/",
  },
  {
    icon: <BiLogoTypescript />,
    link: "https://www.typescriptlang.org/",
  },
];

const Portfolio: FC = () => {
  return (
    <main className="yellow min-h-screen py-8 sm:py-12 lg:py-16" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] rounded-lg sm:rounded-xl border-2 sm:border-[3px] border-black bg-[#fffcee] p-3 sm:p-4 lg:p-8 shadow-custom">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-700 text-center cursor-pointer transition-all duration-150 hover:underline hover:underline-offset-auto">
              Portfolio
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <Card className="w-full max-w-[320px] sm:max-w-[600px] lg:max-w-[840px] rounded-lg sm:rounded-xl lg:rounded-2xl border-2 sm:border-[3px] border-black bg-[#fffcee] shadow-custom">
            <CardHeader className="space-y-4 p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/image.png"
                    alt="thumbnail"
                    fill
                    className="rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-black object-cover"
                    priority
                  />
                </div>
              </CardContent>

              <Dialog>
                <DialogTrigger asChild>
                  <CardTitle className="cursor-pointer text-lg sm:text-xl lg:text-2xl font-bold text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto">
                    Company Profile for Hexa Kumpeni Game Booster
                  </CardTitle>
                </DialogTrigger>
                <DialogContent className="w-[90vw] max-w-[800px] p-4 sm:p-6">
                  <DialogHeader className="space-y-2">
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-teal-700">
                      Project Details
                    </DialogTitle>
                    <DialogDescription className="text-sm sm:text-base text-justify text-gray-700">
                      Hexa Kumpeni needed a professional website to showcase
                      their game boosting services. The platform needed to
                      provide a seamless booking experience for customers. I
                      was tasked to develop a responsive web application using
                      Next.js and TypeScript. The goal was to create a fast
                      and user-friendly platform. I built the website using
                      Next.js 13, TypeScript, and Tailwind CSS with focus on
                      performance optimization and responsive design. I
                      implemented continuous deployment through Vercel and
                      utilized Next.js features for better user experience.
                      The website launched successfully with excellent
                      performance metrics and positive user feedback. The
                      platform effectively showcases the company's services
                      and works flawlessly across all devices.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <Link href="https://hexa-game-boosting.vercel.app/" target="_blank">
                      <Button className="w-full sm:w-auto">See the project!</Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>

              <CardContent className="p-0">
                <div className="flex items-center gap-2 sm:gap-4">
                  {datas.map((data, index) => (
                    <Link
                      href={data.link}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-2 sm:p-3 text-3xl sm:text-4xl lg:text-5xl transition-all duration-150 hover:rounded-lg hover:border-2 hover:border-teal-700 hover:shadow-green"
                    >
                      <div className="transition-transform duration-200 group-hover:scale-110">
                        {data.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;