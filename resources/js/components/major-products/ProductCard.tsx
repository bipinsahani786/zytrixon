import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export interface ProductCardProps {
    id: string;
    title: string;
    description: string;
    badge: string;
    image: string;
    accentColor: string;
    inquiryMessage?: string;
}

export default function ProductCard({
    title,
    description,
    badge,
    image,
    accentColor,
    inquiryMessage = 'Hi Zytrixon, I would like to know more about this product.',
}: ProductCardProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [imageError, setImageError] = useState(false);

    const waLink = `https://wa.me/917049711475?text=${encodeURIComponent(inquiryMessage)}`;

    return (
        <div
            className="product-card"
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                background: 'var(--zy-card-bg)',
                border: '1px solid var(--zy-border-subtle)',
                padding: '12px 12px 14px',
                overflow: 'hidden',
                transition:
                    'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease',
                backdropFilter: 'blur(12px)',
            }}
        >
            {/* Big Image Showcase Area — Aspect ratio matched to 1024x479 for minimal vertical height */}
            <div
                className="product-thumb-wrapper"
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '2.14 / 1',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: isLight ? '#f8fafc' : 'var(--zy-surface-1)',
                    border: '1px solid var(--zy-border-subtle)',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {!imageError && image ? (
                    <img
                        src={image}
                        alt={title}
                        onError={() => setImageError(true)}
                        className="product-card-img"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            objectPosition: 'center',
                            display: 'block',
                            transition:
                                'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease',
                        }}
                    />
                ) : (
                    /* Elegant placeholder frame waiting for user image */
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: isLight
                                ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
                                : 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 100%)',
                            color: 'var(--zy-text-secondary)',
                            gap: '8px',
                            padding: '12px',
                        }}
                    >
                        <span style={{ fontSize: '18px' }}>📷</span>
                        <span
                            style={{
                                fontSize: '11px',
                                fontWeight: 600,
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                                color: 'var(--zy-text-secondary)',
                            }}
                        >
                            Product Image Area
                        </span>
                    </div>
                )}
            </div>

            {/* Content Area — Compact & Space-Efficient */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                }}
            >
                {/* Title & Badge in One Single Inline Row */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        marginBottom: '6px',
                    }}
                >
                    <h3
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '17px',
                            fontWeight: 800,
                            color: 'var(--zy-text-primary)',
                            lineHeight: 1.2,
                            letterSpacing: '-0.01em',
                            margin: 0,
                        }}
                    >
                        {title}
                    </h3>

                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: '10px',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            background: isLight
                                ? 'rgba(0,0,0,0.04)'
                                : 'var(--zy-surface-2)',
                            border: '1px solid var(--zy-border-subtle)',
                            color: 'var(--zy-text-primary)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <span
                            style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: accentColor,
                                boxShadow: `0 0 6px ${accentColor}`,
                            }}
                        />
                        {badge}
                    </span>
                </div>

                {/* Strictly 2-Line Description */}
                <p
                    style={{
                        fontSize: '12.5px',
                        color: 'var(--zy-text-secondary)',
                        lineHeight: 1.45,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        marginBottom: '10px',
                    }}
                >
                    {description}
                </p>

                {/* Compact Bottom Action Bar */}
                <div
                    style={{
                        marginTop: 'auto',
                        paddingTop: '8px',
                        borderTop: '1px solid var(--zy-border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                    }}
                >
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-demo-btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: 'var(--zy-surface-2)',
                            border: '1px solid var(--zy-border-subtle)',
                            color: 'var(--zy-text-primary)',
                            fontSize: '11.5px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'all 0.25s ease',
                        }}
                    >
                        <span>Schedule Demo</span>
                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>

                    <a
                        href="/contact"
                        style={{
                            fontSize: '11.5px',
                            fontWeight: 600,
                            color: 'var(--zy-text-secondary)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                        }}
                    >
                        Inquire Now ↗
                    </a>
                </div>
            </div>
        </div>
    );
}
