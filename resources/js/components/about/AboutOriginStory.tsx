import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutOriginStory() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [selectedTab, setSelectedTab] = useState(0);

    const chapters = [
        {
            year: '2022',
            title: 'The Spark in Bihar',
            subtitle: 'Challenging the Outsourcing Status Quo',
            narrative:
                'Zytrixon was established in Patna, Bihar, by engineers dissatisfied with the transactional, low-quality software outsourcing culture prevalent across the subcontinent. We committed to a singular standard: building software with Silicon Valley tier architecture, extreme type safety, and domain-driven design from day zero.',
            highlight:
                'Founded with zero outside capital, 100% engineering conviction.',
        },
        {
            year: '2023',
            title: 'The Viral Concurrency Trial',
            subtitle: 'Handling 25,000+ Concurrent Flash Sales',
            narrative:
                'When emerging D2C fashion labels and consumer brands experienced repeated database crashes during Instagram drops, Zytrixon engineered a custom headless commerce layer with Redis atomic inventory reservations. The result was 99.99% uptime through 10,000+ requests per second.',
            highlight:
                'Zero overselling incidents across major national campaign launches.',
        },
        {
            year: '2024',
            title: 'Clinical Diagnostics & HealthTech',
            subtitle: 'LIS 2.0 Architectural Overhaul',
            narrative:
                'We expanded into mission-critical clinical software, creating ZytrixonLabs Pathology — an ASTM/HL7 compliant cloud laboratory information system connecting automated biochemistry analyzers with paperless doctor signatures and sub-minute WhatsApp patient report dispatches.',
            highlight:
                'Over 500,000 diagnostic samples processed with zero data discrepancy.',
        },
        {
            year: '2025 - 2026',
            title: 'Global Infrastructure & Dual Hubs',
            subtitle: 'NCR Expansion & International Mandates',
            narrative:
                'With active enterprise systems in real estate land acquisition, corporate investigation intelligence, and cloud ERPs, Zytrixon established an NCR engineering hub while maintaining its deep commitment to mentoring talent in Eastern India. Today, we partner with industry leaders across India, UAE, and the US.',
            highlight:
                'Ranked among the fastest-growing modern engineering studios in Eastern India.',
        },
    ];

    return (
        <section
            id="origin"
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: isLight ? 'var(--zy-surface-1)' : 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Section Header */}
                <div style={{ marginBottom: '60px', maxWidth: '780px' }}>
                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, "Space Grotesk", sans-serif)',
                            fontSize: 'clamp(30px, 4.2vw, 54px)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: '-0.025em',
                            color: 'var(--zy-text-primary)',
                            marginBottom: '20px',
                        }}
                    >
                        Forged in Patna. Trusted by Enterprises Worldwide.
                    </h2>

                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.65,
                            color: 'var(--zy-text-secondary)',
                            margin: 0,
                        }}
                    >
                        We did not begin in a Silicon Valley incubator or an
                        air-conditioned metropolitan glass tower. We began with
                        high-powered workstations, relentless curiosity, and a
                        stubborn refusal to write mediocre code.
                    </p>
                </div>

                {/* Split Interactive Narrative */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '40px',
                        alignItems: 'start',
                    }}
                >
                    {/* Left: Tab Selectors */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '14px',
                        }}
                    >
                        {chapters.map((ch, idx) => {
                            const isSelected = selectedTab === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setSelectedTab(idx);
                                    }}
                                    type="button"
                                    style={{
                                        textAlign: 'left',
                                        padding: '24px',
                                        borderRadius: '16px',
                                        background: isSelected
                                            ? isLight
                                                ? '#ffffff'
                                                : 'var(--zy-surface-2)'
                                            : 'transparent',
                                        border: isSelected
                                            ? '1px solid var(--zy-border-hover)'
                                            : '1px solid var(--zy-border-subtle)',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        boxShadow:
                                            isSelected && isLight
                                                ? '0 10px 30px rgba(0,0,0,0.04)'
                                                : 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '12px',
                                                fontWeight: 800,
                                                letterSpacing: '0.08em',
                                                color: isSelected
                                                    ? 'var(--zy-text-primary)'
                                                    : 'var(--zy-text-muted)',
                                                fontFamily: 'monospace',
                                            }}
                                        >
                                            {ch.year}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '11px',
                                                color: isSelected
                                                    ? 'var(--zy-text-primary)'
                                                    : 'var(--zy-text-muted)',
                                            }}
                                        >
                                            {isSelected
                                                ? 'ACTIVE READ'
                                                : 'INSPECT →'}
                                        </span>
                                    </div>

                                    <div
                                        style={{
                                            fontSize: '17px',
                                            fontWeight: 700,
                                            color: isSelected
                                                ? 'var(--zy-text-primary)'
                                                : 'var(--zy-text-secondary)',
                                            marginBottom: '4px',
                                        }}
                                    >
                                        {ch.title}
                                    </div>

                                    <div
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--zy-text-muted)',
                                        }}
                                    >
                                        {ch.subtitle}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Detailed Dossier Stage */}
                    <div
                        style={{
                            background: isLight
                                ? '#ffffff'
                                : 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            borderRadius: '24px',
                            padding: 'clamp(28px, 4vw, 48px)',
                            position: 'relative',
                            boxShadow: isLight
                                ? '0 15px 40px rgba(0,0,0,0.04)'
                                : 'none',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                background: isLight
                                    ? 'rgba(0,0,0,0.05)'
                                    : 'rgba(255,255,255,0.06)',
                                fontSize: '11px',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'var(--zy-text-secondary)',
                                marginBottom: '20px',
                                fontFamily: 'monospace',
                            }}
                        >
                            CHAPTER ARCHIVE // {chapters[selectedTab].year}
                        </div>

                        <h3
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: 'clamp(24px, 2.5vw, 36px)',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '16px',
                                lineHeight: 1.2,
                            }}
                        >
                            {chapters[selectedTab].title}
                        </h3>

                        <p
                            style={{
                                fontSize: '16px',
                                lineHeight: 1.75,
                                color: 'var(--zy-text-secondary)',
                                marginBottom: '28px',
                            }}
                        >
                            {chapters[selectedTab].narrative}
                        </p>

                        <div
                            style={{
                                padding: '18px 22px',
                                borderRadius: '14px',
                                background: isLight
                                    ? 'var(--zy-surface-1)'
                                    : 'var(--zy-surface-2)',
                                borderLeft: '3px solid var(--zy-text-primary)',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'var(--zy-text-primary)',
                                lineHeight: 1.5,
                            }}
                        >
                            <span
                                style={{
                                    color: 'var(--zy-text-muted)',
                                    marginRight: '6px',
                                }}
                            >
                                Benchmark:
                            </span>
                            {chapters[selectedTab].highlight}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
