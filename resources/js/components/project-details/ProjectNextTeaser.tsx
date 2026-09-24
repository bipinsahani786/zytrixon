import React from 'react';
import { Link } from '@inertiajs/react';
import type { ProjectItem } from '@/lib/projects-data';
import { useTheme } from '@/components/landing/theme-provider';

interface ProjectNextTeaserProps {
    project: ProjectItem;
    otherProject: ProjectItem;
}

export default function ProjectNextTeaser({
    project,
    otherProject,
}: ProjectNextTeaserProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            style={{
                padding: '0 var(--zy-section-pad-x, 24px) 110px',
                maxWidth: '1240px',
                margin: '0 auto',
            }}
        >
            {/* Live Prototype Sandbox Card */}
            <div
                style={{
                    background: 'var(--zy-surface-1)',
                    border: '1px solid var(--zy-border-subtle)',
                    borderRadius: '26px',
                    padding: '56px 44px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '30px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    marginBottom: '70px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ maxWidth: '680px' }}>
                    <span
                        style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--zy-text-secondary)',
                            background: 'var(--zy-surface-2)',
                            padding: '4px 14px',
                            borderRadius: '20px',
                            border: '1px solid var(--zy-border-subtle)',
                        }}
                    >
                        Live Interactive Sandbox
                    </span>
                    <h3
                        style={{
                            fontFamily:
                                'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(26px, 3.8vw, 38px)',
                            fontWeight: 800,
                            color: 'var(--zy-text-primary)',
                            marginTop: '16px',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Experience {project.shortTitle} in Action
                    </h3>
                    <p
                        style={{
                            color: 'var(--zy-text-secondary)',
                            fontSize: '15px',
                            marginTop: '10px',
                            lineHeight: 1.6,
                        }}
                    >
                        Directly interact with the live production deployment.
                        Test attendance check-ins, simulated payment webhooks,
                        and multi-tenant portals.
                    </p>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        flexWrap: 'wrap',
                    }}
                >
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
                        <span>Open Live Web App</span>
                        <span>↗</span>
                    </a>
                </div>
            </div>

            {/* Next Case Study Magnet Card */}
            <div
                style={{
                    borderTop: '1px solid var(--zy-border-subtle)',
                    paddingTop: '60px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '24px',
                    }}
                >
                    <Link
                        href="/portfolio"
                        style={{
                            color: 'var(--zy-text-secondary)',
                            fontSize: '13px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color =
                                'var(--zy-text-primary)')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                                'var(--zy-text-secondary)')
                        }
                    >
                        ← Return to All Projects
                    </Link>

                    <span
                        style={{
                            fontSize: '12px',
                            color: 'var(--zy-text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                        }}
                    >
                        Up Next
                    </span>
                </div>

                <Link
                    href={`/portfolio/${otherProject.slug}`}
                    style={{
                        display: 'block',
                        textDecoration: 'none',
                        background: 'var(--zy-surface-1)',
                        border: '1px solid var(--zy-border-subtle)',
                        borderRadius: '24px',
                        padding: '40px',
                        transition: 'all 0.35s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                            'var(--zy-border-hover)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow =
                            '0 20px 50px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                            'var(--zy-border-subtle)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '20px',
                        }}
                    >
                        <div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.12em',
                                    color: 'var(--zy-text-secondary)',
                                    marginBottom: '8px',
                                }}
                            >
                                {otherProject.category}
                            </span>
                            <h2
                                style={{
                                    fontFamily:
                                        'var(--font-heading, Space Grotesk, sans-serif)',
                                    fontSize: 'clamp(24px, 3.5vw, 36px)',
                                    fontWeight: 800,
                                    color: 'var(--zy-text-primary)',
                                    margin: 0,
                                }}
                            >
                                {otherProject.title}
                            </h2>
                            <p
                                style={{
                                    color: 'var(--zy-text-secondary)',
                                    fontSize: '14px',
                                    marginTop: '6px',
                                    maxWidth: '600px',
                                }}
                            >
                                {otherProject.tagline}
                            </p>
                        </div>

                        <div
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                background: 'var(--zy-surface-2)',
                                color: 'var(--zy-text-primary)',
                                border: '1px solid var(--zy-border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: 800,
                            }}
                        >
                            →
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
