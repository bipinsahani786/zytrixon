import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutLeadershipDossier() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const leaders = [
        {
            name: 'Bipin Sahani',
            role: 'Founder & Chief Technology Officer',
            domain: 'Enterprise Cloud Architecture & Distributed Systems',
            image: '/assets/team/bipin-sahani.png',
            quote: 'Great engineering is invisible. When a system can process thousands of orders per minute during a festival rush without dropping a single packet, that is the craft.',
            credentials: [
                'Full-stack distributed systems specialist',
                'Architect of LIS 2.0 clinical diagnostic platform',
                'Pioneer of zero-brokerage land acquisition systems',
            ],
        },
        {
            name: 'Saurav Shandilya',
            role: 'Co-founder & Chief Operating Officer',
            domain: 'Strategic Expansion & Operational Governance',
            image: '/assets/team/saurav.png',
            quote: 'We built Zytrixon to bridge elite engineering with real commercial accountability. Every product must deliver measurable margin growth for our partners.',
            credentials: [
                'Global client relationships across India & MENA',
                'Enterprise SLA governance and vendor compliance',
                'Scalable delivery pipeline strategist',
            ],
        },
    ];

    return (
        <section
            id="leadership"
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
                        The Architects at the Helm
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--zy-text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        Hands-on engineers and operators who remain directly
                        embedded in code reviews, client whiteboards, and
                        architecture reviews.
                    </p>
                </div>

                {/* 2-Column Leadership Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 460px))',
                        justifyContent: 'center',
                        gap: '36px',
                        maxWidth: '1000px',
                        margin: '0 auto',
                    }}
                >
                    {leaders.map((leader, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease',
                                boxShadow: isLight
                                    ? '0 10px 30px rgba(0,0,0,0.03)'
                                    : 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor =
                                    'var(--zy-border-hover)';
                                e.currentTarget.style.transform =
                                    'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor =
                                    'var(--zy-border-subtle)';
                                e.currentTarget.style.transform =
                                    'translateY(0)';
                            }}
                        >
                            {/* Leader Photo Stage - Full Image Display Without Hiding */}
                            <div
                                style={{
                                    width: '100%',
                                    aspectRatio: '4 / 5',
                                    background: isLight ? '#f1f5f9' : '#08080a',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top center',
                                        filter: 'none',
                                        display: 'block',
                                        transition:
                                            'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                    }}
                                />
                            </div>

                            {/* Bio & Details Below Photo */}
                            <div
                                style={{
                                    padding: '28px',
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: '16px',
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            color: 'var(--zy-text-muted)',
                                            fontFamily: 'monospace',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        {leader.domain}
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily:
                                                'var(--font-heading, "Space Grotesk", sans-serif)',
                                            fontSize: '26px',
                                            fontWeight: 800,
                                            color: 'var(--zy-text-primary)',
                                            margin: '0 0 6px 0',
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {leader.name}
                                    </h3>
                                    <div
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            color: 'var(--zy-text-secondary)',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        {leader.role}
                                    </div>

                                    {/* Quote */}
                                    <blockquote
                                        style={{
                                            fontSize: '13px',
                                            fontStyle: 'italic',
                                            lineHeight: 1.6,
                                            color: 'var(--zy-text-primary)',
                                            paddingLeft: '14px',
                                            borderLeft:
                                                '2px solid var(--zy-border-hover)',
                                            margin: '0 0 20px 0',
                                        }}
                                    >
                                        “{leader.quote}”
                                    </blockquote>
                                </div>

                                {/* Key Credentials */}
                                <div
                                    style={{
                                        borderTop:
                                            '1px solid var(--zy-border-subtle)',
                                        paddingTop: '16px',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            color: 'var(--zy-text-muted)',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        Focus Areas:
                                    </div>
                                    <ul
                                        style={{
                                            margin: 0,
                                            padding: '0 0 0 16px',
                                            fontSize: '12px',
                                            color: 'var(--zy-text-secondary)',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {leader.credentials.map(
                                            (cred, cIdx) => (
                                                <li key={cIdx}>{cred}</li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
