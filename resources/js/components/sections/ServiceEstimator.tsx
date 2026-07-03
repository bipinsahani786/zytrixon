import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function ServiceEstimator({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    // Estimator state
    const [projectSize, setProjectSize] = useState('medium');
    const [timeline, setTimeline] = useState('flexible');
    const [complexity, setComplexity] = useState('standard');

    const calculateEstimate = () => {
        let base = service?.slug === 'ai-automation' ? 10000 : 5000;
        let multiplier = 1;

        if (projectSize === 'large') multiplier *= 2.5;
        if (projectSize === 'enterprise') multiplier *= 5;

        if (timeline === 'rush') multiplier *= 1.5;

        if (complexity === 'high') multiplier *= 1.8;
        if (complexity === 'custom') multiplier *= 3;

        const low = Math.round((base * multiplier) * 0.8);
        const high = Math.round((base * multiplier) * 1.2);

        return `$${low.toLocaleString()} - $${high.toLocaleString()}`;
    };

    return (
        <section className="zy-section" style={{ background: isLight ? '#FFFFFF' : 'var(--zy-black)', position: 'relative' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label" style={{ color: '#6366f1', opacity: 1 }}>Transparent Pricing</span>
                <h2 className="zy-section-title" style={{ color: isLight ? '#000' : 'var(--zy-white)' }}>
                    Interactive Project Estimator
                </h2>
                <p style={{ color: isLight ? '#555' : 'var(--zy-gray-text)', marginBottom: 60, fontSize: 18 }}>
                    Tell us about your requirements and get an instant ballpark estimate for your {service?.title || 'project'}. No emails required.
                </p>

                {/* The Animated Border Container */}
                <div style={{
                    position: 'relative',
                    borderRadius: 16,
                    overflow: 'hidden',
                    padding: 1, // acts as border width
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 800,
                    margin: '0 auto',
                    boxShadow: isLight ? '0 20px 50px rgba(0,0,0,0.08)' : '0 20px 40px rgba(0,0,0,0.4)'
                }}>
                    {/* Animated Electric Border */}
                    <div style={{
                        position: 'absolute',
                        top: '50%', left: '50%', width: '250%', height: '250%',
                        background: isLight 
                            ? 'conic-gradient(from 0deg, transparent 75%, rgba(99, 102, 241, 0.4) 95%, #6366f1 100%)'
                            : 'conic-gradient(from 0deg, transparent 75%, rgba(99, 102, 241, 0.4) 95%, #6366f1 100%)',
                        animation: 'spinGradientCentered 4s linear infinite',
                        zIndex: 0,
                    }} />

                    {/* Inner Card */}
                    <div style={{
                        position: 'relative',
                        borderRadius: 15,
                        background: isLight ? '#fdfdfd' : 'var(--zy-gray-dark)',
                        padding: '40px',
                        zIndex: 1,
                        textAlign: 'left'
                    }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
                            {/* Controls */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <div>
                                    <label style={{ display: 'block', color: isLight ? '#000' : 'var(--zy-white)', fontWeight: 600, marginBottom: 12 }}>Project Scope</label>
                                    <select 
                                        value={projectSize} 
                                        onChange={(e) => setProjectSize(e.target.value)}
                                        style={{ 
                                            width: '100%', padding: '14px 16px', borderRadius: 8, 
                                            background: isLight ? '#fff' : 'var(--zy-black)', 
                                            border: `1px solid ${isLight ? '#ddd' : 'rgba(255, 255, 255, 0.1)'}`, 
                                            color: isLight ? '#000' : 'var(--zy-white)', 
                                            outline: 'none', fontSize: 16, cursor: 'pointer',
                                            boxShadow: isLight ? '0 2px 10px rgba(0,0,0,0.02)' : 'none'
                                        }}
                                    >
                                        <option value="small">Small MVP / Prototype</option>
                                        <option value="medium">Medium Scale Application</option>
                                        <option value="large">Large Platform</option>
                                        <option value="enterprise">Enterprise Ecosystem</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: isLight ? '#000' : 'var(--zy-white)', fontWeight: 600, marginBottom: 12 }}>Technical Complexity</label>
                                    <select 
                                        value={complexity} 
                                        onChange={(e) => setComplexity(e.target.value)}
                                        style={{ 
                                            width: '100%', padding: '14px 16px', borderRadius: 8, 
                                            background: isLight ? '#fff' : 'var(--zy-black)', 
                                            border: `1px solid ${isLight ? '#ddd' : 'rgba(255, 255, 255, 0.1)'}`, 
                                            color: isLight ? '#000' : 'var(--zy-white)', 
                                            outline: 'none', fontSize: 16, cursor: 'pointer',
                                            boxShadow: isLight ? '0 2px 10px rgba(0,0,0,0.02)' : 'none'
                                        }}
                                    >
                                        <option value="standard">Standard Integrations</option>
                                        <option value="high">High (Machine Learning, Real-time)</option>
                                        <option value="custom">Extreme (Custom Protocols, Hardware)</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: isLight ? '#000' : 'var(--zy-white)', fontWeight: 600, marginBottom: 12 }}>Timeline Required</label>
                                    <select 
                                        value={timeline} 
                                        onChange={(e) => setTimeline(e.target.value)}
                                        style={{ 
                                            width: '100%', padding: '14px 16px', borderRadius: 8, 
                                            background: isLight ? '#fff' : 'var(--zy-black)', 
                                            border: `1px solid ${isLight ? '#ddd' : 'rgba(255, 255, 255, 0.1)'}`, 
                                            color: isLight ? '#000' : 'var(--zy-white)', 
                                            outline: 'none', fontSize: 16, cursor: 'pointer',
                                            boxShadow: isLight ? '0 2px 10px rgba(0,0,0,0.02)' : 'none'
                                        }}
                                    >
                                        <option value="flexible">Flexible (3-6 Months)</option>
                                        <option value="rush">Rush (1-2 Months)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Result */}
                            <div style={{ 
                                background: isLight ? '#f0f4f8' : 'var(--zy-black)', 
                                borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column', 
                                justifyContent: 'center', alignItems: 'center', 
                                border: `1px solid ${isLight ? '#e0e7ff' : 'rgba(99, 102, 241, 0.2)'}` 
                            }}>
                                <div style={{ color: isLight ? '#6366f1' : 'var(--zy-gray-text)', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, marginBottom: 16 }}>Estimated Budget</div>
                                <div style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 900, color: '#6366f1', marginBottom: 24, fontFamily: 'var(--font-heading)' }}>
                                    {calculateEstimate()}
                                </div>
                                <button className="zy-btn-primary" style={{ width: '100%', padding: '16px', fontSize: 16, background: '#6366f1', borderColor: '#6366f1', color: '#fff', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)' }}>Lock This Estimate</button>
                                <p style={{ color: isLight ? '#888' : 'var(--zy-gray-text)', fontSize: 12, marginTop: 16, textAlign: 'center' }}>
                                    *This is a ballpark estimate. Final cost will be determined after discovery phase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
            `}</style>
        </section>
    );
}
