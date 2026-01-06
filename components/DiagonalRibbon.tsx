"use client";

export default function DiagonalRibbon() {
    const text = "Handcrafted with Love • Eco-Friendly • 100% Unique • ";
    const repeatedText = text.repeat(15);

    return (
        <div className="relative w-full overflow-hidden h-40 flex items-center justify-center -my-16 z-10 pointer-events-none">
            <div className="absolute w-[180vw] left-[-40vw] bg-primary-brown transform -rotate-2 origin-center shadow-2xl overflow-hidden py-5">
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="flex shrink-0 animate-marquee min-w-full items-center">
                        <span className="text-white font-black text-2xl md:text-4xl tracking-widest uppercase">
                            {repeatedText}
                        </span>
                    </div>
                    <div className="flex shrink-0 animate-marquee min-w-full items-center">
                        <span className="text-white font-black text-2xl md:text-4xl tracking-widest uppercase">
                            {repeatedText}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
