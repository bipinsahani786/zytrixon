import SeoHead from '@/components/seo/SeoHead';
import { useEffect, useState, Suspense, lazy } from 'react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import InnerPageHero from '@/components/landing/inner-page-hero';

const LazyAboutSection = lazy(() => import('@/components/landing/about-section'));
const LazyCoreValuesSection = lazy(() => import('@/components/landing/core-values-section'));
const LazyTeamSection = lazy(() => import('@/components/landing/team-section'));
const LazyGlobalFootprint = lazy(() => import('@/components/landing/global-footprint'));
const LazyTechStackSection = lazy(() => import('@/components/landing/tech-stack-section'));
const LazyTestimonialsSection = lazy(() => import('@/components/landing/testimonials-section'));
const LazyFAQSection = lazy(() => import('@/components/landing/faq-section'));
const LazyContactSection = lazy(() => import('@/components/landing/contact-section'));
const LazyFooterCTA = lazy(() => import('@/components/landing/footer-cta'));
const LazyFooter = lazy(() => import('@/components/landing/footer'));

export default function About() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ThemeProvider>
            <SeoHead seo={{ 
                title: 'About Us | Zytrixon Tech', 
                description: 'Learn about Zytrixon Tech, our mission, vision, and the team driving digital innovation from Patna to the world.'
            }} />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main>
                <InnerPageHero 
                    title="Our Story" 
                    subtitle="We are a team of passionate engineers and designers building enterprise-grade solutions." 
                />

                {mounted ? (
                    <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
                        <LazyAboutSection />
                        <LazyCoreValuesSection />
                        <LazyTeamSection />
                        <LazyGlobalFootprint />
                        <LazyTechStackSection />
                        <LazyTestimonialsSection />
                        <LazyFAQSection />
                        <LazyFooterCTA />
                        <LazyContactSection />
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
