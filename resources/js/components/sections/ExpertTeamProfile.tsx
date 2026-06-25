import React from 'react';

export default function ExpertTeamProfile({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label">Your Dedicated Team</span>
                <h2 className="zy-section-title">The Brains Behind Your {service?.title || 'Project'}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32, marginTop: 60 }}>
                    {['Lead Architect', 'Senior Developer', 'QA Engineer', 'Project Manager'].map((role, i) => (
                        <div key={i} style={{ background: 'var(--zy-gray-card)', padding: 40, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--zy-gray-dark)', margin: '0 auto 24px' }} />
                            <h3 style={{ fontSize: 20, color: 'var(--zy-white)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Expert Engineer</h3>
                            <p style={{ color: 'var(--zy-blue)', fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', marginTop: 8 }}>{role.toUpperCase()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
