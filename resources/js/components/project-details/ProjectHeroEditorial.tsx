import React from 'react';
import { Link } from '@inertiajs/react';
import type { ProjectItem } from '@/lib/projects-data';
import { useTheme } from '@/components/landing/theme-provider';

interface ProjectHeroEditorialProps {
    project: ProjectItem;
}

export default function ProjectHeroEditorial({
    project,
}: ProjectHeroEditorialProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            id="overview"
            style={{
                position: 'relative',
                paddingTop: '80px',
                paddingBottom: '60px',
                paddingLeft: 'var(--zy-section-pad-x, 24px)',
                paddingRight: 'var(--zy-section-pad-x, 24px)',
                overflow: 'hidden',
                background: isLight
                    ? `radial-gradient(ellipse 80% 50% at 50% -10%, ${project.accentColor}18 0%, rgba(255,255,255,0) 80%), #ffffff`
                    : `radial-gradient(ellipse 80% 50% at 50% -10%, ${project.accentColor}20 0%, rgba(5,5,5,0) 80%), #050505`,
                borderBottom: isLight
                    ? '1px solid rgba(0, 0, 0, 0.08)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Top Meta Bar */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '14px',
                        marginBottom: '20px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '13px',
                            color: isLight ? '#666666' : '#777777',
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
                        <span
                            style={{
                                color: isLight ? '#000000' : '#ffffff',
                                fontWeight: 600,
                            }}
                        >
                            {project.shortTitle}
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: isLight
                                ? 'rgba(0, 0, 0, 0.04)'
                                : 'rgba(255, 255, 255, 0.04)',
                            border: isLight
                                ? '1px solid rgba(0, 0, 0, 0.1)'
                                : '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '30px',
                            padding: '6px 14px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: isLight ? '#222222' : '#e0e0e0',
                        }}
                    >
                        <span
                            style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: '50%',
                                background: '#10b981',
                                boxShadow: '0 0 8px #10b981',
                            }}
                        />
                        <span>Enterprise Production • {project.year}</span>
                    </div>
                </div>

                {/* Editorial Split Hero Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '50px',
                        alignItems: 'center',
                    }}
                >
                    {/* Left Column: Typography & Narrative */}
                    <div>
                        <div style={{ marginBottom: '16px' }}>
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontWeight: 800,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    color: project.accentColor,
                                    background: `${project.accentColor}15`,
                                    border: `1px solid ${project.accentColor}35`,
                                    padding: '5px 14px',
                                    borderRadius: '6px',
                                }}
                            >
                                {project.category}
                            </span>
                        </div>

                        <h1
                            style={{
                                fontFamily:
                                    'var(--font-heading, Space Grotesk, sans-serif)',
                                fontSize: 'clamp(32px, 4.8vw, 56px)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                color: isLight ? '#0a0a0a' : '#ffffff',
                                letterSpacing: '-0.03em',
                                marginBottom: '22px',
                            }}
                        >
                            {project.title}
                        </h1>

                        <p
                            style={{
                                fontSize: 'clamp(15px, 1.8vw, 18px)',
                                color: isLight ? '#555555' : '#9a9a9a',
                                lineHeight: 1.65,
                                marginBottom: '32px',
                            }}
                        >
                            {project.tagline}
                        </p>

                        {/* Specs Pill Matrix */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '14px',
                                padding: '20px',
                                background: isLight
                                    ? '#f5f5f7'
                                    : 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '16px',
                                border: isLight
                                    ? '1px solid #e0e0e2'
                                    : '1px solid rgba(255, 255, 255, 0.06)',
                                marginBottom: '36px',
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        color: isLight ? '#777777' : '#666666',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Client
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: isLight ? '#111111' : '#ffffff',
                                        marginTop: '3px',
                                    }}
                                >
                                    {project.client}
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        color: isLight ? '#777777' : '#666666',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Industry
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: isLight ? '#111111' : '#ffffff',
                                        marginTop: '3px',
                                    }}
                                >
                                    {project.industry}
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        color: isLight ? '#777777' : '#666666',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Timeline
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: isLight ? '#111111' : '#ffffff',
                                        marginTop: '3px',
                                    }}
                                >
                                    {project.duration}
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        color: isLight ? '#777777' : '#666666',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Architecture
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: project.accentColor,
                                        marginTop: '3px',
                                    }}
                                >
                                    Microservices & Cloud
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
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
                                    padding: '15px 32px',
                                    borderRadius: '40px',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    boxShadow: `0 8px 25px ${project.accentColor}35`,
                                }}
                            >
                                <span>Launch Live Prototype</span>
                                <svg
                                    width="15"
                                    height="15"
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
                                href="#theatre"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: isLight
                                        ? 'rgba(0, 0, 0, 0.05)'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    color: isLight ? '#000000' : '#ffffff',
                                    padding: '15px 26px',
                                    borderRadius: '40px',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    border: isLight
                                        ? '1px solid rgba(0, 0, 0, 0.12)'
                                        : '1px solid rgba(255, 255, 255, 0.12)',
                                }}
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                                <span>Watch Film</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Dual-Device Stage (Desktop + Angled Mobile) */}
                    <div style={{ position: 'relative' }}>
                        {/* Ambient Stage Glow */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: '-20px',
                                background: `radial-gradient(circle, ${project.accentColor}20 0%, rgba(0,0,0,0) 70%)`,
                                filter: 'blur(50px)',
                                pointerEvents: 'none',
                            }}
                        />

                        {/* Desktop Browser Frame */}
                        <div
                            style={{
                                background: isLight ? '#f0f0f2' : '#111114',
                                borderRadius: '18px',
                                border: isLight
                                    ? '1px solid rgba(0, 0, 0, 0.12)'
                                    : '1px solid rgba(255, 255, 255, 0.12)',
                                boxShadow: isLight
                                    ? '0 20px 50px rgba(0,0,0,0.12)'
                                    : '0 25px 60px rgba(0,0,0,0.85)',
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            {/* Browser Bar */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '10px 16px',
                                    background: isLight ? '#e4e4e7' : '#18181b',
                                    borderBottom: isLight
                                        ? '1px solid rgba(0, 0, 0, 0.08)'
                                        : '1px solid rgba(255, 255, 255, 0.06)',
                                }}
                            >
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <span
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#ff5f56',
                                            display: 'inline-block',
                                        }}
                                    />
                                    <span
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#ffbd2e',
                                            display: 'inline-block',
                                        }}
                                    />
                                    <span
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#27c93f',
                                            display: 'inline-block',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        color: isLight ? '#444444' : '#777777',
                                        background: isLight
                                            ? '#ffffff'
                                            : '#09090b',
                                        padding: '4px 14px',
                                        borderRadius: '6px',
                                        maxWidth: '260px',
                                        width: '100%',
                                        textAlign: 'center',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        border: isLight
                                            ? '1px solid #d4d4d8'
                                            : 'none',
                                    }}
                                >
                                    🔒 {project.liveUrl}
                                </div>
                                <div
                                    style={{
                                        fontSize: '10px',
                                        color: project.accentColor,
                                        fontWeight: 700,
                                    }}
                                >
                                    LIVE
                                </div>
                            </div>

                            {/* Hero Desktop Image */}
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    maxHeight: '420px',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>

                        {/* Overlapping Angled Mobile Device */}
                        <div
                            style={{
                                position: 'absolute',
                                right: '-15px',
                                bottom: '-35px',
                                width: '190px',
                                background: isLight ? '#ffffff' : '#0a0a0c',
                                borderRadius: '24px',
                                padding: '8px',
                                border: isLight
                                    ? '2px solid rgba(0, 0, 0, 0.12)'
                                    : '2px solid rgba(255, 255, 255, 0.16)',
                                boxShadow: isLight
                                    ? '0 15px 40px rgba(0,0,0,0.15)'
                                    : '0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.5)',
                                transform: 'rotate(-3deg)',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform =
                                    'rotate(0deg) scale(1.05)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform =
                                    'rotate(-3deg) scale(1)')
                            }
                        >
                            {/* Phone Notch */}
                            <div
                                style={{
                                    width: '60px',
                                    height: '5px',
                                    background: isLight ? '#ccc' : '#222',
                                    borderRadius: '10px',
                                    margin: '4px auto 8px',
                                }}
                            />
                            <div
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={project.mobileImage}
                                    alt="Mobile companion app"
                                    style={{
                                        width: '100%',
                                        height: '240px',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Floating Metric Badge */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '24px',
                                left: '-15px',
                                background: isLight
                                    ? 'rgba(255, 255, 255, 0.95)'
                                    : 'rgba(10, 10, 12, 0.9)',
                                backdropFilter: 'blur(16px)',
                                border: isLight
                                    ? '1px solid rgba(0, 0, 0, 0.1)'
                                    : '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: '12px',
                                padding: '10px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                boxShadow: isLight
                                    ? '0 10px 30px rgba(0,0,0,0.1)'
                                    : '0 10px 30px rgba(0,0,0,0.6)',
                            }}
                        >
                            <span style={{ fontSize: '18px' }}>⚡</span>
                            <div>
                                <div
                                    style={{
                                        fontSize: '10px',
                                        color: isLight ? '#666' : '#888',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                    }}
                                >
                                    Latency
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        color: isLight ? '#000' : '#fff',
                                    }}
                                >
                                    &lt;45ms P99
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
