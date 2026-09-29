import React from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, Trash2, X } from 'lucide-react';

interface ContactDeleteModalProps {
    isOpen: boolean;
    isBulk: boolean;
    count?: number;
    singleName?: string;
    onConfirm: () => void;
    onClose: () => void;
}

export default function ContactDeleteModal({
    isOpen,
    isBulk,
    count = 1,
    singleName,
    onConfirm,
    onClose,
}: ContactDeleteModalProps) {
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
                className="relative w-full max-w-md space-y-4 rounded-2xl border p-6 shadow-2xl transition-colors duration-200"
                style={{
                    backgroundColor: 'var(--admin-modal-bg)',
                    borderColor: 'var(--admin-border)',
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500">
                        <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div>
                        <h3
                            className="font-heading text-base font-bold"
                            style={{ color: 'var(--admin-text-primary)' }}
                        >
                            {isBulk
                                ? `Delete ${count} Selected Leads?`
                                : `Delete Lead: ${singleName || 'This item'}?`}
                        </h3>
                        <p
                            className="text-xs"
                            style={{ color: 'var(--admin-text-muted)' }}
                        >
                            This action is permanent and will remove the
                            selected inquiry data from the database.
                        </p>
                    </div>
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
                            backgroundColor: 'var(--admin-button-secondary-bg)',
                            borderColor: 'var(--admin-border)',
                            color: 'var(--admin-text-secondary)',
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-500 active:scale-95"
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Delete Definitely</span>
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}
