import React from 'react';
import {
    Pencil,
    Trash2,
    ExternalLink,
    Star,
    Eye,
    Clock,
    BookOpen,
    Sparkles,
} from 'lucide-react';
import type { BlogPost } from './types';

interface BlogTableProps {
    blogs: BlogPost[];
    selectedIds: number[];
    isAllSelected: boolean;
    onToggleSelectAll: () => void;
    onToggleSelectOne: (id: number) => void;
    onEdit: (blog: BlogPost) => void;
    onDeleteSingle: (blog: BlogPost) => void;
    onToggleFeatured: (blog: BlogPost) => void;
    onClearFilters: () => void;
    hasActiveFilters: boolean;
}

export default function BlogTable({
    blogs,
    selectedIds,
    isAllSelected,
    onToggleSelectAll,
    onToggleSelectOne,
    onEdit,
    onDeleteSingle,
    onToggleFeatured,
    onClearFilters,
    hasActiveFilters,
}: BlogTableProps) {
    const getCategoryBadgeClass = (category: string) => {
        switch (category) {
            case 'Engineering':
                return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'AI & Automation':
                return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
            case 'Design UI/UX':
                return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
            case 'Cloud & DevOps':
                return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
            case 'Business Strategy':
                return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
            default:
                return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
        }
    };

    return (
        <div className="overflow-x-auto rounded-t-2xl">
            <table className="w-full text-left text-xs">
                <thead>
                    <tr
                        className="border-b font-mono"
                        style={{
                            backgroundColor: 'var(--admin-table-head-bg)',
                            borderColor: 'var(--admin-table-border)',
                            color: 'var(--admin-text-secondary)',
                        }}
                    >
                        {/* Checkbox */}
                        <th className="w-10 px-4 py-3">
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={onToggleSelectAll}
                                className="h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500 dark:border-neutral-700"
                            />
                        </th>

                        <th className="px-4 py-3 font-medium">
                            Article & Snippet
                        </th>
                        <th className="px-3 py-3 font-medium">Category</th>
                        <th className="px-3 py-3 font-medium">Status</th>
                        <th className="px-3 py-3 font-medium">Author & Date</th>
                        <th className="px-3 py-3 font-medium">Engagement</th>
                        <th className="px-3 py-3 text-center font-medium">
                            Featured
                        </th>
                        <th className="px-4 py-3 text-right font-medium">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody
                    className="divide-y"
                    style={{ borderColor: 'var(--admin-table-border)' }}
                >
                    {blogs.length === 0 ? (
                        <tr>
                            <td colSpan={8} className="py-16 text-center">
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                                        style={{
                                            backgroundColor:
                                                'var(--admin-button-secondary-bg)',
                                            borderColor: 'var(--admin-border)',
                                            color: 'var(--admin-text-dim)',
                                        }}
                                    >
                                        <BookOpen className="h-6 w-6" />
                                    </div>
                                    <div
                                        className="font-heading text-sm font-semibold"
                                        style={{
                                            color: 'var(--admin-text-primary)',
                                        }}
                                    >
                                        No Blog Articles Found
                                    </div>
                                    <p
                                        className="max-w-sm text-xs"
                                        style={{
                                            color: 'var(--admin-text-muted)',
                                        }}
                                    >
                                        {hasActiveFilters
                                            ? 'No articles match your active filter criteria. Try adjusting or clearing filters.'
                                            : 'No blog articles exist in the database yet. Write your first article to publish.'}
                                    </p>
                                    {hasActiveFilters && (
                                        <button
                                            type="button"
                                            onClick={onClearFilters}
                                            className="mt-2 rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                            style={{
                                                borderColor:
                                                    'var(--admin-border)',
                                                color: 'var(--admin-text-secondary)',
                                            }}
                                        >
                                            Clear All Filters
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ) : (
                        blogs.map((blog) => {
                            const isSelected = selectedIds.includes(blog.id);

                            return (
                                <tr
                                    key={blog.id}
                                    className={`transition-colors duration-150 ${
                                        isSelected
                                            ? 'bg-blue-500/5 dark:bg-blue-500/10'
                                            : 'hover:bg-neutral-500/5'
                                    }`}
                                >
                                    {/* Checkbox */}
                                    <td className="px-4 py-3.5">
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() =>
                                                onToggleSelectOne(blog.id)
                                            }
                                            className="h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500 dark:border-neutral-700"
                                        />
                                    </td>

                                    {/* Article (Thumb + Title + Slug) */}
                                    <td className="max-w-md px-4 py-3.5">
                                        <div className="flex items-start gap-3">
                                            {/* Thumbnail */}
                                            <div
                                                className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border"
                                                style={{
                                                    borderColor:
                                                        'var(--admin-border)',
                                                    backgroundColor:
                                                        'var(--admin-button-secondary-bg)',
                                                }}
                                            >
                                                {blog.featured_image ? (
                                                    <img
                                                        src={
                                                            blog.featured_image
                                                        }
                                                        alt={blog.title}
                                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center text-neutral-400">
                                                        <BookOpen className="h-5 w-5 opacity-40" />
                                                    </div>
                                                )}
                                                {blog.is_featured && (
                                                    <div
                                                        className="absolute top-1 right-1 rounded-full bg-purple-500 p-0.5 text-white shadow-sm"
                                                        title="Featured Article"
                                                    >
                                                        <Sparkles className="h-2.5 w-2.5" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Details */}
                                            <div className="min-w-0 flex-1">
                                                <div
                                                    className="line-clamp-1 font-heading text-xs font-bold transition-colors hover:text-blue-500"
                                                    style={{
                                                        color: 'var(--admin-text-primary)',
                                                    }}
                                                >
                                                    {blog.title}
                                                </div>
                                                <div
                                                    className="mt-0.5 line-clamp-1 font-mono text-[10px]"
                                                    style={{
                                                        color: 'var(--admin-text-dim)',
                                                    }}
                                                >
                                                    /{blog.slug}
                                                </div>
                                                {blog.excerpt && (
                                                    <p
                                                        className="mt-1 line-clamp-1 text-[11px]"
                                                        style={{
                                                            color: 'var(--admin-text-muted)',
                                                        }}
                                                    >
                                                        {blog.excerpt}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </td>

                                    {/* Category */}
                                    <td className="px-3 py-3.5 whitespace-nowrap">
                                        <span
                                            className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${getCategoryBadgeClass(
                                                blog.category,
                                            )}`}
                                        >
                                            {blog.category}
                                        </span>
                                    </td>

                                    {/* Status */}
                                    <td className="px-3 py-3.5 whitespace-nowrap">
                                        {blog.status === 'published' ? (
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-500">
                                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                                                Published
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-500">
                                                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                                                Draft
                                            </span>
                                        )}
                                    </td>

                                    {/* Author & Date */}
                                    <td className="px-3 py-3.5 whitespace-nowrap">
                                        <div
                                            className="font-medium"
                                            style={{
                                                color: 'var(--admin-text-primary)',
                                            }}
                                        >
                                            {blog.author_name}
                                        </div>
                                        <div
                                            className="mt-0.5 font-mono text-[10px]"
                                            style={{
                                                color: 'var(--admin-text-muted)',
                                            }}
                                        >
                                            {blog.published_at
                                                ? new Date(
                                                      blog.published_at,
                                                  ).toLocaleDateString(
                                                      'en-US',
                                                      {
                                                          month: 'short',
                                                          day: 'numeric',
                                                          year: 'numeric',
                                                      },
                                                  )
                                                : new Date(
                                                      blog.created_at,
                                                  ).toLocaleDateString(
                                                      'en-US',
                                                      {
                                                          month: 'short',
                                                          day: 'numeric',
                                                          year: 'numeric',
                                                      },
                                                  )}
                                        </div>
                                    </td>

                                    {/* Engagement (Views & Read time) */}
                                    <td className="px-3 py-3.5 font-mono text-[11px] whitespace-nowrap">
                                        <div className="flex items-center gap-1 text-neutral-400">
                                            <Eye className="h-3 w-3" />
                                            <span>
                                                {blog.views_count.toLocaleString()}{' '}
                                                views
                                            </span>
                                        </div>
                                        {blog.read_time && (
                                            <div className="mt-0.5 flex items-center gap-1 text-[10px] text-neutral-400 opacity-75">
                                                <Clock className="h-2.5 w-2.5" />
                                                <span>{blog.read_time}</span>
                                            </div>
                                        )}
                                    </td>

                                    {/* Toggle Featured */}
                                    <td className="px-3 py-3.5 text-center">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onToggleFeatured(blog)
                                            }
                                            title={
                                                blog.is_featured
                                                    ? 'Unpin from Featured'
                                                    : 'Pin to Featured'
                                            }
                                            className={`inline-flex h-8 w-8 items-center justify-center rounded-xl border transition-all ${
                                                blog.is_featured
                                                    ? 'border-purple-500/30 bg-purple-500/20 text-purple-400 shadow-sm'
                                                    : 'border-transparent text-neutral-400 hover:border-neutral-700 hover:bg-neutral-800'
                                            }`}
                                        >
                                            <Star
                                                className={`h-4 w-4 ${
                                                    blog.is_featured
                                                        ? 'fill-purple-400'
                                                        : ''
                                                }`}
                                            />
                                        </button>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-1">
                                            <a
                                                href={`/blog/${blog.slug}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                title="View Live Article"
                                                className="flex h-8 w-8 items-center justify-center rounded-xl border transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                                style={{
                                                    borderColor:
                                                        'var(--admin-border)',
                                                    color: 'var(--admin-text-secondary)',
                                                }}
                                            >
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>

                                            <button
                                                type="button"
                                                onClick={() => onEdit(blog)}
                                                title="Edit Article"
                                                className="flex h-8 w-8 items-center justify-center rounded-xl border transition-colors hover:bg-blue-500/10 hover:text-blue-500"
                                                style={{
                                                    borderColor:
                                                        'var(--admin-border)',
                                                    color: 'var(--admin-text-secondary)',
                                                }}
                                            >
                                                <Pencil className="h-3.5 w-3.5" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onDeleteSingle(blog)
                                                }
                                                title="Delete Article"
                                                className="flex h-8 w-8 items-center justify-center rounded-xl border transition-colors hover:bg-red-500/10 hover:text-red-500"
                                                style={{
                                                    borderColor:
                                                        'var(--admin-border)',
                                                    color: 'var(--admin-text-secondary)',
                                                }}
                                            >
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
}
