import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import AdminStatCard from '@/components/admin/AdminStatCard';
import {
    Briefcase,
    MapPin,
    FolderKanban,
    Users,
    Database,
    ShieldCheck,
    ArrowUpRight,
    ArrowRight,
    Terminal,
    Mail,
    CheckCircle2,
    Clock3,
} from 'lucide-react';

interface UserItem {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

interface EnquiryItem {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string | null;
    budget: string | null;
    status: string;
    created_at: string;
}

interface StatsData {
    servicesCount: number;
    locationsCount: number;
    caseStudiesCount: number;
    totalUsers: number;
    adminCount: number;
    customerCount: number;
    enquiriesCount: number;
    newEnquiriesCount: number;
    contactedEnquiriesCount: number;
    resolvedEnquiriesCount: number;
    dbDriver: string;
    dbName: string;
    phpVersion: string;
    laravelVersion: string;
}

interface DashboardProps {
    stats: StatsData;
    recentUsers: UserItem[];
    recentEnquiries?: EnquiryItem[];
}

export default function Dashboard({
    stats,
    recentUsers,
    recentEnquiries = [],
}: DashboardProps) {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'new':
                return (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-500">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        NEW
                    </span>
                );
            case 'contacted':
                return (
                    <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-500">
                        <Clock3 className="h-2.5 w-2.5" />
                        CONTACTED
                    </span>
                );
            case 'in_progress':
                return (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-500">
                        IN PROGRESS
                    </span>
                );
            case 'resolved':
                return (
                    <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-500">
                        <CheckCircle2 className="h-2.5 w-2.5" />
                        RESOLVED
                    </span>
                );
            default:
                return (
                    <span
                        className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase"
                        style={{
                            borderColor: 'var(--admin-border)',
                            backgroundColor: 'var(--admin-button-secondary-bg)',
                            color: 'var(--admin-text-secondary)',
                        }}
                    >
                        {status}
                    </span>
                );
        }
    };

    return (
        <AdminLayout title="System Administration Center">
            <Head title="Admin Dashboard | Zytrixon Tech" />

            <div className="mx-auto max-w-7xl space-y-6">
                {/* Hero / Welcome Banner */}
                <div
                    className="relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-colors duration-200 sm:p-8"
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    <div
                        className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
                        style={{ backgroundColor: 'var(--admin-accent)' }}
                    />

                    <div className="relative z-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <span
                                    className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold"
                                    style={{
                                        borderColor: 'rgba(16, 185, 129, 0.3)',
                                        backgroundColor:
                                            'rgba(16, 185, 129, 0.1)',
                                        color: 'var(--admin-accent)',
                                    }}
                                >
                                    <ShieldCheck className="h-3.5 w-3.5" />
                                    Authenticated as Administrator
                                </span>
                                <span
                                    className="font-mono text-xs"
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    Role: {user?.role || 'admin'}
                                </span>
                            </div>
                            <h2
                                className="font-heading text-2xl font-bold tracking-tight sm:text-3xl"
                                style={{ color: 'var(--admin-text-primary)' }}
                            >
                                Welcome back, {user?.name || 'Admin'}
                            </h2>
                            <p
                                className="mt-1 max-w-2xl text-sm"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                Centralized administration console for Zytrixon
                                Tech. Monitor incoming leads, manage client
                                enquiries, catalog services, and system
                                infrastructure.
                            </p>
                        </div>

                        <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                            <Link
                                href="/z-admin/contacts"
                                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
                                style={{
                                    backgroundColor: 'var(--admin-accent)',
                                }}
                            >
                                <Mail className="h-4 w-4" />
                                <span>Manage Enquiries</span>
                                {stats?.newEnquiriesCount > 0 && (
                                    <span className="rounded-full bg-white/20 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                                        {stats.newEnquiriesCount} New
                                    </span>
                                )}
                            </Link>

                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all hover:opacity-80 active:scale-95"
                                style={{
                                    backgroundColor:
                                        'var(--admin-button-secondary-bg)',
                                    borderColor: 'var(--admin-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            >
                                <span>Preview Live Site</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* KPI Metrics Grid */}
                <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    <AdminStatCard
                        title="Client Enquiries"
                        value={stats?.enquiriesCount ?? 0}
                        icon={Mail}
                        badgeVariant={
                            stats?.newEnquiriesCount > 0 ? 'emerald' : 'blue'
                        }
                    />
                    <AdminStatCard
                        title="Services Catalog"
                        value={stats?.servicesCount ?? 0}
                        icon={Briefcase}
                        badgeVariant="emerald"
                    />
                    <AdminStatCard
                        title="Global Locations"
                        value={stats?.locationsCount ?? 0}
                        icon={MapPin}
                        badgeVariant="rose"
                    />
                    <AdminStatCard
                        title="Case Studies"
                        value={stats?.caseStudiesCount ?? 0}
                        icon={FolderKanban}
                        badgeVariant="purple"
                    />
                    <AdminStatCard
                        title="Registered Users"
                        value={stats?.totalUsers ?? 0}
                        icon={Users}
                        badgeVariant="amber"
                    />
                </div>

                {/* Inquiries Control Center Highlight */}
                <div
                    className="rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-200"
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    <div
                        className="mb-4 flex flex-col justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center"
                        style={{ borderColor: 'var(--admin-border)' }}
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <h3
                                    className="font-heading text-base font-semibold"
                                    style={{
                                        color: 'var(--admin-text-primary)',
                                    }}
                                >
                                    Recent Client Enquiries & Leads
                                </h3>
                                {stats?.newEnquiriesCount > 0 && (
                                    <span
                                        className="animate-pulse rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold"
                                        style={{
                                            borderColor:
                                                'rgba(16, 185, 129, 0.3)',
                                            backgroundColor:
                                                'rgba(16, 185, 129, 0.1)',
                                            color: 'var(--admin-accent)',
                                        }}
                                    >
                                        {stats.newEnquiriesCount} Action
                                        Required
                                    </span>
                                )}
                            </div>
                            <p
                                className="mt-0.5 text-xs"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                Incoming customer project inquiries from website
                                contact form
                            </p>
                        </div>

                        <Link
                            href="/z-admin/contacts"
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold transition-opacity hover:opacity-80"
                            style={{ color: 'var(--admin-accent)' }}
                        >
                            <span>Open Full Enquiries Control Panel</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    {recentEnquiries && recentEnquiries.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr
                                        className="border-b font-mono"
                                        style={{
                                            backgroundColor:
                                                'var(--admin-table-head-bg)',
                                            borderColor:
                                                'var(--admin-table-border)',
                                            color: 'var(--admin-text-secondary)',
                                        }}
                                    >
                                        <th className="px-3 py-3 font-semibold">
                                            Client Name
                                        </th>
                                        <th className="px-3 py-3 font-semibold">
                                            Contact Info
                                        </th>
                                        <th className="px-3 py-3 font-semibold">
                                            Service & Budget
                                        </th>
                                        <th className="px-3 py-3 font-semibold">
                                            Status
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold">
                                            Received
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="divide-y"
                                    style={{
                                        borderColor:
                                            'var(--admin-table-border)',
                                    }}
                                >
                                    {recentEnquiries.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="transition-colors"
                                            style={{
                                                borderBottom:
                                                    '1px solid var(--admin-table-border)',
                                            }}
                                        >
                                            <td className="px-3 py-3 font-medium">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="flex h-7 w-7 items-center justify-center rounded-lg border text-xs font-bold uppercase"
                                                        style={{
                                                            backgroundColor:
                                                                'var(--admin-button-secondary-bg)',
                                                            borderColor:
                                                                'var(--admin-border)',
                                                            color: 'var(--admin-accent)',
                                                        }}
                                                    >
                                                        {item.name.charAt(0)}
                                                    </div>
                                                    <span
                                                        className="font-semibold"
                                                        style={{
                                                            color: 'var(--admin-text-primary)',
                                                        }}
                                                    >
                                                        {item.name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td
                                                className="space-y-0.5 px-3 py-3 font-mono text-[11px]"
                                                style={{
                                                    color: 'var(--admin-text-secondary)',
                                                }}
                                            >
                                                <div>{item.email}</div>
                                                <div
                                                    style={{
                                                        color: 'var(--admin-text-muted)',
                                                    }}
                                                >
                                                    {item.phone}
                                                </div>
                                            </td>
                                            <td className="px-3 py-3">
                                                <div
                                                    className="font-medium"
                                                    style={{
                                                        color: 'var(--admin-text-primary)',
                                                    }}
                                                >
                                                    {item.service ||
                                                        'General Inquiry'}
                                                </div>
                                                <div
                                                    className="text-[11px]"
                                                    style={{
                                                        color: 'var(--admin-text-muted)',
                                                    }}
                                                >
                                                    {item.budget ||
                                                        'Budget: Not specified'}
                                                </div>
                                            </td>
                                            <td className="px-3 py-3">
                                                {getStatusBadge(item.status)}
                                            </td>
                                            <td
                                                className="px-3 py-3 text-right font-mono"
                                                style={{
                                                    color: 'var(--admin-text-muted)',
                                                }}
                                            >
                                                {item.created_at
                                                    ? new Date(
                                                          item.created_at,
                                                      ).toLocaleDateString()
                                                    : 'Recent'}
                                            </td>
                                            <td className="px-3 py-3 text-right">
                                                <Link
                                                    href={`/z-admin/contacts?search=${encodeURIComponent(item.name)}`}
                                                    className="inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-all hover:opacity-80"
                                                    style={{
                                                        backgroundColor:
                                                            'var(--admin-button-secondary-bg)',
                                                        borderColor:
                                                            'var(--admin-border)',
                                                        color: 'var(--admin-text-primary)',
                                                    }}
                                                >
                                                    <span>View</span>
                                                    <ArrowRight className="h-3 w-3" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div
                            className="rounded-xl border px-4 py-10 text-center"
                            style={{
                                backgroundColor: 'var(--admin-card-subtle)',
                                borderColor: 'var(--admin-border-subtle)',
                            }}
                        >
                            <Mail
                                className="mx-auto mb-2 h-8 w-8"
                                style={{ color: 'var(--admin-text-dim)' }}
                            />
                            <h4
                                className="text-sm font-semibold"
                                style={{ color: 'var(--admin-text-primary)' }}
                            >
                                No enquiries received yet
                            </h4>
                            <p
                                className="mx-auto mt-1 max-w-sm text-xs"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                Inquiries submitted through the website's
                                contact form will appear here in real-time.
                            </p>
                        </div>
                    )}
                </div>

                {/* Database & Recent Users Section */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Recent Users Table (2 cols) */}
                    <div
                        id="users"
                        className="rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-200 lg:col-span-2"
                        style={{
                            backgroundColor: 'var(--admin-card-bg)',
                            borderColor: 'var(--admin-border)',
                        }}
                    >
                        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                            <div>
                                <h3
                                    className="font-heading text-base font-semibold"
                                    style={{
                                        color: 'var(--admin-text-primary)',
                                    }}
                                >
                                    User Directory & Roles
                                </h3>
                                <p
                                    className="mt-0.5 text-xs"
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    Recent accounts with role-based isolation
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span
                                    className="font-mono text-xs"
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    {recentUsers?.length ?? 0} Accounts Total
                                </span>
                                <Link
                                    href="/z-admin/users"
                                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold transition-opacity hover:opacity-80"
                                    style={{ color: 'var(--admin-accent)' }}
                                >
                                    <span>Manage Users</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr
                                        className="border-b font-mono"
                                        style={{
                                            backgroundColor:
                                                'var(--admin-table-head-bg)',
                                            borderColor:
                                                'var(--admin-table-border)',
                                            color: 'var(--admin-text-secondary)',
                                        }}
                                    >
                                        <th className="px-3 py-3 font-semibold">
                                            User
                                        </th>
                                        <th className="px-3 py-3 font-semibold">
                                            Email
                                        </th>
                                        <th className="px-3 py-3 font-semibold">
                                            Role
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold">
                                            Created
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="divide-y"
                                    style={{
                                        borderColor:
                                            'var(--admin-table-border)',
                                    }}
                                >
                                    {recentUsers?.map((u) => {
                                        const isAdmin = u.role === 'admin';
                                        return (
                                            <tr
                                                key={u.id}
                                                className="transition-colors"
                                                style={{
                                                    borderBottom:
                                                        '1px solid var(--admin-table-border)',
                                                }}
                                            >
                                                <td className="px-3 py-3 font-medium">
                                                    <div className="flex items-center gap-2">
                                                        <div
                                                            className="flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold"
                                                            style={{
                                                                backgroundColor:
                                                                    isAdmin
                                                                        ? 'rgba(16, 185, 129, 0.15)'
                                                                        : 'rgba(59, 130, 246, 0.15)',
                                                                color: isAdmin
                                                                    ? 'var(--admin-accent)'
                                                                    : '#3b82f6',
                                                            }}
                                                        >
                                                            {u.name
                                                                .charAt(0)
                                                                .toUpperCase()}
                                                        </div>
                                                        <span
                                                            style={{
                                                                color: 'var(--admin-text-primary)',
                                                            }}
                                                        >
                                                            {u.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-3 py-3 font-mono"
                                                    style={{
                                                        color: 'var(--admin-text-secondary)',
                                                    }}
                                                >
                                                    {u.email}
                                                </td>
                                                <td className="px-3 py-3">
                                                    <span
                                                        className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold"
                                                        style={{
                                                            borderColor: isAdmin
                                                                ? 'rgba(16, 185, 129, 0.3)'
                                                                : 'rgba(59, 130, 246, 0.3)',
                                                            backgroundColor:
                                                                isAdmin
                                                                    ? 'rgba(16, 185, 129, 0.1)'
                                                                    : 'rgba(59, 130, 246, 0.1)',
                                                            color: isAdmin
                                                                ? 'var(--admin-accent)'
                                                                : '#3b82f6',
                                                        }}
                                                    >
                                                        <span
                                                            className="h-1.5 w-1.5 rounded-full"
                                                            style={{
                                                                backgroundColor:
                                                                    isAdmin
                                                                        ? 'var(--admin-accent)'
                                                                        : '#3b82f6',
                                                            }}
                                                        />
                                                        {u.role.toUpperCase()}
                                                    </span>
                                                </td>
                                                <td
                                                    className="px-3 py-3 text-right font-mono"
                                                    style={{
                                                        color: 'var(--admin-text-muted)',
                                                    }}
                                                >
                                                    {u.created_at
                                                        ? new Date(
                                                              u.created_at,
                                                          ).toLocaleDateString()
                                                        : 'Active'}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* System Telemetry & DB Details (1 col) */}
                    <div
                        id="system"
                        className="space-y-4 rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-200"
                        style={{
                            backgroundColor: 'var(--admin-card-bg)',
                            borderColor: 'var(--admin-border)',
                        }}
                    >
                        <div>
                            <h3
                                className="flex items-center gap-2 font-heading text-base font-semibold"
                                style={{ color: 'var(--admin-text-primary)' }}
                            >
                                <Database
                                    className="h-4 w-4"
                                    style={{ color: 'var(--admin-accent)' }}
                                />
                                Database & System
                            </h3>
                            <p
                                className="mt-0.5 text-xs"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                Live operational database parameters
                            </p>
                        </div>

                        <div className="space-y-2.5 font-mono text-xs">
                            <div
                                className="flex items-center justify-between rounded-lg border p-2.5"
                                style={{
                                    backgroundColor: 'var(--admin-card-subtle)',
                                    borderColor: 'var(--admin-border-subtle)',
                                }}
                            >
                                <span
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    DB Connection
                                </span>
                                <span
                                    className="font-semibold"
                                    style={{ color: 'var(--admin-accent)' }}
                                >
                                    {stats?.dbDriver || 'mysql'}
                                </span>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-lg border p-2.5"
                                style={{
                                    backgroundColor: 'var(--admin-card-subtle)',
                                    borderColor: 'var(--admin-border-subtle)',
                                }}
                            >
                                <span
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    Database Name
                                </span>
                                <span
                                    style={{
                                        color: 'var(--admin-text-primary)',
                                    }}
                                >
                                    {stats?.dbName || 'zytrixon'}
                                </span>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-lg border p-2.5"
                                style={{
                                    backgroundColor: 'var(--admin-card-subtle)',
                                    borderColor: 'var(--admin-border-subtle)',
                                }}
                            >
                                <span
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    PHP Runtime
                                </span>
                                <span
                                    style={{
                                        color: 'var(--admin-text-secondary)',
                                    }}
                                >
                                    v{stats?.phpVersion || '8.2+'}
                                </span>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-lg border p-2.5"
                                style={{
                                    backgroundColor: 'var(--admin-card-subtle)',
                                    borderColor: 'var(--admin-border-subtle)',
                                }}
                            >
                                <span
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    Laravel Framework
                                </span>
                                <span
                                    style={{
                                        color: 'var(--admin-text-secondary)',
                                    }}
                                >
                                    v{stats?.laravelVersion || '12.x'}
                                </span>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-lg border p-2.5"
                                style={{
                                    backgroundColor: 'var(--admin-card-subtle)',
                                    borderColor: 'var(--admin-border-subtle)',
                                }}
                            >
                                <span
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    Public Signup
                                </span>
                                <span className="font-semibold text-amber-500">
                                    Disabled (IAM Only)
                                </span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div
                                className="flex items-start gap-2.5 rounded-xl border p-3 text-xs"
                                style={{
                                    backgroundColor: 'var(--admin-card-subtle)',
                                    borderColor: 'var(--admin-border-subtle)',
                                    color: 'var(--admin-text-muted)',
                                }}
                            >
                                <Terminal
                                    className="mt-0.5 h-4 w-4 shrink-0"
                                    style={{
                                        color: 'var(--admin-text-secondary)',
                                    }}
                                />
                                <div>
                                    <span
                                        className="block font-semibold"
                                        style={{
                                            color: 'var(--admin-text-primary)',
                                        }}
                                    >
                                        Zero-Trust Isolation
                                    </span>
                                    <span>
                                        Non-admin accounts attempting to access
                                        /z-admin routes are automatically
                                        rerouted to customer portal.
                                    </span>
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
