import React, { useRef, useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import type { ProjectItem } from '@/lib/projects-data';

interface ProductScreenshotsProps {
    product: ProjectItem;
}

export default function ProductScreenshots({
    product,
}: ProductScreenshotsProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const screenshots = product.screenshots || [];

    // Track scroll position to update the dots indicator (...) below
    const handleScroll = () => {
        if (!sliderRef.current) {
            return;
        }
        const scrollLeft = sliderRef.current.scrollLeft;
        const width = sliderRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / width);
        if (
            newIndex !== activeIndex &&
            newIndex >= 0 &&
            newIndex < screenshots.length
        ) {
            setActiveIndex(newIndex);
        }
    };

    const scrollToIndex = (index: number) => {
        if (!sliderRef.current) {
            return;
        }
        const width = sliderRef.current.clientWidth;
        sliderRef.current.scrollTo({
            left: index * width,
            behavior: 'smooth',
        });
        setActiveIndex(index);
    };

    const scrollPrev = () => {
        scrollToIndex(Math.max(0, activeIndex - 1));
    };

    const scrollNext = () => {
        scrollToIndex(Math.min(screenshots.length - 1, activeIndex + 1));
    };

    if (screenshots.length === 0) {
        return null;
    }

    const hasMultiple = screenshots.length > 1;

    return (
        <section
            id="gallery"
            style={{
                paddingTop: '80px',
                paddingBottom: '85px',
                paddingLeft: 'var(--zy-section-pad-x, 24px)',
                paddingRight: 'var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    position: 'relative',
                }}
            >
                {/* Header Typography */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginBottom: '36px',
                    }}
                >
                    <div>
                        <span
                            className="zy-section-label"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '11px',
                                fontWeight: 800,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'var(--zy-text-secondary)',
                                background: 'var(--zy-surface-2)',
                                border: '1px solid var(--zy-border-subtle)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                marginBottom: '12px',
                            }}
                        >
                            <span
                                style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: product.accentColor,
                                }}
                            />
                            Product Interfaces
                        </span>
                        <h2
                            style={{
                                fontFamily:
                                    'var(--font-heading, Space Grotesk, sans-serif)',
                                fontSize: 'clamp(26px, 3.5vw, 42px)',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                                letterSpacing: '-0.02em',
                                margin: 0,
                            }}
                        >
                            Screenshots & Workflows
                        </h2>
                    </div>

                    {/* Left / Right Arrows if multiple screenshots */}
                    {hasMultiple && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <button
                                type="button"
                                onClick={scrollPrev}
                                disabled={activeIndex === 0}
                                aria-label="Previous screenshot"
                                style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--zy-surface-2)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    color:
                                        activeIndex === 0
                                            ? 'var(--zy-text-muted)'
                                            : 'var(--zy-text-primary)',
                                    cursor:
                                        activeIndex === 0
                                            ? 'not-allowed'
                                            : 'pointer',
                                    transition: 'all 0.25s ease',
                                    opacity: activeIndex === 0 ? 0.45 : 1,
                                }}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                onClick={scrollNext}
                                disabled={
                                    activeIndex === screenshots.length - 1
                                }
                                aria-label="Next screenshot"
                                style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--zy-surface-2)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    color:
                                        activeIndex === screenshots.length - 1
                                            ? 'var(--zy-text-muted)'
                                            : 'var(--zy-text-primary)',
                                    cursor:
                                        activeIndex === screenshots.length - 1
                                            ? 'not-allowed'
                                            : 'pointer',
                                    transition: 'all 0.25s ease',
                                    opacity:
                                        activeIndex === screenshots.length - 1
                                            ? 0.45
                                            : 1,
                                }}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Horizontal Scrollable Slider Container (Clear In-Area Viewing, No Fullscreen Lightbox) */}
                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="product-screenshots-slider"
                    style={{
                        display: 'flex',
                        gap: '24px',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollBehavior: 'smooth',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        paddingBottom: '8px',
                    }}
                >
                    {screenshots.map((ss, idx) => (
                        <div
                            key={ss.title + idx}
                            style={{
                                flex: '0 0 100%',
                                minWidth: '100%',
                                scrollSnapAlign: 'start',
                                borderRadius: '20px',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-card-bg)',
                                border: '1px solid var(--zy-border-subtle)',
                                padding: '16px',
                                overflow: 'hidden',
                                boxShadow: isLight
                                    ? '0 15px 40px -10px rgba(0,0,0,0.06)'
                                    : '0 20px 50px -10px rgba(0,0,0,0.5)',
                            }}
                        >
                            {/* Browser Mockup Top Bar for Professional Polish */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '8px 14px',
                                    background: isLight
                                        ? '#f1f5f9'
                                        : 'var(--zy-surface-2)',
                                    borderRadius: '10px 10px 0 0',
                                    borderBottom:
                                        '1px solid var(--zy-border-subtle)',
                                    marginBottom: '10px',
                                }}
                            >
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <span
                                        style={{
                                            width: '9px',
                                            height: '9px',
                                            borderRadius: '50%',
                                            background: '#EF4444',
                                        }}
                                    />
                                    <span
                                        style={{
                                            width: '9px',
                                            height: '9px',
                                            borderRadius: '50%',
                                            background: '#F59E0B',
                                        }}
                                    />
                                    <span
                                        style={{
                                            width: '9px',
                                            height: '9px',
                                            borderRadius: '50%',
                                            background: '#10B981',
                                        }}
                                    />
                                </div>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        color: 'var(--zy-text-secondary)',
                                        letterSpacing: '0.02em',
                                    }}
                                >
                                    {ss.title}
                                </span>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        color: product.accentColor,
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {product.shortTitle}
                                </span>
                            </div>

                            {/* Crisp, Crystal Clear In-Area Image Frame (No Fullscreen Overlay) */}
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '2.14 / 1',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    background: isLight
                                        ? '#f8fafc'
                                        : 'var(--zy-surface-1)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding:
                                        ss.category?.toLowerCase().includes('app') ||
                                        ss.image.includes('image.png') ||
                                        ss.image.includes('WhatsApp Image')
                                            ? '14px'
                                            : '0',
                                }}
                            >
                                {ss.category?.toLowerCase().includes('app') ||
                                ss.image.includes('image.png') ||
                                ss.image.includes('WhatsApp Image') ? (
                                    <div
                                        style={{
                                            height: '100%',
                                            maxHeight: '480px',
                                            borderRadius: '24px',
                                            overflow: 'hidden',
                                            border: '5px solid var(--zy-surface-2)',
                                            boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
                                            background: '#000000',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img
                                            src={ss.image}
                                            alt={ss.title}
                                            style={{
                                                height: '100%',
                                                width: 'auto',
                                                maxHeight: '460px',
                                                objectFit: 'contain',
                                                display: 'block',
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <img
                                        src={ss.image}
                                        alt={ss.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                            display: 'block',
                                        }}
                                    />
                                )}
                            </div>

                            {/* Caption / Description below image inside the card */}
                            {ss.description && (
                                <div
                                    style={{
                                        paddingTop: '14px',
                                        paddingLeft: '4px',
                                        paddingRight: '4px',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--zy-text-secondary)',
                                            lineHeight: 1.55,
                                            margin: 0,
                                        }}
                                    >
                                        {ss.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Pagination Dots indicator (.....) just below the screenshots slider */}
                {hasMultiple && (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            marginTop: '28px',
                        }}
                    >
                        {screenshots.map((_, dotIdx) => {
                            const isActive = dotIdx === activeIndex;
                            return (
                                <button
                                    key={`dot-${dotIdx}`}
                                    type="button"
                                    onClick={() => scrollToIndex(dotIdx)}
                                    aria-label={`Go to screenshot ${dotIdx + 1}`}
                                    style={{
                                        width: isActive ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '8px',
                                        background: isActive
                                            ? product.accentColor
                                            : 'var(--zy-border-subtle)',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                        transition:
                                            'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        boxShadow: isActive
                                            ? `0 0 10px ${product.accentColor}`
                                            : 'none',
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            <style>{`
                .product-screenshots-slider::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
