import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-brand-base flex flex-col">
      <nav className="flex justify-between items-center px-6 py-8 md:px-12">
        <Link href="/" className="text-xl font-extrabold tracking-tighter text-brand-primary">
          AMAQABA
        </Link>
        <div className="p-2 rounded-full bg-brand-primary text-brand-base">
          <ShoppingBag size={20} />
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-extrabold tracking-tighter text-brand-primary mb-4 uppercase">
            Login
          </h1>
          <p className="text-gray-500 mb-10">Welcome back to the collective.</p>

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
              <input type="email" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-accent outline-none transition-colors" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Password</label>
              <input type="password" className="w-full p-4 bg-transparent border-b border-brand-neutral focus:border-brand-accent outline-none transition-colors" placeholder="••••••••" />
            </div>
            <button className="w-full bg-brand-primary text-brand-base py-4 font-bold hover:bg-brand-accent transition-all uppercase tracking-wide">
              Sign In
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account? <Link href="/signup" className="font-bold text-brand-primary hover:text-brand-accent underline underline-offset-4">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
