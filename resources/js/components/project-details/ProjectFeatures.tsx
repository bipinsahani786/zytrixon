import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectFeaturesProps {
    project: ProjectItem;
}

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
    return (
        <section
            id="features"
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
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
                        Feature Breakdown
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
                        Core System Capabilities
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {project.features.map((feat, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                borderRadius: '18px',
                                padding: '30px 24px',
                                transition: 'all 0.3s ease',
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
                            <div
                                style={{
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '12px',
                                    background: 'var(--zy-surface-2)',
                                    color: 'var(--zy-text-primary)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '22px',
                                    marginBottom: '20px',
                                }}
                            >
                                {feat.icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    marginBottom: '10px',
                                }}
                            >
                                {feat.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '14px',
                                    color: 'var(--zy-text-secondary)',
                                    lineHeight: 1.6,
                                }}
                            >
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
