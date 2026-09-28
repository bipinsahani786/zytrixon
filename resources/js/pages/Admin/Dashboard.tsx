import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import AdminStatCard from '@/components/admin/AdminStatCard';
import {
    Briefcase,
    MapPin,
    FolderKanban,
    Users,
    Database,
    ShieldCheck,
    Cpu,
    Sparkles,
    ArrowUpRight,
    Terminal,
    Clock,
} from 'lucide-react';

interface UserItem {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

interface StatsData {
    servicesCount: number;
    locationsCount: number;
    caseStudiesCount: number;
    totalUsers: number;
    adminCount: number;
    customerCount: number;
    dbDriver: string;
    dbName: string;
    phpVersion: string;
    laravelVersion: string;
}

interface DashboardProps {
    stats: StatsData;
    recentUsers: UserItem[];
}

export default function Dashboard({ stats, recentUsers }: DashboardProps) {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    return (
        <AdminLayout title="System Administration Center">
            <Head title="Admin Dashboard | Zytrixon Tech" />

            <div className="space-y-6 max-w-7xl mx-auto">
                {/* Hero / Welcome Banner */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0c0c10] via-[#121218] to-[#0c0c10] p-6 sm:p-8 backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    Authenticated as Administrator
                                </span>
                                <span className="text-xs text-neutral-500 font-mono">Role: {user?.role}</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading">
                                Welcome back, {user?.name || 'Admin'}
                            </h2>
                            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
                                You are in the centralized administration console for Zytrixon Tech. From here you have full oversight of registered users, services, locations, and infrastructure.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200 active:scale-95"
                            >
                                <span>Preview Live Site</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* KPI Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AdminStatCard
                        title="Services Catalog"
                        value={stats?.servicesCount ?? 0}
                        subtitle="Published offerings in database"
                        icon={Briefcase}
                        badge="Production"
                        badgeVariant="emerald"
                    />
                    <AdminStatCard
                        title="Global Locations"
                        value={stats?.locationsCount ?? 0}
                        subtitle="SEO City Landing Hubs"
                        icon={MapPin}
                        badge="Active"
                        badgeVariant="blue"
                    />
                    <AdminStatCard
                        title="Case Studies"
                        value={stats?.caseStudiesCount ?? 0}
                        subtitle="Client success showcases"
                        icon={FolderKanban}
                        badge="Portfolio"
                        badgeVariant="purple"
                    />
                    <AdminStatCard
                        title="Registered Users"
                        value={stats?.totalUsers ?? 0}
                        subtitle={`${stats?.adminCount ?? 1} Admin • ${stats?.customerCount ?? 1} Customer`}
                        icon={Users}
                        badge="Role Isolated"
                        badgeVariant="amber"
                    />
                </div>

                {/* Database & Recent Users Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Users Table (2 cols) */}
                    <div id="users" className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0a0a0d] p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-base font-semibold text-white font-heading">
                                    User Directory & Roles
                                </h3>
                                <p className="text-xs text-neutral-400 mt-0.5">
                                    Accounts stored in database with role-based routing
                                </p>
                            </div>
                            <span className="text-xs font-mono text-neutral-500">
                                {recentUsers?.length ?? 0} Accounts Total
                            </span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr className="border-b border-white/10 text-neutral-400 font-mono">
                                        <th className="pb-3 font-semibold">User</th>
                                        <th className="pb-3 font-semibold">Email</th>
                                        <th className="pb-3 font-semibold">Role</th>
                                        <th className="pb-3 font-semibold text-right">Created</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {recentUsers?.map((u) => {
                                        const isAdmin = u.role === 'admin';
                                        return (
                                            <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                                                <td className="py-3 font-medium text-white flex items-center gap-2">
                                                    <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold ${
                                                        isAdmin ? 'bg-emerald-500/20 text-emerald-300' : 'bg-blue-500/20 text-blue-300'
                                                    }`}>
                                                        {u.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span>{u.name}</span>
                                                </td>
                                                <td className="py-3 text-neutral-300 font-mono">{u.email}</td>
                                                <td className="py-3">
                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold border ${
                                                        isAdmin
                                                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                                            : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                    }`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full ${isAdmin ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                                                        {u.role.toUpperCase()}
                                                    </span>
                                                </td>
                                                <td className="py-3 text-neutral-500 text-right font-mono">
                                                    {u.created_at ? new Date(u.created_at).toLocaleDateString() : 'Active'}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* System Telemetry & DB Details (1 col) */}
                    <div id="system" className="rounded-2xl border border-white/10 bg-[#0a0a0d] p-6 backdrop-blur-sm space-y-4">
                        <div>
                            <h3 className="text-base font-semibold text-white font-heading flex items-center gap-2">
                                <Database className="w-4 h-4 text-emerald-400" />
                                Database & System
                            </h3>
                            <p className="text-xs text-neutral-400 mt-0.5">
                                Live operational database parameters
                            </p>
                        </div>

                        <div className="space-y-2.5 font-mono text-xs">
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                                <span className="text-neutral-400">DB Connection</span>
                                <span className="text-emerald-400 font-semibold">{stats?.dbDriver || 'mysql'}</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                                <span className="text-neutral-400">Database Name</span>
                                <span className="text-white">{stats?.dbName || 'zytrixon'}</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                                <span className="text-neutral-400">PHP Runtime</span>
                                <span className="text-neutral-300">v{stats?.phpVersion || '8.2+'}</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                                <span className="text-neutral-400">Laravel Framework</span>
                                <span className="text-neutral-300">v{stats?.laravelVersion || '12.x'}</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                                <span className="text-neutral-400">Public Signup</span>
                                <span className="text-amber-400 font-semibold">Disabled (IAM Only)</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-neutral-400 flex items-start gap-2.5">
                                <Terminal className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-neutral-200 block">Zero-Trust Isolation</span>
                                    <span>Non-admin accounts attempting to access /z-admin routes are automatically rerouted to customer portal.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

Dashboard.layout = (page: React.ReactNode) => page;

