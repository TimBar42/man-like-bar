"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
    id: string;
    name: string;
    price: number;
    color: string;
    image_url: string;
    badge?: string | null;
    slug: string;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group cursor-pointer">
            <Link href={`/product/${product.slug}`}>
                <div className="relative aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden mb-4 border border-stone-100">
                    <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Quick Add Button - Slides up on hover */}
                    <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                // Add to cart logic would go here
                                console.log('Quick add', product.id);
                            }}
                            className="w-full bg-white text-stone-900 text-xs font-semibold py-3 rounded-lg shadow-lg hover:bg-stone-50"
                        >
                            Quick Add
                        </button>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                        <div className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase ${product.badge === 'Low Stock'
                                ? 'bg-orange-100 text-orange-800'
                                : 'bg-white/90 backdrop-blur text-stone-900'
                            }`}>
                            {product.badge}
                        </div>
                    )}
                </div>

                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-sm font-medium text-stone-900">{product.name}</h3>
                        <p className="text-xs text-stone-500 mt-1">{product.color}</p>
                    </div>
                    <span className="text-sm font-medium text-stone-900">${product.price}</span>
                </div>
            </Link>
        </div>
    );
}
