import React from 'react';
import {
    ShieldCheck,
    Shield,
    CheckCircle2,
    Clock,
    Edit3,
    Trash2,
    Users,
} from 'lucide-react';
import type { UserItem } from './types';

interface UserTableProps {
    users: UserItem[];
    currentUserId?: number;
    onEdit: (user: UserItem) => void;
    onDelete: (user: UserItem) => void;
}

export default function UserTable({
    users,
    currentUserId,
    onEdit,
    onDelete,
}: UserTableProps) {
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
                        <th className="px-4 py-3.5 font-semibold">User</th>
                        <th className="px-4 py-3.5 font-semibold">Role</th>
                        <th className="px-4 py-3.5 font-semibold">
                            Email Verification
                        </th>
                        <th className="px-4 py-3.5 font-semibold">
                            Registered
                        </th>
                        <th className="px-4 py-3.5 text-right font-semibold">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody
                    className="divide-y"
                    style={{ borderColor: 'var(--admin-table-border)' }}
                >
                    {users.length > 0 ? (
                        users.map((u) => {
                            const isSelf = currentUserId === u.id;
                            return (
                                <tr
                                    key={u.id}
                                    className="transition-colors"
                                    style={{
                                        borderBottom:
                                            '1px solid var(--admin-table-border)',
                                    }}
                                >
                                    {/* User Details */}
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-bold uppercase shadow-sm"
                                                style={{
                                                    backgroundColor:
                                                        u.role === 'admin'
                                                            ? 'rgba(16, 185, 129, 0.12)'
                                                            : 'var(--admin-button-secondary-bg)',
                                                    borderColor:
                                                        u.role === 'admin'
                                                            ? 'rgba(16, 185, 129, 0.3)'
                                                            : 'var(--admin-border)',
                                                    color:
                                                        u.role === 'admin'
                                                            ? 'var(--admin-accent)'
                                                            : 'var(--admin-text-primary)',
                                                }}
                                            >
                                                {u.name.charAt(0)}
                                            </div>
                                            <div className="min-w-0">
                                                <div
                                                    className="flex items-center gap-2 font-semibold"
                                                    style={{
                                                        color: 'var(--admin-text-primary)',
                                                    }}
                                                >
                                                    <span>{u.name}</span>
                                                    {isSelf && (
                                                        <span
                                                            className="rounded-full px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase"
                                                            style={{
                                                                backgroundColor:
                                                                    'var(--admin-button-secondary-bg)',
                                                                color: 'var(--admin-text-secondary)',
                                                            }}
                                                        >
                                                            You
                                                        </span>
                                                    )}
                                                </div>
                                                <div
                                                    className="truncate font-mono text-[11px]"
                                                    style={{
                                                        color: 'var(--admin-text-muted)',
                                                    }}
                                                >
                                                    {u.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Role Badge */}
                                    <td className="px-4 py-3">
                                        {u.role === 'admin' ? (
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-500">
                                                <ShieldCheck className="h-3.5 w-3.5" />
                                                ADMINISTRATOR
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-blue-500">
                                                <Shield className="h-3.5 w-3.5" />
                                                CUSTOMER
                                            </span>
                                        )}
                                    </td>

                                    {/* Verification */}
                                    <td className="px-4 py-3">
                                        {u.email_verified_at ? (
                                            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-500">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                                <span>Verified</span>
                                            </span>
                                        ) : (
                                            <span
                                                className="inline-flex items-center gap-1 font-mono text-[11px]"
                                                style={{
                                                    color: 'var(--admin-text-dim)',
                                                }}
                                            >
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>Unverified</span>
                                            </span>
                                        )}
                                    </td>

                                    {/* Registered Date */}
                                    <td
                                        className="px-4 py-3 font-mono text-[11px]"
                                        style={{
                                            color: 'var(--admin-text-muted)',
                                        }}
                                    >
                                        {new Date(
                                            u.created_at,
                                        ).toLocaleDateString()}
                                    </td>

                                    {/* Actions */}
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <button
                                                type="button"
                                                onClick={() => onEdit(u)}
                                                className="cursor-pointer rounded-lg border p-1.5 transition-colors"
                                                style={{
                                                    backgroundColor:
                                                        'var(--admin-button-secondary-bg)',
                                                    borderColor:
                                                        'var(--admin-border)',
                                                    color: 'var(--admin-text-secondary)',
                                                }}
                                                title="Edit User"
                                            >
                                                <Edit3 className="h-3.5 w-3.5" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => onDelete(u)}
                                                disabled={isSelf}
                                                className={`rounded-lg border p-1.5 transition-colors ${
                                                    isSelf
                                                        ? 'cursor-not-allowed opacity-30'
                                                        : 'cursor-pointer hover:bg-red-500/20'
                                                }`}
                                                style={{
                                                    backgroundColor:
                                                        'rgba(239, 68, 68, 0.1)',
                                                    borderColor:
                                                        'rgba(239, 68, 68, 0.2)',
                                                    color: '#ef4444',
                                                }}
                                                title={
                                                    isSelf
                                                        ? 'Cannot delete your own active account'
                                                        : 'Delete User'
                                                }
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
                                colSpan={5}
                                className="px-4 py-12 text-center"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                <Users
                                    className="mx-auto mb-2 h-8 w-8"
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
                                    No users found
                                </p>
                                <p className="mt-0.5 text-xs">
                                    Try changing your search keyword or role
                                    filter.
                                </p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
