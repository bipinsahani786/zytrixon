import { Head, Link } from '@inertiajs/react';
import React from 'react';
import ClientsSection from '@/components/landing/clients-section';
import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import InnerPageHero from '@/components/landing/inner-page-hero';
import Navbar from '@/components/landing/navbar';
import TechStackSection from '@/components/landing/tech-stack-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import { ThemeProvider } from '@/components/landing/theme-provider';
import GradientCard from '@/components/ui/GradientCard';

const getServiceMeta = (slug: string) => {
    switch (slug) {
        case 'web-development':
            return {
                color: '#3b82f6', // blue
                icon: (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="2" y1="7" x2="22" y2="7" />
                        <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                        <circle cx="7.5" cy="5" r="0.5" fill="currentColor" />
                        <circle cx="10" cy="5" r="0.5" fill="currentColor" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                ),
            };
        case 'app-development':
            return {
                color: '#ec4899', // pink
                icon: (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <rect x="5" y="2" width="14" height="20" rx="2" />
                        <line
                            x1="12"
                            y1="18"
                            x2="12"
                            y2="18.01"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                ),
            };
        case 'iot-solutions':
            return {
                color: '#10b981', // emerald
                icon: (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M4.93 4.93a10 10 0 0114.14 0" />
                        <path d="M7.76 7.76a6 6 0 018.48 0" />
                        <path d="M4.93 19.07a10 10 0 010-14.14" />
                        <path d="M19.07 4.93a10 10 0 010 14.14" />
                    </svg>
                ),
            };
        case 'ai-automation':
            return {
                color: '#a855f7', // purple
                icon: (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        <path d="M19 12a7 7 0 0 0-14 0" />
                    </svg>
                ),
            };
        case 'custom-software':
            return {
                color: '#f59e0b', // amber
                icon: (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                ),
            };
        case 'digital-marketing':
        case 'seo-digital-marketing':
            return {
                color: '#6366f1', // indigo
                icon: (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M18 20V10" />
                        <path d="M12 20V4" />
                        <path d="M6 20v-6" />
                    </svg>
                ),
            };
        default:
            return {
                color: '#3b82f6',
                icon: (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                ),
            };
    }
};

export default function ServicesIndex({ services }: { services: any[] }) {
    return (
        <ThemeProvider>
            <Head>
                <title>Our Services - Zytrixon Tech</title>
                <meta
                    name="description"
                    content="Explore our enterprise-grade services including Web Development, App Development, AI & Automation, and more."
                />
            </Head>
            <CustomCursor />
            <Navbar />

            <main
                style={{
                    minHeight: '100vh',
                    background: 'var(--zy-black)',
                    color: 'var(--zy-white)',
                }}
            >
                <InnerPageHero
                    title="What We Build"
                    subtitle="Enterprise-grade digital solutions designed to scale and dominate the market."
                />

                <div
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                        padding: '60px 24px 100px',
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: 32,
                    }}
                    className="bento-container"
                >
                    {services.map((service, index) => {
                        const meta = getServiceMeta(service.slug);

                        // Bento Box Logic:
                        // On desktop, 3 columns total.
                        // 0: span 2, 1: span 1
                        // 2: span 1, 3: span 2
                        // 4: span 2, 5: span 1
                        const isWide =
                            index === 0 || index === 3 || index === 4;

                        return (
                            <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                style={{
                                    textDecoration: 'none',
                                    display: 'block',
                                }}
                                className={`group bento-item ${isWide ? 'bento-wide' : ''}`}
                            >
                                <GradientCard
                                    themeColor={meta.color}
                                    style={{ height: '100%' }}
                                >
                                    <div
                                        style={{
                                            padding: 48,
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: isWide
                                                ? 'row'
                                                : 'column',
                                            alignItems: isWide
                                                ? 'center'
                                                : 'flex-start',
                                            gap: isWide ? 48 : 0,
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                        className="bento-inner"
                                    >
                                        {/* Faint Background Icon Watermark */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: isWide ? '50%' : -20,
                                                right: isWide ? 40 : -20,
                                                transform: isWide
                                                    ? 'translateY(-50%) scale(8)'
                                                    : 'scale(5)',
                                                color: meta.color,
                                                opacity: 0.03,
                                                pointerEvents: 'none',
                                            }}
                                            className="bento-watermark"
                                        >
                                            {meta.icon}
                                        </div>

                                        <div
                                            style={{
                                                flex: 1,
                                                position: 'relative',
                                                zIndex: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: '100%',
                                            }}
                                        >
                                            {!isWide && (
                                                <div
                                                    style={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: 16,
                                                        background: `${meta.color}20`,
                                                        color: meta.color,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        marginBottom: 32,
                                                        border: `1px solid ${meta.color}40`,
                                                        transition:
                                                            'all 0.3s var(--zy-ease)',
                                                        position: 'relative',
                                                        zIndex: 1,
                                                    }}
                                                    className="icon-container"
                                                >
                                                    {meta.icon}
                                                </div>
                                            )}

                                            <h3
                                                style={{
                                                    fontSize: isWide ? 32 : 26,
                                                    fontWeight: 700,
                                                    color: 'var(--zy-white)',
                                                    marginBottom: 16,
                                                    fontFamily:
                                                        'var(--font-heading)',
                                                    position: 'relative',
                                                    zIndex: 1,
                                                }}
                                            >
                                                {service.title}
                                            </h3>
                                            <p
                                                style={{
                                                    color: 'var(--zy-gray-text)',
                                                    lineHeight: 1.6,
                                                    marginBottom: 40,
                                                    fontSize: isWide ? 16 : 15,
                                                    flex: 1,
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    maxWidth: isWide
                                                        ? '80%'
                                                        : '100%',
                                                }}
                                            >
                                                {service.description}
                                            </p>

                                            <div
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: 12,
                                                    color: meta.color,
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    fontSize: 13,
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    marginTop: 'auto',
                                                }}
                                            >
                                                Explore Service
                                                <div
                                                    style={{
                                                        width: 32,
                                                        height: 32,
                                                        borderRadius: '50%',
                                                        background: `${meta.color}20`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        transition:
                                                            'transform 0.3s var(--zy-ease)',
                                                    }}
                                                    className="arrow-container"
                                                >
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <line
                                                            x1="5"
                                                            y1="12"
                                                            x2="19"
                                                            y2="12"
                                                        ></line>
                                                        <polyline points="12 5 19 12 12 19"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {isWide && (
                                            <div
                                                style={{
                                                    width: 120,
                                                    height: 120,
                                                    borderRadius: 24,
                                                    background: `${meta.color}10`,
                                                    color: meta.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    border: `1px solid ${meta.color}30`,
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    boxShadow: `0 0 40px ${meta.color}20`,
                                                    transition:
                                                        'all 0.3s var(--zy-ease)',
                                                }}
                                                className="icon-container-large hide-on-mobile"
                                            >
                                                <div
                                                    style={{
                                                        transform: 'scale(1.8)',
                                                    }}
                                                >
                                                    {meta.icon}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </GradientCard>
                            </Link>
                        );
                    })}
                </div>

                <style>{`
                    @media (min-width: 992px) {
                        .bento-container {
                            grid-template-columns: repeat(3, 1fr) !important;
                        }
                        .bento-wide {
                            grid-column: span 2;
                        }
                    }
                    @media (max-width: 991px) {
                        .bento-inner {
                            flex-direction: column !important;
                            align-items: flex-start !important;
                            gap: 0 !important;
                        }
                        .hide-on-mobile {
                            display: none !important;
                        }
                        .bento-watermark {
                            top: -20px !important;
                            right: -20px !important;
                            transform: scale(5) !important;
                        }
                    }

                    .group:hover .icon-container, .group:hover .icon-container-large {
                        transform: scale(1.05) translateY(-5px);
                        box-shadow: 0 10px 30px rgba(0,0,0,0.4);
                    }
                    .group:hover .arrow-container {
                        transform: translateX(10px);
                    }
                `}</style>

                <TechStackSection />
                <ClientsSection />
                <CoreValuesSection />
                <TestimonialsSection />
                <FooterCTA />
                <ContactSection />
            </main>

            <Footer />
        </ThemeProvider>
    );
}
