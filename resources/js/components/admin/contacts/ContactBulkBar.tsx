import React from 'react';
import { Trash2 } from 'lucide-react';

interface ContactBulkBarProps {
    selectedCount: number;
    onDeselectAll: () => void;
    onConfirmBulkDelete: () => void;
}

export default function ContactBulkBar({
    selectedCount,
    onDeselectAll,
    onConfirmBulkDelete,
}: ContactBulkBarProps) {
    if (selectedCount === 0) {
        return null;
    }

    return (
        <div
            className="animate-fadeIn sticky top-4 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-3.5 shadow-2xl backdrop-blur-xl"
            style={{
                backgroundColor: 'var(--admin-card-bg)',
                borderColor: '#ef4444',
            }}
        >
            <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20 text-xs font-bold text-red-500">
                    {selectedCount}
                </div>
                <div>
                    <span
                        className="text-xs font-semibold"
                        style={{ color: 'var(--admin-text-primary)' }}
                    >
                        {selectedCount}{' '}
                        {selectedCount === 1 ? 'enquiry' : 'enquiries'} selected
                    </span>
                    <span
                        className="ml-2 hidden text-[11px] sm:inline"
                        style={{ color: 'var(--admin-text-muted)' }}
                    >
                        Delete selected records in one batch
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={onDeselectAll}
                    className="cursor-pointer rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors"
                    style={{
                        backgroundColor: 'var(--admin-button-secondary-bg)',
                        borderColor: 'var(--admin-border)',
                        color: 'var(--admin-text-secondary)',
                    }}
                >
                    Deselect All
                </button>
                <button
                    type="button"
                    onClick={onConfirmBulkDelete}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-red-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-500 active:scale-95"
                >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Delete Selected ({selectedCount})</span>
                </button>
            </div>
        </div>
    );
}
