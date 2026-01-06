"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function AISection() {
    const [isUploading, setIsUploading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [isConverted, setIsConverted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setIsUploading(true);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
                // Simulate AI Conversion process
                setTimeout(() => {
                    setIsUploading(false);
                    setIsConverted(true);
                }, 3000);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className="relative py-24 px-8 bg-[#F9F7F2]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 bg-accent-coral/10 px-4 py-2 rounded-full">
                        <span className="text-accent-coral text-sm font-bold uppercase tracking-wider">AI Magic ✨</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
                        See yourself as a <span className="text-accent-coral">Wooden Toy</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Upload a photo of yourself, a friend, or a pet, and our AI will visualize it as a handcrafted wooden companion.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Upload Panel */}
                    <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-primary-brown/5 flex flex-col">
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-primary-brown text-white flex items-center justify-center text-sm">1</span>
                            Upload your photo
                        </h3>

                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className={`flex-1 border-2 border-dashed rounded-[2rem] border-primary-brown/10 hover:border-accent-coral/40 transition-all cursor-pointer flex flex-col items-center justify-center p-12 text-center group ${preview ? 'bg-zinc-50' : 'bg-transparent'}`}
                        >
                            {preview ? (
                                <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden">
                                    <Image src={preview} alt="Upload preview" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                                        Change Photo
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="w-20 h-20 rounded-full bg-accent-coral/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <svg className="w-10 h-10 text-accent-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium text-foreground mb-2">Drop your image here</p>
                                    <p className="text-sm text-text-muted">Supports JPG, PNG (Max 5MB)</p>
                                </>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleUpload}
                                className="hidden"
                                accept="image/*"
                            />
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="bg-primary-brown text-white rounded-[3rem] p-10 shadow-2xl flex flex-col relative overflow-hidden">
                        {/* Decorative Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-coral/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 relative z-10">
                            <span className="w-8 h-8 rounded-full bg-accent-coral text-white flex items-center justify-center text-sm">2</span>
                            Your Toy Preview
                        </h3>

                        <div className="flex-1 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center p-8 relative z-10">
                            {isUploading ? (
                                <div className="text-center space-y-6">
                                    <div className="relative w-24 h-24 mx-auto">
                                        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                                        <div className="absolute inset-0 border-4 border-accent-coral rounded-full border-t-transparent animate-spin"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xl font-bold animate-pulse">Carving your soul into wood...</p>
                                        <p className="text-sm text-white/60">AI is analyzing features & styling</p>
                                    </div>
                                </div>
                            ) : isConverted ? (
                                <div className="space-y-8 w-full text-center">
                                    <div className="relative w-full aspect-square max-w-[320px] mx-auto group">
                                        {/* This would be the AI generated wood toy version */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
                                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                                            <Image
                                                src="/im3.png" // Using existing asset as "converted" result for demo
                                                alt="AI Result"
                                                fill
                                                className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="inline-block px-4 py-1 bg-accent-coral rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                                            Match Score: 98%
                                        </div>
                                        <h4 className="text-2xl font-bold">Your Companion is Ready!</h4>
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <button className="bg-white text-primary-brown px-8 py-3 rounded-full font-bold hover:bg-zinc-100 transition-all shadow-xl">
                                                Order This Custom Gift — $129
                                            </button>
                                            <button
                                                onClick={() => { setPreview(null); setIsConverted(false); }}
                                                className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
                                            >
                                                Try Another
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center max-w-xs space-y-4 opacity-40">
                                    <div className="w-24 h-24 mx-auto mb-4 grayscale brightness-200 opacity-20">
                                        <Image src="/wooden-logo.svg" alt="Toy" width={96} height={96} />
                                    </div>
                                    <p className="text-lg font-medium">Upload a photo to see the conversion</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
