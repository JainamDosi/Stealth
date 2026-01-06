"use client";

const features = [
    {
        title: "100% Eco-Friendly",
        description: "Made from sustainably sourced wood with zero plastic.",
        icon: "🌱"
    },
    {
        title: "Hand-Painted",
        description: "Every piece is unique. Artisans paint each figure with care.",
        icon: "🎨"
    },
    {
        title: "Timeless Design",
        description: "Minimalist aesthetics that never go out of style.",
        icon: "🏛️"
    }
];

export default function FeaturesSection() {
    return (
        <section className="relative py-12 md:py-16 px-6 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 reveal group" style={{ transitionDelay: `${index * 150}ms` }}>
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-accent-coral/5 flex items-center justify-center text-2xl md:text-3xl shadow-sm border border-accent-coral/10 group-hover:bg-accent-coral group-hover:text-white transition-all duration-500">
                                {feature.icon}
                            </div>
                            <div className="text-center md:text-left space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{feature.title}</h3>
                                <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xs">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="w-8 h-1 bg-accent-coral/20 rounded-full group-hover:w-16 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
