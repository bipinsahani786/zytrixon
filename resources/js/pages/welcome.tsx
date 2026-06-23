import { Head } from '@inertiajs/react';
import { useEffect, useState, lazy, Suspense } from 'react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import LoadingScreen from '@/components/landing/loading-screen';
import CustomCursor from '@/components/landing/custom-cursor';
import GrainOverlay from '@/components/landing/grain-overlay';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
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
const LazyFloatingButtons = lazy(() => import('@/components/landing/whatsapp-float'));

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
            <Head>
                <title>Zytrixon Tech | Best Software Company in Patna & Global IT Solutions</title>
                <meta
                    name="description"
                    content="Zytrixon Tech is a leading software company in Patna offering Web Development, App Development, IoT, and Digital Marketing services globally."
                />
                <meta name="keywords" content="Software Company Patna, Web Development, App Development, IoT, Zytrixon, Best IT Company Bihar" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://zytrixontech.com" />

                {/* Open Graph */}
                <meta property="og:title" content="Zytrixon Tech | Best Software Company in Patna" />
                <meta property="og:description" content="We Engineer Digital Dominance. From Patna to the World — enterprise-grade Web, Mobile, and IoT solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zytrixontech.com" />
                <meta property="og:image" content="https://zytrixontech.com/assets/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zytrixon Tech | Best Software Company in Patna" />
                <meta name="twitter:description" content="We Engineer Digital Dominance. From Patna to the World — enterprise-grade Web, Mobile, and IoT solutions." />
                <meta name="twitter:image" content="https://zytrixontech.com/assets/og-image.jpg" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Zytrixon Tech',
                        url: 'https://zytrixontech.com',
                        logo: 'https://zytrixontech.com/assets/logo.jpg',
                        description: 'Leading software company in Patna offering Web Development, App Development, IoT, and Digital Marketing services globally.',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Kankarbagh',
                            addressLocality: 'Patna',
                            addressRegion: 'Bihar',
                            postalCode: '800020',
                            addressCountry: 'IN',
                        },
                        contactPoint: {
                            '@type': 'ContactPoint',
                            telephone: '+91-7049711475',
                            contactType: 'customer service',
                            email: 'zytrixon@gmail.com',
                        },
                    })}
                </script>
            </Head>

            <LoadingScreen />
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
                    <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
                        <LazyPortfolioPreview />
                        <LazyTechStackSection />
                        <LazyTeamSection />
                        <LazyClientsSection />
                        <LazyTestimonialsSection />
                        <LazyCoreValuesSection />
                        <LazyFAQSection />
                        <LazyGlobalFootprint />
                        <LazyContactSection />
                        <LazyFooterCTA />
                    </Suspense>
                ) : (
                    <div style={{ minHeight: '50vh' }}></div>
                )}
            </main>

            {mounted && (
                <Suspense fallback={null}>
                    <LazyFooter />
                    <LazyFloatingButtons />
                </Suspense>
            )}
        </ThemeProvider>
    );
}
