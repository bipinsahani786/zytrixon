import React from 'react';
import { Globe, FileText, TrendingUp, Eye } from 'lucide-react';
import type { SeoPageKpis } from './types';

interface Props {
    kpis: SeoPageKpis;
}

const cards = [
    {
        key: 'total' as const,
        label: 'Total Pages',
        icon: Globe,
        color: '#6366f1',
        bg: 'rgba(99,102,241,0.12)',
    },
    {
        key: 'published' as const,
        label: 'Published',
        icon: Eye,
        color: '#10b981',
        bg: 'rgba(16,185,129,0.12)',
    },
    {
        key: 'draft' as const,
        label: 'Drafts',
        icon: FileText,
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.12)',
    },
    {
        key: 'avg_score' as const,
        label: 'Avg SEO Score',
        icon: TrendingUp,
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.12)',
        suffix: '/100',
    },
];

export default function SeoPageStatsCards({ kpis }: Props) {
    return (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {cards.map(({ key, label, icon: Icon, color, bg, suffix }) => (
                <div
                    key={key}
                    className="flex items-center gap-3 rounded-xl border p-4 transition-transform duration-200 hover:-translate-y-0.5"
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: bg }}
                    >
                        <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                        <p
                            className="text-xs font-medium"
                            style={{ color: 'var(--admin-text-muted)' }}
                        >
                            {label}
                        </p>
                        <p
                            className="text-xl font-bold tabular-nums"
                            style={{ color: 'var(--admin-text-primary)' }}
                        >
                            {kpis[key]}
                            {suffix && (
                                <span
                                    className="ml-0.5 text-xs font-normal"
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    {suffix}
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
