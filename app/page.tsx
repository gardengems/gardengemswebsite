'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

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

  const partners = [
    {
      name: "Lumatek",
      description: "Advanced LED lighting solutions",
      logo: "/partners/lumatek.png",
      url: "https://lumatek-lighting.com/"
    },
    {
      name: "Growlink",
      description: "Smart growing automation",
      logo: "/partners/growlink.png",
      url: "https://www.growlink.ag/"
    },
    {
      name: "Control Union",
      description: "International certification",
      logo: "/partners/controlunion.png",
      url: "https://www.controlunion.com/"
    }
  ];

  return (
    <>
      <section className="relative h-[100vh] flex flex-col justify-center">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Drop N Grow Container"
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
            Drop N Grow
            <span className="block text-xl md:text-2xl mt-2">
              The Future of Container Growing
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Revolutionary all-in-one container solution for professional growing operations
          </p>
          <a
            href="/drop-n-grow"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors"
          >
            Discover Drop N Grow
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-14 left-1/2 -translate-x-1/2 z-20 animate-bounce p-2 rounded-full bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${showScroll ? 'opacity-100' : 'opacity-0'}`}>
          <svg
            className="w-8 h-8 text-white drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      <section className="py-24 bg-muted/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                All-In-One Solution
                <span className="block text-2xl text-muted-foreground mt-2">
                  Smart Container Technology
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Advanced container technology designed for optimal plant growth and efficiency. Our innovative solution combines durability with smart design features for professional growing operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Advanced irrigation system</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Efficient nutrient delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Smart monitoring capabilities</span>
                </li>
              </ul>
              <div className="pt-4">
                <a
                  href="/drop-n-grow"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium"
                >
                  Learn more about Drop N Grow
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative aspect-square bg-muted/20 rounded-lg overflow-hidden">
              <Image 
                src="/images/container/container-interior.jpg"
                alt="Drop N Grow Container Interior"
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
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Drop N Grow?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Smart Technology</h3>
              <p className="text-muted-foreground">
                Integrated monitoring and control systems for optimal growing conditions
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Efficient Design</h3>
              <p className="text-muted-foreground">
                Optimized for commercial growing with space-saving features
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Expert Support</h3>
              <p className="text-muted-foreground">
                Comprehensive training and ongoing technical assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden">
            <Image 
              src="/images/expo/expo-container-replica.jpg"
              alt="Drop N Grow Container Display"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Partners & Certifications
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            We collaborate with industry leaders to ensure the highest quality standards in our products
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {partners.map((partner) => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 rounded-lg bg-muted/5 border border-border/40 hover:bg-muted/10 transition-colors"
              >
                <div className="w-full h-24 mb-6 relative">
                  <Image
                    src={partner.logo}
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
              Our partnerships and certifications ensure that you receive the highest quality products and support
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium"
            >
              Learn more about our quality standards
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
