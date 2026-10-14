import React from 'react';
import Link from 'next/link';
import { ShoppingBag, User, Package, LogOut } from 'lucide-react';

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-brand-base">
      <nav className="flex justify-between items-center px-6 py-8 md:px-12">
        <Link href="/" className="text-xl font-extrabold tracking-tighter text-brand-primary">
          AMAQABA
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/cart" className="p-2 rounded-full bg-brand-primary text-brand-base">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </nav>

      <div className="px-6 py-12 md:px-12 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-extrabold tracking-tighter text-brand-primary uppercase">
            My Account
          </h1>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-red-500 transition-colors">
            <LogOut size={16} /> Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 space-y-2">
            <Link href="/account" className="flex items-center gap-3 p-3 bg-brand-primary text-brand-base font-bold">
              <User size={18} /> Profile
            </Link>
            <Link href="/account/orders" className="flex items-center gap-3 p-3 text-gray-500 hover:text-brand-primary font-medium transition-colors">
              <Package size={18} /> Orders
            </Link>
          </div>

          <div className="lg:col-span-3 space-y-12">
            <div className="p-8 bg-brand-neutral/20 border border-brand-neutral">
              <h2 className="text-xl font-bold text-brand-primary mb-6 uppercase">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</p>
                  <p className="text-lg font-medium text-brand-primary">John Doe</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</p>
                  <p className="text-lg font-medium text-brand-primary">john@example.com</p>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Address</p>
                  <p className="text-lg font-medium text-brand-primary">123 Urban St, New York, NY 10001</p>
                </div>
              </div>
              <button className="mt-8 text-sm font-bold underline underline-offset-4 text-brand-accent hover:text-brand-primary">
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
