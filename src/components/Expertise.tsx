import Image from "next/image";
import {
  BiLogoPostgresql,
  BiLogoTypescript,
  BiSolidFileJson,
} from "react-icons/bi";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import ExpertiseCard2 from "./ExpertiseCard";
import { SiExpress } from "react-icons/si";

const frontEnd = [
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    link: "https://web.dev/css",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <RiJavascriptFill />,
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <FaReact />,
    title: "React",
    link: "https://reactjs.org/",
  },
  {
    icon: <RiNextjsFill />,
    title: "Next.js",
    link: "https://nextjs.org/",
  },
];
const devTools = [
  {
    icon: <FaDocker />,
    title: "Docker",
    link: "https://www.docker.com/",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    link: "https://git-scm.com/",
  },
  {
    icon: (
      <div className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12">
        <Image
          src="/deepseek.svg"
          alt="deepseek"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
        />
      </div>
    ),
    title: "DeepSeek",
    link: "https://deepseek.com/",
  },
];

const backEnd = [
  {
    icon: <BiSolidFileJson />,
    title: "JSON",
    link: "https://json.org/",
  },
  {
    icon: <BiLogoPostgresql />,
    title: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    icon: <BiLogoTypescript />,
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <SiExpress />,
    title: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: (
      <div className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12">
        <Image
          src="/rest.svg"
          alt="rest api"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
        />
      </div>
    ),
    title: "Rest API",
    link: "https://restapi.com/",
  },
  {
    icon: <SiPrisma />,
    title: "Prisma",
    link: "https://prisma.io/",
  },
];
const Expertise = () => {
  return (
    <main className="yellow py-8 sm:py-12 lg:py-16" id="expertise">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div className="mb-8 flex justify-center sm:mb-12">
          <div className="w-full max-w-[240px] rounded-lg border-2 border-black bg-[#fffcee] p-3 shadow-custom sm:max-w-[280px] sm:rounded-xl sm:border-[3px] sm:p-4 lg:max-w-[320px] lg:p-8">
            <p className="cursor-pointer text-center text-2xl font-semibold text-teal-700 transition-all duration-150 hover:underline hover:underline-offset-auto sm:text-3xl lg:text-4xl">
              Expertise
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <ExpertiseCard2
            job="Front-End"
            icon={frontEnd.map((card) => card.icon)}
            title={frontEnd.map((card) => card.title)}
            link={frontEnd.map((card) => card.link || "#")}
          />
          <ExpertiseCard2
            job="Dev-Tools"
            icon={devTools.map((card) => card.icon)}
            title={devTools.map((card) => card.title)}
            link={devTools.map((card) => card.link || "#")}
          />
          <ExpertiseCard2
            job="Back-End"
            icon={backEnd.map((card) => card.icon)}
            title={backEnd.map((card) => card.title)}
            link={backEnd.map((card) => card.link || "#")}
          />
        </div>
      </div>
    </main>
  );
};

export default Expertise;
