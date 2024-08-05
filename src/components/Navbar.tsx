'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string}) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <HoveredLink href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
            </HoveredLink>
            <HoveredLink href={"#"}>
            <MenuItem setActive={setActive} active={active} item="About Us">
            </MenuItem>
            </HoveredLink>
            <MenuItem setActive={setActive} active={active} item="Teams">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/teams">Core Team</HoveredLink>
                    <HoveredLink href="/stargazers">StarGazers</HoveredLink>
                    <HoveredLink href="/robusta">ROBusta</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Events">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/teams">Hackathon</HoveredLink>
                    <HoveredLink href="/teams">Fest</HoveredLink>
                    <HoveredLink href="/teams">Beach Cleaning Robot</HoveredLink>
                    <HoveredLink href="/teams">ISRO trip</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Sponsor Us">
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            </MenuItem>
        </Menu>
    </div>
  )
}

export default Navbar