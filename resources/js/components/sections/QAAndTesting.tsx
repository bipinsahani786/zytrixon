import React, { useEffect, useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import GradientCard from '@/components/ui/GradientCard';
import { getServiceConfig } from '@/lib/service-data';

export default function QAAndTesting({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;
    const qa = config.qa;

    const tests = qa.items.map((item, idx) => ({
        name: item,
        time: idx === 3 ? 'Passed' : `${(Math.random() * 5 + 1).toFixed(1)}s`,
    }));

    return (
        <section
            className="zy-section"
            style={{
                background: isLight ? '#FFFFFF' : 'var(--zy-black)',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    display: 'flex',
                    gap: 80,
                    alignItems: 'center',
                    flexWrap: 'wrap-reverse',
                }}
            >
                {/* Premium Animated Terminal / Runner UI */}
                <div style={{ flex: '1 1 450px', position: 'relative' }}>
                    <GradientCard themeColor={themeColor}>
                        <div
                            style={{
                                background: isLight ? '#f7f7f7' : '#0C0C0C',
                                borderRadius: 16,
                                overflow: 'hidden',
                                boxShadow: isLight
                                    ? '0 20px 40px rgba(0,0,0,0.05)'
                                    : '0 20px 40px rgba(0,0,0,0.3)',
                                border: `1px solid ${isLight ? '#e0e0e0' : 'rgba(255,255,255,0.05)'}`,
                            }}
                        >
                            {/* Mac-like Header */}
                            <div
                                style={{
                                    padding: '16px 20px',
                                    borderBottom: `1px solid ${isLight ? '#e0e0e0' : 'rgba(255,255,255,0.05)'}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    background: isLight ? '#f0f0f0' : '#111111',
                                }}
                            >
                                <div
                                    style={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: '#ef4444',
                                    }}
                                />
                                <div
                                    style={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: '#eab308',
                                    }}
                                />
                                <div
                                    style={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: '#22c55e',
                                    }}
                                />
                                <span
                                    style={{
                                        marginLeft: 16,
                                        fontSize: 13,
                                        color: isLight ? '#666' : '#888',
                                        fontFamily: 'monospace',
                                    }}
                                >
                                    bash — pipeline/run-tests.sh
                                </span>
                            </div>

                            {/* Terminal Body */}
                            <div
                                style={{
                                    padding: 32,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20,
                                }}
                            >
                                {tests.map((test, i) => {
                                    // Make checks appear sequentially based on progress mock
                                    const isPassed = progress > i * 25;

                                    return (
                                        <div
                                            key={i}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: 16,
                                                borderRadius: 8,
                                                background: isLight
                                                    ? '#ffffff'
                                                    : 'rgba(255,255,255,0.02)',
                                                border: `1px solid ${isLight ? '#e0e0e0' : 'transparent'}`,
                                                transition: 'all 0.3s ease',
                                                boxShadow: isLight
                                                    ? '0 2px 10px rgba(0,0,0,0.02)'
                                                    : 'none',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 16,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 28,
                                                        height: 28,
                                                        borderRadius: '50%',
                                                        background: isPassed
                                                            ? `color-mix(in srgb, ${themeColor} 20%, transparent)`
                                                            : 'transparent',
                                                        border: `1px solid ${isPassed ? themeColor : isLight ? '#ccc' : '#444'}`,
                                                        color: themeColor,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        transition:
                                                            'all 0.3s ease',
                                                    }}
                                                >
                                                    {isPassed ? (
                                                        <svg
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="3"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    ) : (
                                                        <div
                                                            style={{
                                                                width: 6,
                                                                height: 6,
                                                                borderRadius:
                                                                    '50%',
                                                                background:
                                                                    isLight
                                                                        ? '#ccc'
                                                                        : '#444',
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                                <span
                                                    style={{
                                                        color: isLight
                                                            ? '#000'
                                                            : 'var(--zy-white)',
                                                        fontWeight: 600,
                                                        fontSize: 15,
                                                        fontFamily:
                                                            'var(--font-sans)',
                                                        opacity: isPassed
                                                            ? 1
                                                            : 0.5,
                                                    }}
                                                >
                                                    {test.name}
                                                </span>
                                            </div>
                                            <span
                                                style={{
                                                    color: isPassed
                                                        ? themeColor
                                                        : isLight
                                                          ? '#999'
                                                          : '#555',
                                                    fontSize: 13,
                                                    fontFamily: 'monospace',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {isPassed
                                                    ? test.time
                                                    : 'Waiting...'}
                                            </span>
                                        </div>
                                    );
                                })}

                                {/* Progress Bar */}
                                <div style={{ marginTop: 12 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: 8,
                                            fontSize: 13,
                                            color: isLight ? '#666' : '#888',
                                            fontFamily: 'monospace',
                                        }}
                                    >
                                        <span>Test Suite Progress</span>
                                        <span>
                                            {Math.min(
                                                100,
                                                Math.floor(
                                                    (progress / 100) * 100,
                                                ),
                                            )}
                                            %
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            height: 6,
                                            background: isLight
                                                ? '#e0e0e0'
                                                : '#222',
                                            borderRadius: 3,
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: '100%',
                                                width: `${progress}%`,
                                                background: themeColor,
                                                borderRadius: 3,
                                                boxShadow: `0 0 10px ${themeColor}80`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GradientCard>

                    {/* Decorative glowing orb behind */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '120%',
                            background: `radial-gradient(circle, color-mix(in srgb, ${themeColor} 10%, transparent) 0%, transparent 70%)`,
                            filter: 'blur(40px)',
                            zIndex: -1,
                            pointerEvents: 'none',
                        }}
                    />
                </div>

                <div style={{ flex: '1 1 400px' }}>
                    <span
                        className="zy-section-label"
                        style={{ color: themeColor, opacity: 1 }}
                    >
                        {qa.title}
                    </span>
                    <h2
                        className="zy-section-title"
                        style={{
                            fontSize: 'clamp(36px, 5vw, 48px)',
                            color: isLight ? '#000' : 'var(--zy-white)',
                        }}
                    >
                        Rigorous QA & Testing
                    </h2>
                    <p
                        style={{
                            color: isLight ? '#555' : 'var(--zy-gray-text)',
                            lineHeight: 1.8,
                            fontSize: 18,
                            marginTop: 24,
                        }}
                    >
                        A single bug in production can cost millions. Our QA
                        engineers work in parallel with developers to ensure
                        that every release is bulletproof. Automated CI/CD
                        pipelines run thousands of tests before any code hits
                        the live server.
                    </p>
                </div>
            </div>
        </section>
    );
}
