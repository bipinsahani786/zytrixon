import React, { useState, useEffect } from 'react';
import type { ProjectItem } from '@/lib/projects-data';
import type { PlatformTab, ViewMode } from './grocery-mart/types';
import { platformsData } from './grocery-mart/data';
import PlatformTabsNav from './grocery-mart/PlatformTabsNav';
import PlatformBrowserMockup from './grocery-mart/PlatformBrowserMockup';
import PlatformPhoneMockup from './grocery-mart/PlatformPhoneMockup';
import PlatformVideoShowcase from './grocery-mart/PlatformVideoShowcase';

interface GroceryMartPlatformsSectionProps {
    project: ProjectItem;
}

export default function GroceryMartPlatformsSection({
    project,
}: GroceryMartPlatformsSectionProps) {
    const [activePlatform, setActivePlatform] = useState<PlatformTab>('web');
    const [viewMode, setViewMode] = useState<ViewMode>('images');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const platform = platformsData[activePlatform];

    // Reset slide indices when changing platform
    const handlePlatformChange = (tab: PlatformTab) => {
        setActivePlatform(tab);
        setCurrentImageIndex(0);
        setCurrentVideoIndex(0);
        if (platformsData[tab].videos.length === 0) {
            setViewMode('images');
        }
    };

    // Slide navigation for images
    const totalImages = platform.images.length;
    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
    };
    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
    };

    // Slide navigation for videos
    const totalVideos = platform.videos.length;
    const handlePrevVideo = () => {
        setCurrentVideoIndex((prev) => (prev > 0 ? prev - 1 : totalVideos - 1));
    };
    const handleNextVideo = () => {
        setCurrentVideoIndex((prev) => (prev < totalVideos - 1 ? prev + 1 : 0));
    };

    const currentImage = platform.images[currentImageIndex] || platform.images[0];

    // Ensure slide indices stay in bounds
    useEffect(() => {
        if (currentImageIndex >= totalImages) {
            setCurrentImageIndex(0);
        }
        if (currentVideoIndex >= totalVideos) {
            setCurrentVideoIndex(0);
        }
    }, [activePlatform, totalImages, totalVideos]);

    return (
        <section
            id="platforms"
            style={{
                paddingTop: '88px',
                paddingBottom: '96px',
                paddingLeft: 'var(--zy-section-pad-x, 24px)',
                paddingRight: 'var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            {/* Ambient Background Radial Glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '12%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '900px',
                    height: '500px',
                    background: `radial-gradient(ellipse at center, ${platform.accentGlow} 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                    zIndex: 0,
                    transition: 'background 0.4s ease',
                }}
            />

            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: platform.color,
                            background: 'var(--zy-surface-2)',
                            padding: '6px 18px',
                            borderRadius: '30px',
                            border: `1px solid ${platform.color}44`,
                            boxShadow: `0 0 20px ${platform.accentGlow}`,
                            marginBottom: '16px',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <span>🛒 Multi-Platform Ecosystem</span>
                    </div>

                    <h2
                        style={{
                            fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            fontWeight: 800,
                            color: 'var(--zy-text-primary)',
                            lineHeight: 1.15,
                            letterSpacing: '-0.02em',
                            maxWidth: '920px',
                            margin: '0 auto',
                        }}
                    >
                        3 Dedicated Interfaces for{' '}
                        <span style={{ color: platform.color, transition: 'color 0.3s ease' }}>
                            Web Panel, User App & Delivery App
                        </span>
                    </h2>

                    <p
                        style={{
                            color: 'var(--zy-text-secondary)',
                            fontSize: 'clamp(15px, 1.8vw, 17px)',
                            maxWidth: '780px',
                            margin: '14px auto 0',
                            lineHeight: 1.65,
                        }}
                    >
                        Explore each platform independently: view high-definition interface screenshots or switch to live operational video recordings with interactive slider controls.
                    </p>
                </div>

                {/* 1. Platform Tabs Selector (Web Panel, User App, Delivery App) */}
                <PlatformTabsNav
                    activePlatform={activePlatform}
                    onSelectPlatform={handlePlatformChange}
                />

                {/* 2. Master Presentation Card */}
                <div
                    style={{
                        background: 'var(--zy-surface-1)',
                        border: '1px solid var(--zy-border-subtle)',
                        borderRadius: '28px',
                        padding: 'clamp(20px, 3.5vw, 36px)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                        position: 'relative',
                    }}
                >
                    {/* Top Control Bar: Title & Toggle for Images vs Videos */}
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '16px',
                            paddingBottom: '24px',
                            borderBottom: '1px solid var(--zy-border-subtle)',
                            marginBottom: '28px',
                        }}
                    >
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '20px' }}>{platform.icon}</span>
                                <h3
                                    style={{
                                        fontSize: 'clamp(20px, 2.5vw, 26px)',
                                        fontWeight: 800,
                                        color: 'var(--zy-text-primary)',
                                        margin: 0,
                                    }}
                                >
                                    {platform.name}
                                </h3>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        padding: '4px 10px',
                                        borderRadius: '8px',
                                        background: `${platform.color}18`,
                                        color: platform.color,
                                        border: `1px solid ${platform.color}35`,
                                    }}
                                >
                                    {viewMode === 'images' ? '📸 UI Screenshots' : '🎬 Live Walkthrough'}
                                </span>
                            </div>
                            <p
                                style={{
                                    fontSize: '13.5px',
                                    color: 'var(--zy-text-secondary)',
                                    margin: '6px 0 0',
                                }}
                            >
                                {platform.tagline}
                            </p>
                        </div>

                        {/* Images vs Videos Switcher Pill (only shown when platform has videos) */}
                        {totalVideos > 0 && (
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    background: 'var(--zy-surface-2)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    borderRadius: '14px',
                                    padding: '4px',
                                    gap: '4px',
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setViewMode('images')}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '8px 16px',
                                        borderRadius: '10px',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        background:
                                            viewMode === 'images'
                                                ? platform.color
                                                : 'transparent',
                                        color:
                                            viewMode === 'images'
                                                ? '#ffffff'
                                                : 'var(--zy-text-secondary)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        boxShadow:
                                            viewMode === 'images'
                                                ? `0 4px 14px ${platform.color}40`
                                                : 'none',
                                    }}
                                >
                                    <span>📸</span>
                                    <span>Screenshots ({totalImages})</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setViewMode('videos')}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '8px 16px',
                                        borderRadius: '10px',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        background:
                                            viewMode === 'videos'
                                                ? platform.color
                                                : 'transparent',
                                        color:
                                            viewMode === 'videos'
                                                ? '#ffffff'
                                                : 'var(--zy-text-secondary)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        boxShadow:
                                            viewMode === 'videos'
                                                ? `0 4px 14px ${platform.color}40`
                                                : 'none',
                                    }}
                                >
                                    <span>🎬</span>
                                    <span>Videos ({totalVideos})</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* ========================================================================= */}
                    {/* MODE 1: IMAGES / SCREENSHOTS SLIDER */}
                    {/* ========================================================================= */}
                    {viewMode === 'images' && (
                        <div>
                            {/* Slide Meta & Arrow Navigation Bar */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '14px',
                                    marginBottom: '20px',
                                }}
                            >
                                <div>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            color: platform.color,
                                        }}
                                    >
                                        {currentImage.subtitle}
                                    </span>
                                    <h4
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 800,
                                            color: 'var(--zy-text-primary)',
                                            margin: '4px 0 0',
                                        }}
                                    >
                                        {currentImage.title}
                                    </h4>
                                </div>

                                {/* Slider Controls: Arrows & Quick Video Jump */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {totalImages > 1 && (
                                        <div
                                            style={{
                                                fontSize: '12px',
                                                fontWeight: 700,
                                                color: 'var(--zy-text-muted)',
                                                marginRight: '6px',
                                            }}
                                        >
                                            Screen {currentImageIndex + 1} of {totalImages}
                                        </div>
                                    )}

                                    {totalImages > 1 && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={handlePrevImage}
                                                aria-label="Previous Screenshot"
                                                style={{
                                                    width: '42px',
                                                    height: '42px',
                                                    borderRadius: '12px',
                                                    border: '1px solid var(--zy-border-subtle)',
                                                    background: 'var(--zy-surface-2)',
                                                    color: 'var(--zy-text-primary)',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '18px',
                                                    fontWeight: 800,
                                                    transition: 'all 0.2s ease',
                                                }}
                                            >
                                                ‹
                                            </button>

                                            <button
                                                type="button"
                                                onClick={handleNextImage}
                                                aria-label="Next Screenshot"
                                                style={{
                                                    width: '42px',
                                                    height: '42px',
                                                    borderRadius: '12px',
                                                    border: '1px solid var(--zy-border-subtle)',
                                                    background: 'var(--zy-surface-2)',
                                                    color: 'var(--zy-text-primary)',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '18px',
                                                    fontWeight: 800,
                                                    transition: 'all 0.2s ease',
                                                }}
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}

                                    {totalVideos > 0 && (
                                        <button
                                            type="button"
                                            onClick={() => setViewMode('videos')}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                padding: '9px 14px',
                                                borderRadius: '12px',
                                                background: `${platform.color}15`,
                                                border: `1px solid ${platform.color}40`,
                                                color: platform.color,
                                                fontSize: '12px',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            <span>▶</span>
                                            <span>Watch Video Walkthrough</span>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Device Mockup: Desktop Browser for Web Panel, Phone Bezel for Mobile Apps */}
                            {activePlatform === 'web' ? (
                                <PlatformBrowserMockup
                                    image={currentImage}
                                    color={platform.color}
                                    totalImages={totalImages}
                                    onPrevImage={handlePrevImage}
                                    onNextImage={handleNextImage}
                                />
                            ) : (
                                <PlatformPhoneMockup
                                    image={currentImage}
                                    color={platform.color}
                                    accentGlow={platform.accentGlow}
                                    activePlatform={activePlatform}
                                />
                            )}

                            {/* Bottom Metadata & Specs Strip */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '16px',
                                    marginTop: '22px',
                                    padding: '16px 20px',
                                    borderRadius: '16px',
                                    background: 'var(--zy-surface-2)',
                                    border: '1px solid var(--zy-border-subtle)',
                                }}
                            >
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {currentImage.badges.map((b, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: '11px',
                                                fontWeight: 700,
                                                padding: '4px 10px',
                                                borderRadius: '8px',
                                                background: 'var(--zy-surface-1)',
                                                border: '1px solid var(--zy-border-subtle)',
                                                color: 'var(--zy-text-secondary)',
                                            }}
                                        >
                                            {b}
                                        </span>
                                    ))}
                                </div>

                                {totalImages > 1 && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {platform.images.map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setCurrentImageIndex(i)}
                                                style={{
                                                    width: currentImageIndex === i ? '24px' : '8px',
                                                    height: '8px',
                                                    borderRadius: '4px',
                                                    background:
                                                        currentImageIndex === i
                                                            ? platform.color
                                                            : 'var(--zy-border-subtle)',
                                                    border: 'none',
                                                    padding: 0,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.25s ease',
                                                }}
                                                aria-label={`Go to slide ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ========================================================================= */}
                    {/* MODE 2: VIDEOS / DEMO WALKTHROUGH SLIDER */}
                    {/* ========================================================================= */}
                    {viewMode === 'videos' && (
                        <PlatformVideoShowcase
                            videos={platform.videos}
                            color={platform.color}
                            currentVideoIndex={currentVideoIndex}
                            onSelectVideo={(idx) => setCurrentVideoIndex(idx)}
                            onPrevVideo={handlePrevVideo}
                            onNextVideo={handleNextVideo}
                            onBackToScreenshots={() => setViewMode('images')}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
