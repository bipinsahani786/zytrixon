import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function ValueProposition({ service, location }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label">WHY CHOOSE US</span>
                <h2 className="zy-section-title">
                    Unmatched Quality in {service.title}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
                    {[
                        { title: 'Scalable Architecture', desc: 'Built to handle millions of users effortlessly.' },
                        { title: 'Security First', desc: 'Bank-grade security protocols implemented from day one.' },
                        { title: 'Lightning Fast', desc: 'Optimized for speed, scoring 99+ on Google Lighthouse.' },
                        { title: 'AI-Powered', desc: 'Leveraging the latest AI to streamline processes.' },
                        { title: 'Dedicated Support', desc: 'A dedicated account manager for your project.' },
                        { title: 'Transparent Pricing', desc: 'No hidden fees. You get exactly what you pay for.' }
                    ].map((feature, i) => (
                        <div key={i} style={{ 
                            position: 'relative',
                            borderRadius: 8,
                            overflow: 'hidden',
                            padding: 1, // acts as border width
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '50%', left: '50%', width: '250%', height: '250%',
                                background: isLight 
                                    ? 'conic-gradient(from 0deg, transparent 75%, rgba(0,0,0,0.4) 95%, #000000 100%)'
                                    : 'conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.4) 95%, #ffffff 100%)',
                                animation: 'spinGradientCentered 4s linear infinite',
                                zIndex: 0,
                                opacity: 0.4
                            }} />
                            <div style={{
                                position: 'relative',
                                background: 'var(--zy-gray-card)',
                                padding: '32px',
                                borderRadius: 7,
                                zIndex: 1,
                                height: '100%'
                            }}>
                                <div style={{ color: 'var(--zy-white)', marginBottom: 24, opacity: 0.7 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--zy-white)', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{feature.title}</h3>
                                <p style={{ color: 'var(--zy-gray-text)', fontSize: 13, lineHeight: 1.6 }}>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
            `}</style>
        </section>
    );
}
