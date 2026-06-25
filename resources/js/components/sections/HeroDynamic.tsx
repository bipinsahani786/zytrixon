import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function HeroDynamic({ service, location, h1 }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section style={{ 
            padding: '120px 24px 80px', 
            background: 'var(--zy-black)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
                width: 600, height: 600, background: 'var(--zy-blue)', filter: 'blur(150px)', opacity: 0.15, zIndex: 0
            }} />
            
            <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
                    <span style={{ padding: '6px 16px', background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', borderRadius: 50, fontSize: 13, fontWeight: 700, letterSpacing: '0.05em' }}>
                        ENTERPRISE GRADE
                    </span>
                    {location && (
                        <span style={{ padding: '6px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', borderRadius: 50, fontSize: 13, fontWeight: 700, letterSpacing: '0.05em' }}>
                            AVAILABLE IN {location.name.toUpperCase()}
                        </span>
                    )}
                </div>
                
                <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, color: 'var(--zy-white)', lineHeight: 1.1, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>
                    {h1}
                </h1>
                
                <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--zy-gray-text)', maxWidth: 800, margin: '0 auto 40px' }}>
                    {service.description} We build high-performance systems designed to scale and dominate the market.
                </p>
                
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                    <button className="zy-btn-primary">Start a Project</button>
                    <button className="zy-btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--zy-white)' }}>
                        View Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}
