"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out pt-3 px-4 flex justify-center ${scrolled ? "pt-5" : "pt-3"}`}>
            <nav className={`transition-all duration-700 ease-in-out flex items-center justify-between backdrop-blur-3xl saturate-[180%] border border-white/60
        ${scrolled
                    ? "bg-white/15 py-3 px-8 rounded-4xl shadow-[0_12px_40px_rgba(62,50,42,0.15)] w-full max-w-4xl"
                    : "bg-white/10 py-5 px-12 rounded-4xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] w-full max-w-7xl"}`}>

                <div className="flex items-center gap-3">
                    <div className={`relative transition-all duration-500 ${scrolled ? "w-6 h-6" : "w-8 h-8"}`}>
                        <Image
                            src="/wooden-logo.svg"
                            alt="Woooden Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={`font-semibold tracking-tight text-foreground transition-all duration-500 ${scrolled ? "text-xl" : "text-2xl"}`}>
                        Woooden Stories.
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-12 text-[13px] font-bold tracking-[0.1em] text-text-muted">
                    <a href="#" className="hover:text-foreground transition-colors uppercase">Process</a>
                    <a href="#" className="hover:text-foreground transition-colors uppercase">Stories</a>
                    <a href="#" className="hover:text-foreground transition-colors uppercase">Archive</a>
                </div>

                <button className={`bg-primary-brown text-white rounded-full font-bold tracking-[0.1em] uppercase hover:opacity-90 transition-all duration-500 text-[13px]
          ${scrolled ? "px-6 py-2.5" : "px-8 py-3"}`}>
                    Commission
                </button>
            </nav>
        </div>
    );
}
