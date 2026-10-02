import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Zap, CheckCheck, AlertTriangle, Loader2 } from 'lucide-react';
import { apiFetch } from '@/lib/api-fetch';
import type { SeoService, SeoLocation, SeoTemplate } from './types';
import { TEMPLATE_META } from './types';

interface Props {
    isOpen: boolean;
    services: SeoService[];
    locations: SeoLocation[];
    onClose: () => void;
    onSuccess: () => void;
}

export default function BulkGenerateModal({ isOpen, services, locations, onClose, onSuccess }: Props) {
    const [serviceId, setServiceId] = useState<number | null>(null);
    const [selectedLocIds, setSelectedLocIds] = useState<number[]>([]);
    const [template, setTemplate] = useState<SeoTemplate>('grid');
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState('');
    const [result, setResult] = useState<{ created: number; errors: string[] } | null>(null);

    if (!isOpen || typeof document === 'undefined') return null;

    const toggleLoc = (id: number) => {
        setSelectedLocIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const selectAll = () => setSelectedLocIds(locations.map((l) => l.id));
    const clearAll = () => setSelectedLocIds([]);

    const [validationError, setValidationError] = useState<string | null>(null);

    const handleGenerate = async () => {
        setValidationError(null);
        if (!serviceId) {
            setValidationError('⚠️ Please select a Service from the dropdown above.');
            return;
        }
        if (selectedLocIds.length === 0) {
            setValidationError('⚠️ Please select at least one Location below.');
            return;
        }

        setLoading(true);
        setResult(null);
        setStatusMsg(`🤖 Generating ${selectedLocIds.length} SEO location page(s) via Gemini AI... Each page takes ~5–8 seconds.`);

        try {
            const res = await apiFetch('/z-admin/seo-pages/bulk-generate', {
                body: {
                    service_id: serviceId,
                    location_ids: selectedLocIds,
                    template,
                },
            });

            setStatusMsg('');
            const created = (res.created as number) ?? 0;
            const errors = (res.errors as string[]) ?? [];
            setResult({ created, errors });

            if (created > 0) {
                setTimeout(() => {
                    onSuccess();
                    onClose();
                }, 2500);
            }
        } catch (e: any) {
            setStatusMsg('');
            setResult({ created: 0, errors: [e?.message ?? 'Network error — please check connection'] });
        } finally {
            setLoading(false);
        }
    };


    return createPortal(
        <div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 backdrop-blur-md"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
        >
            <div
                className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border shadow-2xl"
                style={{
                    backgroundColor: 'var(--admin-modal-bg, #0e0e15)',
                    borderColor: 'var(--admin-border)',
                }}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between border-b px-6 py-4"
                    style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-subtle)' }}
                >
                    <div className="flex items-center gap-2.5">
                        <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{ backgroundColor: 'rgba(99,102,241,0.15)', color: '#818cf8' }}
                        >
                            <Zap size={16} />
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold" style={{ color: 'var(--admin-text-primary)' }}>
                                Bulk AI Generate
                            </h2>
                            <p className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                                Generate multiple location pages with one click
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} className="rounded-lg p-1.5 transition-colors hover:bg-white/5">
                        <X size={16} style={{ color: 'var(--admin-text-muted)' }} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-5">
                    {/* Service Select */}
                    <div>
                        <label className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--admin-text-muted)' }}>
                            Service *
                        </label>
                        <select
                            value={serviceId ?? ''}
                            onChange={(e) => setServiceId(Number(e.target.value) || null)}
                            className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
                            style={{
                                backgroundColor: 'var(--admin-input-bg)',
                                borderColor: 'var(--admin-border)',
                                color: 'var(--admin-text-primary)',
                            }}
                        >
                            <option value="">Select a service...</option>
                            {services.map((s) => (
                                <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                        </select>
                    </div>

                    {/* Template Select */}
                    <div>
                        <label className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--admin-text-muted)' }}>
                            Template Layout
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {(Object.keys(TEMPLATE_META) as SeoTemplate[]).map((t) => {
                                const meta = TEMPLATE_META[t];
                                return (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setTemplate(t)}
                                        className="flex items-start gap-2 rounded-lg border p-3 text-left transition-all"
                                        style={{
                                            borderColor: template === t ? meta.color : 'var(--admin-border)',
                                            backgroundColor: template === t ? meta.color + '15' : 'transparent',
                                        }}
                                    >
                                        <div
                                            className="mt-0.5 h-3 w-3 shrink-0 rounded-full"
                                            style={{ backgroundColor: meta.color }}
                                        />
                                        <div>
                                            <div className="text-xs font-semibold" style={{ color: 'var(--admin-text-primary)' }}>
                                                {meta.label}
                                            </div>
                                            <div className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                                                {meta.desc}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Location Multi-select */}
                    <div>
                        <div className="mb-1.5 flex items-center justify-between">
                            <label className="text-xs font-medium" style={{ color: 'var(--admin-text-muted)' }}>
                                Locations * ({selectedLocIds.length} selected)
                            </label>
                            <div className="flex gap-2">
                                <button type="button" onClick={selectAll} className="text-xs" style={{ color: 'var(--admin-accent)' }}>
                                    Select All
                                </button>
                                <span style={{ color: 'var(--admin-text-muted)' }}>·</span>
                                <button type="button" onClick={clearAll} className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                                    Clear
                                </button>
                            </div>
                        </div>
                        <div
                            className="max-h-48 overflow-y-auto rounded-lg border p-2"
                            style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-input-bg)' }}
                        >
                            <div className="grid grid-cols-2 gap-1">
                                {locations.map((loc) => {
                                    const selected = selectedLocIds.includes(loc.id);
                                    return (
                                        <button
                                            key={loc.id}
                                            type="button"
                                            onClick={() => toggleLoc(loc.id)}
                                            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors"
                                            style={{
                                                backgroundColor: selected ? 'rgba(99,102,241,0.15)' : 'transparent',
                                                color: selected ? '#818cf8' : 'var(--admin-text-primary)',
                                            }}
                                        >
                                            <div
                                                className="h-3 w-3 shrink-0 rounded-sm border flex items-center justify-center"
                                                style={{
                                                    borderColor: selected ? '#818cf8' : 'var(--admin-border)',
                                                    backgroundColor: selected ? '#818cf8' : 'transparent',
                                                }}
                                            >
                                                {selected && <CheckCheck size={8} className="text-white" />}
                                            </div>
                                            <span className="truncate">{loc.name}</span>
                                            {loc.state && (
                                                <span className="shrink-0 opacity-50">({loc.state?.slice(0, 3)})</span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Validation Error */}
                    {validationError && (
                        <div
                            className="rounded-xl border p-3.5 flex items-center gap-2.5 text-xs font-medium text-amber-300"
                            style={{ borderColor: 'rgba(245,158,11,0.3)', backgroundColor: 'rgba(245,158,11,0.1)' }}
                        >
                            <AlertTriangle size={15} className="shrink-0 text-amber-400" />
                            <span>{validationError}</span>
                            <button type="button" onClick={() => setValidationError(null)} className="ml-auto rounded p-1 hover:bg-amber-500/20">
                                <X size={13} />
                            </button>
                        </div>
                    )}

                    {/* Status message while generating */}
                    {loading && statusMsg && (
                        <div
                            className="rounded-xl border p-4 flex items-start gap-3 animate-pulse"
                            style={{ borderColor: 'rgba(99,102,241,0.35)', backgroundColor: 'rgba(99,102,241,0.1)' }}
                        >
                            <Loader2 size={18} className="animate-spin mt-0.5 shrink-0 text-indigo-400" />
                            <div>
                                <p className="text-sm font-semibold text-indigo-200">
                                    🤖 Gemini AI is writing pages...
                                </p>
                                <p className="text-xs mt-1 text-indigo-300/80">
                                    {statusMsg}
                                </p>
                                <p className="text-[11px] mt-1.5 text-indigo-300/60">
                                    ☕ Creating location-specific H1, metadata, Why Us, and FAQs for each city. Please do not close this window.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Result */}
                    {result && (
                        <div
                            className="rounded-xl border p-4"
                            style={{
                                borderColor: result.created > 0 ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)',
                                backgroundColor: result.created > 0 ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                            }}
                        >
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                {result.created > 0 ? (
                                    <>
                                        <CheckCheck size={16} className="text-emerald-400" />
                                        <span className="text-emerald-400">{result.created} SEO location pages generated successfully!</span>
                                    </>
                                ) : (
                                    <>
                                        <AlertTriangle size={16} className="text-red-400" />
                                        <span className="text-red-400">Bulk generation encountered issues</span>
                                    </>
                                )}
                            </div>
                            {result.errors.length > 0 && (
                                <ul className="mt-2 space-y-1 text-xs text-red-300/90 pl-2">
                                    {result.errors.map((e, i) => <li key={i}>• {e}</li>)}
                                </ul>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div
                    className="flex items-center justify-between border-t px-6 py-4"
                    style={{ borderColor: 'var(--admin-border)', backgroundColor: 'var(--admin-card-subtle)' }}
                >
                    <div className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                        ⚠️ Max 20 locations per batch to preserve API limits
                    </div>
                    <div className="flex gap-2">
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
                            onClick={handleGenerate}
                            disabled={loading}
                            className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: '#fff' }}
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={14} className="animate-spin" />
                                    Generating... please wait
                                </>
                            ) : (
                                <>
                                    <Zap size={14} />
                                    Generate {selectedLocIds.length > 0 ? `${selectedLocIds.length} Pages` : 'Pages'}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
