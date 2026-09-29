import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, router, usePage } from '@inertiajs/react';
import Logo from '@/components/ui/logo';
import { ADMIN_NAV_ITEMS } from '@/config/admin-navigation';
import {
    LogOut,
    ShieldAlert,
    ChevronLeft,
    ChevronRight,
    X,
    AlertTriangle,
} from 'lucide-react';

interface AdminSidebarProps {
    className?: string;
    mobileOpen: boolean;
    onCloseMobile: () => void;
    collapsed: boolean;
    onToggleCollapse: () => void;
}

export default function AdminSidebar({
    className = '',
    mobileOpen,
    onCloseMobile,
    collapsed,
    onToggleCollapse,
}: AdminSidebarProps) {
    const { auth } = usePage().props as any;
    const { url } = usePage();
    const user = auth?.user;

    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const handleConfirmLogout = () => {
        setShowLogoutConfirm(false);
        router.post('/z-admin/logout');
    };

    return (
        <>
            {/* Mobile Backdrop Overlay */}
            {mobileOpen && (
                <div
                    onClick={onCloseMobile}
                    aria-hidden="true"
                    className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
                />
            )}

            {/* Sidebar Element (Thin & Sleek, Fixed on Left) */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 flex h-screen shrink-0 flex-col justify-between border-r transition-all duration-300 ease-in-out ${
                    mobileOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 ${collapsed ? 'w-16' : 'w-56'} ${className}`}
                style={{
                    backgroundColor: 'var(--admin-sidebar-bg)',
                    borderColor: 'var(--admin-border)',
                }}
            >
                {/* Border Active Toggle / Close Button */}
                <button
                    type="button"
                    onClick={() => {
                        if (mobileOpen) {
                            onCloseMobile();
                        } else {
                            onToggleCollapse();
                        }
                    }}
                    aria-label={
                        collapsed ? 'Expand sidebar' : 'Collapse sidebar'
                    }
                    title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    className="absolute top-5 -right-3.5 z-50 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border shadow-md transition-all duration-200 hover:scale-110 active:scale-95"
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                        color: 'var(--admin-text-primary)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    {collapsed ? (
                        <ChevronRight className="h-3.5 w-3.5" />
                    ) : (
                        <ChevronLeft className="h-3.5 w-3.5" />
                    )}
                </button>

                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                    {/* Brand Header */}
                    <div
                        className={`flex h-16 shrink-0 items-center border-b ${
                            collapsed
                                ? 'justify-center px-2'
                                : 'justify-between px-3.5'
                        }`}
                        style={{ borderColor: 'var(--admin-border)' }}
                    >
                        <Link
                            href="/z-admin/dashboard"
                            onClick={onCloseMobile}
                            className="flex items-center gap-2.5 overflow-hidden"
                        >
                            <div
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border p-1.5 backdrop-blur-sm"
                                style={{
                                    backgroundColor:
                                        'var(--admin-button-secondary-bg)',
                                    borderColor: 'var(--admin-border)',
                                }}
                            >
                                <Logo
                                    className="h-full w-full fill-current"
                                    style={{
                                        color: 'var(--admin-text-primary)',
                                    }}
                                />
                            </div>

                            {!collapsed && (
                                <div className="truncate">
                                    <div
                                        className="font-heading text-xs font-bold tracking-wider"
                                        style={{
                                            color: 'var(--admin-text-primary)',
                                        }}
                                    >
                                        ZYTRIXON
                                    </div>
                                    <div
                                        className="flex items-center gap-1 font-mono text-[9px] font-semibold"
                                        style={{ color: 'var(--admin-accent)' }}
                                    >
                                        <span
                                            className="h-1.5 w-1.5 animate-pulse rounded-full"
                                            style={{
                                                backgroundColor:
                                                    'var(--admin-accent)',
                                            }}
                                        />
                                        Console
                                    </div>
                                </div>
                            )}
                        </Link>
                    </div>

                    {/* Main Navigation (Strictly 3 Sections) */}
                    <nav className="space-y-1 p-2">
                        {!collapsed && (
                            <div
                                className="px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider uppercase"
                                style={{ color: 'var(--admin-text-muted)' }}
                            >
                                Management
                            </div>
                        )}

                        {ADMIN_NAV_ITEMS.map((item) => {
                            const Icon = item.icon;
                            const isActive = item.matcher(url);

                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={onCloseMobile}
                                    title={collapsed ? item.label : undefined}
                                    className={`group flex items-center rounded-xl py-2 text-xs font-medium transition-all ${
                                        collapsed
                                            ? 'justify-center px-2'
                                            : 'justify-between px-3'
                                    }`}
                                    style={
                                        isActive
                                            ? {
                                                  backgroundColor:
                                                      'var(--admin-accent)',
                                                  color: '#ffffff',
                                                  fontWeight: 600,
                                                  boxShadow:
                                                      '0 4px 12px var(--admin-accent-glow)',
                                              }
                                            : {
                                                  color: 'var(--admin-text-secondary)',
                                              }
                                    }
                                >
                                    <div className="flex items-center gap-2.5 truncate">
                                        <div
                                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-colors"
                                            style={{
                                                backgroundColor: isActive
                                                    ? 'rgba(255, 255, 255, 0.2)'
                                                    : 'var(--admin-button-secondary-bg)',
                                                color: isActive
                                                    ? '#ffffff'
                                                    : 'inherit',
                                            }}
                                        >
                                            <Icon className="h-3.5 w-3.5" />
                                        </div>

                                        {!collapsed && (
                                            <span className="truncate text-[11px] tracking-tight">
                                                {item.label}
                                            </span>
                                        )}
                                    </div>

                                    {!collapsed && isActive && (
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom User Profile & Logout (No Bottom Collapse Button) */}
                <div
                    className="shrink-0 space-y-2 border-t p-2.5"
                    style={{ borderColor: 'var(--admin-border)' }}
                >
                    {/* User Info */}
                    {!collapsed ? (
                        <div
                            className="flex items-center justify-between rounded-xl border p-2"
                            style={{
                                backgroundColor: 'var(--admin-card-subtle)',
                                borderColor: 'var(--admin-border-subtle)',
                            }}
                        >
                            <div className="min-w-0 pr-1.5">
                                <div
                                    className="flex items-center gap-1.5 truncate text-[11px] font-semibold"
                                    style={{
                                        color: 'var(--admin-text-primary)',
                                    }}
                                >
                                    <ShieldAlert
                                        className="h-3 w-3 shrink-0"
                                        style={{ color: 'var(--admin-accent)' }}
                                    />
                                    <span className="truncate">
                                        {user?.name || 'Administrator'}
                                    </span>
                                </div>
                                <div
                                    className="truncate font-mono text-[10px]"
                                    style={{ color: 'var(--admin-text-muted)' }}
                                >
                                    {user?.email || 'admin@zytrixon.com'}
                                </div>
                            </div>
                            <span
                                className="shrink-0 rounded border px-1 py-0.5 font-mono text-[8px] font-bold uppercase"
                                style={{
                                    borderColor: 'var(--admin-border)',
                                    backgroundColor:
                                        'var(--admin-button-secondary-bg)',
                                    color: 'var(--admin-accent)',
                                }}
                            >
                                Admin
                            </span>
                        </div>
                    ) : (
                        <div
                            className="flex justify-center"
                            title={`${user?.name || 'Administrator'} (${user?.email || ''})`}
                        >
                            <div
                                className="flex h-7 w-7 items-center justify-center rounded-lg border text-xs font-bold"
                                style={{
                                    borderColor: 'var(--admin-border)',
                                    backgroundColor:
                                        'var(--admin-button-secondary-bg)',
                                    color: 'var(--admin-accent)',
                                }}
                            >
                                {user?.name
                                    ? user.name.charAt(0).toUpperCase()
                                    : 'A'}
                            </div>
                        </div>
                    )}

                    {/* Logout Button */}
                    <button
                        type="button"
                        onClick={() => setShowLogoutConfirm(true)}
                        title="Logout"
                        className={`flex w-full cursor-pointer items-center justify-center rounded-xl border border-transparent p-2 text-xs font-medium text-red-500 transition-all hover:bg-red-500/10 ${
                            collapsed ? '' : 'gap-2'
                        }`}
                    >
                        <LogOut className="h-4 w-4 shrink-0" />
                        {!collapsed && (
                            <span className="text-[11px] font-semibold">
                                Logout
                            </span>
                        )}
                    </button>
                </div>
            </aside>

            {/* Confirm Logout Modal (renders via createPortal to blur the entire admin panel) */}
            {showLogoutConfirm &&
                typeof document !== 'undefined' &&
                createPortal(
                    <div
                        className="animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
                        style={{
                            backgroundColor: 'var(--admin-modal-overlay)',
                        }}
                    >
                        <div
                            className="relative w-full max-w-sm space-y-4 rounded-2xl border p-6 shadow-2xl transition-colors duration-200"
                            style={{
                                backgroundColor: 'var(--admin-modal-bg)',
                                borderColor: 'var(--admin-border)',
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500">
                                    <LogOut className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3
                                        className="font-heading text-base font-bold"
                                        style={{
                                            color: 'var(--admin-text-primary)',
                                        }}
                                    >
                                        Confirm Logout
                                    </h3>
                                    <p
                                        className="text-xs"
                                        style={{
                                            color: 'var(--admin-text-muted)',
                                        }}
                                    >
                                        Are you sure you want to end your
                                        session?
                                    </p>
                                </div>
                            </div>

                            <p
                                className="text-xs leading-relaxed"
                                style={{
                                    color: 'var(--admin-text-secondary)',
                                }}
                            >
                                You will be safely signed out of the Zytrixon
                                Admin Console and redirected to the login
                                screen.
                            </p>

                            <div
                                className="flex items-center justify-end gap-2.5 border-t pt-3"
                                style={{ borderColor: 'var(--admin-border)' }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setShowLogoutConfirm(false)}
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
                                    type="button"
                                    onClick={handleConfirmLogout}
                                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-500 active:scale-95"
                                >
                                    <LogOut className="h-3.5 w-3.5" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}
