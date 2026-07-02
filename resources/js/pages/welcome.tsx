import SeoHead from '@/components/seo/SeoHead';
import { useEffect, useState, lazy, Suspense } from 'react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import GrainOverlay from '@/components/landing/grain-overlay';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import LazySection from '@/components/landing/lazy-section';
import HeroSection from '@/components/landing/hero-section';
import MarqueeStrip from '@/components/landing/marquee-strip';
import AboutSection from '@/components/landing/about-section';
import StatsSection from '@/components/landing/stats-section';
import ServicesSection from '@/components/landing/services-section';
import IndustriesSection from '@/components/landing/industries-section';
import ProcessSection from '@/components/landing/process-section';

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
                <MarqueeStrip />
                <AboutSection />
                <StatsSection />
                <ServicesSection />
                <IndustriesSection />
                <ProcessSection />
                {mounted ? (
                    <>
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
