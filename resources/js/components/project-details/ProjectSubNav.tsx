import React, { useEffect, useState } from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectSubNavProps {
    project: ProjectItem;
}

export default function ProjectSubNav({ project }: ProjectSubNavProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    const hasVideo = Boolean(
        project.videoUrl && project.videoUrl.trim() !== '',
    );
    const hasGallery = Boolean(
        project.screenshots && project.screenshots.length > 0,
    );

    // Dynamically build navigation pills based on actual rendered sections
    const navItems: { id: string; label: string }[] = [];
    let stepNumber = 1;

    navItems.push({
        id: 'overview',
        label: `${String(stepNumber++).padStart(2, '0')} Overview`,
    });

    if (project.features && project.features.length > 0) {
        navItems.push({
            id: 'features',
            label: `${String(stepNumber++).padStart(2, '0')} Capabilities`,
        });
    }

    if (project.challengePoints && project.challengePoints.length > 0) {
        navItems.push({
            id: 'story',
            label: `${String(stepNumber++).padStart(2, '0')} Story`,
        });
    }

    if (hasVideo) {
        navItems.push({
            id: 'theatre',
            label: `${String(stepNumber++).padStart(2, '0')} Demo Theatre`,
        });
    }

    if (hasGallery) {
        navItems.push({
            id: 'gallery',
            label: `${String(stepNumber++).padStart(2, '0')} Screenshots`,
        });
    }

    navItems.push({
        id: 'architecture',
        label: `${String(stepNumber++).padStart(2, '0')} Architecture`,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const activeIds = navItems.map((item) => item.id);
            for (const sectionId of activeIds) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasVideo, hasGallery]);

    if (!scrolled) {
        return null;
    }

    return (
        <>
            <nav
                className="project-subnav-dock"
                aria-label="Case Study Navigation"
                style={{
                    position: 'fixed',
                    bottom: '28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    background: 'var(--zy-glass-bg)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '40px',
                    border: '1px solid var(--zy-glass-border)',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.3)',
                    maxWidth: '94vw',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.3s ease, border-color 0.3s ease',
                }}
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '30px',
                                fontSize: '12px',
                                fontWeight: 600,
                                letterSpacing: '0.04em',
                                textDecoration: 'none',
                                color: isActive
                                    ? 'var(--zy-bg)'
                                    : 'var(--zy-text-secondary)',
                                background: isActive
                                    ? 'var(--zy-text-primary)'
                                    : 'transparent',
                                transition: 'all 0.25s ease',
                            }}
                        >
                            {item.label}
                        </a>
                    );
                })}

                <div
                    style={{
                        width: '1px',
                        height: '18px',
                        background: 'var(--zy-border-subtle)',
                        margin: '0 4px',
                    }}
                />

                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 18px',
                        borderRadius: '30px',
                        fontSize: '12px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        color: 'var(--zy-text-primary)',
                        background: 'var(--zy-surface-2)',
                        border: '1px solid var(--zy-border-subtle)',
                        transition: 'all 0.2s ease',
                    }}
                >
                    <span>Live Demo</span>
                    <span style={{ color: 'var(--zy-text-primary)' }}>↗</span>
                </a>
            </nav>

            <style>{`
                @media (max-width: 768px) {
                    .project-subnav-dock {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
}
