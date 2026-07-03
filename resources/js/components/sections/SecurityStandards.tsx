import React from 'react';
import GradientCard from '@/components/ui/GradientCard';

export default function SecurityStandards({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <span className="zy-section-label">Enterprise Security</span>
                    <h2 className="zy-section-title">Military-Grade Protection</h2>
                    <p style={{ color: 'var(--zy-gray-text)', lineHeight: 1.6, marginBottom: 24 }}>
                        Security isn't a feature; it's the foundation. Every {service?.title || 'solution'} we deploy adheres to strict international compliance standards, ensuring your data is impenetrable.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {['End-to-End Encryption (AES-256)', 'SOC 2 Type II Compliance', 'GDPR & HIPAA Readiness', 'Automated Penetration Testing'].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, color: 'var(--zy-white)', fontWeight: 600 }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--zy-blue)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <GradientCard themeColor="var(--zy-blue)" style={{ flex: '1 1 400px', minHeight: 350 }}>
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: 40 }}>
                        {/* Background Rings */}
                        <div style={{ position: 'absolute', width: 250, height: 250, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.1)', animation: 'spin 10s linear infinite' }} />
                        <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.05)', animation: 'spin 15s linear infinite reverse' }} />
                        
                        {/* Glowing Center */}
                        <div style={{ position: 'absolute', width: 100, height: 100, background: 'var(--zy-blue)', filter: 'blur(60px)', opacity: 0.3 }} />

                        {/* Security Shield Icon Graphic */}
                        <div style={{ width: 120, height: 120, margin: '0 auto', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, backdropFilter: 'blur(10px)' }}>
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--zy-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                <path d="M12 8v4" />
                                <path d="M12 16h.01" />
                            </svg>
                        </div>
                        
                        {/* Floating elements */}
                        <div style={{ position: 'absolute', top: 50, right: 60, padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', fontSize: 12, fontWeight: 700, color: '#22c55e', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} /> SECURE
                        </div>
                        <div style={{ position: 'absolute', bottom: 50, left: 60, padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', fontSize: 12, fontWeight: 700, color: 'var(--zy-blue)', backdropFilter: 'blur(5px)' }}>
                            AES-256
                        </div>
                    </div>
                    <style>{`
                        @keyframes spin { 100% { transform: rotate(360deg); } }
                        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
                    `}</style>
                </GradientCard>
            </div>
        </section>
    );
}
