import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-base">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-6 md:px-12">
        <div className="text-lg font-medium tracking-widest text-brand-primary">
          AMAQABA
        </div>
        <div className="flex gap-10 items-center">
          <Link href="/shop" className="text-xs uppercase tracking-widest hover:text-brand-accent transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-xs uppercase tracking-widest hover:text-brand-accent transition-colors">
            About
          </Link>
          <Link href="/cart" className="p-1 text-brand-primary">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-24 flex flex-col items-center text-center">
        <div className="max-w-2xl w-full">
          <h1 className="text-refined text-brand-primary mb-6">
            Refined Essentials
          </h1>
          <p className="max-w-lg mx-auto text-sm text-gray-500 mb-12 leading-relaxed tracking-wide">
            A study in minimalism. Timeless silhouettes crafted from
            sustainably sourced organic cotton for the modern wardrobe.
          </p>
          <Link
            href="/shop"
            className="inline-block border border-brand-primary px-10 py-3 text-xs uppercase tracking-widest hover:bg-brand-primary hover:text-brand-base transition-all"
          >
            Explore the Collection
          </Link>
        </div>

        <div className="mt-16 w-full max-w-6xl relative aspect-[21/9] overflow-hidden">
          <img
            src="/images/hero-banner.png"
            alt="AMAQABA Brand Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Brand Story Section - Adding the "Unqualified to Chosen" hook */}
      <section className="px-6 py-32 md:px-12 bg-brand-neutral/30 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">The Spirit of AmaQaba</h2>
          <p className="text-refined text-brand-primary mb-8 leading-tight">
            Unqualified by Man.<br />
            Qualified by God.
          </p>
          <p className="text-sm text-gray-600 mb-12 leading-relaxed max-w-xl mx-auto">
            We believe that what the world calls unqualified, God calls chosen.
            Our clothing is a declaration that your value is not determined by a certificate,
            status, or the opinion of others, but by your purpose.
          </p>
          <Link
            href="/about"
            className="text-xs uppercase tracking-widest font-bold underline underline-offset-8 hover:text-brand-accent transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Featured Section Preview */}
      <section className="px-6 py-24 md:px-12 border-t border-brand-neutral">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-2xl font-medium tracking-tight text-brand-primary">
            The Selection
          </h2>
          <Link href="/shop" className="text-xs uppercase tracking-widest underline underline-offset-4 hover:text-brand-accent">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-brand-neutral mb-6 overflow-hidden relative">
              <img
                src="/images/black-tee-1.jpg"
                alt="The Onyx Tee"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="text-left">
                <h3 className="text-sm font-medium text-brand-primary">The Onyx Tee</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Jet Black</p>
              </div>
              <span className="text-sm font-medium">$55.00</span>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-brand-neutral mb-6 overflow-hidden relative">
              <img
                src="/images/cream-tee-1.jpg"
                alt="The Ghost Tee"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="text-left">
                <h3 className="text-sm font-medium text-brand-primary">The Ghost Tee</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Cream</p>
              </div>
              <span className="text-sm font-medium">$45.00</span>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-brand-neutral mb-6 overflow-hidden relative">
              <img
                src="/images/lifestyle.jpg"
                alt="Lifestyle"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="text-left">
                <h3 className="text-sm font-medium text-brand-primary">The Collective</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Editorial</p>
              </div>
              <span className="text-sm font-medium">—</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
