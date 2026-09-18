import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';
import { useTheme } from '@/components/landing/theme-provider';

interface ProjectCinemaTheatreProps {
    project: ProjectItem;
}

export default function ProjectCinemaTheatre({
    project,
}: ProjectCinemaTheatreProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            id="theatre"
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: isLight ? '#ffffff' : '#040406',
                borderBottom: isLight
                    ? '1px solid rgba(0, 0, 0, 0.08)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            {/* Dramatic Ambient Backlight Diffusion */}
            <div
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '900px',
                    height: '500px',
                    background: isLight
                        ? `radial-gradient(circle, ${project.accentColor}15 0%, rgba(255,255,255,0) 70%)`
                        : `radial-gradient(circle, ${project.accentColor}25 0%, rgba(0,0,0,0) 70%)`,
                    filter: 'blur(100px)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    maxWidth: '1240px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '45px' }}>
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
                        4K Walkthrough
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
                        Video Demonstration
                    </h2>
                    <p
                        style={{
                            color: isLight ? '#666666' : '#888888',
                            fontSize: '16px',
                            maxWidth: '600px',
                            margin: '12px auto 0',
                        }}
                    >
                        Watch the live interface walkthrough showing sub-second
                        transitions and biometric sync.
                    </p>
                </div>

                {/* Theatre Cinema Stage */}
                <div
                    style={{
                        background: isLight ? '#f4f4f7' : '#0a0a0d',
                        borderRadius: '24px',
                        border: isLight
                            ? '1px solid rgba(0, 0, 0, 0.12)'
                            : '1px solid rgba(255, 255, 255, 0.12)',
                        overflow: 'hidden',
                        boxShadow: isLight
                            ? `0 25px 60px rgba(0,0,0,0.08), 0 0 50px ${project.accentColor}15`
                            : `0 35px 100px rgba(0,0,0,0.95), 0 0 80px ${project.accentColor}18`,
                    }}
                >
                    {/* Cinema Bar */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 24px',
                            background: isLight ? '#eaeaf0' : '#121216',
                            borderBottom: isLight
                                ? '1px solid rgba(0, 0, 0, 0.08)'
                                : '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <span
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: '#ff5f56',
                                }}
                            />
                            <span
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: '#ffbd2e',
                                }}
                            />
                            <span
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: '#27c93f',
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: '12px',
                                    fontSize: '12px',
                                    color: isLight ? '#444444' : '#888888',
                                    fontWeight: 600,
                                }}
                            >
                                {project.shortTitle} — Official Demo Film
                            </span>
                        </div>
                        <div
                            style={{
                                fontSize: '11px',
                                color: project.accentColor,
                                fontWeight: 700,
                            }}
                        >
                            1080p HD
                        </div>
                    </div>

                    {/* Embedded 16:9 Video */}
                    <video
                        src={project.videoUrl}
                        poster={project.videoPoster}
                        controls
                        playsInline
                        style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            display: 'block',
                            background: '#000000',
                        }}
                    />

                    {/* Bottom Theatre Controls Strip */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '16px',
                            padding: '20px 28px',
                            background: isLight ? '#eaeaf0' : '#121216',
                            borderTop: isLight
                                ? '1px solid rgba(0, 0, 0, 0.08)'
                                : 'none',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '13px',
                                    color: isLight ? '#444444' : '#cccccc',
                                }}
                            >
                                <strong
                                    style={{
                                        color: isLight ? '#111111' : '#ffffff',
                                    }}
                                >
                                    Tech Highlights:
                                </strong>{' '}
                                Real-time WebSockets, Sharded Data Grid,
                                Sub-45ms Latency
                            </div>
                        </div>

                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: project.accentColor,
                                background: isLight
                                    ? '#ffffff'
                                    : `${project.accentColor}15`,
                                border: isLight
                                    ? `1px solid ${project.accentColor}60`
                                    : `1px solid ${project.accentColor}35`,
                                padding: '10px 22px',
                                borderRadius: '30px',
                                fontSize: '13px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                boxShadow: isLight
                                    ? '0 2px 8px rgba(0,0,0,0.06)'
                                    : 'none',
                            }}
                        >
                            <span>Open Live Web Application</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
