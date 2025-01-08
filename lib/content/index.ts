import type { HomeContent, AboutContent, ContactContent, DropNGrowContent } from './types';

type ContentMap = {
  home: HomeContent;
  about: AboutContent;
  'drop-n-grow': DropNGrowContent;
  contact: ContactContent;
};

export async function getContent<T extends keyof ContentMap>(
  contentType: T,
  locale: string = 'en'
): Promise<ContentMap[T]> {
  const content: Record<string, Record<string, unknown>> = {
    home: {
      en: {
        title: "Garden Gems International",
        description: "Smart Container Solutions",
        hero: {
          title: "Garden Gems",
          description: "Transform your space with our container solutions"
        },
        features: {
          title: "Our Services",
          items: [
            {
              title: "Container Sales",
              description: "New and used shipping containers"
            },
            {
              title: "Custom Modifications",
              description: "Tailored container solutions"
            }
          ]
        },
        footer: {
          links: [
            { title: "About", href: "/about" },
            { title: "Contact", href: "/contact" }
          ],
          copyright: "© 2024 Garden Gems. All rights reserved."
        },
        socialLinks: {
          linkedin: "https://linkedin.com/company/garden-gems",
          instagram: "https://instagram.com/gardengemsintl",
          email: "info@gardengems.com"
        }
      }
    },
    about: {
      en: {
        title: "About Us",
        description: "Learn about Garden Gems International",
        sections: [
          {
            title: "Our Story",
            content: "Garden Gems International was founded with a vision..."
          }
        ]
      }
    },
    contact: {
      en: {
        title: "Contact Us",
        description: "Get in touch with Garden Gems International",
        form: {
          title: "Send us a message",
          fields: {
            name: "Your Name",
            email: "Email Address",
            message: "Message"
          },
          submitButton: "Send Message"
        }
      }
    },
    'drop-n-grow': {
      en: {
        title: "Drop N Grow",
        description: "Revolutionary container growing solution",
        sections: [
          {
            title: "What is Drop N Grow?",
            content: "Drop N Grow is our innovative container solution..."
          }
        ]
      }
    }
  };

  return (content[contentType]?.[locale] || content[contentType]?.["en"]) as ContentMap[T];
} 