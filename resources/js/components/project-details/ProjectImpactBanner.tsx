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

                {/* Verified Client Testimonial (if available for project) */}
                {project.testimonial && (
                    <div
                        style={{
                            padding: '34px 32px',
                            background:
                                'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, var(--zy-surface-1) 100%)',
                            borderRadius: '20px',
                            border: '1px solid rgba(37,99,235,0.22)',
                            marginBottom: '40px',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                marginBottom: '14px',
                                color: '#F59E0B',
                            }}
                        >
                            {'★'.repeat(5)}
                            <span
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-secondary)',
                                    marginLeft: '8px',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Verified Client Testimonial
                            </span>
                        </div>
                        <blockquote
                            style={{
                                fontFamily:
                                    'var(--font-heading, Space Grotesk, sans-serif)',
                                fontSize: 'clamp(17px, 2vw, 22px)',
                                fontWeight: 500,
                                fontStyle: 'italic',
                                lineHeight: 1.55,
                                color: 'var(--zy-text-primary)',
                                margin: '0 0 20px 0',
                                maxWidth: '1050px',
                            }}
                        >
                            &ldquo;{project.testimonial.quote}&rdquo;
                        </blockquote>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                            }}
                        >
                            <div
                                style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    background:
                                        'linear-gradient(135deg, #2563EB, #10B981)',
                                    color: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                }}
                            >
                                {project.testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                    }}
                                >
                                    {project.testimonial.author}
                                </div>
                                <div
                                    style={{
                                        fontSize: '12px',
                                        color: 'var(--zy-text-secondary)',
                                    }}
                                >
                                    {project.testimonial.role}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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
