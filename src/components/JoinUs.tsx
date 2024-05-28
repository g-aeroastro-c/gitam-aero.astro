"use client";

import Image from "next/image";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Innovate,",
    },
    {
      text: "Build,",
    },
    {
      text: "Learn",
    },
    {
      text: "&",
    },
    {
      text: "Grow.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <img src="gaac-logo.png" alt="gaac-logo" />
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Your career starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
