import {
    Network,
    Cloud,
    Database,
    CreditCard,
    MessageSquare,
    Shield,
    Box,
    Code,
} from 'lucide-react';
import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { getServiceConfig } from '@/lib/service-data';

const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
        case 'payments':
            return <CreditCard size={24} />;
        case 'cloud':
        case 'hosting':
        case 'infrastructure':
            return <Cloud size={24} />;
        case 'database':
        case 'vector db':
            return <Database size={24} />;
        case 'communication':
        case 'email':
            return <MessageSquare size={24} />;
        case 'security':
        case 'sso':
            return <Shield size={24} />;
        case 'framework':
        case 'llm':
        case 'models':
            return <Code size={24} />;
        default:
            return <Network size={24} />;
    }
};

export default function IntegrationCapabilities({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;

    // We need enough items for the marquee to loop seamlessly.
    const baseItems = config.integrations;
    const marqueeItems = [
        ...baseItems,
        ...baseItems,
        ...baseItems,
        ...baseItems,
    ];

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
                    textAlign: 'center',
                    marginBottom: 40,
                }}
            >
                <span
                    className="zy-section-label"
                    style={{ color: themeColor, opacity: 1 }}
                >
                    Connected Ecosystem
                </span>
                <h2
                    className="zy-section-title"
                    style={{ color: isLight ? '#000' : 'var(--zy-white)' }}
                >
                    Integration Capabilities
                </h2>
                <p
                    style={{
                        color: isLight ? '#555' : 'var(--zy-gray-text)',
                        maxWidth: 600,
                        margin: '24px auto 0',
                        fontSize: 18,
                        lineHeight: 1.6,
                    }}
                >
                    We seamlessly connect your new {service?.title || 'system'}{' '}
                    with your existing enterprise tools, creating a unified
                    digital infrastructure.
                </p>
            </div>

            <div
                className="marquee-container"
                style={{
                    position: 'relative',
                    width: '100%',
                    padding: '20px 0',
                }}
            >
                <div
                    className="marquee-track"
                    style={{
                        display: 'flex',
                        gap: 24,
                        width: 'max-content',
                        animation: 'marqueeScroll 25s linear infinite',
                    }}
                >
                    {marqueeItems.map((tool, i) => (
                        <div
                            key={i}
                            style={
                                {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 16,
                                    padding: '24px 40px',
                                    minWidth: 250,
                                    background: isLight
                                        ? '#fdfdfd'
                                        : 'var(--zy-gray-card)',
                                    borderRadius: 16,
                                    border: `1px solid ${isLight ? '#eaeaea' : 'rgba(255,255,255,0.05)'}`,
                                    color: isLight ? '#000' : 'var(--zy-white)',
                                    fontWeight: 700,
                                    fontSize: 18,
                                    boxShadow: isLight
                                        ? '0 10px 30px rgba(0,0,0,0.02)'
                                        : '0 10px 30px rgba(0,0,0,0.2)',
                                    transition: 'all 0.3s ease',
                                    '--hover-border': themeColor,
                                    '--hover-shadow': `0 10px 40px color-mix(in srgb, ${themeColor} 25%, transparent)`,
                                } as any
                            }
                            className="integration-card"
                        >
                            <div style={{ color: themeColor }}>
                                {getIcon(tool.type)}
                            </div>
                            {tool.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade edges */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '15%',
                    background: `linear-gradient(to right, ${isLight ? '#FFF' : 'var(--zy-black)'}, transparent)`,
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: '15%',
                    background: `linear-gradient(to left, ${isLight ? '#FFF' : 'var(--zy-black)'}, transparent)`,
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />

            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .integration-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--hover-border) !important;
                    box-shadow: var(--hover-shadow) !important;
                }
            `}</style>
        </section>
    );
}
