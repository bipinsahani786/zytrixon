import React from 'react';
import { ProjectItem } from '@/lib/projects-data';

interface ProjectTechStackProps {
    project: ProjectItem;
}

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
    return (
        <section style={{ padding: '90px var(--zy-section-pad-x, 24px)', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <span
                style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: project.accentColor,
                }}
            >
                Tools & Technologies
            </span>
            <h2
                style={{
                    fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 800,
                    marginTop: '10px',
                    marginBottom: '36px',
                    color: '#ffffff',
                }}
            >
                Built With World-Class Stacks
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', maxWidth: '960px', margin: '0 auto' }}>
                {project.techStack.map((tech, i) => (
                    <div
                        key={i}
                        style={{
                            background: '#111114',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '30px',
                            padding: '12px 24px',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = project.accentColor;
                            e.currentTarget.style.background = `${project.accentColor}12`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                            e.currentTarget.style.background = '#111114';
                        }}
                    >
                        <span>{tech.name}</span>
                        <span style={{ color: '#666666', fontSize: '12px' }}>• {tech.category}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
