import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectChallengeSolutionProps {
    project: ProjectItem;
}

export default function ProjectChallengeSolution({
    project,
}: ProjectChallengeSolutionProps) {
    return (
        <section
            id="story"
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span
                        style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--zy-text-secondary)',
                            background: 'var(--zy-surface-2)',
                            padding: '4px 14px',
                            borderRadius: '20px',
                            border: '1px solid var(--zy-border-subtle)',
                        }}
                    >
                        Engineering Story
                    </span>
                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(28px, 4vw, 42px)',
                            fontWeight: 800,
                            marginTop: '16px',
                            color: 'var(--zy-text-primary)',
                        }}
                    >
                        Challenge & Custom Solution
                    </h2>
                    <p
                        style={{
                            color: 'var(--zy-text-secondary)',
                            fontSize: '16px',
                            maxWidth: '680px',
                            margin: '12px auto 0',
                        }}
                    >
                        How Zytrixon replaced fragile legacy monoliths with
                        scalable, event-driven cloud infrastructure.
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '36px',
                    }}
                >
                    {/* The Challenge Card */}
                    <div
                        style={{
                            background: 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            borderRadius: '24px',
                            padding: '40px 32px',
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
                                marginBottom: '16px',
                            }}
                        >
                            <span>⚠️</span> The Client's Bottlenecks
                        </div>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '16px',
                            }}
                        >
                            Legacy Infrastructure Limitations
                        </h3>
                        <p
                            style={{
                                fontSize: '15px',
                                color: 'var(--zy-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: '24px',
                            }}
                        >
                            {project.challenge}
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px',
                            }}
                        >
                            {project.challengePoints.map((pt, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                    }}
                                >
                                    <span
                                        style={{
                                            color: 'var(--zy-text-secondary)',
                                            background: 'var(--zy-surface-2)',
                                            border: '1px solid var(--zy-border-subtle)',
                                            width: '22px',
                                            height: '22px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '11px',
                                            fontWeight: 800,
                                            flexShrink: 0,
                                            marginTop: '2px',
                                        }}
                                    >
                                        ✕
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '14px',
                                            color: 'var(--zy-text-secondary)',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {pt}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The Solution Card */}
                    <div
                        style={{
                            background: 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
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
                                color: 'var(--zy-text-primary)',
                                marginBottom: '16px',
                            }}
                        >
                            <span>✨</span> The Zytrixon Solution
                        </div>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '16px',
                            }}
                        >
                            Modern Cloud Architecture
                        </h3>
                        <p
                            style={{
                                fontSize: '15px',
                                color: 'var(--zy-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: '24px',
                            }}
                        >
                            {project.solution}
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px',
                            }}
                        >
                            {project.solutionPoints.map((pt, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                    }}
                                >
                                    <span
                                        style={{
                                            color: 'var(--zy-text-primary)',
                                            background: 'var(--zy-surface-2)',
                                            border: '1px solid var(--zy-border-subtle)',
                                            width: '22px',
                                            height: '22px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '11px',
                                            fontWeight: 800,
                                            flexShrink: 0,
                                            marginTop: '2px',
                                        }}
                                    >
                                        ✓
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '14px',
                                            color: 'var(--zy-text-primary)',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {pt}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
