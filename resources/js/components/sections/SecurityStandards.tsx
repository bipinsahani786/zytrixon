import React from 'react';

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
                <div style={{ flex: '1 1 400px', background: 'var(--zy-gray-card)', borderRadius: 12, padding: 40, border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                    {/* Security Shield Icon Graphic */}
                    <div style={{ width: 120, height: 120, margin: '0 auto', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--zy-blue)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
