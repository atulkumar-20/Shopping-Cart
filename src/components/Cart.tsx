'use client';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const Cart = () => {
  const { totalItems } = useCart();
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="lg"
      aria-label="Shopping cart"
      className="text-white relative"
      onClick={() => router.push('/cart')}
    >
      <ShoppingBag size={24} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
};
