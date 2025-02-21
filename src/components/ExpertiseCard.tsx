import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FC } from "react";

interface Props {
  icon: any[];
  title: string[];
  job: string;
  link: string[];
}

const ExpertiseCard2: FC<Props> = ({ icon, title, job, link }) => {
  return (
    <div>
      <Card className="border-black rounded-2xl border-[3px] p-4 shadow-custom">
        <CardHeader>
          <CardTitle className="text-teal-700 text-4xl font-bold">
            {job}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 h-[220px] justify-items-center">
            {icon.map((iconElement, index) => (
              <div key={index} className="flex flex-col items-center m-2">
                <Link href={link[index]} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="text-5xl">
                    {iconElement}
                  </a>
                </Link>
                <span className="mt-2 text-lg">{title[index]}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertiseCard2;