import React, { PropsWithChildren } from 'react';
import { usePage } from '@inertiajs/react';
import CustomerTopNav from '@/components/customer/CustomerTopNav';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function CustomerLayout({ children }: PropsWithChildren) {
    const { flash } = usePage().props as any;

    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black">
            <CustomerTopNav />

            {/* Flash Messages */}
            {flash?.success && (
                <div className="max-w-6xl w-full mx-auto px-6 mt-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{flash.success}</span>
                    </div>
                </div>
            )}
            {flash?.error && (
                <div className="max-w-6xl w-full mx-auto px-6 mt-4">
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{flash.error}</span>
                    </div>
                </div>
            )}

            <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8">
                {children}
            </main>

            <footer className="border-t border-white/5 py-6 px-6 text-center text-xs text-neutral-500">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span>Zytrixon Client Workspace &bull; Dedicated Enterprise Service</span>
                    <span>Direct Hotline: +91 7049711475</span>
                </div>
            </footer>
        </div>
    );
}
