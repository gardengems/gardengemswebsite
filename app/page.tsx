'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { getBasePath } from '@/lib/utils';
import { homeContent } from '@/content/pages/home';
import { Icon } from '@/components/icons';

export default function Home() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative h-[100vh] flex flex-col justify-center">
        <Image
          src={getBasePath(homeContent.hero.backgroundImage)}
          alt={homeContent.hero.title}
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDARUXFyAeIR4eIVFCLi4uUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {homeContent.hero.title}
            <span className="block text-xl md:text-2xl mt-2">
              {homeContent.hero.subtitle}
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            {homeContent.hero.description}
          </p>
          <a
            href={getBasePath(homeContent.hero.ctaButton.href)}
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors"
          >
            {homeContent.hero.ctaButton.text}
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-14 left-1/2 -translate-x-1/2 z-20 animate-bounce p-2 rounded-full bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${showScroll ? 'opacity-100' : 'opacity-0'}`}>
          <Icon name="chevronDown" className="w-8 h-8 text-white drop-shadow-lg" />
        </div>
      </section>

      <section className="py-24 bg-muted/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex flex-col items-center mb-8">
                <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
                <h2 className="text-4xl font-bold text-center mb-8">
                  {homeContent.solution.title}
                  <span className="block text-2xl text-muted-foreground mt-2">
                    {homeContent.solution.subtitle}
                  </span>
                </h2>
                <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
              </div>
              <p className="text-lg text-muted-foreground">
                {homeContent.solution.description}
              </p>
              <ul className="space-y-4">
                {homeContent.solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="checkmark" className="w-4 h-4 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a
                  href={getBasePath(homeContent.solution.ctaButton.href)}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium"
                >
                  {homeContent.solution.ctaButton.text}
                  <Icon name="chevronRight" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="relative aspect-square bg-muted/20 rounded-lg overflow-hidden">
              <Image 
                src={getBasePath(homeContent.solution.image.src)}
                alt={homeContent.solution.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col items-center mb-8">
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
            <h2 className="text-3xl font-bold text-center mb-8">
              {homeContent.benefits.title}
            </h2>
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {homeContent.benefits.items.map((item) => (
              <div key={item.title} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={item.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-8 bg-background">
        <div className="container">
          <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-lg overflow-hidden">
            <Image 
              src={getBasePath(homeContent.showcase.image.src)}
              alt={homeContent.showcase.image.alt}
              fill 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={90}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col items-center mb-8">
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
            <h2 className="text-3xl font-bold text-center mb-8">
              {homeContent.partners.title}
            </h2>
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          </div>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            {homeContent.partners.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {homeContent.partners.list.map((partner) => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 rounded-lg bg-muted/5 border border-border/40 hover:bg-muted/10 transition-colors"
              >
                <div className="w-full h-24 mb-6 relative">
                  <Image
                    src={getBasePath(partner.logo)}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">
              {homeContent.partners.footer.text}
            </p>
            <a
              href={getBasePath(homeContent.partners.footer.ctaButton.href)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium"
            >
              {homeContent.partners.footer.ctaButton.text}
              <Icon name="chevronRight" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
