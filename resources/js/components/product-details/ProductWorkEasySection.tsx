import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProductWorkEasySectionProps {
    project: ProjectItem;
}

export default function ProductWorkEasySection({
    project,
}: ProductWorkEasySectionProps) {
    const accentColor = project.accentColor || '#0EA5E9';
    const secondaryColor = project.secondaryColor || '#38BDF8';
    const productName = project.shortTitle || project.title;

    // Helper to separate bold title from description if formatted as "Title: Description"
    const splitPoint = (pt: string) => {
        const colonIndex = pt.indexOf(':');
        if (colonIndex !== -1) {
            return {
                title: pt.slice(0, colonIndex).trim(),
                desc: pt.slice(colonIndex + 1).trim(),
            };
        }
        return {
            title: '',
            desc: pt,
        };
    };

    return (
        <section
            id="work-easy"
            style={{
                padding: '96px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle background ambient glows */}
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '350px',
                    background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    maxWidth: '1240px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: accentColor,
                            background: 'var(--zy-surface-2)',
                            padding: '6px 18px',
                            borderRadius: '30px',
                            border: `1px solid ${accentColor}33`,
                            boxShadow: `0 0 20px ${accentColor}15`,
                            marginBottom: '18px',
                        }}
                    >
                        <span>⚡</span>
                        <span>Operational Simplicity • Built For Speed</span>
                    </div>

                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(30px, 4.2vw, 46px)',
                            fontWeight: 800,
                            color: 'var(--zy-text-primary)',
                            lineHeight: 1.15,
                            letterSpacing: '-0.02em',
                            maxWidth: '850px',
                            margin: '0 auto',
                        }}
                    >
                        How <span style={{ color: accentColor }}>{productName}</span> Makes Your Work Easy
                    </h2>

                    <p
                        style={{
                            color: 'var(--zy-text-secondary)',
                            fontSize: 'clamp(15px, 1.8vw, 17px)',
                            maxWidth: '720px',
                            margin: '16px auto 0',
                            lineHeight: 1.65,
                        }}
                    >
                        Eliminate manual registers, confusing spreadsheets, and daily reconciliation friction. Experience a unified system where every operational task is fast, automated, and effortless.
                    </p>
                </div>

                {/* 2-Column Comparison Layout */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '32px',
                        alignItems: 'stretch',
                    }}
                >
                    {/* Left Column: The Daily Bottlenecks You Eliminate */}
                    <div
                        style={{
                            background: 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
                            transition: 'border-color 0.3s ease, transform 0.3s ease',
                            position: 'relative',
                        }}
                    >
                        {/* Bottleneck Badge */}
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '11px',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#EF4444',
                                background: 'rgba(239, 68, 68, 0.08)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                padding: '5px 14px',
                                borderRadius: '12px',
                                width: 'fit-content',
                                marginBottom: '18px',
                            }}
                        >
                            <span>⚠️</span>
                            <span>Everyday Bottlenecks</span>
                        </div>

                        <h3
                            style={{
                                fontSize: '22px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '12px',
                            }}
                        >
                            The Friction You Eliminate
                        </h3>

                        <p
                            style={{
                                fontSize: '14.5px',
                                color: 'var(--zy-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: '28px',
                            }}
                        >
                            {project.challenge}
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                marginTop: 'auto',
                            }}
                        >
                            {project.challengePoints.map((pt, i) => {
                                const { title, desc } = splitPoint(pt);
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '14px',
                                            background: 'var(--zy-surface-2)',
                                            border: '1px solid var(--zy-border-subtle)',
                                            borderRadius: '16px',
                                            padding: '16px',
                                            transition: 'border-color 0.2s ease, transform 0.2s ease',
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: '#EF4444',
                                                background: 'rgba(239, 68, 68, 0.1)',
                                                border: '1px solid rgba(239, 68, 68, 0.25)',
                                                width: '26px',
                                                height: '26px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '12px',
                                                fontWeight: 800,
                                                flexShrink: 0,
                                                marginTop: '1px',
                                            }}
                                        >
                                            ✕
                                        </span>
                                        <div style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                            {title ? (
                                                <strong
                                                    style={{
                                                        color: 'var(--zy-text-primary)',
                                                        fontWeight: 700,
                                                        display: 'inline',
                                                        marginRight: '6px',
                                                    }}
                                                >
                                                    {title}:
                                                </strong>
                                            ) : null}
                                            <span style={{ color: 'var(--zy-text-secondary)' }}>
                                                {desc}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: How This Product Makes Work Easy */}
                    <div
                        style={{
                            background: 'var(--zy-surface-1)',
                            border: `1.5px solid ${accentColor}55`,
                            borderRadius: '24px',
                            padding: '40px 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: `0 12px 40px ${accentColor}18`,
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Top Accent Gradient Border Bar */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: `linear-gradient(90deg, ${accentColor}, ${secondaryColor})`,
                            }}
                        />

                        {/* Solution Badge */}
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '11px',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: accentColor,
                                background: `${accentColor}15`,
                                border: `1px solid ${accentColor}33`,
                                padding: '5px 14px',
                                borderRadius: '12px',
                                width: 'fit-content',
                                marginBottom: '18px',
                            }}
                        >
                            <span>✨</span>
                            <span>Automated Simplicity</span>
                        </div>

                        <h3
                            style={{
                                fontSize: '22px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '12px',
                            }}
                        >
                            How {productName} Makes Daily Work Easy
                        </h3>

                        <p
                            style={{
                                fontSize: '14.5px',
                                color: 'var(--zy-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: '28px',
                            }}
                        >
                            {project.solution}
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                marginTop: 'auto',
                            }}
                        >
                            {project.solutionPoints.map((pt, i) => {
                                const { title, desc } = splitPoint(pt);
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '14px',
                                            background: 'var(--zy-surface-2)',
                                            border: `1px solid ${accentColor}25`,
                                            borderRadius: '16px',
                                            padding: '16px',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                                            transition: 'border-color 0.2s ease, transform 0.2s ease',
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: '#10B981',
                                                background: 'rgba(16, 185, 129, 0.12)',
                                                border: '1px solid rgba(16, 185, 129, 0.3)',
                                                width: '26px',
                                                height: '26px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '13px',
                                                fontWeight: 800,
                                                flexShrink: 0,
                                                marginTop: '1px',
                                            }}
                                        >
                                            ✓
                                        </span>
                                        <div style={{ fontSize: '14px', lineHeight: 1.6 }}>
                                            {title ? (
                                                <strong
                                                    style={{
                                                        color: 'var(--zy-text-primary)',
                                                        fontWeight: 700,
                                                        display: 'inline',
                                                        marginRight: '6px',
                                                    }}
                                                >
                                                    {title}:
                                                </strong>
                                            ) : null}
                                            <span style={{ color: 'var(--zy-text-secondary)' }}>
                                                {desc}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Productivity Highlights Strip */}
                <div
                    style={{
                        marginTop: '48px',
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {[
                        {
                            icon: '⚡',
                            title: '3-Second Counter Operations',
                            desc: 'Instant barcode/IMEI lookup and one-tap checkout with dynamic UPI QR.',
                        },
                        {
                            icon: '📒',
                            title: 'Zero Balance Disputes',
                            desc: 'Running double-entry ledgers for suppliers and customer credit with zero drift.',
                        },
                        {
                            icon: '⏱️',
                            title: '3+ Hours Saved Everyday',
                            desc: 'Automate daily register reconciliation, stock audits, and staff payroll.',
                        },
                        {
                            icon: '☁️',
                            title: 'Real-Time Cloud Telemetry',
                            desc: 'Access sales, profit metrics, and counter audits securely from anywhere.',
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                borderRadius: '18px',
                                padding: '20px 22px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '14px',
                                transition: 'all 0.25s ease',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '22px',
                                    background: 'var(--zy-surface-2)',
                                    borderRadius: '12px',
                                    width: '42px',
                                    height: '42px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                {item.icon}
                            </span>
                            <div>
                                <h4
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '4px',
                                    }}
                                >
                                    {item.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                        margin: 0,
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
