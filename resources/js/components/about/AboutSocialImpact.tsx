import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutSocialImpact() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const impactPrograms = [
        {
            title: 'Tier-2 & Tier-3 Developer Fellowships',
            tag: 'TALENT ACCELERATION',
            description:
                'Conducting fully funded weekend bootcamps for ambitious university students across Bihar, teaching production Git workflows, relational database normalization, and type-safe frontend architecture.',
            stats: '1,200+ Students Mentored to Date',
        },
        {
            title: 'Pro-Bono Civic & Healthcare Tooling',
            tag: 'COMMUNITY INFRASTRUCTURE',
            description:
                'Engineering zero-cost digital infrastructure for local community health clinics, blood bank tracking systems, and regional education trusts that cannot afford commercial software agencies.',
            stats: '12 Civic Platforms Actively Maintained',
        },
        {
            title: 'Reversing Regional Brain Drain',
            tag: 'ECONOMIC STABILITY',
            description:
                'Offering tier-1 metropolitan compensation benchmarks within Patna. Senior engineers build global-class careers without being forced to migrate away from their families and heritage.',
            stats: '100% Retention of Local Founding Cohort',
        },
        {
            title: 'Open Regional Tech Curriculum',
            tag: 'KNOWLEDGE COMMONS',
            description:
                'Publishing accessible open-source engineering guides, code snippets, and Hindi/English architectural breakdown sessions to help self-taught developers crack global engineering standards.',
            stats: 'Open Source & Freely Distributed',
        },
    ];

    return (
        <section
            id="social-impact"
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
                        The Digital Bihar Initiative: Democratizing high-tier
                        engineering excellence.
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        Raw intellectual brilliance has always existed in
                        abundance across Eastern India; what was missing was
                        access to enterprise-grade software standards. We built
                        Zytrixon not merely to deliver commercial software, but
                        to prove that world-class digital powerhouses can be
                        built directly on this soil.
                    </p>
                </div>

                {/* Impact Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                        marginBottom: '64px',
                    }}
                >
                    {impactPrograms.map((program) => (
                        <div
                            key={program.title}
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
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    color: 'var(--zy-text-muted)',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {program.tag}
                            </div>
                            <h3
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    lineHeight: 1.35,
                                }}
                            >
                                {program.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '14px',
                                    lineHeight: 1.7,
                                    color: 'var(--zy-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                {program.description}
                            </p>
                            <div
                                style={{
                                    marginTop: 'auto',
                                    paddingTop: '16px',
                                    borderTop:
                                        '1px solid var(--zy-border-subtle)',
                                    fontFamily: 'monospace',
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                }}
                            >
                                &rarr; {program.stats}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cultural Anchor Quote Banner */}
                <div
                    style={{
                        padding: '40px',
                        borderRadius: '16px',
                        border: '1px solid var(--zy-border-subtle)',
                        background: isLight ? '#f9f9fa' : 'var(--zy-surface-2)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    <div
                        style={{
                            fontSize: '11px',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--zy-text-muted)',
                        }}
                    >
                        FOUNDING PRINCIPLE / CIVIC PLEDGE
                    </div>
                    <blockquote
                        style={{
                            margin: 0,
                            fontFamily:
                                'var(--font-heading, "Space Grotesk", sans-serif)',
                            fontSize: 'clamp(18px, 2.5vw, 26px)',
                            fontWeight: 700,
                            lineHeight: 1.4,
                            color: 'var(--zy-text-primary)',
                        }}
                    >
                        &ldquo;We measure our legacy not only by the revenues
                        generated or the enterprise systems deployed, but by the
                        generation of young engineers in Bihar whose lives were
                        transformed because they saw that world-class
                        engineering can be built right here.&rdquo;
                    </blockquote>
                    <div
                        style={{
                            fontFamily: 'monospace',
                            fontSize: '12px',
                            color: 'var(--zy-text-muted)',
                        }}
                    >
                        &mdash; Bipin Sahani, Founder &amp; Chief Architect,
                        Zytrixon
                    </div>
                </div>
            </div>
        </section>
    );
}
