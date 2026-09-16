import type { ReactNode } from 'react';
import ContactSection from '@/components/landing/contact-section';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import GrainOverlay from '@/components/landing/grain-overlay';
import Navbar from '@/components/landing/navbar';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import SeoHead from '@/components/seo/SeoHead';

export interface PublicLayoutProps {
    children: ReactNode;
    seo?: {
        title?: string;
        description?: string;
        keywords?: string;
        canonical?: string;
        image?: string;
        schema?: any;
    };
    hideFooterCTA?: boolean;
    showContactSection?: boolean;
    className?: string;
}

/**
 * PublicLayout: Centralized master shell for all marketing and content pages.
 * Ensures consistent navigation, theme toggle, custom cursor, SEO, and footer across the site.
 */
export default function PublicLayout({
    children,
    seo,
    hideFooterCTA = false,
    showContactSection = false,
    className = '',
}: PublicLayoutProps) {
    return (
        <ThemeProvider>
            {seo && <SeoHead seo={seo} />}

            <CustomCursor />
            <GrainOverlay />
            <TopBar />
            <Navbar />

            <main className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${className}`}>
                {children}
            </main>

            {!hideFooterCTA && <FooterCTA />}
            {showContactSection && <ContactSection />}
            <Footer />
        </ThemeProvider>
    );
}
