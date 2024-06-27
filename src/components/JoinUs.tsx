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
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <Image 
        src="/Gaac-bg-remove.png"
        alt="GAAC Logo"
        width={550}
        height={210}
        priority
      />
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Your career starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-blue-800">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black hover:bg-slate-600 text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
