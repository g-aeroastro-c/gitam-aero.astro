"use client"
import { VortexDemoSecond } from "@/components/vortex-hero"
import React from 'react';
import Work from '@/components/starWork';
import { CardHoverEffectDemo } from "@/components/starMembers";
import { BentoGridDemo } from "@/components/starGallery";

const Stargazers = () => {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <VortexDemoSecond />
            <div className="flex flex-col overflow-hidden p-5">

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
        </main>
    );
};

export default Stargazers;