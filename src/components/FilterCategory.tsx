'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FilterCategoryProps {
  className?: string;
}

export const FilterCategory = ({ className }: FilterCategoryProps) => {
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState(5000);

  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  const increasePrice = () => {
    setPrice(prev => prev + 100);
  };

  const decreasePrice = () => {
    setPrice(prev => Math.max(0, prev - 100));
  };

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
          <div className="flex items-center">
            <div className="relative flex items-center border rounded-md">
              <button 
                onClick={decreasePrice}
                className="px-2 py-1 text-gray-500 hover:text-gray-700"
                aria-label="Decrease price"
              >
                <Minus size={16} />
              </button>
              
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-gray-800"
              />
              
              <button 
                onClick={increasePrice}
                className="px-2 py-1 text-gray-500 hover:text-gray-700"
                aria-label="Increase price"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
