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
    <main className="yellow py-8 sm:py-12 lg:py-16" id="experience">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div className="mx-auto flex justify-center">
          <div className="rounded-lg sm:rounded-xl border-2 sm:border-[3px] border-black bg-[#fffcee] p-3 sm:p-4 lg:p-8 shadow-custom">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-700 cursor-pointer transition-all duration-150 hover:underline hover:underline-offset-auto">
              Experience
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-6 sm:mt-8 lg:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {data.map((value, index) => (
              <Card
                className="w-full rounded-xl sm:rounded-2xl border-2 sm:border-[3px] border-black bg-[#fffcee] shadow-custom"
                key={index}
              >
                <CardHeader className="space-y-2 p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-700 transition-all duration-150">
                    <p className="hover:underline hover:underline-offset-auto cursor-pointer line-clamp-2">
                      {value.title}
                    </p>
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm lg:text-base">
                    {value.years}
                  </CardDescription>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold">
                    {value.company}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg text-black">
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