import React from 'react';
import {
    Search,
    RotateCcw,
    Plus,
    Filter,
    Tag,
    Layers,
    Newspaper,
} from 'lucide-react';
import AdminDropdown from '@/components/admin/AdminDropdown';
import type { BlogKpis } from './types';

interface BlogFilterBarProps {
    search: string;
    onSearchChange: (value: string) => void;
    selectedStatus: string;
    onStatusChange: (value: string) => void;
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
    availableCategories: string[];
    kpis: BlogKpis;
    onSubmit: (e: React.FormEvent) => void;
    onClear: () => void;
    onOpenCreate: () => void;
    hasActiveFilters: boolean;
}

export default function BlogFilterBar({
    search,
    onSearchChange,
    selectedStatus,
    onStatusChange,
    selectedCategory,
    onCategoryChange,
    availableCategories,
    kpis,
    onSubmit,
    onClear,
    onOpenCreate,
    hasActiveFilters,
}: BlogFilterBarProps) {
    const statusOptions = [
        { value: 'all', label: 'All Statuses', badge: `${kpis.total}` },
        { value: 'published', label: 'Published', badge: `${kpis.published}` },
        { value: 'draft', label: 'Drafts', badge: `${kpis.draft}` },
    ];

    const categoryOptions = [
        { value: 'all', label: 'All Categories', icon: Layers },
        ...availableCategories.map((cat) => ({
            value: cat,
            label: cat,
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
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div
                    className="flex items-center gap-2 font-mono text-xs font-semibold"
                    style={{ color: 'var(--admin-text-primary)' }}
                >
                    <Filter
                        className="h-3.5 w-3.5"
                        style={{ color: 'var(--admin-accent)' }}
                    />
                    <span>Filter & Search Blog Articles</span>
                </div>

                <button
                    type="button"
                    onClick={onOpenCreate}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
                    style={{
                        backgroundColor: 'var(--admin-accent)',
                    }}
                >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Write New Article</span>
                </button>
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
                        placeholder="Search by title, excerpt, category, author..."
                        className="w-full rounded-xl border py-2.5 pr-4 pl-9 text-xs transition-colors focus:outline-none"
                        style={{
                            backgroundColor: 'var(--admin-input-bg)',
                            borderColor: 'var(--admin-input-border)',
                            color: 'var(--admin-text-primary)',
                        }}
                    />
                </div>

                {/* Status Dropdown */}
                <div className="sm:col-span-3">
                    <AdminDropdown
                        value={selectedStatus}
                        onChange={onStatusChange}
                        options={statusOptions}
                        placeholder="Filter Status"
                    />
                </div>

                {/* Category Dropdown */}
                <div className="sm:col-span-3">
                    <AdminDropdown
                        value={selectedCategory}
                        onChange={onCategoryChange}
                        options={categoryOptions}
                        placeholder="Filter Category"
                    />
                </div>

                {/* Clear / Filter Actions */}
                <div className="flex items-center gap-2 sm:col-span-1">
                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={onClear}
                            title="Reset All Filters"
                            className="flex h-9 w-9 items-center justify-center rounded-xl border transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                            style={{
                                borderColor: 'var(--admin-border)',
                                color: 'var(--admin-text-muted)',
                            }}
                        >
                            <RotateCcw className="h-3.5 w-3.5" />
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
