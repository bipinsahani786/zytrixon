import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

gsap.registerPlugin(ScrollTrigger);

interface MajorProductsSectionProps {
    hideHeader?: boolean;
    title?: string;
    subtitle?: string;
}

export default function MajorProductsSection({
    hideHeader = false,
    title = 'Our Major Products',
    subtitle = 'Production-ready proprietary platforms engineered from the ground up for high-scale enterprise operations.',
}: MajorProductsSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const products = [
        {
            id: 'mobile-crm',
            title: 'Mobile CRM',
            description:
                'Track business collections, custom billing invoices, party ledger payments, and customer accounts inside a clean, modern ecosystem.',
            badge: 'Billing & Retail CRM',
            image: '/assets/products/mobile-crm.png',
            accentColor: '#0EA5E9',
            inquiryMessage:
                'Hi Zytrixon, I would like to schedule a demo for the Mobile CRM product.',
        },
        {
            id: 'grocery-mart',
            title: 'Grocery Mart',
            description:
                'The intelligent retail dashboard. Access real-time billing logs, analytics, and stock records.',
            badge: 'Retail & Billing OS',
            image: '/assets/products/grocery-mart.png',
            accentColor: '#207393',
            inquiryMessage:
                'Hi Zytrixon, I would like to schedule a demo for the Grocery Mart platform.',
        },
    ];

    useEffect(() => {
        if (!sectionRef.current || !gridRef.current) {
            return;
        }

        const cards = gridRef.current.querySelectorAll('.product-card');

        const ctx = gsap.context(() => {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 88%',
                        once: true,
                    },
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="major-products"
            className="zy-section major-products-section"
            style={{
                position: 'relative',
                background: 'var(--zy-bg)',
                padding: '80px 0',
                overflow: 'hidden',
            }}
        >
            {/* Header Section */}
            {!hideHeader && (
                <div
                    className="zy-section-header"
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto 48px',
                        padding: '0 20px',
                    }}
                >
                    <span
                        className="zy-section-label"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '5px 14px',
                            borderRadius: '30px',
                            background: 'var(--zy-surface-2)',
                            border: '1px solid var(--zy-border-subtle)',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--zy-text-primary)',
                            marginBottom: '14px',
                        }}
                    >
                        <span
                            style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#38BDF8',
                                boxShadow: '0 0 8px #38BDF8',
                            }}
                        />
                        Proprietary IP
                    </span>

                    <h2
                        className="zy-section-title"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: '-0.02em',
                            color: 'var(--zy-text-primary)',
                            marginBottom: '14px',
                        }}
                    >
                        {title}
                    </h2>

                    <p
                        className="zy-section-subtitle"
                        style={{
                            fontSize: 'clamp(13.5px, 1.6vw, 15px)',
                            color: 'var(--zy-text-secondary)',
                            lineHeight: 1.5,
                            margin: '0 auto',
                        }}
                    >
                        {subtitle}
                    </p>
                </div>
            )}

            {/* 2-Grid Layout for the 2 Products */}
            <div
                ref={gridRef}
                className="major-products-grid"
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 20px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '28px',
                    alignItems: 'stretch',
                }}
            >
                {products.map((p) => (
                    <ProductCard key={p.id} {...p} />
                ))}
            </div>

            {/* Micro-animations and responsive CSS */}
            <style>{`
                .major-products-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 28px;
                }

                @media (max-width: 860px) {
                    .major-products-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }

                .product-card {
                    will-change: transform, box-shadow;
                }

                .product-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--zy-border-hover) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.28) !important;
                }

                .product-card:hover .product-card-img {
                    transform: scale(1.04);
                }

                .product-demo-btn:hover {
                    background: var(--zy-text-primary) !important;
                    color: var(--zy-bg) !important;
                    border-color: var(--zy-text-primary) !important;
                }
            `}</style>
        </section>
    );
}
