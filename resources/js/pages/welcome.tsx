import { useEffect, lazy, Suspense } from 'react';

// Direct imports for SSR (so Google sees all content in HTML)
import AboutSection from '@/components/landing/about-section';
import ServicesSection from '@/components/landing/services-section';
import IndustriesSection from '@/components/landing/industries-section';
import ProcessSection from '@/components/landing/process-section';
import PortfolioPreview from '@/components/landing/portfolio-preview';
import TechStackSection from '@/components/landing/tech-stack-section';
import TeamSection from '@/components/landing/team-section';
import ClientsSection from '@/components/landing/clients-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import FAQSection from '@/components/landing/faq-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import ContactSection from '@/components/landing/contact-section';
import CustomCursor from '@/components/landing/custom-cursor';
import FooterCTA from '@/components/landing/footer-cta';
import Footer from '@/components/landing/footer';
import GrainOverlay from '@/components/landing/grain-overlay';
import HeroSection from '@/components/landing/hero-section';
import LazySection from '@/components/landing/lazy-section';
import MarqueeStrip from '@/components/landing/marquee-strip';
import Navbar from '@/components/landing/navbar';
import StatsSection from '@/components/landing/stats-section';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import SeoHead from '@/components/seo/SeoHead';

export default function Welcome() {
    // Tab blur title animation
    useEffect(() => {
        const originalTitle = document.title;
        const handleVisibilityChange = () => {
            document.title = document.hidden
                ? 'Come back! 👋 — Zytrixon Tech'
                : originalTitle;
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () =>
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange,
            );
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
                <LazySection>
                    <MarqueeStrip />
                </LazySection>
                <LazySection>
                    <AboutSection />
                </LazySection>
                <LazySection>
                    <StatsSection />
                </LazySection>
                <LazySection>
                    <ServicesSection />
                </LazySection>
                <LazySection>
                    <IndustriesSection />
                </LazySection>
                <LazySection>
                    <ProcessSection />
                </LazySection>
                <LazySection>
                    <PortfolioPreview limit={3} />
                </LazySection>
                <LazySection>
                    <TechStackSection />
                </LazySection>
                <LazySection>
                    <TeamSection />
                </LazySection>
                <LazySection>
                    <ClientsSection />
                </LazySection>
                <LazySection>
                    <TestimonialsSection />
                </LazySection>
                <LazySection>
                    <CoreValuesSection />
                </LazySection>
                <LazySection>
                    <FAQSection />
                </LazySection>
                <LazySection>
                    <GlobalFootprint />
                </LazySection>
                <LazySection>
                    <ContactSection />
                </LazySection>
                <LazySection>
                    <FooterCTA />
                </LazySection>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
