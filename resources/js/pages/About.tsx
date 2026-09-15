import AboutSection from '@/components/landing/about-section';
import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import FAQSection from '@/components/landing/faq-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import InnerPageHero from '@/components/landing/inner-page-hero';
import Navbar from '@/components/landing/navbar';
import LazySection from '@/components/landing/lazy-section';

import TeamSection from '@/components/landing/team-section';
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import CustomCursor from '@/components/landing/custom-cursor';
import FooterCTA from '@/components/landing/footer-cta';
import Footer from '@/components/landing/footer';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import SeoHead from '@/components/seo/SeoHead';

export default function About() {
    return (
        <ThemeProvider>
            <SeoHead
                seo={{
                    title: 'About Us | Zytrixon Tech',
                    description:
                        'Learn about Zytrixon Tech, our mission, vision, and the team driving digital innovation from Samastipur to the world.',
                }}
            />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main>
                <InnerPageHero
                    title="Our Story"
                    subtitle="We are a team of passionate engineers and designers building enterprise-grade solutions."
                />

                <LazySection>
                    <AboutSection />
                </LazySection>
                <LazySection>
                    <CoreValuesSection />
                </LazySection>
                <LazySection>
                    <TeamSection />
                </LazySection>
                <LazySection>
                    <GlobalFootprint />
                </LazySection>
                <LazySection>
                    <TechStackSection />
                </LazySection>
                <LazySection>
                    <TestimonialsSection />
                </LazySection>
                <LazySection>
                    <FAQSection />
                </LazySection>
                <LazySection>
                    <FooterCTA />
                </LazySection>
                <LazySection>
                    <ContactSection />
                </LazySection>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
