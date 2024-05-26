"use client";
import { Vortex } from "@/components/ui/vortex";
import { CardHoverEffectDemo } from "@/components/starMembers";
import { BentoGridDemo } from "@/components/starGallery";
import Work from "@/components/starWork";
import React from 'react';

const Stargazers = () => {
  return (
    <div className="flex flex-col overflow-hidden p-5">
      <Vortex
        backgroundColor="black"
        particleCount={650}
        baseHue={135}
        rangeY={900}
        className="items-center justify-center h-[500px]"
      >
        <h2 className="text-white font-extrabold text-4xl text-center justify-center align-middle mt-6">Stargazers</h2>
      </Vortex>
      <div className="p-5">
        <h2 className="text-white font-bold text-4xl text-left mt-28">Case studies📑</h2>
        <div className="flex justify-center mt-10 align-middle p-3">
          <Work />
        </div>

      </div>
      <div className="p-5">
        <h2 className="text-white font-bold text-4xl text-left">Meet the team😊</h2>
        <CardHoverEffectDemo />
      </div>
      <div className="p-5">
        <h2 className="text-white font-bold text-4xl text-left">Gallery🖼️</h2>
        <BentoGridDemo />
      </div>
    </div>
  );
};

export default Stargazers;
