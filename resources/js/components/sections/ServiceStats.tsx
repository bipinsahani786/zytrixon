import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { getServiceConfig } from '@/lib/service-data';

export default function ServiceStats({ service, location }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;

    // Use dynamic stats from config, plus a standard 4th stat
    const stats = [
        ...config.stats,
        {
            value: '24/7',
            label: location ? `Support in ${location.name}` : 'Global Support',
        },
    ];

    return (
        <section
            className="zy-section"
            style={{
                background: isLight ? '#f9fafb' : 'var(--zy-black)',
                borderBottom: `1px solid ${isLight ? '#e5e7eb' : 'rgba(255,255,255,0.05)'}`,
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 24,
                    textAlign: 'center',
                }}
            >
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '40px 24px',
                            background: isLight
                                ? '#fff'
                                : 'var(--zy-gray-card)',
                            borderRadius: 16,
                            border: isLight
                                ? '1px solid #eee'
                                : '1px solid rgba(255,255,255,0.05)',
                            boxShadow: isLight
                                ? '0 4px 20px rgba(0,0,0,0.02)'
                                : 'none',
                            transition: 'transform 0.3s',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                                'translateY(-5px)')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = 'translateY(0)')
                        }
                    >
                        <h3
                            style={{
                                fontSize: 48,
                                fontWeight: 900,
                                color: themeColor,
                                marginBottom: 12,
                                fontFamily: 'var(--font-heading)',
                            }}
                        >
                            {stat.value}
                        </h3>
                        <p
                            style={{
                                color: isLight ? '#666' : 'var(--zy-gray-text)',
                                fontSize: 14,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                margin: 0,
                            }}
                        >
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
