import { Head } from '@inertiajs/react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import CustomCursor from '@/components/landing/custom-cursor';
import SeoHead from '@/components/seo/SeoHead';

// Landing Page Reused Sections
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import CoreValuesSection from '@/components/landing/core-values-section';
import FooterCTA from '@/components/landing/footer-cta';
import ContactSection from '@/components/landing/contact-section';

// Dynamic SEO Sections
import HeroDynamic from '@/components/sections/HeroDynamic';
import ServicePlayground from '@/components/sections/ServicePlayground';
import ServiceStats from '@/components/sections/ServiceStats';
import ValueProposition from '@/components/sections/ValueProposition';
import IndustryUseCases from '@/components/sections/IndustryUseCases';
import TechnicalArchitecture from '@/components/sections/TechnicalArchitecture';
import DevelopmentMethodology from '@/components/sections/DevelopmentMethodology';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import QAAndTesting from '@/components/sections/QAAndTesting';
import SecurityStandards from '@/components/sections/SecurityStandards';
import IntegrationCapabilities from '@/components/sections/IntegrationCapabilities';
import MigrationStrategy from '@/components/sections/MigrationStrategy';
import LearningExperience from '@/components/sections/LearningExperience';
import ServiceEstimator from '@/components/sections/ServiceEstimator';
import CaseStudiesList from '@/components/sections/CaseStudiesList';
import PricingMatrix from '@/components/sections/PricingMatrix';
import PostLaunchSupport from '@/components/sections/PostLaunchSupport';
import FaqAccordion from '@/components/sections/FaqAccordion';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';

export default function ServiceSeoPage({ service, location, seo, content_overrides, caseStudies }: any) {
    const isSEO = service?.slug === 'seo-digital-marketing';
    const isApp = service?.slug === 'app-development';
    return (
        <ThemeProvider>
            <SeoHead seo={seo} service={service} location={location} />
            <CustomCursor />
            <Navbar />

            <main style={{ paddingTop: '80px', background: 'var(--zy-black)' }}>
                {/* 1. Dynamic Hero Section */}
                <HeroDynamic service={service} location={location} h1={seo.h1} />

                {/* Conditional Layout Ordering */}
                {isSEO ? (
                    // SEO Layout: Stats first, then uses cases
                    <>
                        <ServiceStats location={location} />
                        <ValueProposition service={service} location={location} />
                        <CaseStudiesList service={service} caseStudies={caseStudies} />
                        <IndustryUseCases service={service} />
                        <TechStackSection />
                    </>
                ) : isApp ? (
                    // App Layout: Tech stack and playground first
                    <>
                        <TechStackSection />
                        <ValueProposition service={service} location={location} />
                        <ServiceStats location={location} />
                        <CaseStudiesList service={service} caseStudies={caseStudies} />
                    </>
                ) : (
                    // Default / Web Dev Layout
                    <>
                        <ServicePlayground serviceSlug={service?.slug} />
                        <ValueProposition service={service} location={location} />
                        <ServiceStats location={location} />
                        <TechnicalArchitecture service={service} />
                        <TechStackSection />
                        <CaseStudiesList service={service} caseStudies={caseStudies} />
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
