import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutEngagementModels() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const models = [
        {
            tag: 'RAPID SCALE & SPEED',
            title: 'Dedicated Engineering Pod',
            popular: true,
            bestFor:
                'Funded ventures and product teams needing dedicated senior firepower.',
            features: [
                'Lead Solutions Architect + Senior Frontend & Backend Engineers',
                'Embedded directly into your GitHub & communication channels',
                'Bi-weekly production sprint deployments with complete PR reviews',
                'Full IP ownership transferred instantly with every Git commit',
                'Flexible scaling: expand or contract team size per quarter',
            ],
            turnaround: 'SPRINT BASED / 2 WEEKS',
        },
        {
            tag: 'SYSTEM MODERNIZATION',
            title: 'Fixed-Scope Architectural Overhaul',
            popular: false,
            bestFor:
                'Enterprises needing to replace slow legacy systems or rewrite monoliths.',
            features: [
                'Comprehensive architectural audit & database schema blueprint',
                'Strictly defined deliverables, milestones, and locked pricing',
                'Zero-downtime data migration pipeline from legacy storage',
                'Comprehensive automated test suite (>85% coverage)',
                '30-day post-launch warranty & telemetry surveillance',
            ],
            turnaround: 'MILESTONE BASED / 6-12 WEEKS',
        },
        {
            tag: 'MISSION CRITICAL',
            title: 'Enterprise SLA & Infrastructure Care',
            popular: false,
            bestFor:
                'High-traffic portals requiring 24/7 reliability and continuous performance.',
            features: [
                'Guaranteed 15-minute Sev-1 emergency incident response',
                'Continuous performance profiling & Lighthouse score lock',
                'Zero-day dependency vulnerability patching & security sweeps',
                'Automated daily off-site encrypted database backups',
                'Dedicated infrastructure review with executive management',
            ],
            turnaround: 'CONTINUOUS / 24/7/365',
        },
    ];

    return (
        <section
            id="engagement-models"
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '64px', maxWidth: '820px' }}>
                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, "Space Grotesk", sans-serif)',
                            fontSize: 'clamp(30px, 4vw, 52px)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: '-0.03em',
                            color: 'var(--zy-text-primary)',
                            marginBottom: '20px',
                        }}
                    >
                        Predictable engagements. Zero ambiguous change orders.
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        We despise typical agency billing traps—padding hourly
                        invoices and holding source code hostage. We provide
                        three battle-tested engagement models built around one
                        objective: shipping resilient software that compounds
                        your enterprise value.
                    </p>
                </div>

                {/* Models Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {models.map((m) => (
                        <div
                            key={m.title}
                            style={{
                                padding: '36px',
                                borderRadius: '16px',
                                border: m.popular
                                    ? isLight
                                        ? '2px solid #111111'
                                        : '2px solid #ffffff'
                                    : '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                position: 'relative',
                            }}
                        >
                            {m.popular && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        right: '24px',
                                        fontFamily: 'monospace',
                                        fontSize: '10px',
                                        fontWeight: 800,
                                        padding: '4px 10px',
                                        borderRadius: '4px',
                                        background: isLight
                                            ? '#111111'
                                            : '#ffffff',
                                        color: isLight ? '#ffffff' : '#000000',
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    MOST REQUESTED
                                </div>
                            )}

                            <div>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '0.12em',
                                        color: 'var(--zy-text-muted)',
                                    }}
                                >
                                    {m.tag}
                                </span>
                                <h3
                                    style={{
                                        fontFamily:
                                            'var(--font-heading, "Space Grotesk", sans-serif)',
                                        fontSize: '22px',
                                        fontWeight: 800,
                                        color: 'var(--zy-text-primary)',
                                        marginTop: '4px',
                                    }}
                                >
                                    {m.title}
                                </h3>
                            </div>

                            <p
                                style={{
                                    fontSize: '13px',
                                    lineHeight: 1.6,
                                    color: 'var(--zy-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                {m.bestFor}
                            </p>

                            <div
                                style={{
                                    borderTop:
                                        '1px solid var(--zy-border-subtle)',
                                    paddingTop: '18px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                {m.features.map((feat, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            gap: '10px',
                                            fontSize: '13px',
                                            color: 'var(--zy-text-primary)',
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: 'var(--zy-text-muted)',
                                                fontFamily: 'monospace',
                                                fontSize: '11px',
                                                fontWeight: 700,
                                            }}
                                        >
                                            +
                                        </span>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div
                                style={{
                                    marginTop: 'auto',
                                    paddingTop: '18px',
                                    borderTop:
                                        '1px solid var(--zy-border-subtle)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '10px',
                                        fontFamily: 'monospace',
                                        color: 'var(--zy-text-muted)',
                                        fontWeight: 700,
                                    }}
                                >
                                    DELIVERY CADENCE:
                                </span>
                                <span
                                    style={{
                                        fontFamily: 'monospace',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                    }}
                                >
                                    {m.turnaround}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
