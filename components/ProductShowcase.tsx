"use client";

import Image from "next/image";

export default function ProductShowcase() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-8 bg-white overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-3xl -mr-[200px] -mt-[200px]"></div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="space-y-6 md:space-y-8 text-center lg:text-left reveal">
                    <div className="space-y-3 md:space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                            Handcrafted with love,
                            <br className="hidden md:block" />
                            <span className="text-accent-coral italic"> designed to inspire.</span>
                        </h2>
                        <div className="space-y-4 reveal-delay-1">
                            <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Each wooden figure is carefully carved from sustainable wood and hand-painted.
                                They're not just decorations—they're tiny companions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-2">
                                <div className="flex flex-col">
                                    <span className="text-2xl md:text-3xl font-bold text-foreground">100%</span>
                                    <span className="text-[10px] font-bold text-accent-coral uppercase tracking-[0.2em]">Natural Wood</span>
                                </div>
                                <div className="w-px h-10 bg-zinc-100 hidden sm:block"></div>
                                <div className="flex flex-col">
                                    <span className="text-2xl md:text-3xl font-bold text-foreground">Next Day</span>
                                    <span className="text-[10px] font-bold text-accent-coral uppercase tracking-[0.2em]">Global Shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-accent-coral text-white px-8 md:px-10 py-3.5 md:py-4.5 rounded-full font-bold text-base md:text-lg hover:shadow-lg transition-all active:scale-95 w-full sm:w-auto reveal-delay-2">
                        Explore Collection
                    </button>
                </div>

                <div className="relative aspect-square md:aspect-[5/4] bg-gradient-to-br from-orange-50 to-amber-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl group reveal-delay-1">
                    <Image
                        src="/im4.png"
                        alt="Handcrafted Wood Toy"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/30 via-black/5 to-transparent flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Sustainable Art</span>
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-3">The Minimalist Series</h3>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-brown shadow-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
