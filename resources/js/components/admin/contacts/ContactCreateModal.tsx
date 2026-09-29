import React from 'react';
import { createPortal } from 'react-dom';
import { X, Plus, Mail } from 'lucide-react';
import type { ContactFormData } from './types';

interface ContactCreateModalProps {
    isOpen: boolean;
    formData: ContactFormData;
    onChange: (field: keyof ContactFormData, value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
}

export default function ContactCreateModal({
    isOpen,
    formData,
    onChange,
    onSubmit,
    onClose,
}: ContactCreateModalProps) {
    if (!isOpen) {
        return null;
    }

    if (typeof document === 'undefined') {
        return null;
    }

    return createPortal(
        <div
            className="animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
            style={{ backgroundColor: 'var(--admin-modal-overlay)' }}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-lg space-y-4 overflow-y-auto rounded-2xl border p-6 shadow-2xl transition-colors duration-200"
                style={{
                    backgroundColor: 'var(--admin-modal-bg)',
                    borderColor: 'var(--admin-border)',
                }}
            >
                <div
                    className="flex items-center justify-between border-b pb-3"
                    style={{ borderColor: 'var(--admin-border)' }}
                >
                    <div className="flex items-center gap-2.5">
                        <div
                            className="flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-bold"
                            style={{
                                backgroundColor:
                                    'var(--admin-button-secondary-bg)',
                                borderColor: 'var(--admin-border)',
                                color: 'var(--admin-accent)',
                            }}
                        >
                            <Plus className="h-5 w-5" />
                        </div>
                        <div>
                            <h3
                                className="font-heading text-base font-bold"
                                style={{ color: 'var(--admin-text-primary)' }}
                            >
                                Record Manual Inquiry
                            </h3>
                            <p
                                className="text-xs"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                Enter offline or direct call inquiries into the
                                system
                            </p>
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
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                            <label
                                className="mb-1 block text-xs font-semibold"
                                style={{ color: 'var(--admin-text-secondary)' }}
                            >
                                Client Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    onChange('name', e.target.value)
                                }
                                placeholder="e.g. Rajesh Kumar"
                                className="w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--admin-input-bg)',
                                    borderColor: 'var(--admin-input-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            />
                        </div>

                        <div>
                            <label
                                className="mb-1 block text-xs font-semibold"
                                style={{ color: 'var(--admin-text-secondary)' }}
                            >
                                Email Address *
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    onChange('email', e.target.value)
                                }
                                placeholder="rajesh@example.com"
                                className="w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--admin-input-bg)',
                                    borderColor: 'var(--admin-input-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                            <label
                                className="mb-1 block text-xs font-semibold"
                                style={{ color: 'var(--admin-text-secondary)' }}
                            >
                                Phone Number *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.phone}
                                onChange={(e) =>
                                    onChange('phone', e.target.value)
                                }
                                placeholder="+91 98765 43210"
                                className="w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--admin-input-bg)',
                                    borderColor: 'var(--admin-input-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            />
                        </div>

                        <div>
                            <label
                                className="mb-1 block text-xs font-semibold"
                                style={{ color: 'var(--admin-text-secondary)' }}
                            >
                                Service Required
                            </label>
                            <input
                                type="text"
                                value={formData.service}
                                onChange={(e) =>
                                    onChange('service', e.target.value)
                                }
                                placeholder="Web Development, SaaS, App..."
                                className="w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--admin-input-bg)',
                                    borderColor: 'var(--admin-input-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                            <label
                                className="mb-1 block text-xs font-semibold"
                                style={{ color: 'var(--admin-text-secondary)' }}
                            >
                                Estimated Budget
                            </label>
                            <input
                                type="text"
                                value={formData.budget}
                                onChange={(e) =>
                                    onChange('budget', e.target.value)
                                }
                                placeholder="e.g. ₹1,00,000 - ₹2,50,000"
                                className="w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--admin-input-bg)',
                                    borderColor: 'var(--admin-input-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            />
                        </div>

                        <div>
                            <label
                                className="mb-1 block text-xs font-semibold"
                                style={{ color: 'var(--admin-text-secondary)' }}
                            >
                                Lead Status
                            </label>
                            <select
                                value={formData.status}
                                onChange={(e) =>
                                    onChange('status', e.target.value)
                                }
                                className="w-full cursor-pointer rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--admin-input-bg)',
                                    borderColor: 'var(--admin-input-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            >
                                <option value="new">New (Uncontacted)</option>
                                <option value="contacted">Contacted</option>
                                <option value="in_progress">In Progress</option>
                                <option value="resolved">Resolved</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label
                            className="mb-1 block text-xs font-semibold"
                            style={{ color: 'var(--admin-text-secondary)' }}
                        >
                            Project Description / Message
                        </label>
                        <textarea
                            rows={3}
                            value={formData.message}
                            onChange={(e) =>
                                onChange('message', e.target.value)
                            }
                            placeholder="Client project requirements and details..."
                            className="w-full rounded-xl border p-2.5 text-xs transition-colors focus:outline-none"
                            style={{
                                backgroundColor: 'var(--admin-input-bg)',
                                borderColor: 'var(--admin-input-border)',
                                color: 'var(--admin-text-primary)',
                            }}
                        />
                    </div>

                    <div>
                        <label
                            className="mb-1 block text-xs font-semibold"
                            style={{ color: 'var(--admin-text-secondary)' }}
                        >
                            Internal Notes (Optional)
                        </label>
                        <textarea
                            rows={2}
                            value={formData.admin_notes}
                            onChange={(e) =>
                                onChange('admin_notes', e.target.value)
                            }
                            placeholder="Initial notes on lead source, priority..."
                            className="w-full rounded-xl border p-2.5 text-xs transition-colors focus:outline-none"
                            style={{
                                backgroundColor: 'var(--admin-input-bg)',
                                borderColor: 'var(--admin-input-border)',
                                color: 'var(--admin-text-primary)',
                            }}
                        />
                    </div>

                    <div
                        className="flex items-center justify-end gap-2.5 border-t pt-3"
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
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
                            style={{
                                backgroundColor: 'var(--admin-accent)',
                            }}
                        >
                            Save Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body,
    );
}
