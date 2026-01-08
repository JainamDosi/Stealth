"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function AISection() {
    const [isUploading, setIsUploading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [isConverted, setIsConverted] = useState(false);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const uploadedFileRef = useRef<File | null>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            uploadedFileRef.current = file;
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
                setError(null);
                if (isUploading) return;
                // Auto-generate the wooden toy version
                generateWoodenToy(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const generateWoodenToy = async (file: File) => {
        setIsUploading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch('/api/generate-wooden-toy', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate wooden toy image');
            }

            // Convert base64 to data URL
            const imageDataUrl = `data:${data.mimeType};base64,${data.image}`;
            setGeneratedImage(imageDataUrl);
            setIsConverted(true);
        } catch (err) {
            console.error('Error generating wooden toy:', err);
            setError(err instanceof Error ? err.message : 'Failed to generate image');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <section className="relative py-16 md:py-24 px-4 md:px-8 bg-[#F9F7F2] overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-[0.25] pointer-events-none"></div>

            {/* Subtle light background watermark */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 opacity-[0.02] pointer-events-none rotate-[15deg]">
                <Image src="/overlay.png" alt="Watermark" fill className="object-contain" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center space-y-4 mb-12 md:mb-16 reveal">
                    <div className="inline-flex items-center gap-2 bg-accent-coral/10 px-4 py-1.5 rounded-full border border-accent-coral/20">
                        <span className="text-accent-coral text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">AI Magic ✨</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                        See yourself as a <span className="text-accent-coral italic">Wooden Toy</span>
                    </h2>
                    <p className="text-base md:text-lg text-text-muted max-w-xl mx-auto px-4 reveal-delay-1">
                        Visualize anyone as a handcrafted wooden companion.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
                    {/* Upload Panel */}
                    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-lg border border-primary-brown/5 flex flex-col reveal-delay-2">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-primary-brown text-white flex items-center justify-center text-sm font-bold">1</span>
                                Photo
                            </h3>
                            {preview && (
                                <button
                                    onClick={() => { setPreview(null); setIsConverted(false); }}
                                    className="text-xs font-bold text-accent-coral"
                                >
                                    Reset
                                </button>
                            )}
                        </div>

                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className={`flex-1 min-h-[200px] md:min-h-[250px] border-2 border-dashed rounded-[1.5rem] md:rounded-[2rem] transition-all cursor-pointer flex flex-col items-center justify-center p-4 text-center group ${preview ? 'border-primary-brown/15' : 'border-primary-brown/10 hover:border-accent-coral/40'}`}
                        >
                            {preview ? (
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                                    <Image src={preview} alt="Upload preview" fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="w-14 h-14 rounded-full bg-accent-coral/5 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                                        <svg className="w-6 h-6 text-accent-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <p className="text-base font-bold text-foreground">Tap to upload</p>
                                </div>
                            )}
                            <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="bg-primary-brown text-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-xl flex flex-col relative overflow-hidden reveal-delay-3">
                        {/* Branded Watermark Overlay - Orientation adjusted for better "stamped" feel */}
                        <div className="absolute -bottom-12 -right-12 w-80 h-80 opacity-[0.12] pointer-events-none rotate-[-15deg] scale-110">
                            <Image src="/overlay.png" alt="Watermark" fill className="object-contain" />
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-coral/15 rounded-full blur-[80px] -mr-32 -mt-32"></div>

                        <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                            <span className="w-8 h-8 rounded-full bg-accent-coral text-white flex items-center justify-center text-sm font-bold">2</span>
                            Result
                        </h3>

                        <div className="flex-1 bg-white/5 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center p-6 relative z-10 min-h-[250px]">
                            {isUploading ? (
                                <div className="text-center space-y-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-accent-coral border-t-transparent rounded-full animate-spin mx-auto"></div>
                                    <p className="text-lg font-bold italic animate-pulse">Carving your wooden toy...</p>
                                    <p className="text-xs text-white/50">This may take 10-30 seconds</p>
                                </div>
                            ) : error ? (
                                <div className="text-center space-y-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
                                        <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-bold text-red-200">{error}</p>
                                    <button
                                        onClick={() => uploadedFileRef.current && generateWoodenToy(uploadedFileRef.current)}
                                        className="text-sm font-bold text-white/70 hover:text-white underline"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            ) : isConverted && generatedImage ? (
                                <div className="space-y-6 w-full text-center">
                                    <div className="relative w-full aspect-square max-w-[200px] md:max-w-[240px] mx-auto">
                                        <div className="absolute inset-0 bg-accent-coral/20 rounded-full blur-[30px] animate-pulse"></div>
                                        <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-xl">
                                            <Image src={generatedImage} alt="AI Generated Wooden Toy" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={generatedImage}
                                            download="wooden-toy.png"
                                            className="bg-white text-primary-brown px-8 py-3 rounded-full font-bold text-base hover:shadow-lg transition-all active:scale-95"
                                        >
                                            Download Image
                                        </a>
                                        <button className="bg-accent-coral text-white px-8 py-3 rounded-full font-bold text-base hover:shadow-lg transition-all active:scale-95">
                                            Order Physical Toy — $129
                                        </button>
                                        <button onClick={() => { setPreview(null); setIsConverted(false); setGeneratedImage(null); setError(null); }} className="text-sm font-bold text-white/50 hover:text-white">
                                            Try Another Photo
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center max-w-xs space-y-4 opacity-20">
                                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto grayscale brightness-[4]">
                                        <Image src="/main.png" alt="Toy Placeholder" width={80} height={80} />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Awaiting Creation</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
