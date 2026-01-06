"use client";

const pricingPlans = [
    {
        name: "Single Figure",
        description: "Perfect for trying us out",
        price: "$24",
        period: "/ piece",
        emoji: "💛",
        bgColor: "bg-white dark:bg-primary-brown/20",
        textColor: "text-foreground",
        buttonStyle: "bg-primary-brown text-white dark:bg-accent-coral dark:text-primary-brown",
        features: ["Hand-painted figure", "Eco-friendly pack", "Next day dispatch"],
        featured: false
    },
    {
        name: "Collection Set",
        description: "Best value for collectors",
        price: "$65",
        period: "/ 3 pieces",
        emoji: "✨",
        bgColor: "bg-gradient-to-br from-[#8B7E74] to-primary-brown dark:from-[#3D342E] dark:to-[#2D241F]",
        textColor: "text-white",
        buttonStyle: "bg-white text-accent-coral dark:bg-accent-coral dark:text-primary-brown",
        features: ["3 unique figures", "Premium box", "Free shipping", "Artisan signed"],
        featured: true
    },
    {
        name: "Custom Order",
        description: "Personalized just for you",
        price: "$99",
        period: "/ custom",
        emoji: "🎁",
        bgColor: "bg-white dark:bg-primary-brown/20",
        textColor: "text-foreground",
        buttonStyle: "bg-primary-brown text-white dark:bg-accent-coral dark:text-primary-brown",
        features: ["Custom design", "Personal consult", "Luxury wrap", "Priority support"],
        featured: false
    }
];

import Image from "next/image";

export default function PricingSection() {
    return (
        <section className="relative py-20 md:py-32 px-6 md:px-8 bg-gradient-to-b from-white to-[#F9F7F2]/30 dark:from-background dark:to-background/50 overflow-hidden transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-4 mb-16 md:mb-20 reveal">
                    <div className="inline-flex items-center gap-2 bg-accent-coral/10 dark:bg-accent-coral/20 px-4 py-1.5 rounded-full border border-accent-coral/20 dark:border-accent-coral/30">
                        <span className="text-[10px] font-bold text-accent-coral uppercase tracking-widest">Pricing</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                        Choose your <span className="text-accent-coral italic">companion</span>
                    </h2>
                    <p className="text-base md:text-lg text-text-muted max-w-lg mx-auto reveal-delay-1">
                        Transparent pricing for handcrafted art.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch py-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col ${plan.bgColor} rounded-[2.5rem] p-8 md:p-10 shadow-lg transition-all duration-500 reveal-delay-${index + 1} ${plan.featured
                                ? 'md:scale-105 z-10 border-2 border-white/20 dark:border-white/10'
                                : 'border border-primary-brown/5 dark:border-white/10'
                                } group`}
                        >
                            {/* Watermark restricted to a hidden-overflow container inside the card */}
                            {plan.featured && (
                                <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                                    <div className="absolute -top-10 -right-10 w-64 h-64 opacity-[0.15] dark:opacity-[0.2] rotate-[20deg] scale-125">
                                        <Image src="/overlay.png" alt="" fill className="object-contain dark:brightness-150" />
                                    </div>
                                </div>
                            )}

                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-brown dark:bg-accent-coral text-white dark:text-primary-brown px-6 py-2 rounded-full text-[9px] font-black tracking-widest uppercase z-30 shadow-md transition-colors duration-500">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="space-y-6 md:space-y-8 relative z-10 flex-1 flex flex-col">
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${plan.featured ? 'bg-white/20 dark:bg-white/10' : 'bg-orange-50 dark:bg-accent-coral/10'} flex items-center justify-center text-3xl transition-transform duration-500`}>
                                    {plan.emoji}
                                </div>
                                <div className="space-y-1">
                                    <h3 className={`text-2xl md:text-3xl font-bold ${plan.textColor} tracking-tight`}>{plan.name}</h3>
                                    <p className={`text-xs md:text-sm font-medium ${plan.featured ? 'text-white/70' : 'text-text-muted'}`}>{plan.description}</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-4xl md:text-5xl font-black ${plan.textColor} tracking-tighter`}>{plan.price}</span>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${plan.featured ? 'text-white/60' : 'text-text-muted/50'}`}>{plan.period}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className={`flex items-start gap-3 ${plan.featured ? 'text-white/90' : 'text-foreground/80'} font-medium text-xs md:text-sm uppercase tracking-wide`}>
                                            <svg className={`w-4 h-4 ${plan.featured ? 'text-white' : 'text-accent-coral'} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <button className={`w-full ${plan.buttonStyle} py-4 md:py-5 rounded-full font-bold text-sm md:text-base transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md`}>
                                        {plan.featured ? 'Get Started' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
