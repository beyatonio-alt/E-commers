import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowLeft, ShieldCheck, Leaf, Truck } from 'lucide-react';

const PRODUCTS = {
  '1': { name: 'The Onyx Tee', price: 55, color: 'Jet Black', desc: 'Our signature heavyweight organic cotton tee, designed for a structured silhouette and maximum durability.', images: ['/images/black-tee-1.jpg', '/images/black-tee-2.jpg', '/images/black-tee-3.jpg'] },
  '2': { name: 'The Ghost Tee', price: 45, color: 'Cream', desc: 'Breathable, soft-touch organic cotton that feels like a second skin. Perfect for layered urban looks.', images: ['/images/cream-tee-1.jpg', '/images/cream-tee-2.jpg', '/images/cream-tee-3.jpg'] },
  '3': { name: 'The Onyx Tee', price: 55, color: 'Jet Black', desc: 'Our signature heavyweight organic cotton tee, designed for a structured silhouette and maximum durability.', images: ['/images/black-tee-2.jpg', '/images/black-tee-1.jpg', '/images/black-tee-3.jpg'] },
  '4': { name: 'The Ghost Tee', price: 45, color: 'Cream', desc: 'Breathable, soft-touch organic cotton that feels like a second skin. Perfect for layered urban looks.', images: ['/images/cream-tee-2.jpg', '/images/cream-tee-1.jpg', '/images/cream-tee-3.jpg'] },
  '5': { name: 'The Onyx Tee', price: 55, color: 'Jet Black', desc: 'Our signature heavyweight organic cotton tee, designed for a structured silhouette and maximum durability.', images: ['/images/black-tee-3.jpg', '/images/black-tee-1.jpg', '/images/black-tee-2.jpg'] },
  '6': { name: 'The Ghost Tee', price: 45, color: 'Cream', desc: 'Breathable, soft-touch organic cotton that feels like a second skin. Perfect for layered urban looks.', images: ['/images/cream-tee-3.jpg', '/images/cream-tee-1.jpg', '/images/cream-tee-2.jpg'] },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS[params.id as keyof typeof PRODUCTS] || PRODUCTS['1'];

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

      <div className="px-6 py-8 md:px-12">
        <Link href="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-12 hover:text-brand-primary transition-colors">
          <ArrowLeft size={14} strokeWidth={1.5} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 space-y-8">
            {product.images.map((img, idx) => (
              <div key={idx} className="aspect-[3/4] bg-brand-neutral overflow-hidden relative">
                <img
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col justify-start sticky top-12 h-fit">
            <div className="mb-12">
              <h1 className="text-3xl font-medium tracking-tight text-brand-primary mb-2">
                {product.name}
              </h1>
              <p className="text-lg font-medium text-gray-500">
                ${product.price}.00 — {product.color}
              </p>
            </div>

            <p className="text-sm text-gray-600 mb-12 leading-relaxed tracking-wide max-w-md">
              {product.desc}
            </p>

            <div className="flex gap-4 mb-16">
              <button className="flex-1 border border-brand-primary py-4 text-xs uppercase tracking-widest font-medium hover:bg-brand-primary hover:text-brand-base transition-all">
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-brand-neutral">
              <div className="flex flex-col gap-2">
                <Leaf size={16} className="text-brand-accent" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Organic</span>
              </div>
              <div className="flex flex-col gap-2">
                <ShieldCheck size={16} className="text-brand-accent" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Ethical</span>
              </div>
              <div className="flex flex-col gap-2">
                <Truck size={16} className="text-brand-accent" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Fast Ship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
