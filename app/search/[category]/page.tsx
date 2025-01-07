import Image from 'next/image';
import { Suspense } from 'react';
import { Breadcrumbs } from '../components/breadcrumbs';
import { SearchBar } from '../components/search-bar';
import { articles } from '../data/articles';

export async function generateStaticParams() {
  return [
    { category: 'growlink-portal' },
    { category: 'hvac-control' },
    { category: 'lumatek-lighting' },
    { category: 'fertigation-skid' },
    { category: 'power-distribution' },
    { category: 'door-control' },
    { category: 'security-cameras' }
  ];
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { category } = await params;
  const article = articles[category];

  if (!article) {
    return (
      <div className="container py-24">
        <h1 className="text-4xl font-bold mb-6">Article Not Found</h1>
        <p>The requested article could not be found.</p>
      </div>
    );
  }

  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <Suspense fallback={<div className="h-12 w-full bg-muted/5 animate-pulse rounded-lg" />}>
          <SearchBar />
        </Suspense>
        
        <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{article.description}</p>
        
        <div className="relative aspect-video mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
          {article.overview.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-medium mb-3">{section.title}</h3>
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Video Guide</h2>
          <div className="relative aspect-video mb-4">
            <iframe
              src={article.video.url}
              title={article.video.title}
              className="absolute inset-0 w-full h-full rounded-lg"
              allowFullScreen
            />
          </div>
          <h3 className="text-xl font-medium mb-2">{article.video.title}</h3>
          <p className="text-muted-foreground">{article.video.description}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">External Links</h2>
          <div className="grid gap-6">
            {article.externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-muted/5 border border-border/40 rounded-lg hover:border-primary/40 transition-colors"
              >
                <h3 className="text-xl font-medium mb-2">{link.title}</h3>
                <p className="text-muted-foreground">{link.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 