import React from 'react';
import { Link } from '@inertiajs/react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectNavigationCTAProps {
    project: ProjectItem;
    otherProject: ProjectItem;
}

export default function ProjectNavigationCTA({
    project,
    otherProject,
}: ProjectNavigationCTAProps) {
    return (
        <>
            {/* Live Experience Callout Banner */}
            <section
                style={{
                    padding: '0 var(--zy-section-pad-x, 24px) 90px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <div
                    style={{
                        background: 'var(--zy-surface-1)',
                        border: '1px solid var(--zy-border-subtle)',
                        borderRadius: '24px',
                        padding: '50px 44px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '30px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                    }}
                >
                    <div>
                        <span
                            style={{
                                fontSize: '11px',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: 'var(--zy-text-secondary)',
                                background: 'var(--zy-surface-2)',
                                padding: '4px 14px',
                                borderRadius: '20px',
                                border: '1px solid var(--zy-border-subtle)',
                            }}
                        >
                            Experience It Live
                        </span>
                        <h3
                            style={{
                                fontFamily:
                                    'var(--font-heading, Space Grotesk, sans-serif)',
                                fontSize: 'clamp(24px, 3.5vw, 36px)',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                                marginTop: '16px',
                            }}
                        >
                            Test {project.shortTitle} in Your Browser
                        </h3>
                        <p
                            style={{
                                color: 'var(--zy-text-secondary)',
                                fontSize: '15px',
                                marginTop: '8px',
                                maxWidth: '640px',
                            }}
                        >
                            Explore live responsive dashboards, biometric sync
                            feeds, and payment test flows directly.
                        </p>
                    </div>

                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'var(--zy-text-primary)',
                            color: 'var(--zy-bg)',
                            padding: '16px 36px',
                            borderRadius: '40px',
                            fontWeight: 700,
                            fontSize: '15px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Open Live Website ↗
                    </a>
                </div>
            </section>

            {/* Next Project Switcher Navigation */}
            <section
                style={{
                    padding: '0 var(--zy-section-pad-x, 24px) 100px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <div
                    style={{
                        borderTop: '1px solid var(--zy-border-subtle)',
                        paddingTop: '50px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '24px',
                    }}
                >
                    <Link
                        href="/portfolio"
                        style={{
                            color: 'var(--zy-text-secondary)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: 600,
                            transition: 'color 0.2s ease',
                        }}
                    >
                        ← Back to All Projects
                    </Link>

                    <Link
                        href={`/portfolio/${otherProject.slug}`}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            padding: '14px 28px',
                            borderRadius: '30px',
                            color: 'var(--zy-text-primary)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: 700,
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <span>
                            Next Case Study:{' '}
                            <strong>{otherProject.shortTitle}</strong>
                        </span>
                        <span style={{ color: 'var(--zy-text-primary)' }}>
                            →
                        </span>
                    </Link>
                </div>
            </section>
        </>
    );
}
