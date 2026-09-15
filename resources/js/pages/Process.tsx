import ClientsSection from '@/components/landing/clients-section';
import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import InnerPageHero from '@/components/landing/inner-page-hero';
import Navbar from '@/components/landing/navbar';
import TechStackSection from '@/components/landing/tech-stack-section';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';

// Sections
import DevelopmentMethodology from '@/components/sections/DevelopmentMethodology';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import QAAndTesting from '@/components/sections/QAAndTesting';
import SecurityStandards from '@/components/sections/SecurityStandards';
import TestimonialsSection from '@/components/landing/testimonials-section';
import SeoHead from '@/components/seo/SeoHead';

export default function Process() {
    return (
        <ThemeProvider>
            <SeoHead
                seo={{
                    title: 'Our Process - Engineering Excellence | Zytrixon Tech',
                    description:
                        'Discover how Zytrixon Tech delivers world-class enterprise software through our rigorous, agile development process from discovery to launch.',
                }}
            />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main
                style={{
                    minHeight: '100vh',
                    background: 'var(--zy-black)',
                    overflowX: 'hidden',
                }}
            >
                <InnerPageHero
                    title="Engineering Excellence"
                    subtitle="How we turn complex requirements into robust, scalable digital solutions through a proven methodology."
                />

                <div style={{ paddingTop: '60px' }}>
                    <DevelopmentMethodology />
                </div>

                <ProcessTimeline />

                <QAAndTesting />

                <SecurityStandards />

                <TechStackSection />

                <CoreValuesSection />

                <ClientsSection />

                <TestimonialsSection />

                <FooterCTA />

                <ContactSection />
            </main>

            <Footer />
        </ThemeProvider>
    );
}
