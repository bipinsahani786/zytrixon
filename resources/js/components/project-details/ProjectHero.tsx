import React from 'react';
import { Link } from '@inertiajs/react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectHeroProps {
    project: ProjectItem;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
    return (
        <section
            style={{
                position: 'relative',
                paddingTop: '160px',
                paddingBottom: '60px',
                paddingLeft: 'var(--zy-section-pad-x, 24px)',
                paddingRight: 'var(--zy-section-pad-x, 24px)',
                overflow: 'hidden',
                background: `radial-gradient(circle at 50% 0%, ${project.accentColor}18 0%, rgba(5,5,5,0) 70%), #050505`,
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            }}
        >
            {/* Ambient Glow Orb */}
            <div
                style={{
                    position: 'absolute',
                    top: '-120px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '700px',
                    height: '400px',
                    background: `radial-gradient(circle, ${project.accentColor}25 0%, rgba(0,0,0,0) 70%)`,
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Breadcrumbs & Status Indicator */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '16px',
                        marginBottom: '28px',
                    }}
                >
                    <nav
                        aria-label="Breadcrumb"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '13px',
                            color: '#888888',
                        }}
                    >
                        <Link
                            href="/"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <Link
                            href="/portfolio"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            Portfolio
                        </Link>
                        <span>/</span>
                        <span style={{ color: '#ffffff', fontWeight: 600 }}>
                            {project.shortTitle}
                        </span>
                    </nav>

                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#ffffff',
                        }}
                    >
                        <span
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#10b981',
                                boxShadow: '0 0 10px #10b981',
                                display: 'inline-block',
                            }}
                        />
                        Live Enterprise Deployment
                    </div>
                </div>

                {/* Category Tag */}
                <div style={{ marginBottom: '18px' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: project.accentColor,
                            background: `${project.accentColor}14`,
                            border: `1px solid ${project.accentColor}35`,
                            padding: '6px 18px',
                            borderRadius: '30px',
                        }}
                    >
                        {project.category}
                    </span>
                </div>

                {/* Main Title */}
                <h1
                    style={{
                        fontFamily:
                            'var(--font-heading, Space Grotesk, sans-serif)',
                        fontSize: 'clamp(32px, 5vw, 60px)',
                        fontWeight: 800,
                        lineHeight: 1.12,
                        color: '#ffffff',
                        maxWidth: '1000px',
                        marginBottom: '24px',
                        letterSpacing: '-0.02em',
                    }}
                >
                    {project.title}
                </h1>

                {/* Tagline */}
                <p
                    style={{
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        color: '#a0a0a0',
                        lineHeight: 1.6,
                        maxWidth: '820px',
                        marginBottom: '40px',
                    }}
                >
                    {project.tagline}
                </p>

                {/* Action CTAs */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        flexWrap: 'wrap',
                        marginBottom: '50px',
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
                            boxShadow: `0 8px 30px ${project.accentColor}40`,
                        }}
                    >
                        <span>Launch Live Project</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>

                    <a
                        href="#video-theatre"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            color: '#ffffff',
                            padding: '16px 30px',
                            borderRadius: '40px',
                            fontWeight: 600,
                            fontSize: '15px',
                            textDecoration: 'none',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        <span>Watch Video Demo</span>
                    </a>

                    <a
                        href="#architecture"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#888888',
                            padding: '16px 20px',
                            fontSize: '14px',
                            fontWeight: 600,
                            textDecoration: 'none',
                        }}
                    >
                        Architecture & Metrics ↓
                    </a>
                </div>

                {/* Mac Desktop Browser Chrome Mockup */}
                <div
                    style={{
                        background: '#0f0f10',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: `0 30px 80px rgba(0,0,0,0.9), 0 0 60px ${project.accentColor}15`,
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    {/* Browser Chrome Header */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 20px',
                            background: '#171719',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <div
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: '#ff5f56',
                                }}
                            />
                            <div
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: '#ffbd2e',
                                }}
                            />
                            <div
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: '#27c93f',
                                }}
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: '#09090a',
                                padding: '6px 20px',
                                borderRadius: '8px',
                                fontSize: '12px',
                                color: '#888888',
                                border: '1px solid rgba(255,255,255,0.06)',
                                maxWidth: '460px',
                                width: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="2.5"
                            >
                                <rect
                                    x="3"
                                    y="11"
                                    width="18"
                                    height="11"
                                    rx="2"
                                    ry="2"
                                />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span style={{ color: '#cccccc' }}>
                                {project.liveUrl}
                            </span>
                        </div>

                        <div
                            style={{
                                fontSize: '11px',
                                fontWeight: 600,
                                color: project.accentColor,
                            }}
                        >
                            Live Production
                        </div>
                    </div>

                    {/* Image inside frame */}
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            style={{
                                width: '100%',
                                maxHeight: '580px',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />

                        {/* Floating SLA Badge */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '24px',
                                left: '24px',
                                background: 'rgba(10, 10, 10, 0.85)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: '14px',
                                padding: '14px 22px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            }}
                        >
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: `${project.accentColor}25`,
                                    color: project.accentColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '18px',
                                }}
                            >
                                ⚡
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        color: '#888888',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    Performance SLA
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        color: '#ffffff',
                                    }}
                                >
                                    Sub-45ms P99 API Response
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
