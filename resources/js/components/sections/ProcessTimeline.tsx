import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function ProcessTimeline({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <h2 className="zy-section-title">
                        How We Deliver {service?.title || 'Excellence'}
                    </h2>
                    <p style={{ color: 'var(--zy-gray-text)', marginTop: 16 }}>A transparent, agile process guaranteed to yield results.</p>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 32, width: 2, background: 'rgba(255,255,255,0.05)' }} />
                    
                    {[
                        { step: '01', title: 'Discovery & Strategy', desc: 'We dive deep into your business goals and technical requirements to formulate a bulletproof plan.' },
                        { step: '02', title: 'Design & Prototyping', desc: 'Crafting high-fidelity wireframes and interactive prototypes for your approval.' },
                        { step: '03', title: 'Agile Development', desc: 'Our engineering team builds your product in transparent, two-week sprints.' },
                        { step: '04', title: 'Testing & QA', desc: 'Rigorous automated and manual testing to ensure zero critical bugs.' },
                        { step: '05', title: 'Launch & Scale', desc: 'Seamless deployment with 24/7 monitoring and scalable infrastructure.' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: 32, marginBottom: 40, position: 'relative' }}>
                            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--zy-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24, fontWeight: 800, zIndex: 1, flexShrink: 0, boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)' }}>
                                {item.step}
                            </div>
                            <div style={{ paddingTop: 12 }}>
                                <h3 style={{ color: 'var(--zy-white)', fontSize: 24, fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--zy-gray-text)', fontSize: 16, lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
