import React from "react";
import { Meteors } from '@/components/ui/meteors';


const cardsData = [
  {
    title: "Web Developer",
    description: "Join AeroAstro Club as a web developer, crafting and maintaining our website for an immersive user experience. Your role elevates site navigation and functionality, embracing the dynamic fusion of technology and aerospace.",
  },
  {
    title: "Content Writer",
    description: "Join AeroAstro Club as a content writer, crafting compelling aerospace content, implementing SEO tactics, collaborating with teams, and ensuring captivating storytelling, shaping how the world explores flight and space!",
  },
  {
    title: "Designer",
    description: "Join AeroAstro Club as a designer, creating captivating visuals that tell our aerospace story across platforms. Collaborating with teams, ensure brand consistency, innovation, and user-centric designs, inspiring the world of flight and space exploration!",
  },
  {
    title: "Social Media Handler",
    description: "At AeroAstro Club, a social media handler crafts engaging content, engages with our audience, analyzes metrics, tracks trends, supports campaigns, and advocates for our brand. Join us to connect with aerospace enthusiasts globally.",
  },
  {
    title: "Robusta Member",
    description: "Embark on a journey into robotics with Team ROBusta! Dive deep into hands-on experiences, working closely with robots through development exploration and real-world projects. Join us and immerse yourself in the exciting world of robotics!",
  },
  {
    title: "SSG Member",
    description: "Join as an SSG member to engage in real-world projects like asteroid search campaigns, analyze data through case studies, and participate in exciting events such as lunar eclipse observations. Dive into hands-on experiences with us!",
  },
];

export function MeteorsDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <div key={index} className="relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              {card.title}
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              {card.description}
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              Apply Now
            </button>

            <Meteors number={20} />
          </div>
        </div>
      ))}
    </div>
  );
}
