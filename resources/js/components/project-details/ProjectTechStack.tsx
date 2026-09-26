import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectTechStackProps {
    project: ProjectItem;
}

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
    return (
        <section
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
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
                Tools & Technologies
            </span>
            <h2
                style={{
                    fontFamily:
                        'var(--font-heading, Space Grotesk, sans-serif)',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 800,
                    marginTop: '16px',
                    marginBottom: '36px',
                    color: 'var(--zy-text-primary)',
                }}
            >
                Built With World-Class Stacks
            </h2>

            <div
                className="techstack-badges-grid"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '14px',
                    maxWidth: '960px',
                    margin: '0 auto',
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
                            padding: '12px 24px',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'var(--zy-text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor =
                                'var(--zy-border-hover)';
                            e.currentTarget.style.background =
                                'var(--zy-surface-2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                                'var(--zy-border-subtle)';
                            e.currentTarget.style.background =
                                'var(--zy-surface-1)';
                        }}
                    >
                        <span className="techstack-badge-name">
                            {tech.name}
                        </span>
                        <span
                            className="techstack-badge-category"
                            style={{
                                color: 'var(--zy-text-secondary)',
                                fontSize: '12px',
                            }}
                        >
                            <span className="techstack-dot">• </span>
                            {tech.category}
                        </span>
                    </div>
                ))}
            </div>

            <style>{`
                @media (max-width: 640px) {
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
