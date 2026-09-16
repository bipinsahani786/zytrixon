import ClientsSection from '@/components/landing/clients-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import InnerPageHero from '@/components/landing/inner-page-hero';
import LazySection from '@/components/landing/lazy-section';
import PortfolioPreview from '@/components/landing/portfolio-preview';
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PublicLayout from '@/components/layouts/PublicLayout';

export default function Portfolio() {
    return (
        <PublicLayout
            seo={{
                title: 'Portfolio & Work | Zytrixon Tech',
                description:
                    'Explore our latest web, mobile, and IoT projects delivered successfully across the globe.',
            }}
            showContactSection={true}
        >
            <InnerPageHero
                title="Our Best Work"
                subtitle="Discover how we transform ideas into digital dominance with cutting-edge technologies."
            />

            <LazySection>
                <PortfolioPreview hideHeader={true} />
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
        </PublicLayout>
    );
}
