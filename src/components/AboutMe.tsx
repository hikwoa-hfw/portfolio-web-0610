import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/cardMod";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="Yellow">
      <div className="Yellow container mx-auto grid items-center justify-center py-16">
        <h1 className="hidden text-4xl text-teal-700">About Me</h1>
        <div className="my-12 grid grid-cols-3 gap-8">
          <div className="relative h-[640px] w-full">
            <Image src="/Hello.svg" alt="Me" fill objectFit="contain" />
          </div>
          <div className="col-span-2 ml-12 flex items-center">
            <Card className="w-[830px] rounded-2xl border-[3px] border-black bg-[#fffcee] p-4 shadow-custom">
              <CardHeader>
                <CardTitle className="cursor-pointer text-4xl text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto">
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
