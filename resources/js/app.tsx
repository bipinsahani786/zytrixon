import { createInertiaApp } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

gsap.registerPlugin(ScrollTrigger);

const appName = import.meta.env.VITE_APP_NAME || 'Zytrixon Tech';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const pageModule = (await resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        )) as any;
        const defaultExport = pageModule.default;

        if (defaultExport && defaultExport.layout === undefined) {
            switch (true) {
                case name === 'welcome' ||
                    name === 'ServiceSeoPage' ||
                    name === 'ServicesIndex' ||
                    name === 'LocationsIndex' ||
                    name === 'LocationDetails' ||
                    name === 'About' ||
                    name === 'Portfolio' ||
                    name === 'Contact' ||
                    name === 'Team' ||
                    name === 'Blog' ||
                    name === 'Careers' ||
                    name === 'Process' ||
                    name === 'BlogDetails' ||
                    name === 'CaseStudiesIndex' ||
                    name === 'CaseStudyDetails' ||
                    name === 'Error' ||
                    name === 'PrivacyPolicy' ||
                    name === 'TermsConditions':
                    defaultExport.layout = null;
                    break;
                case name.startsWith('auth/'):
                    defaultExport.layout = (page: any) => (
                        <AuthLayout children={page} />
                    );
                    break;
                case name.startsWith('settings/'):
                    defaultExport.layout = (page: any) => (
                        <AppLayout>
                            <SettingsLayout children={page} />
                        </AppLayout>
                    );
                    break;
                default:
                    defaultExport.layout = (page: any) => (
                        <AppLayout children={page} />
                    );
                    break;
            }
        }

        return pageModule;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <TooltipProvider delayDuration={0}>
                <App {...props} />
                <Toaster />
            </TooltipProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

// Auto-recovery for Vite dynamic chunk errors (e.g. after new deployment)
if (typeof window !== 'undefined') {
    window.addEventListener('vite:preloadError', (event) => {
        event.preventDefault();
        window.location.reload();
    });

    window.addEventListener('error', (event) => {
        const msg = event?.message || '';
        if (
            msg.includes('Failed to fetch dynamically imported module') ||
            msg.includes('Loading chunk') ||
            msg.includes('Importing a module script failed')
        ) {
            const lastReload = sessionStorage.getItem('vite_chunk_reload');
            const now = Date.now();
            if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
                sessionStorage.setItem('vite_chunk_reload', now.toString());
                window.location.reload();
            }
        }
    });
}

// Refresh GSAP ScrollTrigger on window resize (avoid observing document.body to eliminate scroll jank)
if (typeof window !== 'undefined') {
    let resizeTimer: ReturnType<typeof setTimeout>;
    window.addEventListener(
        'resize',
        () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        },
        { passive: true },
    );
}
