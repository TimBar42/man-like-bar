"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "../ProductCard";
import { PRODUCTS } from "@/lib/placeholder-data";

export function FeaturedCollection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6" id="new">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-medium tracking-tight mb-2 text-stone-900">
                        The Happy Hour Edit
                    </h2>
                    <p className="text-stone-500 text-sm max-w-sm">
                        Curated essentials for your next night out. Guaranteed to start
                        conversations or end them.
                    </p>
                </div>
                <Link
                    href="/collection/all"
                    className="text-sm font-medium hover:text-orange-600 transition-colors flex items-center gap-1 group"
                >
                    View all products
                    <ArrowRight
                        className="group-hover:translate-x-1 transition-transform w-4 h-4"
                        strokeWidth={1.5}
                    />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
