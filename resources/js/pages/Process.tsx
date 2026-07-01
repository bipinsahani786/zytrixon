import SeoHead from '@/components/seo/SeoHead';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import InnerPageHero from '@/components/landing/inner-page-hero';
import Footer from '@/components/landing/footer';

// Sections
import DevelopmentMethodology from '@/components/sections/DevelopmentMethodology';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import QAAndTesting from '@/components/sections/QAAndTesting';
import SecurityStandards from '@/components/sections/SecurityStandards';
import TechStackSection from '@/components/landing/tech-stack-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import ClientsSection from '@/components/landing/clients-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import FooterCTA from '@/components/landing/footer-cta';
import ContactSection from '@/components/landing/contact-section';

export default function Process() {
    return (
        <ThemeProvider>
            <SeoHead seo={{ 
                title: 'Our Process - Engineering Excellence | Zytrixon Tech', 
                description: 'Discover how Zytrixon Tech delivers world-class enterprise software through our rigorous, agile development process from discovery to launch.' 
            }} />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main style={{ minHeight: '100vh', background: 'var(--zy-black)', overflowX: 'hidden' }}>
                
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
