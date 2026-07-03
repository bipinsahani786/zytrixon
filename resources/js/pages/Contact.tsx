import SeoHead from '@/components/seo/SeoHead';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import InnerPageHero from '@/components/landing/inner-page-hero';
import LazySection from '@/components/landing/lazy-section';

import ContactSection from '@/components/landing/contact-section';
import FAQSection from '@/components/landing/faq-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import TestimonialsSection from '@/components/landing/testimonials-section';
import ClientsSection from '@/components/landing/clients-section';
import FooterCTA from '@/components/landing/footer-cta';
import CoreValuesSection from '@/components/landing/core-values-section';
import Footer from '@/components/landing/footer';

export default function Contact() {
    return (
        <ThemeProvider>
            <SeoHead seo={{ 
                title: 'Contact Us | Zytrixon Tech', 
                description: 'Get in touch with Zytrixon Tech for Web Development, Mobile Apps, and Enterprise IT solutions.'
            }} />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main>
                <InnerPageHero 
                    title="Let's Talk" 
                    subtitle="Have a project in mind? Reach out and let's build something amazing together." 
                />

                <LazySection><ContactSection /></LazySection>
                <LazySection><GlobalFootprint /></LazySection>
                <LazySection><FAQSection /></LazySection>
                <LazySection><TestimonialsSection /></LazySection>
                <LazySection><ClientsSection /></LazySection>
                <LazySection><CoreValuesSection /></LazySection>
                <LazySection><FooterCTA /></LazySection>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
