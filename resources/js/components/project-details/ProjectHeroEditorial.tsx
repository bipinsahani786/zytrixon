import React from 'react';
import { Link } from '@inertiajs/react';
import type { ProjectItem } from '@/lib/projects-data';

interface ProjectHeroEditorialProps {
    project: ProjectItem;
}

export default function ProjectHeroEditorial({
    project,
}: ProjectHeroEditorialProps) {
    return (
        <section
            id="overview"
            className="hero-editorial-section"
            style={{
                position: 'relative',
                paddingTop: '80px',
                paddingBottom: '120px',
                paddingLeft: 'var(--zy-section-pad-x, 24px)',
                paddingRight: 'var(--zy-section-pad-x, 24px)',
                overflow: 'hidden',
                background:
                    'radial-gradient(ellipse 80% 50% at 50% -10%, var(--zy-surface-2) 0%, transparent 80%), var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Top Meta Bar */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '14px',
                        marginBottom: '20px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '13px',
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        <Link
                            href="/"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <Link
                            href="/portfolio"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            Portfolio
                        </Link>
                        <span>/</span>
                        <span
                            style={{
                                color: 'var(--zy-text-primary)',
                                fontWeight: 600,
                            }}
                        >
                            {project.shortTitle}
                        </span>
                    </div>
                </div>

                {/* Editorial Split Hero Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '50px',
                        alignItems: 'center',
                    }}
                >
                    {/* Left Column: Typography & Narrative */}
                    <div>
                        {/* Multi-Platform Callout Pill for Grocery Mart */}
                        {project.id === 'grocery-mart' ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    gap: '8px',
                                    marginBottom: '14px',
                                }}
                            >
                                <span
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: '#38BDF8',
                                        background: 'rgba(56, 189, 248, 0.12)',
                                        border: '1px solid rgba(56, 189, 248, 0.35)',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        boxShadow: '0 0 14px rgba(56, 189, 248, 0.15)',
                                    }}
                                >
                                    <span>📱</span> 2 Mobile Apps (Customer + Picker)
                                </span>
                                <span
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: '#10B981',
                                        background: 'rgba(16, 185, 129, 0.12)',
                                        border: '1px solid rgba(16, 185, 129, 0.35)',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        boxShadow: '0 0 14px rgba(16, 185, 129, 0.15)',
                                    }}
                                >
                                    <span>🖥️</span> Web Management Suite (Admin & Store)
                                </span>
                            </div>
                        ) : null}

                        <div style={{ marginBottom: '16px' }}>
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontWeight: 800,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    color: 'var(--zy-text-secondary)',
                                    background: 'var(--zy-surface-2)',
                                    border: '1px solid var(--zy-border-subtle)',
                                    padding: '5px 14px',
                                    borderRadius: '6px',
                                }}
                            >
                                {project.category}
                            </span>
                        </div>

                        <h1
                            style={{
                                fontFamily:
                                    'var(--font-heading, Space Grotesk, sans-serif)',
                                fontSize: 'clamp(32px, 4.8vw, 56px)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                color: 'var(--zy-text-primary)',
                                letterSpacing: '-0.03em',
                                marginBottom: '22px',
                            }}
                        >
                            {project.title}
                        </h1>

                        <p
                            style={{
                                fontSize: 'clamp(15px, 1.8vw, 18px)',
                                color: 'var(--zy-text-secondary)',
                                lineHeight: 1.65,
                                marginBottom: '32px',
                            }}
                        >
                            {project.tagline}
                        </p>

                        {/* Specs Pill Matrix */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '14px',
                                padding: '20px',
                                background: 'var(--zy-surface-1)',
                                borderRadius: '16px',
                                border: '1px solid var(--zy-border-subtle)',
                                marginBottom: '36px',
                                position: 'relative',
                                zIndex: 4,
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        color: 'var(--zy-text-muted)',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Client
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'var(--zy-text-primary)',
                                        marginTop: '3px',
                                    }}
                                >
                                    {project.client}
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        color: 'var(--zy-text-muted)',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Industry
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'var(--zy-text-primary)',
                                        marginTop: '3px',
                                    }}
                                >
                                    {project.industry}
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        color: 'var(--zy-text-muted)',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Timeline
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'var(--zy-text-primary)',
                                        marginTop: '3px',
                                    }}
                                >
                                    {project.duration}
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        color: 'var(--zy-text-muted)',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700,
                                    }}
                                >
                                    Architecture
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'var(--zy-text-primary)',
                                        marginTop: '3px',
                                        lineHeight: 1.4,
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    {project.architecture ??
                                        'Laravel 11 Architecture'}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div
                            className="hero-editorial-actions"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                flexWrap: 'wrap',
                            }}
                        >
                            {project.playStoreUrl ? (
                                <a
                                    href={project.playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="editorial-btn-play"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        background:
                                            'linear-gradient(135deg, #059669 0%, #10B981 100%)',
                                        color: '#ffffff',
                                        padding: '15px 30px',
                                        borderRadius: '40px',
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow:
                                            '0 8px 25px rgba(16,185,129,0.35)',
                                    }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.31-.61-.795-.61-1.393V3.207c0-.598.242-1.083.61-1.393zm11.59 11.59l2.42 2.42-12.784 7.378 10.364-9.798zm0-2.808L4.835.798l12.784 7.378-2.42 2.42zm1.414 1.404l3.523 2.034c.828.478.828 1.258 0 1.736l-3.523 2.034-2.12-2.12 2.12-2.12z" />
                                    </svg>
                                    <span>Get on Google Play</span>
                                </a>
                            ) : null}

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="editorial-btn-launch"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: project.playStoreUrl
                                        ? 'var(--zy-surface-2)'
                                        : 'var(--zy-text-primary)',
                                    color: project.playStoreUrl
                                        ? 'var(--zy-text-primary)'
                                        : 'var(--zy-bg)',
                                    padding: '15px 32px',
                                    borderRadius: '40px',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    border: project.playStoreUrl
                                        ? '1px solid var(--zy-border-subtle)'
                                        : 'none',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.18)',
                                }}
                            >
                                <span>
                                    {project.playStoreUrl
                                        ? 'Visit Website'
                                        : 'Launch Live Prototype'}
                                </span>
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Dual-Device Stage (Desktop + Angled Mobile) */}
                    <div style={{ position: 'relative' }}>
                        {/* Ambient Stage Glow */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: '-20px',
                                background:
                                    'radial-gradient(circle, var(--zy-card-bg-hover) 0%, rgba(0,0,0,0) 70%)',
                                filter: 'blur(50px)',
                                pointerEvents: 'none',
                            }}
                        />

                        {/* Desktop Browser Frame */}
                        <div
                            style={{
                                background: 'var(--zy-surface-1)',
                                borderRadius: '18px',
                                border: '1px solid var(--zy-border-subtle)',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            {/* Browser Bar */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '10px 16px',
                                    background: 'var(--zy-surface-2)',
                                    borderBottom:
                                        '1px solid var(--zy-border-subtle)',
                                }}
                            >
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <span
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#ff5f56',
                                            display: 'inline-block',
                                        }}
                                    />
                                    <span
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#ffbd2e',
                                            display: 'inline-block',
                                        }}
                                    />
                                    <span
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#27c93f',
                                            display: 'inline-block',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        color: 'var(--zy-text-secondary)',
                                        background: 'var(--zy-bg)',
                                        padding: '4px 14px',
                                        borderRadius: '6px',
                                        maxWidth: '260px',
                                        width: '100%',
                                        textAlign: 'center',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        border: '1px solid var(--zy-border-subtle)',
                                    }}
                                >
                                    🔒 {project.liveUrl}
                                </div>
                                <div
                                    style={{
                                        fontSize: '10px',
                                        color: 'var(--zy-text-primary)',
                                        fontWeight: 700,
                                    }}
                                >
                                    LIVE
                                </div>
                            </div>

                            {/* Hero Desktop Image */}
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    display: 'block',
                                }}
                            />

                            {/* Device Type Floating Badge for Desktop */}
                            {project.id === 'grocery-mart' ? (
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '12px',
                                        left: '12px',
                                        background: 'rgba(15, 23, 42, 0.88)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(56, 189, 248, 0.4)',
                                        color: '#38BDF8',
                                        fontSize: '10.5px',
                                        fontWeight: 800,
                                        padding: '4px 10px',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        letterSpacing: '0.04em',
                                        boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    <span>🖥️</span>
                                    <span>WEB MANAGEMENT PANEL (ADMIN & STORE)</span>
                                </div>
                            ) : null}
                        </div>

                        {/* Overlapping Angled Mobile Devices: Dual-Phone for Grocery Mart, Single Phone for others */}
                        {project.id === 'grocery-mart' ? (
                            <div
                                className="hero-editorial-dual-phones"
                                style={{
                                    position: 'absolute',
                                    right: '-15px',
                                    bottom: '-95px',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    zIndex: 3,
                                }}
                            >
                                {/* Phone 1: Customer App */}
                                <div
                                    className="hero-editorial-phone-left"
                                    style={{
                                        width: '185px',
                                        background: 'var(--zy-surface-1)',
                                        borderRadius: '26px',
                                        padding: '7px',
                                        border: '2px solid var(--zy-border-subtle)',
                                        boxShadow:
                                            '0 20px 50px rgba(0,0,0,0.3)',
                                        transform: 'rotate(-4deg)',
                                        transition: 'all 0.3s ease',
                                        marginRight: '-45px',
                                        zIndex: 3,
                                        cursor: 'pointer',
                                        position: 'relative',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform =
                                            'rotate(-1deg) scale(1.06) translateY(-8px)';
                                        e.currentTarget.style.zIndex = '6';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform =
                                            'rotate(-4deg) scale(1) translateY(0)';
                                        e.currentTarget.style.zIndex = '3';
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: '#10B981',
                                            color: '#ffffff',
                                            fontSize: '8.5px',
                                            fontWeight: 800,
                                            padding: '2px 8px',
                                            borderRadius: '10px',
                                            whiteSpace: 'nowrap',
                                            zIndex: 10,
                                            boxShadow:
                                                '0 4px 10px rgba(16, 185, 129, 0.4)',
                                            letterSpacing: '0.03em',
                                        }}
                                    >
                                        🛒 CUSTOMER APP
                                    </div>
                                    <div
                                        style={{
                                            width: '50px',
                                            height: '4px',
                                            background:
                                                'var(--zy-border-subtle)',
                                            borderRadius: '10px',
                                            margin: '3px auto 6px',
                                        }}
                                    />
                                    <div
                                        style={{
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            background: '#000000',
                                        }}
                                    >
                                        <img
                                            src={project.mobileImage}
                                            alt="Customer Mobile App"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                maxHeight: '385px',
                                                objectFit: 'contain',
                                                display: 'block',
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Phone 2: Delivery Partner App */}
                                <div
                                    className="hero-editorial-phone-right"
                                    style={{
                                        width: '195px',
                                        background: 'var(--zy-surface-1)',
                                        borderRadius: '26px',
                                        padding: '7px',
                                        border: '2px solid var(--zy-border-subtle)',
                                        boxShadow:
                                            '0 25px 60px rgba(0,0,0,0.35)',
                                        transform: 'rotate(2deg)',
                                        transition: 'all 0.3s ease',
                                        zIndex: 4,
                                        cursor: 'pointer',
                                        position: 'relative',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform =
                                            'rotate(0deg) scale(1.06) translateY(-8px)';
                                        e.currentTarget.style.zIndex = '6';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform =
                                            'rotate(2deg) scale(1) translateY(0)';
                                        e.currentTarget.style.zIndex = '4';
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: '#F59E0B',
                                            color: '#ffffff',
                                            fontSize: '8.5px',
                                            fontWeight: 800,
                                            padding: '2px 8px',
                                            borderRadius: '10px',
                                            whiteSpace: 'nowrap',
                                            zIndex: 10,
                                            boxShadow:
                                                '0 4px 10px rgba(245, 158, 11, 0.4)',
                                            letterSpacing: '0.03em',
                                        }}
                                    >
                                        🛵 PARTNER & RIDER
                                    </div>
                                    <div
                                        style={{
                                            width: '50px',
                                            height: '4px',
                                            background:
                                                'var(--zy-border-subtle)',
                                            borderRadius: '10px',
                                            margin: '3px auto 6px',
                                        }}
                                    />
                                    <div
                                        style={{
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            background: '#000000',
                                        }}
                                    >
                                        <img
                                            src={
                                                project.secondMobileImage ||
                                                '/assets/products/grocery-mart/WhatsApp Image 2026-09-27 at 1.42.06 AM.jpeg'
                                            }
                                            alt="Delivery Partner and Rider App"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                maxHeight: '395px',
                                                objectFit: 'contain',
                                                display: 'block',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="hero-editorial-mobile-frame"
                                style={{
                                    position: 'absolute',
                                    right: '-20px',
                                    bottom: '-95px',
                                    width: '215px',
                                    background: 'var(--zy-surface-1)',
                                    borderRadius: '28px',
                                    padding: '8px',
                                    border: '2px solid var(--zy-border-subtle)',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                                    transform: 'rotate(-2.5deg)',
                                    transition: 'transform 0.3s ease',
                                    zIndex: 3,
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.transform =
                                        'rotate(0deg) scale(1.03)')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.transform =
                                        'rotate(-2.5deg) scale(1)')
                                }
                            >
                                {/* Phone Notch */}
                                <div
                                    style={{
                                        width: '60px',
                                        height: '5px',
                                        background: 'var(--zy-border-subtle)',
                                        borderRadius: '10px',
                                        margin: '4px auto 8px',
                                    }}
                                />
                                <div
                                    style={{
                                        borderRadius: '18px',
                                        overflow: 'hidden',
                                        background: '#000000',
                                    }}
                                >
                                    <img
                                        src={project.mobileImage}
                                        alt="Mobile companion app"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            maxHeight: '445px',
                                            objectFit: 'contain',
                                            display: 'block',
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .hero-editorial-mobile-frame {
                        bottom: -110px !important;
                    }
                    .hero-editorial-dual-phones {
                        bottom: -110px !important;
                        right: 0px !important;
                    }
                    .hero-editorial-phone-left {
                        width: 155px !important;
                        margin-right: -35px !important;
                    }
                    .hero-editorial-phone-right {
                        width: 165px !important;
                    }
                    .hero-editorial-section {
                        padding-bottom: 145px !important;
                    }
                }
                @media (max-width: 640px) {
                    .hero-editorial-mobile-frame {
                        bottom: -125px !important;
                        right: -5px !important;
                        width: 195px !important;
                    }
                    .hero-editorial-dual-phones {
                        bottom: -125px !important;
                        right: -5px !important;
                    }
                    .hero-editorial-phone-left {
                        width: 140px !important;
                        margin-right: -30px !important;
                    }
                    .hero-editorial-phone-right {
                        width: 150px !important;
                    }
                    .hero-editorial-section {
                        padding-bottom: 160px !important;
                    }
                }
                    .hero-editorial-actions {
                        gap: 8px !important;
                    }
                    .editorial-btn-launch {
                        padding: 9px 16px !important;
                        font-size: 12px !important;
                        gap: 6px !important;
                        border-radius: 24px !important;
                    }
                    .editorial-btn-launch svg {
                        width: 13px !important;
                        height: 13px !important;
                    }
                    .editorial-btn-play {
                        padding: 9px 14px !important;
                        font-size: 12px !important;
                        gap: 6px !important;
                        border-radius: 24px !important;
                    }
                    .editorial-btn-play svg {
                        width: 14px !important;
                        height: 14px !important;
                    }
                }
            `}</style>
        </section>
    );
}
