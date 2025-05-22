import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { CartProvider } from '@/context/CartContext';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ShoppingCart',
  description: 'Shop whatever you want',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-[#002855] text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Filters Column */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="hover:underline">All</Link></li>
                    <li><Link href="/?category=Electronics" className="hover:underline">Electronics</Link></li>
                  </ul>
                </div>
                
                {/* About Us Column */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">About Us</h3>
                  <ul className="space-y-2">
                    <li><Link href="/about" className="hover:underline">About Us</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                  </ul>
                </div>
                
                {/* Follow Us Column */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="https://facebook.com" className="hover:text-blue-400">
                      <Facebook size={24} />
                    </Link>
                    <Link href="https://twitter.com" className="hover:text-blue-400">
                      <Twitter size={24} />
                    </Link>
                    <Link href="https://instagram.com" className="hover:text-blue-400">
                      <Instagram size={24} />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Copyright */}
              <div className="mt-8 pt-4 border-t border-blue-800">
                <p>© 2025 BuyMe</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
