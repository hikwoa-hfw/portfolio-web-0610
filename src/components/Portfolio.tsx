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
import { portfolioData } from "./portfolioData";

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
    <main className="yellow py-8 sm:py-12 lg:py-16" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div className="mb-8 flex justify-center sm:mb-12">
          <div className="w-full max-w-[240px] rounded-lg border-2 border-black bg-[#fffcee] p-3 shadow-custom sm:max-w-[280px] sm:rounded-xl sm:border-[3px] sm:p-4 lg:max-w-[320px] lg:p-8">
            <p className="cursor-pointer text-center text-2xl font-semibold text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto sm:text-3xl lg:text-4xl">
              Portfolio
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid place-items-center grid-cols-1 lg:flex lg:justify-center gap-12 px-4 sm:px-6 lg:px-8">
          {portfolioData.map((data, index) => (
            <Card className="w-full max-w-[320px] rounded-lg border-2 border-black bg-[#fffcee] shadow-custom sm:max-w-[600px] sm:rounded-xl sm:border-[3px] lg:max-w-[840px] lg:rounded-2xl" key={index}>
              <CardHeader className="space-y-4 p-4 sm:p-6">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={data.image}
                      alt={`${data.title} image`}
                      fill
                      className="rounded-lg border-2 border-black object-cover sm:rounded-xl lg:rounded-2xl"
                      priority
                    />
                  </div>
                </CardContent>

                <Dialog>
                  <DialogTrigger asChild>
                    <CardTitle className="cursor-pointer text-lg font-bold text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto sm:text-xl lg:text-2xl">
                     {data.title}
                    </CardTitle>
                  </DialogTrigger>
                  <DialogContent className="w-[90vw] max-w-[800px] p-4 sm:p-6">
                    <DialogHeader className="space-y-2">
                      <DialogTitle className="text-xl font-bold text-teal-700 sm:text-2xl">
                        Project Details
                      </DialogTitle>
                      <DialogDescription className="text-justify text-sm text-gray-700 sm:text-base">
                        {data.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <Link
                        href={data.link}
                        target="_blank"
                      >
                        <Button className="w-full sm:w-auto">
                          See the project!
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>

                <CardContent className="p-0">
                  <div className="flex items-center gap-2 sm:gap-4">
                    {data.icons.map((icon, index) => (
                      <Link
                        href={icon.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center p-2 text-3xl transition-all duration-150 hover:rounded-lg hover:border-2 hover:border-teal-700 hover:shadow-green sm:p-3 sm:text-4xl lg:text-5xl"
                      >
                        <div className="transition-transform duration-200 group-hover:scale-110">
                          {icon.icon}
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
