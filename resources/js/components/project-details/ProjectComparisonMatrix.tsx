import React from 'react';
import { ProjectItem } from '@/lib/projects-data';
import { useTheme } from '@/components/landing/theme-provider';

interface ProjectComparisonMatrixProps {
    project: ProjectItem;
}

export default function ProjectComparisonMatrix({ project }: ProjectComparisonMatrixProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            id="transformation"
            style={{
                padding: '100px var(--zy-section-pad-x, 24px)',
                background: isLight ? '#f8f9fa' : '#060608',
                borderBottom: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
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
                            color: project.accentColor,
                            background: `${project.accentColor}12`,
                            padding: '4px 14px',
                            borderRadius: '20px',
                            border: `1px solid ${project.accentColor}30`,
                        }}
                    >
                        Before vs After
                    </span>
                    <h2
                        style={{
                            fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            fontWeight: 800,
                            marginTop: '16px',
                            color: isLight ? '#0a0a0a' : '#ffffff',
                        }}
                    >
                        The Architectural Transformation
                    </h2>
                    <p style={{ color: isLight ? '#666666' : '#888888', fontSize: '16px', maxWidth: '640px', margin: '12px auto 0' }}>
                        How we migrated the client from fragile legacy bottlenecks to high-throughput, self-healing cloud infrastructure.
                    </p>
                </div>

                {/* Comparative Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '30px',
                    }}
                >
                    {/* Before: Legacy Bottlenecks */}
                    <div
                        style={{
                            background: isLight
                                ? 'linear-gradient(180deg, rgba(239, 68, 68, 0.06) 0%, rgba(255, 245, 245, 0.95) 100%)'
                                : 'linear-gradient(180deg, rgba(255, 60, 60, 0.05) 0%, rgba(20, 10, 10, 0.4) 100%)',
                            border: isLight ? '1px solid rgba(239, 68, 68, 0.25)' : '1px solid rgba(255, 60, 60, 0.2)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            boxShadow: isLight ? '0 10px 30px rgba(239, 68, 68, 0.04)' : 'none',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                            <span style={{ fontSize: '20px' }}>⚠️</span>
                            <div>
                                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: isLight ? '#dc2626' : '#ff6b6b' }}>
                                    Legacy System (Before)
                                </span>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: isLight ? '#1a1a1a' : '#ffffff', margin: 0 }}>
                                    Operational Friction Points
                                </h3>
                            </div>
                        </div>

                        <p style={{ fontSize: '14px', color: isLight ? '#555555' : '#aaaaaa', lineHeight: 1.7, marginBottom: '24px' }}>
                            {project.challenge}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {project.challengePoints.map((pt, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        padding: '12px 14px',
                                        borderRadius: '12px',
                                        background: isLight ? 'rgba(239, 68, 68, 0.06)' : 'rgba(255, 60, 60, 0.04)',
                                        border: isLight ? '1px solid rgba(239, 68, 68, 0.15)' : '1px solid rgba(255, 60, 60, 0.1)',
                                    }}
                                >
                                    <span style={{ color: isLight ? '#dc2626' : '#ff6b6b', fontWeight: 800, fontSize: '13px', marginTop: '1px' }}>✕</span>
                                    <span style={{ fontSize: '13px', color: isLight ? '#333333' : '#dddddd', lineHeight: 1.5 }}>{pt}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* After: Zytrixon Solution */}
                    <div
                        style={{
                            background: isLight
                                ? `linear-gradient(180deg, ${project.accentColor}12 0%, rgba(255, 255, 255, 0.95) 100%)`
                                : `linear-gradient(180deg, ${project.accentColor}10 0%, rgba(10, 15, 20, 0.5) 100%)`,
                            border: `1px solid ${project.accentColor}40`,
                            borderRadius: '24px',
                            padding: '40px 32px',
                            boxShadow: isLight
                                ? `0 15px 40px rgba(0,0,0,0.06), 0 0 30px ${project.accentColor}15`
                                : `0 15px 50px ${project.accentColor}12`,
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                            <span style={{ fontSize: '20px' }}>🚀</span>
                            <div>
                                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: project.accentColor }}>
                                    Zytrixon Cloud (After)
                                </span>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: isLight ? '#1a1a1a' : '#ffffff', margin: 0 }}>
                                    Modernized Cloud Solution
                                </h3>
                            </div>
                        </div>

                        <p style={{ fontSize: '14px', color: isLight ? '#555555' : '#aaaaaa', lineHeight: 1.7, marginBottom: '24px' }}>
                            {project.solution}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {project.solutionPoints.map((pt, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        padding: '12px 14px',
                                        borderRadius: '12px',
                                        background: isLight ? `${project.accentColor}10` : `${project.accentColor}08`,
                                        border: isLight ? `1px solid ${project.accentColor}30` : `1px solid ${project.accentColor}25`,
                                    }}
                                >
                                    <span style={{ color: project.accentColor, fontWeight: 800, fontSize: '13px', marginTop: '1px' }}>✓</span>
                                    <span style={{ fontSize: '13px', color: isLight ? '#222222' : '#ffffff', lineHeight: 1.5 }}>{pt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
