import React from 'react';

export default function TechnicalArchitecture({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label">Infrastructure</span>
                <h2 className="zy-section-title">Technical Architecture Flow</h2>
                <p style={{ color: 'var(--zy-gray-text)', marginBottom: 60 }}>Our cloud-native approach ensures infinite scalability and absolute resilience.</p>
                
                <div style={{ padding: 60, background: 'var(--zy-gray-card)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                    {/* Placeholder for an actual diagram or complex CSS grid */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                        {['Client Tier', 'API Gateway', 'Microservices', 'Data Layer'].map((tier, i) => (
                            <div key={i} style={{ padding: '20px 40px', background: 'var(--zy-gray-dark)', borderRadius: 8, border: '1px solid var(--zy-blue)', color: 'var(--zy-white)', fontWeight: 600 }}>
                                {tier}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
