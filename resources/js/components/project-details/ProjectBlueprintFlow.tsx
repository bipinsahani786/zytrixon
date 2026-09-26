import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectBlueprintFlowProps {
    project: ProjectItem;
}

export default function ProjectBlueprintFlow({
    project,
}: ProjectBlueprintFlowProps) {
    return (
        <section
            id="architecture"
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
                        System Blueprint
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
                        Cloud Architecture & Flow
                    </h2>
                    <p
                        style={{
                            color: 'var(--zy-text-secondary)',
                            fontSize: '16px',
                            maxWidth: '640px',
                            margin: '12px auto 0',
                        }}
                    >
                        Distributed multi-tenant topology engineered for
                        sub-second responses and bulletproof data governance.
                    </p>
                </div>

                {/* 4 Pipeline Step Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px',
                        marginBottom: '60px',
                    }}
                >
                    {project.architectureFlow.map((node, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                borderRadius: '20px',
                                padding: '32px 26px',
                                position: 'relative',
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
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: 'var(--zy-surface-2)',
                                    color: 'var(--zy-text-primary)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    fontSize: '13px',
                                    fontWeight: 800,
                                    marginBottom: '18px',
                                }}
                            >
                                0{node.step}
                            </div>
                            <h3
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    marginBottom: '8px',
                                }}
                            >
                                {node.title}
                            </h3>
                            <div
                                style={{
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: 'var(--zy-text-secondary)',
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
                                    margin: 0,
                                }}
                            >
                                {node.detail}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Technology Badges Matrix */}
                <div
                    className="techstack-card-container"
                    style={{
                        padding: '40px',
                        background: 'var(--zy-card-bg)',
                        borderRadius: '24px',
                        border: '1px solid var(--zy-border-subtle)',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            color: 'var(--zy-text-muted)',
                            letterSpacing: '0.1em',
                            fontWeight: 700,
                            marginBottom: '24px',
                        }}
                    >
                        Production Technology Stack
                    </div>

                    <div
                        className="techstack-badges-grid"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '12px',
                        }}
                    >
                        {project.techStack.map((tech, i) => (
                            <div
                                key={i}
                                className="techstack-badge-item"
                                style={{
                                    background: 'var(--zy-surface-1)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    borderRadius: '30px',
                                    padding: '10px 20px',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: 'var(--zy-text-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}
                            >
                                <span className="techstack-badge-name">
                                    {tech.name}
                                </span>
                                <span
                                    className="techstack-badge-category"
                                    style={{
                                        color: 'var(--zy-text-muted)',
                                        fontSize: '11px',
                                    }}
                                >
                                    <span className="techstack-dot">• </span>
                                    {tech.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .techstack-card-container {
                        padding: 24px 14px !important;
                        border-radius: 16px !important;
                    }
                    .techstack-badges-grid {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 8px !important;
                    }
                    .techstack-badge-item {
                        padding: 8px 6px !important;
                        border-radius: 10px !important;
                        flex-direction: column !important;
                        justify-content: center !important;
                        text-align: center !important;
                        gap: 2px !important;
                        min-width: 0 !important;
                    }
                    .techstack-badge-name {
                        font-size: 11.5px !important;
                        font-weight: 700 !important;
                        line-height: 1.2 !important;
                        white-space: nowrap !important;
                        overflow: hidden !important;
                        text-overflow: ellipsis !important;
                        max-width: 100% !important;
                    }
                    .techstack-badge-category {
                        font-size: 9.5px !important;
                        line-height: 1.2 !important;
                        white-space: nowrap !important;
                        overflow: hidden !important;
                        text-overflow: ellipsis !important;
                        max-width: 100% !important;
                        opacity: 0.8 !important;
                    }
                    .techstack-dot {
                        display: none !important;
                    }
                }
                @media (max-width: 370px) {
                    .techstack-badges-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
}
