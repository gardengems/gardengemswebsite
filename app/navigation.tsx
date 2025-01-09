'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links: { href: string; label: string; className?: string }[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/drop-n-grow', label: 'Drop N Grow' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="relative w-48 h-14 flex-shrink-0"
              {...(isActive('/') ? { onClick: (e) => e.preventDefault() } : {})}
            >
              <Image
                src="/images/logo.png"
                alt="Garden Gems International"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, 192px"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {links.map((link) => (
                isActive(link.href) ? (
                  <span
                    key={link.href}
                    className="px-4 py-2 rounded-md bg-primary/10 text-primary font-medium cursor-default"
                  >
                    {link.label}
                  </span>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-md bg-accent/5 hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-xl z-50 md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between h-16 px-6 border-b border-border">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md hover:bg-accent"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
                {links.map((link) => (
                  isActive(link.href) ? (
                    <span
                      key={link.href}
                      className="block px-4 py-3 text-lg font-medium text-primary bg-primary/10 cursor-default rounded-md"
                    >
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground bg-accent/5 hover:bg-accent/10 rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
} 