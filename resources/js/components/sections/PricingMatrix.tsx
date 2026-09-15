import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function PricingMatrix({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            className="zy-section"
            style={{
                background: isLight ? '#f9fafb' : 'var(--zy-black)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Glow */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 800,
                    height: 400,
                    background: '#6366f1',
                    filter: 'blur(200px)',
                    opacity: isLight ? 0.05 : 0.1,
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <span
                    className="zy-section-label"
                    style={{ color: '#6366f1', opacity: 1 }}
                >
                    Pricing
                </span>
                <h2
                    className="zy-section-title"
                    style={{
                        color: isLight ? '#000' : 'var(--zy-white)',
                        marginBottom: 16,
                    }}
                >
                    Transparent Engagement Models
                </h2>
                <p
                    style={{
                        color: isLight ? '#555' : 'var(--zy-gray-text)',
                        fontSize: 18,
                        maxWidth: 700,
                        margin: '0 auto 64px',
                        lineHeight: 1.6,
                    }}
                >
                    Choose the engagement model that best fits your project's
                    scope, timeline, and flexibility requirements.
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 32,
                        alignItems: 'center',
                    }}
                >
                    {[
                        {
                            name: 'Fixed Price',
                            price: 'Custom Quote',
                            desc: 'Best for well-defined projects with clear scopes.',
                            features: [
                                'Defined Scope',
                                'Strict Deadline',
                                'Fixed Budget',
                                'Dedicated PM',
                            ],
                        },
                        {
                            name: 'Dedicated Team',
                            price: 'Monthly Retainer',
                            desc: 'Hire our elite engineers to work exclusively for you.',
                            features: [
                                'Flexible Scope',
                                'Direct Communication',
                                'Agile Sprints',
                                'Full Control',
                            ],
                            highlighted: true,
                        },
                        {
                            name: 'Time & Material',
                            price: 'Hourly Rate',
                            desc: 'Best for dynamic projects requiring ongoing changes.',
                            features: [
                                'Pay As You Go',
                                'Flexible Resources',
                                'Weekly Reports',
                                'Continuous Delivery',
                            ],
                        },
                    ].map((plan, i) => (
                        <div
                            key={i}
                            className="pricing-card-wrapper"
                            style={{
                                position: 'relative',
                                transform: plan.highlighted
                                    ? 'scale(1.05)'
                                    : 'none',
                                zIndex: plan.highlighted ? 2 : 1,
                                height: '100%',
                                transition: 'transform 0.3s',
                            }}
                        >
                            {plan.highlighted && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: -16,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background:
                                            'linear-gradient(90deg, #6366f1, #8b5cf6)',
                                        color: '#fff',
                                        padding: '6px 20px',
                                        borderRadius: 50,
                                        fontSize: 12,
                                        fontWeight: 800,
                                        letterSpacing: '0.1em',
                                        zIndex: 10,
                                        boxShadow:
                                            '0 5px 15px rgba(99, 102, 241, 0.4)',
                                    }}
                                >
                                    MOST POPULAR
                                </div>
                            )}
                            <div
                                style={{
                                    position: 'relative',
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                    padding: plan.highlighted ? 2 : 0, // 2px for the animated border
                                    height: '100%',
                                    boxShadow: isLight
                                        ? plan.highlighted
                                            ? '0 20px 40px rgba(99, 102, 241, 0.15)'
                                            : '0 10px 30px rgba(0,0,0,0.03)'
                                        : plan.highlighted
                                          ? '0 20px 40px rgba(99, 102, 241, 0.2)'
                                          : '0 10px 30px rgba(0,0,0,0.4)',
                                }}
                            >
                                {/* Animated Electric Border for highlighted plan */}
                                {plan.highlighted && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            width: '250%',
                                            height: '250%',
                                            background: isLight
                                                ? 'conic-gradient(from 0deg, transparent 75%, rgba(99, 102, 241, 0.4) 95%, #6366f1 100%)'
                                                : 'conic-gradient(from 0deg, transparent 75%, rgba(99, 102, 241, 0.4) 95%, #8b5cf6 100%)',
                                            animation:
                                                'spinGradientCentered 4s linear infinite',
                                            zIndex: 0,
                                        }}
                                    />
                                )}
                                <div
                                    style={{
                                        position: 'relative',
                                        background: isLight
                                            ? '#fff'
                                            : plan.highlighted
                                              ? '#1a1b23'
                                              : 'var(--zy-gray-card)',
                                        padding: '48px 40px',
                                        borderRadius: plan.highlighted
                                            ? 14
                                            : 16,
                                        border: plan.highlighted
                                            ? 'none'
                                            : `1px solid ${isLight ? '#eee' : 'rgba(255,255,255,0.05)'}`,
                                        color: isLight
                                            ? '#000'
                                            : 'var(--zy-white)',
                                        zIndex: 1,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: 22,
                                            fontWeight: 700,
                                            marginBottom: 12,
                                            fontFamily: 'var(--font-heading)',
                                        }}
                                    >
                                        {plan.name}
                                    </h3>
                                    <div
                                        style={{
                                            fontSize: 32,
                                            fontWeight: 900,
                                            marginBottom: 16,
                                            color: plan.highlighted
                                                ? '#6366f1'
                                                : isLight
                                                  ? '#000'
                                                  : 'var(--zy-white)',
                                        }}
                                    >
                                        {plan.price}
                                    </div>
                                    <p
                                        style={{
                                            color: isLight
                                                ? '#666'
                                                : 'var(--zy-gray-text)',
                                            marginBottom: 32,
                                            fontSize: 15,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {plan.desc}
                                    </p>

                                    <ul
                                        style={{
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: '0 0 40px',
                                            textAlign: 'left',
                                            flex: 1,
                                        }}
                                    >
                                        {plan.features.map((f, j) => (
                                            <li
                                                key={j}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 12,
                                                    marginBottom: 16,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 24,
                                                        height: 24,
                                                        borderRadius: '50%',
                                                        background:
                                                            plan.highlighted
                                                                ? 'rgba(99, 102, 241, 0.1)'
                                                                : isLight
                                                                  ? '#f3f4f6'
                                                                  : 'rgba(255,255,255,0.05)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke={
                                                            plan.highlighted
                                                                ? '#6366f1'
                                                                : isLight
                                                                  ? '#000'
                                                                  : 'var(--zy-white)'
                                                        }
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                                <span
                                                    style={{
                                                        fontWeight: 600,
                                                        fontSize: 15,
                                                        color: isLight
                                                            ? '#333'
                                                            : '#ddd',
                                                    }}
                                                >
                                                    {f}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={
                                            plan.highlighted
                                                ? 'zy-btn-primary'
                                                : 'zy-btn-outline'
                                        }
                                        style={Object.assign(
                                            {
                                                width: '100%',
                                                marginTop: 'auto',
                                                padding: '16px',
                                                fontSize: 16,
                                            },
                                            plan.highlighted
                                                ? {
                                                      background: '#6366f1',
                                                      borderColor: '#6366f1',
                                                      color: '#fff',
                                                      boxShadow:
                                                          '0 10px 20px rgba(99, 102, 241, 0.3)',
                                                  }
                                                : isLight
                                                  ? {
                                                        borderColor: '#ddd',
                                                        color: '#000',
                                                        background:
                                                            'transparent',
                                                    }
                                                  : {
                                                        borderColor:
                                                            'rgba(255,255,255,0.2)',
                                                        color: 'var(--zy-white)',
                                                        background:
                                                            'transparent',
                                                    },
                                        )}
                                    >
                                        Discuss Requirements
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
                .pricing-card-wrapper:hover {
                    transform: scale(1.02) !important;
                }
                .pricing-card-wrapper[style*="scale(1.05)"]:hover {
                    transform: scale(1.07) !important;
                }
                @media (max-width: 900px) {
                    .pricing-card-wrapper[style*="scale(1.05)"] {
                        transform: scale(1) !important;
                    }
                    .pricing-card-wrapper[style*="scale(1.05)"]:hover {
                        transform: scale(1.02) !important;
                    }
                }
            `}</style>
        </section>
    );
}
