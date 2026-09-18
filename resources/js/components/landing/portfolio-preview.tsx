import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { DUMMY_PROJECTS } from '@/lib/projects-data';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPreview({
    hideHeader = false,
}: {
    hideHeader?: boolean;
}) {
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!sectionRef.current) {
            return;
        }

        const ctx = gsap.context(() => {
            itemsRef.current.filter(Boolean).forEach((item, i) => {
                const isEven = i % 2 === 0;
                gsap.fromTo(
                    item,
                    { opacity: 0, x: isEven ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 80%',
                            once: true,
                        },
                    },
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="work"
            className="zy-section"
            style={{ background: 'var(--zy-black)', overflow: 'hidden' }}
        >
            {!hideHeader && (
                <div
                    className="zy-section-header"
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <span className="zy-section-label">Selected Work</span>
                    <h2 className="zy-section-title">
                        Projects We're Proud Of
                    </h2>
                    <p
                        className="zy-section-subtitle"
                        style={{ margin: '20px auto 0' }}
                    >
                        Real results for real businesses — from concept to
                        launch and beyond.
                    </p>
                </div>
            )}

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '80px' : '140px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {DUMMY_PROJECTS.map((project, i) => {
                    const isEven = i % 2 === 0;
                    const projectUrl = `/portfolio/${project.slug}`;

                    return (
                        <div
                            key={project.id}
                            ref={(el) => {
                                itemsRef.current[i] = el;
                            }}
                            className="portfolio-row"
                            style={{
                                display: 'flex',
                                flexDirection: isMobile
                                    ? 'column'
                                    : isEven
                                      ? 'row'
                                      : 'row-reverse',
                                alignItems: 'center',
                                gap: isMobile ? '30px' : '60px',
                                opacity: 0,
                            }}
                        >
                            {/* Text Content */}
                            <div
                                style={{
                                    flex: isMobile ? '1' : '0 0 45%',
                                    zIndex: 2,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        color: project.accentColor,
                                        marginBottom: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '30px',
                                            height: '1px',
                                            background: project.accentColor,
                                        }}
                                    ></div>
                                    {project.category}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: isMobile ? '30px' : '38px',
                                        fontWeight: 800,
                                        color: 'var(--zy-white)',
                                        marginBottom: '18px',
                                        lineHeight: 1.2,
                                    }}
                                >
                                    <Link
                                        href={projectUrl}
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            (
                                                e.currentTarget as HTMLElement
                                            ).style.color = project.accentColor;
                                        }}
                                        onMouseLeave={(e) => {
                                            (
                                                e.currentTarget as HTMLElement
                                            ).style.color = 'var(--zy-white)';
                                        }}
                                    >
                                        {project.title}
                                    </Link>
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: 'var(--zy-gray-text)',
                                        lineHeight: 1.75,
                                        marginBottom: '28px',
                                    }}
                                >
                                    {project.summary}
                                </p>

                                {/* Metric preview chips */}
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        flexWrap: 'wrap',
                                        marginBottom: '32px',
                                    }}
                                >
                                    {project.metrics
                                        .slice(0, 2)
                                        .map((m, mIdx) => (
                                            <div
                                                key={mIdx}
                                                style={{
                                                    background:
                                                        'rgba(255,255,255,0.04)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    borderRadius: '12px',
                                                    padding: '10px 16px',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize: '18px',
                                                        fontWeight: 800,
                                                        color: project.accentColor,
                                                        fontFamily:
                                                            'var(--font-heading)',
                                                    }}
                                                >
                                                    {m.value}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: '12px',
                                                        color: 'var(--zy-gray-text)',
                                                        marginTop: '2px',
                                                    }}
                                                >
                                                    {m.label}
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <Link
                                        href={projectUrl}
                                        className="portfolio-btn"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '14px 28px',
                                            background: 'transparent',
                                            border: `1px solid ${project.accentColor}`,
                                            borderRadius: '30px',
                                            color: project.accentColor,
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        View Case Study & Video
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
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

                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--zy-gray-text)',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={(e) => {
                                            (
                                                e.currentTarget as HTMLElement
                                            ).style.color = '#FFFFFF';
                                        }}
                                        onMouseLeave={(e) => {
                                            (
                                                e.currentTarget as HTMLElement
                                            ).style.color =
                                                'var(--zy-gray-text)';
                                        }}
                                    >
                                        Live Demo ↗
                                    </a>
                                </div>
                            </div>

                            {/* Image Showcase */}
                            <div
                                style={{
                                    flex: '1',
                                    width: '100%',
                                    perspective: '1000px',
                                }}
                            >
                                <Link
                                    href={projectUrl}
                                    className="portfolio-image-wrapper zy-card"
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        width: '100%',
                                        height: isMobile ? '300px' : '480px',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        transform: isMobile
                                            ? 'none'
                                            : isEven
                                              ? 'rotateY(-5deg) rotateX(5deg)'
                                              : 'rotateY(5deg) rotateX(5deg)',
                                        transition:
                                            'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                        boxShadow: `0 30px 60px -20px rgba(0,0,0,0.8), 0 0 40px -10px ${project.accentColor}33`,
                                    }}
                                >
                                    <div
                                        className="portfolio-bg"
                                        style={{
                                            position: 'absolute',
                                            inset: '-10px',
                                            backgroundImage: `url(${project.heroImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'grayscale(60%) opacity(0.85)',
                                            transition:
                                                'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.8s ease',
                                        }}
                                    />

                                    {/* Video / Play indicator pill */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '24px',
                                            left: '24px',
                                            background: 'rgba(0,0,0,0.75)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            borderRadius: '30px',
                                            padding: '8px 16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            color: '#ffffff',
                                            zIndex: 3,
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: project.accentColor,
                                                boxShadow: `0 0 8px ${project.accentColor}`,
                                            }}
                                        />
                                        Watch Video Demo & Screenshots
                                    </div>

                                    {/* Glass Overlay on Hover */}
                                    <div
                                        className="portfolio-glass-overlay"
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background:
                                                'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                                            opacity: 0,
                                            transition: 'opacity 0.6s ease',
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* View All Button */}
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <a
                    href="/work"
                    className="svg-underline"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '15px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'var(--zy-white)',
                        textDecoration: 'none',
                    }}
                >
                    View All Case Studies
                </a>
            </div>

            <style>{`
                .portfolio-btn:hover {
                    background: var(--zy-white) !important;
                    color: var(--zy-black) !important;
                    border-color: var(--zy-white) !important;
                }
                .portfolio-image-wrapper:hover {
                    transform: scale(1.02) rotateY(0deg) rotateX(0deg) !important;
                    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.9), 0 0 60px -10px rgba(255,255,255,0.1) !important;
                }
                .portfolio-image-wrapper:hover .portfolio-bg {
                    transform: scale(1.05);
                    filter: grayscale(0%) opacity(1) !important;
                }
                .portfolio-image-wrapper:hover .portfolio-glass-overlay {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
}
