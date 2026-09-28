import React from 'react';
import { Head, Link } from '@inertiajs/react';
import CustomerLayout from '@/layouts/CustomerLayout';
import {
    UserCheck,
    Briefcase,
    ShieldAlert,
    Phone,
    Mail,
    ExternalLink,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    Lock,
} from 'lucide-react';

interface ServiceItem {
    title: string;
    status: string;
    description: string;
}

interface UserData {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

interface CustomerDashboardProps {
    user: UserData;
    services: ServiceItem[];
    supportPhone: string;
    supportEmail: string;
}

export default function Dashboard({
    user,
    services,
    supportPhone,
    supportEmail,
}: CustomerDashboardProps) {
    return (
        <CustomerLayout>
            <Head title="Customer Portal | Zytrixon Tech" />

            <div className="space-y-6">
                {/* Hero / Welcome */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0c0c10] via-[#101018] to-[#0c0c10] p-6 sm:p-8 backdrop-blur-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                                    <UserCheck className="w-3.5 h-3.5" />
                                    Customer Workspace
                                </span>
                                <span className="text-xs text-neutral-500 font-mono">Role: {user.role}</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading">
                                Welcome, {user.name}
                            </h1>
                            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
                                You are signed in to your dedicated client portal. Your active services, project roadmaps, and priority concierge contacts are managed here.
                            </p>
                        </div>

                        <div className="shrink-0 flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-mono text-neutral-300">
                                Status: Active Account
                            </span>
                        </div>
                    </div>
                </div>

                {/* Role Separation Demonstration Card */}
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-5 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                                <Lock className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                                    Role Separation Enforcement Test
                                </h3>
                                <p className="text-xs text-neutral-400 mt-0.5">
                                    Because your role is <span className="text-blue-400 font-mono font-bold">customer</span>, you are isolated from administrator panels. You can verify this security guard by clicking the test button.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/z-admin/dashboard"
                            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium hover:bg-amber-500/20 transition-all shrink-0"
                        >
                            <span>Test Admin Access</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                {/* Active Services Grid */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-white font-heading">
                                Assigned Services & Solutions
                            </h2>
                            <p className="text-xs text-neutral-400 mt-0.5">
                                Your available technology stack and deployed infrastructure
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {services.map((svc, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl border border-white/10 bg-[#0a0a0d] p-5 hover:border-white/20 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            {svc.status}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-white font-heading">
                                        {svc.title}
                                    </h3>
                                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                                        {svc.description}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
                                    <span>24/7 Monitored</span>
                                    <span className="text-blue-400 font-mono">SLA 99.9%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support & Concierge Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/10 bg-[#0a0a0d] p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-mono">
                                    Direct Support Line
                                </h4>
                                <a
                                    href={`tel:${supportPhone}`}
                                    className="text-base font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                                >
                                    {supportPhone}
                                </a>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500">
                            Direct technical hotline for rapid troubleshooting and service deployment.
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#0a0a0d] p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                <Mail className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-mono">
                                    Support Desk Email
                                </h4>
                                <a
                                    href={`mailto:${supportEmail}`}
                                    className="text-base font-bold text-white hover:text-blue-400 transition-colors font-mono"
                                >
                                    {supportEmail}
                                </a>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500">
                            Email ticketing system for feature requests and project milestone tracking.
                        </p>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}

Dashboard.layout = (page: React.ReactNode) => page;

