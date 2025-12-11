"use client";

import { MainNav } from "@/components/Navigation/MainNav";
import { Hero } from "@/components/Home/Hero";
import { SocialProof } from "@/components/Home/SocialProof";
import { FeaturedCollection } from "@/components/Home/FeaturedCollection";
import { Lifestyle } from "@/components/Home/Lifestyle";
import { Categories } from "@/components/Home/Categories";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      {/* Promo Bar */}
      <div className="bg-stone-900 text-stone-50 text-xs text-center py-2 font-medium tracking-wide">
        FREE SHIPPING ON ORDERS OVER 3 PINTS (OR $100)
      </div>

      <MainNav />

      <Hero />
      <SocialProof />
      <FeaturedCollection />
      <Lifestyle />
      <Categories />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
