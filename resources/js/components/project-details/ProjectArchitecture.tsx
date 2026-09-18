import React from 'react';
import { ProjectItem } from '@/lib/projects-data';

interface ProjectArchitectureProps {
    project: ProjectItem;
}

export default function ProjectArchitecture({ project }: ProjectArchitectureProps) {
    return (
        <section
            id="architecture"
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                background: '#09090c',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <span
                        style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: project.accentColor,
                        }}
                    >
                        Technical Architecture
                    </span>
                    <h2
                        style={{
                            fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(28px, 4vw, 42px)',
                            fontWeight: 800,
                            marginTop: '10px',
                            color: '#ffffff',
                        }}
                    >
                        How The System Operates
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {project.architectureFlow.map((node, i) => (
                        <div
                            key={i}
                            style={{
                                background: '#111114',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '18px',
                                padding: '28px 24px',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 800,
                                    color: project.accentColor,
                                    background: `${project.accentColor}18`,
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    display: 'inline-block',
                                    marginBottom: '14px',
                                }}
                            >
                                Step {node.step}
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                                {node.title}
                            </h3>
                            <div style={{ fontSize: '12px', color: project.accentColor, fontWeight: 600, marginBottom: '12px' }}>
                                {node.tech}
                            </div>
                            <p style={{ fontSize: '13px', color: '#888888', lineHeight: 1.6 }}>
                                {node.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
