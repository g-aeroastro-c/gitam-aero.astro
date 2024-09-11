"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Hackathon",
      value: "TechNova",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 sm:text-lg md:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h5 className="lg:text-3xl md:text-3xl sm:text-2xl">Hackathon</h5>
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 sm:text-lg md:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h5 className="lg:text-3xl md:text-3xl sm:text-2xl">Scintilla</h5>
          <p className="lg:text-xl md:text-lg sm:text-md mt-4">
            Unleash your creativity and showcase your talents at our annual Technical Fest. 
            From competitions to workshops, this event is your gateway to innovation, networking, and industry insights.
          </p>
          <Link href="#" className="text-blue-500 underline mt-4">Register Now</Link>
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
      title: "Beach cleaning robot",
      value: "Social service",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 sm:text-lg md:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h5 className="lg:text-3xl md:text-3xl sm:text-2xl">Social service</h5>
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 sm:text-lg md:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h5 className="lg:text-3xl md:text-3xl sm:text-2xl">Inspiring young minds</h5>
          <p className="lg:text-xl md:text-lg sm:text-md mt-4">
            Join hands in educating our community with this initiative. It’s a chance to give back to the community, make a tangible environmental impact, and strengthen bonds within our team.
          </p>
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 sm:text-lg md:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h5 className="lg:text-3xl md:text-3xl sm:text-2xl">Educational trip</h5>
          <p className="lg:text-xl md:text-lg sm:text-md mt-4">
            Get an insider’s view of India’s space frontier with an exclusive trip to ISRO. Dive into the latest advancements in space technology and engage with experts who are pushing the boundaries of space exploration.
          </p>
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
