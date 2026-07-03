import React from 'react';
import GradientCard from '@/components/ui/GradientCard';
import { useTheme } from '@/components/landing/theme-provider';
import { getServiceConfig } from '@/lib/service-data';

const TIERS = [
    {
        name: 'Client Tier',
        desc: 'Web & Mobile Apps',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
        color: '#3b82f6'
    },
    {
        name: 'API Gateway',
        desc: 'Routing & Security',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        color: '#8b5cf6'
    },
    {
        name: 'Microservices',
        desc: 'Business Logic',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
        color: '#ec4899'
    },
    {
        name: 'Data Layer',
        desc: 'Storage & Caching',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
        color: '#10b981'
    }
];

export default function TechnicalArchitecture({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;
    const dynamicSteps = config.architecture.steps;

    return (
        <section className="zy-section" style={{ background: isLight ? '#FFFFFF' : 'var(--zy-black)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: 1, background: `linear-gradient(90deg, transparent, ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}, transparent)`, zIndex: 0 }} />
            
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <span className="zy-section-label" style={{ color: themeColor, opacity: 1 }}>{config.architecture.title}</span>
                <h2 className="zy-section-title" style={{ color: isLight ? '#000' : 'var(--zy-white)' }}>Technical Architecture Flow</h2>
                <p style={{ color: isLight ? '#555' : 'var(--zy-gray-text)', marginBottom: 80, fontSize: 18 }}>Our highly optimized pipeline ensures infinite scalability and absolute resilience.</p>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                    {TIERS.map((tier, i) => (
                        <React.Fragment key={i}>
                            <div className="arch-card-wrapper" style={{ transition: 'transform 0.3s' }}>
                                <GradientCard themeColor={tier.color} style={{ width: 240, background: isLight ? '#fdfdfd' : 'var(--zy-gray-card)', boxShadow: isLight ? '0 15px 35px rgba(0,0,0,0.05)' : '0 15px 35px rgba(0,0,0,0.4)' }}>
                                    <div style={{ padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                        <div style={{ 
                                            width: 72, height: 72, borderRadius: '50%', 
                                            background: `color-mix(in srgb, ${tier.color} 15%, transparent)`, 
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                            color: tier.color, marginBottom: 24,
                                            boxShadow: `0 0 20px ${tier.color}33`,
                                            border: `1px solid ${tier.color}40`
                                        }}>
                                            {tier.icon}
                                        </div>
                                        <h3 style={{ fontSize: 18, color: isLight ? '#000' : 'var(--zy-white)', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 12 }}>
                                            {dynamicSteps[i] || tier.name}
                                        </h3>
                                        <p style={{ fontSize: 13, color: isLight ? '#666' : 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                                            {tier.desc}
                                        </p>
                                    </div>
                                </GradientCard>
                            </div>

                            {i < TIERS.length - 1 && (
                                <div className="arch-connector" style={{ display: 'flex', alignItems: 'center', color: isLight ? '#ccc' : 'rgba(255,255,255,0.2)' }}>
                                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                                        <line x1="0" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="flow-line" />
                                        <polyline points="32 6 38 12 32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes flowRight {
                    0% { stroke-dashoffset: 8; }
                    100% { stroke-dashoffset: 0; }
                }
                .flow-line {
                    animation: flowRight 0.5s linear infinite;
                }
                .arch-card-wrapper:hover {
                    transform: translateY(-10px);
                }
                @media (max-width: 1000px) {
                    .arch-connector {
                        transform: rotate(90deg);
                        margin: 20px 0;
                    }
                }
            `}</style>
        </section>
    );
}
