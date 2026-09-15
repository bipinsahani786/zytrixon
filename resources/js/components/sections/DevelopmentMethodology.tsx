import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import GradientCard from '@/components/ui/GradientCard';
import { getServiceConfig } from '@/lib/service-data';

export default function DevelopmentMethodology({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;
    const methodology = config.methodology;
    const steps = methodology.steps;

    return (
        <section
            className="zy-section"
            style={{ background: isLight ? '#f9fafb' : 'var(--zy-black)' }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    textAlign: 'center',
                }}
            >
                <span
                    className="zy-section-label"
                    style={{ color: themeColor, opacity: 1 }}
                >
                    {methodology.title}
                </span>
                <h2
                    className="zy-section-title"
                    style={{ color: isLight ? '#000' : 'var(--zy-white)' }}
                >
                    Development Methodology
                </h2>
                <p
                    style={{
                        color: isLight ? '#555' : 'var(--zy-gray-text)',
                        marginBottom: 60,
                        fontSize: 18,
                        maxWidth: 600,
                        margin: '0 auto 60px',
                    }}
                >
                    {methodology.desc}
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: 24,
                    }}
                >
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="methodology-card"
                            style={{ transition: 'transform 0.3s' }}
                        >
                            <GradientCard
                                themeColor={themeColor}
                                style={{
                                    height: '100%',
                                    background: isLight
                                        ? '#fff'
                                        : 'var(--zy-gray-card)',
                                    boxShadow: isLight
                                        ? '0 10px 30px rgba(0,0,0,0.03)'
                                        : 'none',
                                }}
                            >
                                <div
                                    style={{
                                        padding: '40px 32px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: 64,
                                            fontWeight: 900,
                                            color: isLight
                                                ? themeColor
                                                : themeColor,
                                            opacity: isLight ? 0.1 : 0.2,
                                            marginBottom: -30,
                                            textAlign: 'left',
                                            fontFamily: 'var(--font-heading)',
                                        }}
                                    >
                                        0{i + 1}
                                    </div>
                                    <div
                                        style={{
                                            position: 'relative',
                                            zIndex: 1,
                                            marginTop: 'auto',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <h3
                                            style={{
                                                fontSize: 20,
                                                color: isLight
                                                    ? '#000'
                                                    : 'var(--zy-white)',
                                                fontWeight: 800,
                                                fontFamily:
                                                    'var(--font-heading)',
                                                marginBottom: 12,
                                            }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            style={{
                                                color: isLight
                                                    ? '#666'
                                                    : 'var(--zy-gray-text)',
                                                fontSize: 15,
                                                lineHeight: 1.6,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </GradientCard>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .methodology-card:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </section>
    );
}
