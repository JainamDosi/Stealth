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
            <span className="text-accent-coral">❤️</span>
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
        <div className="relative flex justify-center lg:justify-end h-[550px] w-full lg:w-auto mt-10">
          {/* Decorative Stacked Images */}
          {/* Card 1 (Back) */}
          <div className="absolute top-0 right-[35%] w-[320px] md:w-[380px] aspect-[4/5] z-0 rotate-[-12deg] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] rounded-[3rem] overflow-hidden border-[10px] border-white origin-bottom-right">
            <Image src="/im1.png" alt="Decorative Wooden Item 1" fill className="object-cover" />
          </div>
          {/* Card 2 (Middle) */}
          <div className="absolute top-[5%] right-[-2%] w-[330px] md:w-[390px] aspect-[4/5] z-10 rotate-[10deg] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] overflow-hidden border-[10px] border-white origin-bottom-left">
            <Image src="/im2.png" alt="Decorative Wooden Item 2" fill className="object-cover" />
          </div>
          {/* Card 3 (Front) */}
          <div className="absolute top-[12%] right-[15%] w-[350px] md:w-[410px] aspect-[4/5] z-20 rotate-[-4deg] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.25)] rounded-[3rem] overflow-hidden border-[10px] border-white">
            <Image src="/im3.png" alt="Decorative Wooden Item 3" fill className="object-cover" />
          </div>

          {/* Hero Soft Blurs */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 hero-gradient-orange opacity-30 -z-10" />
        </div>
      </main>

      {/* Grid Pattern Overlay for Depth */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-40 dot-grid" />
    </div>
  );
}
