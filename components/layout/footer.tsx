'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getContent } from '@/lib/content';
import type { HomeContent } from '@/lib/content-types';
import { useLanguage } from '@/lib/contexts/language-context';

export function Footer() {
  const [socialLinks, setSocialLinks] = useState<{
    linkedin: string;
    instagram: string;
    email: string;
  } | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    getContent<HomeContent>('home', language).then((content) => {
      // @ts-expect-error socialLinks exists in the content but TypeScript is not recognizing it
      setSocialLinks(content.socialLinks);
    });
  }, [language]);

  return (
    <footer className="bg-muted/20 border-t border-border/40">
      <div className="container max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-sm">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Garden Gems International is pioneering the future of container growing technology with our innovative Drop N Grow solution.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/drop-n-grow"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Drop N Grow
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Contact</h3>
            <ul className="space-y-2">
              {socialLinks && (
                <li>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    {socialLinks.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Follow Us</h3>
            <ul className="space-y-2">
              {socialLinks && (
                <>
                  <li>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border/40">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Garden Gems International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 