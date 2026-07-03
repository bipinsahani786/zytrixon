import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import GradientCard from '@/components/ui/GradientCard';

export default function ValueProposition({ service, location }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const features = [
        { title: 'Scalable Architecture', desc: 'Built to handle millions of users effortlessly with cloud-native infrastructure.', color: '#3b82f6' },
        { title: 'Security First', desc: 'Bank-grade security protocols implemented from day one to protect your data.', color: '#10b981' },
        { title: 'Lightning Fast', desc: 'Optimized for raw speed, consistently scoring 99+ on Google Lighthouse.', color: '#eab308' },
        { title: 'AI-Powered', desc: 'Leveraging the latest artificial intelligence models to streamline your processes.', color: '#ec4899' },
        { title: 'Dedicated Support', desc: 'A dedicated technical account manager assigned specifically to your project.', color: '#8b5cf6' },
        { title: 'Transparent Pricing', desc: 'Absolutely no hidden fees. You get exactly what you pay for with clear deliverables.', color: '#06b6d4' }
    ];

    return (
        <section className="zy-section" style={{ background: isLight ? '#FFFFFF' : 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label" style={{ color: '#3b82f6', opacity: 1 }}>WHY CHOOSE US</span>
                <h2 className="zy-section-title" style={{ color: isLight ? '#000' : 'var(--zy-white)', marginBottom: 24 }}>
                    Unmatched Quality in {service?.title || 'Web Development'}
                </h2>
                <p style={{ color: isLight ? '#555' : 'var(--zy-gray-text)', fontSize: 18, maxWidth: 700, margin: '0 auto 64px', lineHeight: 1.6 }}>
                    We don't just write code. We architect scalable, secure, and beautiful digital experiences that drive real business growth.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
                    {features.map((feature, i) => (
                        <div key={i} className="value-prop-card" style={{ transition: 'transform 0.3s' }}>
                            <GradientCard themeColor={feature.color} style={{ textAlign: 'left', height: '100%', background: isLight ? '#fdfdfd' : 'var(--zy-gray-card)', boxShadow: isLight ? '0 10px 30px rgba(0,0,0,0.03)' : 'none' }}>
                                <div style={{ padding: '32px 32px 40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ 
                                        color: feature.color, marginBottom: 24, 
                                        width: 48, height: 48, borderRadius: '50%', 
                                        background: `color-mix(in srgb, ${feature.color} 15%, transparent)`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', color: isLight ? '#000' : 'var(--zy-white)', fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{feature.title}</h3>
                                    <p style={{ color: isLight ? '#666' : 'var(--zy-gray-text)', fontSize: 15, lineHeight: 1.6, fontWeight: 500, margin: 0 }}>{feature.desc}</p>
                                </div>
                            </GradientCard>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .value-prop-card:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </section>
    );
}
