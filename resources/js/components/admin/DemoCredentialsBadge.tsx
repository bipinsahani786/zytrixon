import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

interface DemoCredentialsBadgeProps {
    onSelectRole: (role: 'admin' | 'customer') => void;
    currentEmail?: string;
}

export default function DemoCredentialsBadge({ onSelectRole, currentEmail }: DemoCredentialsBadgeProps) {
    const isAdmin = currentEmail === 'admin@zytrixon.com';
    const isCustomer = currentEmail === 'customer@zytrixon.com';

    return (
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl border transition-colors"
            style={{
                backgroundColor: 'var(--zy-surface-2, #0e0e12)',
                borderColor: 'var(--zy-border-subtle, rgba(255, 255, 255, 0.08))',
            }}
        >
            <span
                className="text-[11px] font-mono px-2"
                style={{ color: 'var(--zy-text-muted, #666666)' }}
            >
                Quick Fill:
            </span>

            <div className="flex items-center gap-1.5 flex-1 justify-end">
                {/* Admin Pill */}
                <button
                    type="button"
                    onClick={() => onSelectRole('admin')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all duration-200"
                    style={{
                        backgroundColor: isAdmin
                            ? 'var(--zy-card-bg-hover, rgba(255, 255, 255, 0.12))'
                            : 'transparent',
                        borderColor: isAdmin
                            ? 'var(--zy-text-primary, #ffffff)'
                            : 'var(--zy-border-subtle, rgba(255, 255, 255, 0.1))',
                        color: 'var(--zy-text-primary, #ffffff)',
                        boxShadow: isAdmin ? '0 0 12px var(--zy-accent-glow, rgba(255,255,255,0.1))' : 'none',
                    }}
                >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Admin</span>
                </button>

                {/* Customer Pill */}
                <button
                    type="button"
                    onClick={() => onSelectRole('customer')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all duration-200"
                    style={{
                        backgroundColor: isCustomer
                            ? 'var(--zy-card-bg-hover, rgba(255, 255, 255, 0.12))'
                            : 'transparent',
                        borderColor: isCustomer
                            ? 'var(--zy-text-primary, #ffffff)'
                            : 'var(--zy-border-subtle, rgba(255, 255, 255, 0.1))',
                        color: 'var(--zy-text-primary, #ffffff)',
                        boxShadow: isCustomer ? '0 0 12px var(--zy-accent-glow, rgba(255,255,255,0.1))' : 'none',
                    }}
                >
                    <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Customer</span>
                </button>
            </div>
        </div>
    );
}
