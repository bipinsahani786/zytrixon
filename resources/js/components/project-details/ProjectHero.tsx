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
                background:
                    'radial-gradient(ellipse 80% 50% at 50% -10%, var(--zy-surface-2) 0%, transparent 80%), var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
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
                    background:
                        'radial-gradient(circle, var(--zy-card-bg-hover) 0%, rgba(0,0,0,0) 70%)',
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
                            color: 'var(--zy-text-secondary)',
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
                        <span style={{ color: 'var(--zy-text-primary)', fontWeight: 600 }}>
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
                            background: 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: 'var(--zy-text-primary)',
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
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--zy-text-secondary)',
                            background: 'var(--zy-surface-2)',
                            border: '1px solid var(--zy-border-subtle)',
                            padding: '4px 14px',
                            borderRadius: '20px',
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
                        color: 'var(--zy-text-primary)',
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
                        color: 'var(--zy-text-secondary)',
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
                            background: 'var(--zy-text-primary)',
                            color: 'var(--zy-bg)',
                            padding: '16px 36px',
                            borderRadius: '40px',
                            fontWeight: 700,
                            fontSize: '15px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
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
                            background: 'var(--zy-surface-1)',
                            color: 'var(--zy-text-primary)',
                            padding: '16px 30px',
                            borderRadius: '40px',
                            fontWeight: 600,
                            fontSize: '15px',
                            textDecoration: 'none',
                            border: '1px solid var(--zy-border-subtle)',
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
                            color: 'var(--zy-text-secondary)',
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
                        background: 'var(--zy-surface-1)',
                        borderRadius: '20px',
                        border: '1px solid var(--zy-border-subtle)',
                        boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
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
                            background: 'var(--zy-surface-2)',
                            borderBottom: '1px solid var(--zy-border-subtle)',
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
                                background: 'var(--zy-bg)',
                                padding: '6px 20px',
                                borderRadius: '8px',
                                fontSize: '12px',
                                color: 'var(--zy-text-secondary)',
                                border: '1px solid var(--zy-border-subtle)',
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
                            <span style={{ color: 'var(--zy-text-primary)' }}>
                                {project.liveUrl}
                            </span>
                        </div>

                        <div
                            style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
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
                                background: 'var(--zy-glass-bg)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid var(--zy-glass-border)',
                                borderRadius: '14px',
                                padding: '14px 22px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            }}
                        >
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: 'var(--zy-surface-2)',
                                    color: 'var(--zy-text-primary)',
                                    border: '1px solid var(--zy-border-subtle)',
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
                                        color: 'var(--zy-text-muted)',
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
                                        color: 'var(--zy-text-primary)',
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
