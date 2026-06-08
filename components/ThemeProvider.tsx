"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ThemeName = "zinc-dark" | "stone-light" | "slate-blue" | "ivory-ink" | "graphite";

export const THEMES: { key: ThemeName; label: string; dark: boolean }[] = [
  { key: "zinc-dark",    label: "Zinc",    dark: true  },
  { key: "stone-light",  label: "Stone",   dark: false },
  { key: "slate-blue",   label: "Slate",   dark: true  },
  { key: "ivory-ink",    label: "Ivory",   dark: false },
  { key: "graphite",     label: "Graphite",dark: true  },
];

const STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME: ThemeName = "ivory-ink";

interface ThemeCtx { theme: ThemeName; setTheme: (t: ThemeName) => void; }
const ThemeContext = createContext<ThemeCtx>({ theme: DEFAULT_THEME, setTheme: () => {} });

export function useTheme() { return useContext(ThemeContext); }

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as ThemeName) || DEFAULT_THEME;
    setThemeState(saved);
    document.documentElement.setAttribute("data-theme", saved);
    setMounted(true);
  }, []);

  const setTheme = (t: ThemeName) => {
    setThemeState(t);
    localStorage.setItem(STORAGE_KEY, t);
    document.documentElement.setAttribute("data-theme", t);
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
