import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutCultureTalent() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const cultureTenets = [
        {
            number: '01',
            title: 'Deep Work Wednesdays & Focused Blocks',
            badge: 'ZERO FRAGMENTATION',
            description:
                'We treat engineering attention as a non-renewable resource. Wednesdays and Fridays feature a company-wide moratorium on internal meetings. Zero standups, zero status pings—pure uninterrupted system crafting.',
        },
        {
            number: '02',
            title: 'Open Architectural RFCs',
            badge: 'MERITOCRATIC DEBATE',
            description:
                'No technical hierarchy dictates schema design. Any developer—from junior associate to founder—can author an RFC document. Architectural choices succeed based on benchmarks and logic, never seniority.',
        },
        {
            number: '03',
            title: 'Annual Engineering Craft Stipend',
            badge: 'CONTINUOUS EVOLUTION',
            description:
                'Every engineer receives an annual $1,500 allowance for specialized technical literature, advanced dev tools, local AI test hardware, and premier developer symposiums across India and internationally.',
        },
        {
            number: '04',
            title: '100% In-House Direct Craft',
            badge: 'ZERO OUTSOURCING',
            description:
                'We never pass client code down to anonymous third-party contractor networks. Every single route, query, and component is authored by full-time Zytrixon engineers trained in our security and performance tenets.',
        },
    ];

    return (
        <section
            id="culture-talent"
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
                        We optimize for uninterrupted craft, not calendar
                        fragmentation.
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        World-class software cannot be conceived in 15-minute
                        gaps between check-in calls. We built a culture designed
                        specifically for senior systems thinkers: deep silence,
                        high psychological safety, unapologetic curiosity, and
                        extreme pride of authorship.
                    </p>
                </div>

                {/* Tenets Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                        marginBottom: '64px',
                    }}
                >
                    {cultureTenets.map((tenet) => (
                        <div
                            key={tenet.number}
                            style={{
                                padding: '36px',
                                borderRadius: '16px',
                                border: '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-muted)',
                                    }}
                                >
                                    RITUAL {tenet.number}
                                </span>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        padding: '3px 8px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--zy-border-subtle)',
                                        color: 'var(--zy-text-secondary)',
                                        background: isLight
                                            ? 'rgba(0,0,0,0.03)'
                                            : 'rgba(255,255,255,0.04)',
                                    }}
                                >
                                    {tenet.badge}
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    lineHeight: 1.3,
                                }}
                            >
                                {tenet.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: '14px',
                                    lineHeight: 1.7,
                                    color: 'var(--zy-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                {tenet.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Flow State Scorecard Banner */}
                <div
                    style={{
                        padding: '36px',
                        borderRadius: '16px',
                        border: '1px solid var(--zy-border-subtle)',
                        background: isLight ? '#f9f9fa' : 'var(--zy-surface-2)',
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '28px',
                        textAlign: 'center',
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '32px',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                            }}
                        >
                            4.4 Hrs
                        </div>
                        <div
                            style={{
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'var(--zy-text-muted)',
                                marginTop: '4px',
                                letterSpacing: '0.08em',
                            }}
                        >
                            AVG DAILY UNBROKEN FLOW BLOCK
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '32px',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                            }}
                        >
                            &lt; 6%
                        </div>
                        <div
                            style={{
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'var(--zy-text-muted)',
                                marginTop: '4px',
                                letterSpacing: '0.08em',
                            }}
                        >
                            ANNUAL VOLUNTARY TALENT ATTRITION
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '32px',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                            }}
                        >
                            12 : 1
                        </div>
                        <div
                            style={{
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'var(--zy-text-muted)',
                                marginTop: '4px',
                                letterSpacing: '0.08em',
                            }}
                        >
                            RATIO OF CODE TO MEETING TIME
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '32px',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                            }}
                        >
                            100%
                        </div>
                        <div
                            style={{
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'var(--zy-text-muted)',
                                marginTop: '4px',
                                letterSpacing: '0.08em',
                            }}
                        >
                            PERMANENT IN-HOUSE ARCHITECTS
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
