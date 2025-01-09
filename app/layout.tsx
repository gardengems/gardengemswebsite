import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import { getBasePath } from "@/lib/utils";
import { footerContent } from "@/content/pages/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Container",
  description: "Smart Container Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="border-t bg-muted/20">
          <div className="container py-8">
            {/* Three Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-6">
              {/* Left Column - About & Quick Links */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">{footerContent.about.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {footerContent.about.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">{footerContent.quickLinks.title}</h3>
                  <ul className="space-y-1 text-sm">
                    {footerContent.quickLinks.links.map((link) => (
                      <li key={link.href}>
                        <a href={getBasePath(link.href)} className="hover:text-primary transition-colors">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Middle Column - Logo */}
              <div className="flex flex-col justify-center items-center py-2">
                <div className="relative w-32 h-32">
                  <Image
                    src={getBasePath(footerContent.logo.src)}
                    alt={footerContent.logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 128px"
                  />
                </div>
              </div>

              {/* Right Column - Contact & Social */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 min-w-0">
                  <h3 className="text-base font-semibold">{footerContent.contact.title}</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="break-words">{footerContent.contact.email}</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">{footerContent.social.title}</h3>
                  <ul className="space-y-1 text-sm">
                    {footerContent.social.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground mt-6">
              © {new Date().getFullYear()} {footerContent.copyright.text}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
