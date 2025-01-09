import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import { getBasePath } from "@/lib/utils";
import { footerContent } from "@/content/pages/footer";

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
          <div className="container py-16 space-y-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{footerContent.about.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {footerContent.about.description}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{footerContent.quickLinks.title}</h3>
                <ul className="space-y-2 text-sm">
                  {footerContent.quickLinks.links.map((link) => (
                    <li key={link.href}>
                      <a href={getBasePath(link.href)} className="hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{footerContent.contact.title}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="break-all">{footerContent.contact.email}</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{footerContent.social.title}</h3>
                <ul className="space-y-2 text-sm">
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
            <div className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} {footerContent.copyright.text}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
