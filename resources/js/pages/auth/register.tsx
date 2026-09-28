import { Head, Link } from '@inertiajs/react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function Register() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
            <Head title="Registration Disabled" />
            <div className="max-w-md w-full rounded-2xl border border-white/10 bg-[#0a0a0d] p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6" />
                </div>
                <h1 className="text-xl font-bold font-heading text-white">Public Registration Disabled</h1>
                <p className="text-xs text-neutral-400">
                    Accounts are managed exclusively by the system administrator. Self-registration is disabled for security compliance.
                </p>
                <div className="pt-2">
                    <Link
                        href="/z-admin"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to Sign In</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
