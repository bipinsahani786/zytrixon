import SeoHead from '@/components/seo/SeoHead';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import InnerPageHero from '@/components/landing/inner-page-hero';
import LazySection from '@/components/landing/lazy-section';

import AboutSection from '@/components/landing/about-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import TeamSection from '@/components/landing/team-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import FAQSection from '@/components/landing/faq-section';
import ContactSection from '@/components/landing/contact-section';
import FooterCTA from '@/components/landing/footer-cta';
import Footer from '@/components/landing/footer';

export default function About() {
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

                <LazySection><AboutSection /></LazySection>
                <LazySection><CoreValuesSection /></LazySection>
                <LazySection><TeamSection /></LazySection>
                <LazySection><GlobalFootprint /></LazySection>
                <LazySection><TechStackSection /></LazySection>
                <LazySection><TestimonialsSection /></LazySection>
                <LazySection><FAQSection /></LazySection>
                <LazySection><FooterCTA /></LazySection>
                <LazySection><ContactSection /></LazySection>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
