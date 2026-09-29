import React from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, Trash2, X } from 'lucide-react';
import type { UserItem } from './types';

interface UserDeleteModalProps {
    isOpen: boolean;
    user?: UserItem | null;
    onConfirm: () => void;
    onClose: () => void;
}

export default function UserDeleteModal({
    isOpen,
    user,
    onConfirm,
    onClose,
}: UserDeleteModalProps) {
    if (!isOpen || !user) {
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
                            Delete User Account?
                        </h3>
                        <p
                            className="text-xs"
                            style={{ color: 'var(--admin-text-muted)' }}
                        >
                            This action cannot be undone.
                        </p>
                    </div>
                </div>

                <div
                    className="rounded-xl border p-3.5 text-xs"
                    style={{
                        backgroundColor: 'var(--admin-card-subtle)',
                        borderColor: 'var(--admin-border-subtle)',
                    }}
                >
                    <div
                        className="font-semibold"
                        style={{ color: 'var(--admin-text-primary)' }}
                    >
                        {user.name}
                    </div>
                    <div
                        className="font-mono text-[11px]"
                        style={{ color: 'var(--admin-text-muted)' }}
                    >
                        {user.email}
                    </div>
                    <div className="mt-2">
                        <span
                            className="rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase"
                            style={{
                                backgroundColor:
                                    user.role === 'admin'
                                        ? 'rgba(16, 185, 129, 0.15)'
                                        : 'rgba(59, 130, 246, 0.15)',
                                color:
                                    user.role === 'admin'
                                        ? 'var(--admin-accent)'
                                        : '#3b82f6',
                            }}
                        >
                            Role: {user.role}
                        </span>
                    </div>
                </div>

                {user.role === 'admin' && (
                    <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-500">
                        <strong>Warning:</strong> You are about to delete an
                        Administrator account. Ensure there is at least one
                        other active admin before proceeding.
                    </div>
                )}

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
                        <span>Delete User</span>
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}
