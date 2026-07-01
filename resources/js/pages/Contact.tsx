import SeoHead from '@/components/seo/SeoHead';
import { useEffect, useState, Suspense, lazy } from 'react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import InnerPageHero from '@/components/landing/inner-page-hero';

const LazyContactSection = lazy(() => import('@/components/landing/contact-section'));
const LazyFAQSection = lazy(() => import('@/components/landing/faq-section'));
const LazyGlobalFootprint = lazy(() => import('@/components/landing/global-footprint'));
const LazyTestimonialsSection = lazy(() => import('@/components/landing/testimonials-section'));
const LazyClientsSection = lazy(() => import('@/components/landing/clients-section'));
const LazyFooterCTA = lazy(() => import('@/components/landing/footer-cta'));
const LazyCoreValuesSection = lazy(() => import('@/components/landing/core-values-section'));
const LazyFooter = lazy(() => import('@/components/landing/footer'));

export default function Contact() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ThemeProvider>
            <SeoHead seo={{ 
                title: 'Contact Us | Zytrixon Tech', 
                description: 'Get in touch with Zytrixon Tech for Web Development, Mobile Apps, and Enterprise IT solutions.'
            }} />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main>
                <InnerPageHero 
                    title="Let's Talk" 
                    subtitle="Have a project in mind? Reach out and let's build something amazing together." 
                />

                {mounted ? (
                    <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
                        <LazyContactSection />
                        <LazyGlobalFootprint />
                        <LazyFAQSection />
                        <LazyTestimonialsSection />
                        <LazyClientsSection />
                        <LazyCoreValuesSection />
                        <LazyFooterCTA />
                    </Suspense>
                ) : (
                    <div style={{ minHeight: '50vh' }}></div>
                )}
            </main>

            {mounted && (
                <Suspense fallback={null}>
                    <LazyFooter />
                </Suspense>
            )}
        </ThemeProvider>
    );
}
