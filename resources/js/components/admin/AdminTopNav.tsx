import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { getActiveAdminNavItem } from '@/config/admin-navigation';
import AdminThemeToggle from '@/components/admin/AdminThemeToggle';
import { Clock, Globe, Menu } from 'lucide-react';

interface AdminTopNavProps {
    title?: string;
    onToggleMobileSidebar?: () => void;
    onToggleCollapse?: () => void;
    collapsed?: boolean;
}

export default function AdminTopNav({
    title: _title,
    onToggleMobileSidebar,
    collapsed = false,
}: AdminTopNavProps = {}) {
    const { auth } = usePage().props as any;
    const { url } = usePage();
    const user = auth?.user;

    // Directly derive active navigation item from sidebar navigation config
    const activeItem = getActiveAdminNavItem(url);
    const ActiveIcon = activeItem.icon;

    // Real-time live watch state
    const [currentTime, setCurrentTime] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                }),
            );
            setCurrentDate(
                now.toLocaleDateString('en-US', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                }),
            );
        };

        updateClock();
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between border-b px-3 backdrop-blur-xl transition-all duration-300 ease-in-out sm:px-6 ${
                collapsed ? 'lg:left-16' : 'lg:left-56'
            }`}
            style={{
                backgroundColor: 'var(--admin-topbar-bg)',
                borderColor: 'var(--admin-border)',
            }}
        >
            {/* Left Side: Mobile toggle + Active Page Card with glowing vertical line */}
            <div className="flex min-w-0 items-center gap-2.5">
                {/* Mobile Hamburger Menu Toggle Button */}
                <button
                    type="button"
                    onClick={onToggleMobileSidebar}
                    aria-label="Open sidebar menu"
                    className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl border transition-colors lg:hidden"
                    style={{
                        backgroundColor: 'var(--admin-button-secondary-bg)',
                        borderColor: 'var(--admin-border)',
                        color: 'var(--admin-text-secondary)',
                    }}
                >
                    <Menu className="h-4 w-4" />
                </button>

                {/* Active Section Card: rounded rect with active vertical line glow */}
                <div
                    className="flex items-center gap-2 rounded-xl border px-3 py-1.5 shadow-sm transition-all duration-200"
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    {/* Glowing Active Vertical Line */}
                    <div
                        className="h-3.5 w-1 shrink-0 rounded-full"
                        style={{
                            backgroundColor: 'var(--admin-accent)',
                            boxShadow: '0 0 8px var(--admin-accent)',
                        }}
                    />

                    {/* Active Icon */}
                    <ActiveIcon
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: 'var(--admin-accent)' }}
                    />

                    {/* Only the active section name (no long content) */}
                    <span
                        className="font-heading text-xs font-bold tracking-tight whitespace-nowrap sm:text-sm"
                        style={{ color: 'var(--admin-text-primary)' }}
                    >
                        {activeItem.label}
                    </span>
                </div>
            </div>

            {/* Right Side: Live Watch + Theme Toggle + Live Website + User Profile (NO Logout button) */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
                {/* Live Watch / Clock */}
                <div
                    className="flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 font-mono text-xs shadow-inner sm:gap-2 sm:px-3 sm:py-1.5"
                    title="Live system time"
                    style={{
                        backgroundColor: 'var(--admin-card-subtle)',
                        borderColor: 'var(--admin-border)',
                        color: 'var(--admin-text-primary)',
                    }}
                >
                    <div className="relative flex h-2 w-2 shrink-0 items-center justify-center">
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                            style={{ backgroundColor: 'var(--admin-accent)' }}
                        />
                        <span
                            className="relative inline-flex h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: 'var(--admin-accent)' }}
                        />
                    </div>
                    <Clock
                        className="h-3 w-3 shrink-0"
                        style={{ color: 'var(--admin-accent)' }}
                    />
                    <span
                        className="text-[11px] font-bold tracking-wide sm:text-xs"
                        style={{ color: 'var(--admin-text-primary)' }}
                    >
                        {currentTime || '--:--'}
                    </span>
                    <span
                        className="hidden text-[11px] md:inline"
                        style={{ color: 'var(--admin-text-muted)' }}
                    >
                        ({currentDate})
                    </span>
                </div>

                {/* Theme Toggle Button */}
                <AdminThemeToggle />

                {/* Live Website Preview (Desktop only) */}
                <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs transition-all xl:flex"
                    title="Open live website in new tab"
                    style={{
                        backgroundColor: 'var(--admin-button-secondary-bg)',
                        borderColor: 'var(--admin-border)',
                        color: 'var(--admin-text-secondary)',
                    }}
                >
                    <Globe className="h-3.5 w-3.5 text-blue-400" />
                    <span>Live Site</span>
                </a>

                <div
                    className="hidden h-5 w-px sm:block"
                    style={{ backgroundColor: 'var(--admin-border)' }}
                />

                {/* User Pill */}
                <div
                    className="flex items-center gap-2 rounded-xl border p-1 sm:pr-3"
                    style={{
                        backgroundColor: 'var(--admin-card-subtle)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    <div
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[11px] font-bold"
                        style={{
                            borderColor: 'var(--admin-border)',
                            backgroundColor: 'var(--admin-button-secondary-bg)',
                            color: 'var(--admin-accent)',
                        }}
                    >
                        {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                    </div>
                    <div className="hidden text-left sm:block">
                        <div
                            className="max-w-[90px] truncate text-[11px] leading-tight font-semibold"
                            style={{ color: 'var(--admin-text-primary)' }}
                        >
                            {user?.name || 'Admin'}
                        </div>
                        <div
                            className="text-[9px] capitalize"
                            style={{ color: 'var(--admin-text-muted)' }}
                        >
                            {user?.role || 'admin'}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
