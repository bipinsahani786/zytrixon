import SeoHead from '@/components/seo/SeoHead';
import { useEffect, useState, Suspense, lazy } from 'react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import InnerPageHero from '@/components/landing/inner-page-hero';

const LazyPortfolioPreview = lazy(() => import('@/components/landing/portfolio-preview'));
const LazyClientsSection = lazy(() => import('@/components/landing/clients-section'));
const LazyTestimonialsSection = lazy(() => import('@/components/landing/testimonials-section'));
const LazyTechStackSection = lazy(() => import('@/components/landing/tech-stack-section'));
const LazyGlobalFootprint = lazy(() => import('@/components/landing/global-footprint'));
const LazyContactSection = lazy(() => import('@/components/landing/contact-section'));
const LazyCoreValuesSection = lazy(() => import('@/components/landing/core-values-section'));
const LazyFooterCTA = lazy(() => import('@/components/landing/footer-cta'));
const LazyFooter = lazy(() => import('@/components/landing/footer'));

export default function Portfolio() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ThemeProvider>
            <SeoHead seo={{ 
                title: 'Portfolio & Work | Zytrixon Tech', 
                description: 'Explore our latest web, mobile, and IoT projects delivered successfully across the globe.'
            }} />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main>
                <InnerPageHero 
                    title="Our Best Work" 
                    subtitle="Discover how we transform ideas into digital dominance with cutting-edge technologies." 
                />

                {mounted ? (
                    <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
                        {/* We use the portfolio preview section for now, which already has a grid of projects */}
                        <LazyPortfolioPreview hideHeader={true} />
                        <LazyTechStackSection />
                        <LazyClientsSection />
                        <LazyTestimonialsSection />
                        <LazyGlobalFootprint />
                        <LazyCoreValuesSection />
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
