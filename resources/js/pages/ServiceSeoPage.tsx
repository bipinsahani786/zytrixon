import { Head } from '@inertiajs/react';
import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import GlobalFootprint from '@/components/landing/global-footprint';
import Navbar from '@/components/landing/navbar';
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CaseStudiesList from '@/components/sections/CaseStudiesList';
import DevelopmentMethodology from '@/components/sections/DevelopmentMethodology';
import FaqAccordion from '@/components/sections/FaqAccordion';
import HeroDynamic from '@/components/sections/HeroDynamic';
import SeoHead from '@/components/seo/SeoHead';

// Landing Page Reused Sections

// Dynamic SEO Sections
import ServicePlayground from '@/components/sections/ServicePlayground';
import ServiceStats from '@/components/sections/ServiceStats';
import ValueProposition from '@/components/sections/ValueProposition';
import IndustryUseCases from '@/components/sections/IndustryUseCases';
import TechnicalArchitecture from '@/components/sections/TechnicalArchitecture';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import QAAndTesting from '@/components/sections/QAAndTesting';
import SecurityStandards from '@/components/sections/SecurityStandards';
import IntegrationCapabilities from '@/components/sections/IntegrationCapabilities';
import MigrationStrategy from '@/components/sections/MigrationStrategy';
import LearningExperience from '@/components/sections/LearningExperience';
import ServiceEstimator from '@/components/sections/ServiceEstimator';
import PricingMatrix from '@/components/sections/PricingMatrix';
import PostLaunchSupport from '@/components/sections/PostLaunchSupport';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';

export default function ServiceSeoPage({
    service,
    location,
    seo,
    content_overrides,
    caseStudies,
}: any) {
    const isSEO = service?.slug === 'seo-digital-marketing';
    const isApp = service?.slug === 'app-development';

    return (
        <ThemeProvider>
            <SeoHead seo={seo} service={service} location={location} />
            <CustomCursor />
            <Navbar />

            <main style={{ paddingTop: '0px', background: 'var(--zy-black)' }}>
                {/* 1. Dynamic Hero Section */}
                <HeroDynamic
                    service={service}
                    location={location}
                    h1={seo.h1}
                    contentOverrides={content_overrides}
                />

                {/* Conditional Layout Ordering */}
                {isSEO ? (
                    // SEO Layout: Stats first, then uses cases
                    <>
                        <ServiceStats
                            service={service}
                            location={location}
                            contentOverrides={content_overrides}
                        />
                        <ValueProposition
                            service={service}
                            location={location}
                            contentOverrides={content_overrides}
                        />
                        <CaseStudiesList
                            service={service}
                            caseStudies={caseStudies}
                        />
                        <IndustryUseCases service={service} />
                        <TechStackSection />
                    </>
                ) : isApp ? (
                    // App Layout: Tech stack and playground first
                    <>
                        <TechStackSection />
                        <ValueProposition
                            service={service}
                            location={location}
                            contentOverrides={content_overrides}
                        />
                        <ServiceStats
                            service={service}
                            location={location}
                            contentOverrides={content_overrides}
                        />
                        <CaseStudiesList
                            service={service}
                            caseStudies={caseStudies}
                        />
                    </>
                ) : (
                    // Default / Web Dev Layout
                    <>
                        <ServicePlayground serviceSlug={service?.slug} />
                        <ValueProposition
                            service={service}
                            location={location}
                            contentOverrides={content_overrides}
                        />
                        <ServiceStats
                            service={service}
                            location={location}
                            contentOverrides={content_overrides}
                        />
                        <TechnicalArchitecture service={service} />
                        <TechStackSection />
                        <CaseStudiesList
                            service={service}
                            caseStudies={caseStudies}
                        />
                    </>
                )}

                {/* 8. Development Methodology */}
                <DevelopmentMethodology service={service} />

                {/* 9. Delivery Process */}
                <ProcessTimeline service={service} />

                {/* 10. QA & Testing Standards */}
                <QAAndTesting service={service} />

                {/* 11. Security & Compliance */}
                <SecurityStandards service={service} />

                {/* 12. Integration Capabilities */}
                <IntegrationCapabilities service={service} />

                {/* 13. Legacy Migration Strategy */}
                <MigrationStrategy service={service} />

                {/* 14. Learning Center (Educational Experience) */}
                <LearningExperience service={service} />

                {/* 15. Interactive Project Estimator */}
                <ServiceEstimator service={service} />

                {/* 17. Client Testimonials (Reused from landing) */}
                <TestimonialsSection />

                {/* 19. Global Footprint (Reused from landing) */}
                <GlobalFootprint />

                {/* 20. Core Values (Reused from landing) */}
                <CoreValuesSection />

                {/* 21. Pricing/Packages */}
                <PricingMatrix service={service} />

                {/* 22. Post-Launch SLA */}
                <PostLaunchSupport service={service} />

                {/* 23. FAQ Schema Section */}
                <FaqAccordion service={service} location={location} />

                {/* NEW: Blog Previews */}
                <BlogPreviewSection service={service} />

                {/* 24. Footer CTA (Reused from landing) */}
                <FooterCTA />

                {/* 25. Contact / Let's Talk */}
                <ContactSection />
            </main>

            <Footer />
        </ThemeProvider>
    );
}
