import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutPrinciplesManifesto() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const axioms = [
        {
            num: '01',
            title: 'Zero Tolerance for Sluggish UI',
            axiom: 'Speed is not a vanity metric; it is the fundamental foundation of user trust and commercial conversion.',
            detail: 'Every interactive view we engineer is profiled for 60 frames per second rendering and sub-100ms API response latency. If a screen stutters on a 4G connection, it does not pass our staging QA review.',
        },
        {
            num: '02',
            title: 'Architecture Over Quick Hacks',
            axiom: 'Convenient shortcuts today become catastrophic enterprise balance sheet liabilities tomorrow.',
            detail: 'We enforce domain-driven modular boundaries, strict TypeScript type safety, and atomic transactions. We build systems designed to be handed over cleanly to your in-house engineering team with zero mystery.',
        },
        {
            num: '03',
            title: 'Radical Engineering Transparency',
            axiom: 'Trust is built through visible code commits, reproducible benchmarks, and honest technical auditing.',
            detail: 'No smoke and mirrors. Our clients receive direct repository access, automated continuous deployment previews, and unfiltered weekly sprint progress telemetry.',
        },
        {
            num: '04',
            title: 'Aesthetics as an Engineering Requirement',
            axiom: 'Design is not superficial decoration; it is functional clarity, cognitive ease, and brand authority.',
            detail: 'A system can be technically sound, but if it looks clunky, users reject it. We apply bespoke typography, rigorous whitespace hierarchy, and subtle micro-interactions to create memorable enterprise products.',
        },
        {
            num: '05',
            title: 'Privacy & Security by Default',
            axiom: 'Data sovereignty and client confidentiality are sacred; they can never be an afterthought.',
            detail: 'From 256-bit AES encryption at rest to strict Content Security Policies and zero-knowledge evidence vaults, we treat your business intelligence with institutional defensive paranoia.',
        },
    ];

    return (
        <section
            id="manifesto"
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: isLight ? 'var(--zy-surface-1)' : 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '60px', maxWidth: '780px' }}>
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
                        Five Non-Negotiable Axioms
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--zy-text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        These are not generic HR values framed on an office
                        wall. They are the rigorous technical rules that govern
                        every git commit, schema migration, and design review at
                        Zytrixon.
                    </p>
                </div>

                {/* Vertical Axiom List with Hover Depth */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    {axioms.map((item, idx) => {
                        const isHovered = hoveredIdx === idx;
                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => {
                                    setHoveredIdx(idx);
                                }}
                                onMouseLeave={() => {
                                    setHoveredIdx(null);
                                }}
                                style={{
                                    background: isLight
                                        ? '#ffffff'
                                        : 'var(--zy-surface-1)',
                                    border: isHovered
                                        ? '1px solid var(--zy-border-hover)'
                                        : '1px solid var(--zy-border-subtle)',
                                    borderRadius: '20px',
                                    padding: 'clamp(24px, 3.5vw, 36px)',
                                    transition: 'all 0.3s ease',
                                    transform: isHovered
                                        ? 'translateY(-2px)'
                                        : 'translateY(0)',
                                    boxShadow:
                                        isHovered && isLight
                                            ? '0 12px 36px rgba(0,0,0,0.06)'
                                            : isLight
                                              ? '0 4px 16px rgba(0,0,0,0.02)'
                                              : 'none',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns:
                                            'repeat(auto-fit, minmax(280px, 1fr))',
                                        gap: '24px',
                                        alignItems: 'baseline',
                                    }}
                                >
                                    {/* Number & Title */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            gap: '20px',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                fontWeight: 800,
                                                fontFamily: 'monospace',
                                                color: 'var(--zy-text-muted)',
                                            }}
                                        >
                                            {item.num}
                                        </span>
                                        <div>
                                            <h3
                                                style={{
                                                    fontFamily:
                                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                                    fontSize:
                                                        'clamp(20px, 2vw, 24px)',
                                                    fontWeight: 700,
                                                    color: 'var(--zy-text-primary)',
                                                    margin: '0 0 8px 0',
                                                    lineHeight: 1.25,
                                                }}
                                            >
                                                {item.title}
                                            </h3>
                                            <div
                                                style={{
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    color: 'var(--zy-text-primary)',
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {item.axiom}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed Philosophy */}
                                    <div
                                        style={{
                                            fontSize: '14px',
                                            lineHeight: 1.7,
                                            color: 'var(--zy-text-secondary)',
                                        }}
                                    >
                                        {item.detail}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
