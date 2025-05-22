'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FilterSidebar } from '@/components/FilterSidebar';
import { FilterCategory } from '@/components/FilterCategory';
import { Filter } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const Page = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="pt-20 px-4 md:px-6 lg:px-8">
      {/* Filter & Category buttons in same row */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex gap-2">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Filter size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
          <Button
            onClick={() => setShowCategory(!showCategory)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Filter size={18} />
            {showCategory ? 'Hide Category' : 'Show Category'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-4">
          {showFilters && (
            <FilterSidebar className="sticky top-24" />
          )}
          
          {showCategory && (
            <FilterCategory className="bg-white shadow-md rounded-lg" />
          )}
        </div>

        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
