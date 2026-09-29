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
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0c0c10] via-[#101018] to-[#0c0c10] p-6 backdrop-blur-xl sm:p-8">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-blue-400">
                                    <UserCheck className="h-3.5 w-3.5" />
                                    Customer Workspace
                                </span>
                                <span className="font-mono text-xs text-neutral-500">
                                    Role: {user.role}
                                </span>
                            </div>
                            <h1 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Welcome, {user.name}
                            </h1>
                            <p className="mt-1 max-w-2xl text-sm text-neutral-400">
                                You are signed in to your dedicated client
                                portal. Your active services, project roadmaps,
                                and priority concierge contacts are managed
                                here.
                            </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                            <span className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-neutral-300">
                                Status: Active Account
                            </span>
                        </div>
                    </div>
                </div>

                {/* Role Separation Demonstration Card */}
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-5 backdrop-blur-sm">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 rounded-lg border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400">
                                <Lock className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                                    Role Separation Enforcement Test
                                </h3>
                                <p className="mt-0.5 text-xs text-neutral-400">
                                    Because your role is{' '}
                                    <span className="font-mono font-bold text-blue-400">
                                        customer
                                    </span>
                                    , you are isolated from administrator
                                    panels. You can verify this security guard
                                    by clicking the test button.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/z-admin/dashboard"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-medium text-amber-300 transition-all hover:bg-amber-500/20"
                        >
                            <span>Test Admin Access</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                </div>

                {/* Active Services Grid */}
                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="font-heading text-lg font-bold text-white">
                                Assigned Services & Solutions
                            </h2>
                            <p className="mt-0.5 text-xs text-neutral-400">
                                Your available technology stack and deployed
                                infrastructure
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {services.map((svc, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0a0a0d] p-5 transition-all hover:border-white/20"
                            >
                                <div>
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white">
                                            <Briefcase className="h-4 w-4" />
                                        </div>
                                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                                            {svc.status}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-sm font-semibold text-white">
                                        {svc.title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                                        {svc.description}
                                    </p>
                                </div>

                                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-neutral-500">
                                    <span>24/7 Monitored</span>
                                    <span className="font-mono text-blue-400">
                                        SLA 99.9%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support & Concierge Info */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-[#0a0a0d] p-5">
                        <div className="mb-2 flex items-center gap-3">
                            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-400">
                                <Phone className="h-4 w-4" />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                                    Direct Support Line
                                </h4>
                                <a
                                    href={`tel:${supportPhone}`}
                                    className="font-mono text-base font-bold text-white transition-colors hover:text-emerald-400"
                                >
                                    {supportPhone}
                                </a>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500">
                            Direct technical hotline for rapid troubleshooting
                            and service deployment.
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#0a0a0d] p-5">
                        <div className="mb-2 flex items-center gap-3">
                            <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 text-blue-400">
                                <Mail className="h-4 w-4" />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                                    Support Desk Email
                                </h4>
                                <a
                                    href={`mailto:${supportEmail}`}
                                    className="font-mono text-base font-bold text-white transition-colors hover:text-blue-400"
                                >
                                    {supportEmail}
                                </a>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500">
                            Email ticketing system for feature requests and
                            project milestone tracking.
                        </p>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}

Dashboard.layout = (page: React.ReactNode) => page;
