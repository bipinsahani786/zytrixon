import React from 'react';

export default function MigrationStrategy({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span className="zy-section-label">Zero Downtime</span>
                    <h2 className="zy-section-title">Legacy Migration Strategy</h2>
                </div>
                <div style={{ background: 'var(--zy-gray-card)', padding: 40, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: 'var(--zy-gray-text)', lineHeight: 1.6, marginBottom: 32 }}>
                        Moving from an old system? Our zero-downtime migration protocols ensure your business operations never stop while we upgrade your technology.
                    </p>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center', color: 'var(--zy-white)', fontWeight: 600 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--zy-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
                        Data Mapping & Backup
                    </div>
                    <div style={{ width: 2, height: 24, background: 'rgba(255,255,255,0.1)', marginLeft: 19, margin: '8px 0' }} />
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center', color: 'var(--zy-white)', fontWeight: 600 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--zy-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
                        Parallel Run Testing
                    </div>
                    <div style={{ width: 2, height: 24, background: 'rgba(255,255,255,0.1)', marginLeft: 19, margin: '8px 0' }} />
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center', color: 'var(--zy-white)', fontWeight: 600 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
                        Seamless Switchover
                    </div>
                </div>
            </div>
        </section>
    );
}
