import ClientsSection from '@/components/landing/clients-section';
import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import FAQSection from '@/components/landing/faq-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import InnerPageHero from '@/components/landing/inner-page-hero';
import LazySection from '@/components/landing/lazy-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PublicLayout from '@/components/layouts/PublicLayout';

export default function Contact() {
    return (
        <PublicLayout
            seo={{
                title: 'Contact Us | Zytrixon Tech',
                description:
                    'Get in touch with Zytrixon Tech for Web Development, Mobile Apps, and Enterprise IT solutions.',
            }}
        >
            <InnerPageHero
                title="Let's Talk"
                subtitle="Have a project in mind? Reach out and let's build something amazing together."
            />

            <LazySection>
                <ContactSection hideHeader={true} />
            </LazySection>
            <LazySection>
                <GlobalFootprint />
            </LazySection>
            <LazySection>
                <FAQSection />
            </LazySection>
            <LazySection>
                <TestimonialsSection />
            </LazySection>
            <LazySection>
                <ClientsSection />
            </LazySection>
            <LazySection>
                <CoreValuesSection />
            </LazySection>
        </PublicLayout>
    );
}
