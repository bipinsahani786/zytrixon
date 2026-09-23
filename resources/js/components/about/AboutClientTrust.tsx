import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutClientTrust() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const metrics = [
        {
            label: 'CLIENT ANNUAL RETENTION',
            value: '94.2%',
            caption: 'Partners extending beyond initial launch',
        },
        {
            label: 'AVERAGE TENURE',
            value: '2.8 YRS',
            caption: 'Continuous engineering & scale evolution',
        },
        {
            label: 'SLA BREACHES',
            value: '0.00%',
            caption: 'Zero unresolved Sev-1 outages',
        },
        {
            label: 'THROUGHPUT MULTIPLIER',
            value: '3.4x',
            caption: 'Average query speed gain post-redesign',
        },
    ];

    const sectors = [
        {
            sector: 'HEALTHCARE & DIAGNOSTIC LABS',
            anchorClient: 'LifeCare Diagnostic Engine',
            challenge:
                'Paper-heavy manual pathology workflows causing sample mismatch risks, doctor signature bottlenecks, and delayed patient delivery.',
            solution:
                'Built custom Laboratory Information System (LIS) with automated barcode tube generation, encrypted PDF watermarking, and instant multi-channel WhatsApp report delivery.',
            impact: 'Reduced report turnaround time by 68% and eliminated 100% of clerical transcription errors across daily patient cohorts.',
        },
        {
            sector: 'REAL ESTATE & LUXURY DEVELOPMENTS',
            anchorClient: 'UrbanNest Architectural Group',
            challenge:
                'Slow monolithic WordPress portals with low-converting static floor plans failing to convert high-net-worth real estate buyers.',
            solution:
                'Engineered bespoke headless React portal with instant filter faceted search, interactive SVG floor plan unit selectors, and instant CRM lead ingestion.',
            impact: 'Lifted qualified site tour bookings by 44% with page load times dropping from 4.8s to 0.42s on mobile connections.',
        },
        {
            sector: 'HIGH-FREQUENCY D2C COMMERCE',
            anchorClient: 'OmniScale Retail Fleet',
            challenge:
                'Database deadlocks during festive flash sales causing abandoned checkouts and overselling out-of-stock SKUs.',
            solution:
                'Deployed Redis atomic decrement locks with queue-backed asynchronous order worker pools and edge-cached catalog assets.',
            impact: 'Zero overselling incidents across 25,000+ peak order transactions per hour with 99.99% checkout uptime.',
        },
        {
            sector: 'B2B FINTECH & WORKFLOW SAAS',
            anchorClient: 'Apex Ledger Enterprise',
            challenge:
                'Complex compliance data segregation requirements across multi-tenant enterprise customers needing granular audit trails.',
            solution:
                'Implemented schema-isolated PostgreSQL multi-tenancy with cryptographic immutable ledger hashing and role-based zero-trust permissions.',
            impact: 'Passed rigorous third-party SOC-2 audit with zero architectural non-conformances within 90 days.',
        },
    ];

    return (
        <section
            id="client-trust"
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
                        We don&apos;t build disposable software. We forge
                        decade-long engineering alliances.
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        Standard IT agencies treat projects like one-and-done
                        contractor gigs. We view every enterprise contract as a
                        shared capital investment. When we engineer a system, we
                        sign our name to its long-term stability, scalability,
                        and commercial dominance.
                    </p>
                </div>

                {/* Telemetry Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '16px',
                        marginBottom: '64px',
                    }}
                >
                    {metrics.map((m) => (
                        <div
                            key={m.label}
                            style={{
                                padding: '24px',
                                borderRadius: '12px',
                                border: '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: 'var(--zy-text-muted)',
                                    marginBottom: '8px',
                                }}
                            >
                                {m.label}
                            </div>
                            <div
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '36px',
                                    fontWeight: 800,
                                    letterSpacing: '-0.03em',
                                    color: 'var(--zy-text-primary)',
                                    marginBottom: '6px',
                                }}
                            >
                                {m.value}
                            </div>
                            <div
                                style={{
                                    fontSize: '12px',
                                    color: 'var(--zy-text-secondary)',
                                }}
                            >
                                {m.caption}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Case Quadrants */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {sectors.map((sec) => (
                        <div
                            key={sec.sector}
                            style={{
                                padding: '36px',
                                borderRadius: '16px',
                                border: '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'baseline',
                                    gap: '8px',
                                    borderBottom:
                                        '1px solid var(--zy-border-subtle)',
                                    paddingBottom: '14px',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                        color: 'var(--zy-text-muted)',
                                    }}
                                >
                                    {sec.sector}
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '20px',
                                    fontWeight: 800,
                                    color: 'var(--zy-text-primary)',
                                }}
                            >
                                {sec.anchorClient}
                            </h3>

                            <div>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-muted)',
                                        display: 'block',
                                        marginBottom: '4px',
                                    }}
                                >
                                    THE BOTTLENECK:
                                </span>
                                <p
                                    style={{
                                        fontSize: '13px',
                                        lineHeight: 1.6,
                                        color: 'var(--zy-text-secondary)',
                                        margin: 0,
                                    }}
                                >
                                    {sec.challenge}
                                </p>
                            </div>

                            <div>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-muted)',
                                        display: 'block',
                                        marginBottom: '4px',
                                    }}
                                >
                                    THE ARCHITECTURE:
                                </span>
                                <p
                                    style={{
                                        fontSize: '13px',
                                        lineHeight: 1.6,
                                        color: 'var(--zy-text-secondary)',
                                        margin: 0,
                                    }}
                                >
                                    {sec.solution}
                                </p>
                            </div>

                            <div
                                style={{
                                    marginTop: 'auto',
                                    padding: '16px 20px',
                                    borderRadius: '10px',
                                    background: isLight
                                        ? 'rgba(0,0,0,0.025)'
                                        : 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--zy-border-subtle)',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '10px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        letterSpacing: '0.08em',
                                        display: 'block',
                                        marginBottom: '4px',
                                    }}
                                >
                                    VERIFIED PRODUCTION IMPACT &rarr;
                                </span>
                                <div
                                    style={{
                                        fontSize: '12px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {sec.impact}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
