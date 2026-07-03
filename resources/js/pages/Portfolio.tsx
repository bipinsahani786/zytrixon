import SeoHead from '@/components/seo/SeoHead';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import InnerPageHero from '@/components/landing/inner-page-hero';
import LazySection from '@/components/landing/lazy-section';

import PortfolioPreview from '@/components/landing/portfolio-preview';
import ClientsSection from '@/components/landing/clients-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import TechStackSection from '@/components/landing/tech-stack-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import FooterCTA from '@/components/landing/footer-cta';
import Footer from '@/components/landing/footer';

export default function Portfolio() {
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

                <LazySection><PortfolioPreview hideHeader={true} /></LazySection>
                <LazySection><TechStackSection /></LazySection>
                <LazySection><ClientsSection /></LazySection>
                <LazySection><TestimonialsSection /></LazySection>
                <LazySection><GlobalFootprint /></LazySection>
                <LazySection><CoreValuesSection /></LazySection>
                <LazySection><FooterCTA /></LazySection>
                <LazySection><ContactSection /></LazySection>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
