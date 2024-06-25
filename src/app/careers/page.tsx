import React from 'react';
import { cn } from '@/utils/cn';
import { Spotlight } from '@/components/ui/Spotlight';
import { MeteorsDemo } from '@/components/card';

const Careers = () => {
  return (
    <div className="relative h-[40rem] bg-black bg-opacity-96 antialiased">
      <Spotlight
        className="absolute -top-40 left-0 md:left-60 md:-top-20 w-full h-full"
        fill="white"
      />
      <div className="max-w-7xl mx-auto p-4 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-20 p-15">
          Careers
        </h1>

        <div className="mt-12 ml-7">
          <MeteorsDemo />
        </div>
      </div>
    </div>
  );
};

export default Careers;
