export default function ProductShowcase() {
    return (
        <section className="relative py-24 px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-foreground">
                        Handcrafted with love,
                        <br />
                        <span className="text-accent-coral">designed to inspire.</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Each wooden figure is carefully carved from sustainable wood and hand-painted with non-toxic colors.
                        They're not just decorations—they're tiny companions ready to brighten your space.
                    </p>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Perfect for your desk, shelf, or as a thoughtful gift for someone special.
                    </p>
                    <button className="bg-accent-coral text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Explore Our Collection
                    </button>
                </div>
                <div className="relative h-[500px] bg-gradient-to-br from-orange-50 to-amber-50 rounded-[3rem] overflow-hidden shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted/30 text-6xl font-bold">
                        Product Image
                    </div>
                </div>
            </div>
        </section>
    );
}
