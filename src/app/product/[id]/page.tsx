import { Suspense } from 'react';
import { ProductDetailContent } from '@/components/ProductDetailContent';

// Loading fallback component
function ProductLoading() {
  return (
    <div className="pt-24 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex justify-center">
        <div className="text-xl">Loading product...</div>
      </div>
    </div>
  );
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductDetailContent params={params} />
    </Suspense>
  );
}
