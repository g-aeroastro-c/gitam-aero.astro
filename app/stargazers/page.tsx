"use client";
import { Vortex } from "@/components/ui/vortex";
import { CardHoverEffectDemo } from "@/components/starMembers";
import { BentoGridDemo } from "@/components/starGallery";
import Work from "@/components/starWork";
import React from 'react';

const Stargazers = () => {
  return (
    <div className="flex flex-col overflow-hidden pb-8">
      <Vortex
        backgroundColor="black"
        particleCount={650}
        baseHue={135}
        rangeY={900}
        className="items-center justify-center h-[500px]"
      >
        <h2 className="text-white font-extrabold text-4xl text-center mt-10 p-5">Stargazers <br /> Welcome to the official home of the stars</h2>
      </Vortex>
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-left">Works</h2>
        <Work />
      </div>
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-left">Members</h2>
        <CardHoverEffectDemo />
      </div>
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-left">Gallery</h2>
        <BentoGridDemo />
      </div>
    </div>
  );
};

export default Stargazers;
