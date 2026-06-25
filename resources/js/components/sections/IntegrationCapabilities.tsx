import React from 'react';

export default function IntegrationCapabilities({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label">Connected Ecosystem</span>
                <h2 className="zy-section-title">Integration Capabilities</h2>
                <p style={{ color: 'var(--zy-gray-text)', marginBottom: 60, maxWidth: 600, margin: '0 auto 60px' }}>
                    We seamlessly connect your new {service?.title || 'system'} with your existing enterprise tools.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 24 }}>
                    {['Salesforce', 'SAP', 'Stripe / PayPal', 'AWS Services', 'Twilio', 'HubSpot'].map((tool, i) => (
                        <div key={i} style={{ padding: 24, background: 'var(--zy-gray-card)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', color: 'var(--zy-white)', fontWeight: 700 }}>
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
