"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <header className="relative w-full overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
                {/* Hero Content */}
                <div className="flex flex-col justify-center px-6 py-20 lg:py-0 lg:pr-12 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 w-fit mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span className="text-xs font-medium text-orange-800 uppercase tracking-wide">
                            Fresh from the Tap
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-stone-900">
                        Wear the Pub. <br />
                        <span className="text-stone-400">Literally.</span>
                    </h1>

                    <p className="text-lg text-stone-500 mb-8 max-w-md leading-relaxed">
                        Premium heavyweight cotton meets happy hour humor. Streetwear
                        designed for the local legend, the designated drinker, and the guy
                        who says "just one more."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/collection/all"
                            className="px-8 py-4 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-stone-200/50"
                        >
                            Shop Collection
                            <ArrowRight
                                className="group-hover:translate-x-1 transition-transform w-4 h-4"
                                strokeWidth={1.5}
                            />
                        </Link>
                        <button className="px-8 py-4 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
                            View Lookbook
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-xs text-stone-400 font-medium">
                        <div className="flex -space-x-2">
                            <Image
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                                alt="User"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                                alt="User"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                                alt="User"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                            />
                        </div>
                        <span>Trusted by 5,000+ Regulars</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative h-[50vh] lg:h-auto bg-stone-100 overflow-hidden order-1 lg:order-2 group/hero">
                    <Image
                        src="/images/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                        alt="Man wearing stylish streetwear in a bar setting"
                        fill
                        className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        priority={true}
                    />

                    {/* Floating Card */}
                    <div className="absolute bottom-8 left-8 right-8 lg:left-8 lg:right-auto bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-xl max-w-xs">
                        <div className="flex items-start gap-4">
                            <Image
                                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=150&h=150"
                                alt="Product thumbnail"
                                width={64}
                                height={64}
                                className="w-16 h-16 rounded-lg object-cover bg-stone-200"
                            />
                            <div>
                                <p className="text-sm font-medium text-stone-900 leading-tight">
                                    The "Last Call" Heavyweight Tee
                                </p>
                                <p className="text-xs text-stone-500 mt-1">
                                    100% Organic Cotton
                                </p>
                                <p className="text-sm font-semibold mt-2">$45.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
