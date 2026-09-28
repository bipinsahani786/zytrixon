import React from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import Logo from '@/components/ui/logo';
import {
    LayoutDashboard,
    Briefcase,
    MapPin,
    FolderKanban,
    Users,
    Database,
    ExternalLink,
    LogOut,
    ShieldAlert,
} from 'lucide-react';

interface AdminSidebarProps {
    className?: string;
}

export default function AdminSidebar({ className = '' }: AdminSidebarProps) {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    const handleLogout = () => {
        router.post('/z-admin/logout');
    };

    const navItems = [
        { label: 'Overview', href: '/z-admin/dashboard', icon: LayoutDashboard, active: true },
        { label: 'Services Catalog', href: '/services', icon: Briefcase, external: true },
        { label: 'Locations Index', href: '/locations', icon: MapPin, external: true },
        { label: 'Case Studies', href: '/case-studies', icon: FolderKanban, external: true },
        { label: 'User Directory', href: '/z-admin/dashboard#users', icon: Users, active: false },
        { label: 'System & Database', href: '/z-admin/dashboard#system', icon: Database, active: false },
    ];

    return (
        <aside className={`w-64 bg-[#0a0a0d] border-r border-white/10 flex flex-col justify-between shrink-0 ${className}`}>
            <div>
                {/* Brand Header */}
                <div className="p-5 border-b border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center p-1.5 backdrop-blur-sm">
                        <Logo className="w-full h-full text-white fill-current" />
                    </div>
                    <div>
                        <div className="font-heading font-bold text-sm text-white tracking-wider">
                            ZYTRIXON
                        </div>
                        <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Admin Console
                        </div>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="p-3 space-y-1">
                    <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                        Main Menu
                    </div>
                    {navItems.map((item, idx) => {
                        const Icon = item.icon;
                        if (item.external) {
                            return (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/[0.04] transition-all group"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <Icon className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                                        <span>{item.label}</span>
                                    </div>
                                    <ExternalLink className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400" />
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                                    item.active
                                        ? 'bg-white text-black font-semibold shadow-sm'
                                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                                }`}
                            >
                                <Icon className={`w-4 h-4 ${item.active ? 'text-black' : 'text-neutral-500'}`} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom User Profile & Logout */}
            <div className="p-3 border-t border-white/10 space-y-2">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <div className="min-w-0 pr-2">
                        <div className="text-xs font-semibold text-white truncate flex items-center gap-1.5">
                            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{user?.name || 'Administrator'}</span>
                        </div>
                        <div className="text-[11px] text-neutral-400 font-mono truncate">
                            {user?.email || 'admin@zytrixon.com'}
                        </div>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-bold uppercase shrink-0">
                        Admin
                    </span>
                </div>

                <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all"
                >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
