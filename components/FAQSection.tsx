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
    },
    {
        question: "How do I clean my wooden figures?",
        answer: "A dry or slightly damp soft cloth is all you need. Avoid soaking them in water or using harsh chemicals to preserve the paint and wood quality."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-24 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">
                        Curious Minds <br />
                        <span className="text-accent-coral">Ask Questions</span>
                    </h2>
                    <p className="text-lg text-text-muted">
                        Found what you were looking for? If not, we're here to help.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group rounded-3xl transition-all duration-300 ${openIndex === index
                                    ? 'bg-[#F9F7F2] border-transparent'
                                    : 'bg-white border border-primary-brown/5 hover:border-accent-coral/30'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-8 flex items-center justify-between gap-4"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-accent-coral' : 'text-foreground'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-accent-coral text-white rotate-45' : 'bg-primary-brown/5 text-primary-brown'
                                    }`}>
                                    <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48' : 'max-h-0'
                                }`}>
                                <div className="px-8 pb-8 text-text-muted leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
