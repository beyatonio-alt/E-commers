import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Lock } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-brand-base">
      <nav className="flex justify-between items-center px-6 py-6 md:px-12">
        <Link href="/" className="text-lg font-medium tracking-widest text-brand-primary">
          AMAQABA
        </Link>
      </nav>

      <div className="px-6 py-12 md:px-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-medium tracking-tight text-brand-primary mb-16 uppercase">
          Checkout
        </h1>

        <form className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">First Name</label>
              <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Last Name</label>
              <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Shipping Address</label>
            <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm" placeholder="Street Address" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">City</label>
              <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm" placeholder="New York" />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Country</label>
              <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm" placeholder="USA" />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Zip Code</label>
              <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm" placeholder="10001" />
            </div>
          </div>

          <div className="pt-16 border-t border-brand-neutral">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-12">Payment</h2>
            <div className="space-y-12">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Card Number</label>
                <div className="relative">
                  <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm pl-10" placeholder="0000 0000 0000 0000" />
                  <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" strokeWidth={1.5} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Expiry Date</label>
                  <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">CVC</label>
                  <input type="text" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-primary outline-none transition-colors text-sm" placeholder="123" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16">
            <button className="w-full bg-brand-primary text-brand-base py-5 text-xs uppercase tracking-widest font-medium hover:bg-brand-accent transition-all">
              Complete Order
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-widest">
              Secure encrypted payment
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
