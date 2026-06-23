import { useEffect, useRef } from 'react';
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
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const ctx = gsap.context(() => {
            // Calculate how far to scroll horizontally
            const totalWidth = trackRef.current!.scrollWidth;
            const viewWidth = window.innerWidth;
            const scrollDistance = totalWidth - viewWidth + 100;

            // Pin section and drive horizontal scroll
            gsap.to(trackRef.current, {
                x: -scrollDistance,
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

            // Progress line
            if (progressRef.current) {
                gsap.to(progressRef.current, {
                    scaleX: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: () => `+=${scrollDistance}`,
                        scrub: 1,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

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

            {/* Progress line */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    background: '#1a1a1a',
                    zIndex: 1,
                }}
            >
                <div
                    ref={progressRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        background: '#FFFFFF',
                        transformOrigin: 'left',
                        transform: 'scaleX(0)',
                    }}
                />
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
                }}
            >
                {STEPS.map((step, i) => (
                    <div key={i} className="process-card">
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
                ))}
            </div>
        </section>
    );
}
