"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Hackathon",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Hackathon</p>
          <Image 
            src="/hackathon.jpg"
            alt="Hackathon"
            width={1000}
            height={1000}
            priority
          />
        </div>
      ),
    },
    {
      title: "Fest",
      value: "Scintilla",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Scintilla</p>
          <Image 
            src="/fest.png"
            alt="Fest"
            width={750}
            height={750}
            priority
          />
        </div>
      ),
    },
    {
      title: "Beach cleaning robot ",
      value: "Social service",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Social service</p>
          <Image 
            src="/beach-robot.jpg"
            alt="Beach cleaning robot"
            width={750}
            height={750}
            priority
          />
        </div>
      ),
    },
    {
      title: "Outreach program",
      value: "Inspiring young minds",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Inspiring young minds</p>
          <Image 
            src="/outreach.jpg"
            alt="Outreach program"
            width={750}
            height={450}
            priority
          />
        </div>
      ),
    },
    {
      title: "Isro field trip",
      value: "Educational trip",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Educational trip</p>
          <Image 
            src="/isro.png"
            alt="Isro field trip"
            width={750}
            height={450}
            priority
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
