import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectCinemaTheatreProps {
    project: ProjectItem;
}

export default function ProjectCinemaTheatre({
    project,
}: ProjectCinemaTheatreProps) {
    if (!project.videoUrl || project.videoUrl.trim() === '') {
        return null;
    }

    return (
        <section
            id="theatre"
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
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
                    background:
                        'radial-gradient(circle, var(--zy-card-bg-hover) 0%, transparent 70%)',
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
                            color: 'var(--zy-text-secondary)',
                            background: 'var(--zy-surface-2)',
                            padding: '4px 14px',
                            borderRadius: '20px',
                            border: '1px solid var(--zy-border-subtle)',
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
                            color: 'var(--zy-text-primary)',
                        }}
                    >
                        Video Demonstration
                    </h2>
                    <p
                        style={{
                            color: 'var(--zy-text-secondary)',
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
                        background: 'var(--zy-surface-1)',
                        borderRadius: '24px',
                        border: '1px solid var(--zy-border-subtle)',
                        overflow: 'hidden',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                    }}
                >
                    {/* Cinema Bar */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 24px',
                            background: 'var(--zy-surface-2)',
                            borderBottom: '1px solid var(--zy-border-subtle)',
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
                                    color: 'var(--zy-text-muted)',
                                    fontWeight: 600,
                                }}
                            >
                                {project.shortTitle} — Official Demo Film
                            </span>
                        </div>
                        <div
                            style={{
                                fontSize: '11px',
                                color: 'var(--zy-text-secondary)',
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
                            background: 'var(--zy-surface-2)',
                            borderTop: '1px solid var(--zy-border-subtle)',
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
                                    color: 'var(--zy-text-secondary)',
                                }}
                            >
                                <strong
                                    style={{
                                        color: 'var(--zy-text-primary)',
                                    }}
                                >
                                    Tech Highlights:
                                </strong>{' '}
                                Real-time WebSockets, Sharded Data Grid,
                                High-Throughput Cloud Engine
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
                                color: 'var(--zy-text-primary)',
                                background: 'var(--zy-surface-1)',
                                border: '1px solid var(--zy-border-subtle)',
                                padding: '10px 22px',
                                borderRadius: '30px',
                                fontSize: '13px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
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
