import { NavItem } from './interfaces/nav-items';

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
