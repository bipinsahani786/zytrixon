import { Head, Link } from '@inertiajs/react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function Register() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
            <Head title="Registration Disabled" />
            <div className="w-full max-w-md space-y-4 rounded-2xl border border-white/10 bg-[#0a0a0d] p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
                    <ShieldAlert className="h-6 w-6" />
                </div>
                <h1 className="font-heading text-xl font-bold text-white">
                    Public Registration Disabled
                </h1>
                <p className="text-xs text-neutral-400">
                    Accounts are managed exclusively by the system
                    administrator. Self-registration is disabled for security
                    compliance.
                </p>
                <div className="pt-2">
                    <Link
                        href="/z-admin"
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-neutral-200"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Return to Sign In</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
