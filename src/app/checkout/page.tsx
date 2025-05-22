import { Suspense } from 'react';
import { CheckoutContent } from '@/components/CheckoutContent';

// Loading fallback component
function CheckoutLoading() {
  return (
    <div className="pt-24 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="text-xl">Loading checkout...</div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  );
}
