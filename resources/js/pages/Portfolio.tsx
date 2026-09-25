import ClientsSection from '@/components/landing/clients-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import CustomCursor from '@/components/landing/custom-cursor';
import FooterCTA from '@/components/landing/footer-cta';
import Footer from '@/components/landing/footer';
import InnerPageHero from '@/components/landing/inner-page-hero';
import LazySection from '@/components/landing/lazy-section';
import Navbar from '@/components/landing/navbar';
import PortfolioPreview from '@/components/landing/portfolio-preview';
import MajorProductsSection from '@/components/major-products/MajorProductsSection';
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import SeoHead from '@/components/seo/SeoHead';

export default function Portfolio() {
    return (
        <ThemeProvider>
            <SeoHead
                seo={{
                    title: 'Portfolio & Work | Zytrixon Tech',
                    description:
                        'Explore our latest web, mobile, and IoT projects delivered successfully across the globe.',
                }}
            />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main>
                <InnerPageHero
                    title="Our Best Work"
                    subtitle="Discover how we transform ideas into digital dominance with cutting-edge technologies."
                />

                <LazySection>
                    <MajorProductsSection />
                </LazySection>

                <LazySection>
                    <PortfolioPreview
                        hideHeader={false}
                        title="Our Works"
                        subtitle="Explore our comprehensive engineering case studies and live client production platforms."
                        label="Selected Projects"
                    />
                </LazySection>
                <LazySection>
                    <TechStackSection />
                </LazySection>
                <LazySection>
                    <ClientsSection />
                </LazySection>
                <LazySection>
                    <TestimonialsSection />
                </LazySection>
                <LazySection>
                    <GlobalFootprint />
                </LazySection>
                <LazySection>
                    <CoreValuesSection />
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
