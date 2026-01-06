import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8 z-10">
                <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-100 self-start shadow-sm">
                    <span className="text-accent-coral">❤️</span>
                    <span className="text-[14px] font-medium text-accent-coral">Hand-painted with love</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
                    Every figure <br />
                    has a <span className="text-accent-coral">secret</span> <br />
                    to tell.
                </h1>

                <p className="text-lg text-text-muted leading-relaxed max-w-md">
                    We carve tiny souls out of wood. Your desk is lonely, and these little guys are ready to move in. Pure vibes, eco-friendly, and 100% cute.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="bg-primary-brown text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Order Yours Now
                    </button>
                    <button className="bg-white text-foreground border-2 border-primary-brown/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all duration-300 shadow-sm">
                        See the Collection
                    </button>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-4 pt-6">
                    <div className="flex -space-x-3">
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-amber-200 to-amber-400 shadow-md"></div>
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-orange-300 to-amber-500 shadow-md"></div>
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-teal-400 to-blue-500 shadow-md"></div>
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-gray-700 to-gray-900 shadow-md"></div>
                    </div>
                    <p className="text-text-muted text-sm">
                        <span className="font-bold text-foreground">2,400+</span> happy humans & counting
                    </p>
                </div>
            </div>

            {/* Right Image Container */}
            <div className="relative flex justify-center lg:justify-end h-[500px] w-full lg:w-auto mt-10">
                {/* Decorative Stacked Images */}
                {/* Card 1 (Back) - im1 */}
                <div className="absolute top-0 right-[25%] w-[260px] md:w-[300px] aspect-[4/5] z-0 rotate-[-12deg] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] rounded-[2.5rem] overflow-hidden border-[8px] border-white origin-bottom-right transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0 cursor-pointer">
                    <Image src="/im1.png" alt="Decorative Wooden Item 1" fill className="object-cover" />
                </div>
                {/* Card 2 (Middle Back) - im4 */}
                <div className="absolute top-[3%] right-[35%] w-[265px] md:w-[305px] aspect-[4/5] z-5 rotate-[6deg] shadow-[0_35px_70px_-18px_rgba(0,0,0,0.13)] rounded-[2.5rem] overflow-hidden border-[8px] border-white origin-bottom-left transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0 cursor-pointer">
                    <Image src="/im4.png" alt="Decorative Wooden Item 4" fill className="object-cover" />
                </div>
                {/* Card 3 (Middle Front) - im2 */}
                <div className="absolute top-[5%] right-[10%] w-[270px] md:w-[310px] aspect-[4/5] z-10 rotate-[10deg] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] rounded-[2.5rem] overflow-hidden border-[8px] border-white origin-bottom-left transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0 cursor-pointer">
                    <Image src="/im2.png" alt="Decorative Wooden Item 2" fill className="object-cover" />
                </div>
                {/* Card 4 (Front) - im3 */}
                <div className="absolute top-[12%] right-[15%] w-[280px] md:w-[320px] aspect-[4/5] z-20 rotate-[-4deg] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.25)] rounded-[2.5rem] overflow-hidden border-[8px] border-white transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0 cursor-pointer">
                    <Image src="/im3.png" alt="Decorative Wooden Item 3" fill className="object-cover" />
                </div>
            </div>
        </main>
    );
}
