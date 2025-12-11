"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export function MainNav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-stone-200/60"
                    : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Mobile Menu Trigger */}
                <button className="md:hidden p-2 hover:bg-stone-100 rounded-md transition-colors text-stone-600">
                    <Menu className="w-6 h-6" strokeWidth={1.5} />
                </button>

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl tracking-tighter font-semibold uppercase flex items-center gap-2"
                >
                    MAN LIKE BAR<span className="text-orange-600">.</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
                    <Link href="/#new" className="hover:text-stone-900 transition-colors">
                        New Drops
                    </Link>
                    <Link href="/collection/tees" className="hover:text-stone-900 transition-colors">
                        Tees
                    </Link>
                    <Link
                        href="/collection/hoodies"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Hoodies
                    </Link>
                    <Link
                        href="/collection/accessories"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Barware
                    </Link>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button className="p-1 hover:text-orange-600 transition-colors">
                        <Search className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button className="p-1 hover:text-orange-600 transition-colors relative group">
                        <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-orange-600 text-[8px] text-white">
                            2
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
