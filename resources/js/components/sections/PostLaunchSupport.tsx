import React from 'react';

export default function PostLaunchSupport({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label">Long-Term Partnership</span>
                <h2 className="zy-section-title">Post-Launch Support SLAs</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginTop: 60 }}>
                    <div style={{ background: 'var(--zy-gray-card)', padding: 40, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: 20, color: 'var(--zy-white)', fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-heading)' }}>24/7 Monitoring</h3>
                        <p style={{ color: 'var(--zy-gray-text)' }}>Automated alerts and DevOps engineers on standby ensuring 99.9% uptime.</p>
                    </div>
                    <div style={{ background: 'var(--zy-gray-card)', padding: 40, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: 20, color: 'var(--zy-white)', fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-heading)' }}>Continuous Updates</h3>
                        <p style={{ color: 'var(--zy-gray-text)' }}>Regular security patches, library upgrades, and performance tuning.</p>
                    </div>
                    <div style={{ background: 'var(--zy-gray-card)', padding: 40, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: 20, color: 'var(--zy-white)', fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-heading)' }}>Feature Evolution</h3>
                        <p style={{ color: 'var(--zy-gray-text)' }}>A dedicated team available to build new features as your business scales.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
