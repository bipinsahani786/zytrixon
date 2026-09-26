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
    title = "Projects We're Proud Of",
    subtitle = 'Real results for real businesses — from concept to launch and beyond.',
    label = 'Selected Work',
}: {
    hideHeader?: boolean;
    limit?: number;
    title?: string;
    subtitle?: string;
    label?: string;
}) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = [
        'All',
        'Logistics',
        'Mobile Apps',
        'EdTech & ERP',
        'Real Estate',
        'Security',
        'E-Commerce',
        'HealthTech',
    ];

    const filteredProjects = DUMMY_PROJECTS.filter((p) => {
        if (activeFilter === 'All') {
            return true;
        }
        if (activeFilter === 'Logistics') {
            return p.id === 'jmd-trucks';
        }
        if (activeFilter === 'Mobile Apps') {
            return p.id === 'billixa-bill';
        }
        if (activeFilter === 'EdTech & ERP') {
            return p.id === 'hostel-erp';
        }
        if (activeFilter === 'Real Estate') {
            return p.id === 'sk-infratech';
        }
        if (activeFilter === 'Security') {
            return p.id === 'smart-india-detective';
        }
        if (activeFilter === 'E-Commerce') {
            return (
                p.id === 'thread-ax' ||
                p.id === 'threadax' ||
                p.id === 'glowsuite'
            );
        }
        if (activeFilter === 'HealthTech') {
            return p.id === 'zytrixon-labs';
        }
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
                    <span className="zy-section-label">{label}</span>
                    <h2 className="zy-section-title">{title}</h2>
                    {subtitle && (
                        <p
                            className="zy-section-subtitle"
                            style={{ margin: '16px auto 0' }}
                        >
                            {subtitle}
                        </p>
                    )}
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
                                borderRadius: '20px',
                                background: 'var(--zy-card-bg)',
                                border: '1px solid var(--zy-border-subtle)',
                                padding: '14px',
                                position: 'relative',
                                overflow: 'hidden',
                                transition:
                                    'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease',
                                backdropFilter: 'blur(10px)',
                                opacity: 0,
                            }}
                        >
                            {/* Card Image Showcase - Dominant image showcase area */}
                            <Link
                                href={projectUrl}
                                className="portfolio-thumb-wrapper"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '16 / 10',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: isLight
                                        ? '#f8fafc'
                                        : 'var(--zy-surface-1)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    marginBottom: '12px',
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
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                        display: 'block',
                                        transition:
                                            'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                />
                                {/* Client Badge */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '8px',
                                        left: '8px',
                                        background: 'var(--zy-glass-bg)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid var(--zy-glass-border)',
                                        borderRadius: '20px',
                                        padding: '2px 8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        fontSize: '10px',
                                        fontWeight: 600,
                                        color: 'var(--zy-text-primary)',
                                    }}
                                >
                                    <span
                                        style={{
                                            width: '5px',
                                            height: '5px',
                                            borderRadius: '50%',
                                            background:
                                                'var(--zy-text-secondary)',
                                        }}
                                    />
                                    {project.client.split('(')[0].trim()}
                                </div>
                            </Link>

                            {/* Compact Category & Metric Row */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '6px',
                                    marginBottom: '6px',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--zy-text-secondary)',
                                        background: 'var(--zy-surface-2)',
                                        border: '1px solid var(--zy-border-subtle)',
                                        padding: '2px 7px',
                                        borderRadius: '5px',
                                        display: 'inline-block',
                                    }}
                                >
                                    {project.category.split('•')[0].trim()}
                                </span>
                                {project.metrics &&
                                    project.metrics.length > 0 && (
                                        <span
                                            style={{
                                                fontSize: '10.5px',
                                                fontWeight: 700,
                                                color: 'var(--zy-text-primary)',
                                                background:
                                                    'var(--zy-surface-2)',
                                                border: '1px solid var(--zy-border-subtle)',
                                                borderRadius: '5px',
                                                padding: '2px 7px',
                                            }}
                                        >
                                            {project.metrics[0].value}{' '}
                                            {project.metrics[0].label}
                                        </span>
                                    )}
                            </div>

                            {/* Project Title (Compact) */}
                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '17px',
                                    fontWeight: 800,
                                    color: 'var(--zy-text-primary)',
                                    marginBottom: '4px',
                                    lineHeight: 1.25,
                                }}
                            >
                                <Link
                                    href={projectUrl}
                                    className="portfolio-title-link"
                                    style={{
                                        color: 'var(--zy-text-primary)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                    }}
                                >
                                    {project.shortTitle}
                                </Link>
                            </h3>

                            {/* Concise Tagline (Compact) */}
                            <p
                                style={{
                                    fontSize: '12.5px',
                                    color: 'var(--zy-text-secondary)',
                                    lineHeight: 1.45,
                                    marginBottom: '12px',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                {project.tagline}
                            </p>

                            {/* Bottom Row Aligned: More Details & Live Demo */}
                            <div
                                style={{
                                    marginTop: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    paddingTop: '10px',
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
                                        gap: '5px',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        background: 'var(--zy-surface-2)',
                                        border: '1px solid var(--zy-border-subtle)',
                                        color: 'var(--zy-text-primary)',
                                        fontSize: '11.5px',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    More Details
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line
                                            x1="5"
                                            y1="12"
                                            x2="19"
                                            y2="12"
                                        ></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}
                                >
                                    {project.playStoreUrl && (
                                        <a
                                            href={project.playStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="portfolio-live-link"
                                            style={{
                                                fontSize: '11.5px',
                                                fontWeight: 600,
                                                textDecoration: 'none',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '3px',
                                                color: '#10B981',
                                                transition: 'color 0.2s ease',
                                            }}
                                        >
                                            Play Store ↗
                                        </a>
                                    )}

                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="portfolio-live-link"
                                        style={{
                                            fontSize: '11.5px',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '3px',
                                            color: 'var(--zy-text-secondary)',
                                            transition: 'color 0.2s ease',
                                        }}
                                    >
                                        {project.playStoreUrl
                                            ? 'Website ↗'
                                            : 'Live Demo ↗'}
                                    </a>
                                </div>
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
                .portfolio-title-link:hover {
                    color: var(--zy-text-secondary) !important;
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
