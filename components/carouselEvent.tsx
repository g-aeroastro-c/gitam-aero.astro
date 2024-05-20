"use client"
import React from "react";
import { useState } from "react"
import "tailwindcss/tailwind.css";
import Image from "next/image";
import arrow from "../public/arrowL.png";

const Carousel = () => {
    const items = [
      {
        imageUrl: "/sangharsh.png",
        heading: "Sangharsh",
        body:
          "The entire GAAC community participated in Sangharsh, a tech fest organized by GITAM School of Technology's mechanical department.",
      },
      {
        heading: "Slide 2",
        body:
          "Lorem ipsum dolor set amet.",
        imageUrl: "/sangharsh.png",
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextItem = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    const prevItem = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
  
    return (
      <div className="bg-black drop-shadow-2xl inline-flex w-full max-w-[82.125rem] h-[40.6875rem] justify-center align-middle m-36 ml-48 pt-[2.8125rem] pl-[1.375rem] pr-[1.375rem] rounded-[2.5rem] md:max-w-[56.6875rem] md:max-h-[28.4375rem] sm:max-w-[21.8125rem] sm:max-h-[13.25rem]">
        <div className="flex align-middle justify-between">
          <button onClick={prevItem} className="mr-4 p-2">
            <Image
              src={arrow}
              width={41}
              height={50}
              alt="arrow"
              quality={100}
              className="rotate-180"
            />
          </button>
          <div className="flex flex-col justify-center align-middle text-center text-white">
            <Image
              src={items[currentIndex].imageUrl}
              alt={`Slide ${currentIndex + 1}`}
              width={100}
              height={200}
              className="flex justify-center align-middle mx-auto w-full h-auto md:w-5 md:h-2.5 sm:w-3.125 sm:h-1.25"
            />
            <h2 className="text-[1.875rem] font-bold mt-4 md:text-[1.875rem] sm:text-[0.9375rem]">
              {items[currentIndex].heading}
            </h2>
            <p className="text-[0.9375rem] mt-5 md:text-[0.9375rem] sm:text-[0.625rem]" style={{ textAlign: "justify" }}>
              {items[currentIndex].body}
            </p>
          </div>
          <button onClick={nextItem} className="mr-4 p-2">
            <Image
              src={arrow}
              width={41}
              height={50}
              alt="arrow"
              quality={100}
            />
          </button>
        </div>
      </div>

    );
  };
  
  export default Carousel;