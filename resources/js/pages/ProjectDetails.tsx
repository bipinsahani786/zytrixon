import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import CustomCursor from '@/components/landing/custom-cursor';
import LazySection from '@/components/landing/lazy-section';
import SeoHead from '@/components/seo/SeoHead';
import type { ProjectItem } from '@/lib/projects-data';
import { DUMMY_PROJECTS, getProjectBySlug } from '@/lib/projects-data';

// Modular Project Details Components (Editorial Tech Cinema Architecture)
import ProjectHeroEditorial from '@/components/project-details/ProjectHeroEditorial';
import ProjectSubNav from '@/components/project-details/ProjectSubNav';
import ProjectImpactBanner from '@/components/project-details/ProjectImpactBanner';
import ProjectCinemaTheatre from '@/components/project-details/ProjectCinemaTheatre';
import ProjectInteractiveGallery from '@/components/project-details/ProjectInteractiveGallery';
import ProjectBlueprintFlow from '@/components/project-details/ProjectBlueprintFlow';

interface ProjectDetailsProps {
    project?: ProjectItem;
    slug?: string;
}

function ProjectDetailsInner({ project }: { project: ProjectItem }) {
    const hasVideo = Boolean(
        project.videoUrl && project.videoUrl.trim() !== '',
    );
    const hasScreenshots = Boolean(
        project.screenshots && project.screenshots.length > 0,
    );

    return (
        <>
            <CustomCursor />
            <TopBar />
            <Navbar />

            {/* Floating In-Page Dock Navigation Pill */}
            <ProjectSubNav project={project} />

            <main
                style={{
                    background: 'var(--zy-bg)',
                    color: 'var(--zy-text-primary)',
                    minHeight: '100vh',
                    overflowX: 'hidden',
                    transition: 'background 0.3s ease, color 0.3s ease',
                }}
            >
                {/* 1. Asymmetrical Editorial Hero with Dual-Device Stage */}
                <ProjectHeroEditorial project={project} />

                {/* 2. Executive Statement & KPI Numbers (using GradientCard) */}
                <LazySection minHeight="400px">
                    <ProjectImpactBanner project={project} />
                </LazySection>

                {/* 3. Cinema Video Theatre (Full-Width Immersive Walkthrough) - Only if project has video */}
                {hasVideo && (
                    <LazySection minHeight="550px">
                        <ProjectCinemaTheatre project={project} />
                    </LazySection>
                )}

                {/* 4. Split Interactive Screen Explorer & Lightbox - Only if project has screenshots */}
                {hasScreenshots && (
                    <LazySection minHeight="550px">
                        <ProjectInteractiveGallery project={project} />
                    </LazySection>
                )}

                {/* 5. System Blueprint Pipeline & Tech Stack Matrix */}
                <LazySection minHeight="400px">
                    <ProjectBlueprintFlow project={project} />
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

export default function ProjectDetails({
    project: initialProject,
    slug,
}: ProjectDetailsProps) {
    // Resolve project data
    const project: ProjectItem =
        initialProject ||
        (slug ? getProjectBySlug(slug) : undefined) ||
        DUMMY_PROJECTS[0];

    return (
        <ThemeProvider>
            <SeoHead
                seo={{
                    title: `${project.title} | Zytrixon Tech Portfolio`,
                    description: project.summary,
                    image: project.heroImage,
                }}
            />
            <ProjectDetailsInner project={project} />
        </ThemeProvider>
    );
}

// CRITICAL: Explicitly ensure this page never receives an AppLayout / Admin Sidebar
ProjectDetails.layout = null;
