import { ExpoSlideshow } from '@/components/ExpoSlideshow';
import Image from 'next/image';
import { getBasePath } from '@/lib/utils';
import { aboutContent } from '@/content/pages/about';
import { Icon } from '@/components/icons';

export default function AboutPage() {
  return (
    <>
      <section className="h-[calc(100vh-4rem)] flex items-start pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
              <h1 className="text-4xl font-bold mb-6">
                {aboutContent.hero.title}
                <span className="block text-2xl text-muted-foreground mt-2">
                  {aboutContent.hero.subtitle}
                </span>
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {aboutContent.hero.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
              <Image 
                src={getBasePath(aboutContent.heroImage.src)}
                alt={aboutContent.heroImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDARUXFyAeIR4eIVFCLi4uUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Mission */}
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto mb-24">
            <div className="flex flex-col items-center mb-8">
              <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
              <h2 className="text-2xl font-semibold text-center mb-8">{aboutContent.mission.title}</h2>
              <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
            </div>
            <p className="text-muted-foreground">
              {aboutContent.mission.description}
            </p>
          </div>

          {/* Company Values */}
          <div className="max-w-3xl mx-auto mb-24">
            <div className="flex flex-col items-center mb-8">
              <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
              <h2 className="text-2xl font-semibold text-center mb-8">{aboutContent.values.title}</h2>
              <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
            </div>
            <div className="space-y-8">
              {aboutContent.values.items.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon name={value.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expo Photos */}
          <div className="max-w-3xl mx-auto mb-24">
            <div className="flex flex-col items-center mb-8">
              <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
              <h2 className="text-2xl font-semibold text-center mb-8">{aboutContent.team.title}</h2>
              <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
            </div>
            <ExpoSlideshow />
          </div>

          {/* Call to Action */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-primary text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">{aboutContent.callToAction.title}</h2>
              <p className="mb-8 opacity-90">
                {aboutContent.callToAction.description}
              </p>
              <div className="flex gap-4 justify-center">
                {aboutContent.callToAction.buttons.map((button) => (
                  <a
                    key={button.text}
                    href={getBasePath(button.href)}
                    className={`inline-block px-6 py-2 rounded-md transition-colors ${
                      button.variant === 'primary'
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-primary/20 hover:bg-primary/30 text-white'
                    }`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 