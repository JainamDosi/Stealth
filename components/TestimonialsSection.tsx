"use client";

import Image from "next/image";

const row1 = [
    {
        quote: "I've tried countless shelf decorations, but nothing compares to the soul of these little guys.",
        author: "Olivia Richardson",
        location: "New York, USA",
        image: "/im1.png"
    },
    {
        quote: "As a wood lover, I appreciate the rich texture and organic craftsmanship.",
        author: "Sophia Mitchell",
        location: "London, UK",
        image: "/im2.png"
    },
    {
        quote: "I never knew wood could feel this alive! The details are so pure and soothing.",
        author: "Aisha Khan",
        location: "Dubai, UAE",
        image: "/im3.png"
    },
    {
        quote: "These figures are absolute masterpieces. The minimalist design fits perfectly.",
        author: "James Wilson",
        location: "Seattle, USA",
        image: "/im4.png"
    }
];

const row2 = [
    {
        quote: "The variety of figures is amazing! Woooden Stories has it all. Simply brilliant!",
        author: "Emily Sanders",
        location: "Sydney, Australia",
        image: "/im4.png"
    },
    {
        quote: "This little guy has changed my desk routine for the better! Seeing it helps me feel refreshed.",
        author: "Priya Deshmukh",
        location: "Mumbai, India",
        image: "/im3.png"
    },
    {
        quote: "I'm obsessed with the hand-painted finish. It gives the perfect touch of personality.",
        author: "Mia Lawrence",
        location: "Toronto, Canada",
        image: "/im2.png"
    },
    {
        quote: "The quality is outstanding. You can tell real heart goes into every piece.",
        author: "Liam O'Brien",
        location: "Dublin, Ireland",
        image: "/im1.png"
    }
];

const TestimonialCard = ({ item }: { item: any }) => (
    <div className="flex-shrink-0 w-[240px] md:w-[320px] mx-2 md:mx-3 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-background border border-primary-brown/5 shadow-sm flex flex-col justify-between min-h-[160px] md:min-h-[220px] mb-3 hover:shadow-md transition-all duration-300">
        <div className="space-y-3">
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-amber-400 text-[10px]">★</span>)}
            </div>
            <p className="whitespace-normal italic text-foreground leading-snug font-medium text-sm md:text-base tracking-tight">
                "{item.quote}"
            </p>
        </div>
        <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-100 overflow-hidden relative border-2 border-white flex-shrink-0">
                <Image src={item.image} alt={item.author} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-xs md:text-sm truncate">{item.author}</p>
                <p className="text-[8px] md:text-[9px] text-text-muted font-bold uppercase tracking-widest truncate">{item.location}</p>
            </div>
        </div>
    </div>
);

export default function TestimonialsSection() {
    return (
        <section className="relative py-12 md:py-20 px-0 bg-[#FFFDF9] overflow-hidden">
            <div className="max-w-6xl mx-auto text-center space-y-4 mb-10 md:mb-16 px-6 md:px-8 reveal">
                <div className="inline-flex items-center gap-2 bg-primary-brown/5 px-4 py-1.5 rounded-full border border-primary-brown/10">
                    <span className="text-[10px] font-bold text-primary-brown uppercase tracking-widest">Kind Words</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                    What people are <span className="text-accent-coral italic">saying</span>
                </h2>
            </div>

            <div className="space-y-4 md:space-y-6 faded-edges pb-6">
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="flex animate-marquee shrink-0">
                        {row1.map((item, i) => <TestimonialCard key={`r1-${i}`} item={item} />)}
                    </div>
                    <div className="flex animate-marquee shrink-0">
                        {row1.map((item, i) => <TestimonialCard key={`r1-dup-${i}`} item={item} />)}
                    </div>
                </div>

                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="flex animate-marquee-reverse shrink-0">
                        {row2.map((item, i) => <TestimonialCard key={`r2-${i}`} item={item} />)}
                    </div>
                    <div className="flex animate-marquee-reverse shrink-0">
                        {row2.map((item, i) => <TestimonialCard key={`r2-dup-${i}`} item={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
