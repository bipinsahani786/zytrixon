import React from 'react';
import { ProjectItem } from '@/lib/projects-data';
import GradientCard from '@/components/ui/GradientCard';

interface ProjectMetricsProps {
    project: ProjectItem;
}

export default function ProjectMetrics({ project }: ProjectMetricsProps) {
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
                    Verifiable Results
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
                    Measurable Business Impact
                </h2>
                <p style={{ color: '#888888', fontSize: '16px', maxWidth: '620px', margin: '12px auto 0' }}>
                    Engineered for high-volume enterprise throughput, zero downtime, and instant financial reconciliations.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '24px',
                }}
            >
                {project.metrics.map((metric, idx) => (
                    <GradientCard key={idx} themeColor={project.accentColor}>
                        <div style={{ padding: '34px 26px', textAlign: 'left' }}>
                            <div
                                style={{
                                    fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
                                    fontSize: 'clamp(36px, 4vw, 46px)',
                                    fontWeight: 800,
                                    color: project.accentColor,
                                    marginBottom: '10px',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                {metric.value}
                            </div>
                            <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                                {metric.label}
                            </div>
                            <div style={{ fontSize: '13px', color: '#888888', lineHeight: 1.6 }}>
                                {metric.desc}
                            </div>
                        </div>
                    </GradientCard>
                ))}
            </div>
        </section>
    );
}
