"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";

const data = [
  { title: "About Me", id: "about" },
  { title: "Expertise", id: "expertise" },
  { title: "Portfolio", id: "portfolio" },
  // { title: "Experience", id: "experience" },
  { title: "Testimonials", id: "testimonials" },
];

const linkData = [
  // { title: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
  { title: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedin /> },
  {title: "GitHub", link: "https://github.com/hikwoa-hfw", icon: <FaGithub/>}
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b-[3px] border-teal-700 bg-[#fffcee]">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="#" passHref className="mx-4">
          <div className="flex items-center justify-center bg-[#fffcee] font-mono text-lg lg:text-2xl">
            <span className="mr-2 cursor-pointer text-xl font-bold text-teal-700 lg:text-3xl">
              &lt;/&gt;
            </span>
            <p className="hidden cursor-pointer hover:underline hover:underline-offset-2 lg:block">
              Hibban Faruq
            </p>
            <p className="cursor-pointer hover:underline hover:underline-offset-2 lg:hidden">
              H F
            </p>
          </div>
        </Link>

        <div className="hidden justify-between gap-4 lg:flex">
          {data.map((item, index) => (
            <Link href={`#${item.id}`} key={index} passHref>
              <button className="rounded-lg border-[2px] border-teal-700 p-2 transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center rounded-lg border-[2px] border-teal-700 p-2 text-xl transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]">
                <RxHamburgerMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {data.map((item, index) => (
                  <Link
                    href={`#${item.id}`}
                    key={index}
                    passHref
                    className="cursor-pointer"
                  >
                    <DropdownMenuItem>{item.title}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="mx-4 rounded-lg border-[2px] border-teal-700 p-2 transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee] lg:mx-0 lg:px-4">
                Reach Out!
              </button>
            </DialogTrigger>
            <DialogContent className="w-[360px] rounded-xl lg:w-[425px]">
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
                <form
                  action="https://formspree.io/f/manjnyrz"
                  method="POST"
                  className="grid gap-4"
                >
                  {/* Email Input */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="email" className="text-right">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="col-span-3 rounded border px-3 py-2"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="message" className="text-right">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      className="col-span-3 rounded border px-3 py-2 shadow-sm"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mx-24">
                    <button
                      type="submit"
                      className="rounded-lg border-[2px] border-teal-700 p-2 transition-colors duration-150 hover:bg-teal-700 hover:text-[#fffcee]"
                    >
                      Send Email!
                    </button>
                  </div>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
