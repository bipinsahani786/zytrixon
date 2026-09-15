import React from 'react';

export default function IndustryUseCases({ service }: any) {
    return (
        <section
            className="zy-section"
            style={{
                background: 'var(--zy-black)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <span className="zy-section-label">Versatility</span>
                <h2 className="zy-section-title">Industry Applications</h2>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 24,
                        marginTop: 60,
                    }}
                >
                    {['Healthcare', 'FinTech', 'E-Commerce', 'Logistics'].map(
                        (industry, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: 32,
                                    background: 'var(--zy-gray-card)',
                                    borderRadius: 12,
                                    borderLeft: '2px solid var(--zy-blue)',
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: 24,
                                        color: 'var(--zy-white)',
                                        fontWeight: 700,
                                        marginBottom: 12,
                                        fontFamily: 'var(--font-heading)',
                                    }}
                                >
                                    {industry}
                                </h3>
                                <p style={{ color: 'var(--zy-gray-text)' }}>
                                    Tailored {service?.title || 'solutions'}{' '}
                                    meeting the strict compliance and
                                    high-performance demands of the {industry}{' '}
                                    sector.
                                </p>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
