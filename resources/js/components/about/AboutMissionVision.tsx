import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutMissionVision() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [persona, setPersona] = useState<'founders' | 'ctos'>('founders');

    return (
        <section
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Header */}
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '64px',
                        maxWidth: '780px',
                        margin: '0 auto 64px',
                    }}
                >
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
                        Our Mission & 2030 Vision
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--zy-text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        We operate with absolute strategic clarity. Our purpose
                        is not just to write software, but to arm modern
                        businesses with impenetrable technical advantages.
                    </p>
                </div>

                {/* Dual Monolithic Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '28px',
                        marginBottom: '48px',
                    }}
                >
                    {/* The Mission */}
                    <div
                        style={{
                            background: isLight
                                ? '#ffffff'
                                : 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            borderRadius: '24px',
                            padding: 'clamp(28px, 4vw, 44px)',
                            position: 'relative',
                            boxShadow: isLight
                                ? '0 10px 30px rgba(0,0,0,0.03)'
                                : 'none',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '11px',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--zy-text-secondary)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                background: isLight
                                    ? 'rgba(0,0,0,0.05)'
                                    : 'rgba(255,255,255,0.06)',
                                marginBottom: '24px',
                            }}
                        >
                            <span>CORE MANDATE</span>
                        </div>

                        <h3
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: 'clamp(22px, 2.2vw, 28px)',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '16px',
                                lineHeight: 1.25,
                            }}
                        >
                            The Mission: Eliminating Technical Debt Before It
                            Begins
                        </h3>

                        <p
                            style={{
                                fontSize: '15px',
                                lineHeight: 1.7,
                                color: 'var(--zy-text-secondary)',
                                margin: 0,
                            }}
                        >
                            To liberate ambitious founders and global
                            enterprises from fragile spaghetti code, unlicensed
                            software shortcuts, and opaque billing. We architect
                            scalable, modular systems that run effortlessly
                            under extreme concurrency, delivering measurable
                            business ROI from sprint one.
                        </p>
                    </div>

                    {/* The Vision */}
                    <div
                        style={{
                            background: isLight
                                ? '#ffffff'
                                : 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            borderRadius: '24px',
                            padding: 'clamp(28px, 4vw, 44px)',
                            position: 'relative',
                            boxShadow: isLight
                                ? '0 10px 30px rgba(0,0,0,0.03)'
                                : 'none',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '11px',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--zy-text-secondary)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                background: isLight
                                    ? 'rgba(0,0,0,0.05)'
                                    : 'rgba(255,255,255,0.06)',
                                marginBottom: '24px',
                            }}
                        >
                            <span>HORIZON 2030</span>
                        </div>

                        <h3
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: 'clamp(22px, 2.2vw, 28px)',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '16px',
                                lineHeight: 1.25,
                            }}
                        >
                            The 2030 Vision: The Global Benchmark for
                            Mission-Critical Tech
                        </h3>

                        <p
                            style={{
                                fontSize: '15px',
                                lineHeight: 1.7,
                                color: 'var(--zy-text-secondary)',
                                margin: 0,
                            }}
                        >
                            To stand as the world’s most trusted technical
                            partner for complex domain systems — from
                            decentralized logistics to high-throughput
                            diagnostic networks. We are proving that elite,
                            tier-1 global engineering can originate from any
                            corner of the globe when backed by uncompromising
                            rigor.
                        </p>
                    </div>
                </div>

                {/* Interactive Stakeholder Commitment Selector */}
                <div
                    style={{
                        background: isLight ? '#ffffff' : 'var(--zy-surface-1)',
                        border: '1px solid var(--zy-border-subtle)',
                        borderRadius: '20px',
                        padding: 'clamp(24px, 3.5vw, 36px)',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '16px',
                            marginBottom: '24px',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'var(--zy-text-muted)',
                            }}
                        >
                            Our Unconditional Commitments:
                        </span>

                        <div
                            style={{
                                display: 'inline-flex',
                                padding: '4px',
                                borderRadius: '30px',
                                background: isLight
                                    ? 'var(--zy-surface-2)'
                                    : 'var(--zy-surface-2)',
                                border: '1px solid var(--zy-border-subtle)',
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    setPersona('founders');
                                }}
                                style={{
                                    padding: '6px 18px',
                                    borderRadius: '24px',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    border: 'none',
                                    cursor: 'pointer',
                                    background:
                                        persona === 'founders'
                                            ? 'var(--zy-text-primary)'
                                            : 'transparent',
                                    color:
                                        persona === 'founders'
                                            ? isLight
                                                ? '#ffffff'
                                                : '#000000'
                                            : 'var(--zy-text-secondary)',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                To Growth Founders
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setPersona('ctos');
                                }}
                                style={{
                                    padding: '6px 18px',
                                    borderRadius: '24px',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    border: 'none',
                                    cursor: 'pointer',
                                    background:
                                        persona === 'ctos'
                                            ? 'var(--zy-text-primary)'
                                            : 'transparent',
                                    color:
                                        persona === 'ctos'
                                            ? isLight
                                                ? '#ffffff'
                                                : '#000000'
                                            : 'var(--zy-text-secondary)',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                To Enterprise CTOs
                            </button>
                        </div>
                    </div>

                    {persona === 'founders' ? (
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '20px',
                            }}
                        >
                            <div
                                style={{
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: isLight
                                        ? 'var(--zy-surface-1)'
                                        : 'var(--zy-surface-2)',
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    ⚡ Sub-Second Speed to Market
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Launch production-ready MVPs that handle 50x
                                    your initial forecast without rewriting code
                                    later.
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: isLight
                                        ? 'var(--zy-surface-1)'
                                        : 'var(--zy-surface-2)',
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    🔒 100% IP & Repo Ownership
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Every line of code, Docker file, and
                                    infrastructure script belongs entirely to
                                    your company from day one.
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: isLight
                                        ? 'var(--zy-surface-1)'
                                        : 'var(--zy-surface-2)',
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    💎 Investor-Grade Architecture
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Pass rigorous technical due diligence during
                                    Series A/B funding rounds with immaculate
                                    documentation.
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '20px',
                            }}
                        >
                            <div
                                style={{
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: isLight
                                        ? 'var(--zy-surface-1)'
                                        : 'var(--zy-surface-2)',
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    🛡️ Zero-Trust Security Baseline
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    OWASP Top-10 mitigation, sanitized inputs,
                                    encrypted disk persistence, and automated CI
                                    security gates.
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: isLight
                                        ? 'var(--zy-surface-1)'
                                        : 'var(--zy-surface-2)',
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    📊 Telemetry & Observability Ready
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Built-in OpenTelemetry, Redis queue health
                                    metrics, structured JSON logs, and sub-100ms
                                    API endpoints.
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: isLight
                                        ? 'var(--zy-surface-1)'
                                        : 'var(--zy-surface-2)',
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    🔄 Seamless Legacy Interoperability
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Clean API bridges connecting modern headless
                                    clients with legacy SQL databases, ERPs, and
                                    hardware analyzers.
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
