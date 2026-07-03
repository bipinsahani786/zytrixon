import React from 'react';
import GradientCard from '@/components/ui/GradientCard';
import { useTheme } from '@/components/landing/theme-provider';
import { getServiceConfig } from '@/lib/service-data';

export default function SecurityStandards({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;
    const badges = config.security.badges;

    return (
        <section className="zy-section" style={{ background: isLight ? '#fdfdfd' : 'var(--zy-black)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <span className="zy-section-label" style={{ color: themeColor, opacity: 1 }}>Enterprise Security</span>
                    <h2 className="zy-section-title" style={{ color: isLight ? '#000' : 'var(--zy-white)' }}>Military-Grade Protection</h2>
                    <p style={{ color: isLight ? '#555' : 'var(--zy-gray-text)', lineHeight: 1.8, fontSize: 18, marginBottom: 32, marginTop: 16 }}>
                        Security isn't a feature; it's the foundation. Every {service?.title || 'solution'} we deploy adheres to strict international compliance standards, ensuring your data is impenetrable.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {badges.map((item, i) => (
                            <li key={i} style={{ 
                                display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, 
                                color: isLight ? '#000' : 'var(--zy-white)', fontWeight: 700, fontSize: 16,
                                padding: '16px 20px', background: isLight ? '#fff' : 'rgba(255,255,255,0.02)',
                                borderRadius: 12, border: `1px solid ${isLight ? '#eee' : 'rgba(255,255,255,0.05)'}`,
                                boxShadow: isLight ? '0 4px 15px rgba(0,0,0,0.03)' : 'none'
                            }}>
                                <div style={{ 
                                    width: 32, height: 32, borderRadius: '50%', background: `color-mix(in srgb, ${themeColor} 20%, transparent)`, 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center' 
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={themeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: '1 1 400px', minHeight: 450, position: 'relative' }}>
                    <GradientCard themeColor={themeColor}>
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: 40, background: isLight ? '#f7f7f7' : 'transparent', borderRadius: 12 }}>
                            {/* Background Rings */}
                            <div style={{ position: 'absolute', width: 250, height: 250, borderRadius: '50%', border: `1px dashed ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`, animation: 'spin 20s linear infinite' }} />
                            <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', border: `1px dashed ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}`, animation: 'spin 25s linear infinite reverse' }} />
                            
                            {/* Glowing Center */}
                            <div style={{ position: 'absolute', width: 120, height: 120, background: themeColor, filter: 'blur(70px)', opacity: isLight ? 0.2 : 0.35 }} />

                            {/* Security Shield Icon Graphic */}
                            <div style={{ 
                                width: 140, height: 140, margin: '0 auto', 
                                background: isLight ? '#fff' : 'rgba(255,255,255,0.03)', 
                                border: `1px solid ${isLight ? '#ddd' : 'rgba(255,255,255,0.1)'}`, 
                                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                position: 'relative', zIndex: 2, backdropFilter: 'blur(10px)',
                                boxShadow: isLight ? `0 10px 40px color-mix(in srgb, ${themeColor} 15%, transparent)` : '0 10px 40px rgba(0,0,0,0.5)'
                            }}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={themeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    <path d="M12 8v4" />
                                    <path d="M12 16h.01" />
                                </svg>
                            </div>
                            
                            {/* Floating elements */}
                            <div style={{ 
                                position: 'absolute', top: 60, right: 40, padding: '10px 20px', 
                                background: isLight ? '#fff' : 'rgba(255,255,255,0.05)', borderRadius: 24, 
                                border: `1px solid ${isLight ? '#eee' : 'rgba(255,255,255,0.1)'}`, fontSize: 13, fontWeight: 700, 
                                color: '#22c55e', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', gap: 8,
                                boxShadow: isLight ? '0 4px 15px rgba(0,0,0,0.05)' : '0 4px 15px rgba(0,0,0,0.3)'
                            }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite', boxShadow: '0 0 10px #22c55e' }} /> SECURE
                            </div>
                            <div style={{ 
                                position: 'absolute', bottom: 60, left: 40, padding: '10px 20px', 
                                background: isLight ? '#fff' : 'rgba(255,255,255,0.05)', borderRadius: 24, 
                                border: `1px solid ${isLight ? '#eee' : 'rgba(255,255,255,0.1)'}`, fontSize: 13, fontWeight: 700, 
                                color: themeColor, backdropFilter: 'blur(5px)',
                                boxShadow: isLight ? '0 4px 15px rgba(0,0,0,0.05)' : '0 4px 15px rgba(0,0,0,0.3)'
                            }}>
                                {badges[0]}
                            </div>
                        </div>
                    </GradientCard>
                    <style>{`
                        @keyframes spin { 100% { transform: rotate(360deg); } }
                        @keyframes pulse { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
                    `}</style>
                </div>
            </div>
        </section>
    );
}
