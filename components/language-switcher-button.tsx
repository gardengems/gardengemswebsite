'use client';

import { useLanguage } from '@/lib/contexts/language-context';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';
import { AVAILABLE_LANGUAGES } from '@/config/languages';
import { useState, useEffect } from 'react';

export function LanguageSwitcherButton() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide the language switcher when there's only one language
  if (AVAILABLE_LANGUAGES.length <= 1) {
    return null;
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Languages className="h-4 w-4" />
        <span className="sr-only">Switch language</span>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border z-50">
            <div className="py-1">
              {AVAILABLE_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    language === lang.code
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
} 