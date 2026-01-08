"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bentoImages = [
    "image copy.png", "image.png", "image copy 2.png", "image copy 3.png", "image copy 4.png",
    "image copy 5.png", "image copy 6.png", "image copy 7.png", "image copy 8.png", "image copy 9.png",
    "image copy 10.png", "image copy 11.png", "image copy 12.png", "image copy 13.png", "image copy 14.png",
];

const collectionItems = bentoImages.map((imageName, i) => {
    // Definitive Bento Grid Mapping for exactly 6 rows across 6 desktop columns (36 cells total)
    let size = "col-span-1 row-span-1";

    // Pattern designed to be visually balanced and gap-free
    if (i === 0) size = "md:col-span-2 md:row-span-2"; // 4 cells
    if (i === 1) size = "md:col-span-2 md:row-span-1"; // 2 cells
    if (i === 2) size = "md:col-span-2 md:row-span-1"; // 2 cells
    if (i === 3) size = "md:col-span-1 md:row-span-1"; // 1 cell
    if (i === 4) size = "md:col-span-1 md:row-span-1"; // 1 cell
    if (i === 5) size = "md:col-span-2 md:row-span-1"; // 2 cells
    // Row 1-2 total: 12 cells

    if (i === 6) size = "md:col-span-1 md:row-span-2"; // 2 cells
    if (i === 7) size = "md:col-span-2 md:row-span-1"; // 2 cells
    if (i === 8) size = "md:col-span-3 md:row-span-2"; // 6 cells (Featured)
    if (i === 9) size = "md:col-span-2 md:row-span-1"; // 2 cells
    // Row 3-4 total: 12 cells

    if (i === 10) size = "md:col-span-2 md:row-span-2"; // 4 cells
    if (i === 11) size = "md:col-span-2 md:row-span-1"; // 2 cells
    if (i === 12) size = "md:col-span-2 md:row-span-1"; // 2 cells
    if (i === 13) size = "md:col-span-1 md:row-span-1"; // 1 cell
    if (i === 14) size = "md:col-span-3 md:row-span-1"; // 3 cells
    // Row 5-6 total: 12 cells

    return {
        id: i + 1,
        imagePath: `/bento/${imageName}`,
        title: [
            "For your lovely mother", "Labubu it is", "Rustic River Boat",
            "Perfect for Wedding", "Handsome uncle", "The cute bride",
            "Your happy boss?", "The cool friend", "Your travel memory",
            "Kaalin Bhaiya", "Ember Elm Elephant", "Tidal Teak Turtle",
            "Vintage Walnut Vessel", "Noble Birch Knight", "Celestial Cherry Clover"
        ][i] || `Signature Piece #${i + 1}`,
        size
    };
});

export default function CollectionSection() {
    return (
        <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-[#FDFCF9] overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-[0.1] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="inline-block bg-primary-brown/10 text-primary-brown px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                            The Art of Wood
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground tracking-tighter leading-[0.9]">
                            Heritage <span className="text-accent-coral italic serif">Collection</span>
                        </h2>
                        <p className="text-base md:text-xl text-text-muted max-w-2xl mx-auto font-medium">
                            A carefully curated showcase of {collectionItems.length} unique pieces, each telling a story of craftsmanship and heritage.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[140px] md:auto-rows-[180px] lg:auto-rows-[200px] gap-2 lg:gap-4">
                    {collectionItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                            className={`${item.size} group relative rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-stone-100 border border-black/5`}
                        >
                            {/* Image Background */}
                            <Image
                                src={item.imagePath}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 lg:p-8">
                                <motion.div
                                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-coral mb-2 block">
                                        {item.category}
                                    </span>
                                    <h4 className="text-sm lg:text-lg font-bold text-white leading-tight">
                                        {item.title}
                                    </h4>
                                </motion.div>
                            </div>

                            {/* Static Info for Featured items (Always visible on mobile/featured) */}
                            {item.size.includes("row-span-2") && (
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-primary-brown shadow-sm">
                                        Signature
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 lg:mt-24 text-center">
                    <button className="group relative px-12 py-5 overflow-hidden rounded-full bg-primary-brown text-white transition-all hover:pr-16">
                        <span className="relative z-10 text-sm font-bold uppercase tracking-widest">Explore Full Gallery</span>
                        <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 transition-all group-hover:right-8 group-hover:opacity-100">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
