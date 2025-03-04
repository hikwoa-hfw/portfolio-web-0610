import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/cardMod";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const linkData = [
  { title: "Twitter", link: "https://x.com", icon: <FaXTwitter /> },
  { title: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedin /> },
  { title: "GitHub", link: "https://github.com", icon: <FaGithub /> },
];

const HeroSection = () => {
  return (
    <main className="yellow lg:h-screen py-8" id="home">
        <div className="yellow container mx-auto grid lg:py-16 py-4 grid-cols-1 items-center justify-center lg:grid-cols-3">
          <div className="mx-5 lg:ml-8 lg:mx-0 flex h-full lg:col-span-2">
            <div className="mx-auto">
              <Card className="w-full rounded-2xl border-[3px] border-black bg-[#fffcee] shadow-custom lg:w-[540px]">
                <CardHeader className="ml-3 gap-y-2">
                  <CardContent>
                    <div className="relative mx-auto h-[200px] w-[220px] lg:h-[240px] lg:w-[320px]">
                      <Image
                        src="/HeroImage.png"
                        alt="thumbnail"
                        fill
                        className="mx-auto rounded-2xl border-[2px] border-black"
                      />
                    </div>
                  </CardContent>
                  <CardTitle className="text-lg font-semibold lg:text-xl">
                    Hello, I am Hibban
                  </CardTitle>
                  <CardDescription className="cursor-pointer text-2xl font-bold text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto lg:text-4xl">
                    Fullstack Web Developer
                  </CardDescription>
                  <CardDescription className="max-w-[940px] text-black lg:text-lg">
                    I'm a passionate Fullstack Web Developer specializing in
                    building fast, scalable, and user-friendly applications.
                    Let's collaborate and bring your ideas to life! 🚀
                  </CardDescription>
                  <CardContent>
                    <div className="mt-4 flex justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                        <button className="rounded-lg lg:mx-0 mx-4 border-[2px] border-teal-700 p-2 lg:px-4 transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]">
                            Reach Out!
                          </button>
                        </DialogTrigger>
                        <DialogContent className="w-[425px]">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-teal-700">
                              Contact Me
                            </DialogTitle>
                            <DialogDescription className="text-gray-700">
                              Feel free to reach out through any of the
                              platforms below. I'm looking forward to connecting
                              with you!
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
                                  className="m-2 flex max-h-[102px] items-center p-3 transition-all duration-150 hover:rounded-lg hover:border-[2px] hover:border-teal-700 hover:shadow-green"
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
                            <div className="flex items-center gap-2 text-lg">
                              <p>or </p>
                              <h1 className="text-2xl font-bold text-teal-700">
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
                              <button className="rounded-lg border-[2px] border-teal-700 p-2 transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]">
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
          <div className="relative hidden h-[120px] w-full lg:block lg:h-[600px]">
            <Image
              src="/Computer.svg"
              fill
              alt="me"
              objectFit="contain"
              className="bg-transparent"
            />
          </div>
        </div>
    </main>
  );
};

export default HeroSection;
