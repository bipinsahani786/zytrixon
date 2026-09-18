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
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: project.accentColor,
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
                        marginTop: '10px',
                        color: '#ffffff',
                    }}
                >
                    Explore Every Screen & Workflow
                </h2>
                <p
                    style={{
                        color: '#888888',
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
                                        ? `1px solid ${project.accentColor}`
                                        : '1px solid rgba(255,255,255,0.08)',
                                background:
                                    selectedCategory === cat
                                        ? `${project.accentColor}20`
                                        : 'rgba(255,255,255,0.04)',
                                color:
                                    selectedCategory === cat
                                        ? project.accentColor
                                        : '#888888',
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
                            background: '#0e0e11',
                            borderRadius: '18px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.08)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                'translateY(-6px)';
                            e.currentTarget.style.borderColor =
                                project.accentColor;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor =
                                'rgba(255,255,255,0.08)';
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
                                    color: project.accentColor,
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
                                    color: '#ffffff',
                                    marginBottom: '8px',
                                }}
                            >
                                {ss.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '13px',
                                    color: '#888888',
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
                            background: '#111114',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            boxShadow: '0 25px 80px rgba(0,0,0,0.9)',
                            position: 'relative',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'rgba(0,0,0,0.7)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#ffffff',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                fontSize: '18px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                            }}
                        >
                            ✕
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
                                    color: project.accentColor,
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
                                    color: '#ffffff',
                                    marginTop: '4px',
                                }}
                            >
                                {lightboxImage.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '14px',
                                    color: '#999999',
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
