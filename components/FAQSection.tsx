"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What kind of wood do you use?",
        answer: "We primarily use sustainably sourced Beech and Maple wood. They're dense, durable, and have a beautiful fine grain that's perfect for hand-painting."
    },
    {
        question: "Are the paints safe for children?",
        answer: "Absolutely. We use non-toxic, water-based paints and finishes that meet all safety standards. They are 100% lead-free and eco-friendly."
    },
    {
        question: "How long does a custom AI order take?",
        answer: "Custom orders typically take 10-14 business days to carve and paint. Each piece is unique and receives our full attention to detail."
    },
    {
        question: "Do you ship worldwide?",
        answer: "Yes, we ship to over 50 countries! Shipping times vary by location, but generally take 5-10 business days for international orders."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-[0.15] pointer-events-none"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center space-y-3 mb-12 md:mb-16 reveal">
                    <div className="inline-flex items-center gap-2 bg-accent-coral px-4 py-1.5 rounded-full border border-primary-brown/10">
                        <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">Support</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                        Curious Minds <span className="text-accent-coral italic">Ask</span>
                    </h2>
                </div>

                <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 reveal-delay-${index % 3 + 1} 
                                bg-background border ${openIndex === index ? 'shadow-sm border-accent-coral' : 'border-primary-brown/5 hover:border-accent-coral/30'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-5 md:p-8 flex items-center  justify-between gap-4"
                            >
                                <span className={`text-base md:text-xl font-bold tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-accent-coral' : 'text-foreground'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${openIndex === index ? 'bg-accent-coral text-white rotate-[135deg]' : 'bg-primary-brown/5 text-primary-brown'
                                    }`}>
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12m6-6H6" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-5 pb-6 md:px-8 md:pb-10 text-sm md:text-base text-text-muted leading-relaxed font-medium">
                                    <p className="max-w-2xl">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
