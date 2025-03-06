import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/cardMod";
import Image from "next/image";

const AboutMe = () => {
  return (
    <main className="yellow py-4 px-4 sm:px-6" id="about">
      <div className="yellow container mx-auto grid items-center justify-center lg:py-6">
        <h1 className="hidden text-2xl sm:text-3xl md:text-4xl text-teal-700">About Me</h1>
        <div className="my-8 sm:my-12 grid gap-4 sm:gap-8 lg:grid-cols-3">
          {/* Image for larger screens */}
          <div className="relative hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[640px] w-full lg:block">
            <Image 
              src="/Hello.svg" 
              alt="Me" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          
          {/* Card Section */}
          <div className="col-span-2 mx-2 sm:mx-4 lg:ml-12 flex items-center">
            <Card className="rounded-xl sm:rounded-2xl border-2 sm:border-[3px] border-black bg-[#fffcee] p-2 sm:p-4 shadow-custom w-full lg:w-[830px]">
              <CardHeader className="flex p-3 sm:p-4">
                {/* Image for mobile screens */}
                <div className="relative h-[150px] sm:h-[180px] md:h-[200px] w-full lg:hidden">
                  <Image 
                    src="/Hello.svg" 
                    alt="Me" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </div>
                <CardTitle className="cursor-pointer text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto">
                  About Me
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-3 sm:p-4">
                {/* Desktop version */}
                <p className="hidden lg:block text-base sm:text-lg leading-relaxed">
                  As a passionate Fullstack Web Developer, I have a strong
                  background in creating dynamic and efficient web applications.
                  My journey in web development has equipped me with expertise
                  in JavaScript, React, Node.js, and TypeScript, along with
                  tools like Docker and Git. I am committed to delivering
                  high-quality work with a focus on timeliness, attention to
                  detail, and clear communication. 🚀
                  <br />
                  <br />
                  I believe in the power of collaboration and am dedicated
                  to building trust-based relationships with clients and
                  colleagues. My loyalty to projects and partners is unwavering,
                  and I strive to support and uplift those I work with.
                  Together, we can achieve remarkable outcomes and drive success
                  with professionalism and integrity. 🤝🌟
                </p>

                {/* Mobile version */}
                <p className="text-sm sm:text-base leading-relaxed lg:hidden">
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