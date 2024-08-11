"use client";

import Image from "next/image";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "the",
    },
    {
      text: "Future",
    },
    {
      text: ".",
    },
    {
      text: "Together",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]">
      <Image 
        src="/gaac-logo.png"
        alt="GAAC Logo"
        width={600}
        height={300}
        priority
      />
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff] mt-10 mb-10 mb-10 text-3xl">
        Your career starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-gradient-to-r hover:from-[#8e9eab] hover:to-[#ebf4f5] hover:text-black transition-colors duration-100 delay-100">
          <a 
          href="../careers"
          >Join Us</a>
        </button>
      </div>
    </div>
  );
}
