import SeoHead from '@/components/seo/SeoHead';
import { useEffect, useState, lazy, Suspense } from 'react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import GrainOverlay from '@/components/landing/grain-overlay';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import LazySection from '@/components/landing/lazy-section';
import HeroSection from '@/components/landing/hero-section';
const LazyMarqueeStrip = lazy(() => import('@/components/landing/marquee-strip'));
const LazyAboutSection = lazy(() => import('@/components/landing/about-section'));
const LazyStatsSection = lazy(() => import('@/components/landing/stats-section'));
const LazyServicesSection = lazy(() => import('@/components/landing/services-section'));
const LazyIndustriesSection = lazy(() => import('@/components/landing/industries-section'));
const LazyProcessSection = lazy(() => import('@/components/landing/process-section'));

const LazyPortfolioPreview = lazy(() => import('@/components/landing/portfolio-preview'));
const LazyTechStackSection = lazy(() => import('@/components/landing/tech-stack-section'));
const LazyTeamSection = lazy(() => import('@/components/landing/team-section'));
const LazyClientsSection = lazy(() => import('@/components/landing/clients-section'));
const LazyTestimonialsSection = lazy(() => import('@/components/landing/testimonials-section'));
const LazyCoreValuesSection = lazy(() => import('@/components/landing/core-values-section'));
const LazyFAQSection = lazy(() => import('@/components/landing/faq-section'));
const LazyGlobalFootprint = lazy(() => import('@/components/landing/global-footprint'));
const LazyContactSection = lazy(() => import('@/components/landing/contact-section'));
const LazyFooterCTA = lazy(() => import('@/components/landing/footer-cta'));
const LazyFooter = lazy(() => import('@/components/landing/footer'));

export default function Welcome() {
    const [mounted, setMounted] = useState(false);

    // Tab blur title animation
    useEffect(() => {
        setMounted(true);
        const originalTitle = document.title;
        const handleVisibilityChange = () => {
            document.title = document.hidden ? 'Come back! 👋 — Zytrixon Tech' : originalTitle;
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    return (
        <ThemeProvider>
            <SeoHead />

            <CustomCursor />
            <GrainOverlay />
            <TopBar />
            <Navbar />

            <main>
                <HeroSection />
                {mounted ? (
                    <>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '10vh' }} />}><LazyMarqueeStrip /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyAboutSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyStatsSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyServicesSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyIndustriesSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyProcessSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyPortfolioPreview /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyTechStackSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyTeamSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyClientsSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyTestimonialsSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyCoreValuesSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyFAQSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyGlobalFootprint /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyContactSection /></Suspense></LazySection>
                        <LazySection><Suspense fallback={<div style={{ minHeight: '50vh' }} />}><LazyFooterCTA /></Suspense></LazySection>
                    </>
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
