import React from 'react';
import { createPortal } from 'react-dom';
import {
    X,
    Mail,
    Phone,
    ExternalLink,
    CheckCircle2,
    Clock,
    AlertTriangle,
} from 'lucide-react';
import type { Enquiry } from './types';

interface ContactDetailModalProps {
    enquiry: Enquiry | null;
    editStatus: string;
    onStatusChange: (status: string) => void;
    editNotes: string;
    onNotesChange: (notes: string) => void;
    isSaving: boolean;
    onSave: (e: React.FormEvent) => void;
    onClose: () => void;
}

export default function ContactDetailModal({
    enquiry,
    editStatus,
    onStatusChange,
    editNotes,
    onNotesChange,
    isSaving,
    onSave,
    onClose,
}: ContactDetailModalProps) {
    if (!enquiry) {
        return null;
    }

    if (typeof document === 'undefined') {
        return null;
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'new':
                return (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-500">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        NEW
                    </span>
                );
            case 'contacted':
                return (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-blue-500">
                        <Clock className="h-3 w-3" />
                        CONTACTED
                    </span>
                );
            case 'in_progress':
                return (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-amber-500">
                        IN PROGRESS
                    </span>
                );
            case 'resolved':
                return (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-purple-500">
                        <CheckCircle2 className="h-3 w-3" />
                        RESOLVED
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-red-500">
                        {status.toUpperCase()}
                    </span>
                );
        }
    };

    return createPortal(
        <div
            className="animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
            style={{ backgroundColor: 'var(--admin-modal-overlay)' }}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-2xl space-y-5 overflow-y-auto rounded-2xl border p-6 shadow-2xl transition-colors duration-200"
                style={{
                    backgroundColor: 'var(--admin-modal-bg)',
                    borderColor: 'var(--admin-border)',
                }}
            >
                {/* Header */}
                <div
                    className="flex items-start justify-between border-b pb-4"
                    style={{ borderColor: 'var(--admin-border)' }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-xl border text-base font-bold uppercase shadow-sm"
                            style={{
                                backgroundColor:
                                    'var(--admin-button-secondary-bg)',
                                borderColor: 'var(--admin-border)',
                                color: 'var(--admin-accent)',
                            }}
                        >
                            {enquiry.name.charAt(0)}
                        </div>
                        <div>
                            <h3
                                className="font-heading text-lg font-bold"
                                style={{ color: 'var(--admin-text-primary)' }}
                            >
                                {enquiry.name}
                            </h3>
                            <div className="mt-0.5 flex items-center gap-2">
                                {getStatusBadge(enquiry.status)}
                                <span
                                    className="font-mono text-xs"
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    ID #{enquiry.id} •{' '}
                                    {new Date(
                                        enquiry.created_at,
                                    ).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer rounded-lg p-1.5 transition-colors"
                        style={{
                            backgroundColor: 'var(--admin-button-secondary-bg)',
                            color: 'var(--admin-text-secondary)',
                        }}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Contact Quick Bar */}
                <div
                    className="grid grid-cols-1 gap-3 rounded-xl border p-3.5 sm:grid-cols-3"
                    style={{
                        backgroundColor: 'var(--admin-card-subtle)',
                        borderColor: 'var(--admin-border-subtle)',
                    }}
                >
                    <a
                        href={`mailto:${enquiry.email}`}
                        className="flex items-center gap-2 truncate text-xs transition-opacity hover:opacity-80"
                        style={{ color: 'var(--admin-text-secondary)' }}
                    >
                        <Mail className="h-4 w-4 shrink-0 text-neutral-400" />
                        <span className="truncate">{enquiry.email}</span>
                    </a>
                    <a
                        href={`tel:${enquiry.phone}`}
                        className="flex items-center gap-2 truncate text-xs transition-opacity hover:opacity-80"
                        style={{ color: 'var(--admin-text-secondary)' }}
                    >
                        <Phone className="h-4 w-4 shrink-0 text-neutral-400" />
                        <span className="truncate">{enquiry.phone}</span>
                    </a>
                    <a
                        href={`https://wa.me/${enquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${enquiry.name}, thank you for contacting Zytrixon Tech.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:opacity-80"
                    >
                        <ExternalLink className="h-4 w-4 shrink-0" />
                        <span>Open WhatsApp Chat</span>
                    </a>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div
                        className="rounded-xl border p-3"
                        style={{
                            backgroundColor: 'var(--admin-card-subtle)',
                            borderColor: 'var(--admin-border-subtle)',
                        }}
                    >
                        <span
                            className="mb-1 block uppercase"
                            style={{ color: 'var(--admin-text-muted)' }}
                        >
                            SERVICE REQUESTED
                        </span>
                        <span
                            className="font-sans text-sm font-semibold"
                            style={{ color: 'var(--admin-text-primary)' }}
                        >
                            {enquiry.service || 'General Software Consultation'}
                        </span>
                    </div>
                    <div
                        className="rounded-xl border p-3"
                        style={{
                            backgroundColor: 'var(--admin-card-subtle)',
                            borderColor: 'var(--admin-border-subtle)',
                        }}
                    >
                        <span
                            className="mb-1 block uppercase"
                            style={{ color: 'var(--admin-text-muted)' }}
                        >
                            BUDGET ESTIMATE
                        </span>
                        <span className="font-sans text-sm font-semibold text-emerald-500">
                            {enquiry.budget || 'Not specified'}
                        </span>
                    </div>
                </div>

                {/* Full Message Box */}
                <div>
                    <label
                        className="mb-2 block font-mono text-xs font-semibold uppercase"
                        style={{ color: 'var(--admin-text-secondary)' }}
                    >
                        Client Message
                    </label>
                    <div
                        className="rounded-xl border p-4 text-xs leading-relaxed whitespace-pre-wrap"
                        style={{
                            backgroundColor: 'var(--admin-card-subtle)',
                            borderColor: 'var(--admin-border-subtle)',
                            color: 'var(--admin-text-primary)',
                        }}
                    >
                        {enquiry.message ||
                            'No project description supplied by client.'}
                    </div>
                </div>

                {/* Edit Status & Notes Form */}
                <form
                    onSubmit={onSave}
                    className="space-y-4 border-t pt-2"
                    style={{ borderColor: 'var(--admin-border)' }}
                >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label
                                className="mb-1.5 block text-xs font-semibold"
                                style={{ color: 'var(--admin-text-secondary)' }}
                            >
                                Update Lead Status
                            </label>
                            <select
                                value={editStatus}
                                onChange={(e) => onStatusChange(e.target.value)}
                                className="w-full cursor-pointer rounded-xl border px-3 py-2.5 text-xs transition-colors focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--admin-input-bg)',
                                    borderColor: 'var(--admin-input-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            >
                                <option value="new">New (Uncontacted)</option>
                                <option value="contacted">Contacted</option>
                                <option value="in_progress">
                                    In Progress / Scoping
                                </option>
                                <option value="resolved">
                                    Resolved / Converted
                                </option>
                                <option value="spam">Spam / Discarded</option>
                            </select>
                        </div>

                        <div
                            className="space-y-1 font-mono text-xs sm:pt-4"
                            style={{ color: 'var(--admin-text-muted)' }}
                        >
                            <div>IP: {enquiry.ip_address || 'Unknown'}</div>
                            <div className="truncate text-[10px]">
                                Agent: {enquiry.user_agent || 'Standard Web'}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            className="mb-1.5 block text-xs font-semibold"
                            style={{ color: 'var(--admin-text-secondary)' }}
                        >
                            Internal Notes & Follow-up Log
                        </label>
                        <textarea
                            rows={3}
                            value={editNotes}
                            onChange={(e) => onNotesChange(e.target.value)}
                            placeholder="Add internal notes about calls, client preferences, or follow-up schedule..."
                            className="w-full rounded-xl border p-3 text-xs transition-colors focus:outline-none"
                            style={{
                                backgroundColor: 'var(--admin-input-bg)',
                                borderColor: 'var(--admin-input-border)',
                                color: 'var(--admin-text-primary)',
                            }}
                        />
                    </div>

                    <div
                        className="flex items-center justify-end gap-3 border-t pt-3"
                        style={{ borderColor: 'var(--admin-border)' }}
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer rounded-xl border px-4 py-2 text-xs font-semibold transition-colors"
                            style={{
                                backgroundColor:
                                    'var(--admin-button-secondary-bg)',
                                borderColor: 'var(--admin-border)',
                                color: 'var(--admin-text-secondary)',
                            }}
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="cursor-pointer rounded-xl px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
                            style={{
                                backgroundColor: 'var(--admin-accent)',
                            }}
                        >
                            {isSaving ? 'Saving...' : 'Save Notes & Status'}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body,
    );
}
