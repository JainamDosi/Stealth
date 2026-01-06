import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-[#F9F7F2] pt-24 pb-12 overflow-hidden">
            {/* Immersive CTA Section */}
            <div className="max-w-7xl mx-auto px-8 mb-24">
                <div className="relative bg-primary-brown rounded-[3.5rem] p-12 md:p-20 overflow-hidden shadow-2xl">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-accent-coral/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-[80px] -ml-30 -mb-30"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div className="space-y-6 max-w-xl">
                            <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight">
                                Ready to find <br />
                                your <span className="text-accent-coral underline decoration-from-font underline-offset-8">new friend?</span>
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed">
                                Join 2,400+ happy humans who have already brought home a piece of Woooden Stories. Every companion is unique.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                                <button className="bg-white text-primary-brown px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                                    Start Your Collection
                                </button>
                                <button className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                                    View FAQ
                                </button>
                            </div>
                        </div>

                        <div className="relative w-64 h-64 md:w-80 md:h-80 group animate-float">
                            <div className="absolute inset-0 bg-accent-coral/10 rounded-full blur-2xl group-hover:bg-accent-coral/20 transition-all duration-700"></div>
                            <Image
                                src="/wooden-logo.svg"
                                alt="Footer Logo"
                                fill
                                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-20 border-b border-primary-brown/10">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image src="/wooden-logo.svg" alt="Logo" width={32} height={32} />
                            <span className="text-2xl font-black tracking-tighter text-foreground">Woooden Stories.</span>
                        </div>
                        <p className="text-text-muted leading-relaxed">
                            Crafting tiny wood-bound souls for minimalist homes and creative spaces across the globe.
                        </p>
                        <div className="flex gap-4">
                            {[
                                {
                                    label: 'Instagram',
                                    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>'
                                },
                                {
                                    label: 'Pinterest',
                                    path: 'M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.379-.293 1.192-.332 1.353-.052.21-.171.255-.395.153-1.474-.686-2.394-2.842-2.394-4.575 0-3.723 2.705-7.141 7.798-7.141 4.093 0 7.275 2.917 7.275 6.817 0 4.067-2.564 7.339-6.123 7.339-1.196 0-2.321-.621-2.707-1.357 0 0-.592 2.253-.736 2.809-.267 1.029-1.002 2.319-1.493 3.116 1.121.346 2.308.533 3.538.533 6.628 0 12-5.372 12-12s-5.372-12-12-12z'
                                },
                                {
                                    label: 'Twitter',
                                    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
                                }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white border border-primary-brown/10 flex items-center justify-center text-primary-brown hover:bg-accent-coral hover:text-white hover:border-accent-coral transition-all hover:-translate-y-1 shadow-sm"
                                    aria-label={social.label}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground/50">Shop</h4>
                        <ul className="space-y-4 font-bold text-text-muted">
                            <li><a href="#" className="hover:text-accent-coral transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-colors">Artisan Series</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-colors">Custom AI Orders</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-colors">Gift Cards</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground/50">Company</h4>
                        <ul className="space-y-4 font-bold text-text-muted">
                            <li><a href="#" className="hover:text-accent-coral transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-colors">Process</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-colors">Stockists</a></li>
                            <li><a href="#" className="hover:text-accent-coral transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground/50">Join the Story</h4>
                        <p className="text-text-muted">Get updates on new drops and secret sales.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white border border-primary-brown/10 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-accent-coral/20 focus:border-accent-coral transition-all"
                            />
                            <button className="absolute right-2 top-2 bg-primary-brown text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-coral transition-colors">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-bold text-text-muted uppercase tracking-widest">
                    <p>© 2026 Woooden Stories. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-foreground">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground">Terms of Service</a>
                        <a href="#" className="hover:text-foreground">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
