import { title } from "process";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBackendless } from "react-icons/si";

export const portfolioData = [
  {
    title: " Company Profile for Hexa Kumpeni Game Booster",
    link: "https://hexa-game-boosting.vercel.app/",
    description:
      "Hexa Kumpeni needed a professional website to showcase their game boosting services. The platform needed to provide a seamless booking experience for customers. I was tasked to develop a responsive web application using Next.js and TypeScript. The goal was to create a fast and user-friendly platform. I built the website using Next.js 13, TypeScript, and Tailwind CSS with focus on performance optimization and responsive design. I implemented continuous deployment through Vercel and utilized Next.js features for better user experience. The website launched successfully with excellent performance metrics and positive user feedback. The platform effectively showcases the company's services and works flawlessly across all devices.",
    icons: [
      {
        icon: <RiNextjsFill />,
        link: "https://nextjs.org/",
      },
      {
        icon: <BiLogoTypescript />,
        link: "https://www.typescriptlang.org/",
      },
      {
        icon: <RiTailwindCssFill />,
        link: "https://tailwindcss.com/",
      },
    ],
    image: "/image.png"
  },
  {
    title: "Company Profile for Co-Labs Space",
    link: "https://co-labs-space.vercel.app/",
    description:
      "Co-Labs Space is a service company offering private offices, event spaces, meeting rooms, and a café with coworking facilities. The project aimed to create an engaging online presence to attract businesses and individuals seeking flexible workspace solutions. The primary goal was to design and develop a website that effectively showcases Co-Labs' diverse offerings and unique environment. Responsibilities included creating a user-friendly interface and highlighting key services. Using React and Next.js, I developed a responsive website with a modern design. I collaborated with the design team to incorporate interactive elements and ensure seamless navigation. Challenges included optimizing the site for performance and ensuring accessibility across devices. The project successfully enhanced Co-Labs' online visibility, leading to a 30% increase in booking inquiries within the first month. Client feedback highlighted satisfaction with the site's aesthetics and functionality, contributing to improved brand perception.",
    icons: [
      {
        icon: <RiNextjsFill />,
        link: "https://nextjs.org/",
      },
      {
        icon: <BiLogoTypescript />,
        link: "https://www.typescriptlang.org/",
      },
      {
        icon: <RiTailwindCssFill />,
        link: "https://tailwindcss.com/",
      },
    ],
    image: "/co-labs.png"
  },
  {
    title: "The Savory Tales - Blog",
    link: "https://the-savory-tales.vercel.app/",
    description:
      "The Savory Tales began in 2024 as a personal blog, evolving into a platform that celebrates diverse human experiences through storytelling. The project aimed to create a digital space where stories from all walks of life could be shared and celebrated. The primary goal was to design and develop a website that effectively communicates the mission and vision of The Savory Tales. Responsibilities included creating an engaging user interface and ensuring the platform supports authentic storytelling. Utilizing React and Next.js, I developed a responsive and visually appealing website. I collaborated with content creators to integrate multimedia elements and ensure seamless navigation. Challenges included optimizing the site for performance and ensuring accessibility for a diverse audience. The project successfully transformed The Savory Tales into a trusted platform, increasing user engagement by 40% within the first month. Positive feedback highlighted the site's ability to foster connections and enrich lives through inspiring stories.",
    icons: [
      {
        icon: <RiNextjsFill />,
        link: "https://nextjs.org/",
      },
      {
        icon: <BiLogoTypescript />,
        link: "https://www.typescriptlang.org/",
      },
      {
        icon: <RiTailwindCssFill />,
        link: "https://tailwindcss.com/",
      },
      {
        icon: <SiBackendless />,
        link: "https://backendless.com/",
      },
    ],
    image: "/savory.png"
  },
];
