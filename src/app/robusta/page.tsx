"use client";
import React from "react";
import Work from '@/components/roboWork';
import { CardHoverEffectDemo } from '@/components/roboMembers';
import { BentoGridDemo } from '@/components/roboGallery';
import { Boxes } from '@/components/ui/background-boxes';

const Robusta = () => {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <Boxes className="absolute inset-0 z-0" />
                <div className="text-white text-center z-10">
                    <h1 className="text-6xl font-bold mb-4">Welcome to Robusta</h1>
                    <p className="text-xl">Your tagline goes here</p>
                </div>
            </section>
            <div className="flex flex-col overflow-hidden p-5 z-10 relative space-y-16">
                <div className="p-5">
                    <h2 className="text-white font-bold text-4xl text-left">Case Studies</h2>
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

export default Robusta;
