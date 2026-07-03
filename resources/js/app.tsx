import { createInertiaApp } from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Zytrixon Tech';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'welcome' || name === 'ServiceSeoPage' || name === 'ServicesIndex' || name === 'About' || name === 'Portfolio' || name === 'Contact' || name === 'Team' || name === 'Blog' || name === 'Careers' || name === 'Process' || name === 'BlogDetails' || name === 'PrivacyPolicy' || name === 'TermsConditions':
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },
    strictMode: true,
    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <Toaster />
            </TooltipProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

// Remove SSR fallback globally after React hydrates
setTimeout(() => {
    const ssrFallback = document.getElementById('ssr-fallback');
    if (ssrFallback) {
        ssrFallback.style.opacity = '0';
        ssrFallback.style.transition = 'opacity 0.5s ease';
        setTimeout(() => ssrFallback.remove(), 500);
    }
}, 100);
