import React from 'react';
import { Search, RotateCcw, Filter, Tag, Layers } from 'lucide-react';
import AdminDropdown from '@/components/admin/AdminDropdown';
import type { ContactKpis } from './types';

interface ContactFilterBarProps {
    search: string;
    onSearchChange: (value: string) => void;
    selectedStatus: string;
    onStatusChange: (value: string) => void;
    selectedService: string;
    onServiceChange: (value: string) => void;
    availableServices: string[];
    kpis: ContactKpis;
    onSubmit: (e: React.FormEvent) => void;
    onClear: () => void;
    onOpenCreate?: () => void;
    hasActiveFilters: boolean;
}

export default function ContactFilterBar({
    search,
    onSearchChange,
    selectedStatus,
    onStatusChange,
    selectedService,
    onServiceChange,
    availableServices,
    kpis,
    onSubmit,
    onClear,
    hasActiveFilters,
}: ContactFilterBarProps) {
    const statusOptions = [
        { value: 'all', label: 'All Statuses', badge: `${kpis.total}` },
        { value: 'new', label: 'New', badge: `${kpis.new}` },
        { value: 'contacted', label: 'Contacted', badge: `${kpis.contacted}` },
        {
            value: 'in_progress',
            label: 'In Progress',
            badge: `${kpis.in_progress}`,
        },
        { value: 'resolved', label: 'Resolved', badge: `${kpis.resolved}` },
        { value: 'spam', label: 'Spam', badge: `${kpis.spam}` },
    ];

    const serviceOptions = [
        { value: 'all', label: 'All Services', icon: Layers },
        ...availableServices.map((svc) => ({
            value: svc,
            label: svc,
            icon: Tag,
        })),
    ];

    return (
        <div
            className="relative z-30 rounded-2xl border p-4 backdrop-blur-sm transition-colors duration-200"
            style={{
                backgroundColor: 'var(--admin-card-bg)',
                borderColor: 'var(--admin-border)',
            }}
        >
            <div
                className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold"
                style={{ color: 'var(--admin-text-primary)' }}
            >
                <Filter
                    className="h-3.5 w-3.5"
                    style={{ color: 'var(--admin-accent)' }}
                />
                <span>Filter & Search Leads</span>
            </div>

            <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-3 sm:grid-cols-12"
            >
                {/* Search Bar */}
                <div className="relative sm:col-span-5">
                    <Search
                        className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
                        style={{ color: 'var(--admin-text-dim)' }}
                    />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search by name, email, phone, message..."
                        className="w-full rounded-xl border py-2.5 pr-4 pl-9 text-xs transition-colors focus:outline-none"
                        style={{
                            backgroundColor: 'var(--admin-input-bg)',
                            borderColor: 'var(--admin-input-border)',
                            color: 'var(--admin-text-primary)',
                        }}
                    />
                </div>

                {/* Status Custom Dropdown */}
                <div className="sm:col-span-3">
                    <AdminDropdown
                        value={selectedStatus}
                        onChange={onStatusChange}
                        options={statusOptions}
                        placeholder="Filter status..."
                    />
                </div>

                {/* Service Custom Dropdown */}
                <div className="sm:col-span-2">
                    <AdminDropdown
                        value={selectedService}
                        onChange={onServiceChange}
                        options={serviceOptions}
                        placeholder="Filter service..."
                    />
                </div>

                {/* Filter & Reset Buttons */}
                <div className="flex items-center gap-2 sm:col-span-2">
                    <button
                        type="submit"
                        className="flex-1 cursor-pointer rounded-xl px-3 py-2.5 text-center text-xs font-semibold transition-colors hover:opacity-90 active:scale-95"
                        style={{
                            backgroundColor: 'var(--admin-button-secondary-bg)',
                            borderColor: 'var(--admin-border)',
                            borderWidth: 1,
                            color: 'var(--admin-text-primary)',
                        }}
                    >
                        Filter
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
        </div>
    );
}
