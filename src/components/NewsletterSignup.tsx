"use client";

import { Mail } from "lucide-react";

export function NewsletterSignup() {
    return (
        <section className="bg-stone-900 text-white py-20 px-6">
            <div className="max-w-xl mx-auto text-center">
                <Mail
                    className="mx-auto mb-6 text-stone-500 w-8 h-8"
                    strokeWidth={1}
                />
                <h2 className="text-3xl font-medium tracking-tight mb-4">
                    Join the Pub Quiz
                </h2>
                <p className="text-stone-400 mb-8 font-light">
                    Sign up for early access to drops, exclusive discounts, and terrible
                    jokes.
                </p>

                <form
                    className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-stone-800 border border-stone-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm placeholder-stone-500"
                    />
                    <button
                        type="submit"
                        className="bg-white text-stone-900 px-6 py-3 rounded-lg font-medium text-sm hover:bg-stone-200 transition-colors cursor-pointer"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-[10px] text-stone-600 mt-4">
                    No spam, only beer money requests. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
}
