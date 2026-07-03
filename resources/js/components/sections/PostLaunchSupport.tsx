import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import GradientCard from '@/components/ui/GradientCard';

export default function PostLaunchSupport({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const features = [
        {
            title: '24/7 Monitoring',
            desc: 'Automated alerts and DevOps engineers on standby ensuring 99.9% uptime.',
            icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>,
            color: '#ef4444' // Red/Orange for heartbeat/monitoring
        },
        {
            title: 'Continuous Updates',
            desc: 'Regular security patches, library upgrades, and performance tuning.',
            icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>,
            color: '#3b82f6' // Blue for updates/refresh
        },
        {
            title: 'Feature Evolution',
            desc: 'A dedicated team available to build new features as your business scales.',
            icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
            color: '#10b981' // Green for growth/scaling
        }
    ];

    return (
        <section className="zy-section" style={{ background: isLight ? '#FFFFFF' : 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label" style={{ color: '#ef4444', opacity: 1 }}>Long-Term Partnership</span>
                <h2 className="zy-section-title" style={{ color: isLight ? '#000' : 'var(--zy-white)' }}>Post-Launch Support SLAs</h2>
                <p style={{ color: isLight ? '#555' : 'var(--zy-gray-text)', fontSize: 18, maxWidth: 700, margin: '0 auto 64px', lineHeight: 1.6 }}>
                    Our relationship doesn't end at deployment. We provide enterprise-grade support to ensure your product remains secure, fast, and scalable.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
                    {features.map((feature, i) => (
                        <div key={i} className="support-card-wrapper" style={{ transition: 'transform 0.3s' }}>
                            <GradientCard themeColor={feature.color} style={{ height: '100%', background: isLight ? '#fdfdfd' : 'var(--zy-gray-card)', boxShadow: isLight ? '0 10px 30px rgba(0,0,0,0.03)' : '0 10px 30px rgba(0,0,0,0.3)' }}>
                                <div style={{ padding: '40px 32px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ 
                                        width: 72, height: 72, borderRadius: '50%', 
                                        background: `color-mix(in srgb, ${feature.color} 15%, transparent)`, 
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: feature.color, marginBottom: 24,
                                        border: `1px solid ${feature.color}40`,
                                        boxShadow: `0 0 20px ${feature.color}20`
                                    }}>
                                        {feature.icon}
                                    </div>
                                    <h3 style={{ fontSize: 22, color: isLight ? '#000' : 'var(--zy-white)', fontWeight: 800, marginBottom: 16, fontFamily: 'var(--font-heading)' }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{ color: isLight ? '#666' : 'var(--zy-gray-text)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                                        {feature.desc}
                                    </p>
                                </div>
                            </GradientCard>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .support-card-wrapper:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </section>
    );
}
