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
    icon: <Image src="/deepseek.svg" alt="deepseek" width={48} height={48} />,
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
    icon: <Image src="/Expressjs.svg" alt="express" width={48} height={48} />,
    title: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: <Image src="/rest.svg" alt="express" width={48} height={48} />,
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
    <main className="yellow min-h-screen" id="expertise">
      <div className="yellow container mx-auto py-16">
        <div className="flex my-8 mx-auto lg:mx-8 max-w-[240px] lg:max-w-[320px] rounded-xl border-[3px] border-black bg-[#fffcee] p-4 lg:p-8 text-3xl lg:text-4xl font-semibold text-teal-700 shadow-custom">
          <p className="cursor-pointer transition-all mx-auto duration-150 hover:underline hover:underline-offset-auto">
            Expertise
          </p>
        </div>
        <div className="grid lg:grid-cols-3 items-center mx-8 justify-center gap-8 lg:gap-16">
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
