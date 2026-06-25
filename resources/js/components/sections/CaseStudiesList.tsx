import React from 'react';

export default function CaseStudiesList({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span className="zy-section-label">Proven Results</span>
                    <h2 className="zy-section-title">Case Studies & Success Stories</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
                    {[1, 2].map((item) => (
                        <div key={item} style={{ background: 'var(--zy-gray-card)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ height: 200, background: 'var(--zy-gray-dark)' }} />
                            <div style={{ padding: 32 }}>
                                <div style={{ color: 'var(--zy-blue)', fontSize: 14, fontWeight: 700, marginBottom: 8, letterSpacing: '0.05em' }}>ENTERPRISE CLIENT</div>
                                <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--zy-white)', marginBottom: 16, fontFamily: 'var(--font-heading)' }}>{service?.title || 'Project'} Scaling</h3>
                                <p style={{ color: 'var(--zy-gray-text)', lineHeight: 1.6 }}>How we helped a Fortune 500 company scale their infrastructure to support 10x traffic growth without downtime.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
