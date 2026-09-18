import React from 'react';
import { ProjectItem } from '@/lib/projects-data';

interface ProjectFeaturesProps {
    project: ProjectItem;
}

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
    return (
        <section style={{ padding: '90px var(--zy-section-pad-x, 24px)', maxWidth: '1200px', margin: '0 auto' }}>
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
                    Feature Breakdown
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
                    Core System Capabilities
                </h2>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '24px',
                }}
            >
                {project.features.map((feat, i) => (
                    <div
                        key={i}
                        style={{
                            background: '#0d0d0f',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '18px',
                            padding: '30px 24px',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = project.accentColor;
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div
                            style={{
                                width: '46px',
                                height: '46px',
                                borderRadius: '12px',
                                background: `${project.accentColor}15`,
                                color: project.accentColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '22px',
                                marginBottom: '20px',
                            }}
                        >
                            {feat.icon}
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                            {feat.title}
                        </h3>
                        <p style={{ fontSize: '14px', color: '#888888', lineHeight: 1.6 }}>
                            {feat.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
