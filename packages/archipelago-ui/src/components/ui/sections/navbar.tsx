'use client';

import Link from 'next/link';
import { Button } from '../shadcn/button';
import { Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { NavItem, NavLogo } from '../../../lib/types/nav';

interface NavigationProps {
  logo: NavLogo;
  items: NavItem[];
}

export function Navigation({ logo, items }: NavigationProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <header className="fixed top-4 w-full">
      <div className="flex items-center justify-between gap-4 rounded-full border dark:border-none bg-background/70 px-6 py-2 shadow-md dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)] backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link
          href={logo.href}
          className=" text-base font-semibold tracking-tight"
        >
          {logo.url}
        </Link>
        <nav className="hidden md:flex gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
