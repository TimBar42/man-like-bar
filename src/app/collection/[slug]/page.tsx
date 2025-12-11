import { MainNav } from "@/components/Navigation/MainNav";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/placeholder-data";
import { Filter } from "lucide-react";

export default async function CollectionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Simple filter logic for demo
    const filteredProducts = slug === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === slug || p.slug === slug); // loosely matching for demo

    const title = slug === 'all' ? 'All Products' : slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <main className="min-h-screen bg-stone-50 flex flex-col">
            <MainNav />

            <div className="max-w-7xl mx-auto px-6 py-12 w-full flex-1">

                <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b border-stone-200 pb-4">
                    <h1 className="text-3xl font-medium tracking-tight text-stone-900">{title}</h1>
                    <div className="flex items-center gap-2 text-sm text-stone-500 cursor-pointer hover:text-stone-900">
                        <Filter className="w-4 h-4" />
                        <span>Filter & Sort</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar - Hidden on mobile for simplicity in this demo */}
                    <div className="hidden lg:block space-y-8">
                        <div>
                            <h3 className="font-medium text-stone-900 mb-4">Category</h3>
                            <ul className="space-y-2 text-sm text-stone-500">
                                <li className="text-stone-900 font-medium">All Products</li>
                                <li className="hover:text-orange-600 cursor-pointer">Tees</li>
                                <li className="hover:text-orange-600 cursor-pointer">Hoodies</li>
                                <li className="hover:text-orange-600 cursor-pointer">Accessories</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-stone-900 mb-4">Size</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {['S', 'M', 'L', 'XL', '2XL'].map(size => (
                                    <button key={size} className="border border-stone-200 rounded py-2 text-sm hover:border-stone-900 transition-colors">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="lg:col-span-3">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center text-stone-500">
                                No products found in this collection.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
