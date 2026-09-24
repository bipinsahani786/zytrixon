import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectArchitectureProps {
    project: ProjectItem;
}

export default function ProjectArchitecture({
    project,
}: ProjectArchitectureProps) {
    return (
        <section
            id="architecture"
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderTop: '1px solid var(--zy-border-subtle)',
                borderBottom: '1px solid var(--zy-border-subtle)',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
                        Technical Architecture
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
                        How The System Operates
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {project.architectureFlow.map((node, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                borderRadius: '18px',
                                padding: '28px 24px',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 800,
                                    color: 'var(--zy-text-primary)',
                                    background: 'var(--zy-surface-2)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    display: 'inline-block',
                                    marginBottom: '14px',
                                }}
                            >
                                Step {node.step}
                            </div>
                            <h3
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    marginBottom: '6px',
                                }}
                            >
                                {node.title}
                            </h3>
                            <div
                                style={{
                                    fontSize: '12px',
                                    color: 'var(--zy-text-secondary)',
                                    fontWeight: 600,
                                    marginBottom: '12px',
                                }}
                            >
                                {node.tech}
                            </div>
                            <p
                                style={{
                                    fontSize: '13px',
                                    color: 'var(--zy-text-secondary)',
                                    lineHeight: 1.6,
                                }}
                            >
                                {node.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
