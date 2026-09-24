import React, { useState, useEffect } from 'react';
import type { ProjectItem } from '@/lib/projects-data';
import { ProjectScreenshot } from '@/lib/projects-data';

interface ProjectInteractiveGalleryProps {
    project: ProjectItem;
}

export default function ProjectInteractiveGallery({
    project,
}: ProjectInteractiveGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [isTallImage, setIsTallImage] = useState(false);
    const [naturalWidth, setNaturalWidth] = useState(1100);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setLightboxOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        setIsTallImage(false);
        setNaturalWidth(1100);
    }, [activeIndex]);

    const screenshots = project.screenshots || [];
    if (screenshots.length === 0) {
        return null;
    }

    const isSingle = screenshots.length === 1;
    const activeScreen = screenshots[activeIndex] || screenshots[0];

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
                            color: 'var(--zy-text-secondary)',
                            background: 'var(--zy-surface-2)',
                            padding: '4px 14px',
                            borderRadius: '20px',
                            border: '1px solid var(--zy-border-subtle)',
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
                                    'var(--zy-border-hover)')
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
                                        objectPosition: 'top',
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
                                    🔍 View Full Layout
                                </div>

                                <span
                                    style={{
                                        position: 'absolute',
                                        bottom: '16px',
                                        left: '16px',
                                        background: 'rgba(0,0,0,0.85)',
                                        backdropFilter: 'blur(8px)',
                                        color: '#ffffff',
                                        padding: '6px 14px',
                                        borderRadius: '8px',
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        border: '1px solid rgba(255,255,255,0.18)',
                                    }}
                                >
                                    {activeScreen.category}
                                </span>
                            </div>

                            <div
                                style={{
                                    padding: '24px 28px',
                                    background: 'var(--zy-surface-1)',
                                    borderTop:
                                        '1px solid var(--zy-border-subtle)',
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
                                        'var(--zy-border-hover)')
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
                                            objectPosition: 'top',
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
                                        🔍 View Full Layout
                                    </div>

                                    <span
                                        style={{
                                            position: 'absolute',
                                            bottom: '16px',
                                            left: '16px',
                                            background: 'rgba(0,0,0,0.85)',
                                            backdropFilter: 'blur(8px)',
                                            color: '#ffffff',
                                            padding: '6px 14px',
                                            borderRadius: '8px',
                                            fontSize: '11px',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            border: '1px solid rgba(255,255,255,0.18)',
                                        }}
                                    >
                                        {activeScreen.category}
                                    </span>
                                </div>

                                <div
                                    style={{
                                        padding: '24px 28px',
                                        background: 'var(--zy-surface-1)',
                                        borderTop:
                                            '1px solid var(--zy-border-subtle)',
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
                                                ? '1px solid var(--zy-text-primary)'
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
                                                    ? '1px solid var(--zy-text-primary)'
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
                                                    objectPosition: 'top',
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
                                                            ? 'var(--zy-text-primary)'
                                                            : 'var(--zy-text-muted)',
                                                        fontWeight: 800,
                                                        textTransform:
                                                            'uppercase',
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
                                                    ? 'var(--zy-text-primary)'
                                                    : 'var(--zy-surface-2)',
                                                color: isSelected
                                                    ? 'var(--zy-bg)'
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
                        background: 'rgba(0, 0, 0, 0.94)',
                        backdropFilter: 'blur(16px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px',
                    }}
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Viewport Top-Right Floating Close Button */}
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="zy-lightbox-screen-close"
                        aria-label="Close modal (Esc)"
                        title="Close (Esc)"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div
                        style={{
                            maxWidth:
                                naturalWidth < 600
                                    ? 'min(92vw, 440px)'
                                    : 'min(94vw, 1140px)',
                            width: '100%',
                            maxHeight: '94vh',
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'var(--zy-surface-1)',
                            borderRadius: '22px',
                            overflow: 'hidden',
                            border: '1px solid var(--zy-border-subtle)',
                            boxShadow: '0 25px 70px rgba(0,0,0,0.6)',
                            position: 'relative',
                            transition: 'max-width 0.3s ease',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header bar */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '14px 22px',
                                borderBottom: '1px solid var(--zy-border-subtle)',
                                background: 'var(--zy-surface-2)',
                                flexShrink: 0,
                                gap: '16px',
                            }}
                        >
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        color: 'var(--zy-text-secondary)',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                    }}
                                >
                                    {activeScreen.category}
                                </span>
                                <h3
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                        margin: '2px 0 0 0',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {activeScreen.title}
                                </h3>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    flexShrink: 0,
                                }}
                            >
                                <a
                                    href={activeScreen.fullImage || activeScreen.image}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="zy-modal-action-btn"
                                >
                                    Open Full Size ↗
                                </a>
                                <button
                                    onClick={() => setLightboxOpen(false)}
                                    className="zy-modal-close-btn"
                                    aria-label="Close modal (Esc)"
                                    title="Close (Esc)"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Scrollable image view */}
                        <div
                            style={{
                                flex: 1,
                                overflowY: 'auto',
                                maxHeight: 'calc(94vh - 120px)',
                                background: '#08080a',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                padding: '24px 16px',
                            }}
                        >
                            <img
                                src={activeScreen.fullImage || activeScreen.image}
                                alt={activeScreen.title}
                                onLoad={(e) => {
                                    const img = e.currentTarget;
                                    setIsTallImage(
                                        img.naturalHeight > img.naturalWidth * 1.3
                                    );
                                    setNaturalWidth(img.naturalWidth);
                                }}
                                style={{
                                    width: isTallImage ? '100%' : 'auto',
                                    maxWidth:
                                        naturalWidth < 600
                                            ? `${naturalWidth}px`
                                            : '100%',
                                    maxHeight: isTallImage ? 'none' : '76vh',
                                    height: 'auto',
                                    display: 'block',
                                    margin: '0 auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
                                }}
                            />
                        </div>

                        {/* Footer description */}
                        {activeScreen.description && (
                            <div
                                style={{
                                    padding: '14px 22px',
                                    borderTop: '1px solid var(--zy-border-subtle)',
                                    background: 'var(--zy-surface-1)',
                                    fontSize: '13px',
                                    color: 'var(--zy-text-secondary)',
                                    lineHeight: 1.5,
                                    flexShrink: 0,
                                }}
                            >
                                {activeScreen.description}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
