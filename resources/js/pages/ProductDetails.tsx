import React from 'react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import CustomCursor from '@/components/landing/custom-cursor';
import LazySection from '@/components/landing/lazy-section';
import SeoHead from '@/components/seo/SeoHead';
import type { ProjectItem } from '@/lib/projects-data';
import { getProductBySlug, PRODUCTS_DATA } from '@/lib/products-detail-data';

// Modular Components matching ProjectDetails architecture
import ProjectHeroEditorial from '@/components/project-details/ProjectHeroEditorial';
import ProjectSubNav from '@/components/project-details/ProjectSubNav';
import ProjectImpactBanner from '@/components/project-details/ProjectImpactBanner';
import ProjectFeatures from '@/components/project-details/ProjectFeatures';
import ProjectChallengeSolution from '@/components/project-details/ProjectChallengeSolution';
import ProjectCinemaTheatre from '@/components/project-details/ProjectCinemaTheatre';
import ProductScreenshots from '@/components/product-details/ProductScreenshots';
import ProjectBlueprintFlow from '@/components/project-details/ProjectBlueprintFlow';

interface ProductDetailsProps {
    slug: string;
    product?: ProjectItem;
}

function ProductDetailsInner({ product }: { product: ProjectItem }) {
    const hasVideo = Boolean(
        product.videoUrl && product.videoUrl.trim() !== '',
    );
    const hasScreenshots = Boolean(
        product.screenshots && product.screenshots.length > 0,
    );
    const hasFeatures = Boolean(
        product.features && product.features.length > 0,
    );
    const hasStory = Boolean(
        product.challengePoints && product.challengePoints.length > 0,
    );

    return (
        <>
            <CustomCursor />
            <TopBar />
            <Navbar />

            {/* Floating In-Page Dock Navigation Pill */}
            <ProjectSubNav project={product} />

            <main
                style={{
                    background: 'var(--zy-bg)',
                    color: 'var(--zy-text-primary)',
                    minHeight: '100vh',
                    overflowX: 'hidden',
                    transition: 'background 0.3s ease, color 0.3s ease',
                }}
            >
                {/* 1. Asymmetrical Editorial Hero with Dual-Device Stage (Big Hero Image + Mobile View) */}
                <ProjectHeroEditorial project={product} />

                {/* 2. Executive Statement & KPI Numbers */}
                <LazySection minHeight="400px">
                    <ProjectImpactBanner project={product} />
                </LazySection>

                {/* 3. Core System Capabilities / Advantages */}
                {hasFeatures && (
                    <LazySection minHeight="400px">
                        <ProjectFeatures project={product} />
                    </LazySection>
                )}

                {/* 4. Engineering & Business Transformation Story */}
                {hasStory && (
                    <LazySection minHeight="450px">
                        <ProjectChallengeSolution project={product} />
                    </LazySection>
                )}

                {/* 5. Cinema Video Theatre (Full-Width Immersive Walkthrough) — Strictly only if video is added */}
                {hasVideo && (
                    <LazySection minHeight="550px">
                        <ProjectCinemaTheatre project={product} />
                    </LazySection>
                )}

                {/* 6. Product Screenshots Slider with (...) Dots indicator and in-area clear viewing */}
                {hasScreenshots && (
                    <LazySection minHeight="500px">
                        <ProductScreenshots product={product} />
                    </LazySection>
                )}

                {/* 7. System Blueprint Pipeline & Tech Stack Matrix */}
                <LazySection minHeight="400px">
                    <ProjectBlueprintFlow project={product} />
                </LazySection>

                {/* Standard Website Footer CTA ("Let's Build Something Extraordinary") */}
                <LazySection minHeight="250px">
                    <FooterCTA />
                </LazySection>
            </main>

            <Footer />
        </>
    );
}

export default function ProductDetails({
    slug,
    product: initialProduct,
}: ProductDetailsProps) {
    const product: ProjectItem =
        initialProduct ||
        (slug ? getProductBySlug(slug) : undefined) ||
        PRODUCTS_DATA[0];

    return (
        <ThemeProvider>
            <SeoHead
                seo={{
                    title: `${product.title} | Zytrixon Tech Products`,
                    description: product.summary,
                    image: product.heroImage,
                }}
            />
            <ProductDetailsInner product={product} />
        </ThemeProvider>
    );
}

// CRITICAL: Explicitly ensure this page never receives an AppLayout / Admin Sidebar
ProductDetails.layout = null;
