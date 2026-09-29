import type { PropsWithChildren } from 'react';
import React from 'react';
import { usePage } from '@inertiajs/react';
import CustomerTopNav from '@/components/customer/CustomerTopNav';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function CustomerLayout({ children }: PropsWithChildren) {
    const { flash } = usePage().props as any;

    return (
        <div className="flex min-h-screen flex-col bg-black font-sans text-white selection:bg-white selection:text-black">
            <CustomerTopNav />

            {/* Flash Messages */}
            {flash?.success && (
                <div className="mx-auto mt-4 w-full max-w-6xl px-6">
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-400">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span>{flash.success}</span>
                    </div>
                </div>
            )}
            {flash?.error && (
                <div className="mx-auto mt-4 w-full max-w-6xl px-6">
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{flash.error}</span>
                    </div>
                </div>
            )}

            <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
                {children}
            </main>

            <footer className="border-t border-white/5 px-6 py-6 text-center text-xs text-neutral-500">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
                    <span>
                        Zytrixon Client Workspace &bull; Dedicated Enterprise
                        Service
                    </span>
                    <span>Direct Hotline: +91 7049711475</span>
                </div>
            </footer>
        </div>
    );
}
