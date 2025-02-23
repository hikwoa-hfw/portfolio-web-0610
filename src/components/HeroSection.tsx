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
    <section className="Yellow py-20">
      <div className="container mx-auto grid grid-cols-3 items-center justify-center">
        <div className="col-span-2 ml-8 flex h-full">
          <div className="mx-auto">
            <Card className="w-[540px] rounded-2xl border-[3px] border-black bg-[#fffcee] shadow-custom">
              <CardHeader className="ml-3 gap-y-2">
                <CardContent>
                  <Image
                    src="/HeroImage.png"
                    alt="thumbnail"
                    width={320}
                    height={80}
                    className="mx-auto rounded-2xl border-[2px] border-black"
                  />
                </CardContent>
                <CardTitle className="text-xl font-semibold">
                  Hello, I am Hibban
                </CardTitle>
                <CardDescription className="cursor-pointer text-4xl font-bold text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto">
                  Fullstack Web Developer
                </CardDescription>
                <CardDescription className="max-w-[940px] text-lg text-black">
                  I'm a passionate Fullstack Web Developer specializing in
                  building fast, scalable, and user-friendly applications. Let's
                  collaborate and bring your ideas to life! 🚀
                </CardDescription>
                <CardContent>
                  <div className="mt-4 flex justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="rounded-lg border-[2px] border-teal-700 p-2 px-4 text-lg transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]">
                          Reach Out!
                        </button>
                      </DialogTrigger>
                      <DialogContent className="w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-teal-700">
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
