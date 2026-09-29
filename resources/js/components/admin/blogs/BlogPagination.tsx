import React from 'react';
import { router } from '@inertiajs/react';
import AdminDropdown from '@/components/admin/AdminDropdown';
import type { PaginatedBlogs, BlogFilters } from './types';

interface BlogPaginationProps {
    blogs: PaginatedBlogs;
    filters?: BlogFilters;
    onPerPageChange?: (perPage: number) => void;
}

const PER_PAGE_OPTIONS = [
    { value: '5', label: '5 per page' },
    { value: '10', label: '10 per page' },
    { value: '25', label: '25 per page' },
    { value: '50', label: '50 per page' },
    { value: '100', label: '100 per page' },
];

export default function BlogPagination({
    blogs,
    filters,
    onPerPageChange,
}: BlogPaginationProps) {
    const handlePerPageChange = (val: string) => {
        const num = Number(val);
        if (onPerPageChange) {
            onPerPageChange(num);
            return;
        }

        router.get(
            '/z-admin/blogs',
            {
                search: filters?.search || undefined,
                status:
                    filters?.status && filters.status !== 'all'
                        ? filters.status
                        : undefined,
                category:
                    filters?.category && filters.category !== 'all'
                        ? filters.category
                        : undefined,
                per_page: num,
                page: 1,
            },
            { preserveState: true, preserveScroll: true },
        );
    };

    return (
        <div
            className="relative z-20 flex flex-col items-center justify-between gap-4 rounded-b-2xl border-t p-4 text-xs transition-colors duration-200 sm:flex-row"
            style={{
                borderColor: 'var(--admin-border)',
                color: 'var(--admin-text-secondary)',
            }}
        >
            {/* Left: Rows Per Page & Count */}
            <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                    <span
                        className="text-[11px] font-medium whitespace-nowrap"
                        style={{ color: 'var(--admin-text-muted)' }}
                    >
                        Show:
                    </span>
                    <AdminDropdown
                        value={String(blogs.per_page || 10)}
                        onChange={handlePerPageChange}
                        options={PER_PAGE_OPTIONS}
                        direction="up"
                        className="w-32"
                    />
                </div>

                <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />

                <div>
                    Showing{' '}
                    <span
                        className="font-semibold"
                        style={{ color: 'var(--admin-text-primary)' }}
                    >
                        {blogs.from || 0}
                    </span>{' '}
                    to{' '}
                    <span
                        className="font-semibold"
                        style={{ color: 'var(--admin-text-primary)' }}
                    >
                        {blogs.to || 0}
                    </span>{' '}
                    of{' '}
                    <span
                        className="font-semibold"
                        style={{ color: 'var(--admin-text-primary)' }}
                    >
                        {blogs.total}
                    </span>{' '}
                    articles
                </div>
            </div>

            {/* Right: Page Links */}
            {blogs.last_page > 1 && (
                <div className="flex flex-wrap items-center gap-1">
                    {blogs.links.map((link, idx) => (
                        <button
                            key={idx}
                            type="button"
                            disabled={!link.url}
                            onClick={() => {
                                if (link.url) {
                                    router.get(
                                        link.url,
                                        {},
                                        {
                                            preserveState: true,
                                            preserveScroll: true,
                                        },
                                    );
                                }
                            }}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
                                link.active
                                    ? 'font-bold text-white shadow-sm'
                                    : link.url
                                      ? 'cursor-pointer hover:opacity-80'
                                      : 'cursor-not-allowed opacity-30'
                            }`}
                            style={
                                link.active
                                    ? { backgroundColor: 'var(--admin-accent)' }
                                    : {
                                          backgroundColor:
                                              'var(--admin-button-secondary-bg)',
                                          color: 'var(--admin-text-secondary)',
                                      }
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
