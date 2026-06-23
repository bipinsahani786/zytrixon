import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    {
        number: '01',
        title: 'Discovery',
        description:
            'We dive deep into your business, industry, and goals. Through workshops and research, we map the landscape and uncover opportunities others miss.',
    },
    {
        number: '02',
        title: 'Design',
        description:
            'Wireframes evolve into high-fidelity prototypes. Every pixel is intentional — balancing aesthetics with usability to create interfaces that convert.',
    },
    {
        number: '03',
        title: 'Architecture',
        description:
            'Before writing a line of code, we design scalable system architectures, design robust database schemas, and select the perfect tech stack.',
    },
    {
        number: '04',
        title: 'Develop',
        description:
            'Clean, modular code built for scale. Agile sprints with transparent progress updates. We ship fast without cutting corners.',
    },
    {
        number: '05',
        title: 'QA & Testing',
        description:
            'Rigorous automated and manual testing. We hunt for bugs, optimize performance bottlenecks, and ensure military-grade security before launch.',
    },
    {
        number: '06',
        title: 'Deploy',
        description:
            'Smooth deployment to production. Post-launch monitoring and iterative improvements ensure your software delivers lasting success.',
    },
];

export default function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const ctx = gsap.context(() => {
            // Calculate how far to scroll horizontally
            const totalWidth = trackRef.current!.scrollWidth;
            const viewWidth = window.innerWidth;
            const scrollDistance = totalWidth - viewWidth + 100;
            
            // Vertical offset for diagonal pan
            const staggerY = 100;
            const verticalScroll = (STEPS.length - 1) * staggerY;

            // Pin section and drive diagonal scroll
            gsap.to(trackRef.current, {
                x: -scrollDistance,
                y: `-=${verticalScroll}`, // Pan up as we pan left to follow the staircase
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${scrollDistance}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const staggerY = 100;

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                background: 'var(--zy-black)',
            }}
        >
            {/* Section header */}
            <div
                style={{
                    position: 'absolute',
                    top: '60px',
                    left: 'var(--zy-section-pad-x)',
                    zIndex: 2,
                }}
            >
                <span className="zy-section-label">Our Process</span>
                <h2
                    className="zy-section-title"
                    style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
                >
                    How We Work
                </h2>
            </div>

            {/* Horizontal track */}
            <div
                ref={trackRef}
                className="process-track"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: 'var(--zy-section-pad-x)',
                    transform: 'translateY(-50%)',
                    paddingTop: '40px',
                    alignItems: 'center',
                }}
            >
                {STEPS.map((step, i) => (
                    <React.Fragment key={i}>
                        <div 
                            className="zy-card process-card"
                            style={{ transform: `translateY(${i * staggerY}px)` }}
                        >
                            <div className="process-number">{step.number}</div>
                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    color: 'var(--zy-white)',
                                    marginBottom: '16px',
                                }}
                            >
                                {step.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '15px',
                                    lineHeight: 1.7,
                                    color: 'var(--zy-gray-text)',
                                }}
                            >
                                {step.description}
                            </p>
                        </div>

                        {i < STEPS.length - 1 && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                transform: `translateY(${(i + 0.5) * staggerY}px)`,
                                opacity: 0.3,
                            }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(15deg)' }}>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
