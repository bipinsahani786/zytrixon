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
        <header className="h-16 border-b border-white/10 bg-[#0a0a0d]/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
                <a href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center p-1.5 backdrop-blur-sm">
                        <Logo className="w-full h-full text-white fill-current" />
                    </div>
                    <div>
                        <div className="font-heading font-bold text-sm text-white tracking-wider">
                            ZYTRIXON
                        </div>
                        <div className="text-[10px] text-blue-400 font-mono -mt-0.5">
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
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-neutral-300 hover:text-white transition-all font-mono"
                >
                    <Globe className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Website</span>
                </a>

                <div className="h-4 w-px bg-white/10 hidden sm:block" />

                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-xs">
                        <UserCheck className="w-4 h-4" />
                    </div>
                    <div className="hidden md:block text-left">
                        <div className="text-xs font-semibold text-white leading-none">
                            {user?.name || 'Customer'}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                            {user?.email}
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all"
                    title="Sign Out"
                >
                    <LogOut className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Sign Out</span>
                </button>
            </div>
        </header>
    );
}
