import React from 'react';

export default function QAAndTesting({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap-reverse' }}>
                <div style={{ flex: '1 1 400px', background: 'var(--zy-gray-card)', borderRadius: 12, padding: 40, border: '1px solid rgba(255,255,255,0.05)' }}>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {['Unit Testing: 95% Coverage', 'End-to-End Cypress Tests', 'Load Testing (JMeter)', 'Manual Exploratory Testing'].map((test, i) => (
                            <div key={i} style={{ background: 'var(--zy-gray-dark)', padding: 16, borderRadius: 8, color: 'var(--zy-white)', fontWeight: 600 }}>
                                ✓ {test}
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ flex: '1 1 400px' }}>
                    <span className="zy-section-label">Zero Bugs</span>
                    <h2 className="zy-section-title">Rigorous QA & Testing</h2>
                    <p style={{ color: 'var(--zy-gray-text)', lineHeight: 1.6 }}>
                        A single bug in production can cost millions. Our QA engineers work in parallel with developers to ensure that every release is bulletproof. Automated CI/CD pipelines run thousands of tests before any code hits the live server.
                    </p>
                </div>
            </div>
        </section>
    );
}
