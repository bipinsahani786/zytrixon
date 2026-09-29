import React from 'react';
import {
    Search,
    RotateCcw,
    Plus,
    Filter,
    Users,
    ShieldCheck,
    Shield,
} from 'lucide-react';
import AdminDropdown from '@/components/admin/AdminDropdown';
import type { UserKpis } from './types';

interface UserFilterBarProps {
    search: string;
    onSearchChange: (value: string) => void;
    selectedRole: string;
    onRoleChange: (value: string) => void;
    kpis: UserKpis;
    onSubmit: (e: React.FormEvent) => void;
    onClear: () => void;
    onOpenCreate: () => void;
    hasActiveFilters: boolean;
}

export default function UserFilterBar({
    search,
    onSearchChange,
    selectedRole,
    onRoleChange,
    kpis,
    onSubmit,
    onClear,
    onOpenCreate,
    hasActiveFilters,
}: UserFilterBarProps) {
    const roleOptions = [
        {
            value: 'all',
            label: 'All Roles',
            badge: `${kpis.total}`,
            icon: Users,
        },
        {
            value: 'admin',
            label: 'Administrators',
            badge: `${kpis.admins}`,
            icon: ShieldCheck,
        },
        {
            value: 'customer',
            label: 'Customers',
            badge: `${kpis.customers}`,
            icon: Shield,
        },
    ];

    return (
        <div
            className="relative z-30 flex flex-col justify-between gap-4 rounded-2xl border p-4 backdrop-blur-sm transition-colors duration-200 lg:flex-row lg:items-center"
            style={{
                backgroundColor: 'var(--admin-card-bg)',
                borderColor: 'var(--admin-border)',
            }}
        >
            {/* Search and Filters */}
            <form
                onSubmit={onSubmit}
                className="flex flex-1 flex-wrap items-center gap-3"
            >
                {/* Search Bar */}
                <div className="relative min-w-[240px] flex-1 sm:max-w-md">
                    <Search
                        className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
                        style={{ color: 'var(--admin-text-dim)' }}
                    />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search users by name or email..."
                        className="w-full rounded-xl border py-2.5 pr-4 pl-9 text-xs transition-colors focus:outline-none"
                        style={{
                            backgroundColor: 'var(--admin-input-bg)',
                            borderColor: 'var(--admin-input-border)',
                            color: 'var(--admin-text-primary)',
                        }}
                    />
                </div>

                {/* Role Custom Dropdown */}
                <div className="min-w-[190px]">
                    <AdminDropdown
                        value={selectedRole}
                        onChange={(val) => {
                            onRoleChange(val);
                        }}
                        options={roleOptions}
                        placeholder="Select role..."
                    />
                </div>

                {/* Submit & Reset Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        type="submit"
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
                        style={{
                            backgroundColor: 'var(--admin-accent)',
                        }}
                    >
                        <Filter className="h-3.5 w-3.5" />
                        <span>Filter</span>
                    </button>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={onClear}
                            title="Reset filters"
                            className="cursor-pointer rounded-xl border p-2.5 transition-colors"
                            style={{
                                backgroundColor:
                                    'var(--admin-button-secondary-bg)',
                                borderColor: 'var(--admin-border)',
                                color: 'var(--admin-text-secondary)',
                            }}
                        >
                            <RotateCcw className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </form>

            {/* Create Action Button */}
            <button
                type="button"
                onClick={onOpenCreate}
                className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
                style={{
                    backgroundColor: 'var(--admin-accent)',
                }}
            >
                <Plus className="h-4 w-4" />
                <span>Add New User</span>
            </button>
        </div>
    );
}
