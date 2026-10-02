import React from 'react';
import { router } from '@inertiajs/react';
import {
    Pencil, Trash2, ExternalLink, Eye, FileText,
    ChevronLeft, ChevronRight, CheckCheck
} from 'lucide-react';
import type { SeoPageRecord, PaginatedSeoPages } from './types';
import { TEMPLATE_META } from './types';

interface Props {
    pages: PaginatedSeoPages;
    selectedIds: number[];
    onSelectAll: (allIds: number[]) => void;
    onToggleSelect: (id: number) => void;
    onEdit: (page: SeoPageRecord) => void;
    onDelete: (page: SeoPageRecord) => void;
}

function ScoreBadge({ score }: { score: number }) {
    const color =
        score >= 80 ? '#10b981' :
        score >= 50 ? '#f59e0b' :
        '#ef4444';
    return (
        <div className="flex items-center gap-1.5">
            <div className="relative h-6 w-6">
                <svg className="-rotate-90" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                    <circle
                        cx="12" cy="12" r="10"
                        stroke={color}
                        strokeWidth="3"
                        strokeDasharray={`${(score / 100) * 62.83} 62.83`}
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <span className="text-xs font-semibold tabular-nums" style={{ color }}>
                {score}
            </span>
        </div>
    );
}

export default function SeoPageTable({
    pages,
    selectedIds,
    onSelectAll,
    onToggleSelect,
    onEdit,
    onDelete,
}: Props) {
    const allSelected =
        pages.data.length > 0 &&
        pages.data.every((p) => selectedIds.includes(p.id));

    return (
        <div className="overflow-hidden rounded-xl border" style={{ borderColor: 'var(--admin-border)' }}>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr
                            className="border-b text-left text-xs uppercase tracking-wider"
                            style={{
                                backgroundColor: 'var(--admin-card-subtle)',
                                borderColor: 'var(--admin-border)',
                                color: 'var(--admin-text-muted)',
                            }}
                        >
                            <th className="w-10 px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={allSelected}
                                    onChange={() =>
                                        allSelected
                                            ? onSelectAll([])
                                            : onSelectAll(pages.data.map((p) => p.id))
                                    }
                                    className="rounded"
                                />
                            </th>
                            <th className="px-4 py-3">Location & Service</th>
                            <th className="px-4 py-3">H1 / Meta Title</th>
                            <th className="px-4 py-3">Template</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">SEO Score</th>
                            <th className="px-4 py-3">Last Updated</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pages.data.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={8}
                                    className="px-6 py-12 text-center"
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    No SEO pages found. Create your first location page!
                                </td>
                            </tr>
                        ) : (
                            pages.data.map((page) => {
                                const tmpl = TEMPLATE_META[page.template];
                                const isSelected = selectedIds.includes(page.id);
                                const liveUrl = `/services/${page.service?.slug}/in/${page.location?.slug}`;

                                return (
                                    <tr
                                        key={page.id}
                                        className="border-b transition-colors duration-150"
                                        style={{
                                            backgroundColor: isSelected
                                                ? 'rgba(99,102,241,0.06)'
                                                : 'var(--admin-card-bg)',
                                            borderColor: 'var(--admin-border)',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isSelected)
                                                (e.currentTarget as HTMLTableRowElement).style.backgroundColor =
                                                    'var(--admin-card-hover, rgba(255,255,255,0.03))';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isSelected)
                                                (e.currentTarget as HTMLTableRowElement).style.backgroundColor =
                                                    'var(--admin-card-bg)';
                                        }}
                                    >
                                        {/* Checkbox */}
                                        <td className="px-4 py-3">
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => onToggleSelect(page.id)}
                                                className="rounded"
                                            />
                                        </td>

                                        {/* Location & Service */}
                                        <td className="px-4 py-3">
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--admin-text-primary)' }}
                                            >
                                                📍 {page.location?.name}
                                            </div>
                                            <div
                                                className="mt-0.5 text-xs"
                                                style={{ color: 'var(--admin-text-muted)' }}
                                            >
                                                {page.service?.title}
                                            </div>
                                        </td>

                                        {/* H1 / Meta Title */}
                                        <td className="max-w-[220px] px-4 py-3">
                                            <div
                                                className="truncate text-xs font-medium"
                                                style={{ color: 'var(--admin-text-primary)' }}
                                                title={page.h1 ?? ''}
                                            >
                                                {page.h1 || (
                                                    <span style={{ color: 'var(--admin-text-muted)' }}>
                                                        No H1
                                                    </span>
                                                )}
                                            </div>
                                            <div
                                                className="mt-0.5 truncate text-xs"
                                                style={{ color: 'var(--admin-text-muted)' }}
                                                title={page.meta_title ?? ''}
                                            >
                                                {page.meta_title || '—'}
                                            </div>
                                        </td>

                                        {/* Template */}
                                        <td className="px-4 py-3">
                                            <span
                                                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                                                style={{
                                                    backgroundColor: tmpl.color + '22',
                                                    color: tmpl.color,
                                                }}
                                            >
                                                {tmpl.label}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-4 py-3">
                                            {page.status === 'published' ? (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                                                    <CheckCheck size={10} /> Live
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                                                    <FileText size={10} /> Draft
                                                </span>
                                            )}
                                        </td>

                                        {/* SEO Score */}
                                        <td className="px-4 py-3">
                                            <ScoreBadge score={page.seo_score} />
                                        </td>

                                        {/* Last updated */}
                                        <td className="px-4 py-3 text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                                            {new Date(page.updated_at).toLocaleDateString('en-IN', {
                                                day: '2-digit', month: 'short', year: 'numeric',
                                            })}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-1">
                                                <a
                                                    href={liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-7 w-7 items-center justify-center rounded-lg border transition-colors hover:bg-indigo-500/10 hover:border-indigo-500/40"
                                                    style={{ borderColor: 'var(--admin-border)' }}
                                                    title={`View live page: ${liveUrl}`}
                                                >
                                                    <ExternalLink size={13} className="text-indigo-400" />
                                                </a>
                                                <button
                                                    onClick={() => onEdit(page)}
                                                    className="flex h-7 w-7 items-center justify-center rounded-lg border transition-colors hover:bg-white/5"
                                                    style={{ borderColor: 'var(--admin-border)' }}
                                                    title="Edit"
                                                >
                                                    <Pencil size={13} style={{ color: 'var(--admin-accent)' }} />
                                                </button>
                                                <button
                                                    onClick={() => onDelete(page)}
                                                    className="flex h-7 w-7 items-center justify-center rounded-lg border transition-colors hover:bg-red-500/10"
                                                    style={{ borderColor: 'var(--admin-border)' }}
                                                    title="Delete"
                                                >
                                                    <Trash2 size={13} className="text-red-400" />
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

            {/* Pagination */}
            {pages.last_page > 1 && (
                <div
                    className="flex items-center justify-between border-t px-4 py-3"
                    style={{
                        borderColor: 'var(--admin-border)',
                        backgroundColor: 'var(--admin-card-subtle)',
                    }}
                >
                    <span className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                        Showing {pages.from}–{pages.to} of {pages.total} pages
                    </span>
                    <div className="flex items-center gap-1">
                        {pages.links.map((link, i) => {
                            if (link.label.includes('Previous')) {
                                return (
                                    <button
                                        key={i}
                                        disabled={!link.url}
                                        onClick={() => link.url && router.get(link.url)}
                                        className="flex h-7 w-7 items-center justify-center rounded-lg border text-xs disabled:opacity-40"
                                        style={{ borderColor: 'var(--admin-border)', color: 'var(--admin-text-muted)' }}
                                    >
                                        <ChevronLeft size={13} />
                                    </button>
                                );
                            }
                            if (link.label.includes('Next')) {
                                return (
                                    <button
                                        key={i}
                                        disabled={!link.url}
                                        onClick={() => link.url && router.get(link.url)}
                                        className="flex h-7 w-7 items-center justify-center rounded-lg border text-xs disabled:opacity-40"
                                        style={{ borderColor: 'var(--admin-border)', color: 'var(--admin-text-muted)' }}
                                    >
                                        <ChevronRight size={13} />
                                    </button>
                                );
                            }
                            return (
                                <button
                                    key={i}
                                    onClick={() => link.url && router.get(link.url)}
                                    className="flex h-7 min-w-[28px] items-center justify-center rounded-lg border px-1 text-xs transition-colors"
                                    style={{
                                        borderColor: link.active ? 'var(--admin-accent)' : 'var(--admin-border)',
                                        backgroundColor: link.active ? 'var(--admin-accent)' : 'transparent',
                                        color: link.active ? '#fff' : 'var(--admin-text-muted)',
                                    }}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
