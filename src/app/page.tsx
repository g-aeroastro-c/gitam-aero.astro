import Image from "next/image";
import { TypewriterEffectDemo } from "../components/JoinUs";
import { TabsDemo } from "@/components/updates";
import { ThreeDCardDemo } from "../components/eb";
import { ThreeDCardDemo2 } from "../components/eb-2";
import { SignupFormDemo } from "@/components/contact";
import React from "react";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <TypewriterEffectDemo />
      <TabsDemo />
      <div>
        <h1 className="text-center mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-40">
          Executive Body (2024-25)
        </h1>
      </div>
      
      <ThreeDCardDemo />
      <ThreeDCardDemo2 />
      <SignupFormDemo />

      <footer />
    </main>
  );
}
