import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import { getBasePath } from "@/lib/utils";

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
                <h3 className="text-lg font-semibold">About Us</h3>
                <p className="text-sm text-muted-foreground">
                  Garden Gems provides scalable and sustainable cannabis solutions, ensuring compliance, automation, and success in the global market.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href={getBasePath("/drop-n-grow")} className="hover:text-primary transition-colors">
                      Drop N Grow
                    </a>
                  </li>
                  <li>
                    <a href={getBasePath("/about")} className="hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href={getBasePath("/contact")} className="hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li className="break-all">info@gardengemsinternational.com</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://linkedin.com/company/garden-gems-international" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/gardengemsinternational" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Garden Gems International. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
