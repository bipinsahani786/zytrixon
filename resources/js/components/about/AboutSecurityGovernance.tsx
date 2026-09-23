import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutSecurityGovernance() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const securityPillars = [
        {
            title: 'AES-256 GCM Encryption',
            standard: 'CRYPTOGRAPHIC STORAGE',
            desc: 'Sensitive client data, forensic evidence logs, and patient records are encrypted at rest using military-grade AES-256 GCM with rotating hardware master keys.',
        },
        {
            title: 'OWASP Top-10 Defense Architecture',
            standard: 'APPLICATION SHIELDING',
            desc: 'Strict server-side validation, parameterized queries, CSRF token validation, Content-Security-Policy headers, and rate-limiting against brute force attacks.',
        },
        {
            title: 'Zero-Knowledge Access Vaults',
            standard: 'CONFIDENTIALITY',
            desc: 'Implemented for investigation agencies and legal portals. Confidential case dossiers are encrypted before hitting disk so even DB admins cannot inspect plaintext contents.',
        },
        {
            title: 'HIPAA & HL7 Compliance Ready',
            standard: 'HEALTHTECH PRIVACY',
            desc: 'Built into our pathology LIS engine. Automated audit trails, role-based pathologist digital signatures, and tamper-proof QR watermarks on all exported health documents.',
        },
    ];

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
                        Zero-Trust Security & Data Sovereignty
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--zy-text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        We engineer software with the baseline assumption that
                        perimeter networks are hostile. Your institutional data
                        is protected by continuous verification, least-privilege
                        access, and cryptographic defense.
                    </p>
                </div>

                {/* 4 Pillars Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {securityPillars.map((p, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                borderRadius: '20px',
                                padding: '28px 24px',
                                transition: 'all 0.25s ease',
                                boxShadow: isLight
                                    ? '0 4px 18px rgba(0,0,0,0.03)'
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
                            <span
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: 'var(--zy-text-muted)',
                                    display: 'block',
                                    marginBottom: '12px',
                                }}
                            >
                                {p.standard}
                            </span>

                            <h3
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    marginBottom: '12px',
                                    lineHeight: 1.3,
                                }}
                            >
                                {p.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: '13px',
                                    lineHeight: 1.65,
                                    color: 'var(--zy-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
