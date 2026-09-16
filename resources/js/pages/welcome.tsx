import { useEffect } from 'react';

// Landing Sections
import AboutSection from '@/components/landing/about-section';
import ClientsSection from '@/components/landing/clients-section';
import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import FAQSection from '@/components/landing/faq-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import HeroSection from '@/components/landing/hero-section';
import IndustriesSection from '@/components/landing/industries-section';
import LazySection from '@/components/landing/lazy-section';
import MarqueeStrip from '@/components/landing/marquee-strip';
import PortfolioPreview from '@/components/landing/portfolio-preview';
import ProcessSection from '@/components/landing/process-section';
import ServicesSection from '@/components/landing/services-section';
import StatsSection from '@/components/landing/stats-section';
import TeamSection from '@/components/landing/team-section';
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PublicLayout from '@/components/layouts/PublicLayout';

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
        <PublicLayout>
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
                <PortfolioPreview />
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
        </PublicLayout>
    );
}
