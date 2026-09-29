import React from 'react';
import {
    Mail,
    Phone,
    FileText,
    Eye,
    Trash2,
    Clock,
    CheckCircle2,
    RotateCcw,
} from 'lucide-react';
import type { Enquiry } from './types';

interface ContactTableProps {
    enquiries: Enquiry[];
    selectedIds: number[];
    isAllSelected: boolean;
    onToggleSelectAll: () => void;
    onToggleSelectOne: (id: number) => void;
    onOpenDetail: (item: Enquiry) => void;
    onQuickStatusChange: (id: number, status: string) => void;
    onDeleteSingle: (id: number, name: string) => void;
    onClearFilters: () => void;
    hasActiveFilters: boolean;
}

export default function ContactTable({
    enquiries,
    selectedIds,
    isAllSelected,
    onToggleSelectAll,
    onToggleSelectOne,
    onOpenDetail,
    onQuickStatusChange,
    onDeleteSingle,
    onClearFilters,
    hasActiveFilters,
}: ContactTableProps) {
    return (
        <div className="overflow-x-auto rounded-t-2xl">
            <table className="w-full text-left text-xs">
                <thead>
                    <tr
                        className="border-b font-mono"
                        style={{
                            backgroundColor: 'var(--admin-table-head-bg)',
                            borderColor: 'var(--admin-table-border)',
                            color: 'var(--admin-text-secondary)',
                        }}
                    >
                        <th className="w-10 p-4">
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={onToggleSelectAll}
                                aria-label="Select all"
                                className="h-4 w-4 cursor-pointer rounded text-emerald-500"
                            />
                        </th>
                        <th className="px-3 py-4 font-semibold">Client Name</th>
                        <th className="px-3 py-4 font-semibold">
                            Contact Info
                        </th>
                        <th className="px-3 py-4 font-semibold">
                            Service & Budget
                        </th>
                        <th className="px-3 py-4 font-semibold">
                            Message Preview
                        </th>
                        <th className="px-3 py-4 font-semibold">Status</th>
                        <th className="px-3 py-4 text-right font-semibold">
                            Received
                        </th>
                        <th className="px-4 py-4 text-right font-semibold">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody
                    className="divide-y"
                    style={{ borderColor: 'var(--admin-table-border)' }}
                >
                    {enquiries.length > 0 ? (
                        enquiries.map((item) => {
                            const isSelected = selectedIds.includes(item.id);
                            return (
                                <tr
                                    key={item.id}
                                    className="transition-colors"
                                    style={{
                                        borderBottom:
                                            '1px solid var(--admin-table-border)',
                                        backgroundColor: isSelected
                                            ? 'rgba(239, 68, 68, 0.05)'
                                            : undefined,
                                    }}
                                >
                                    {/* Checkbox */}
                                    <td className="p-4">
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() =>
                                                onToggleSelectOne(item.id)
                                            }
                                            className="h-4 w-4 cursor-pointer rounded text-emerald-500"
                                        />
                                    </td>

                                    {/* Client Name & Initial */}
                                    <td className="px-3 py-3 font-medium">
                                        <div className="flex items-center gap-2.5">
                                            <div
                                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-bold uppercase"
                                                style={{
                                                    backgroundColor:
                                                        'var(--admin-button-secondary-bg)',
                                                    borderColor:
                                                        'var(--admin-border)',
                                                    color: 'var(--admin-accent)',
                                                }}
                                            >
                                                {item.name.charAt(0)}
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        onOpenDetail(item)
                                                    }
                                                    className="cursor-pointer text-left font-semibold transition-opacity hover:opacity-80"
                                                    style={{
                                                        color: 'var(--admin-text-primary)',
                                                    }}
                                                >
                                                    {item.name}
                                                </button>
                                                {item.admin_notes && (
                                                    <div className="mt-0.5 flex items-center gap-1 font-mono text-[10px] text-amber-500">
                                                        <FileText className="h-2.5 w-2.5" />
                                                        <span>
                                                            Internal Notes
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </td>

                                    {/* Contact Info */}
                                    <td className="space-y-1 px-3 py-3 font-mono text-[11px]">
                                        <div className="flex items-center gap-1.5">
                                            <a
                                                href={`mailto:${item.email}`}
                                                className="flex items-center gap-1 transition-opacity hover:opacity-80"
                                                style={{
                                                    color: 'var(--admin-text-secondary)',
                                                }}
                                                title="Send Email"
                                            >
                                                <Mail
                                                    className="h-3 w-3"
                                                    style={{
                                                        color: 'var(--admin-text-dim)',
                                                    }}
                                                />
                                                <span>{item.email}</span>
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={`tel:${item.phone}`}
                                                className="flex items-center gap-1 transition-opacity hover:opacity-80"
                                                style={{
                                                    color: 'var(--admin-text-secondary)',
                                                }}
                                                title="Call Phone"
                                            >
                                                <Phone
                                                    className="h-3 w-3"
                                                    style={{
                                                        color: 'var(--admin-text-dim)',
                                                    }}
                                                />
                                                <span>{item.phone}</span>
                                            </a>
                                            <a
                                                href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="font-sans text-[10px] font-semibold text-emerald-500 underline hover:opacity-80"
                                            >
                                                WhatsApp
                                            </a>
                                        </div>
                                    </td>

                                    {/* Service & Budget */}
                                    <td className="px-3 py-3">
                                        <div
                                            className="font-medium"
                                            style={{
                                                color: 'var(--admin-text-primary)',
                                            }}
                                        >
                                            {item.service || (
                                                <span
                                                    className="italic"
                                                    style={{
                                                        color: 'var(--admin-text-muted)',
                                                    }}
                                                >
                                                    Not Specified
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className="mt-0.5 font-mono text-[11px]"
                                            style={{
                                                color: 'var(--admin-text-muted)',
                                            }}
                                        >
                                            {item.budget || 'Custom Budget'}
                                        </div>
                                    </td>

                                    {/* Message Preview */}
                                    <td className="max-w-[200px] px-3 py-3">
                                        <p
                                            onClick={() => onOpenDetail(item)}
                                            className="line-clamp-2 cursor-pointer text-[11px] transition-opacity hover:opacity-80"
                                            style={{
                                                color: 'var(--admin-text-secondary)',
                                            }}
                                            title={
                                                item.message ||
                                                'No description provided'
                                            }
                                        >
                                            {item.message || (
                                                <span
                                                    className="italic"
                                                    style={{
                                                        color: 'var(--admin-text-dim)',
                                                    }}
                                                >
                                                    No message content
                                                </span>
                                            )}
                                        </p>
                                    </td>

                                    {/* Status Dropdown */}
                                    <td className="px-3 py-3">
                                        <select
                                            value={item.status}
                                            onChange={(e) =>
                                                onQuickStatusChange(
                                                    item.id,
                                                    e.target.value,
                                                )
                                            }
                                            className="cursor-pointer rounded-lg border px-2 py-1 font-mono text-[11px] font-semibold transition-colors focus:outline-none"
                                            style={{
                                                backgroundColor:
                                                    'var(--admin-input-bg)',
                                                borderColor:
                                                    'var(--admin-input-border)',
                                                color: 'var(--admin-text-primary)',
                                            }}
                                        >
                                            <option value="new">🟢 New</option>
                                            <option value="contacted">
                                                🔵 Contacted
                                            </option>
                                            <option value="in_progress">
                                                🟠 In Progress
                                            </option>
                                            <option value="resolved">
                                                🟣 Resolved
                                            </option>
                                            <option value="spam">
                                                🔴 Spam
                                            </option>
                                        </select>
                                    </td>

                                    {/* Received Date */}
                                    <td
                                        className="px-3 py-3 text-right font-mono text-[11px]"
                                        style={{
                                            color: 'var(--admin-text-secondary)',
                                        }}
                                    >
                                        <div>
                                            {new Date(
                                                item.created_at,
                                            ).toLocaleDateString()}
                                        </div>
                                        <div
                                            className="text-[10px]"
                                            style={{
                                                color: 'var(--admin-text-dim)',
                                            }}
                                        >
                                            {new Date(
                                                item.created_at,
                                            ).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onOpenDetail(item)
                                                }
                                                className="cursor-pointer rounded-lg border p-1.5 transition-colors"
                                                style={{
                                                    backgroundColor:
                                                        'var(--admin-button-secondary-bg)',
                                                    borderColor:
                                                        'var(--admin-border)',
                                                    color: 'var(--admin-text-secondary)',
                                                }}
                                                title="View details & edit notes"
                                            >
                                                <Eye className="h-3.5 w-3.5" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onDeleteSingle(
                                                        item.id,
                                                        item.name,
                                                    )
                                                }
                                                className="cursor-pointer rounded-lg border border-red-500/20 bg-red-500/10 p-1.5 text-red-500 transition-colors hover:bg-red-500/20"
                                                title="Delete enquiry"
                                            >
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td
                                colSpan={8}
                                className="px-4 py-16 text-center"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                <Mail
                                    className="mx-auto mb-3 h-10 w-10"
                                    style={{
                                        color: 'var(--admin-text-dim)',
                                    }}
                                />
                                <p
                                    className="text-sm font-semibold"
                                    style={{
                                        color: 'var(--admin-text-primary)',
                                    }}
                                >
                                    No inquiries match your criteria
                                </p>
                                <p className="mx-auto mt-1 max-w-sm text-xs">
                                    Try adjusting search keywords or changing
                                    the status filter.
                                </p>
                                {hasActiveFilters && (
                                    <button
                                        type="button"
                                        onClick={onClearFilters}
                                        className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors"
                                        style={{
                                            backgroundColor:
                                                'var(--admin-button-secondary-bg)',
                                            borderColor: 'var(--admin-border)',
                                            color: 'var(--admin-text-primary)',
                                        }}
                                    >
                                        <RotateCcw className="h-3.5 w-3.5" />
                                        <span>Reset Filters</span>
                                    </button>
                                )}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
