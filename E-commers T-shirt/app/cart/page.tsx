import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const CART_ITEMS = [
  { id: '1', name: 'The Core Tee', price: 45, color: 'Charcoal', qty: 1 },
  { id: '3', name: 'The Onyx Tee', price: 55, color: 'Jet Black', qty: 2 },
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <main className="min-h-screen bg-brand-base">
      <nav className="flex justify-between items-center px-6 py-6 md:px-12">
        <Link href="/" className="text-lg font-medium tracking-widest text-brand-primary">
          AMAQABA
        </Link>
        <div className="p-1 text-brand-primary">
          <ShoppingBag size={20} strokeWidth={1.5} />
        </div>
      </nav>

      <div className="px-6 py-12 md:px-12">
        <h1 className="text-2xl font-medium tracking-tight text-brand-primary mb-16 uppercase">
          Shopping Bag
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="divide-y divide-brand-neutral">
              {CART_ITEMS.map((item) => (
                <div key={item.id} className="py-8 flex gap-6">
                  <div className="aspect-square w-20 bg-brand-neutral overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] text-gray-400 font-medium text-center">
                      [ Item Image ]
                    </div>
                  </div>
                  <div className="flex-1 flex justify-between">
                    <div className="text-left">
                      <h3 className="text-sm font-medium text-brand-primary">{item.name}</h3>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">{item.color}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Qty: {item.qty}</span>
                        <button className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-brand-primary transition-colors">Remove</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">${item.price * item.qty}.00</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-8 border border-brand-neutral sticky top-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-6">Summary</h2>
              <div className="flex justify-between mb-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Subtotal</span>
                <span className="text-sm font-medium">${subtotal}.00</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Shipping</span>
                <span className="text-sm font-medium">Free</span>
              </div>
              <div className="flex justify-between mb-10 pt-6 border-t border-brand-neutral">
                <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Total</span>
                <span className="text-sm font-extrabold text-brand-primary">${subtotal}.00</span>
              </div>
              <Link
                href="/checkout"
                className="flex items-center justify-center gap-3 bg-brand-primary text-brand-base w-full py-4 text-xs uppercase tracking-widest font-medium hover:bg-brand-accent transition-all"
              >
                Checkout <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
