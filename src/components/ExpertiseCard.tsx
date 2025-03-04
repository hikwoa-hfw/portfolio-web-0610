import Link from "next/link";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/cardMod";

interface Props {
  icon: any[];
  title: string[];
  job: string;
  link: string[];
}

const ExpertiseCard2: FC<Props> = ({ icon, title, job, link }) => {
  return (
    <main>
      <Card className="rounded-2xl border-[3px] border-black p-4 pb-8 shadow-custom">
        <CardHeader>
          <CardTitle>
            <span className="cursor-pointer text-3xl lg:text-4xl font-bold text-teal-700 hover:underline hover:underline-offset-2">
              {job}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid h-[200px] lg:h-[220px] grid-cols-3 justify-items-center gap-2 lg:gap-4">
            {icon.map((iconElement, index) => (
              <Link href={link[index]} legacyBehavior passHref key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 flex max-h-[102px] flex-col items-center p-3 text-3xl lg:text-5xl transition-all duration-150 hover:rounded-lg hover:border-[2px] hover:border-teal-700 hover:shadow-green"
                >
                  {iconElement}
                  <span className="mt-2 text-base">{title[index]}</span>
                </a>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default ExpertiseCard2;
