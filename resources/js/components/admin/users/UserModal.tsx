import React from 'react';
import { createPortal } from 'react-dom';
import { X, Key, UserCheck, Shield, ShieldCheck } from 'lucide-react';
import AdminDropdown from '@/components/admin/AdminDropdown';
import type { UserFormData, UserItem } from './types';

interface UserModalProps {
    isOpen: boolean;
    mode: 'create' | 'edit';
    formData: UserFormData;
    onChange: (field: keyof UserFormData, value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
    targetUser?: UserItem | null;
}

export default function UserModal({
    isOpen,
    mode,
    formData,
    onChange,
    onSubmit,
    onClose,
    targetUser,
}: UserModalProps) {
    if (!isOpen) {
        return null;
    }

    if (typeof document === 'undefined') {
        return null;
    }

    const isEdit = mode === 'edit';

    return createPortal(
        <div
            className="animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
            style={{ backgroundColor: 'var(--admin-modal-overlay)' }}
        >
            <div
                className="relative w-full max-w-lg space-y-5 rounded-2xl border p-6 shadow-2xl transition-colors duration-200"
                style={{
                    backgroundColor: 'var(--admin-modal-bg)',
                    borderColor: 'var(--admin-border)',
                }}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between border-b pb-4"
                    style={{ borderColor: 'var(--admin-border)' }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-bold shadow-sm"
                            style={{
                                backgroundColor:
                                    'var(--admin-button-secondary-bg)',
                                borderColor: 'var(--admin-border)',
                                color: 'var(--admin-accent)',
                            }}
                        >
                            <UserCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <h3
                                className="font-heading text-base font-bold"
                                style={{ color: 'var(--admin-text-primary)' }}
                            >
                                {isEdit
                                    ? `Edit User: ${targetUser?.name}`
                                    : 'Create New Account'}
                            </h3>
                            <p
                                className="text-xs"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                {isEdit
                                    ? 'Update identity, portal access role, or set a new password'
                                    : 'Add an administrator or client account to Zytrixon'}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer rounded-lg p-1.5 transition-colors"
                        style={{
                            color: 'var(--admin-text-secondary)',
                            backgroundColor: 'var(--admin-button-secondary-bg)',
                        }}
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={onSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label
                            className="mb-1.5 block text-xs font-semibold"
                            style={{ color: 'var(--admin-text-secondary)' }}
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => onChange('name', e.target.value)}
                            placeholder="e.g. John Doe"
                            className="w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none"
                            style={{
                                backgroundColor: 'var(--admin-input-bg)',
                                borderColor: 'var(--admin-input-border)',
                                color: 'var(--admin-text-primary)',
                            }}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            className="mb-1.5 block text-xs font-semibold"
                            style={{ color: 'var(--admin-text-secondary)' }}
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => onChange('email', e.target.value)}
                            placeholder="john@example.com"
                            className="w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none"
                            style={{
                                backgroundColor: 'var(--admin-input-bg)',
                                borderColor: 'var(--admin-input-border)',
                                color: 'var(--admin-text-primary)',
                            }}
                        />
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label
                            className="mb-1.5 block text-xs font-semibold"
                            style={{ color: 'var(--admin-text-secondary)' }}
                        >
                            Account Role & Permissions
                        </label>
                        <AdminDropdown
                            value={formData.role}
                            onChange={(val) =>
                                onChange('role', val as 'admin' | 'customer')
                            }
                            options={[
                                {
                                    value: 'customer',
                                    label: 'Customer (Client Portal)',
                                    description:
                                        'Restricted to client dashboard and orders',
                                    icon: Shield,
                                },
                                {
                                    value: 'admin',
                                    label: 'Administrator (Full IAM)',
                                    description:
                                        'Full administrative rights and console access',
                                    icon: ShieldCheck,
                                },
                            ]}
                            placeholder="Select role..."
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-1.5 flex items-center justify-between">
                            <label
                                className="text-xs font-semibold"
                                style={{ color: 'var(--admin-text-secondary)' }}
                            >
                                {isEdit
                                    ? 'New Password (Optional)'
                                    : 'Account Password'}
                            </label>
                            {isEdit && (
                                <span
                                    className="text-[11px]"
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    Leave blank to keep unchanged
                                </span>
                            )}
                        </div>
                        <div className="relative">
                            <Key
                                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
                                style={{ color: 'var(--admin-text-dim)' }}
                            />
                            <input
                                type="password"
                                required={!isEdit}
                                minLength={8}
                                value={formData.password || ''}
                                onChange={(e) =>
                                    onChange('password', e.target.value)
                                }
                                placeholder={
                                    isEdit
                                        ? '•••••••• (unchanged)'
                                        : 'Minimum 8 characters'
                                }
                                className="w-full rounded-xl border py-2.5 pr-4 pl-9 text-xs transition-colors focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--admin-input-bg)',
                                    borderColor: 'var(--admin-input-border)',
                                    color: 'var(--admin-text-primary)',
                                }}
                            />
                        </div>
                    </div>

                    {/* Form Action Buttons */}
                    <div
                        className="flex items-center justify-end gap-3 border-t pt-4"
                        style={{ borderColor: 'var(--admin-border)' }}
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer rounded-xl border px-4 py-2.5 text-xs font-semibold transition-colors"
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
                            className="cursor-pointer rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
                            style={{
                                backgroundColor: 'var(--admin-accent)',
                            }}
                        >
                            {isEdit ? 'Save Changes' : 'Create Account'}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body,
    );
}
