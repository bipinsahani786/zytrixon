import React, { useState, useEffect } from 'react';
import type { ProjectItem } from '@/lib/projects-data';
import { ProjectScreenshot } from '@/lib/projects-data';

interface ProjectInteractiveGalleryProps {
    project: ProjectItem;
}

export default function ProjectInteractiveGallery({
    project,
}: ProjectInteractiveGalleryProps) {
    if (!project.screenshots || project.screenshots.length === 0) {
        return null;
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const isSingle = project.screenshots.length === 1;
    const activeScreen =
        project.screenshots[activeIndex] || project.screenshots[0];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setLightboxOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section
            id="gallery"
            style={{
                padding: '100px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
                        Interface Explorer
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
                        Explore Application Workflows
                    </h2>
                    <p
                        style={{
                            color: 'var(--zy-text-secondary)',
                            fontSize: '16px',
                            maxWidth: '640px',
                            margin: '12px auto 0',
                        }}
                    >
                        Select any view to inspect its architectural purpose, UI
                        workflow, and high-resolution layout.
                    </p>
                </div>

                {/* Single or Split Explorer */}
                {isSingle ? (
                    <div style={{ maxWidth: '980px', margin: '0 auto' }}>
                        <div
                            onClick={() => setLightboxOpen(true)}
                            style={{
                                background: 'var(--zy-surface-1)',
                                borderRadius: '22px',
                                border: '1px solid var(--zy-border-subtle)',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                                cursor: 'pointer',
                                position: 'relative',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.borderColor =
                                    project.accentColor)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.borderColor =
                                    'var(--zy-border-subtle)')
                            }
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    maxHeight: '560px',
                                }}
                            >
                                <img
                                    src={activeScreen.image}
                                    alt={activeScreen.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '560px',
                                        objectFit: 'cover',
                                        display: 'block',
                                        transition: 'transform 0.4s ease',
                                    }}
                                />

                                {/* Expand Pill */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        background: 'rgba(0,0,0,0.75)',
                                        backdropFilter: 'blur(8px)',
                                        color: '#ffffff',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        border: '1px solid rgba(255,255,255,0.15)',
                                    }}
                                >
                                    🔍 Click to Enlarge
                                </div>

                                <span
                                    style={{
                                        position: 'absolute',
                                        bottom: '16px',
                                        left: '16px',
                                        background: 'rgba(0,0,0,0.85)',
                                        color: project.accentColor,
                                        padding: '6px 14px',
                                        borderRadius: '8px',
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    {activeScreen.category}
                                </span>
                            </div>

                            <div
                                style={{
                                    padding: '24px 28px',
                                    background: 'var(--zy-surface-1)',
                                    borderTop: '1px solid var(--zy-border-subtle)',
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    {activeScreen.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {activeScreen.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '36px',
                            alignItems: 'center',
                        }}
                    >
                    {/* Featured Screen Stage */}
                    <div>
                        <div
                            onClick={() => setLightboxOpen(true)}
                            style={{
                                background: 'var(--zy-surface-1)',
                                borderRadius: '22px',
                                border: '1px solid var(--zy-border-subtle)',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                                cursor: 'pointer',
                                position: 'relative',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.borderColor =
                                    project.accentColor)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.borderColor =
                                    'var(--zy-border-subtle)')
                            }
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: '420px',
                                }}
                            >
                                <img
                                    src={activeScreen.image}
                                    alt={activeScreen.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                        transition: 'transform 0.4s ease',
                                    }}
                                />

                                {/* Expand Pill */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        background: 'rgba(0,0,0,0.75)',
                                        backdropFilter: 'blur(8px)',
                                        color: '#ffffff',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        border: '1px solid rgba(255,255,255,0.15)',
                                    }}
                                >
                                    🔍 Click to Enlarge
                                </div>

                                <span
                                    style={{
                                        position: 'absolute',
                                        bottom: '16px',
                                        left: '16px',
                                        background: 'rgba(0,0,0,0.85)',
                                        color: project.accentColor,
                                        padding: '6px 14px',
                                        borderRadius: '8px',
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    {activeScreen.category}
                                </span>
                            </div>

                            <div
                                style={{
                                    padding: '24px 28px',
                                    background: 'var(--zy-surface-1)',
                                    borderTop: '1px solid var(--zy-border-subtle)',
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    {activeScreen.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: 'var(--zy-text-secondary)',
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {activeScreen.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Screen Selector List */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {project.screenshots.map((ss, idx) => {
                            const isSelected = activeIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                        padding: '18px 22px',
                                        borderRadius: '18px',
                                        background: isSelected
                                            ? 'var(--zy-card-bg-hover)'
                                            : 'var(--zy-card-bg)',
                                        border: isSelected
                                            ? `1px solid ${project.accentColor}`
                                            : '1px solid var(--zy-border-subtle)',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isSelected) {
                                            e.currentTarget.style.background =
                                                'var(--zy-card-bg-hover)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isSelected) {
                                            e.currentTarget.style.background =
                                                'var(--zy-card-bg)';
                                        }
                                    }}
                                >
                                    {/* Thumbnail Preview */}
                                    <div
                                        style={{
                                            width: '68px',
                                            height: '48px',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            flexShrink: 0,
                                            border: isSelected
                                                ? `1px solid ${project.accentColor}`
                                                : '1px solid var(--zy-border-subtle)',
                                        }}
                                    >
                                        <img
                                            src={ss.image}
                                            alt={ss.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: '11px',
                                                    color: isSelected
                                                        ? project.accentColor
                                                        : 'var(--zy-text-muted)',
                                                    fontWeight: 800,
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                {ss.category}
                                            </span>
                                        </div>
                                        <h4
                                            style={{
                                                fontSize: '15px',
                                                fontWeight: 700,
                                                color: 'var(--zy-text-primary)',
                                                marginTop: '2px',
                                                marginBottom: '2px',
                                            }}
                                        >
                                            {ss.title}
                                        </h4>
                                        <div
                                            style={{
                                                fontSize: '12px',
                                                color: 'var(--zy-text-secondary)',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '320px',
                                            }}
                                        >
                                            {ss.description}
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: isSelected
                                                ? project.accentColor
                                                : 'var(--zy-surface-2)',
                                            color: isSelected
                                                ? '#000000'
                                                : 'var(--zy-text-secondary)',
                                            fontSize: '11px',
                                            fontWeight: 800,
                                        }}
                                    >
                                        {idx + 1}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 999999,
                        background: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(16px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px',
                    }}
                    onClick={() => setLightboxOpen(false)}
                >
                    <div
                        style={{
                            maxWidth: '1100px',
                            width: '100%',
                            background: 'var(--zy-surface-1)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid var(--zy-border-subtle)',
                            position: 'relative',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setLightboxOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'rgba(0,0,0,0.7)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#ffffff',
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                fontSize: '16px',
                                cursor: 'pointer',
                                zIndex: 10,
                            }}
                        >
                            ✕
                        </button>
                        <img
                            src={activeScreen.image}
                            alt={activeScreen.title}
                            style={{
                                width: '100%',
                                maxHeight: '72vh',
                                objectFit: 'contain',
                                background: '#000000',
                            }}
                        />
                        <div style={{ padding: '24px 30px' }}>
                            <span
                                style={{
                                    fontSize: '11px',
                                    color: project.accentColor,
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                }}
                            >
                                {activeScreen.category}
                            </span>
                            <h3
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    marginTop: '4px',
                                }}
                            >
                                {activeScreen.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '14px',
                                    color: 'var(--zy-text-secondary)',
                                    marginTop: '6px',
                                }}
                            >
                                {activeScreen.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
