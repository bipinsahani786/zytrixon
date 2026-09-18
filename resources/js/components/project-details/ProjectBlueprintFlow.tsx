import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';
import { useTheme } from '@/components/landing/theme-provider';

interface ProjectBlueprintFlowProps {
    project: ProjectItem;
}

export default function ProjectBlueprintFlow({
    project,
}: ProjectBlueprintFlowProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            id="architecture"
            style={{
                padding: '100px var(--zy-section-pad-x, 24px)',
                background: isLight ? '#ffffff' : '#040406',
                borderBottom: isLight
                    ? '1px solid rgba(0, 0, 0, 0.08)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
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
                        System Blueprint
                    </span>
                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            fontWeight: 800,
                            marginTop: '16px',
                            color: isLight ? '#0a0a0a' : '#ffffff',
                        }}
                    >
                        Cloud Architecture & Flow
                    </h2>
                    <p
                        style={{
                            color: isLight ? '#666666' : '#888888',
                            fontSize: '16px',
                            maxWidth: '640px',
                            margin: '12px auto 0',
                        }}
                    >
                        Distributed multi-tenant topology engineered for
                        sub-second responses and bulletproof data governance.
                    </p>
                </div>

                {/* 4 Pipeline Step Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px',
                        marginBottom: '60px',
                    }}
                >
                    {project.architectureFlow.map((node, i) => (
                        <div
                            key={i}
                            style={{
                                background: isLight ? '#ffffff' : '#0a0a0d',
                                border: isLight
                                    ? '1px solid rgba(0, 0, 0, 0.08)'
                                    : '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                padding: '32px 26px',
                                position: 'relative',
                                boxShadow: isLight
                                    ? '0 10px 30px rgba(0,0,0,0.04)'
                                    : 'none',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor =
                                    project.accentColor;
                                e.currentTarget.style.transform =
                                    'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = isLight
                                    ? 'rgba(0, 0, 0, 0.08)'
                                    : 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.transform =
                                    'translateY(0)';
                            }}
                        >
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: `${project.accentColor}20`,
                                    color: project.accentColor,
                                    fontSize: '13px',
                                    fontWeight: 800,
                                    marginBottom: '18px',
                                }}
                            >
                                0{node.step}
                            </div>
                            <h3
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: isLight ? '#111111' : '#ffffff',
                                    marginBottom: '8px',
                                }}
                            >
                                {node.title}
                            </h3>
                            <div
                                style={{
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: project.accentColor,
                                    marginBottom: '12px',
                                }}
                            >
                                {node.tech}
                            </div>
                            <p
                                style={{
                                    fontSize: '13px',
                                    color: isLight ? '#666666' : '#888888',
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}
                            >
                                {node.detail}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Technology Badges Matrix */}
                <div
                    style={{
                        padding: '40px',
                        background: isLight
                            ? 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.04) 100%)'
                            : 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
                        borderRadius: '24px',
                        border: isLight
                            ? '1px solid rgba(0, 0, 0, 0.08)'
                            : '1px solid rgba(255, 255, 255, 0.08)',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            color: isLight ? '#555555' : '#777777',
                            letterSpacing: '0.1em',
                            fontWeight: 700,
                            marginBottom: '24px',
                        }}
                    >
                        Production Technology Stack
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '12px',
                        }}
                    >
                        {project.techStack.map((tech, i) => (
                            <div
                                key={i}
                                style={{
                                    background: isLight ? '#ffffff' : '#111115',
                                    border: isLight
                                        ? '1px solid rgba(0, 0, 0, 0.08)'
                                        : '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: '30px',
                                    padding: '10px 20px',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: isLight ? '#111111' : '#ffffff',
                                    boxShadow: isLight
                                        ? '0 2px 8px rgba(0,0,0,0.04)'
                                        : 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}
                            >
                                <span>{tech.name}</span>
                                <span
                                    style={{
                                        color: isLight ? '#777777' : '#666666',
                                        fontSize: '11px',
                                    }}
                                >
                                    • {tech.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
