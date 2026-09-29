import React from 'react';
import { router, usePage } from '@inertiajs/react';
import Logo from '@/components/ui/logo';
import { UserCheck, LogOut, Phone, Mail, Globe } from 'lucide-react';

export default function CustomerTopNav() {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    const handleLogout = () => {
        router.post('/z-admin/logout');
    };

    return (
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-[#0a0a0d]/90 px-6 backdrop-blur-md">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
                <a href="/" className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 p-1.5 backdrop-blur-sm">
                        <Logo className="h-full w-full fill-current text-white" />
                    </div>
                    <div>
                        <div className="font-heading text-sm font-bold tracking-wider text-white">
                            ZYTRIXON
                        </div>
                        <div className="-mt-0.5 font-mono text-[10px] text-blue-400">
                            Customer Portal
                        </div>
                    </div>
                </a>
            </div>

            {/* Quick Actions & Profile */}
            <div className="flex items-center gap-3">
                <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-neutral-300 transition-all hover:text-white sm:flex"
                >
                    <Globe className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Website</span>
                </a>

                <div className="hidden h-4 w-px bg-white/10 sm:block" />

                <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20 text-xs font-bold text-blue-300">
                        <UserCheck className="h-4 w-4" />
                    </div>
                    <div className="hidden text-left md:block">
                        <div className="text-xs leading-none font-semibold text-white">
                            {user?.name || 'Customer'}
                        </div>
                        <div className="mt-0.5 font-mono text-[10px] text-neutral-400">
                            {user?.email}
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 rounded-lg border border-transparent px-3 py-1.5 text-xs font-medium text-red-400 transition-all hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-300"
                    title="Sign Out"
                >
                    <LogOut className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Sign Out</span>
                </button>
            </div>
        </header>
    );
}
