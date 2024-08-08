"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          D. Sampath Varma
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Team Lead
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <Image 
            src="/dsampath.jpg"
            alt="ROBusta"
            width={500}
            height={100}
            priority
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.linkedin.com/in/dsampath"
            target="__blank"
            className="px-4 py-2 rounded-xl text-s font-normal dark:text-blue-500"
          >
            Know more →
          </CardItem>
        </div>
      </CardBody>
      
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Vivek Seepana
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Vice Team Lead
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image 
              src="/vivek.jpg"
              alt="ROBusta"
              width={750}
              height={450}
              priority
            />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.linkedin.com/in/vivek"
            target="__blank"
            className="px-4 py-2 rounded-xl text-s font-normal dark:text-blue-500"
          >
            Know more →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    
    
  );
}
