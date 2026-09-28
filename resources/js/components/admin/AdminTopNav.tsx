import React from 'react';
import { router, usePage } from '@inertiajs/react';
import {
    Database,
    Globe,
    LogOut,
    Shield,
    Bell,
    CheckCircle2,
} from 'lucide-react';

interface AdminTopNavProps {
    title?: string;
    onToggleSidebar?: () => void;
}

export default function AdminTopNav({ title = 'Administration Control Center' }: AdminTopNavProps) {
    const { auth, stats } = usePage().props as any;
    const user = auth?.user;

    const handleLogout = () => {
        router.post('/z-admin/logout');
    };

    return (
        <header className="h-16 border-b border-white/10 bg-[#0a0a0d]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
            {/* Title & Status */}
            <div className="flex items-center gap-3">
                <h1 className="text-sm font-semibold text-white tracking-wide font-heading">
                    {title}
                </h1>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Database: {stats?.dbDriver || 'MariaDB'} ({stats?.dbName || 'zytrixon'})</span>
                </div>
            </div>

            {/* Actions & Profile */}
            <div className="flex items-center gap-3">
                <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-neutral-300 hover:text-white hover:border-white/30 transition-all font-mono"
                    title="Open live website in new tab"
                >
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span className="hidden md:inline">Live Website</span>
                </a>

                <div className="h-4 w-px bg-white/10 hidden sm:block" />

                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 font-bold text-xs">
                        A
                    </div>
                    <div className="hidden lg:block text-left">
                        <div className="text-xs font-semibold text-white leading-none">
                            {user?.name || 'Administrator'}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                            Role: {user?.role || 'admin'}
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleLogout}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Logout"
                >
                    <LogOut className="w-4 h-4" />
                </button>
            </div>
        </header>
    );
}
