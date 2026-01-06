"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-[#F9F7F2] dark:bg-[#1A1512] pt-12 md:pt-16 pb-8 md:pb-10 overflow-hidden transition-colors duration-500">
            {/* Background Texture */}
            <div className="absolute inset-0 dot-grid opacity-[0.2] pointer-events-none"></div>

            {/* Immersive CTA Section */}
            <div className="max-w-5xl mx-auto px-6 md:px-8 mb-12 md:mb-16 relative z-10">
                <div className="relative bg-primary-brown dark:bg-[#2D241F] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 overflow-hidden shadow-xl reveal border border-white/5 dark:border-white/10 transition-colors duration-500">
                    {/* Branded Watermark Overlay */}
                    <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] opacity-[0.08] pointer-events-none rotate-[20deg] scale-125">
                        <Image src="/overlay.png" alt="Watermark" fill className="object-contain" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-coral/15 rounded-full blur-[80px] -mr-32 -mt-32 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[60px] -ml-20 -mb-20"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
                        <div className="space-y-5 md:space-y-6 max-w-lg">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                                Ready for a <br />
                                <span className="text-accent-coral italic underline decoration-white/10 underline-offset-[6px]">new friend?</span>
                            </h2>
                            <p className="text-base text-white/60 leading-relaxed font-medium">
                                Join our community of 2,400+ humans who have brought home a piece of Woooden Stories.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                                <button className="bg-white text-primary-brown px-8 py-3.5 rounded-full font-bold text-base hover:shadow-lg transition-all active:scale-95">
                                    Start Collection
                                </button>
                                <button className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/10 transition-all active:scale-95">
                                    View FAQ
                                </button>
                            </div>
                        </div>

                        <div className="relative w-32 h-32 md:w-52 md:h-52 group animate-float border-white">
                            <div className="absolute inset-0 bg-accent-coral/10 rounded-full blur-[40px] group-hover:bg-accent-coral/20 transition-all duration-1000"></div>
                            <Image
                                src="/wooden-logo.svg"
                                alt="Footer Logo"
                                fill
                                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-10 md:pb-12 border-b border-primary-brown/10 dark:border-white/10">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-6">
                        <div className="relative w-44 h-16 -ml-2 mb-2 group cursor-pointer">
                            <Image src="/logo2.png" alt="Woooden Stories" fill className="object-contain object-left pointer-events-none" />
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed font-medium max-w-[240px]">
                            Crafting tiny wood-bound souls for minimalist creative spaces.
                        </p>

                        <div className="flex gap-3">
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-primary-brown/30 border border-primary-brown/10 dark:border-white/10 flex items-center justify-center text-primary-brown dark:text-foreground hover:bg-accent-coral hover:text-white hover:border-accent-coral transition-all shadow-sm group" aria-label="Instagram">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* X (Formerly Twitter) */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-primary-brown/30 border border-primary-brown/10 dark:border-white/10 flex items-center justify-center text-primary-brown dark:text-foreground hover:bg-accent-coral hover:text-white hover:border-accent-coral transition-all shadow-sm group" aria-label="Twitter">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </a>
                            {/* Pinterest */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-primary-brown/30 border border-primary-brown/10 dark:border-white/10 flex items-center justify-center text-primary-brown dark:text-foreground hover:bg-accent-coral hover:text-white hover:border-accent-coral transition-all shadow-sm group" aria-label="Pinterest">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.379-.293 1.192-.332 1.353-.052.21-.171.255-.395.153-1.474-.686-2.394-2.842-2.394-4.575 0-3.723 2.705-7.141 7.798-7.141 4.093 0 7.275 2.917 7.275 6.817 0 4.067-2.564 7.339-6.123 7.339-1.196 0-2.321-.621-2.707-1.357 0 0-.592 2.253-.736 2.809-.267 1.029-1.002 2.319-1.493 3.116 1.121.346 2.308.533 3.538.533 6.628 0 12-5.372 12-12s-5.372-12-12-12z"></path>
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
                                className="w-full bg-white dark:bg-primary-brown/20 dark:text-foreground border border-primary-brown/10 dark:border-white/10 rounded-full py-2.5 px-5 text-sm focus:outline-none focus:border-accent-coral transition-all shadow-sm placeholder:text-text-muted"
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
