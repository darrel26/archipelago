'use client';

import Link from 'next/link';
import { NAV_ITEMS } from '../../../lib/constants';
import { Button } from '../shadcn/button';
import { Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 w-full bg-background/95 backdrop-blur z-50">
      <div className="flex h-16 items-center justify-between mx-6">
        <div className="left-nav">
          <Link href="/">
            <span className="font-bold">Archipelago</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="right-nav flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme">
            <Search />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
