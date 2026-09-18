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
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                background: '#09090c',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span
                        style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: project.accentColor,
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
                            marginTop: '10px',
                            color: '#ffffff',
                        }}
                    >
                        Challenge & Custom Solution
                    </h2>
                    <p
                        style={{
                            color: '#888888',
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
                            background: 'rgba(255, 75, 75, 0.03)',
                            border: '1px solid rgba(255, 75, 75, 0.2)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '12px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#ff6b6b',
                                marginBottom: '16px',
                            }}
                        >
                            <span>⚠️</span> The Client's Bottlenecks
                        </div>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '16px',
                            }}
                        >
                            Legacy Infrastructure Limitations
                        </h3>
                        <p
                            style={{
                                fontSize: '15px',
                                color: '#999999',
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
                                            color: '#ff6b6b',
                                            background:
                                                'rgba(255, 75, 75, 0.12)',
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
                                            color: '#cccccc',
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
                            background: `linear-gradient(180deg, ${project.accentColor}08 0%, rgba(10,10,12,0.8) 100%)`,
                            border: `1px solid ${project.accentColor}35`,
                            borderRadius: '24px',
                            padding: '40px 32px',
                            boxShadow: `0 10px 40px ${project.accentColor}10`,
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '12px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: project.accentColor,
                                marginBottom: '16px',
                            }}
                        >
                            <span>✨</span> The Zytrixon Solution
                        </div>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '16px',
                            }}
                        >
                            Modern Cloud Architecture
                        </h3>
                        <p
                            style={{
                                fontSize: '15px',
                                color: '#999999',
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
                                            color: project.accentColor,
                                            background: `${project.accentColor}20`,
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
                                            color: '#ffffff',
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
