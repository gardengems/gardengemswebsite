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
          <div className="container py-6">
            {/* Five Column Grid with Centered Logo */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_1fr_1fr] gap-6">
              {/* About Section */}
              <div className="space-y-2">
                <h3 className="text-base font-semibold">{footerContent.about.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {footerContent.about.description}
                </p>
              </div>

              {/* Quick Links */}
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

              {/* Center - Logo */}
              <div className="flex justify-center items-center">
                <div className="relative w-20 h-20">
                  <Image
                    src={getBasePath(footerContent.logo.src)}
                    alt={footerContent.logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <h3 className="text-base font-semibold">{footerContent.contact.title}</h3>
                <ul className="space-y-1 text-sm">
                  <li className="break-words">{footerContent.contact.email}</li>
                </ul>
              </div>

              {/* Social */}
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

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground mt-4">
              © {new Date().getFullYear()} {footerContent.copyright.text}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
