import React from 'react';
import GradientCard from '@/components/ui/GradientCard';

export default function DevelopmentMethodology({ service }: any) {
    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label">Agile Sprints</span>
                <h2 className="zy-section-title">Development Methodology</h2>
                <p style={{ color: 'var(--zy-gray-text)', marginBottom: 60 }}>We don't do black boxes. You see progress every two weeks.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
                    {['Sprint Planning', 'Daily Standups', 'Iterative Development', 'Sprint Review'].map((step, i) => (
                        <GradientCard key={i} style={{ height: '100%' }}>
                            <div style={{ padding: 32, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: 48, fontWeight: 900, color: 'var(--zy-blue)', opacity: 0.2, marginBottom: -20, textAlign: 'left' }}>0{i+1}</div>
                                <h3 style={{ fontSize: 18, color: 'var(--zy-white)', fontWeight: 700, fontFamily: 'var(--font-heading)', textAlign: 'left', position: 'relative', zIndex: 1, marginTop: 'auto' }}>{step}</h3>
                            </div>
                        </GradientCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
