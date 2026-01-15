"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "Process", href: "#" },
        { name: "Stories", href: "#" },
        { name: "Archive", href: "#" },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 flex justify-center ${scrolled ? "pt-2 md:pt-4" : "pt-4 md:pt-6"}`}>
                <nav className={`transition-all duration-500 flex items-center justify-between backdrop-blur-xl border relative z-10
                    ${scrolled
                        ? "bg-white/80 border-white/40 py-1.5 px-5 md:px-8 rounded-full shadow-[0_10px_30px_rgba(62,50,42,0.08)] w-full max-w-4xl"
                        : "bg-white/10 border-white/20 py-2.5 md:py-4 px-6 md:px-10 rounded-full w-full max-w-6xl"}`}>

                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer relative z-[120]">
                        <div className={`relative transition-all duration-500 ${scrolled ? "w-5 h-5 md:w-6 md:h-6" : "w-6 h-6 md:w-7 md:h-7"}`}>
                            <Image
                                src="/main.png"
                                alt="Woooden Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className={`font-bold tracking-tight text-foreground transition-all duration-500 ${scrolled ? "text-base md:text-lg" : "text-lg md:text-xl"}`}>
                            Woooden Stories<span className="text-accent-coral">.</span>
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.1em] text-text-muted uppercase">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-foreground transition-all duration-300 relative group">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-coral transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 md:gap-4 relative z-[120]">
                        <button className={`bg-primary-brown text-white rounded-full font-bold tracking-[0.1em] uppercase transition-all duration-500 text-[10px] md:text-[11px]
                            ${scrolled ? "px-4 py-2" : "px-6 py-3"}`}>
                            Get Now
                        </button>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2 md:hidden transition-colors rounded-full focus:outline-none ${mobileMenuOpen ? "bg-primary-brown text-white" : "text-primary-brown bg-black/5"}`}
                            aria-label="Toggle Menu"
                        >
                            <div className="relative w-5 h-4">
                                <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 top-[7px]" : "top-0"}`}></span>
                                <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 top-[7px] ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
                                <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 top-[7px]" : "top-[14px]"}`}></span>
                            </div>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white/98 backdrop-blur-3xl transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-full"}`}>
                    <div className="flex flex-col items-center gap-10">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-3xl font-bold text-primary-brown uppercase tracking-tighter transition-all duration-500 ${mobileMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className={`pt-10 transition-all duration-700 delay-300 ${mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                            <div className="w-12 h-12 rounded-full bg-accent-coral/10 flex items-center justify-center text-accent-coral rotate-12">
                                ✨
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
