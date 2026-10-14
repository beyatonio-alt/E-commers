import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-base">
      <nav className="flex justify-between items-center px-6 py-6 md:px-12">
        <Link href="/" className="text-lg font-medium tracking-widest text-brand-primary">
          AMAQABA
        </Link>
        <div className="flex gap-10 items-center">
          <Link href="/shop" className="text-xs uppercase tracking-widest hover:text-brand-accent transition-colors">
            Shop
          </Link>
          <Link href="/cart" className="p-1 text-brand-primary">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        {/* Hero: Cinematic Entrance */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/lifestyle.jpg"
              alt="AMAQABA Lifestyle"
              className="w-full h-full object-cover opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-base via-transparent to-brand-base" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-refined text-brand-primary mb-6 leading-tight">
              From Unqualified<br />to Chosen.
            </h1>
            <div className="w-12 h-px bg-brand-primary mx-auto" />
          </div>
        </section>

        {/* The Origin: Storytelling Grid */}
        <section className="px-6 py-24 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[3/4] bg-brand-neutral overflow-hidden">
            <img
              src="/images/black-tee-1.jpg"
              alt="The Onyx Tee"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-sm border border-brand-neutral">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">The Ethos</p>
              <p className="text-sm text-gray-600 italic">"Defined by faith, not by credentials."</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium tracking-tight text-brand-primary">The Meaning of AmaQaba</h2>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                AMAQABA is more than a name; it is a testament. In the vernacular of the overlooked,
                the word carries the weight of those seen as inexperienced, uneducated, or without
                the markers of success society demands.
              </p>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                We challenge the world's definition of qualification. We believe that a missing
                certificate is not a missing purpose, and being overlooked is not being forgotten.
                To start with little is not a sentence to finish with little.
              </p>
            </div>

            <div className="p-8 bg-brand-neutral/30 border-l-4 border-brand-primary">
              <p className="text-lg font-medium text-brand-primary italic leading-relaxed">
                "What the world dismisses as unqualified, God identifies as chosen."
              </p>
            </div>
          </div>
        </section>

        {/* The Truth: Full-width Atmospheric Section */}
        <section className="relative py-32 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/black-tee-2.jpg"
              alt="Details"
              className="w-full h-full object-cover scale-110 brightness-50"
            />
          </div>

          <div className="relative z-10 px-6 text-center max-w-3xl mx-auto space-y-12">
            <h2 className="text-2xl font-medium tracking-wide uppercase">The Scriptural Truth</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Throughout history, the extraordinary has always been achieved through the ordinary.
              Moses doubted his voice. David was the forgotten son. The disciples were simple men.
              Yet, they were the ones called to shift the course of eternity.
            </p>
            <div className="pt-12">
              <p className="text-xl font-medium italic leading-relaxed mb-4">
                “Not that we are competent in ourselves to claim anything for ourselves, but our competence comes from God.”
              </p>
              <p className="text-xs uppercase tracking-widest opacity-60">— 2 Corinthians 3:5</p>
            </div>
          </div>
        </section>

        {/* The Declaration: High Contrast */}
        <section className="px-6 py-32 md:px-12 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">A Bold Declaration</h3>
            <p className="text-3xl font-medium text-brand-primary leading-tight tracking-tight">
              I may be unqualified in the eyes of man, <br />
              <span className="text-brand-accent">but I am not disqualified from God's purpose.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-12 bg-brand-neutral/30 flex flex-col justify-center space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary">Our Mission</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                To create clothing that serves as a catalyst for identity. We inspire individuals
                to embrace their divine calling, walk boldly in faith, and shatter the limitations
                imposed by their circumstances.
              </p>
            </div>
            <div className="p-12 bg-brand-neutral/30 flex flex-col justify-center space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary">Our Vision</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                To establish a faith-driven African streetwear legacy that amplifies the voices
                of the underestimated—the unconventional souls who refuse to let the world's
                narrow definitions dictate their future.
              </p>
            </div>
          </div>
        </section>

        {/* Final Message: Minimalist Close */}
        <section className="px-6 py-32 text-center border-t border-brand-neutral">
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">The Message</h2>
              <div className="text-4xl font-medium text-brand-primary tracking-tighter uppercase leading-tight">
                Unqualified by man.<br />
                Qualified by God.
              </div>
            </div>

            <div className="relative inline-block group">
              <div className="absolute -inset-4 bg-brand-neutral opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-8">
                <p className="text-xs text-gray-500 uppercase tracking-widest italic">
                  For those who have been told:
                </p>
                <ul className="text-sm space-y-4 text-gray-600 italic font-light">
                  <li>"You're not good enough."</li>
                  <li>"You lack the experience."</li>
                  <li>"You don't have the right qualifications."</li>
                  <li>"You won't make it."</li>
                </ul>
                <p className="text-xl font-medium text-brand-primary pt-8 italic">
                  Watch what God can do with what you have.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
