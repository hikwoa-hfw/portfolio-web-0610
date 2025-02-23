"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { useState } from "react";

const reviews = [
  {
    name: "Saipul Jamil",
    username: "Tech Lead Strategik Corp.",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquid, quod laborum quas nostrum veritatis non corrupti repudiandae repellendus maxime!",
    img: "https://avatar.vercel.sh/saipul",
  },
  {
    name: "Ega Eripras",
    username: "Project Manager Supajob",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquid, quod laborum quas nostrum veritatis non corrupti repudiandae repellendus maxime!",
    img: "https://avatar.vercel.sh/ega",
  },
  {
    name: "Haikal Abdurrahman",
    username: "CEO Catify",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquid, quod laborum quas nostrum veritatis non corrupti repudiandae repellendus maxime!",
    img: "https://avatar.vercel.sh/haikal",
  },
  {
    name: "Gigih Saputra",
    username: "CTO Catify",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquid, quod laborum quas nostrum veritatis non corrupti repudiandae repellendus maxime!",
    img: "https://avatar.vercel.sh/gigih",
  },
  {
    name: "Huda Kurniawan",
    username: "CEO Supajob",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquid, quod laborum quas nostrum veritatis non corrupti repudiandae repellendus maxime!",
    img: "https://avatar.vercel.sh/huda",
  },
  {
    name: "Calvin Xander",
    username: "CTO Supajob",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquid, quod laborum quas nostrum veritatis non corrupti repudiandae repellendus maxime!",
    img: "https://avatar.vercel.sh/calvin",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 3));
const secondRow = reviews.slice(
  Math.ceil(reviews.length / 3),
  Math.ceil((2 * reviews.length) / 3),
);
const thirdRow = reviews.slice(Math.ceil((2 * reviews.length) / 3));
const fourthRow = reviews.slice(0, Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
  onClick,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  onClick: () => void;
}) => {
  return (
    <figure
      onClick={onClick}
      className={cn(
        "relative h-full w-60 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-white hover:border-teal-700  hover:bg-gray-100 hover:shadow-green transition-shadow duration-150",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-900">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-800">{body}</blockquote>
    </figure>
  );
};

export function Marquee3D() {
  const [open, setOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<{
    name: string;
    username: string;
    body: string;
    img: string;
  } | null>(null);

  const handleCardClick = (review: {
    name: string;
    username: string;
    body: string;
    img: string;
  }) => {
    setSelectedReview(review);
    setOpen(true);
  };

  return (
    <div className="relative flex h-[440px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-6"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              onClick={() => handleCardClick(review)}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:13s]" vertical>
          {secondRow.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              onClick={() => handleCardClick(review)}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:17s]" vertical>
          {thirdRow.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              onClick={() => handleCardClick(review)}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              onClick={() => handleCardClick(review)}
            />
          ))}
        </Marquee>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-teal-700">
              {selectedReview?.name}
            </DialogTitle>
            <DialogDescription className="text-gray-700">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt=""
                  src={selectedReview?.img}
                />
                <div>
                  <span className="text-xs font-medium text-gray-500">
                    {selectedReview?.username}
                  </span>
                </div>
              </div>
              <div>
                <p className="mt-2 text-sm">{selectedReview?.body}</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#F4D04E]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F4D04E]"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F4D04E]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F4D04E]"></div>
    </div>
  );
}
