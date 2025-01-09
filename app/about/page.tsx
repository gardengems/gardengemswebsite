import { ExpoSlideshow } from '@/components/ExpoSlideshow';
import Image from 'next/image';
import { getBasePath } from '@/lib/utils';
import { aboutContent } from '@/content/pages/about';
import { Icon } from '@/components/icons';

export default function AboutPage() {
  return (
    <div className="container py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          {aboutContent.hero.title}
          <span className="block text-2xl text-muted-foreground mt-2">
            {aboutContent.hero.subtitle}
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {aboutContent.hero.description}
        </p>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <Image 
            src={getBasePath(aboutContent.heroImage.src)}
            alt={aboutContent.heroImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-4 text-center">{aboutContent.mission.title}</h2>
        <p className="text-muted-foreground">
          {aboutContent.mission.description}
        </p>
      </div>

      {/* Company Values */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-8 text-center">{aboutContent.values.title}</h2>
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
        <h2 className="text-2xl font-semibold mb-8 text-center">{aboutContent.team.title}</h2>
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
  );
} 