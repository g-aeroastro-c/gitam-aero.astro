"use client"
import { useState } from "react";
import arrow from "../public/arrowL.png";
import Image from "next/image";

// Define the component
const Carousel_team = () => {
    // Array of items for the carousel
    const items = [
        { heading: "Viswa Teja", body: "President" },
        { heading: "Ananya", body: "Secretary" },
        { heading: "Vishal", body: "Social Media handler" },
    ];

    // State to track the current index of the carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next item in the carousel
    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // Function to move to the previous item in the carousel
    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="flex w-full justify-center relative">
            {/* Left grey box */}
            <div className="absolute top-0 left-0 bg-gray-500 w-[37.5rem] h-6.75rem rounded-b-[2.5rem] z-0"></div>

            {/* Carousel container */}
            <div className="lg:w-[37.5rem] md:w-[19.374rem] sm:w-[11.313rem] lg:h-[25rem] md:h-[25rem] sm:h-[11.205rem] bg-black rounded-[2.5rem] relative z-10">
                {/* Previous arrow button */}
                <button onClick={prevItem} className="absolute top-1/2 left-0 transform -translate-y-1/2">
                    <Image src={arrow} width={41} height={50} alt="arrow" quality={100} className="rotate-180" />
                </button>

                {/* Content of the current item */}
                <div className="bg-white lg:w-[37.5rem] md:w-[19.374rem] sm:w-[11.313rem] lg:h-[6.75rem] md:h-[5rem] sm:h-[2.938rem] rounded-b-[2.5rem] absolute bottom-0">
                    <h2 className="lg:text-[1.875rem]  sm:text-[1.313rem] text-black font-semibold justify-start ml-2">
                        {items[currentIndex].heading}
                    </h2>
                    <p className="lg:text-[1.363rem] md:text-[1.125rem] sm:text-[1.125rem] text-gray-600 font-normal justify-start ml-2 mb-2">
                        {items[currentIndex].body}
                    </p>
                </div>

                {/* Next arrow button */}
                <button onClick={nextItem} className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <Image src={arrow} width={41} height={50} alt="arrow" quality={100} />
                </button>
            </div>

            {/* Right grey box */}
            <div className="absolute top-0 right-0 bg-gray-500 w-[37.5rem] h-6.75rem rounded-b-[2.5rem] z-0"></div>
        </div>
    );
};

// Export the component
export default Carousel_team;
