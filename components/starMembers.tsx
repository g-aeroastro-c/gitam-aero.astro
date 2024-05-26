import { HoverEffect } from "@/components/ui/card-hover-effect";
import { link } from "fs";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={item} />
    </div>
  );
}
const item = [
  {
    title: "V.L.P Srinidhi",
    image : "@/public/Srinidhi.png",
    description : "Team Lead",
    link : "#",
  },
  {
    title: "Aslesha Sharaf",
    image : "@/public/Ashlesha.png",
    description : "Vice Team Lead",
    link : "#",
  },
  {
    title: "Abhiram",
    image : "@/public/Abhiram.png",
    description : "Member",
    link : "#",
  },
  {
    title: "Jahnavi",
    image : "@/public/Pratap.png",
    description : "Member",
    link : "#",
  },
  {
    title: "Sai Pratap",
    image : "@/public/Pratap.png",
    description: "Member",
    link : "#",
  },
  {
    title: "Roshini",
    image : "@/public/Roshini.png",
    description: "Member",
    link : "#",
  },
];
