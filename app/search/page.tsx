'use client';

import { Suspense } from 'react';
import { SearchBar } from '@/app/search/components/search-bar';
import SearchResults from '@/app/search/components/search-results';

export default function SearchPage() {
  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Knowledge Base</h1>
        <Suspense fallback={<div className="h-12 w-full bg-muted/5 animate-pulse rounded-lg" />}>
          <SearchBar />
        </Suspense>
        <Suspense fallback={<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-muted/5 animate-pulse rounded-lg" />
          ))}
        </div>}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
} 