import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutExecutiveHUD() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const kpiCards = [
        {
            value: '99.98%',
            label: 'System Reliability',
            desc: 'Average SLA uptime maintained across production distributed systems.',
        },
        {
            value: '45+',
            label: 'Enterprise Deployments',
            desc: 'Custom-built cloud architectures, LIS engines & headless commerce stores.',
        },
        {
            value: '< 100ms',
            label: 'Edge Execution Latency',
            desc: 'Sub-second page rendering and atomic inventory synchronization.',
        },
        {
            value: '3 Continents',
            label: 'Global Impact Footprint',
            desc: 'Serving institutional clients across India, MENA, and North America.',
        },
    ];

    return (
        <section
            style={{
                padding: '60px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {kpiCards.map((kpi, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                borderRadius: '18px',
                                padding: '28px 24px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'all 0.3s ease',
                                boxShadow: isLight
                                    ? '0 4px 20px rgba(0,0,0,0.03)'
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
                            {/* Core Metric Value */}
                            <div
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: 'clamp(32px, 3.5vw, 44px)',
                                    fontWeight: 800,
                                    color: 'var(--zy-text-primary)',
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em',
                                    marginBottom: '14px',
                                }}
                            >
                                {kpi.value}
                            </div>

                            {/* Label & Description */}
                            <div>
                                <h3
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        margin: '0 0 6px 0',
                                    }}
                                >
                                    {kpi.label}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                        margin: 0,
                                    }}
                                >
                                    {kpi.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
