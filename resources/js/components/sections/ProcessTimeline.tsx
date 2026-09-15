import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { getServiceConfig } from '@/lib/service-data';

export default function ProcessTimeline({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;
    const processSteps = config.process;

    return (
        <section
            className="zy-section"
            style={{ background: isLight ? '#FFFFFF' : 'var(--zy-black)' }}
        >
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <h2 className="zy-section-title">
                        How We Deliver {service?.title || 'Excellence'}
                    </h2>
                    <p
                        style={{
                            color: isLight ? '#666' : 'var(--zy-gray-text)',
                            marginTop: 16,
                        }}
                    >
                        A transparent, agile process guaranteed to yield
                        results.
                    </p>
                </div>

                <div style={{ position: 'relative' }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 32,
                            width: 2,
                            background: isLight
                                ? 'rgba(0,0,0,0.1)'
                                : 'rgba(255,255,255,0.05)',
                        }}
                    />

                    {processSteps.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                gap: 32,
                                marginBottom: 40,
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: '50%',
                                    background: themeColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    fontSize: 24,
                                    fontWeight: 800,
                                    zIndex: 1,
                                    flexShrink: 0,
                                    boxShadow: isLight
                                        ? `0 10px 25px color-mix(in srgb, ${themeColor} 40%, transparent)`
                                        : `0 0 25px color-mix(in srgb, ${themeColor} 30%, transparent)`,
                                }}
                            >
                                {`0${i + 1}`}
                            </div>
                            <div style={{ paddingTop: 12 }}>
                                <h3
                                    style={{
                                        color: isLight
                                            ? '#000'
                                            : 'var(--zy-white)',
                                        fontSize: 24,
                                        fontWeight: 700,
                                        marginBottom: 8,
                                        fontFamily: 'var(--font-heading)',
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    style={{
                                        color: isLight
                                            ? '#555'
                                            : 'var(--zy-gray-text)',
                                        fontSize: 16,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
