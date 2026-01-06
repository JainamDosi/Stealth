import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background selection:bg-accent-coral/30 overflow-hidden dot-grid">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] hero-gradient-orange pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] hero-gradient-yellow pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between max-w-7xl mx-auto left-0 right-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <Image
              src="/logo.png"
              alt="Woooden Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-foreground">Woooden Stories.</span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-[13px] font-bold tracking-[0.1em] text-text-muted">
          <a href="#" className="hover:text-foreground transition-colors uppercase">Origins</a>
          <a href="#" className="hover:text-foreground transition-colors uppercase">Process</a>
          <a href="#" className="hover:text-foreground transition-colors uppercase">Stories</a>
          <a href="#" className="hover:text-foreground transition-colors uppercase">Archive</a>
        </div>

        <button className="bg-primary-brown text-white px-8 py-3 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase hover:opacity-90 transition-opacity">
          Commission
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-40 pb-20 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-100 self-start shadow-sm">
            <span className="text-accent-coral">✨</span>
            <span className="text-[14px] font-medium text-accent-coral">Hand-painted with love</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-foreground">
            Every figure <br />
            has a <span className="text-accent-coral">secret</span> <br />
            to tell.
          </h1>

          <p className="text-lg text-text-muted leading-relaxed max-w-md">
            We carve tiny souls out of wood. Your desk is lonely, and these little guys are ready to move in. Pure vibes, eco-friendly, and 100% cute.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary-brown text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Adopt a Friend
            </button>
            <button className="bg-white text-foreground border-2 border-primary-brown/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all duration-300 shadow-sm">
              See the Collection
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Decorative Yellow Circle */}
          <div className="absolute top-[5%] right-[5%] w-48 h-48 bg-[#FFE259] rounded-full z-0 translate-x-4 -translate-y-4" />

          <div className="relative z-10 p-8 md:p-12 bg-white rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(62,50,42,0.12)] max-w-lg overflow-hidden">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <Image
                src="/hero-image.png"
                alt="Wooden Train Set"
                fill
                className="object-cover"
              />

              {/* Station Tag Overlay */}
              <div className="absolute top-1/4 left-0 bg-[#E84E4E] text-white px-4 py-1.5 -rotate-2 text-[10px] font-bold tracking-widest uppercase shadow-xl">
                • Future Station •
              </div>
            </div>
          </div>

          {/* Hero Soft Blurs */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 hero-gradient-orange opacity-40 -z-10" />
        </div>
      </main>

      {/* Grid Pattern Overlay for Depth */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-40 dot-grid" />
    </div>
  );
}
