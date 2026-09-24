import React from 'react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectVideoTheatreProps {
    project: ProjectItem;
}

export default function ProjectVideoTheatre({
    project,
}: ProjectVideoTheatreProps) {
    return (
        <section
            id="video-theatre"
            style={{
                padding: '100px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderTop: '1px solid var(--zy-border-subtle)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                position: 'relative',
            }}
        >
            {/* Ambient Backlight Diffusion */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '60%',
                    background:
                        'radial-gradient(circle, var(--zy-card-bg-hover) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(90px)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                }}
            >
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
                    High-Definition Video Demo
                </span>
                <h2
                    style={{
                        fontFamily:
                            'var(--font-heading, Space Grotesk, sans-serif)',
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 800,
                        marginTop: '16px',
                        marginBottom: '14px',
                        color: 'var(--zy-text-primary)',
                    }}
                >
                    Watch The Platform In Action
                </h2>
                <p
                    style={{
                        color: 'var(--zy-text-secondary)',
                        fontSize: '16px',
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                    }}
                >
                    Full end-to-end user experience, navigation speed, data
                    filtering, and responsive mobile interaction.
                </p>

                {/* Video Player Frame */}
                <div
                    style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '1px solid var(--zy-border-subtle)',
                        background: '#000000',
                        boxShadow: '0 30px 90px rgba(0,0,0,0.4)',
                    }}
                >
                    <video
                        src={project.videoUrl}
                        poster={project.videoPoster}
                        controls
                        playsInline
                        style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            display: 'block',
                            background: '#000',
                        }}
                    />
                </div>

                {/* Action Callout Underneath */}
                <div style={{ marginTop: '30px' }}>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--zy-text-primary)',
                            fontSize: '14px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            padding: '12px 28px',
                            borderRadius: '30px',
                            background: 'var(--zy-surface-1)',
                            border: '1px solid var(--zy-border-subtle)',
                        }}
                    >
                        Experience Live Demo Directly in Your Browser ↗
                    </a>
                </div>
            </div>
        </section>
    );
}
