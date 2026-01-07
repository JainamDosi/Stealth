"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#F2EDE4]">
            {/* Branded Watermark Background - Repeated Pattern */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
                <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rotate-[-15deg]">
                    <Image src="/overlay.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rotate-[20deg]">
                    <Image src="/overlay.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute top-[40%] right-[20%] w-[350px] h-[350px] rotate-[45deg]">
                    <Image src="/overlay.png" alt="" fill className="object-contain" />
                </div>
            </div>

            {/* Decorative Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] hero-gradient-orange -z-10 opacity-30"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] hero-gradient-yellow -z-10 opacity-20"></div>

            <main className="relative pt-28 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
                {/* Left Content */}
                <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start reveal">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-orange-100/50 self-center lg:self-start shadow-sm transition-transform hover:scale-105 cursor-default">
                        <span className="text-lg">❤️</span>
                        <span className="text-[12px] md:text-[13px] font-bold text-accent-coral uppercase tracking-widest">Hand-painted with love</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground text-balance">
                            Every figure <br />
                            has a <span className="text-accent-coral italic font-serif underline decoration-accent-coral/20 underline-offset-8">secret</span> <br className="hidden md:block" />
                            to tell.
                        </h1>
                    </div>

                    <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-md mx-auto lg:mx-0 reveal-delay-1 font-medium">
                        We carve tiny souls out of wood. Your desk is lonely, and these little guys are ready to move in. Pure vibes and 100% cute.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2 reveal-delay-2">
                        <button className="relative group bg-primary-brown text-white px-10 py-5 rounded-full font-bold text-base md:text-lg transition-all duration-500 shadow-[0_15px_35px_rgba(74,59,49,0.2)] hover:shadow-[0_25px_50px_rgba(74,59,49,0.35),0_10px_20px_rgba(74,59,49,0.15)] hover:-translate-y-1.5 active:translate-y-0 active:scale-95 w-full sm:w-auto overflow-hidden">
                            {/* Inner Shine Effect */}
                            <span className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                            {/* Subtle Border Glow */}
                            <span className="absolute inset-0 border border-white/5 rounded-full pointer-events-none"></span>

                            <span className="relative z-10">Order Yours Now</span>
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-col sm:flex-row items-center gap-5 pt-6 reveal-delay-3">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#F2EDE4] bg-zinc-200 shadow-sm transition-transform hover:scale-110 hover:z-50 ${i === 1 ? 'z-40' : i === 2 ? 'z-30' : i === 3 ? 'z-20' : 'z-10'}`}>
                                    <Image src={`/im${i}.png`} alt="User" width={48} height={48} className="w-full h-full object-cover rounded-full" />
                                </div>
                            ))}
                        </div>
                        <div className="space-y-0.5 text-center sm:text-left">
                            <div className="flex gap-0.5 justify-center sm:justify-start">
                                {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-amber-500 text-xs">★</span>)}
                            </div>
                            <p className="text-text-muted text-[13px] md:text-sm font-bold">
                                <span className="text-foreground">2,400+</span> happy stories shared
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image Container */}
                <div className="relative flex justify-center items-center h-[450px] md:h-[600px] w-full mt-10 lg:mt-0 reveal-delay-2">
                    {/* Card 1 (Back Left) */}
                    <div className="absolute top-[5%] left-0 md:top-0 md:left-[5%] w-[160px] sm:w-[200px] md:w-[300px] aspect-[4/5] z-0 -rotate-[12deg] shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-white transition-all duration-700 hover:z-50 hover:scale-105 hover:rotate-0 group">
                        <Image src="/im1.png" alt="Wooden Item 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    {/* Card 2 (Bottom Right) */}
                    <div className="absolute bottom-[5%] right-0 md:bottom-0 md:right-0 w-[150px] sm:w-[190px] md:w-[280px] aspect-[4/5] z-10 rotate-[8deg] shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-white transition-all duration-700 hover:z-50 hover:scale-105 hover:rotate-0 group">
                        <Image src="/im2.png" alt="Wooden Item 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    {/* Card 3 (Center Front) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[230px] md:w-[340px] aspect-[4/5] z-20 -rotate-[2deg] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[10px] md:border-[16px] border-white transition-all duration-700 hover:scale-105 hover:rotate-0 group animate-float">
                        <Image src="/im3.png" alt="Wooden Item 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                </div>
            </main>
        </section>
    );
}
