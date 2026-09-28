import React, { PropsWithChildren } from 'react';
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

    return (
        <div className="min-h-screen bg-black text-white flex font-sans selection:bg-white selection:text-black">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#050507]">
                <AdminTopNav title={title} />

                {/* Flash Messages */}
                {flash?.success && (
                    <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{flash.success}</span>
                    </div>
                )}
                {flash?.error && (
                    <div className="mx-6 mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{flash.error}</span>
                    </div>
                )}

                {/* Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
