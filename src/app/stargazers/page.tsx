"use client"
import { Vortex } from "@/components/ui/vortex"
import React from 'react';
import Work from '@/components/starWork';
import Navbar from "@/components/Navbar";
import { CardHoverEffectDemo } from "@/components/starMembers";
import { BentoGridDemo } from "@/components/starGallery";

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
                <h2 className="text-white font-extrabold text-4xl text-center justify-center align-middle mt-6">StarGazers</h2>
            </Vortex>
            <div className="p-5">
                <h2 className="text-white font-bold text-4xl text-left mt-28">Case Studies</h2>
                <div className="flex justify-center mt-10 align-middle p-3">
                    <Work />
                </div>
            </div>
            <div className="p-5">
                <h2 className="text-white font-bold text-4xl text-left">Meet the team</h2>
                <CardHoverEffectDemo />
            </div>
            <div className="p-5">
                <h2 className="text-white font-bold text-4xl text-left">Gallery</h2>
                <BentoGridDemo />
            </div>
        </div>
    );
};

export default Stargazers;