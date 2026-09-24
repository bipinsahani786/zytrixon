import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectComparisonMatrixProps {
    project: ProjectItem;
}

export default function ProjectComparisonMatrix({
    project,
}: ProjectComparisonMatrixProps) {
    return (
        <section
            id="transformation"
            style={{
                padding: '100px var(--zy-section-pad-x, 24px)',
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
                        Before vs After
                    </span>
                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            fontWeight: 800,
                            marginTop: '16px',
                            color: 'var(--zy-text-primary)',
                        }}
                    >
                        The Architectural Transformation
                    </h2>
                    <p
                        style={{
                            color: 'var(--zy-text-secondary)',
                            fontSize: '16px',
                            maxWidth: '640px',
                            margin: '12px auto 0',
                        }}
                    >
                        How we migrated the client from fragile legacy
                        bottlenecks to high-throughput, self-healing cloud
                        infrastructure.
                    </p>
                </div>

                {/* Comparative Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '30px',
                    }}
                >
                    {/* Before: Legacy Bottlenecks */}
                    <div
                        style={{
                            background: 'var(--zy-surface-1)',
                            border: '1px solid rgba(239, 68, 68, 0.25)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '18px',
                            }}
                        >
                            <span style={{ fontSize: '20px' }}>⚠️</span>
                            <div>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--zy-text-secondary)',
                                    }}
                                >
                                    Legacy System (Before)
                                </span>
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        margin: 0,
                                    }}
                                >
                                    Operational Friction Points
                                </h3>
                            </div>
                        </div>

                        <p
                            style={{
                                fontSize: '14px',
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
                                        padding: '12px 14px',
                                        borderRadius: '12px',
                                        background: 'var(--zy-surface-2)',
                                        border: '1px solid var(--zy-border-subtle)',
                                    }}
                                >
                                    <span
                                        style={{
                                            color: 'var(--zy-text-secondary)',
                                            fontWeight: 800,
                                            fontSize: '13px',
                                            marginTop: '1px',
                                        }}
                                    >
                                        ✕
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--zy-text-secondary)',
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {pt}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* After: Zytrixon Solution */}
                    <div
                        style={{
                            background: 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '18px',
                            }}
                        >
                            <span style={{ fontSize: '20px' }}>🚀</span>
                            <div>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--zy-text-primary)',
                                    }}
                                >
                                    Zytrixon Cloud (After)
                                </span>
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        margin: 0,
                                    }}
                                >
                                    Modernized Cloud Solution
                                </h3>
                            </div>
                        </div>

                        <p
                            style={{
                                fontSize: '14px',
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
                                        padding: '12px 14px',
                                        borderRadius: '12px',
                                        background: 'var(--zy-surface-2)',
                                        border: '1px solid var(--zy-border-subtle)',
                                    }}
                                >
                                    <span
                                        style={{
                                            color: 'var(--zy-text-primary)',
                                            fontWeight: 800,
                                            fontSize: '13px',
                                            marginTop: '1px',
                                        }}
                                    >
                                        ✓
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--zy-text-primary)',
                                            lineHeight: 1.5,
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
