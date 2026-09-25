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
                        <span>{tech.name}</span>
                        <span
                            style={{
                                color: 'var(--zy-text-secondary)',
                                fontSize: '12px',
                            }}
                        >
                            • {tech.category}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
