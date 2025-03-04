import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/cardMod";
import Image from "next/image";

const AboutMe = () => {
  return (
    <main className="yellow py-4" id="about">
      <div className="yellow container mx-auto grid items-center justify-center lg:py-12">
        <h1 className="hidden text-4xl text-teal-700">About Me</h1>
        <div className="my-12 grid gap-8 lg:grid-cols-3">
          <div className="relative hidden h-[640px] w-full lg:block">
            <Image src="/Hello.svg" alt="Me" fill objectFit="contain" />
          </div>
          <div className="col-span-2 mx-6 lg:ml-12 flex items-center">
            <Card className="rounded-2xl border-[3px] border-black bg-[#fffcee] p-4 shadow-custom lg:w-[830px]">
              <CardHeader className="flex">
                <div className="relative h-[200px] w-full lg:hidden">
                  <Image src="/Hello.svg" alt="Me" fill objectFit="contain" />
                </div>
                <CardTitle className="cursor-pointer text-2xl lg:text-4xl text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto">
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="hidden lg:text-lg leading-relaxed lg:block">
                  As a passionate Fullstack Web Developer, I have a strong
                  background in creating dynamic and efficient web applications.
                  My journey in web development has equipped me with expertise
                  in JavaScript, React, Node.js, and TypeScript, along with
                  tools like Docker and Git. I am committed to delivering
                  high-quality work with a focus on timeliness, attention to
                  detail, and clear communication. 🚀
                  <br />
                  <br />I believe in the power of collaboration and am dedicated
                  to building trust-based relationships with clients and
                  colleagues. My loyalty to projects and partners is unwavering,
                  and I strive to support and uplift those I work with.
                  Together, we can achieve remarkable outcomes and drive success
                  with professionalism and integrity. 🤝🌟
                </p>
                <p className="text-[14px] leading-relaxed lg:hidden">
                  As a Fullstack Developer, I craft efficient web applications
                  using JavaScript, React, and Node.js. I deliver high-quality
                  work through clear communication and collaborative
                  development. My commitment to excellence drives me to exceed
                  expectations while supporting team success. Together, we
                  create innovative solutions with professionalism and
                  integrity. 🚀
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
