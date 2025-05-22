'use client';
import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';

interface FilterSidebarProps {
  className?: string;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceChange: (priceRange: number[]) => void;
}

export const FilterSidebar = ({ 
  className, 
  selectedCategory, 
  onCategoryChange, 
  priceRange, 
  onPriceChange 
}: FilterSidebarProps) => {
  const categories = ['All', 'Electronics', 'Clothing', 'Home', 'Shoes'];
  
  // Local state to handle slider changes before committing
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  
  // Update local state when props change
  useEffect(() => {
    setLocalPriceRange(priceRange);
  }, [priceRange]);
  
  // Handle slider change and commit after a delay
  const handlePriceChange = (newValue: number[]) => {
    setLocalPriceRange(newValue);
    
    // Debounce price changes to avoid too many URL updates
    const timeoutId = setTimeout(() => {
      onPriceChange(newValue);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  };
  
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
                  checked={selectedCategory === cat}
                  onChange={() => onCategoryChange(cat)}
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
              max={5000}
              step={100}
              value={localPriceRange}
              onValueChange={handlePriceChange}
              className="my-4"
            />
            <div className="flex justify-between text-sm">
              <span>${localPriceRange[0]}</span>
              <span>${localPriceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
