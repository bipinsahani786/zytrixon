import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard, Users, Mail } from 'lucide-react';

export interface AdminNavItem {
    id: string;
    label: string;
    href: string;
    icon: LucideIcon;
    description: string;
    matcher: (url: string) => boolean;
}

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/z-admin/dashboard',
        icon: LayoutDashboard,
        description: 'Realtime Telemetry & System Control',
        matcher: (url: string) =>
            url === '/z-admin' ||
            url === '/z-admin/dashboard' ||
            url.startsWith('/z-admin/dashboard'),
    },
    {
        id: 'users',
        label: 'Users Directory',
        href: '/z-admin/users',
        icon: Users,
        description: 'User Accounts, Roles & Access Control',
        matcher: (url: string) => url.startsWith('/z-admin/users'),
    },
    {
        id: 'enquiries',
        label: 'Enquiries / Leads',
        href: '/z-admin/contacts',
        icon: Mail,
        description: 'Client Project Inquiries & Realtime Leads',
        matcher: (url: string) =>
            url.startsWith('/z-admin/contacts') ||
            url.startsWith('/z-admin/enquiries'),
    },
];

export function getActiveAdminNavItem(url: string): AdminNavItem {
    const found = ADMIN_NAV_ITEMS.find((item) => item.matcher(url));
    return found || ADMIN_NAV_ITEMS[0];
}
