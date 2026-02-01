"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-[#F9F7F2] pt-12 md:pt-16 pb-8 md:pb-10 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 dot-grid opacity-[0.2] pointer-events-none"></div>

            {/* Immersive CTA Section */}


            {/* Main Footer Links */}
            <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-10 md:pb-12 border-b border-primary-brown/10">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-6">
                        <div className="relative w-44 h-16 -ml-2 mb-2 group cursor-pointer">
                            <Image src="/logo2.png" alt="Woooden Stories" fill className="object-contain object-left pointer-events-none" />
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed font-medium max-w-[240px]">
                            Crafting tiny wood-bound souls for minimalist creative spaces.
                        </p>

                        <div className="flex gap-3">
                            {/* Instagram */}
                            <a href="https://www.instagram.com/wooodenstories/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-primary-brown/10 flex items-center justify-center text-primary-brown hover:bg-accent-coral hover:text-white hover:border-accent-coral transition-all shadow-sm group" aria-label="Instagram">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Shop</h4>
                        <ul className="space-y-2.5 font-bold text-sm text-text-muted">
                            <li><a href="#" className="hover:text-accent-coral transition-all">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-all">Artisan Series</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-all">Custom AI</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Company</h4>
                        <ul className="space-y-2.5 font-bold text-sm text-text-muted">
                            <li><a href="#" className="hover:text-accent-coral transition-all">Our Story</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-all">Process</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-all">Contact</a></li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Stay in touch</h4>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white border border-primary-brown/10 rounded-full py-2.5 px-5 text-sm focus:outline-none focus:border-accent-coral transition-all shadow-sm placeholder:text-text-muted/50"
                            />
                            <button className="absolute right-1 top-1 bg-primary-brown text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-accent-coral transition-all shadow-md">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-text-muted/40 uppercase tracking-[0.2em] text-center md:text-left">
                    <p>© 2026 Woooden Stories.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground transition-all">Privacy</a>
                        <a href="#" className="hover:text-foreground transition-all">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
