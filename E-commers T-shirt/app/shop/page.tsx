import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const PRODUCTS = [
  { id: '1', name: 'The Onyx Tee', price: 55, color: 'Jet Black', img: '/images/black-tee-1.jpg' },
  { id: '2', name: 'The Ghost Tee', price: 45, color: 'Cream', img: '/images/cream-tee-1.jpg' },
  { id: '3', name: 'The Onyx Tee (Alt)', price: 55, color: 'Jet Black', img: '/images/black-tee-2.jpg' },
  { id: '4', name: 'The Ghost Tee (Alt)', price: 45, color: 'Cream', img: '/images/cream-tee-2.jpg' },
  { id: '5', name: 'The Onyx Tee (Fit)', price: 55, color: 'Jet Black', img: '/images/black-tee-3.jpg' },
  { id: '6', name: 'The Ghost Tee (Fit)', price: 45, color: 'Cream', img: '/images/cream-tee-3.jpg' },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-brand-base">
      <nav className="flex justify-between items-center px-6 py-6 md:px-12">
        <Link href="/" className="text-lg font-medium tracking-widest text-brand-primary">
          AMAQABA
        </Link>
        <div className="flex gap-10 items-center">
          <Link href="/cart" className="p-1 text-brand-primary">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </nav>

      <div className="px-6 py-12 md:px-12">
        <div className="flex items-center gap-6 mb-20">
          <Link href="/" className="p-2 hover:bg-brand-neutral transition-colors rounded-full">
            <ArrowLeft size={18} strokeWidth={1.5} />
          </Link>
          <h1 className="text-2xl font-medium tracking-tight text-brand-primary uppercase">
            All Threads
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-brand-neutral mb-6 overflow-hidden relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div className="text-left">
                  <h3 className="text-sm font-medium text-brand-primary">{product.name}</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{product.color}</p>
                </div>
                <span className="text-sm font-medium">${product.price}.00</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
