import { MainNav } from "@/components/Navigation/MainNav";
import { Footer } from "@/components/Footer";
import { PRODUCTS } from "@/lib/placeholder-data";
import { Minus, Plus, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = PRODUCTS.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-stone-50 flex flex-col">
            <MainNav />

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden border border-stone-100">
                            <Image
                                src={product.image_url}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {/* Placeholder thumbnails repeating main image */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative aspect-square bg-stone-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-stone-100">
                                    <Image
                                        src={product.image_url}
                                        alt={`${product.name} styling ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col h-full">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                {product.badge && (
                                    <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-orange-100 text-orange-800">
                                        {product.badge}
                                    </span>
                                )}
                                <span className="text-xs text-stone-500 uppercase tracking-wide font-medium">
                                    {product.category || 'Apparel'}
                                </span>
                            </div>
                            <h1 className="text-4xl font-medium tracking-tight text-stone-900 mb-4">
                                {product.name}
                            </h1>
                            <p className="text-2xl font-semibold text-stone-900 mb-6">
                                ${product.price}.00
                            </p>
                            <p className="text-stone-600 leading-relaxed max-w-md">
                                {product.description}
                            </p>
                        </div>

                        {/* Selectors */}
                        <div className="space-y-6 mb-8 border-y border-stone-200 py-8">
                            {/* Size */}
                            <div>
                                <div className="flex justify-between items-baseline mb-3">
                                    <label className="text-sm font-medium text-stone-900">Select Size</label>
                                    <button className="text-xs text-stone-500 underline hover:text-stone-900">Size Guide</button>
                                </div>
                                <div className="grid grid-cols-5 gap-3">
                                    {['S', 'M', 'L', 'XL', '2XL'].map(size => (
                                        <button key={size} className="py-3 border border-stone-200 rounded-lg text-sm font-medium hover:border-stone-900 hover:bg-stone-50 transition-all focus:ring-2 focus:ring-stone-900 focus:outline-none">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="text-sm font-medium text-stone-900 mb-3 block">Quantity</label>
                                <div className="flex items-center w-fit border border-stone-200 rounded-lg">
                                    <button className="p-3 hover:text-orange-600 transition-colors">
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center text-sm font-medium">1</span>
                                    <button className="p-3 hover:text-orange-600 transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4">
                            <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                                <ShoppingBag className="w-5 h-5" />
                                Add to Cart
                            </button>
                            <p className="text-xs text-center text-stone-500">
                                Free shipping on orders over 3 pints ($100).
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            <div className="flex gap-3">
                                <ShieldCheck className="w-5 h-5 text-stone-400 shrink-0" />
                                <div>
                                    <h4 className="text-sm font-medium text-stone-900">Premium Quality</h4>
                                    <p className="text-xs text-stone-500 mt-1">400GSM Heavyweight Cotton</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Truck className="w-5 h-5 text-stone-400 shrink-0" />
                                <div>
                                    <h4 className="text-sm font-medium text-stone-900">Fast Delivery</h4>
                                    <p className="text-xs text-stone-500 mt-1">Before the next round</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
