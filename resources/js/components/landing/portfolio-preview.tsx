import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { DUMMY_PROJECTS } from '@/lib/projects-data';
import { useTheme } from '@/components/landing/theme-provider';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPreview({
    hideHeader = false,
    limit,
}: {
    hideHeader?: boolean;
    limit?: number;
}) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = [
        'All',
        'Real Estate',
        'Security',
        'E-Commerce',
        'HealthTech',
    ];

    const filteredProjects = DUMMY_PROJECTS.filter((p) => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Real Estate')
            return p.industry.toLowerCase().includes('real estate');
        if (activeFilter === 'Security')
            return (
                p.industry.toLowerCase().includes('security') ||
                p.industry.toLowerCase().includes('investigation')
            );
        if (activeFilter === 'E-Commerce')
            return (
                p.industry.toLowerCase().includes('commerce') ||
                p.industry.toLowerCase().includes('fashion')
            );
        if (activeFilter === 'HealthTech')
            return (
                p.industry.toLowerCase().includes('health') ||
                p.industry.toLowerCase().includes('pathology') ||
                p.industry.toLowerCase().includes('diagnostics')
            );
        return true;
    });

    const displayedProjects = limit
        ? DUMMY_PROJECTS.slice(0, limit)
        : filteredProjects;

    useEffect(() => {
        if (!sectionRef.current) {
            return;
        }

        const ctx = gsap.context(() => {
            itemsRef.current.filter(Boolean).forEach((item, i) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 35 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        delay: (i % 3) * 0.12,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            once: true,
                        },
                    },
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [activeFilter, limit]);

    return (
        <section
            ref={sectionRef}
            id="work"
            className="zy-section"
            style={{ background: 'var(--zy-bg)', overflow: 'hidden' }}
        >
            {!hideHeader && (
                <div
                    className="zy-section-header"
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span className="zy-section-label">Selected Work</span>
                    <h2 className="zy-section-title">
                        Projects We're Proud Of
                    </h2>
                    <p
                        className="zy-section-subtitle"
                        style={{ margin: '16px auto 0' }}
                    >
                        Real results for real businesses — from concept to
                        launch and beyond.
                    </p>
                </div>
            )}

            {/* Category Filter Pills on Full Portfolio/Work Page */}
            {!limit && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginBottom: '50px',
                        padding: '0 20px',
                    }}
                >
                    {categories.map((cat) => {
                        const isActive = activeFilter === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                style={{
                                    padding: '10px 22px',
                                    borderRadius: '30px',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    border: isActive
                                        ? '1px solid var(--zy-text-primary)'
                                        : '1px solid var(--zy-border-subtle)',
                                    background: isActive
                                        ? 'var(--zy-text-primary)'
                                        : 'var(--zy-card-bg)',
                                    color: isActive
                                        ? 'var(--zy-bg)'
                                        : 'var(--zy-text-secondary)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* 3-Column Aligned Projects Row / Responsive Grid */}
            <div
                className="portfolio-grid"
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 20px',
                }}
            >
                {displayedProjects.map((project, i) => {
                    const projectUrl = `/portfolio/${project.slug}`;

                    return (
                        <div
                            key={project.id}
                            ref={(el) => {
                                itemsRef.current[i] = el;
                            }}
                            className="portfolio-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '24px',
                                background: 'var(--zy-card-bg)',
                                border: '1px solid var(--zy-border-subtle)',
                                padding: '20px',
                                position: 'relative',
                                overflow: 'hidden',
                                transition:
                                    'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease',
                                backdropFilter: 'blur(10px)',
                                opacity: 0,
                            }}
                        >
                            {/* Card Image Showcase - Aspect ratio 2.08:1 fits 1024x490 screenshots completely full without cut */}
                            <Link
                                href={projectUrl}
                                className="portfolio-thumb-wrapper"
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '2.08 / 1',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    background: 'var(--zy-surface-1)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    marginBottom: '18px',
                                    textDecoration: 'none',
                                }}
                            >
                                <img
                                    src={project.heroImage}
                                    alt={project.shortTitle}
                                    className="portfolio-thumb-img"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top center',
                                        display: 'block',
                                        transition:
                                            'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                />
                                <div
                                    className="portfolio-thumb-overlay"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background:
                                            'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)',
                                        pointerEvents: 'none',
                                    }}
                                />
                                {/* Client / Year Badge */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '10px',
                                        background: 'var(--zy-glass-bg)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid var(--zy-glass-border)',
                                        borderRadius: '20px',
                                        padding: '3px 10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        color: 'var(--zy-text-primary)',
                                    }}
                                >
                                    <span
                                        style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: project.accentColor,
                                            boxShadow: `0 0 8px ${project.accentColor}`,
                                        }}
                                    />
                                    {project.client.split('(')[0].trim()}
                                </div>
                            </Link>

                            {/* Category Badge */}
                            <div style={{ marginBottom: '10px' }}>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        color: project.accentColor,
                                        background: `${project.accentColor}18`,
                                        border: `1px solid ${project.accentColor}33`,
                                        padding: '3px 10px',
                                        borderRadius: '10px',
                                        display: 'inline-block',
                                    }}
                                >
                                    {project.category.split('•')[0].trim()}
                                </span>
                            </div>

                            {/* Project Title */}
                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '20px',
                                    fontWeight: 800,
                                    color: 'var(--zy-text-primary)',
                                    marginBottom: '8px',
                                    lineHeight: 1.3,
                                }}
                            >
                                <Link
                                    href={projectUrl}
                                    style={{
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.color = project.accentColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.color = 'var(--zy-text-primary)';
                                    }}
                                >
                                    {project.shortTitle}
                                </Link>
                            </h3>

                            {/* Concise Tagline (Less Content) */}
                            <p
                                style={{
                                    fontSize: '13.5px',
                                    color: 'var(--zy-text-secondary)',
                                    lineHeight: 1.55,
                                    marginBottom: '16px',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                {project.tagline}
                            </p>

                            {/* Key Highlight Metric Badge */}
                            {project.metrics && project.metrics.length > 0 && (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '8px',
                                        flexWrap: 'wrap',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {project.metrics
                                        .slice(0, 2)
                                        .map((m, mIdx) => (
                                            <span
                                                key={mIdx}
                                                style={{
                                                    background:
                                                        'var(--zy-surface-2)',
                                                    border: '1px solid var(--zy-border-subtle)',
                                                    borderRadius: '8px',
                                                    padding: '3px 9px',
                                                    fontSize: '11.5px',
                                                    color: 'var(--zy-text-secondary)',
                                                }}
                                            >
                                                <strong
                                                    style={{
                                                        color: project.accentColor,
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {m.value}
                                                </strong>{' '}
                                                {m.label}
                                            </span>
                                        ))}
                                </div>
                            )}

                            {/* Bottom Row Aligned: More Details & Live Demo */}
                            <div
                                style={{
                                    marginTop: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '12px',
                                    paddingTop: '16px',
                                    borderTop:
                                        '1px solid var(--zy-border-subtle)',
                                }}
                            >
                                <Link
                                    href={projectUrl}
                                    className="portfolio-btn-compact"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '9px 18px',
                                        borderRadius: '30px',
                                        background: 'transparent',
                                        border: `1px solid ${project.accentColor}`,
                                        color: project.accentColor,
                                        fontSize: '12.5px',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    More Details
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>

                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-live-link"
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        transition: 'color 0.2s ease',
                                    }}
                                >
                                    Live Demo ↗
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* View All / Show More Button on Homepage */}
            {limit && (
                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link
                        href="/work"
                        className="magnetic-btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 36px',
                            fontSize: '13.5px',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                        }}
                    >
                        View All Projects
                        <svg
                            className="btn-arrow"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            )}

            <style>{`
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                    align-items: stretch;
                }
                @media (max-width: 1024px) {
                    .portfolio-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px;
                    }
                }
                @media (max-width: 640px) {
                    .portfolio-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
                .portfolio-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--zy-border-hover) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25) !important;
                }
                .portfolio-card:hover .portfolio-thumb-img {
                    transform: scale(1.04);
                }
                .portfolio-btn-compact:hover {
                    background: var(--zy-text-primary) !important;
                    color: var(--zy-bg) !important;
                    border-color: var(--zy-text-primary) !important;
                }
                .portfolio-live-link {
                    color: var(--zy-text-secondary);
                }
                .portfolio-live-link:hover {
                    color: var(--zy-text-primary) !important;
                }
            `}</style>
        </section>
    );
}
