'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { searchArticles, type SearchResult } from '../utils/search';
import { articles, type Article } from '../data/articles';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query) {
      const searchResults = searchArticles(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  if (query && results.length === 0) {
    return <p className="mb-8 text-muted-foreground">No results found</p>;
  }

  if (query && results.length > 0) {
    return (
      <>
        <p className="mb-8 text-muted-foreground">
          Found {results.length} result{results.length === 1 ? '' : 's'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result) => (
            <Link
              key={result.slug}
              href={`/search/${result.slug}`}
              className="group relative bg-muted/5 border border-border/40 rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="aspect-video relative">
                <Image
                  src={result.image}
                  alt={result.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {result.title}
                </h3>
                {result.matchType === 'content' && result.matchText ? (
                  <p className="text-muted-foreground">{result.matchText}</p>
                ) : (
                  <p className="text-muted-foreground">{result.description}</p>
                )}
                <span className="text-xs text-primary mt-3 block">
                  Found in {result.matchType}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(articles).map(([slug, article]: [string, Article]) => (
        <Link
          key={slug}
          href={`/search/${slug}`}
          className="group relative bg-muted/5 border border-border/40 rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
        >
          <div className="aspect-video relative">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-muted-foreground">
              {article.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
