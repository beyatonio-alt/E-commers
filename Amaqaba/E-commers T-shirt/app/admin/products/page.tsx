import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingCart, Package, Users, Plus, Edit2, Trash2 } from 'lucide-react';

const PRODUCTS = [
  { id: '1', name: 'The Core Tee', price: 45, color: 'Charcoal', stock: 120 },
  { id: '2', name: 'The Cloud Tee', price: 45, color: 'Sage', stock: 85 },
  { id: '3', name: 'The Onyx Tee', price: 55, color: 'Jet Black', stock: 40 },
  { id: '4', name: 'The Ghost Tee', price: 45, color: 'White', stock: 200 },
  { id: '5', name: 'The Moss Tee', price: 45, color: 'Deep Olive', stock: 60 },
  { id: '6', name: 'The Slate Tee', price: 45, color: 'Grey', stock: 110 },
];

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-brand-base flex">
      <div className="w-64 bg-brand-primary text-brand-base flex flex-col">
        <div className="p-8 text-xl font-extrabold tracking-tighter">
          AMAQABA ADMIN
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 p-3 hover:bg-brand-neutral/20 transition-colors font-medium">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 p-3 bg-brand-accent rounded-sm font-bold">
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

      <div className="flex-1 p-12 overflow-y-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tighter text-brand-primary uppercase">
            Inventory
          </h1>
          <button className="flex items-center gap-2 bg-brand-primary text-brand-base px-6 py-3 font-bold hover:bg-brand-accent transition-all">
            <Plus size={18} /> Add Product
          </button>
        </div>

        <div className="bg-brand-neutral/30 border border-brand-neutral overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-brand-neutral bg-brand-neutral/10">
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Product</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Color</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Price</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Stock</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-neutral">
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-brand-neutral/10 transition-colors">
                  <td className="p-4 font-bold text-brand-primary">{product.name}</td>
                  <td className="p-4 text-gray-600">{product.color}</td>
                  <td className="p-4 font-medium">${product.price}.00</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded-sm ${product.stock < 50 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end gap-3">
                    <button className="p-2 text-gray-400 hover:text-brand-primary transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
