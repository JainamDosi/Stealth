const pricingPlans = [
    {
        name: "Single Figure",
        description: "Perfect for trying us out",
        price: "$24",
        period: "/ piece",
        emoji: "💛",
        bgColor: "bg-white",
        textColor: "text-foreground",
        buttonStyle: "bg-primary-brown text-white",
        features: [
            "Hand-painted wooden figure",
            "Eco-friendly packaging",
            "Free shipping over $50"
        ],
        featured: false
    },
    {
        name: "Collection Set",
        description: "Best value for collectors",
        price: "$65",
        period: "/ 3 pieces",
        emoji: "✨",
        bgColor: "bg-gradient-to-br from-accent-coral to-orange-400",
        textColor: "text-white",
        buttonStyle: "bg-white text-accent-coral",
        features: [
            "3 unique wooden figures",
            "Premium gift box",
            "Free worldwide shipping"
        ],
        featured: true
    },
    {
        name: "Custom Order",
        description: "Personalized just for you",
        price: "$99",
        period: "/ custom",
        emoji: "🎁",
        bgColor: "bg-white",
        textColor: "text-foreground",
        buttonStyle: "bg-primary-brown text-white",
        features: [
            "Fully customizable design",
            "Personal consultation",
            "Luxury packaging included"
        ],
        featured: false
    }
];

export default function PricingSection() {
    return (
        <section className="relative py-24 px-8 bg-gradient-to-b from-white to-orange-50/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                        Choose your companion
                    </h2>
                    <p className="text-lg text-text-muted">
                        Simple pricing, no hidden fees
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${plan.bgColor} rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${plan.featured
                                    ? 'transform scale-105 relative'
                                    : 'border-2 border-transparent hover:border-accent-coral/20'
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-brown text-white px-6 py-2 rounded-full text-sm font-bold">
                                    MOST POPULAR
                                </div>
                            )}
                            <div className="space-y-6">
                                <div className={`w-16 h-16 rounded-2xl ${plan.featured ? 'bg-white/20 backdrop-blur-sm' : 'bg-amber-100'
                                    } flex items-center justify-center text-3xl`}>
                                    {plan.emoji}
                                </div>
                                <div>
                                    <h3 className={`text-2xl font-semibold ${plan.textColor} mb-2`}>{plan.name}</h3>
                                    <p className={plan.featured ? 'text-white/90' : 'text-text-muted'}>{plan.description}</p>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-5xl font-bold ${plan.textColor}`}>{plan.price}</span>
                                    <span className={plan.featured ? 'text-white/90' : 'text-text-muted'}>{plan.period}</span>
                                </div>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className={`flex items-start gap-3 ${plan.featured ? 'text-white/95' : 'text-text-muted'
                                            }`}>
                                            <svg className={`w-5 h-5 ${plan.featured ? 'text-white' : 'text-accent-coral'} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full ${plan.buttonStyle} py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300`}>
                                    {plan.featured ? 'Get Started' : index === 0 ? 'Add to Cart' : 'Contact Us'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
