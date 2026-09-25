import React from 'react';
import Navbar from '@/components/landing/navbar';
import TopBar from '@/components/landing/top-bar';
import Footer from '@/components/landing/footer';
import CustomCursor from '@/components/landing/custom-cursor';
import LazySection from '@/components/landing/lazy-section';
import { ThemeProvider } from '@/components/landing/theme-provider';
import SeoHead from '@/components/seo/SeoHead';

// Architectural Sections
import InnerPageHero from '@/components/landing/inner-page-hero';
import AboutExecutiveHUD from '@/components/about/AboutExecutiveHUD';
import AboutOriginStory from '@/components/about/AboutOriginStory';
import AboutMissionVision from '@/components/about/AboutMissionVision';
import AboutPrinciplesManifesto from '@/components/about/AboutPrinciplesManifesto';
import AboutLeadershipDossier from '@/components/about/AboutLeadershipDossier';
import AboutMilestonesChronology from '@/components/about/AboutMilestonesChronology';
import AboutTechConviction from '@/components/about/AboutTechConviction';
import AboutDeliveryLifecycle from '@/components/about/AboutDeliveryLifecycle';
import AboutSecurityGovernance from '@/components/about/AboutSecurityGovernance';
import AboutInnovationLab from '@/components/about/AboutInnovationLab';
import MajorProductsSection from '@/components/major-products/MajorProductsSection';
import AboutGlobalPresence from '@/components/about/AboutGlobalPresence';
import AboutClientTrust from '@/components/about/AboutClientTrust';
import AboutSocialImpact from '@/components/about/AboutSocialImpact';
import AboutRecognitionAwards from '@/components/about/AboutRecognitionAwards';
import AboutFAQComprehensive from '@/components/about/AboutFAQComprehensive';
import AboutExecutiveCTA from '@/components/about/AboutExecutiveCTA';

export default function About() {
    return (
        <ThemeProvider>
            <SeoHead
                seo={{
                    title: 'About Zytrixon | Architectural Engineering Studio',
                    description:
                        'Discover Zytrixon Technologies: Our origin in Patna, engineering manifesto, leadership dossier, technology convictions, and mission to engineer planetary-scale digital dominance.',
                }}
            />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main>
                {/* 01. Hero Section (Same style as team page) */}
                <InnerPageHero
                    title="Architects of Digital Dominance"
                    subtitle="Forged in Patna. Trusted by ambitious enterprises worldwide to design, build, and scale mission-critical digital infrastructure."
                />

                {/* 02. Executive Telemetry HUD */}
                <LazySection>
                    <AboutExecutiveHUD />
                </LazySection>

                {/* 03. Origin Narrative */}
                <LazySection>
                    <AboutOriginStory />
                </LazySection>

                {/* 04. Mission & Vision Dual Monolith */}
                <LazySection>
                    <AboutMissionVision />
                </LazySection>

                {/* 05. Engineering Manifesto */}
                <LazySection>
                    <AboutPrinciplesManifesto />
                </LazySection>

                {/* 06. Leadership Dossier */}
                <LazySection>
                    <AboutLeadershipDossier />
                </LazySection>

                {/* 07. Chronology & Growth Milestones */}
                <LazySection>
                    <AboutMilestonesChronology />
                </LazySection>

                {/* 08. Technology Conviction Matrix */}
                <LazySection>
                    <AboutTechConviction />
                </LazySection>

                {/* 09. 6-Stage Delivery Lifecycle */}
                <LazySection>
                    <AboutDeliveryLifecycle />
                </LazySection>

                {/* 10. Security & Zero-Trust Governance */}
                <LazySection>
                    <AboutSecurityGovernance />
                </LazySection>

                {/* 11. Innovation & R&D Lab */}
                <LazySection>
                    <AboutInnovationLab />
                </LazySection>

                {/* 11b. Proprietary Platforms // Our Major Products */}
                <LazySection>
                    <MajorProductsSection />
                </LazySection>

                {/* 12. Global Footprint & Dual Hubs */}
                <LazySection>
                    <AboutGlobalPresence />
                </LazySection>

                {/* 13. Client Trust & Partnership Retention */}
                <LazySection>
                    <AboutClientTrust />
                </LazySection>

                {/* 14. Regional Catalyst & Social Impact */}
                <LazySection>
                    <AboutSocialImpact />
                </LazySection>

                {/* 15. Benchmarks & Verified Recognition */}
                <LazySection>
                    <AboutRecognitionAwards />
                </LazySection>

                {/* 16. Technical & Strategic FAQ */}
                <LazySection>
                    <AboutFAQComprehensive />
                </LazySection>

                {/* 17. Executive Closing CTA */}
                <LazySection>
                    <AboutExecutiveCTA />
                </LazySection>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
