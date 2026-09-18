import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';
import GradientCard from '@/components/ui/GradientCard';
import { useTheme } from '@/components/landing/theme-provider';

interface ProjectImpactBannerProps {
    project: ProjectItem;
}

export default function ProjectImpactBanner({
    project,
}: ProjectImpactBannerProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                background: isLight ? '#ffffff' : '#070709',
                borderBottom: isLight
                    ? '1px solid rgba(0, 0, 0, 0.08)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                {/* Executive Quote Card */}
                <div
                    style={{
                        padding: '40px 36px',
                        background: isLight
                            ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.04) 100%)'
                            : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                        borderRadius: '20px',
                        border: isLight
                            ? '1px solid rgba(0, 0, 0, 0.08)'
                            : '1px solid rgba(255, 255, 255, 0.08)',
                        marginBottom: '40px',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            fontSize: '32px',
                            color: project.accentColor,
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
                            color: isLight ? '#111111' : '#ffffff',
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
                            color: isLight ? '#666666' : '#777777',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                        }}
                    >
                        Executive Project Summary •{' '}
                        <span style={{ color: project.accentColor }}>
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
                        <GradientCard key={i} themeColor={project.accentColor}>
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
                                        color: project.accentColor,
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
                                        color: isLight ? '#111111' : '#ffffff',
                                        marginBottom: '6px',
                                    }}
                                >
                                    {metric.label}
                                </div>
                                <div
                                    style={{
                                        fontSize: '12px',
                                        color: isLight ? '#555555' : '#888888',
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
