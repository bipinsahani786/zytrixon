import React from 'react';
import GradientCard from '@/components/ui/GradientCard';
import { useTheme } from '@/components/landing/theme-provider';

export default function DevelopmentMethodology({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const steps = [
        { title: 'Sprint Planning', desc: 'Aligning business goals with technical execution for the upcoming two weeks.' },
        { title: 'Daily Standups', desc: 'Transparent communication ensuring zero blockers and continuous momentum.' },
        { title: 'Iterative Development', desc: 'Writing clean, scalable code with automated testing at every step.' },
        { title: 'Sprint Review', desc: 'Presenting a working demo of the new features for your approval.' }
    ];

    return (
        <section className="zy-section" style={{ background: isLight ? '#f9fafb' : 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label" style={{ color: '#ec4899', opacity: 1 }}>Agile Sprints</span>
                <h2 className="zy-section-title" style={{ color: isLight ? '#000' : 'var(--zy-white)' }}>Development Methodology</h2>
                <p style={{ color: isLight ? '#555' : 'var(--zy-gray-text)', marginBottom: 60, fontSize: 18, maxWidth: 600, margin: '0 auto 60px' }}>
                    We don't do black boxes. Our agile process ensures you see tangible progress and working software every two weeks.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                    {steps.map((step, i) => (
                        <div key={i} className="methodology-card" style={{ transition: 'transform 0.3s' }}>
                            <GradientCard themeColor="#ec4899" style={{ height: '100%', background: isLight ? '#fff' : 'var(--zy-gray-card)', boxShadow: isLight ? '0 10px 30px rgba(0,0,0,0.03)' : 'none' }}>
                                <div style={{ padding: '40px 32px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ 
                                        fontSize: 64, fontWeight: 900, 
                                        color: isLight ? '#ec4899' : '#ec4899', 
                                        opacity: isLight ? 0.1 : 0.2, 
                                        marginBottom: -30, textAlign: 'left',
                                        fontFamily: 'var(--font-heading)'
                                    }}>
                                        0{i+1}
                                    </div>
                                    <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', textAlign: 'left' }}>
                                        <h3 style={{ fontSize: 20, color: isLight ? '#000' : 'var(--zy-white)', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: 12 }}>
                                            {step.title}
                                        </h3>
                                        <p style={{ color: isLight ? '#666' : 'var(--zy-gray-text)', fontSize: 15, lineHeight: 1.6, fontWeight: 500 }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </GradientCard>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .methodology-card:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </section>
    );
}
