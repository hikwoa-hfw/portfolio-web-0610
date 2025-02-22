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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const linkData = [
  { title: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
  { title: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedin /> },
];

const HeroSection = () => {
  return (
    <section className="py-20 Yellow">
      <div className="container mx-auto grid grid-cols-3 justify-center items-center">
        <div className="flex col-span-2 ml-8 h-full">
          <div className="mx-auto">
            <Card className="w-[540px] border-[3px] border-black rounded-2xl shadow-custom bg-[#fffcee]">
              <CardHeader className="gap-y-2 ml-3">
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
                <CardContent>
                  <div className="flex justify-center mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="rounded-lg text-lg hover:bg-teal-700 hover:text-[#fffcee] p-2 border-teal-700 border-[2px] transition-colors duration-150">
                          Reach Out!
                        </button>
                      </DialogTrigger>
                      <DialogContent className="w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="text-teal-700 text-2xl font-bold">
                            Contact Me
                          </DialogTitle>
                          <DialogDescription className="text-gray-700">
                            Feel free to reach out through any of the platforms
                            below. I'm looking forward to connecting with you!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-items-center gap-y-2">
                          {linkData.map((item, index) => (
                            <Link
                              href={item.link}
                              key={index}
                              passHref
                              legacyBehavior
                            >
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex p-3 items-center m-2 transition-all duration-150 max-h-[102px] hover:border-teal-700 hover:border-[2px] hover:rounded-lg hover:shadow-green"
                              >
                                <span className="text-lg">{item.icon}</span>
                                <span className="ml-2 hover:underline hover:underline-offset-auto">
                                  {item.title}
                                </span>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="grid gap-4">
                          <div className="flex gap-2 text-lg items-center">
                            <p>or </p>
                            <h1 className="text-teal-700 text-2xl font-bold">
                              {" "}
                              Mail Me
                            </h1>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="subject" className="text-right">
                              Subject
                            </Label>
                            <Input
                              id="subject"
                              placeholder="Enter Your Subject"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="message" className="text-right">
                              Message
                            </Label>
                            <Textarea
                              id="message"
                              placeholder="Your Message"
                              className="col-span-3 shadow-sm"
                            />
                          </div>
                          <div className="mx-24">
                            <button className="rounded-lg hover:bg-teal-700 hover:text-[#fffcee] p-2 border-teal-700 border-[2px] transition-colors duration-150">
                              Send Email!
                            </button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
