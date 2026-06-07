"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Home, Briefcase, BookOpen, Building2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/blogs", label: "Blogs", icon: BookOpen },
  { href: "/experience", label: "Experience", icon: Building2 },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Desktop Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 py-4 nav-blur border-b border-border">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors">
          jeevraj<span className="text-accent">.</span>dev
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle — dark | light */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-0 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            <span className={`px-2 py-1 rounded-l-md border border-border transition-colors ${
              mounted && theme === "dark" ? "bg-surface text-foreground" : "text-muted-foreground"
            }`}>
              {mounted && theme === "dark" ? <Moon size={13} /> : <Moon size={13} />}
            </span>
            <span className="w-px h-5 bg-border" />
            <span className={`px-2 py-1 rounded-r-md border border-border border-l-0 transition-colors ${
              mounted && theme === "light" ? "bg-surface text-foreground" : "text-muted-foreground"
            }`}>
              {mounted && theme === "light" ? <Sun size={13} /> : <Sun size={13} />}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-5 py-3.5 nav-blur border-b border-border">
        <Link href="/" className="font-mono text-sm font-semibold text-foreground">
          jeevraj<span className="text-accent">.</span>dev
        </Link>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-0 text-xs font-mono"
          aria-label="Toggle theme"
        >
          <span className={`px-2 py-1 rounded-l-md border border-border ${
            mounted && theme === "dark" ? "bg-surface text-foreground" : "text-muted-foreground"
          }`}>
            <Moon size={12} />
          </span>
          <span className="w-px h-4 bg-border" />
          <span className={`px-2 py-1 rounded-r-md border border-border border-l-0 ${
            mounted && theme === "light" ? "bg-surface text-foreground" : "text-muted-foreground"
          }`}>
            <Sun size={12} />
          </span>
        </button>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around px-4 py-2 nav-blur border-t border-border safe-area-bottom">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.75} />
              <span className={`text-[10px] font-medium tracking-wide ${isActive ? "opacity-100" : "opacity-60"}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
