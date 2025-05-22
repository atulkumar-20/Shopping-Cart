import { Suspense } from 'react';
import { NotFoundContent } from '@/components/NotFoundContent';

// Loading fallback component
function NotFoundLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="text-xl">Loading...</div>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<NotFoundLoading />}>
      <NotFoundContent />
    </Suspense>
  );
}