import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProviderWrapper } from '@/components/CartProviderWrapper';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'A modern e-commerce store built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Suspense fallback={<div>Loading...</div>}>
          <CartProviderWrapper>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </CartProviderWrapper>
        </Suspense>
      </body>
    </html>
  );
}
