"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Home, Briefcase, BookOpen, Building2, Palette, Check } from "lucide-react";
import { useTheme, THEMES } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/",           label: "Home",       icon: Home       },
  { href: "/projects",   label: "Projects",   icon: Briefcase  },
  { href: "/blogs",      label: "Blogs",      icon: BookOpen   },
  { href: "/experience", label: "Experience", icon: Building2  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentThemeLabel = THEMES.find(t => t.key === theme)?.label ?? "Theme";

  return (
    <>
      {/* ── Desktop Nav ─────────────────────────────── */}
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
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Theme picker */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-mono text-muted-foreground hover:text-foreground hover:border-accent transition-all duration-150"
          >
            <Palette size={12} />
            {currentThemeLabel}
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-border card-bg overflow-hidden shadow-lg z-50"
              style={{ background: "var(--card-bg)" }}>
              {THEMES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => { setTheme(t.key); setOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-mono transition-colors hover:bg-surface"
                  style={{ color: t.key === theme ? "var(--accent)" : "var(--muted-foreground)" }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-border inline-block"
                      style={{ background: t.dark ? "#1a1a1a" : "#f5f5f0", borderColor: t.dark ? "#333" : "#ccc" }}
                    />
                    {t.label}
                  </span>
                  {t.key === theme && <Check size={11} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── Mobile Top Bar ──────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-5 py-3.5 nav-blur border-b border-border">
        <Link href="/" className="font-mono text-sm font-semibold text-foreground">
          jeevraj<span className="text-accent">.</span>dev
        </Link>
        <div className="relative" ref={undefined}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface text-xs font-mono text-muted-foreground"
          >
            <Palette size={11} />
            {currentThemeLabel}
          </button>
          {open && (
            <div className="absolute right-0 top-full mt-1.5 w-40 rounded-xl border border-border overflow-hidden z-50"
              style={{ background: "var(--card-bg)" }}>
              {THEMES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => { setTheme(t.key); setOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-mono hover:bg-surface"
                  style={{ color: t.key === theme ? "var(--accent)" : "var(--muted-foreground)" }}
                >
                  {t.label}
                  {t.key === theme && <Check size={11} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── Mobile Bottom Nav ───────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around px-4 py-2 nav-blur border-t border-border safe-area-bottom">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                isActive ? "text-accent" : "text-muted-foreground"
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.75} />
              <span className={`text-[10px] font-medium tracking-wide ${isActive ? "opacity-100" : "opacity-50"}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
