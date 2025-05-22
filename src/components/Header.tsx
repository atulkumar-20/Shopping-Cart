'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
import { useState } from 'react';
import { Cart } from '@/components/Cart';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-blue-500 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={'/'}>
          <span className="font-bold text-lg text-white">BuyMe</span>
        </Link>

        {/* Search bar - hidden on mobile, visible on md screens and up */}
        <div className="hidden md:block relative mx-auto">
          <div className="flex items-center border rounded-md px-3 py-1 bg-white">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-64"
            />
            <Search size={18} className="text-gray-500" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Cart />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu size={24} />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-blue-600">
          <div className="flex items-center border rounded-md px-3 py-1 bg-white mb-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full"
            />
            <Search size={18} className="text-gray-500" />
          </div>
        </div>
      )}
    </header>
  );
};
