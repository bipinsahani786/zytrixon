import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import GradientCard from '@/components/ui/GradientCard';

export default function MigrationStrategy({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const steps = [
        {
            title: 'Data Mapping & Backup',
            desc: 'We secure and map your existing data to the new architecture.',
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
            ),
            color: '#3b82f6',
        },
        {
            title: 'Parallel Run Testing',
            desc: 'Both systems run simultaneously to ensure zero data loss.',
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            ),
            color: '#8b5cf6',
        },
        {
            title: 'Seamless Switchover',
            desc: 'Instant DNS routing cuts over traffic with zero downtime.',
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            ),
            color: '#10b981',
        },
    ];

    return (
        <section
            className="zy-section"
            style={{
                background: isLight ? '#fdfdfd' : 'var(--zy-black)',
                overflow: 'hidden',
            }}
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
                    style={{ color: '#10b981', opacity: 1 }}
                >
                    Zero Downtime
                </span>
                <h2
                    className="zy-section-title"
                    style={{ color: isLight ? '#000' : 'var(--zy-white)' }}
                >
                    Legacy Migration Strategy
                </h2>
                <p
                    style={{
                        color: isLight ? '#555' : 'var(--zy-gray-text)',
                        lineHeight: 1.8,
                        fontSize: 18,
                        maxWidth: 800,
                        margin: '0 auto 60px',
                    }}
                >
                    Moving from an old system? Our zero-downtime migration
                    protocols ensure your business operations never stop while
                    we upgrade your technology.
                </p>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="migration-flow"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            gap: 32,
                            flexWrap: 'wrap',
                        }}
                    >
                        {steps.map((step, i) => (
                            <React.Fragment key={i}>
                                <div
                                    style={{
                                        flex: '1 1 300px',
                                        maxWidth: 400,
                                        position: 'relative',
                                        marginTop: 15,
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: -15,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 30,
                                            height: 30,
                                            borderRadius: '50%',
                                            background: step.color,
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 800,
                                            fontSize: 14,
                                            boxShadow: `0 4px 10px ${step.color}60`,
                                            zIndex: 10,
                                        }}
                                    >
                                        {i + 1}
                                    </div>
                                    <GradientCard
                                        themeColor={step.color}
                                        style={{
                                            height: '100%',
                                            background: isLight
                                                ? '#fff'
                                                : 'var(--zy-gray-card)',
                                            boxShadow: isLight
                                                ? '0 10px 30px rgba(0,0,0,0.05)'
                                                : '0 10px 30px rgba(0,0,0,0.3)',
                                        }}
                                    >
                                        <div
                                            style={{
                                                padding: '32px 24px',
                                                textAlign: 'center',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                height: '100%',
                                                background: isLight
                                                    ? '#fff'
                                                    : 'var(--zy-gray-card)',
                                                borderRadius: 15,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 64,
                                                    height: 64,
                                                    borderRadius: '50%',
                                                    background: `color-mix(in srgb, ${step.color} 15%, transparent)`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: step.color,
                                                    marginBottom: 24,
                                                    border: `1px solid ${step.color}40`,
                                                    boxShadow: `0 0 20px ${step.color}20`,
                                                    marginTop: 8,
                                                }}
                                            >
                                                {step.icon}
                                            </div>
                                            <h3
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: 700,
                                                    color: isLight
                                                        ? '#000'
                                                        : 'var(--zy-white)',
                                                    marginBottom: 12,
                                                    fontFamily:
                                                        'var(--font-heading)',
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
                                                    margin: 0,
                                                }}
                                            >
                                                {step.desc}
                                            </p>
                                        </div>
                                    </GradientCard>
                                </div>
                                {i < steps.length - 1 && (
                                    <div
                                        className="migration-arrow"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: isLight
                                                ? '#ccc'
                                                : 'rgba(255,255,255,0.1)',
                                        }}
                                    >
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
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
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 950px) {
                    .migration-arrow {
                        transform: rotate(90deg);
                    }
                    .migration-flow {
                        flex-direction: column;
                    }
                }
            `}</style>
        </section>
    );
}
