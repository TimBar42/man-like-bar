"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, CreditCard, Wallet } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-stone-200 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link
                            href="/"
                            className="text-lg tracking-tighter font-bold uppercase mb-4 block"
                        >
                            MAN LIKE BAR.
                        </Link>
                        <p className="text-stone-500 text-sm max-w-xs mb-6">
                            Fashion for the socially lubricated. Designed in London, worn
                            worldwide.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="text-stone-400 hover:text-stone-900 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-stone-400 hover:text-stone-900 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-stone-400 hover:text-stone-900 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium text-stone-900 mb-4 text-sm">Shop</h4>
                        <ul className="space-y-3 text-sm text-stone-500">
                            <li>
                                <Link
                                    href="/collection/all"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#new"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/collection/best-sellers"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Best Sellers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/collection/sale"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Sale
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-stone-900 mb-4 text-sm">Support</h4>
                        <ul className="space-y-3 text-sm text-stone-500">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Track Order
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Size Guide
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-stone-900 mb-4 text-sm">Legal</h4>
                        <ul className="space-y-3 text-sm text-stone-500">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
                    <p>© 2023 Man Like Bar Ltd. Please drink (and dress) responsibly.</p>
                    <div className="flex gap-4 items-center">
                        <CreditCard className="w-6 h-6" />
                        <Wallet className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
