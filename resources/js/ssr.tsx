import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { TooltipProvider } from '@/components/ui/tooltip';

const appName = import.meta.env.VITE_APP_NAME || 'Zytrixon Tech';

createServer(
    (page) =>
        createInertiaApp({
            page,
            render: ReactDOMServer.renderToString,
            title: (title) => (title ? `${title} - ${appName}` : appName),
            resolve: async (name) => {
                const pageModule = (await resolvePageComponent(
                    `./pages/${name}.tsx`,
                    import.meta.glob('./pages/**/*.tsx')
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
                             name === 'PrivacyPolicy' || 
                             name === 'TermsConditions':
                            defaultExport.layout = null;
                            break;
                        case name.startsWith('auth/'):
                            defaultExport.layout = AuthLayout;
                            break;
                        case name.startsWith('settings/'):
                            defaultExport.layout = [AppLayout, SettingsLayout];
                            break;
                        default:
                            defaultExport.layout = AppLayout;
                            break;
                    }
                }
                
                return pageModule;
            },
            setup: ({ App, props }) => (
                <TooltipProvider delayDuration={0}>
                    <App {...props} />
                </TooltipProvider>
            ),
        }),
    process.env.PORT ? parseInt(process.env.PORT) : 13714
);
