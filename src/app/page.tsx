import Image from "next/image";
import { TypewriterEffectDemo } from "../components/JoinUs";
import { TabsDemo } from "@/components/updates";
import { ThreeDCardDemo } from "../components/eb";
import { ThreeDCardDemo2 } from "../components/eb-2";
import { SignupFormDemo } from "@/components/contact";
import React from "react";
import App from "@/components/faq_accord";
import { InfiniteMovingCardsDemo } from "../components/sponsors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Typewriter Section */}
      <section>
        <div>
          <TypewriterEffectDemo />
        </div>
      </section>

      {/* Tabs Section */}
      <section className="mb-10 p-10">
        <div>
          <TabsDemo />
        </div>
      </section>

      {/* Executive Body Section */}
      <section className="flex flex-col items-center">
        <h1 className="text-center mb-4 mt-10 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-40">
          Executive Body (2024-25)
        </h1>
          <ThreeDCardDemo />
          <ThreeDCardDemo2 />
      </section>

      {/* FAQ Accordion */}
      <section>
        <div>
          <App />
        </div>
      </section>

      {/* Sponsors Scrolling Cards */}
      <section>
        <div>
          <InfiniteMovingCardsDemo />
        </div>
      </section>

      {/* Signup Form */}
      <section>
        <div>
          <SignupFormDemo />
        </div>
      </section>

      {/* Footer */}
      <footer>
        {/* Add footer content here if needed */}
      </footer>
    </main>
  );
}
