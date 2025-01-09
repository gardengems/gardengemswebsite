import { ExpoSlideshow } from '@/components/ExpoSlideshow';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export default function AboutPage() {
  return (
    <div className="container py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Garden Gems</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We are pioneering the future of container growing technology with our innovative Drop N Grow solution.
        </p>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <Image 
            src={getAssetPath("/images/container/container-interior.jpg")}
            alt="Garden Gems Container Interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
        <p className="text-muted-foreground">
          To revolutionize the growing industry through innovative container solutions that combine smart technology with sustainable practices, enabling our customers to achieve optimal results while maintaining environmental responsibility.
        </p>
      </div>

      {/* Company Values */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Innovation Excellence</h3>
              <p className="text-muted-foreground">
                Continuously pushing boundaries to create solutions that define the future of growing technology.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                Committed to environmentally responsible practices in our products and operations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Success</h3>
              <p className="text-muted-foreground">
                Dedicated to building lasting partnerships and ensuring our customers&apos; growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expo Photos */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <ExpoSlideshow />
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Growing Operation?</h2>
          <p className="mb-8 opacity-90">
            Discover how our innovative Drop N Grow solution can help you achieve unprecedented results.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/drop-n-grow"
              className="inline-block bg-white text-primary hover:bg-white/90 px-6 py-2 rounded-md transition-colors"
            >
              Explore Drop N Grow
            </a>
            <a
              href="/contact"
              className="inline-block bg-primary/20 hover:bg-primary/30 text-white px-6 py-2 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 