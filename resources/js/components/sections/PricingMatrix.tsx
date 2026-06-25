import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function PricingMatrix({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)', position: 'relative' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'var(--zy-blue)', filter: 'blur(200px)', opacity: 0.1, zIndex: 0 }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h2 className="zy-section-title" style={{ marginBottom: 60 }}>
                    Transparent Engagement Models
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
                    {[
                        { name: 'Fixed Price', price: 'Custom Quote', desc: 'Best for well-defined projects with clear scopes.', features: ['Defined Scope', 'Strict Deadline', 'Fixed Budget', 'Dedicated PM'] },
                        { name: 'Dedicated Team', price: 'Monthly Retainer', desc: 'Hire our elite engineers to work exclusively for you.', features: ['Flexible Scope', 'Direct Communication', 'Agile Sprints', 'Full Control'], highlighted: true },
                        { name: 'Time & Material', price: 'Hourly Rate', desc: 'Best for dynamic projects requiring ongoing changes.', features: ['Pay As You Go', 'Flexible Resources', 'Weekly Reports', 'Continuous Delivery'] }
                    ].map((plan, i) => (
                        <div key={i} style={{ 
                            position: 'relative',
                            borderRadius: 12,
                            overflow: 'hidden',
                            padding: plan.highlighted ? 1 : 0, // 1px for the animated border
                            transform: plan.highlighted ? 'scale(1.05)' : 'none',
                            zIndex: plan.highlighted ? 2 : 1
                        }}>
                            {/* Animated Electric Border for highlighted plan */}
                            {plan.highlighted && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50%', left: '50%', width: '250%', height: '250%',
                                    background: 'conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.4) 95%, #ffffff 100%)',
                                    animation: 'spinGradientCentered 4s linear infinite',
                                    zIndex: 0,
                                    opacity: 0.8
                                }} />
                            )}
                            <div style={{ 
                                position: 'relative',
                                background: plan.highlighted ? 'var(--zy-gray-dark)' : 'var(--zy-gray-card)', 
                                padding: 40,
                                borderRadius: 11, 
                                border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.05)',
                                color: 'var(--zy-white)',
                                zIndex: 1,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {plan.highlighted && <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: 'var(--zy-blue)', color: '#fff', padding: '4px 16px', borderRadius: 50, fontSize: 12, fontWeight: 700, letterSpacing: '0.05em' }}>MOST POPULAR</div>}
                                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-heading)' }}>{plan.name}</h3>
                                <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 16, color: plan.highlighted ? 'var(--zy-white)' : 'var(--zy-blue)' }}>{plan.price}</div>
                                <p style={{ color: 'var(--zy-gray-text)', marginBottom: 32 }}>{plan.desc}</p>
                                
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', textAlign: 'left', flex: 1 }}>
                                    {plan.features.map((f, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--zy-blue)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span style={{ fontWeight: 600 }}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button className={plan.highlighted ? "zy-btn-primary" : "zy-btn-outline"} style={{ width: '100%', marginTop: 'auto' }}>
                                    Discuss Requirements
                                </button>
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
