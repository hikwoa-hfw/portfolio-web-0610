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
    <main className="yellow min-h-screen py-4 sm:py-6 lg:py-8" id="home">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-3">
        <div className="flex h-full lg:col-span-2">
          <div className="w-full max-w-[540px] mx-auto">
            <Card className="rounded-xl sm:rounded-xl lg:rounded-2xl border-2 sm:border-[3px] border-black bg-[#fffcee] shadow-custom">
              <CardHeader className="space-y-3 p-4 sm:p-6">
                <CardContent className="p-0">
                  <div className="relative mx-auto h-[160px] w-[180px] sm:h-[180px] sm:w-[200px] lg:h-[240px] lg:w-[320px]">
                    <Image
                      src="/HeroImage.png"
                      alt="thumbnail"
                      fill
                      className="rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-black object-cover"
                      priority
                    />
                  </div>
                </CardContent>
                <CardTitle className="text-base sm:text-lg lg:text-xl font-semibold">
                  Hello, I am Hibban
                </CardTitle>
                <CardDescription className="cursor-pointer text-xl sm:text-2xl lg:text-4xl font-bold text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto">
                  Fullstack Web Developer
                </CardDescription>
                <CardDescription className="text-sm sm:text-base lg:text-lg text-black">
                  I'm a passionate Fullstack Web Developer specializing in
                  building fast, scalable, and user-friendly applications. Let's
                  collaborate and bring your ideas to life! 🚀
                </CardDescription>
                <CardContent className="p-0">
                  <div className="mt-4 flex justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="rounded-md sm:rounded-lg border-2 border-teal-700 px-3 py-2 sm:px-4 text-sm sm:text-base transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]">
                          Reach Out!
                        </button>
                      </DialogTrigger>
                      <DialogContent className="w-[90vw] max-w-[425px] p-4 sm:p-6">
                        <DialogHeader className="space-y-2">
                          <DialogTitle className="text-xl sm:text-2xl font-bold text-teal-700">
                            Contact Me
                          </DialogTitle>
                          <DialogDescription className="text-sm sm:text-base text-gray-700">
                            Feel free to reach out through any of the platforms
                            below. I'm looking forward to connecting with you!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
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
                                className="flex items-center p-2 sm:p-3 transition-all duration-150 hover:rounded-lg hover:border-2 hover:border-teal-700 hover:shadow-green"
                              >
                                <span className="text-base sm:text-lg">{item.icon}</span>
                                <span className="ml-2 text-sm sm:text-base hover:underline hover:underline-offset-auto">
                                  {item.title}
                                </span>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="grid gap-3 sm:gap-4">
                          <div className="flex items-center gap-2">
                            <p className="text-base sm:text-lg">or</p>
                            <h1 className="text-xl sm:text-2xl font-bold text-teal-700">
                              Mail Me
                            </h1>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-3 sm:gap-4">
                            <Label htmlFor="subject" className="text-right text-sm sm:text-base">
                              Subject
                            </Label>
                            <Input
                              id="subject"
                              placeholder="Enter Your Subject"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-3 sm:gap-4">
                            <Label htmlFor="message" className="text-right text-sm sm:text-base">
                              Message
                            </Label>
                            <Textarea
                              id="message"
                              placeholder="Your Message"
                              className="col-span-3 shadow-sm"
                            />
                          </div>
                          <div className="flex justify-center mt-2">
                            <button className="rounded-md sm:rounded-lg border-2 border-teal-700 px-3 py-2 sm:px-4 text-sm sm:text-base transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]">
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
        <div className="relative hidden lg:block h-[600px]">
          <Image
            src="/Computer.svg"
            fill
            alt="me"
            className="object-contain bg-transparent"
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;