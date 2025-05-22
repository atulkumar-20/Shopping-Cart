import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { CartProvider } from '@/context/CartContext';

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
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with ❤️ by Atul Kumar</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
