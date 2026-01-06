const features = [
    {
        title: "100% Eco-Friendly",
        description: "Made from sustainably sourced wood with zero plastic. Good for you, great for the planet."
    },
    {
        title: "Hand-Painted Details",
        description: "Every piece is unique. Our artisans paint each figure with care, making yours one-of-a-kind."
    },
    {
        title: "Timeless Design",
        description: "Minimalist aesthetics that never go out of style. Perfect for any space, any vibe."
    }
];

export default function FeaturesSection() {
    return (
        <section className="relative py-24 px-8 bg-gradient-to-b from-white to-orange-50/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-4">
                            <div className="w-14 h-14 rounded-2xl bg-accent-coral/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-accent-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
