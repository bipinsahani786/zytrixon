import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutRecognitionAwards() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const lighthouseScores = [
        {
            metric: 'PERFORMANCE',
            score: '100',
            detail: 'LCP 0.58s | CLS 0.00 | TBT 0ms',
        },
        {
            metric: 'ACCESSIBILITY',
            score: '100',
            detail: 'Full ARIA landmarks & WCAG AA',
        },
        {
            metric: 'BEST PRACTICES',
            score: '100',
            detail: 'HTTPS, CSP & modern protocols',
        },
        {
            metric: 'SEARCH (SEO)',
            score: '100',
            detail: 'Rich JSON-LD schemas & metadata',
        },
    ];

    const recognitions = [
        {
            category: 'CODE QUALITY',
            title: 'Zero-Tolerance Static Analysis Standards',
            badge: 'PSR-12 / TS STRICT',
            desc: 'Every commit passes automated CI pipelines with 100% strict TypeScript types, zero unused dependencies, and zero ESLint warnings.',
        },
        {
            category: 'SECURITY INTEGRITY',
            title: 'Clean SAST/DAST Vulnerability Track Record',
            badge: 'ZERO CVEs',
            desc: 'Automated vulnerability scanning across container images and NPM/Composer dependency trees ensures zero unpatched high-severity vulnerabilities in production.',
        },
        {
            category: 'SYSTEM RESILIENCE',
            title: 'Chaos Monkey & Fault-Tolerant Audits',
            badge: 'HIGH RESILIENCE',
            desc: 'Production architectures are stress-tested with artificial latency injection and database node failover drills to verify automated recovery without data loss.',
        },
    ];

    return (
        <section
            id="recognition-awards"
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
                        Measurable mathematical performance over subjective
                        vanity awards.
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        We do not buy vanity agency awards. We substantiate our
                        engineering claims with automated Google Lighthouse
                        audits, strict cryptographic benchmarks, and production
                        uptime that holds during viral peak demand.
                    </p>
                </div>

                {/* Lighthouse Quadruple HUD */}
                <div
                    style={{
                        padding: '40px',
                        borderRadius: '16px',
                        border: '1px solid var(--zy-border-subtle)',
                        background: isLight ? '#ffffff' : 'var(--zy-surface-1)',
                        marginBottom: '48px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '12px',
                            marginBottom: '32px',
                            paddingBottom: '18px',
                            borderBottom: '1px solid var(--zy-border-subtle)',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                color: 'var(--zy-text-muted)',
                            }}
                        >
                            INDEPENDENT AUDIT: GOOGLE LIGHTHOUSE ENGINE V12
                        </div>
                        <span
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '11px',
                                fontWeight: 700,
                                padding: '4px 10px',
                                borderRadius: '4px',
                                background: isLight ? '#111111' : '#ffffff',
                                color: isLight ? '#ffffff' : '#000000',
                            }}
                        >
                            VERIFIED AUDIT STATUS: 100/100
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        {lighthouseScores.map((item) => (
                            <div
                                key={item.metric}
                                style={{
                                    textAlign: 'center',
                                    padding: '24px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--zy-border-subtle)',
                                    background: isLight
                                        ? '#fbfbfb'
                                        : 'var(--zy-surface-2)',
                                }}
                            >
                                <div
                                    style={{
                                        width: '72px',
                                        height: '72px',
                                        borderRadius: '50%',
                                        margin: '0 auto 16px auto',
                                        border: isLight
                                            ? '2px solid #111111'
                                            : '2px solid #ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'monospace',
                                        fontSize: '22px',
                                        fontWeight: 800,
                                        color: 'var(--zy-text-primary)',
                                    }}
                                >
                                    {item.score}
                                </div>
                                <div
                                    style={{
                                        fontFamily:
                                            'var(--font-heading, "Space Grotesk", sans-serif)',
                                        fontSize: '14px',
                                        fontWeight: 800,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {item.metric}
                                </div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        fontFamily: 'monospace',
                                        color: 'var(--zy-text-muted)',
                                    }}
                                >
                                    {item.detail}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Standards Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {recognitions.map((rec) => (
                        <div
                            key={rec.title}
                            style={{
                                padding: '32px',
                                borderRadius: '16px',
                                border: '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px',
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
                                        fontSize: '10px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '0.12em',
                                        color: 'var(--zy-text-muted)',
                                    }}
                                >
                                    {rec.category}
                                </span>
                                <span
                                    style={{
                                        fontSize: '9px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--zy-border-subtle)',
                                        color: 'var(--zy-text-secondary)',
                                    }}
                                >
                                    {rec.badge}
                                </span>
                            </div>
                            <h3
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    lineHeight: 1.35,
                                }}
                            >
                                {rec.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '13px',
                                    lineHeight: 1.65,
                                    color: 'var(--zy-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                {rec.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
