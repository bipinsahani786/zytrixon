import React from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, Trash2, X } from 'lucide-react';

interface BlogDeleteModalProps {
    isOpen: boolean;
    isBulk: boolean;
    count?: number;
    singleTitle?: string;
    onConfirm: () => void;
    onClose: () => void;
}

export default function BlogDeleteModal({
    isOpen,
    isBulk,
    count = 1,
    singleTitle,
    onConfirm,
    onClose,
}: BlogDeleteModalProps) {
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
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 cursor-pointer rounded-lg p-1 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    style={{ color: 'var(--admin-text-secondary)' }}
                >
                    <X className="h-4 w-4" />
                </button>

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
                                ? `Delete ${count} Blog Articles?`
                                : `Delete: "${singleTitle || 'this article'}"?`}
                        </h3>
                        <p
                            className="mt-0.5 text-xs"
                            style={{ color: 'var(--admin-text-muted)' }}
                        >
                            This action is permanent and cannot be undone. The
                            {isBulk ? ` ${count} articles` : ' article'} and any
                            uploaded images will be removed from the database.
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
                        <span>Yes, Delete Permanently</span>
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}
