import React, { useState, useEffect } from 'react';
import { ProjectItem, ProjectScreenshot } from '@/lib/projects-data';
import { useTheme } from '@/components/landing/theme-provider';

interface ProjectInteractiveGalleryProps {
    project: ProjectItem;
}

export default function ProjectInteractiveGallery({ project }: ProjectInteractiveGalleryProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const activeScreen = project.screenshots[activeIndex] || project.screenshots[0];

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
                background: isLight ? '#f8f9fa' : '#060608',
                borderBottom: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)',
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
                            fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            fontWeight: 800,
                            marginTop: '16px',
                            color: isLight ? '#0a0a0a' : '#ffffff',
                        }}
                    >
                        Explore Application Workflows
                    </h2>
                    <p style={{ color: isLight ? '#666666' : '#888888', fontSize: '16px', maxWidth: '640px', margin: '12px auto 0' }}>
                        Select any view to inspect its architectural purpose, UI workflow, and high-resolution layout.
                    </p>
                </div>

                {/* Split Explorer: Featured Screen (Left) + Screen Selector (Right) */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '36px',
                        alignItems: 'center',
                    }}
                >
                    {/* Featured Screen Stage */}
                    <div>
                        <div
                            onClick={() => setLightboxOpen(true)}
                            style={{
                                background: isLight ? '#ffffff' : '#0e0e12',
                                borderRadius: '22px',
                                border: isLight ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(255, 255, 255, 0.12)',
                                overflow: 'hidden',
                                boxShadow: isLight ? '0 20px 50px rgba(0,0,0,0.06)' : '0 25px 70px rgba(0,0,0,0.85)',
                                cursor: 'pointer',
                                position: 'relative',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = project.accentColor)}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.12)')}
                        >
                            <div style={{ position: 'relative', overflow: 'hidden', height: '420px' }}>
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

                            <div style={{ padding: '24px 28px', background: isLight ? '#ffffff' : '#0e0e12', borderTop: isLight ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: isLight ? '#111111' : '#ffffff', marginBottom: '6px' }}>
                                    {activeScreen.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: isLight ? '#666666' : '#888888', lineHeight: 1.6, margin: 0 }}>
                                    {activeScreen.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Screen Selector List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                                            ? (isLight ? `linear-gradient(135deg, ${project.accentColor}18 0%, rgba(255,255,255,0.95) 100%)` : `linear-gradient(135deg, ${project.accentColor}15 0%, rgba(18,18,22,0.9) 100%)`)
                                            : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.03)'),
                                        border: isSelected
                                            ? `1px solid ${project.accentColor}60`
                                            : (isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.06)'),
                                        boxShadow: isLight ? '0 4px 15px rgba(0,0,0,0.03)' : 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isSelected) {
                                            e.currentTarget.style.background = isLight ? '#f4f4f7' : 'rgba(255, 255, 255, 0.06)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isSelected) {
                                            e.currentTarget.style.background = isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.03)';
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
                                                : (isLight ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.1)'),
                                        }}
                                    >
                                        <img
                                            src={ss.image}
                                            alt={ss.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ fontSize: '11px', color: isSelected ? project.accentColor : (isLight ? '#777777' : '#666666'), fontWeight: 800, textTransform: 'uppercase' }}>
                                                {ss.category}
                                            </span>
                                        </div>
                                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: isLight ? '#111111' : '#ffffff', marginTop: '2px', marginBottom: '2px' }}>
                                            {ss.title}
                                        </h4>
                                        <div style={{ fontSize: '12px', color: isLight ? '#666666' : '#777777', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '320px' }}>
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
                                            background: isSelected ? project.accentColor : (isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'),
                                            color: isSelected ? '#000000' : (isLight ? '#555555' : '#888888'),
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
                            background: isLight ? '#ffffff' : '#111114',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: isLight ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid rgba(255, 255, 255, 0.15)',
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
                            style={{ width: '100%', maxHeight: '72vh', objectFit: 'contain', background: '#000000' }}
                        />
                        <div style={{ padding: '24px 30px' }}>
                            <span style={{ fontSize: '11px', color: project.accentColor, fontWeight: 800, textTransform: 'uppercase' }}>
                                {activeScreen.category}
                            </span>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: isLight ? '#111111' : '#ffffff', marginTop: '4px' }}>
                                {activeScreen.title}
                            </h3>
                            <p style={{ fontSize: '14px', color: isLight ? '#666666' : '#999999', marginTop: '6px' }}>
                                {activeScreen.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
