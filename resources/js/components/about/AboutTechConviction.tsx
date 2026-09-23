import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutTechConviction() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [activeStack, setActiveStack] = useState(0);

    const stackItems = [
        {
            category: 'Frontend Interface',
            tech: 'React 19 & TypeScript',
            alternative: 'Legacy SPA / Vanilla JS',
            conviction:
                'Strict compile-time type safety guarantees that component props and API payloads remain synchronized. React 19 Server Components drastically reduce client bundle footprint while boosting Core Web Vitals to 100/100.',
            benchmarks: [
                'Zero runtime type errors in production',
                'Sub-second first contentful paint',
                'Unified design system tokens',
            ],
        },
        {
            category: 'API Engine & Security',
            tech: 'Laravel 12 API Core',
            alternative: 'Ad-hoc Express / Python Flask',
            conviction:
                'Enterprise-grade transactional integrity, built-in rate limiting, cryptographically signed URLs, and native queue workers for background jobs. It delivers banking-grade reliability without maintaining 50 fragile micro-libraries.',
            benchmarks: [
                'Native queue prioritization',
                'Built-in CSRF, SQL injection & XSS shielding',
                'Sanctum & OAuth2 token security',
            ],
        },
        {
            category: 'Concurrency & Caching',
            tech: 'Redis Atomic Clusters',
            alternative: 'Direct SQL Transaction Locks',
            conviction:
                'Prevents database lock contention during 10,000+ RPS drops. In-memory atomic counters ensure items in a cart are never oversold, and customer checkout states are verified in sub-5ms latency.',
            benchmarks: [
                '< 2ms read/write memory response',
                'Atomic mutex locks prevent overselling',
                'Sub-second session invalidation',
            ],
        },
        {
            category: 'Relational Persistence',
            tech: 'PostgreSQL 16 & TimescaleDB',
            alternative: 'NoSQL Unstructured DBs',
            conviction:
                'ACID compliance guarantees financial ledgers, land mutations, and patient pathology records are immutable. TimescaleDB hypertable chunking allows querying tens of millions of sensor telemetry points instantaneously.',
            benchmarks: [
                'Strict ACID transaction guarantees',
                'Partitioned time-series tables',
                'Encrypted data-at-rest persistence',
            ],
        },
        {
            category: 'Global Edge Ingress',
            tech: 'Cloudflare Edge & AWS S3',
            alternative: 'Single-Origin Server Hosting',
            conviction:
                'Assets, media, and cached catalog responses are terminated at 300+ global edge locations. Even during massive DDoS surges or viral social spikes, your origin database remains shielded behind redundant edge caches.',
            benchmarks: [
                'Sub-50ms global TTFB delivery',
                'Automated DDoS & bot scraping mitigation',
                '99.999% cloud storage durability',
            ],
        },
    ];

    return (
        <section
            id="tech"
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
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
                        The Technology Conviction Index
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--zy-text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        We do not pick technologies based on Twitter hype or
                        junior developer trends. We choose battle-tested tools
                        with proven mathematical reliability and enterprise
                        longevity.
                    </p>
                </div>

                {/* Split Interactive Stack Explorer */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '32px',
                        alignItems: 'start',
                    }}
                >
                    {/* Left: Stack Pill Selection */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}
                    >
                        {stackItems.map((item, idx) => {
                            const isSelected = activeStack === idx;
                            return (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => {
                                        setActiveStack(idx);
                                    }}
                                    style={{
                                        textAlign: 'left',
                                        padding: '20px 24px',
                                        borderRadius: '16px',
                                        background: isSelected
                                            ? isLight
                                                ? '#ffffff'
                                                : 'var(--zy-surface-1)'
                                            : 'transparent',
                                        border: isSelected
                                            ? '1px solid var(--zy-border-hover)'
                                            : '1px solid var(--zy-border-subtle)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        boxShadow:
                                            isSelected && isLight
                                                ? '0 8px 24px rgba(0,0,0,0.04)'
                                                : 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            color: isSelected
                                                ? 'var(--zy-text-primary)'
                                                : 'var(--zy-text-muted)',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        {item.category}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '17px',
                                            fontWeight: 800,
                                            color: isSelected
                                                ? 'var(--zy-text-primary)'
                                                : 'var(--zy-text-secondary)',
                                        }}
                                    >
                                        {item.tech}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Technical Justification Card */}
                    <div
                        style={{
                            background: isLight
                                ? '#ffffff'
                                : 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            borderRadius: '24px',
                            padding: 'clamp(28px, 4vw, 44px)',
                            boxShadow: isLight
                                ? '0 12px 36px rgba(0,0,0,0.04)'
                                : 'none',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '12px',
                                marginBottom: '20px',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    color: 'var(--zy-text-muted)',
                                    fontFamily: 'monospace',
                                }}
                            >
                                LAYER // {stackItems[activeStack].category}
                            </span>
                            <span
                                style={{
                                    fontSize: '11px',
                                    padding: '4px 10px',
                                    borderRadius: '12px',
                                    background: isLight
                                        ? 'rgba(0,0,0,0.05)'
                                        : 'rgba(255,255,255,0.06)',
                                    color: 'var(--zy-text-secondary)',
                                }}
                            >
                                Chosen over:{' '}
                                {stackItems[activeStack].alternative}
                            </span>
                        </div>

                        <h3
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: 'clamp(24px, 2.5vw, 32px)',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '16px',
                                lineHeight: 1.2,
                            }}
                        >
                            {stackItems[activeStack].tech}
                        </h3>

                        <p
                            style={{
                                fontSize: '15px',
                                lineHeight: 1.75,
                                color: 'var(--zy-text-secondary)',
                                marginBottom: '28px',
                            }}
                        >
                            {stackItems[activeStack].conviction}
                        </p>

                        <div
                            style={{
                                borderTop: '1px solid var(--zy-border-subtle)',
                                paddingTop: '20px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: 'var(--zy-text-muted)',
                                    marginBottom: '12px',
                                }}
                            >
                                Architecture Metrics:
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                }}
                            >
                                {stackItems[activeStack].benchmarks.map(
                                    (bm, bIdx) => (
                                        <div
                                            key={bIdx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: 'var(--zy-text-primary)',
                                            }}
                                        >
                                            <span style={{ color: '#10b981' }}>
                                                ✓
                                            </span>
                                            <span>{bm}</span>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
