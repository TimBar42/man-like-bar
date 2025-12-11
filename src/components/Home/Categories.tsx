"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/placeholder-data";

export function Categories() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-medium tracking-tight mb-8 text-stone-900">
                Browse by Poison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CATEGORIES.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/collection/${cat.slug}`}
                        className="group relative h-80 rounded-xl overflow-hidden bg-stone-200"
                    >
                        <Image
                            src={cat.image_url}
                            alt={cat.name}
                            fill
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-white text-xl font-medium mb-1">
                                {cat.name}
                            </h3>
                            <p className="text-stone-300 text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                                Shop Now <ArrowRight className="w-3 h-3" />
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
