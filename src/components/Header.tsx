'use client';
import Link from 'next/link';
import { Cart } from '@/components/Cart';

export function Header() {
  return (
    <header className="bg-blue-600 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          E-Shop
        </Link>
        <Cart />
      </div>
    </header>
  );
}
