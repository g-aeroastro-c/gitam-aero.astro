"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Executive Body",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <Image 
            src="/gaac-logo.png"
            alt="Executive Body"
            width={750}
            height={450}
            priority
          />
        </div>
      ),
    },
    {
      title: "Events",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <Image 
            src="/gaac-logo.png"
            alt="Executive Body"
            width={750}
            height={450}
            priority
          />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <Image 
            src="/gaac-logo.png"
            alt="Executive Body"
            width={750}
            height={450}
            priority
          />
        </div>
      ),
    },
    {
      title: "News",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <Image 
            src="/gaac-logo.png"
            alt="Executive Body"
            width={750}
            height={450}
            priority
          />
        </div>
      ),
    },
    {
      title: "Featured Blog",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <Image 
            src="/gaac-logo.png"
            alt="Executive Body"
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
