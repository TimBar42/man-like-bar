"use client";

import { Beer, Star, Martini, Shirt } from "lucide-react";

export function SocialProof() {
    return (
        <div className="border-y border-stone-200 bg-white overflow-hidden py-4">
            <div className="flex whitespace-nowrap gap-12 animate-marquee items-center text-sm font-medium text-stone-500 uppercase tracking-widest w-fit">
                {/* Repeat content enough times to fill screen for marquee effect. 
            In a real app, duplicates are needed for seamless loop. 
            We'll duplicate the set 4 times here. */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex gap-12 items-center">
                        <span className="flex items-center gap-2">
                            <Beer className="text-orange-500 w-4 h-4" /> As seen at The Winchester
                        </span>
                        <span className="flex items-center gap-2">
                            <Star className="text-stone-300 w-4 h-4" /> Rated 5/5 by your local bartender
                        </span>
                        <span className="flex items-center gap-2">
                            <Martini className="text-orange-500 w-4 h-4" /> Shaken, not stirred
                        </span>
                        <span className="flex items-center gap-2">
                            <Shirt className="text-stone-300 w-4 h-4" /> Premium Fits
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
