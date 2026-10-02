import React from 'react';
import { TrendingUp, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import type { SeoPageFormData } from './types';

interface Props {
    form: SeoPageFormData;
    locationName?: string;
}

interface ScoreItem {
    label: string;
    points: number;
    earned: number;
    tip: string;
}

function calcScore(form: SeoPageFormData, locationName: string): ScoreItem[] {
    const titleLen = form.meta_title.length;
    const descLen = form.meta_description.length;
    const h1HasLocation = locationName
        ? form.h1.toLowerCase().includes(locationName.toLowerCase())
        : false;
    const descHasLocation = locationName
        ? form.meta_description.toLowerCase().includes(locationName.toLowerCase())
        : false;
    const heroWords = form.hero_description.split(/\s+/).filter(Boolean).length;

    return [
        {
            label: 'H1 Tag present',
            points: 15,
            earned: form.h1.trim() ? 15 : 0,
            tip: 'Write a compelling H1 that includes your focus keyword',
        },
        {
            label: `Meta title length (${titleLen} chars)`,
            points: 15,
            earned:
                titleLen >= 50 && titleLen <= 60 ? 15 :
                titleLen >= 40 && titleLen <= 70 ? 8 : 0,
            tip: 'Ideal meta title: 50–60 characters',
        },
        {
            label: `Meta description length (${descLen} chars)`,
            points: 20,
            earned:
                descLen >= 140 && descLen <= 160 ? 20 :
                descLen >= 120 && descLen <= 180 ? 10 : 0,
            tip: 'Ideal meta description: 140–160 characters',
        },
        {
            label: 'Location in H1',
            points: 15,
            earned: h1HasLocation ? 15 : 0,
            tip: `Include "${locationName || 'location name'}" naturally in your H1`,
        },
        {
            label: 'Location in meta description',
            points: 10,
            earned: descHasLocation ? 10 : 0,
            tip: 'Mention the location in your meta description',
        },
        {
            label: `Hero description (${heroWords} words)`,
            points: 10,
            earned: heroWords > 50 ? 10 : heroWords > 20 ? 5 : 0,
            tip: 'Write at least 50 words for the hero description',
        },
        {
            label: 'Content sections added',
            points: 15,
            earned: form.sections.length >= 2 ? 15 : form.sections.length === 1 ? 7 : 0,
            tip: 'Add at least 2 content sections (Why Us, FAQ, Process, etc.)',
        },
    ];
}

function getScoreColor(score: number) {
    if (score >= 80) return '#10b981';
    if (score >= 50) return '#f59e0b';
    return '#ef4444';
}

function getScoreLabel(score: number) {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Needs Work';
    return 'Poor';
}

export default function SeoScorePanel({ form, locationName = '' }: Props) {
    const items = calcScore(form, locationName);
    const total = items.reduce((s, i) => s + i.earned, 0);
    const max = items.reduce((s, i) => s + i.points, 0);
    const color = getScoreColor(total);
    const circumference = 2 * Math.PI * 28;

    return (
        <div
            className="sticky top-4 rounded-xl border p-4"
            style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-bg)' }}
        >
            {/* Score Ring */}
            <div className="flex items-center gap-4 mb-4">
                <div className="relative h-20 w-20 shrink-0">
                    <svg className="-rotate-90" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
                        <circle
                            cx="32" cy="32" r="28"
                            stroke={color}
                            strokeWidth="5"
                            strokeDasharray={`${(total / max) * circumference} ${circumference}`}
                            strokeLinecap="round"
                            style={{ transition: 'stroke-dasharray 0.5s ease' }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold tabular-nums" style={{ color }}>
                            {total}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                            /{max}
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-1.5">
                        <TrendingUp size={13} style={{ color }} />
                        <span className="text-sm font-semibold" style={{ color: 'var(--admin-text-primary)' }}>
                            SEO Score
                        </span>
                    </div>
                    <p className="mt-0.5 text-base font-bold" style={{ color }}>
                        {getScoreLabel(total)}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                        Updates live as you type
                    </p>
                </div>
            </div>

            {/* Score breakdown */}
            <div className="space-y-2">
                {items.map((item, i) => {
                    const pct = item.points > 0 ? item.earned / item.points : 0;
                    const itemColor = pct === 1 ? '#10b981' : pct > 0 ? '#f59e0b' : '#ef4444';
                    return (
                        <div key={i} className="group relative">
                            <div className="flex items-center gap-2">
                                {pct === 1 ? (
                                    <CheckCircle2 size={12} className="shrink-0 text-emerald-400" />
                                ) : pct > 0 ? (
                                    <AlertCircle size={12} className="shrink-0 text-amber-400" />
                                ) : (
                                    <XCircle size={12} className="shrink-0 text-red-400/60" />
                                )}
                                <span
                                    className="flex-1 text-xs truncate"
                                    style={{ color: 'var(--admin-text-primary)', opacity: pct === 0 ? 0.55 : 1 }}
                                >
                                    {item.label}
                                </span>
                                <span className="text-xs font-medium tabular-nums" style={{ color: itemColor }}>
                                    {item.earned}/{item.points}
                                </span>
                            </div>
                            {/* Tooltip */}
                            {pct < 1 && (
                                <div
                                    className="pointer-events-none absolute left-0 -top-8 z-10 hidden w-48 rounded-md border px-2 py-1.5 text-xs shadow-lg group-hover:block"
                                    style={{
                                        backgroundColor: 'var(--admin-card-subtle)',
                                        borderColor: 'var(--admin-border)',
                                        color: 'var(--admin-text-primary)',
                                    }}
                                >
                                    💡 {item.tip}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export { calcScore };
