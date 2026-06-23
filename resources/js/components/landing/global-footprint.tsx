import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COUNTRIES = [
    { flag: '🇮🇳', name: 'India' },
    { flag: '🇺🇸', name: 'USA' },
    { flag: '🇬🇧', name: 'UK' },
    { flag: '🇦🇪', name: 'UAE' },
    { flag: '🇦🇺', name: 'Australia' },
    { flag: '🇨🇦', name: 'Canada' },
    { flag: '🇸🇬', name: 'Singapore' },
    { flag: '🇩🇪', name: 'Germany' },
];

export default function GlobalFootprint() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="zy-section" style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, #000 70%)',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
                <span className="zy-section-label">Global Reach</span>
                <h2 className="zy-section-title">From Patna to the World</h2>
                <p className="zy-section-subtitle" style={{ margin: '20px auto 0' }}>
                    Delivering excellence across 15+ countries. Local roots, global standards, worldwide impact.
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 12,
                    marginTop: 48,
                }}>
                    {COUNTRIES.map((c, i) => (
                        <span
                            key={i}
                            style={{
                                padding: '10px 20px',
                                border: '1px solid #222',
                                background: '#111',
                                fontSize: 14,
                                color: '#ccc',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                transition: 'all 0.3s var(--zy-ease)',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#FFFFFF';
                                (e.currentTarget as HTMLElement).style.background = '#1a1a1a';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#222';
                                (e.currentTarget as HTMLElement).style.background = '#111';
                            }}
                        >
                            <span style={{ fontSize: 20 }}>{c.flag}</span> {c.name}
                        </span>
                    ))}
                </div>

                {/* Decorative glow */}
                <div style={{
                    width: 300, height: 300,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)',
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                }} />
            </div>
        </section>
    );
}
