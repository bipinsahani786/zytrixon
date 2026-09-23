import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function AboutHeroEditorial() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            style={{
                position: 'relative',
                paddingTop: 'clamp(28px, 4vw, 52px)',
                paddingBottom: '70px',
                paddingLeft: 'var(--zy-section-pad-x, 24px)',
                paddingRight: 'var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                overflow: 'hidden',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            {/* Subtle Architectural Grid Lines */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: isLight
                        ? 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)'
                        : 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    pointerEvents: 'none',
                    opacity: 0.8,
                }}
            />

            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                {/* Primary Manifesto Typography */}
                <h1
                    style={{
                        fontFamily:
                            'var(--font-heading, "Space Grotesk", sans-serif)',
                        fontSize: 'clamp(36px, 6.5vw, 84px)',
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: '-0.035em',
                        color: 'var(--zy-text-primary)',
                        maxWidth: '1150px',
                        marginBottom: '32px',
                    }}
                >
                    We Engineer Digital Dominance for Enterprises Refusing
                    Second Place.
                </h1>

                {/* Editorial Subtitle & Thesis Statement */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '32px',
                    }}
                >
                    <p
                        style={{
                            fontSize: 'clamp(16px, 1.4vw, 20px)',
                            lineHeight: 1.6,
                            color: 'var(--zy-text-secondary)',
                            margin: 0,
                            maxWidth: '560px',
                        }}
                    >
                        Founded in Bihar with a relentless engineering
                        conviction, Zytrixon Tech designs and scales
                        mission-critical cloud architectures, high-concurrency
                        commerce engines, and zero-trust platforms.
                    </p>
                    <p
                        style={{
                            fontSize: 'clamp(14px, 1.1vw, 16px)',
                            lineHeight: 1.65,
                            color: 'var(--zy-text-muted)',
                            margin: 0,
                            maxWidth: '520px',
                        }}
                    >
                        We do not sell junior developer hours or generic
                        templates. We build bespoke digital infrastructure
                        designed to outlive market trends, sustain viral traffic
                        surges, and compound enterprise valuation.
                    </p>
                </div>
            </div>
        </section>
    );
}
