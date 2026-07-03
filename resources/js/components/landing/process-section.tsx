import React, { useEffect, useState } from 'react';

const STEPS = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We dive deep into your business, industry, and goals. Through workshops and research, we map the landscape and uncover opportunities others miss.',
    },
    {
        number: '02',
        title: 'Design',
        description: 'Wireframes evolve into high-fidelity prototypes. Every pixel is intentional — balancing aesthetics with usability to create interfaces that convert.',
    },
    {
        number: '03',
        title: 'Architecture',
        description: 'Before writing a line of code, we design scalable system architectures, design robust database schemas, and select the perfect tech stack.',
    },
    {
        number: '04',
        title: 'Develop',
        description: 'Clean, modular code built for scale. Agile sprints with transparent progress updates. We ship fast without cutting corners.',
    },
    {
        number: '05',
        title: 'QA & Testing',
        description: 'Rigorous automated and manual testing. We hunt for bugs, optimize performance bottlenecks, and ensure military-grade security before launch.',
    },
    {
        number: '06',
        title: 'Deploy',
        description: 'Smooth deployment to production. Post-launch monitoring and iterative improvements ensure your software delivers lasting success.',
    },
];

export default function ProcessSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Group by 3 for desktop snake layout
    const rows = [];
    for (let i = 0; i < STEPS.length; i += 3) {
        rows.push(STEPS.slice(i, i + 3));
    }

    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)', position: 'relative' }}>
            <div className="zy-section-header" style={{ textAlign: 'center', marginBottom: 80 }}>
                <span className="zy-section-label">Our Process</span>
                <h2 className="zy-section-title">How We Work</h2>
            </div>
            
            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 60, padding: '0 20px' }}>
                {isMobile ? (
                    // Mobile: standard vertical stack
                    STEPS.map((step, i) => (
                        <div key={i} className="zy-card process-card" style={{ padding: 32, position: 'relative' }}>
                            <div className="process-number" style={{ fontSize: 48, fontWeight: 900, color: 'var(--zy-blue)', opacity: 0.2, marginBottom: -20 }}>
                                {step.number}
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: 'var(--zy-white)', marginBottom: 16, position: 'relative', zIndex: 1 }}>
                                {step.title}
                            </h3>
                            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--zy-gray-text)' }}>
                                {step.description}
                            </p>
                            {/* Down arrow for mobile */}
                            {i < STEPS.length - 1 && (
                                <div style={{ position: 'absolute', bottom: -24, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.2)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <polyline points="19 12 12 19 5 12"></polyline>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    // Desktop: Snake Layout
                    rows.map((row, rowIndex) => (
                        <div key={rowIndex} style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ 
                                display: 'flex', 
                                flexDirection: rowIndex % 2 === 0 ? 'row' : 'row-reverse',
                                gap: 40,
                                position: 'relative'
                            }}>
                                {row.map((step, colIndex) => (
                                    <div key={step.number} style={{ flex: 1, position: 'relative' }}>
                                        <div className="zy-card process-card" style={{ padding: 40, height: '100%', position: 'relative', zIndex: 2 }}>
                                            <div className="process-number" style={{ fontSize: 48, fontWeight: 900, color: 'var(--zy-blue)', opacity: 0.2, marginBottom: -20 }}>
                                                {step.number}
                                            </div>
                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: 'var(--zy-white)', marginBottom: 16, position: 'relative', zIndex: 1 }}>
                                                {step.title}
                                            </h3>
                                            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--zy-gray-text)' }}>
                                                {step.description}
                                            </p>
                                        </div>
                                        
                                        {/* Horizontal Arrow between cards in the same row */}
                                        {colIndex < row.length - 1 && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '50%',
                                                [rowIndex % 2 === 0 ? 'right' : 'left']: -32,
                                                transform: `translateY(-50%) ${rowIndex % 2 !== 0 ? 'scaleX(-1)' : ''}`,
                                                zIndex: 1,
                                                color: 'var(--zy-blue)',
                                                opacity: 0.5
                                            }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Down arrow connecting rows */}
                            {rowIndex < rows.length - 1 && (
                                <div style={{ 
                                    position: 'absolute', 
                                    bottom: -42, 
                                    [rowIndex % 2 === 0 ? 'right' : 'left']: '16%', 
                                    color: 'var(--zy-blue)',
                                    opacity: 0.5,
                                    zIndex: 1
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <polyline points="19 12 12 19 5 12"></polyline>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
