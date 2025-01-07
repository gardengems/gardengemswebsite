import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  primary?: boolean;
  className?: string;
}

export function CTAButton({ href, children, primary = true, className = '' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center h-12 px-8 font-medium rounded-full transition-colors ${
        primary
          ? 'bg-primary text-white hover:bg-primary/90'
          : 'text-primary hover:text-primary/90'
      } ${className}`}
    >
      {children}
    </Link>
  );
} 