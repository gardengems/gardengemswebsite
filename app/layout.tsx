import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import { getBasePath } from "@/lib/utils";
import { footerContent } from "@/content/pages/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garden Gems International",
  description: "Scalable and sustainable cannabis solutions for the global market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico?" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="border-t bg-muted/20">
          <div className="container py-12">
            {/* Five Column Grid with Centered Logo */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_1fr_1fr] gap-8 md:gap-12">
              {/* About Section */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-foreground/90">{footerContent.about.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {footerContent.about.description}
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-foreground/90">{footerContent.quickLinks.title}</h3>
                <ul className="space-y-2 text-sm">
                  {footerContent.quickLinks.links.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={getBasePath(link.href)} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center - Logo */}
              <div className="flex justify-center items-center py-4 md:py-0">
                <div className="relative w-24 h-24 transition-transform duration-200 hover:scale-105">
                  <Image
                    src={getBasePath(footerContent.logo.src)}
                    alt={footerContent.logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 96px"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-foreground/90">{footerContent.contact.title}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="break-words text-muted-foreground hover:text-primary transition-colors duration-200">
                    <a href={`mailto:${footerContent.contact.email}`}>
                      {footerContent.contact.email}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-foreground/90">{footerContent.social.title}</h3>
                <ul className="space-y-2 text-sm">
                  {footerContent.social.links.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground mt-12">
              © {new Date().getFullYear()} {footerContent.copyright.text}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
