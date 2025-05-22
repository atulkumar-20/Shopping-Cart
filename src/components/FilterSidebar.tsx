'use client';
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface FilterSidebarProps {
  className?: string;
}

export const FilterSidebar = ({ className }: FilterSidebarProps) => {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  const categories = ['All', 'Electronics', 'Clothing', 'Home'];
  
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="bg-blue-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  className="w-4 h-4 text-blue-500 accent-white"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Price</h3>
          <div className="px-1">
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-4"
            />
            <div className="flex justify-between text-sm">
              <span>{priceRange[0]}</span>
              <span>{priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
