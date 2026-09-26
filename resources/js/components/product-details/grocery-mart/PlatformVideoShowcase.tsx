import React, { useRef } from 'react';
import type { VideoSlide } from './types';

interface PlatformVideoShowcaseProps {
    videos: VideoSlide[];
    color: string;
    currentVideoIndex: number;
    onSelectVideo: (index: number) => void;
    onPrevVideo: () => void;
    onNextVideo: () => void;
    onBackToScreenshots: () => void;
}

export default function PlatformVideoShowcase({
    videos,
    color,
    currentVideoIndex,
    onSelectVideo,
    onPrevVideo,
    onNextVideo,
    onBackToScreenshots,
}: PlatformVideoShowcaseProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const totalVideos = videos.length;
    const currentVideo = videos[currentVideoIndex] || videos[0];

    return (
        <div>
            {/* Video Selector Buttons & Arrow Navigation Bar */}
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
                {/* Sub-video Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {videos.map((vid, idx) => {
                        const isSelected = currentVideoIndex === idx;
                        return (
                            <button
                                key={vid.id}
                                type="button"
                                onClick={() => onSelectVideo(idx)}
                                style={{
                                    padding: '8px 14px',
                                    borderRadius: '10px',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    background: isSelected
                                        ? `linear-gradient(135deg, ${color}33, ${color}15)`
                                        : 'var(--zy-surface-2)',
                                    border: isSelected
                                        ? `1.5px solid ${color}`
                                        : '1px solid var(--zy-border-subtle)',
                                    color: isSelected
                                        ? 'var(--zy-text-primary)'
                                        : 'var(--zy-text-secondary)',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <span>{vid.badge}</span>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        padding: '2px 6px',
                                        borderRadius: '6px',
                                        background: 'rgba(0,0,0,0.3)',
                                        color: color,
                                    }}
                                >
                                    {vid.duration}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Arrow Controls & Back Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {totalVideos > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={onPrevVideo}
                                aria-label="Previous Video"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--zy-border-subtle)',
                                    background: 'var(--zy-surface-2)',
                                    color: 'var(--zy-text-primary)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '18px',
                                    fontWeight: 800,
                                }}
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                onClick={onNextVideo}
                                aria-label="Next Video"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--zy-border-subtle)',
                                    background: 'var(--zy-surface-2)',
                                    color: 'var(--zy-text-primary)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '18px',
                                    fontWeight: 800,
                                }}
                            >
                                ›
                            </button>
                        </>
                    )}

                    <button
                        type="button"
                        onClick={onBackToScreenshots}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '8px 14px',
                            borderRadius: '10px',
                            background: 'var(--zy-surface-2)',
                            border: '1px solid var(--zy-border-subtle)',
                            color: 'var(--zy-text-secondary)',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                        }}
                    >
                        <span>📸</span>
                        <span>Back to Screenshots</span>
                    </button>
                </div>
            </div>

            {/* Active Video Player Frame */}
            <div
                style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid var(--zy-border-subtle)',
                    background: '#000000',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                    position: 'relative',
                }}
            >
                <video
                    ref={videoRef}
                    key={currentVideo.src}
                    src={currentVideo.src}
                    poster={currentVideo.poster}
                    controls
                    playsInline
                    title={currentVideo.title}
                    style={{
                        width: '100%',
                        maxHeight: '560px',
                        objectFit: 'contain',
                        display: 'block',
                        margin: '0 auto',
                    }}
                />

                {/* Floating Video Slide Arrows */}
                {totalVideos > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={onPrevVideo}
                            aria-label="Previous Video"
                            style={{
                                position: 'absolute',
                                left: '16px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: 'rgba(15, 23, 42, 0.8)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff',
                                fontSize: '22px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                                zIndex: 5,
                            }}
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={onNextVideo}
                            aria-label="Next Video"
                            style={{
                                position: 'absolute',
                                right: '16px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: 'rgba(15, 23, 42, 0.8)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff',
                                fontSize: '22px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                                zIndex: 5,
                            }}
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {/* Video Footer Metadata */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginTop: '16px',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    background: 'var(--zy-surface-2)',
                    border: '1px solid var(--zy-border-subtle)',
                }}
            >
                <div>
                    <h4
                        style={{
                            fontSize: '16px',
                            fontWeight: 800,
                            color: 'var(--zy-text-primary)',
                            margin: 0,
                        }}
                    >
                        {currentVideo.title}
                    </h4>
                    <p
                        style={{
                            fontSize: '13px',
                            color: 'var(--zy-text-secondary)',
                            margin: '4px 0 0',
                        }}
                    >
                        {currentVideo.desc}
                    </p>
                </div>
                <span
                    style={{
                        fontSize: '11px',
                        color: color,
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '8px',
                        background: 'var(--zy-surface-1)',
                        border: '1px solid var(--zy-border-subtle)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    HD Recording • {currentVideo.duration}
                </span>
            </div>
        </div>
    );
}
