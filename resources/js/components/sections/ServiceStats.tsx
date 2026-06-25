import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function ServiceStats({ location }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, textAlign: 'center' }}>
                <div style={{ padding: 40, background: 'var(--zy-gray-card)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: 48, fontWeight: 900, color: 'var(--zy-blue)', marginBottom: 8, fontFamily: 'var(--font-heading)' }}>99.9%</h3>
                    <p style={{ color: 'var(--zy-gray-text)', fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>Uptime Guarantee</p>
                </div>
                <div style={{ padding: 40, background: 'var(--zy-gray-card)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: 48, fontWeight: 900, color: 'var(--zy-blue)', marginBottom: 8, fontFamily: 'var(--font-heading)' }}>250+</h3>
                    <p style={{ color: 'var(--zy-gray-text)', fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>Projects Delivered</p>
                </div>
                <div style={{ padding: 40, background: 'var(--zy-gray-card)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: 48, fontWeight: 900, color: 'var(--zy-blue)', marginBottom: 8, fontFamily: 'var(--font-heading)' }}>24/7</h3>
                    <p style={{ color: 'var(--zy-gray-text)', fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>{location ? `Local Support in ${location.name}` : 'Global Support'}</p>
                </div>
                <div style={{ padding: 40, background: 'var(--zy-gray-card)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: 48, fontWeight: 900, color: 'var(--zy-blue)', marginBottom: 8, fontFamily: 'var(--font-heading)' }}>0</h3>
                    <p style={{ color: 'var(--zy-gray-text)', fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>Hidden Fees</p>
                </div>
            </div>
        </section>
    );
}
