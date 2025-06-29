import type { NavItem, NavLogo } from '@archipelago/ui';

export const NAV_LOGO: NavLogo = {
  href: '/',
  url: 'Archipelago',
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
] as const;
