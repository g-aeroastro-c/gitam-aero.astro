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
    title: "Sampath Varma",
    image : "@/public/Srinidhi.png",
    description : "Team Lead",
    link : "#",
  },
  {
    title: "Vivek Seepana",
    image : "@/public/Ashlesha.png",
    description : "Vice Team Lead",
    link : "#",
  },
  {
    title: "P Gokul Sree Chandra",
    image : "@/public/Abhiram.png",
    description : "Member",
    link : "#",
  },
  {
    title: "L Anand Sai",
    image : "@/public/Pratap.png",
    description : "Member",
    link : "#",
  },
  {
    title: "Bhavana Bandaru",
    image : "@/public/Pratap.png",
    description: "Member",
    link : "#",
  },
  {
    title: "C Nandan",
    image : "@/public/Roshini.png",
    description: "Member",
    link : "#",
  },
  {
    title: "M Satya Vinayak",
    image : "@/public/Roshini.png",
    description: "Member",
    link : "#",
  },
  {
    title: "Siva Ram",
    image : "@/public/Roshini.png",
    description: "Member",
    link : "#",
  },
  {
    title: "Yaswanth",
    image : "@/public/Roshini.png",
    description: "Member",
    link : "#",
  },
];