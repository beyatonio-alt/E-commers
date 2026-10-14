import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingCart, Package, Users, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-brand-base flex">
      {/* Admin Sidebar */}
      <div className="w-64 bg-brand-primary text-brand-base flex flex-col">
        <div className="p-8 text-xl font-extrabold tracking-tighter">
          AMAQABA ADMIN
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 p-3 bg-brand-accent rounded-sm font-bold">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 p-3 hover:bg-brand-neutral/20 transition-colors font-medium">
            <Package size={18} /> Products
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 p-3 hover:bg-brand-neutral/20 transition-colors font-medium">
            <ShoppingCart size={18} /> Orders
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 p-3 hover:bg-brand-neutral/20 transition-colors font-medium">
            <Users size={18} /> Customers
          </Link>
        </nav>
        <div className="p-8 border-t border-brand-neutral/20">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
            View Storefront
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12 overflow-y-auto">
        <h1 className="text-4xl font-extrabold tracking-tighter text-brand-primary mb-12 uppercase">
          Business Overview
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 bg-brand-neutral/30 border border-brand-neutral">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Total Revenue</p>
              <TrendingUp size={18} className="text-brand-accent" />
            </div>
            <p className="text-3xl font-extrabold text-brand-primary">$12,450.00</p>
            <p className="text-xs text-green-600 font-bold mt-2">+12% from last month</p>
          </div>
          <div className="p-8 bg-brand-neutral/30 border border-brand-neutral">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Active Orders</p>
              <ShoppingCart size={18} className="text-brand-accent" />
            </div>
            <p className="text-3xl font-extrabold text-brand-primary">42</p>
            <p className="text-xs text-gray-400 mt-2">12 pending fulfillment</p>
          </div>
          <div className="p-8 bg-brand-neutral/30 border border-brand-neutral">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Customers</p>
              <Users size={18} className="text-brand-accent" />
            </div>
            <p className="text-3xl font-extrabold text-brand-primary">1,204</p>
            <p className="text-xs text-green-600 font-bold mt-2">+5% since yesterday</p>
          </div>
        </div>

        <div className="bg-brand-neutral/30 border border-brand-neutral p-8">
          <h2 className="text-xl font-bold text-brand-primary mb-6 uppercase">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-brand-neutral last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-primary text-brand-base rounded-full flex items-center justify-center text-xs font-bold">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-primary">Order #AMA-100{i}</p>
                    <p className="text-xs text-gray-500">Placed 2 hours ago</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-brand-primary">$85.00</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
