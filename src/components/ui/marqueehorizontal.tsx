import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
  name: "Saipul Jamil",
  username: "Tech Lead Strategik Corp.",
  body: "I greatly admire this fullstack developer's expertise in building seamless, efficient applications that excel in every aspect.",
  img: "https://avatar.vercel.sh/saipul",
  },
  {
  name: "Ega Eripras",
  username: "Project Manager Supajob",
  body: "Working with this fullstack developer is consistently inspiring; they deliver innovative solutions that drive our projects forward effectively.",
  img: "https://avatar.vercel.sh/ega",
  },
  {
  name: "Haikal Abdurrahman",
  username: "CEO Catify",
  body: "This fullstack developer masterfully integrates front-end and back-end systems, resulting in robust, scalable, and dynamic applications always.",
  img: "https://avatar.vercel.sh/haikal",
  },
  {
  name: "Gigih Saputra",
  username: "CTO Catify",
  body: "Their fullstack skills blend creativity and practicality, consistently producing reliable, high-performing solutions that exceed expectations.",
  img: "https://avatar.vercel.sh/gigih",
  },
  {
  name: "Huda Kurniawan",
  username: "CEO Supajob",
  body: "I trust this fullstack developer's technical expertise and innovative approach, making every project run smoothly and brilliantly.",
  img: "https://avatar.vercel.sh/huda",
  },
  {
  name: "Calvin Xander",
  username: "CTO Supajob",
  body: "As a top fullstack developer, they deliver projects that are not only functional, but also beautifully designed and efficient.",
  img: "https://avatar.vercel.sh/calvin",
  },
  ];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-white transition-shadow duration-150 hover:border-teal-700 hover:bg-gray-100 hover:shadow-green",
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-y-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F4D04E]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F4D04E]"></div>
    </div>
  );
}
