'use client';
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface FilterCategoryProps {
  className?: string;
}

export const FilterCategory = ({ className }: FilterCategoryProps) => {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Category</h2>

        <div className="mb-6">
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  className="w-4 h-4 text-blue-500"
                />
                <span className="text-gray-800">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2 text-gray-800">Price</h3>
          <div className="px-1">
            <div className="flex items-center">
              <span className="text-gray-800 mr-2">5000</span>
              <span className="text-gray-400">:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
