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
    <nav className="bg-[#fffcee] border-b-[3px] border-teal-700">
      <div className="container flex mx-auto justify-between items-center py-4">
        <div className="items-center font-mono flex text-2xl justify-center bg-[#fffcee]">
          <span className="text-teal-700 font-bold text-3xl mr-2 cursor-pointer">
            &lt;/&gt;
          </span>
          <p className="hover:underline-offset-2 hover:underline cursor-pointer">
            Hibban Faruq
          </p>
        </div>
        <div className="flex justify-between gap-4">
          {data.map((item, index) => (
            <button
              className="rounded-lg hover:bg-teal-700 hover:text-[#fffcee] p-2 border-[2px] border-teal-700 transition-colors duration-150"
              key={index}
            >
              {item.title}
            </button>
          ))}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="rounded-lg hover:bg-teal-700 hover:text-[#fffcee] p-2 border-teal-700 border-[2px] transition-colors duration-150">
              Reach Out!
            </button>
          </DialogTrigger>
          <DialogContent className="w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-teal-700 text-2xl font-bold">
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
                    className="flex p-3 items-center m-2 transition-all duration-150 max-h-[102px] hover:border-teal-700 hover:border-[2px] hover:rounded-lg hover:shadow-green"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="ml-2 hover:underline hover:underline-offset-auto">{item.title}</span>
                  </a>
                </Link>
              ))}
            </div>
            <div className="grid gap-4">
              <div className="flex gap-2 text-lg items-center">
                <p>or </p>
                <h1 className="text-teal-700 text-2xl font-bold"> Mail Me</h1>
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
    </nav>
  );
};

export default Navbar;
