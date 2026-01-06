"use client";

export default function DiagonalRibbon() {
    const text = "Handcrafted with Love • Eco-Friendly • 15% Off Your First Order • Sustainable Art • ";

    return (
        <div className="relative w-full overflow-hidden h-24 md:h-32 flex items-center justify-center -my-8 md:-my-12 z-20 pointer-events-none">
            {/* The Ribbon */}
            <div className="absolute w-[200vw] left-[-50vw] bg-accent-coral transform -rotate-[2deg] shadow-lg overflow-hidden py-3 md:py-4 border-y border-white/20">
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-12">
                        {[...Array(8)].map((_, i) => (
                            <span key={i} className="text-white font-bold text-xl md:text-3xl tracking-tight uppercase italic opacity-95">
                                {text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
