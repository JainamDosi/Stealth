import Image from "next/image";

const row1 = [
    {
        quote: "I've tried countless shelf decorations, but nothing compares to the soul of these little guys. Every glance feels like a warm hug!",
        author: "Olivia Richardson",
        location: "New York, USA",
        color: "bg-[#FFB7B2]" // Soft Red/Coral
    },
    {
        quote: "As a wood lover, I appreciate the rich texture and organic craftsmanship. This collection has become my go-to for workspace zen!",
        author: "Sophia Mitchell",
        location: "London, UK",
        color: "bg-[#FFDAC1]" // Soft Orange
    },
    {
        quote: "I never knew wood could feel this alive! The details are so pure and soothing. Plus, the packaging is beautiful—perfect for gifting too!",
        author: "Aisha Khan",
        location: "Dubai, UAE",
        color: "bg-[#FFF9C4]" // Soft Yellow
    },
    {
        quote: "These figures are absolute masterpieces. The minimalist design fits perfectly with my office aesthetic. Highly recommend!",
        author: "James Wilson",
        location: "Seattle, USA",
        color: "bg-[#E2F0CB]" // Soft Green
    }
];

const row2 = [
    {
        quote: "The variety of figures is amazing! Whether I need a focus boost or a calming presence, Woooden Stories has it all. Simply brilliant!",
        author: "Emily Sanders",
        location: "Sydney, Australia",
        color: "bg-[#B3E5FC]" // Soft Blue
    },
    {
        quote: "This little guy has changed my desk routine for the better! Seeing it helps me feel refreshed and grounded. Love the natural materials!",
        author: "Priya Deshmukh",
        location: "Mumbai, India",
        color: "bg-[#E1BEE7]" // Soft Purple
    },
    {
        quote: "I'm obsessed with the hand-painted finish. It gives the perfect touch of personality. A must-buy for any craft enthusiast!",
        author: "Mia Lawrence",
        location: "Toronto, Canada",
        color: "bg-[#F8BBD0]" // Soft Pink
    },
    {
        quote: "The quality is outstanding. You can tell real heart goes into every piece. It's the best investment I've made for my home office.",
        author: "Liam O'Brien",
        location: "Dublin, Ireland",
        color: "bg-[#CFD8DC]" // Soft Blue Grey
    }
];

const TestimonialCard = ({ item }: { item: any }) => (
    <div className="flex-shrink-0 w-[300px] mx-3 p-6 rounded-3xl bg-[#F9F7F2] border border-primary-brown/5 shadow-sm flex flex-col justify-between min-h-[220px] mb-2">
        <p className="whitespace-normal italic text-foreground/80 leading-relaxed font-medium text-sm">
            "{item.quote}"
        </p>
        <div className="flex items-center gap-3 mt-3">
            <div className="w-10 h-10 rounded-full bg-primary-brown/10 overflow-hidden relative border-2 border-white flex-shrink-0">
                <div className="bg-primary-brown/20 w-full h-full" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-sm truncate">{item.author}</p>
                <p className="text-[9px] text-foreground/60 uppercase tracking-widest truncate">{item.location}</p>
            </div>
        </div>
    </div>
);

export default function TestimonialsSection() {
    return (
        <section className="relative py-24 px-0 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center space-y-4 mb-16 px-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
                    What people are saying?
                </h2>
                <p className="text-lg text-text-muted max-w-2xl mx-auto">
                    Don't just take our word for it—see what our customers have to say about their experience!
                </p>
            </div>

            <div className="space-y-8 faded-edges pb-10">
                {/* Row 1: Moving Right to Left */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="flex animate-marquee shrink-0">
                        {row1.map((item, i) => <TestimonialCard key={`r1-${i}`} item={item} />)}
                    </div>
                    <div className="flex animate-marquee shrink-0">
                        {row1.map((item, i) => <TestimonialCard key={`r1-dup-${i}`} item={item} />)}
                    </div>
                    <div className="flex animate-marquee shrink-0">
                        {row1.map((item, i) => <TestimonialCard key={`r1-dup2-${i}`} item={item} />)}
                    </div>
                </div>

                {/* Row 2: Moving Left to Right */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="flex animate-marquee-reverse shrink-0">
                        {row2.map((item, i) => <TestimonialCard key={`r2-${i}`} item={item} />)}
                    </div>
                    <div className="flex animate-marquee-reverse shrink-0">
                        {row2.map((item, i) => <TestimonialCard key={`r2-dup-${i}`} item={item} />)}
                    </div>
                    <div className="flex animate-marquee-reverse shrink-0">
                        {row2.map((item, i) => <TestimonialCard key={`r2-dup2-${i}`} item={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
