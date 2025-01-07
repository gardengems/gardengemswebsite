'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { searchArticles, type SearchResult } from '../utils/search';

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.trim()) {
        const searchResults = searchArticles(searchQuery);
        setResults(searchResults);
        setIsSearching(true);
      } else {
        setResults([]);
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearching(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for guides and tutorials..."
          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          aria-label="Search"
        >
          <svg
            className="w-5 h-5 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>

      {/* Search Results Dropdown */}
      {isSearching && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-lg shadow-lg max-h-96 overflow-auto">
          {results.map((result, index) => (
            <button
              key={`${result.slug}-${index}`}
              onClick={() => {
                router.push(`/search/${result.slug}`);
                setIsSearching(false);
                setSearchQuery('');
              }}
              className="w-full text-left px-4 py-3 hover:bg-accent/50 border-b border-border/50 last:border-0"
            >
              <h4 className="font-medium mb-1">{result.title}</h4>
              {result.matchType === 'content' && result.matchText ? (
                <p className="text-sm text-muted-foreground">{result.matchText}</p>
              ) : (
                <p className="text-sm text-muted-foreground">{result.description}</p>
              )}
              <span className="text-xs text-primary mt-1 block">
                Found in {result.matchType}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 