import React from 'react';
import { Link } from '@inertiajs/react';
import { ProjectItem } from '@/lib/projects-data';

interface ProjectNavigationCTAProps {
    project: ProjectItem;
    otherProject: ProjectItem;
}

export default function ProjectNavigationCTA({ project, otherProject }: ProjectNavigationCTAProps) {
    return (
        <>
            {/* Live Experience Callout Banner */}
            <section style={{ padding: '0 var(--zy-section-pad-x, 24px) 90px', maxWidth: '1200px', margin: '0 auto' }}>
                <div
                    style={{
                        background: `radial-gradient(circle at 80% 50%, ${project.accentColor}18 0%, rgba(15,15,18,0.95) 100%)`,
                        border: `1px solid ${project.accentColor}35`,
                        borderRadius: '24px',
                        padding: '50px 44px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '30px',
                        boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 50px ${project.accentColor}10`,
                    }}
                >
                    <div>
                        <span
                            style={{
                                fontSize: '12px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: project.accentColor,
                            }}
                        >
                            Experience It Live
                        </span>
                        <h3
                            style={{
                                fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
                                fontSize: 'clamp(24px, 3.5vw, 36px)',
                                fontWeight: 800,
                                color: '#ffffff',
                                marginTop: '8px',
                            }}
                        >
                            Test {project.shortTitle} in Your Browser
                        </h3>
                        <p style={{ color: '#999999', fontSize: '15px', marginTop: '8px', maxWidth: '640px' }}>
                            Explore live responsive dashboards, biometric sync feeds, and payment test flows directly.
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
                            background: project.accentColor,
                            color: '#000000',
                            padding: '16px 36px',
                            borderRadius: '40px',
                            fontWeight: 700,
                            fontSize: '15px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: `0 8px 30px ${project.accentColor}40`,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Open Live Website ↗
                    </a>
                </div>
            </section>

            {/* Next Project Switcher Navigation */}
            <section style={{ padding: '0 var(--zy-section-pad-x, 24px) 100px', maxWidth: '1200px', margin: '0 auto' }}>
                <div
                    style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
                            color: '#888888',
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
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '14px 28px',
                            borderRadius: '30px',
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: 700,
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <span>Next Case Study: <strong>{otherProject.shortTitle}</strong></span>
                        <span style={{ color: otherProject.accentColor }}>→</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
