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
                    background: isLight
                        ? `radial-gradient(ellipse at 80% 50%, ${project.accentColor}25 0%, #ffffff 100%)`
                        : `radial-gradient(ellipse at 80% 50%, ${project.accentColor}22 0%, rgba(14,14,18,0.95) 100%)`,
                    border: isLight
                        ? `1px solid ${project.accentColor}50`
                        : `1px solid ${project.accentColor}40`,
                    borderRadius: '26px',
                    padding: '56px 44px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '30px',
                    boxShadow: isLight
                        ? `0 20px 60px rgba(0,0,0,0.06), 0 0 50px ${project.accentColor}18`
                        : `0 25px 80px rgba(0,0,0,0.9), 0 0 60px ${project.accentColor}12`,
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
                            color: project.accentColor,
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
                            color: isLight ? '#0a0a0a' : '#ffffff',
                            marginTop: '10px',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Experience {project.shortTitle} in Action
                    </h3>
                    <p
                        style={{
                            color: isLight ? '#555555' : '#a0a0a0',
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
                            background: project.accentColor,
                            color: '#000000',
                            padding: '16px 36px',
                            borderRadius: '40px',
                            fontWeight: 700,
                            fontSize: '15px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: `0 8px 30px ${project.accentColor}50`,
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
                    borderTop: isLight
                        ? '1px solid rgba(0, 0, 0, 0.08)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
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
                            color: isLight ? '#555555' : '#777777',
                            fontSize: '13px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = isLight
                                ? '#000000'
                                : '#ffffff')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = isLight
                                ? '#555555'
                                : '#777777')
                        }
                    >
                        ← Return to All Projects
                    </Link>

                    <span
                        style={{
                            fontSize: '12px',
                            color: isLight ? '#777777' : '#666666',
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
                        background: isLight
                            ? 'linear-gradient(135deg, #ffffff 0%, #f4f4f7 100%)'
                            : 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(15,15,18,0.9) 100%)',
                        border: isLight
                            ? '1px solid rgba(0, 0, 0, 0.08)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '40px',
                        boxShadow: isLight
                            ? '0 10px 30px rgba(0,0,0,0.04)'
                            : 'none',
                        transition: 'all 0.35s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                            otherProject.accentColor;
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 20px 50px ${otherProject.accentColor}20`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = isLight
                            ? '1px solid rgba(0, 0, 0, 0.08)'
                            : 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = isLight
                            ? '0 10px 30px rgba(0,0,0,0.04)'
                            : 'none';
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
                                    color: otherProject.accentColor,
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
                                    color: isLight ? '#0a0a0a' : '#ffffff',
                                    margin: 0,
                                }}
                            >
                                {otherProject.title}
                            </h2>
                            <p
                                style={{
                                    color: isLight ? '#555555' : '#888888',
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
                                background: `${otherProject.accentColor}20`,
                                color: otherProject.accentColor,
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
