import type { PropsWithChildren } from 'react';
import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminTopNav from '@/components/admin/AdminTopNav';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface AdminLayoutProps {
    title?: string;
}

export default function AdminLayout({
    children,
    title = 'Administration Panel',
}: PropsWithChildren<AdminLayoutProps>) {
    const { flash } = usePage().props as any;
    const { url } = usePage();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    // Synchronize stored theme on layout mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('zy-theme');
        if (storedTheme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
        // Mark document.body with admin-body class for custom thin scrollbar
        document.body.classList.add('admin-body');
        return () => {
            document.body.classList.remove('admin-body');
        };
    }, []);

    // Automatically close mobile sidebar on navigation
    useEffect(() => {
        setMobileOpen(false);
    }, [url]);

    return (
        <div
            className="admin-panel min-h-screen font-sans transition-colors duration-200"
            style={{
                backgroundColor: 'var(--admin-bg)',
                color: 'var(--admin-text-primary)',
            }}
        >
            {/* Sidebar (fixed on left) */}
            <AdminSidebar
                mobileOpen={mobileOpen}
                onCloseMobile={() => setMobileOpen(false)}
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed((prev) => !prev)}
            />

            {/* Topbar (fixed at top) */}
            <AdminTopNav
                title={title}
                collapsed={collapsed}
                onToggleMobileSidebar={() => setMobileOpen((prev) => !prev)}
                onToggleCollapse={() => setCollapsed((prev) => !prev)}
            />

            {/* Main Content Area (pt-16 offsets fixed topbar, lg:pl offsets fixed sidebar) */}
            <div
                className={`flex min-h-screen min-w-0 flex-col pt-16 transition-all duration-300 ease-in-out ${
                    collapsed ? 'lg:pl-16' : 'lg:pl-56'
                }`}
                style={{
                    backgroundColor: 'var(--admin-bg)',
                }}
            >
                {/* Flash Messages */}
                {flash?.success && (
                    <div className="mx-3 mt-3 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-500 sm:mx-6 sm:mt-4">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span>{flash.success}</span>
                    </div>
                )}
                {flash?.error && (
                    <div className="mx-3 mt-3 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-500 sm:mx-6 sm:mt-4">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{flash.error}</span>
                    </div>
                )}

                {/* Page View Body with incoming-only fade animation */}
                <main className="min-w-0 flex-1 p-3.5 sm:p-6">
                    <div key={url} className="admin-page-enter">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
