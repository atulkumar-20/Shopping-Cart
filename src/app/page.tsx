'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Filter, Search } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const Page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const urlSearchParams = useSearchParams();

  const initialCategory = urlSearchParams.get('category') || 'All';
  const initialPriceRange = urlSearchParams
    .get('price')
    ?.split('-')
    .map(Number) || [0, 5000];
  const initialSearchQuery = urlSearchParams.get('search') || '';

  const [showFilters, setShowFilters] = useState(false);
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState<number[]>(initialPriceRange);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [localSearchQuery, setLocalSearchQuery] = useState(initialSearchQuery);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === 'All' || product.category === category;

    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    const query = localSearchQuery.toLowerCase().trim();

    const nameMatch = product.name.toLowerCase().includes(query);
    const descMatch = product.description.toLowerCase().includes(query);
    const catMatch = product.category.toLowerCase().includes(query);

    const searchMatch = query === '' || nameMatch || descMatch || catMatch;

    return categoryMatch && priceMatch && searchMatch;
  });

  useEffect(() => {
    const updateURL = () => {
      const params = new URLSearchParams();

      if (category !== 'All') {
        params.set('category', category);
      }

      if (priceRange[0] !== 0 || priceRange[1] !== 5000) {
        params.set('price', `${priceRange[0]}-${priceRange[1]}`);
      }

      if (searchQuery.trim()) {
        params.set('search', searchQuery.trim());
      }

      const queryString = params.toString();
      const url = queryString ? `/?${queryString}` : '/';

      router.push(url, { scroll: false });
    };

    const timeoutId = setTimeout(updateURL, 500);
    return () => clearTimeout(timeoutId);
  }, [category, priceRange, searchQuery, router]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(localSearchQuery);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [localSearchQuery]);

  useEffect(() => {
    setLocalSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  const handleSearch = (query: string) => {
    setLocalSearchQuery(query);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const handlePriceChange = (newPriceRange: number[]) => {
    setPriceRange(newPriceRange);
  };

  return (
    <div className="pt-20 px-4 md:px-6 lg:px-8">
      {/* Search bar for mobile */}
      <div className="mb-6 md:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={localSearchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full p-2 pl-10 border rounded-md"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      {/* Filter button row */}
      <div className="mb-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-start">
          {/* Empty space or could add breadcrumbs here */}
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <h1 className="text-2xl font-bold">Product Listing</h1>
        </div>
        <div className="w-full md:w-1/3 flex justify-end mt-4 md:mt-0">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Filter size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-4">
          {showFilters && (
            <FilterSidebar
              className="sticky top-24"
              selectedCategory={category}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceChange={handlePriceChange}
            />
          )}
        </div>

        <main className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold mb-4">No products found</h2>
              <p className="text-gray-500 mb-4">
                Try adjusting your filters or search query to find what you're
                looking for.
              </p>
              <Button
                onClick={() => {
                  setCategory('All');
                  setPriceRange([0, 5000]);
                  setLocalSearchQuery('');
                  setSearchQuery('');
                }}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;
