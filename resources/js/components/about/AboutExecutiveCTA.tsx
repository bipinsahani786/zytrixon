import React from 'react';
import { Link } from '@inertiajs/react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutExecutiveCTA() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            id="executive-cta"
            style={{
                padding: '120px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                transition: 'background 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Monolithic Manifesto Box */}
                <div
                    style={{
                        padding: 'clamp(36px, 6vw, 72px)',
                        borderRadius: '24px',
                        border: isLight
                            ? '2px solid #111111'
                            : '2px solid #ffffff',
                        background: isLight ? '#f9f9fb' : 'var(--zy-surface-1)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Top Telemetry */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '12px',
                            marginBottom: '36px',
                            paddingBottom: '20px',
                            borderBottom: '1px solid var(--zy-border-subtle)',
                        }}
                    >
                        <div
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '11px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                            }}
                        >
                            STATUS: ACCEPTING SELECT Q2/Q3 ENTERPRISE
                            COMMISSIONS
                        </div>
                    </div>

                    {/* Headline */}
                    <div style={{ maxWidth: '900px', marginBottom: '32px' }}>
                        <h2
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: 'clamp(32px, 5vw, 64px)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                color: 'var(--zy-text-primary)',
                                marginBottom: '24px',
                            }}
                        >
                            Ready to replace software compromises with
                            structural dominance?
                        </h2>
                        <p
                            style={{
                                fontSize: 'clamp(16px, 1.8vw, 19px)',
                                lineHeight: 1.7,
                                color: 'var(--zy-text-secondary)',
                                margin: 0,
                            }}
                        >
                            Whether you need to engineer a resilient 0-to-1
                            platform or rescue a sluggish legacy codebase, you
                            will speak directly with our senior systems
                            architects—not a commission-driven salesperson.
                        </p>
                    </div>

                    {/* Action Channels Grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '20px',
                            marginTop: '40px',
                            marginBottom: '48px',
                        }}
                    >
                        {/* Channel 1: Consultation */}
                        <div
                            style={{
                                padding: '28px',
                                borderRadius: '14px',
                                border: '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-2)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: 'var(--zy-text-muted)',
                                }}
                            >
                                DIALOGUE 01 // ARCHITECTURAL AUDIT
                            </div>
                            <h3
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    margin: 0,
                                }}
                            >
                                Schedule Systems Audit
                            </h3>
                            <p
                                style={{
                                    fontSize: '13px',
                                    lineHeight: 1.6,
                                    color: 'var(--zy-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                45-minute confidential roadmap and codebase
                                assessment with our founding engineering leads.
                            </p>
                            <Link
                                href="/contact"
                                style={{
                                    marginTop: 'auto',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    background: isLight ? '#111111' : '#ffffff',
                                    color: isLight ? '#ffffff' : '#000000',
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    transition: 'opacity 0.2s ease',
                                }}
                            >
                                BOOK ARCHITECTURAL SESSION &rarr;
                            </Link>
                        </div>

                        {/* Channel 2: WhatsApp Hotline */}
                        <div
                            style={{
                                padding: '28px',
                                borderRadius: '14px',
                                border: '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-2)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: 'var(--zy-text-muted)',
                                }}
                            >
                                DIALOGUE 02 // REAL-TIME DISPATCH
                            </div>
                            <h3
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    margin: 0,
                                }}
                            >
                                Direct WhatsApp Hotline
                            </h3>
                            <p
                                style={{
                                    fontSize: '13px',
                                    lineHeight: 1.6,
                                    color: 'var(--zy-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                Instant technical triage for urgent production
                                crises, security escalations, or rapid launches.
                            </p>
                            <a
                                href="https://wa.me/917992284950?text=Hi%20Zytrixon%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20project"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    marginTop: 'auto',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--zy-border-subtle)',
                                    background: isLight
                                        ? '#ffffff'
                                        : 'var(--zy-surface-1)',
                                    color: 'var(--zy-text-primary)',
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    transition: 'background 0.2s ease',
                                }}
                            >
                                CONNECT ON WHATSAPP &rarr;
                            </a>
                        </div>

                        {/* Channel 3: HQ Visitation */}
                        <div
                            style={{
                                padding: '28px',
                                borderRadius: '14px',
                                border: '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-2)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: 'var(--zy-text-muted)',
                                }}
                            >
                                DIALOGUE 03 // PHYSICAL VISITATION
                            </div>
                            <h3
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    margin: 0,
                                }}
                            >
                                Visit Our Engineering Hub
                            </h3>
                            <p
                                style={{
                                    fontSize: '13px',
                                    lineHeight: 1.6,
                                    color: 'var(--zy-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                Experience our engineering culture in-person at
                                Patna HQ or request an executive briefing in
                                Delhi-NCR.
                            </p>
                            <a
                                href="mailto:contact@zytrixon.com"
                                style={{
                                    marginTop: 'auto',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--zy-border-subtle)',
                                    background: isLight
                                        ? '#ffffff'
                                        : 'var(--zy-surface-1)',
                                    color: 'var(--zy-text-primary)',
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    transition: 'background 0.2s ease',
                                }}
                            >
                                DISPATCH EMAIL TRANSMISSION &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Bottom Architectural Signature */}
                    <div
                        style={{
                            borderTop: '1px solid var(--zy-border-subtle)',
                            paddingTop: '24px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '16px',
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '15px',
                                    fontWeight: 800,
                                    letterSpacing: '0.04em',
                                    color: 'var(--zy-text-primary)',
                                }}
                            >
                                ZYTRIXON TECHNOLOGIES
                            </div>
                            <div
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '11px',
                                    color: 'var(--zy-text-muted)',
                                    marginTop: '2px',
                                }}
                            >
                                PATNA // DELHI-NCR // PLANETARY SCALE
                                INFRASTRUCTURE
                            </div>
                        </div>

                        <div
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '11px',
                                color: 'var(--zy-text-secondary)',
                            }}
                        >
                            COORDINATES: 25.5941° N, 85.1376° E &bull; EST. 2026
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
