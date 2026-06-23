import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--zy-white)" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Security First',
        desc: 'Enterprise-grade security in every line of code. OWASP-compliant, SSL-encrypted, and regularly audited.',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--zy-white)" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Innovation Driven',
        desc: 'We stay ahead of the curve — implementing AI, IoT, and cutting-edge technologies before they become mainstream.',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--zy-white)" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: 'Full Transparency',
        desc: 'Clear communication, honest billing, and weekly progress reports. You see exactly what we\'re building and why.',
    },
];

export default function CoreValuesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current.filter(Boolean),
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0,
                    duration: 0.6, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div className="zy-section-header" style={{ textAlign: 'center' }}>
                <span className="zy-section-label">Our Values</span>
                <h2 className="zy-section-title">Why Teams Choose Zytrixon</h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 24,
                maxWidth: 1100,
                margin: '0 auto',
            }}>
                {VALUES.map((val, i) => (
                    <div
                        key={i}
                        ref={(el) => { cardsRef.current[i] = el; }}
                        className="value-card"
                        style={{
                            padding: 40,
                            border: '1px solid var(--zy-gray-border)',
                            position: 'relative',
                            overflow: 'hidden',
                            opacity: 0,
                            transition: 'border-color 0.3s var(--zy-ease)',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'var(--zy-white)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'var(--zy-gray-border)';
                        }}
                    >
                        {/* Background hover reveal */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'var(--zy-accent-glow)',
                            transform: 'translateY(100%)',
                            transition: 'transform 0.5s var(--zy-ease)',
                        }}
                        className="value-bg"
                        />

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ marginBottom: 20 }}>{val.icon}</div>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700,
                                color: 'var(--zy-white)', marginBottom: 12,
                            }}>
                                {val.title}
                            </h3>
                            <p style={{ fontSize: 14, color: 'var(--zy-gray-text)', lineHeight: 1.7 }}>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .value-card:hover .value-bg {
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    );
}
