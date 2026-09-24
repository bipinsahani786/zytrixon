import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';
import GradientCard from '@/components/ui/GradientCard';

interface ProjectImpactBannerProps {
    project: ProjectItem;
}

export default function ProjectImpactBanner({
    project,
}: ProjectImpactBannerProps) {
    return (
        <section
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                {/* Executive Quote Card */}
                <div
                    style={{
                        padding: '40px 36px',
                        background: 'var(--zy-card-bg)',
                        borderRadius: '20px',
                        border: '1px solid var(--zy-border-subtle)',
                        marginBottom: '40px',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            fontSize: '32px',
                            color: 'var(--zy-text-primary)',
                            lineHeight: 1,
                            marginBottom: '12px',
                        }}
                    >
                        “
                    </div>
                    <blockquote
                        style={{
                            fontFamily:
                                'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(20px, 2.5vw, 28px)',
                            fontWeight: 600,
                            lineHeight: 1.45,
                            color: 'var(--zy-text-primary)',
                            margin: 0,
                            maxWidth: '1000px',
                        }}
                    >
                        {project.summary}
                    </blockquote>
                    <div
                        style={{
                            marginTop: '20px',
                            fontSize: '13px',
                            color: 'var(--zy-text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                        }}
                    >
                        Executive Project Summary •{' '}
                        <span
                            style={{
                                color: 'var(--zy-text-primary)',
                                fontWeight: 600,
                            }}
                        >
                            {project.client}
                        </span>
                    </div>
                </div>

                {/* 4 Large KPI Stats Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {project.metrics.map((metric, i) => (
                        <GradientCard key={i}>
                            <div
                                style={{
                                    padding: '30px 24px',
                                    textAlign: 'left',
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily:
                                            'var(--font-heading, Space Grotesk, sans-serif)',
                                        fontSize: 'clamp(34px, 3.8vw, 46px)',
                                        fontWeight: 800,
                                        color: 'var(--zy-text-primary)',
                                        letterSpacing: '-0.02em',
                                        marginBottom: '6px',
                                    }}
                                >
                                    {metric.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    {metric.label}
                                </div>
                                <div
                                    style={{
                                        fontSize: '12px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {metric.desc}
                                </div>
                            </div>
                        </GradientCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
