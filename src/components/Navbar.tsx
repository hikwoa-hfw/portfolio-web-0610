import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const data = [
  { title: "About Me" },
  { title: "Expertise" },
  { title: "Portfolio" },
  { title: "Experience" },
  { title: "Testimonials" },
];

const linkData = [
  { title: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
  { title: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedin /> },
];

const Navbar = () => {
  return (
    <nav className="border-b-[3px] border-teal-700 bg-[#fffcee]">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center justify-center bg-[#fffcee] font-mono text-2xl">
          <span className="mr-2 cursor-pointer text-3xl font-bold text-teal-700">
            &lt;/&gt;
          </span>
          <p className="cursor-pointer hover:underline hover:underline-offset-2">
            Hibban Faruq
          </p>
        </div>
        <div className="flex justify-between gap-4">
          {data.map((item, index) => (
            <button
              className="rounded-lg border-[2px] border-teal-700 p-2 transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]"
              key={index}
            >
              {item.title}
            </button>
          ))}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="rounded-lg border-[2px] border-teal-700 p-2 px-4 transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]">
              Reach Out!
            </button>
          </DialogTrigger>
          <DialogContent className="w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-teal-700">
                Contact Me
              </DialogTitle>
              <DialogDescription className="text-gray-700">
                Feel free to reach out through any of the platforms below. I'm
                looking forward to connecting with you!
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-items-center gap-y-2">
              {linkData.map((item, index) => (
                <Link href={item.link} key={index} passHref legacyBehavior>
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
                <h1 className="text-2xl font-bold text-teal-700"> Mail Me</h1>
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
    </nav>
  );
};

export default Navbar;
