import React from 'react';
import type { ImageSlide } from './types';

interface PlatformBrowserMockupProps {
    image: ImageSlide;
    color: string;
    totalImages: number;
    onPrevImage: () => void;
    onNextImage: () => void;
}

export default function PlatformBrowserMockup({
    image,
    color,
    totalImages,
    onPrevImage,
    onNextImage,
}: PlatformBrowserMockupProps) {
    return (
        <div
            style={{
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid var(--zy-border-subtle)',
                background: 'var(--zy-surface-2)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.18)',
                position: 'relative',
            }}
        >
            {/* Browser Window Header Bar */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 18px',
                    background: 'var(--zy-surface-2)',
                    borderBottom: '1px solid var(--zy-border-subtle)',
                }}
            >
                <div style={{ display: 'flex', gap: '6px' }}>
                    <span
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: '#EF4444',
                        }}
                    />
                    <span
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: '#F59E0B',
                        }}
                    />
                    <span
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: '#10B981',
                        }}
                    />
                </div>
                <div
                    style={{
                        fontSize: '11px',
                        color: 'var(--zy-text-secondary)',
                        background: 'var(--zy-bg)',
                        padding: '4px 18px',
                        borderRadius: '8px',
                        border: '1px solid var(--zy-border-subtle)',
                        maxWidth: '400px',
                        width: '100%',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    🔒 https://admin.grocerymart.zytrixon.com/terminal/sahil-grocery-noida-sec62
                </div>
                <div
                    style={{
                        fontSize: '10.5px',
                        color: color,
                        fontWeight: 700,
                    }}
                >
                    REACT 19 + VITE
                </div>
            </div>

            {/* Screenshot Image Container */}
            <div style={{ background: '#000000', position: 'relative' }}>
                <img
                    key={image.image}
                    src={image.image}
                    alt={image.title}
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '640px',
                        objectFit: 'contain',
                        display: 'block',
                    }}
                />

                {/* Floating Arrow Overlay on Image for fast 1-click sliding */}
                {totalImages > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={onPrevImage}
                            aria-label="Previous Screenshot"
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
                                zIndex: 4,
                            }}
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={onNextImage}
                            aria-label="Next Screenshot"
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
                                zIndex: 4,
                            }}
                        >
                            ›
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
