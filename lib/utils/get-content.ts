import homeEn from '@/content/en/home.json';
import homeTh from '@/content/th/home.json';
import aboutEn from '@/content/en/about.json';
import aboutTh from '@/content/th/about.json';
import contactEn from '@/content/en/contact.json';
import contactTh from '@/content/th/contact.json';
import dropNGrowEn from '@/content/en/drop-n-grow.json';
import dropNGrowTh from '@/content/th/drop-n-grow.json';
import { HomeContent, AboutContent, DropNGrowContent, ContactContent } from '@/lib/content-types';

const contentMap = {
  home: {
    en: homeEn as unknown as HomeContent,
    th: homeTh as unknown as HomeContent,
  },
  about: {
    en: aboutEn as unknown as AboutContent,
    th: aboutTh as unknown as AboutContent,
  },
  contact: {
    en: contactEn as unknown as ContactContent,
    th: contactTh as unknown as ContactContent,
  },
  'drop-n-grow': {
    en: dropNGrowEn as unknown as DropNGrowContent,
    th: dropNGrowTh as unknown as DropNGrowContent,
  },
};

type ContentMap = {
  home: HomeContent;
  about: AboutContent;
  'drop-n-grow': DropNGrowContent;
  contact: ContactContent;
};

export function getContent<T extends keyof ContentMap>(
  page: T,
  language: string = 'en'
): ContentMap[T] {
  const content = contentMap[page];
  return (content[language as keyof typeof content] || content.en) as ContentMap[T];
} 