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

// Perbaikan interface Props
interface Props {
  // Props tidak diperlukan karena data sudah ada di dalam komponen
}

// Pindahkan data ke dalam array of objects yang lebih terstruktur
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

// Hapus props yang tidak diperlukan
const Portfolio: FC = () => {
  return (
    <main className="yellow lg:h-screen" id="portfolio">
      <div className="yellow container mx-auto py-16">
        <div className="mx-auto flex max-w-[240px] rounded-xl border-[3px] border-black bg-[#fffcee] p-4 text-3xl font-semibold text-teal-700 shadow-custom lg:mx-8 lg:my-8 lg:max-w-[320px] lg:p-8 lg:text-4xl">
          <p className="mx-auto cursor-pointer transition-all duration-150 hover:underline hover:underline-offset-auto">
            Portfolio
          </p>
        </div>
        <div className="flex">
          <div className="mx-auto mt-8 min-w-[320px] md:max-w-[840px] lg:mx-8">
            <Card className="mx-auto flex w-full rounded-2xl border-[3px] border-black bg-[#fffcee] shadow-custom">
              <CardHeader className="ml-3 gap-y-2">
                <CardContent>
                  <Image
                    src="/image.png"
                    alt="thumbnail"
                    width={480}
                    height={80}
                    className="mx-auto rounded-2xl border-[2px] border-black"
                  />
                </CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <CardTitle className="cursor-pointer text-2xl font-bold text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto">
                      Company Profile for Hexa Kumpeni Game Booster
                    </CardTitle>
                  </DialogTrigger>
                  <DialogContent className="w-[360px] rounded-xl lg:w-[800px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-teal-700">
                        Project Details
                      </DialogTitle>
                      <DialogDescription className="text-justify text-gray-700">
                        Hexa Kumpeni needed a professional website to showcase
                        their game boosting services. The platform needed to
                        provide a seamless booking experience for customers. I
                        was tasked to develop a responsive web application using
                        Next.js and TypeScript. The goal was to create a fast
                        and user-friendly platform.I built the website using
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
                    <Link href="https://hexa-game-boosting.vercel.app/" target="_blank"> 
                      <Button>See the project!</Button>
                    </Link>
                  </DialogContent>
                </Dialog>

                <CardContent>
                  <div className="flex max-h-[70px] gap-2">
                    {datas.map((data, index) => (
                      <Link
                        href={data.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-2 flex max-h-[102px] flex-col items-center p-3 text-5xl transition-all duration-150 hover:rounded-lg hover:border-[2px] hover:border-teal-700 hover:shadow-green"
                      >
                        {data.icon}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
