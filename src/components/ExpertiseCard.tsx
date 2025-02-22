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
      <Card className="border-black rounded-2xl border-[3px] p-4 shadow-custom pb-8">
        <CardHeader>
          <CardTitle>
            <span className="text-teal-700 text-4xl hover:underline-offset-2 hover:underline cursor-pointer font-bold">
              {job}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 h-[220px] justify-items-center">
            {icon.map((iconElement, index) => (
              <Link href={link[index]} legacyBehavior passHref key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex p-3 flex-col items-center m-2 hover:border-teal-700 hover:border-[2px] hover:rounded-lg hover:shadow-green transition-all duration-150 max-h-[102px] text-5xl"
                >
                  {iconElement}
                  <span className="mt-2 text-base">{title[index]}</span>
                </a>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertiseCard2;