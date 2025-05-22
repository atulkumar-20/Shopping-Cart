import { Suspense } from 'react';
import { CartContent } from '@/components/CartContent';

// Loading fallback component
function CartLoading() {
  return (
    <div className="pt-24 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="text-xl">Loading cart...</div>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<CartLoading />}>
      <CartContent />
    </Suspense>
  );
}
