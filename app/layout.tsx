import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import portfolioData from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${portfolioData.meta.name} — Developer Portfolio`,
  description: portfolioData.meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-background pt-16 pb-20 md:pb-8">
            {children}
          </main>
          <footer className="hidden md:block border-t border-border py-6 text-center text-xs font-mono text-muted-foreground bg-background">
            © {new Date().getFullYear()} {portfolioData.meta.name}. Built with Next.js.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
