"use client";

import Image from "next/image";
import Link from "next/link";

export function Lifestyle() {
    return (
        <section className="border-y border-stone-200 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-96 md:h-[600px] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1606103920295-9a091573f160?auto=format&fit=crop&w=1200&q=80"
                        alt="Pub Atmosphere"
                        fill
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/10" />
                </div>
                <div className="flex flex-col justify-center p-12 lg:p-24 bg-stone-50">
                    <div className="w-12 h-1 bg-orange-500 mb-8" />
                    <h2 className="text-3xl font-medium tracking-tight mb-6 text-stone-900">
                        Not Just a Brand.
                        <br />
                        It's a Lifestyle.
                    </h2>
                    <p className="text-stone-600 mb-8 leading-relaxed font-light">
                        Man Like Bar was born on a sticky floor in East London. We make
                        clothes that bridge the gap between "I have a meeting at 4" and "I'm
                        meeting the lads at 5". High-quality fabrics that survive the wash,
                        and designs that survive the banter.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="text-lg font-medium text-stone-900 mb-2">
                                Quality
                            </h4>
                            <p className="text-xs text-stone-500">
                                400GSM Cotton. Built to spill.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-stone-900 mb-2">
                                Comfort
                            </h4>
                            <p className="text-xs text-stone-500">
                                Relaxed fits for relaxed pints.
                            </p>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="text-sm font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-orange-500 hover:text-orange-600 transition-all w-fit"
                    >
                        Read our drunken manifesto
                    </Link>
                </div>
            </div>
        </section>
    );
}
