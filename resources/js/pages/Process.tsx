import ClientsSection from '@/components/landing/clients-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import InnerPageHero from '@/components/landing/inner-page-hero';
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PublicLayout from '@/components/layouts/PublicLayout';
import DevelopmentMethodology from '@/components/sections/DevelopmentMethodology';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import QAAndTesting from '@/components/sections/QAAndTesting';
import SecurityStandards from '@/components/sections/SecurityStandards';

export default function Process() {
    return (
        <PublicLayout
            seo={{
                title: 'Our Process - Engineering Excellence | Zytrixon Tech',
                description:
                    'Discover how Zytrixon Tech delivers world-class enterprise software through our rigorous, agile development process from discovery to launch.',
            }}
            showContactSection={true}
        >
            <InnerPageHero
                title="Engineering Excellence"
                subtitle="How we turn complex requirements into robust, scalable digital solutions through a proven methodology."
            />

            <div className="pt-12 sm:pt-16">
                <DevelopmentMethodology />
            </div>

            <ProcessTimeline />
            <QAAndTesting />
            <SecurityStandards />
            <TechStackSection />
            <CoreValuesSection />
            <ClientsSection />
            <TestimonialsSection />
        </PublicLayout>
    );
}
