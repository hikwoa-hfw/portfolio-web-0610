import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const data = [
  {
    title: "Junior Web Developer",
    years: "2020-2021",
    company: "Hexa Kumpeni",
    description:
      "Developed web applications using React, Node.js, and PostgreSQL, while collaborating with teams to design scalable solutions. Led a team of junior developers, providing mentorship and conducting code reviews.",
  },
  {
    title: "Freelance Web Developer",
    years: "2021-2022",
    company: "Upwork",
    description:
      "Built custom websites and applications for clients using HTML, CSS, JavaScript, and TypeScript. Managed project timelines and optimized website performance to enhance user experience.",
  },
  {
    title: "Software Engineer",
    years: "2023-Present",
    company: "Supajob",
    description:
      "Designed front-end components with React.js and worked on back-end services using Node.js and Express. Participated in agile processes, ensuring high-quality software delivery through testing and debugging.",
  },
];

const Experience = () => {
  return (
    <main className="yellow py-16" id="experience">
      <div className="container mx-auto items-center justify-center">
        <div className="lg:my-8 mx-auto lg:mx-8 flex max-w-[240px] lg:max-w-[320px] rounded-xl border-[3px] border-black bg-[#fffcee] p-4 lg:p-8 text-3xl lg:text-4xl font-semibold text-teal-700 shadow-custom">
          <p className="mx-auto cursor-pointer transition-all duration-150 hover:underline hover:underline-offset-auto">
            Experience
          </p>
        </div>
        <div className="mt-6 flex">
          <div className="mt-6 flex lg:flex-row flex-col gap-8 lg:gap-12 lg:mx-8 mx-auto">
            {data.map((value, index) => (
              <Card
                className="lg:w-full min-w-[320px] lg:max-w-[480px] rounded-2xl border-[3px] border-black bg-[#fffcee] shadow-custom"
                key={index}
              >
                <CardHeader className="ml-3 gap-y-2">
                  <CardTitle className="text-2xl lg:text-4xl font-bold text-teal-700 transition-all duration-150 ">
                    <p className="hover:underline hover:underline-offset-auto lg:max-w-[440px] cursor-pointer">
                    {value.title}
                      </p>
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-base">
                    {value.years}
                  </CardDescription>
                  <CardTitle className="lg:text-2xl text-xl font-semibold">
                    {value.company}
                  </CardTitle>
                  <CardDescription className="lg:text-lg text-black">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
