import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutDeliveryLifecycle() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const stages = [
        {
            step: '01',
            time: 'Days 1 – 7',
            title: 'Architecture Discovery & Threat Modeling',
            desc: 'We inspect your database bottlenecks, API dependencies, compliance constraints, and peak concurrency requirements before writing a single line of production code.',
        },
        {
            step: '02',
            time: 'Days 8 – 18',
            title: 'Bespoke Design System & Interactive Prototype',
            desc: 'We construct an atomic UI token system in Figma and code. Every button, input state, modal, and high-resolution workflow is prototyped for 60fps responsiveness.',
        },
        {
            step: '03',
            time: 'Days 19 – 30',
            title: 'Schema Partitioning & Core API Engine',
            desc: 'Building rock-solid Laravel API routes, Redis caching pipelines, transactional database migrations, and role-based permissions with strict automated tests.',
        },
        {
            step: '04',
            time: 'Days 31 – 45',
            title: 'High-Throughput Frontend & Micro-Interactions',
            desc: 'Crafting responsive React 19 views with sub-second page loads, server-rendered SEO tags, intuitive drag-and-drop workflows, and zero-layout-shift layouts.',
        },
        {
            step: '05',
            time: 'Days 46 – 55',
            title: 'Chaos Testing & Penetration Audits',
            desc: 'Simulating 20,000+ simultaneous checkout requests, SQL injection fuzzing, cross-site script penetration tests, and cross-browser mobile regression tests.',
        },
        {
            step: '06',
            time: 'Day 60+',
            title: 'Zero-Downtime Launch & Continuous Telemetry',
            desc: 'Deploying with blue-green zero-downtime swaps, edge CDN cache warmup, 24/7 server health telemetry, and formal codebase handover with full documentation.',
        },
    ];

    return (
        <section
            id="lifecycle"
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
                        The 6-Stage Delivery Protocol
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--zy-text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        Enterprise software cannot depend on luck or informal
                        developer chat logs. We enforce an immutable, six-stage
                        engineering lifecycle designed for absolute
                        predictability.
                    </p>
                </div>

                {/* 6-Card Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {stages.map((st, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                borderRadius: '20px',
                                padding: '32px 28px',
                                transition: 'all 0.25s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: isLight
                                    ? '0 4px 18px rgba(0,0,0,0.03)'
                                    : 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor =
                                    'var(--zy-border-hover)';
                                e.currentTarget.style.transform =
                                    'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor =
                                    'var(--zy-border-subtle)';
                                e.currentTarget.style.transform =
                                    'translateY(0)';
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'monospace',
                                            fontSize: '18px',
                                            fontWeight: 800,
                                            color: 'var(--zy-text-primary)',
                                        }}
                                    >
                                        STAGE {st.step}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            padding: '2px 8px',
                                            borderRadius: '10px',
                                            background: isLight
                                                ? 'rgba(0,0,0,0.05)'
                                                : 'rgba(255,255,255,0.06)',
                                            color: 'var(--zy-text-secondary)',
                                        }}
                                    >
                                        {st.time}
                                    </span>
                                </div>

                                <h3
                                    style={{
                                        fontFamily:
                                            'var(--font-heading, "Space Grotesk", sans-serif)',
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '12px',
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {st.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: '14px',
                                        lineHeight: 1.65,
                                        color: 'var(--zy-text-secondary)',
                                        margin: 0,
                                    }}
                                >
                                    {st.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
