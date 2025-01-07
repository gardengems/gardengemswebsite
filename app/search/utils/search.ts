import type { Article } from '@/app/search/data/articles';
import { articles } from '@/app/search/data/articles';

export interface SearchResult {
  slug: string;
  title: string;
  description: string;
  image: string;
  matchType: 'title' | 'description' | 'content';
  matchText?: string;
}

export function searchArticles(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  const results: SearchResult[] = [];
  const addedSlugs = new Set<string>();

  // Search through articles
  Object.entries(articles).forEach(([slug, article]: [string, Article]) => {
    if (addedSlugs.has(slug)) return;

    // Check title
    if (article.title.toLowerCase().includes(searchTerm)) {
      results.push({
        slug,
        title: article.title,
        description: article.description,
        image: article.image,
        matchType: 'title'
      });
      addedSlugs.add(slug);
      return;
    }

    // Check description
    if (article.description.toLowerCase().includes(searchTerm)) {
      results.push({
        slug,
        title: article.title,
        description: article.description,
        image: article.image,
        matchType: 'description'
      });
      addedSlugs.add(slug);
      return;
    }

    // Search in overview content
    for (const section of article.overview) {
      if (section.content.toLowerCase().includes(searchTerm)) {
        const matchContext = getMatchContext(section.content, searchTerm);
        results.push({
          slug,
          title: article.title,
          description: article.description,
          image: article.image,
          matchType: 'content',
          matchText: matchContext
        });
        addedSlugs.add(slug);
        return;
      }
    }
  });

  return results;
}

function getMatchContext(text: string, searchTerm: string): string {
  const lowerText = text.toLowerCase();
  const index = lowerText.indexOf(searchTerm);
  if (index === -1) return '';

  const contextLength = 100;
  const start = Math.max(0, index - contextLength / 2);
  const end = Math.min(text.length, index + searchTerm.length + contextLength / 2);
  
  let context = text.slice(start, end);
  if (start > 0) context = '...' + context;
  if (end < text.length) context = context + '...';
  
  return context;
} 