import { Suspense } from 'react';
import { ProductsContent } from '@/components/ProductsContent';

// Loading fallback component
function ProductsLoading() {
  return (
    <div className="pt-20 px-4 md:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}
