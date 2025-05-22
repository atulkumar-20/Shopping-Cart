'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Cart } from '@/components/Cart';

export const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Update searchQuery when URL search param changes
  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      // Navigate directly to the home page with the search query
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      // If search is empty, remove search param from URL
      router.push('/');
    }
    
    // Close mobile menu after search
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-blue-500 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={'/'}>
          <span className="font-bold text-lg text-white">BuyMe</span>
        </Link>

        {/* Search bar - hidden on mobile, visible on md screens and up */}
        <div className="hidden md:block relative mx-auto">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="flex items-center border rounded-md px-3 py-1 bg-white">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-64"
              />
              <button type="submit" className="text-gray-500">
                <Search size={18} />
              </button>
            </div>
          </form>
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
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="flex items-center border rounded-md px-3 py-1 bg-white w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
              <button type="submit" className="text-gray-500">
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};
