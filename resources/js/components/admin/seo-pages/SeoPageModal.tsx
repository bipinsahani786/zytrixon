import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
    X, Sparkles, Wand2, Plus, Trash2, Pencil,
    Loader2, ChevronDown, ChevronUp, Eye, Save,
    AlertTriangle, ExternalLink
} from 'lucide-react';
import { apiFetch } from '@/lib/api-fetch';
import type {
    SeoPageFormData, SeoService, SeoLocation, SeoTemplate,
    SeoPageRecord, SeoSection
} from './types';
import { TEMPLATE_META } from './types';
import SeoScorePanel from './SeoScorePanel';

interface Props {
    isOpen: boolean;
    mode: 'create' | 'edit';
    formData: SeoPageFormData;
    services: SeoService[];
    locations: SeoLocation[];
    editingPage?: SeoPageRecord | null;
    onChange: (field: keyof SeoPageFormData, value: unknown) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
}

const INPUT_STYLE: React.CSSProperties = {
    backgroundColor: 'var(--admin-input-bg)',
    borderColor: 'var(--admin-border)',
    color: 'var(--admin-text-primary)',
};

const LABEL_STYLE: React.CSSProperties = {
    color: 'var(--admin-text-muted)',
};

// ---------- Sub-components ----------

function TabBtn({
    active, children, onClick,
}: { active: boolean; children: React.ReactNode; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-4 py-2 text-sm font-medium transition-colors border-b-2"
            style={{
                borderColor: active ? 'var(--admin-accent)' : 'transparent',
                color: active ? 'var(--admin-accent)' : 'var(--admin-text-muted)',
            }}
        >
            {children}
        </button>
    );
}

function SectionEditor({
    sections,
    onChange,
}: {
    sections: SeoSection[];
    onChange: (s: SeoSection[]) => void;
}) {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const addSection = () => {
        const newSection: SeoSection = {
            type: 'custom',
            heading: 'New Section',
            content: '',
        };
        const updated = [...sections, newSection];
        onChange(updated);
        setOpenIdx(updated.length - 1);
    };

    const removeSection = (idx: number) => {
        onChange(sections.filter((_, i) => i !== idx));
        setOpenIdx(null);
    };

    const updateSection = (idx: number, field: keyof SeoSection, value: unknown) => {
        const updated = sections.map((s, i) =>
            i === idx ? { ...s, [field]: value } : s
        );
        onChange(updated);
    };

    return (
        <div className="space-y-2">
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className="rounded-lg border overflow-hidden"
                    style={{ borderColor: 'var(--admin-border)' }}
                >
                    <button
                        type="button"
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        className="flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors hover:bg-white/3"
                        style={{ backgroundColor: 'var(--admin-card-subtle)' }}
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="inline-block rounded px-1.5 py-0.5 text-[10px] font-medium uppercase"
                                style={{ backgroundColor: 'rgba(99,102,241,0.15)', color: '#818cf8' }}
                            >
                                {section.type}
                            </span>
                            <span className="text-sm font-medium" style={{ color: 'var(--admin-text-primary)' }}>
                                {section.heading || 'Untitled'}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); removeSection(idx); }}
                                className="rounded p-1 hover:bg-red-500/15"
                            >
                                <Trash2 size={12} className="text-red-400" />
                            </button>
                            {openIdx === idx ? <ChevronUp size={14} style={{ color: 'var(--admin-text-muted)' }} /> : <ChevronDown size={14} style={{ color: 'var(--admin-text-muted)' }} />}
                        </div>
                    </button>

                    {openIdx === idx && (
                        <div className="p-4 space-y-3" style={{ backgroundColor: 'var(--admin-card-bg)' }}>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="mb-1 block text-xs" style={LABEL_STYLE}>Type</label>
                                    <select
                                        value={section.type}
                                        onChange={(e) => updateSection(idx, 'type', e.target.value)}
                                        className="w-full rounded-lg border px-3 py-1.5 text-sm outline-none"
                                        style={INPUT_STYLE}
                                    >
                                        <option value="why_us">Why Us</option>
                                        <option value="local_context">Local Context</option>
                                        <option value="process">Process Steps</option>
                                        <option value="faq">FAQ</option>
                                        <option value="custom">Custom</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs" style={LABEL_STYLE}>Heading</label>
                                    <input
                                        type="text"
                                        value={section.heading}
                                        onChange={(e) => updateSection(idx, 'heading', e.target.value)}
                                        className="w-full rounded-lg border px-3 py-1.5 text-sm outline-none"
                                        style={INPUT_STYLE}
                                        placeholder="Section heading..."
                                    />
                                </div>
                            </div>

                            {(section.type === 'local_context' || section.type === 'custom') && (
                                <div>
                                    <label className="mb-1 block text-xs" style={LABEL_STYLE}>Content</label>
                                    <textarea
                                        value={section.content ?? ''}
                                        onChange={(e) => updateSection(idx, 'content', e.target.value)}
                                        rows={4}
                                        className="w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none"
                                        style={INPUT_STYLE}
                                        placeholder="Section content..."
                                    />
                                </div>
                            )}

                            {section.type === 'why_us' && (
                                <>
                                    <div>
                                        <label className="mb-1 block text-xs" style={LABEL_STYLE}>Intro paragraph</label>
                                        <textarea
                                            value={section.content ?? ''}
                                            onChange={(e) => updateSection(idx, 'content', e.target.value)}
                                            rows={3}
                                            className="w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none"
                                            style={INPUT_STYLE}
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-xs" style={LABEL_STYLE}>
                                            Bullet points (one per line)
                                        </label>
                                        <textarea
                                            value={(section.points ?? []).join('\n')}
                                            onChange={(e) =>
                                                updateSection(idx, 'points', e.target.value.split('\n'))
                                            }
                                            rows={4}
                                            className="w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none font-mono"
                                            style={INPUT_STYLE}
                                            placeholder="Point 1&#10;Point 2&#10;Point 3"
                                        />
                                    </div>
                                </>
                            )}

                            {section.type === 'process' && (
                                <div>
                                    <label className="mb-1 block text-xs" style={LABEL_STYLE}>
                                        Steps (JSON array or enter as Title: Description, one per line)
                                    </label>
                                    <textarea
                                        value={(section.steps ?? []).map((s) => `${s.title}: ${s.desc}`).join('\n')}
                                        onChange={(e) => {
                                            const steps = e.target.value.split('\n').map((line) => {
                                                const [title, ...rest] = line.split(':');
                                                return { title: title?.trim() ?? '', desc: rest.join(':').trim() };
                                            }).filter((s) => s.title);
                                            updateSection(idx, 'steps', steps);
                                        }}
                                        rows={4}
                                        className="w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none font-mono"
                                        style={INPUT_STYLE}
                                        placeholder="Discovery: We analyze your requirements&#10;Design: We create wireframes&#10;Development: We build your solution"
                                    />
                                </div>
                            )}

                            {section.type === 'faq' && (
                                <div>
                                    <label className="mb-1 block text-xs" style={LABEL_STYLE}>
                                        FAQ items (format: Q? :: Answer)
                                    </label>
                                    <textarea
                                        value={(section.items ?? []).map((item) => `${item.q} :: ${item.a}`).join('\n')}
                                        onChange={(e) => {
                                            const items = e.target.value.split('\n').map((line) => {
                                                const [q, ...rest] = line.split(' :: ');
                                                return { q: q?.trim() ?? '', a: rest.join(' :: ').trim() };
                                            }).filter((item) => item.q);
                                            updateSection(idx, 'items', items);
                                        }}
                                        rows={5}
                                        className="w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none font-mono"
                                        style={INPUT_STYLE}
                                        placeholder="What is your cost? :: Starting from ₹50,000&#10;How long does it take? :: 4-8 weeks"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}

            <button
                type="button"
                onClick={addSection}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed py-2.5 text-sm transition-colors hover:bg-white/3"
                style={{ borderColor: 'var(--admin-border)', color: 'var(--admin-text-muted)' }}
            >
                <Plus size={14} />
                Add Section
            </button>
        </div>
    );
}

// ---------- Main Modal ----------

export default function SeoPageModal({
    isOpen, mode, formData, services, locations,
    editingPage, onChange, onSubmit, onClose,
}: Props) {
    const [tab, setTab] = useState<'basic' | 'content' | 'seo'>('basic');
    const [aiLoading, setAiLoading] = useState(false);
    const [humanizeLoading, setHumanizeLoading] = useState(false);
    const [aiError, setAiError] = useState<string | null>(null);
    const [aiSuccessMsg, setAiSuccessMsg] = useState<string | null>(null);
    const [highlightMissing, setHighlightMissing] = useState(false);

    const selectedLocation = locations.find((l) => l.id === formData.location_id);
    const selectedService = services.find((s) => s.id === formData.service_id);

    // Auto-generate focus keyword
    useEffect(() => {
        if (selectedService && selectedLocation && !formData.focus_keyword) {
            onChange('focus_keyword', `${selectedService.title} in ${selectedLocation.name}`);
        }
    }, [formData.service_id, formData.location_id]);

    // Calculate live SEO score
    const calcLiveScore = useCallback(() => {
        let score = 0;
        const h1 = formData.h1;
        const titleLen = formData.meta_title.length;
        const descLen = formData.meta_description.length;
        const locName = selectedLocation?.name ?? '';

        if (h1.trim()) score += 15;
        if (titleLen >= 50 && titleLen <= 60) score += 15;
        else if (titleLen >= 40 && titleLen <= 70) score += 8;
        if (descLen >= 140 && descLen <= 160) score += 20;
        else if (descLen >= 120 && descLen <= 180) score += 10;
        if (locName && h1.toLowerCase().includes(locName.toLowerCase())) score += 15;
        if (locName && formData.meta_description.toLowerCase().includes(locName.toLowerCase())) score += 10;
        if (formData.hero_description.split(/\s+/).filter(Boolean).length > 50) score += 10;
        if (formData.sections.length >= 2) score += 15;
        else if (formData.sections.length === 1) score += 7;

        return Math.min(100, score);
    }, [formData, selectedLocation]);

    useEffect(() => {
        onChange('seo_score', calcLiveScore());
    }, [formData.h1, formData.meta_title, formData.meta_description, formData.hero_description, formData.sections, formData.location_id]);

    if (!isOpen || typeof document === 'undefined') return null;

    const handleAiGenerate = async () => {
        if (!formData.service_id || !formData.location_id) {
            setHighlightMissing(true);
            setAiError('⚠️ Please select both a Service and a Location below before generating content.');
            setTab('basic');
            setTimeout(() => setHighlightMissing(false), 4000);
            return;
        }

        setAiLoading(true);
        setAiError(null);
        setAiSuccessMsg(null);

        try {
            const res = await apiFetch('/z-admin/seo-pages/ai-generate', {
                body: {
                    service_id: formData.service_id,
                    location_id: formData.location_id,
                    template: formData.template,
                    focus_keyword: formData.focus_keyword,
                },
            });

            if (res.success) {
                const d = res.data as any;
                if (d?.h1) onChange('h1', d.h1);
                if (d?.meta_title) onChange('meta_title', d.meta_title);
                if (d?.meta_description) onChange('meta_description', d.meta_description);
                if (d?.hero_description) onChange('hero_description', d.hero_description);
                if (d?.sections) onChange('sections', d.sections);

                setAiSuccessMsg(`✨ Content successfully generated for ${selectedLocation?.name ?? 'selected location'}! Review the sections below.`);
                // Switch to content tab to let user see generated output
                setTab('content');
            } else {
                setAiError(res.error || (res as any).message || 'Generation failed. Please try again.');
            }
        } catch (e: any) {
            setAiError(e?.message ?? 'AI service connection error. Please try again.');
        } finally {
            setAiLoading(false);
        }
    };

    const handleHumanize = async () => {
        if (!formData.h1 && !formData.hero_description) {
            setAiError('⚠️ Please generate or write content first before humanizing.');
            return;
        }

        setHumanizeLoading(true);
        setAiError(null);
        setAiSuccessMsg(null);

        try {
            const payload = {
                h1: formData.h1,
                meta_title: formData.meta_title,
                meta_description: formData.meta_description,
                hero_description: formData.hero_description,
                sections: formData.sections,
            };

            const res = await apiFetch('/z-admin/seo-pages/humanize', { body: { content: payload } });

            if (res.success) {
                const d = res.data as any;
                if (d?.h1) onChange('h1', d.h1);
                if (d?.meta_title) onChange('meta_title', d.meta_title);
                if (d?.meta_description) onChange('meta_description', d.meta_description);
                if (d?.hero_description) onChange('hero_description', d.hero_description);
                if (d?.sections) onChange('sections', d.sections);

                setAiSuccessMsg('🪄 Content successfully humanized! Bypassed AI patterns (applied high burstiness, natural sentence rhythm & scrubbed robotic buzzwords).');
            } else {
                setAiError(res.error || (res as any).message || 'Humanization failed');
            }
        } catch (e: any) {
            setAiError(e?.message ?? 'Humanization connection error');
        } finally {
            setHumanizeLoading(false);
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
            style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div
                className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border shadow-2xl"
                style={{
                    backgroundColor: 'var(--admin-modal-bg, #0e0e15)',
                    borderColor: 'var(--admin-border)',
                }}
            >
                {/* Header */}
                <div
                    className="flex shrink-0 items-center justify-between border-b px-6 py-4"
                    style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-subtle)' }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{ backgroundColor: 'rgba(99,102,241,0.15)', color: '#818cf8' }}
                        >
                            {mode === 'create' ? <Plus size={16} /> : <Pencil size={16} />}
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold" style={{ color: 'var(--admin-text-primary)' }}>
                                {mode === 'create' ? 'Create SEO Location Page' : 'Edit SEO Location Page'}
                            </h2>
                            {editingPage && (
                                <p className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                                    {editingPage.service?.title} × {editingPage.location?.name}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {selectedService && selectedLocation && (
                            <a
                                href={`/services/${selectedService.slug}/${selectedLocation.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/10"
                                style={{ borderColor: 'var(--admin-border)' }}
                                title="Open this location page in a new tab"
                            >
                                <ExternalLink size={13} className="text-indigo-400" />
                                <span>Preview Page</span>
                            </a>
                        )}
                        {/* AI Buttons */}
                        <button
                            type="button"
                            onClick={handleAiGenerate}
                            disabled={aiLoading}
                            className="flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold shadow-sm transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                            style={{
                                backgroundColor: 'rgba(99,102,241,0.18)',
                                color: '#a5b4fc',
                                border: '1px solid rgba(99,102,241,0.35)',
                            }}
                            title="Auto-generate complete SEO page using Gemini AI"
                        >
                            {aiLoading ? <Loader2 size={13} className="animate-spin text-indigo-400" /> : <Sparkles size={13} className="text-indigo-400" />}
                            {aiLoading ? 'Generating...' : 'AI Generate'}
                        </button>
                        <button
                            type="button"
                            onClick={handleHumanize}
                            disabled={humanizeLoading}
                            className="flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold shadow-sm transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                            style={{
                                backgroundColor: 'rgba(16,185,129,0.15)',
                                color: '#6ee7b7',
                                border: '1px solid rgba(16,185,129,0.3)',
                            }}
                            title="Bypass AI detectors (ZeroGPT, Copyleaks) by rewriting into authentic human copy"
                        >
                            {humanizeLoading ? <Loader2 size={13} className="animate-spin text-emerald-400" /> : <Wand2 size={13} className="text-emerald-400" />}
                            {humanizeLoading ? 'Humanizing...' : 'Humanize (Anti-AI)'}
                        </button>
                        <button
                            onClick={onClose}
                            className="rounded-lg p-1.5 transition-colors hover:bg-white/5"
                        >
                            <X size={16} style={{ color: 'var(--admin-text-muted)' }} />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div
                    className="flex shrink-0 border-b"
                    style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-subtle)' }}
                >
                    {(['basic', 'content', 'seo'] as const).map((t) => (
                        <TabBtn key={t} active={tab === t} onClick={() => setTab(t)}>
                            {t === 'basic' ? '📋 Basic Info' : t === 'content' ? '✍️ Content Sections' : '🎯 SEO & Meta'}
                        </TabBtn>
                    ))}
                </div>

                {/* Body */}
                <form id="seo-page-modal-form" onSubmit={onSubmit} className="flex min-h-0 flex-1">
                    <div className="flex-1 overflow-y-auto p-6">
                        {/* Active AI Loading Banner */}
                        {aiLoading && (
                            <div className="mb-5 overflow-hidden rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-indigo-950/40 p-4 shadow-lg backdrop-blur-sm animate-pulse">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                                        <Loader2 size={20} className="animate-spin text-indigo-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-semibold text-indigo-200">
                                                🤖 Gemini AI is writing location-specific content...
                                            </h4>
                                            <span className="text-[11px] font-medium text-indigo-300">
                                                Connecting models...
                                            </span>
                                        </div>
                                        <p className="mt-0.5 text-xs text-indigo-300/80">
                                            Drafting localized H1, meta tags, local business context, why us, and FAQs for <strong>{selectedLocation?.name ?? 'location'}</strong>.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-indigo-950/60">
                                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-400 animate-[pulse_1s_infinite]" />
                                </div>
                            </div>
                        )}

                        {/* Active Humanize Loading Banner */}
                        {humanizeLoading && (
                            <div className="mb-5 overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-emerald-950/40 p-4 shadow-lg backdrop-blur-sm animate-pulse">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                                        <Loader2 size={20} className="animate-spin text-emerald-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-emerald-200">
                                            🪄 Humanizing content...
                                        </h4>
                                        <p className="mt-0.5 text-xs text-emerald-300/80">
                                            Eliminating robotic AI clichés and rewriting with warm, conversational Indian tone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* AI Success Banner */}
                        {aiSuccessMsg && (
                            <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300 shadow-sm">
                                <div className="flex items-center gap-2.5">
                                    <Sparkles size={16} className="text-emerald-400 shrink-0" />
                                    <span>{aiSuccessMsg}</span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            onChange('status', 'published');
                                            setTimeout(() => {
                                                const formEl = document.getElementById('seo-page-modal-form') as HTMLFormElement;
                                                if (formEl) formEl.requestSubmit();
                                                else (onSubmit as any)(e);
                                            }, 50);
                                        }}
                                        className="rounded-lg bg-emerald-500 px-3 py-1 text-xs font-semibold text-black transition-all hover:bg-emerald-400 shadow-sm"
                                    >
                                        Save & Publish Now
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setAiSuccessMsg(null)}
                                        className="rounded p-1 text-emerald-400 hover:bg-emerald-500/20"
                                    >
                                        <X size={13} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* AI Error */}
                        {aiError && (
                            <div className="mb-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-400">
                                <AlertTriangle size={15} className="shrink-0" />
                                <span className="flex-1">{aiError}</span>
                                <button type="button" onClick={() => setAiError(null)} className="ml-auto rounded p-1 hover:bg-red-500/20">
                                    <X size={13} />
                                </button>
                            </div>
                        )}

                        {/* TAB: Basic Info */}
                        {tab === 'basic' && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="mb-1.5 block text-xs font-medium" style={LABEL_STYLE}>
                                            Service *
                                        </label>
                                        <select
                                            value={formData.service_id ?? ''}
                                            onChange={(e) => onChange('service_id', Number(e.target.value) || null)}
                                            disabled={mode === 'edit'}
                                            className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-all disabled:opacity-60 ${
                                                highlightMissing && !formData.service_id ? 'ring-2 ring-amber-500 border-amber-500' : ''
                                            }`}
                                            style={INPUT_STYLE}
                                            required
                                        >
                                            <option value="">Select service...</option>
                                            {services.map((s) => (
                                                <option key={s.id} value={s.id}>{s.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-xs font-medium" style={LABEL_STYLE}>
                                            Location *
                                        </label>
                                        <select
                                            value={formData.location_id ?? ''}
                                            onChange={(e) => onChange('location_id', Number(e.target.value) || null)}
                                            disabled={mode === 'edit'}
                                            className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-all disabled:opacity-60 ${
                                                highlightMissing && !formData.location_id ? 'ring-2 ring-amber-500 border-amber-500' : ''
                                            }`}
                                            style={INPUT_STYLE}
                                            required
                                        >
                                            <option value="">Select location...</option>
                                            {locations.map((l) => (
                                                <option key={l.id} value={l.id}>
                                                    {l.name} {l.state ? `(${l.state})` : ''}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Quick AI Generator Banner in Form */}
                                <div
                                    className="rounded-xl border p-4 transition-all"
                                    style={{
                                        borderColor: formData.service_id && formData.location_id ? 'rgba(99,102,241,0.35)' : 'var(--admin-border)',
                                        background: formData.service_id && formData.location_id
                                            ? 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 100%)'
                                            : 'var(--admin-card-subtle)',
                                    }}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                                                style={{ backgroundColor: 'rgba(99,102,241,0.18)', color: '#818cf8' }}
                                            >
                                                <Sparkles size={18} />
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold" style={{ color: 'var(--admin-text-primary)' }}>
                                                    ✨ Gemini AI Auto-Writer
                                                </h4>
                                                <p className="text-[11px] mt-0.5 leading-relaxed" style={{ color: 'var(--admin-text-muted)' }}>
                                                    {formData.service_id && formData.location_id ? (
                                                        <>Ready to write tailored SEO content for <strong>{selectedService?.title}</strong> in <strong>{selectedLocation?.name}</strong>.</>
                                                    ) : (
                                                        <>Select a <strong>Service</strong> and <strong>Location</strong> above, then click generate to auto-fill the whole page.</>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <button
                                                type="button"
                                                onClick={handleAiGenerate}
                                                disabled={aiLoading}
                                                className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold shadow-md transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                                                style={{
                                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                                    color: '#ffffff',
                                                }}
                                            >
                                                {aiLoading ? <Loader2 size={13} className="animate-spin text-white" /> : <Sparkles size={13} className="text-white" />}
                                                {aiLoading ? 'Writing with AI...' : '⚡ Generate with Gemini AI'}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Template picker */}
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium" style={LABEL_STYLE}>
                                        Page Template
                                    </label>
                                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                        {(Object.keys(TEMPLATE_META) as SeoTemplate[]).map((t) => {
                                            const meta = TEMPLATE_META[t];
                                            const active = formData.template === t;
                                            return (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    onClick={() => onChange('template', t)}
                                                    className="flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-all duration-200"
                                                    style={{
                                                        borderColor: active ? meta.color : 'var(--admin-border)',
                                                        backgroundColor: active ? meta.color + '18' : 'transparent',
                                                        transform: active ? 'scale(1.02)' : 'scale(1)',
                                                    }}
                                                >
                                                    <div
                                                        className="h-4 w-4 rounded-full"
                                                        style={{ backgroundColor: meta.color }}
                                                    />
                                                    <span
                                                        className="text-xs font-semibold"
                                                        style={{ color: active ? meta.color : 'var(--admin-text-primary)' }}
                                                    >
                                                        {meta.label}
                                                    </span>
                                                    <span
                                                        className="text-[10px] leading-tight"
                                                        style={{ color: 'var(--admin-text-muted)' }}
                                                    >
                                                        {meta.desc}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Status & Keyword */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="mb-1.5 block text-xs font-medium" style={LABEL_STYLE}>
                                            Focus Keyword
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.focus_keyword}
                                            onChange={(e) => onChange('focus_keyword', e.target.value)}
                                            className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
                                            style={INPUT_STYLE}
                                            placeholder={`e.g. ${selectedService?.title || 'Service'} in ${selectedLocation?.name || 'Location'}`}
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-xs font-medium" style={LABEL_STYLE}>
                                            Status
                                        </label>
                                        <div className="flex gap-2">
                                            {(['draft', 'published'] as const).map((s) => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => onChange('status', s)}
                                                    className="flex-1 rounded-lg border py-2.5 text-sm font-medium capitalize transition-all"
                                                    style={{
                                                        borderColor: formData.status === s
                                                            ? s === 'published' ? '#10b981' : '#f59e0b'
                                                            : 'var(--admin-border)',
                                                        backgroundColor: formData.status === s
                                                            ? s === 'published' ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.12)'
                                                            : 'transparent',
                                                        color: formData.status === s
                                                            ? s === 'published' ? '#10b981' : '#f59e0b'
                                                            : 'var(--admin-text-muted)',
                                                    }}
                                                >
                                                    {s === 'published' ? '🚀 Publish' : '📝 Draft'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* H1 */}
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium" style={LABEL_STYLE}>
                                        H1 Heading *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.h1}
                                        onChange={(e) => onChange('h1', e.target.value)}
                                        className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
                                        style={INPUT_STYLE}
                                        placeholder="Best Web Development Company in Patna, Bihar"
                                    />
                                </div>

                                {/* Hero description */}
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium" style={LABEL_STYLE}>
                                        Hero Description
                                    </label>
                                    <textarea
                                        value={formData.hero_description}
                                        onChange={(e) => onChange('hero_description', e.target.value)}
                                        rows={3}
                                        className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none resize-none"
                                        style={INPUT_STYLE}
                                        placeholder="Write a compelling 2-3 sentence intro that connects the service to local businesses..."
                                    />
                                    <p className="mt-1 text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                                        {formData.hero_description.split(/\s+/).filter(Boolean).length} words
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* TAB: Content Sections */}
                        {tab === 'content' && (
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border p-3.5" style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-subtle)' }}>
                                    <div>
                                        <h3 className="text-xs font-semibold" style={{ color: 'var(--admin-text-primary)' }}>
                                            Page Content Sections ({formData.sections.length})
                                        </h3>
                                        <p className="text-[11px] mt-0.5" style={{ color: 'var(--admin-text-muted)' }}>
                                            Drag, edit, or customize headings, paragraphs, bullet points, process steps, and FAQs.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={handleAiGenerate}
                                            disabled={aiLoading}
                                            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all hover:brightness-110 disabled:opacity-50"
                                            style={{ backgroundColor: 'rgba(99,102,241,0.18)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)' }}
                                        >
                                            {aiLoading ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                                            {aiLoading ? 'Writing...' : 'Re-generate with AI'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleHumanize}
                                            disabled={humanizeLoading || formData.sections.length === 0}
                                            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all hover:brightness-110 disabled:opacity-50"
                                            style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)' }}
                                            title="Rewrite all sections to bypass AI detectors"
                                        >
                                            {humanizeLoading ? <Loader2 size={12} className="animate-spin" /> : <Wand2 size={12} />}
                                            {humanizeLoading ? 'Humanizing...' : 'Humanize (Anti-AI)'}
                                        </button>
                                    </div>
                                </div>

                                {formData.sections.length === 0 && (
                                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center" style={{ borderColor: 'var(--admin-border)' }}>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 mb-3">
                                            <Sparkles size={24} />
                                        </div>
                                        <h4 className="text-sm font-semibold" style={{ color: 'var(--admin-text-primary)' }}>
                                            No Content Sections Yet
                                        </h4>
                                        <p className="mt-1 max-w-md text-xs leading-relaxed" style={{ color: 'var(--admin-text-muted)' }}>
                                            Let Gemini AI write comprehensive, local-market sections for {selectedLocation?.name || 'this location'} automatically, or add custom sections manually.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={handleAiGenerate}
                                            disabled={aiLoading}
                                            className="mt-4 flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold shadow-md transition-all hover:brightness-110 disabled:opacity-50"
                                            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: '#fff' }}
                                        >
                                            {aiLoading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                                            {aiLoading ? 'Generating content...' : '⚡ Generate Sections with Gemini AI'}
                                        </button>
                                    </div>
                                )}

                                <SectionEditor
                                    sections={formData.sections}
                                    onChange={(s) => onChange('sections', s)}
                                />
                            </div>
                        )}

                        {/* TAB: SEO & Meta */}
                        {tab === 'seo' && (
                            <div className="space-y-4">
                                <div>
                                    <div className="mb-1.5 flex items-center justify-between">
                                        <label className="text-xs font-medium" style={LABEL_STYLE}>Meta Title</label>
                                        <span
                                            className="text-xs tabular-nums"
                                            style={{
                                                color: formData.meta_title.length >= 50 && formData.meta_title.length <= 60
                                                    ? '#10b981'
                                                    : 'var(--admin-text-muted)',
                                            }}
                                        >
                                            {formData.meta_title.length}/60
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.meta_title}
                                        onChange={(e) => onChange('meta_title', e.target.value)}
                                        className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
                                        style={INPUT_STYLE}
                                        placeholder="Best Web Development in Patna | Zytrixon Tech"
                                        maxLength={80}
                                    />
                                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/5">
                                        <div
                                            className="h-full rounded-full transition-all"
                                            style={{
                                                width: `${Math.min(100, (formData.meta_title.length / 60) * 100)}%`,
                                                backgroundColor:
                                                    formData.meta_title.length >= 50 && formData.meta_title.length <= 60
                                                        ? '#10b981'
                                                        : formData.meta_title.length > 60
                                                        ? '#ef4444'
                                                        : '#f59e0b',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-1.5 flex items-center justify-between">
                                        <label className="text-xs font-medium" style={LABEL_STYLE}>Meta Description</label>
                                        <span
                                            className="text-xs tabular-nums"
                                            style={{
                                                color: formData.meta_description.length >= 140 && formData.meta_description.length <= 160
                                                    ? '#10b981'
                                                    : 'var(--admin-text-muted)',
                                            }}
                                        >
                                            {formData.meta_description.length}/160
                                        </span>
                                    </div>
                                    <textarea
                                        value={formData.meta_description}
                                        onChange={(e) => onChange('meta_description', e.target.value)}
                                        rows={3}
                                        className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none resize-none"
                                        style={INPUT_STYLE}
                                        placeholder="Zytrixon Tech offers premium web development services in Patna, Bihar. Custom websites, apps & digital solutions for local businesses..."
                                        maxLength={200}
                                    />
                                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/5">
                                        <div
                                            className="h-full rounded-full transition-all"
                                            style={{
                                                width: `${Math.min(100, (formData.meta_description.length / 160) * 100)}%`,
                                                backgroundColor:
                                                    formData.meta_description.length >= 140 && formData.meta_description.length <= 160
                                                        ? '#10b981'
                                                        : formData.meta_description.length > 160
                                                        ? '#ef4444'
                                                        : '#f59e0b',
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* SERP Preview */}
                                <div>
                                    <label className="mb-2 block text-xs font-medium" style={LABEL_STYLE}>
                                        SERP Preview
                                    </label>
                                    <div
                                        className="rounded-xl border p-4"
                                        style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-bg)' }}
                                    >
                                        <div className="text-xs text-emerald-500">
                                            zytrixontech.com › services › {selectedService?.slug ?? 'service'} › {selectedLocation?.slug ?? 'location'}
                                        </div>
                                        <div className="mt-0.5 text-base font-medium text-blue-400 underline">
                                            {formData.meta_title || 'Your meta title will appear here'}
                                        </div>
                                        <div className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--admin-text-muted)' }}>
                                            {formData.meta_description || 'Your meta description will appear here. It should summarize the page in 140-160 characters.'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar SEO Score */}
                    <div className="w-64 shrink-0 overflow-y-auto border-l p-4" style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-subtle)' }}>
                        <SeoScorePanel form={formData} locationName={selectedLocation?.name} />
                    </div>
                </form>

                {/* Footer */}
                <div
                    className="flex shrink-0 items-center justify-between border-t px-6 py-4"
                    style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-subtle)' }}
                >
                    <div className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                        SEO Score: <strong style={{ color: formData.seo_score >= 80 ? '#10b981' : formData.seo_score >= 50 ? '#f59e0b' : '#ef4444' }}>
                            {formData.seo_score}/100
                        </strong>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-white/5"
                            style={{ borderColor: 'var(--admin-border)', color: 'var(--admin-text-primary)' }}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={(e) => {
                                onChange('status', 'published');
                                setTimeout(() => {
                                    const formEl = document.getElementById('seo-page-modal-form') as HTMLFormElement;
                                    if (formEl) formEl.requestSubmit();
                                    else (onSubmit as any)(e);
                                }, 50);
                            }}
                            className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all hover:brightness-110 active:scale-95 shadow-sm"
                            style={{ backgroundColor: 'rgba(16,185,129,0.2)', color: '#34d399', border: '1px solid rgba(16,185,129,0.35)' }}
                        >
                            <Sparkles size={14} className="text-emerald-400" />
                            <span>Save & Publish</span>
                        </button>
                        <button
                            type="submit"
                            form="seo-page-modal-form"
                            className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium transition-all hover:opacity-90 shadow-sm"
                            style={{ backgroundColor: 'var(--admin-accent)', color: '#fff' }}
                        >
                            <Save size={14} />
                            {mode === 'create' ? 'Create Page' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
