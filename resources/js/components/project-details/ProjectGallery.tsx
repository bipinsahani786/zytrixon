import React, { useState, useEffect } from 'react';
import type { ProjectItem, ProjectScreenshot } from '@/lib/projects-data';

interface ProjectGalleryProps {
    project: ProjectItem;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [lightboxImage, setLightboxImage] =
        useState<ProjectScreenshot | null>(null);

    const categories = [
        'All',
        ...Array.from(new Set(project.screenshots.map((s) => s.category))),
    ];

    const filteredScreenshots =
        selectedCategory === 'All'
            ? project.screenshots
            : project.screenshots.filter(
                  (s) => s.category === selectedCategory,
              );

    // Escape listener for Lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setLightboxImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section
            style={{
                padding: '90px var(--zy-section-pad-x, 24px)',
                maxWidth: '1200px',
                margin: '0 auto',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                    Interface Screenshots
                </span>
                <h2
                    style={{
                        fontFamily:
                            'var(--font-heading, Space Grotesk, sans-serif)',
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 800,
                        marginTop: '16px',
                        color: 'var(--zy-text-primary)',
                    }}
                >
                    Explore Every Screen & Workflow
                </h2>
                <p
                    style={{
                        color: 'var(--zy-text-secondary)',
                        fontSize: '16px',
                        maxWidth: '600px',
                        margin: '10px auto 30px',
                    }}
                >
                    Click on any screenshot to view the full ultra-high
                    resolution interface.
                </p>

                {/* Category Filter Tabs */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '10px',
                    }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: '8px 20px',
                                borderRadius: '30px',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                border:
                                    selectedCategory === cat
                                        ? '1px solid var(--zy-text-primary)'
                                        : '1px solid var(--zy-border-subtle)',
                                background:
                                    selectedCategory === cat
                                        ? 'var(--zy-text-primary)'
                                        : 'var(--zy-surface-1)',
                                color:
                                    selectedCategory === cat
                                        ? 'var(--zy-bg)'
                                        : 'var(--zy-text-primary)',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Screenshots Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '30px',
                }}
            >
                {filteredScreenshots.map((ss, idx) => (
                    <div
                        key={idx}
                        onClick={() => setLightboxImage(ss)}
                        style={{
                            background: 'var(--zy-surface-1)',
                            borderRadius: '18px',
                            overflow: 'hidden',
                            border: '1px solid var(--zy-border-subtle)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                'translateY(-6px)';
                            e.currentTarget.style.borderColor =
                                'var(--zy-border-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor =
                                'var(--zy-border-subtle)';
                        }}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '240px',
                                overflow: 'hidden',
                                position: 'relative',
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
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    background: 'rgba(0,0,0,0.7)',
                                    color: '#ffffff',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    fontSize: '11px',
                                    fontWeight: 600,
                                }}
                            >
                                🔍 Click to Expand
                            </div>
                            <span
                                style={{
                                    position: 'absolute',
                                    bottom: '12px',
                                    left: '12px',
                                    background: 'rgba(0,0,0,0.85)',
                                    color: 'var(--zy-text-primary)',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                }}
                            >
                                {ss.category}
                            </span>
                        </div>

                        <div style={{ padding: '22px' }}>
                            <h3
                                style={{
                                    fontSize: '17px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    marginBottom: '8px',
                                }}
                            >
                                {ss.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '13px',
                                    color: 'var(--zy-text-secondary)',
                                    lineHeight: 1.6,
                                }}
                            >
                                {ss.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 99999,
                        background: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px',
                    }}
                    onClick={() => setLightboxImage(null)}
                >
                    <div
                        style={{
                            maxWidth: '1080px',
                            width: '100%',
                            background: 'var(--zy-surface-1)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid var(--zy-border-subtle)',
                            boxShadow: '0 25px 80px rgba(0,0,0,0.8)',
                            position: 'relative',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="zy-modal-close-btn"
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                zIndex: 10,
                            }}
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
                        <img
                            src={lightboxImage.image}
                            alt={lightboxImage.title}
                            style={{
                                width: '100%',
                                maxHeight: '72vh',
                                objectFit: 'contain',
                                background: '#000000',
                            }}
                        />
                        <div style={{ padding: '24px 30px' }}>
                            <div
                                style={{
                                    fontSize: '11px',
                                    textTransform: 'uppercase',
                                    color: 'var(--zy-text-secondary)',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                }}
                            >
                                {lightboxImage.category} View
                            </div>
                            <h3
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: 'var(--zy-text-primary)',
                                    marginTop: '4px',
                                }}
                            >
                                {lightboxImage.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '14px',
                                    color: 'var(--zy-text-secondary)',
                                    marginTop: '6px',
                                }}
                            >
                                {lightboxImage.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
