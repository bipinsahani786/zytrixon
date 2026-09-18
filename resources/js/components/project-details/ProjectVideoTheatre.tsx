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
                background: '#08080a',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
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
                    background: `radial-gradient(circle, ${project.accentColor}18 0%, rgba(0,0,0,0) 70%)`,
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
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: project.accentColor,
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
                        marginTop: '10px',
                        marginBottom: '14px',
                        color: '#ffffff',
                    }}
                >
                    Watch The Platform In Action
                </h2>
                <p
                    style={{
                        color: '#888888',
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
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        background: '#000000',
                        boxShadow: `0 30px 90px rgba(0,0,0,0.9), 0 0 50px ${project.accentColor}15`,
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
                            color: project.accentColor,
                            fontSize: '15px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            padding: '10px 24px',
                            borderRadius: '30px',
                            background: `${project.accentColor}14`,
                            border: `1px solid ${project.accentColor}30`,
                        }}
                    >
                        Experience Live Demo Directly in Your Browser ↗
                    </a>
                </div>
            </div>
        </section>
    );
}
