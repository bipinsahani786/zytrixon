import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import type { SeoService, SeoPageFilters, SeoTemplate, SeoStatus } from './types';
import { TEMPLATE_META } from './types';

interface Props {
    filters: SeoPageFilters;
    services: SeoService[];
    search: string;
    onSearchChange: (v: string) => void;
    onServiceChange: (v: string) => void;
    onStatusChange: (v: string) => void;
    onTemplateChange: (v: string) => void;
    onSubmit: (e?: React.FormEvent) => void;
}

const SELECT_STYLE: React.CSSProperties = {
    backgroundColor: 'var(--admin-input-bg)',
    borderColor: 'var(--admin-border)',
    color: 'var(--admin-text-primary)',
};

export default function SeoPageFilterBar({
    services,
    search,
    filters,
    onSearchChange,
    onServiceChange,
    onStatusChange,
    onTemplateChange,
    onSubmit,
}: Props) {
    return (
        <form onSubmit={onSubmit} className="flex flex-wrap gap-2">
            {/* Search */}
            <div className="relative min-w-[200px] flex-1">
                <Search
                    size={14}
                    className="absolute top-1/2 left-3 -translate-y-1/2"
                    style={{ color: 'var(--admin-text-muted)' }}
                />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search by location, service or H1..."
                    className="h-9 w-full rounded-lg border pl-9 pr-3 text-sm outline-none focus:ring-1"
                    style={{
                        ...SELECT_STYLE,
                        // @ts-ignore
                        '--tw-ring-color': 'var(--admin-accent)',
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
                />
            </div>

            {/* Service filter */}
            <div className="relative">
                <select
                    value={filters.service}
                    onChange={(e) => onServiceChange(e.target.value)}
                    className="h-9 appearance-none rounded-lg border pr-8 pl-3 text-sm outline-none"
                    style={SELECT_STYLE}
                >
                    <option value="all">All Services</option>
                    {services.map((s) => (
                        <option key={s.id} value={String(s.id)}>
                            {s.title}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    size={12}
                    className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2"
                    style={{ color: 'var(--admin-text-muted)' }}
                />
            </div>

            {/* Status filter */}
            <div className="relative">
                <select
                    value={filters.status}
                    onChange={(e) => onStatusChange(e.target.value)}
                    className="h-9 appearance-none rounded-lg border pr-8 pl-3 text-sm outline-none"
                    style={SELECT_STYLE}
                >
                    <option value="all">All Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                </select>
                <ChevronDown
                    size={12}
                    className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2"
                    style={{ color: 'var(--admin-text-muted)' }}
                />
            </div>

            {/* Template filter */}
            <div className="relative">
                <select
                    value={filters.template}
                    onChange={(e) => onTemplateChange(e.target.value)}
                    className="h-9 appearance-none rounded-lg border pr-8 pl-3 text-sm outline-none"
                    style={SELECT_STYLE}
                >
                    <option value="all">All Templates</option>
                    {(Object.keys(TEMPLATE_META) as SeoTemplate[]).map((t) => (
                        <option key={t} value={t}>
                            {TEMPLATE_META[t].label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    size={12}
                    className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2"
                    style={{ color: 'var(--admin-text-muted)' }}
                />
            </div>

            <button
                type="submit"
                className="h-9 rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                    backgroundColor: 'var(--admin-accent)',
                    color: '#fff',
                }}
            >
                Filter
            </button>
        </form>
    );
}
