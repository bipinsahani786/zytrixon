import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutMilestonesChronology() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const milestones = [
        {
            year: 'Q1 2022',
            title: 'Genesis in Patna, Bihar',
            summary:
                'Zytrixon founded with an initial focus on distributed web APIs and micro-frontend architectures for Indian startups.',
            badge: 'FOUNDING PHASE',
        },
        {
            year: 'Q3 2022',
            title: 'First International Architecture Audit',
            summary:
                'Commissioned by a Middle East logistics firm to audit high-throughput vehicle telematics pipelines, reducing memory leaks by 80%.',
            badge: 'GLOBAL OUTREACH',
        },
        {
            year: 'Q2 2023',
            title: 'Thread Ax Headless Commerce Launch',
            summary:
                'Engineered sub-second Next.js storefront with atomic Redis flash sale checkout, handling over 25,000 simultaneous shoppers.',
            badge: 'CONCURRENCY RECORD',
        },
        {
            year: 'Q4 2023',
            title: 'Smart India Detective Intelligence Portal',
            summary:
                'Architected zero-knowledge evidence submission suite and encrypted case vaults for India’s premier private investigation network.',
            badge: 'ZERO-TRUST SECURITY',
        },
        {
            year: 'Q2 2024',
            title: 'ZytrixonLabs Pathology LIS 2.0',
            summary:
                'Built bidirectional ASTM/HL7 medical analyzer gateway, processing over 500k diagnostic reports with automated WhatsApp delivery.',
            badge: 'HEALTHTECH MILESTONE',
        },
        {
            year: 'Q4 2024',
            title: 'NCR Operations & Land Portal Launch',
            summary:
                'Partnered with S.K. Infratech to launch direct-to-owner property acquisition engine with transparent RERA verification badges.',
            badge: 'ENTERPRISE REAL ESTATE',
        },
        {
            year: '2025 - 2026',
            title: 'Edge AI Agents & Distributed Telemetry',
            summary:
                'Expanding into autonomous multi-tenant agent orchestration and edge computing pipelines serving clients across 3 continents.',
            badge: 'NEXT HORIZON',
        },
    ];

    return (
        <section
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: isLight ? 'var(--zy-surface-1)' : 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '64px', maxWidth: '780px' }}>
                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, "Space Grotesk", sans-serif)',
                            fontSize: 'clamp(30px, 4vw, 52px)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: '-0.025em',
                            color: 'var(--zy-text-primary)',
                            marginBottom: '16px',
                        }}
                    >
                        Milestones of Relentless Execution
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--zy-text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        A continuous track record of building, shipping, and
                        stress-testing complex software architectures.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div
                    style={{
                        position: 'relative',
                        paddingLeft: '32px',
                        borderLeft: isLight
                            ? '2px solid rgba(0,0,0,0.1)'
                            : '2px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                    }}
                >
                    {milestones.map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                position: 'relative',
                            }}
                        >
                            {/* Dot on line */}
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '-41px',
                                    top: '4px',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    background: isLight ? '#0a0a0a' : '#ffffff',
                                    border: isLight
                                        ? '3px solid #ffffff'
                                        : '3px solid #000000',
                                    boxShadow: isLight
                                        ? '0 0 0 2px rgba(0,0,0,0.15)'
                                        : '0 0 0 2px rgba(255,255,255,0.2)',
                                }}
                            />

                            <div
                                style={{
                                    background: isLight
                                        ? '#ffffff'
                                        : 'var(--zy-surface-1)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    borderRadius: '18px',
                                    padding: '24px 28px',
                                    transition: 'all 0.25s ease',
                                    boxShadow: isLight
                                        ? '0 4px 20px rgba(0,0,0,0.03)'
                                        : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor =
                                        'var(--zy-border-hover)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor =
                                        'var(--zy-border-subtle)';
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexWrap: 'wrap',
                                        gap: '12px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'monospace',
                                            fontSize: '13px',
                                            fontWeight: 800,
                                            color: 'var(--zy-text-primary)',
                                        }}
                                    >
                                        {item.year}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '10px',
                                            fontWeight: 700,
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            padding: '2px 8px',
                                            borderRadius: '10px',
                                            background: isLight
                                                ? 'rgba(0,0,0,0.05)'
                                                : 'rgba(255,255,255,0.06)',
                                            color: 'var(--zy-text-secondary)',
                                        }}
                                    >
                                        {item.badge}
                                    </span>
                                </div>

                                <h3
                                    style={{
                                        fontFamily:
                                            'var(--font-heading, "Space Grotesk", sans-serif)',
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        margin: '0 0 8px 0',
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {item.summary}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
