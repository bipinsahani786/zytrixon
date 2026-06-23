import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, x: -60, rotate: 3 },
                {
                    opacity: 1, x: 0, rotate: 2,
                    duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
                }
            );
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, x: 60 },
                {
                    opacity: 1, x: 0,
                    duration: 0.9, ease: 'power3.out', delay: 0.15,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
                {/* Image side */}
                <div ref={imageRef} style={{ position: 'relative', opacity: 0 }}>
                    <div style={{
                        position: 'absolute', inset: -16,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                        filter: 'blur(40px)', borderRadius: '50%',
                    }} />
                    <div style={{
                        position: 'relative',
                        border: '1px solid #222',
                        background: '#111',
                        padding: 8,
                        borderRadius: 16,
                        transform: 'rotate(2deg)',
                        transition: 'transform 0.5s var(--zy-ease)',
                        overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'rotate(2deg)'; }}
                    >
                        <div style={{
                            width: '100%', height: 380, borderRadius: 12,
                            background: 'linear-gradient(135deg, #111 0%, #0a0a0a 50%, #111 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            position: 'relative', overflow: 'hidden',
                        }}>
                            {/* Grid pattern overlay */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                                backgroundSize: '30px 30px',
                            }} />
                            {/* Z Logo */}
                            <div style={{
                                fontFamily: 'var(--font-heading)', fontSize: 120, fontWeight: 700,
                                color: 'var(--zy-white)', opacity: 0.08, position: 'absolute',
                            }}>Z</div>
                            {/* Content */}
                            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 40 }}>
                                <div style={{
                                    width: 64, height: 64, border: '2px solid #FFFFFF',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28,
                                    color: 'var(--zy-white)', margin: '0 auto 20px',
                                }}>Z</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--zy-white)', letterSpacing: '0.05em' }}>
                                    ZYTRIXON TECH
                                </div>
                                <div style={{ fontSize: 12, color: 'var(--zy-gray-text)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 8 }}>
                                    Engineering Digital Dominance
                                </div>
                                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 16 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF', animation: 'pulse 2s infinite' }} />
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF', animation: 'pulse 2s infinite 0.3s' }} />
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF', animation: 'pulse 2s infinite 0.6s' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <style>{`
                        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
                    `}</style>
                </div>

                {/* Content side */}
                <div ref={contentRef} style={{ opacity: 0 }}>
                    <span className="zy-section-label">About Zytrixon</span>
                    <h2 className="zy-section-title" style={{ marginBottom: 24 }}>
                        Local Roots,{' '}
                        <span style={{ color: 'var(--zy-white)' }}>Global Standards.</span>
                    </h2>
                    <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--zy-gray-light)', marginBottom: 24 }}>
                        Zytrixon Tech isn't just another software company — we are a <strong style={{ color: 'var(--zy-white)' }}>technology partner for visionaries</strong>.
                        Based in Patna, Bihar, our dedicated team of engineers, designers, and strategists bridge the gap between complex engineering and user-friendly design.
                    </p>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--zy-gray-text)', marginBottom: 32 }}>
                        With 60% of our clients spanning USA, UK, and UAE, we bring global engineering standards
                        to every project — delivering enterprise-grade solutions that transform businesses into digital powerhouses.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
                        <div style={{ borderLeft: '2px solid #FFFFFF', paddingLeft: 16 }}>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: 'var(--zy-white)' }}>100%</div>
                            <div style={{ fontSize: 11, color: 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>On-Time Delivery</div>
                        </div>
                        <div style={{ borderLeft: '2px solid #FFFFFF', paddingLeft: 16 }}>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: 'var(--zy-white)' }}>24/7</div>
                            <div style={{ fontSize: 11, color: 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Global Support</div>
                        </div>
                        <div style={{ borderLeft: '2px solid #FFFFFF', paddingLeft: 16 }}>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: 'var(--zy-white)' }}>98%</div>
                            <div style={{ fontSize: 11, color: 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Success Rate</div>
                        </div>
                        <div style={{ borderLeft: '2px solid #FFFFFF', paddingLeft: 16 }}>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: 'var(--zy-white)' }}>5+</div>
                            <div style={{ fontSize: 11, color: 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Countries Served</div>
                        </div>
                    </div>

                    <a href="/about" className="svg-underline" style={{
                        fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 600,
                        color: 'var(--zy-white)', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>
                        Meet the Team →
                    </a>
                </div>
            </div>

            {/* Responsive override */}
            <style>{`
                @media (max-width: 768px) {
                    section > div:first-child { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
