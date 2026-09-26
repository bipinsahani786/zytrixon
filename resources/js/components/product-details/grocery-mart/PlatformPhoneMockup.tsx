import React from 'react';
import type { ImageSlide, PlatformTab } from './types';

interface PlatformPhoneMockupProps {
    image: ImageSlide;
    color: string;
    accentGlow: string;
    activePlatform: PlatformTab;
}

export default function PlatformPhoneMockup({
    image,
    color,
    accentGlow,
    activePlatform,
}: PlatformPhoneMockupProps) {
    const isCustomer = activePlatform === 'customer';

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '32px',
                alignItems: 'center',
            }}
        >
            {/* Smartphone Bezel */}
            <div style={{ textAlign: 'center' }}>
                <div
                    style={{
                        maxWidth: '320px',
                        margin: '0 auto',
                        borderRadius: '36px',
                        overflow: 'hidden',
                        border: '8px solid var(--zy-surface-2)',
                        boxShadow: `0 24px 70px ${accentGlow}`,
                        background: '#000000',
                        position: 'relative',
                    }}
                >
                    {/* Notch */}
                    <div
                        style={{
                            width: '90px',
                            height: '16px',
                            background: 'var(--zy-surface-2)',
                            borderRadius: '0 0 12px 12px',
                            margin: '0 auto',
                            position: 'relative',
                            zIndex: 10,
                        }}
                    />
                    <img
                        key={image.image}
                        src={image.image}
                        alt={image.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '560px',
                            objectFit: 'contain',
                            display: 'block',
                        }}
                    />
                </div>
            </div>

            {/* Mobile Feature Callouts & Details */}
            <div
                style={{
                    background: 'var(--zy-surface-2)',
                    border: '1px solid var(--zy-border-subtle)',
                    borderRadius: '20px',
                    padding: '24px',
                }}
            >
                <span
                    style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: color,
                    }}
                >
                    {isCustomer ? '🛒 Customer Shopping Engine' : '🛵 Dark-Store Dispatch'}
                </span>
                <h4
                    style={{
                        fontSize: '19px',
                        fontWeight: 800,
                        color: 'var(--zy-text-primary)',
                        marginTop: '4px',
                        marginBottom: '12px',
                    }}
                >
                    {image.title}
                </h4>
                <p
                    style={{
                        fontSize: '14px',
                        color: 'var(--zy-text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '20px',
                    }}
                >
                    {image.desc}
                </p>

                {/* Specification Matrix */}
                {image.specs && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        {image.specs.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '10px 14px',
                                    borderRadius: '10px',
                                    background: 'var(--zy-surface-1)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    fontSize: '12.5px',
                                }}
                            >
                                <span
                                    style={{
                                        color: 'var(--zy-text-muted)',
                                        fontWeight: 600,
                                    }}
                                >
                                    {item.label}
                                </span>
                                <span
                                    style={{
                                        color: 'var(--zy-text-primary)',
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
