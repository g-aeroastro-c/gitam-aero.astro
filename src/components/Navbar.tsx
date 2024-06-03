'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <div className="mx-4 px-4">
                    <HoveredLink href={"#"}>
                        <MenuItem setActive={setActive} active={active} item="Home" />
                    </HoveredLink>
                </div>
                <div className="mx-4 px-4">
                    <HoveredLink href={"#"}>
                        <MenuItem setActive={setActive} active={active} item="About Us" />
                    </HoveredLink>
                </div>
                <div className="mx-4 px-4">
                    <MenuItem setActive={setActive} active={active} item="Teams">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/teams">Executive Body</HoveredLink>
                            <HoveredLink href="/teams">Core Team</HoveredLink>
                            <HoveredLink href="/teams">StarGazers</HoveredLink>
                            <HoveredLink href="/teams">ROBusta</HoveredLink>
                        </div>
                    </MenuItem>
                </div>
                <div className="mx-4 px-4">
                    <MenuItem setActive={setActive} active={active} item="Events">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/teams">Event A</HoveredLink>
                            <HoveredLink href="/teams">Event B</HoveredLink>
                            <HoveredLink href="/teams">Event C</HoveredLink>
                            <HoveredLink href="/teams">Event D</HoveredLink>
                        </div>
                    </MenuItem>
                </div>
                <div className="mx-4 px-4">
                    <MenuItem setActive={setActive} active={active} item="Sponsor Us" />
                </div>
                <div className="mx-4 px-4">
                    <MenuItem setActive={setActive} active={active} item="Contact Us" />
                </div>
            </Menu>
        </div>
    );
}

export default Navbar;
