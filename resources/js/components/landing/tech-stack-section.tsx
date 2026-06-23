import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TECH = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: 'var(--zy-white)' },
    { name: 'Laravel', color: '#FF2D20' },
    { name: 'Node.js', color: '#68A063' },
    { name: 'React Native', color: '#61DAFB' },
    { name: 'Flutter', color: '#02569B' },
    { name: 'Python', color: '#3776AB' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'Redis', color: '#DC382D' },
    { name: 'GraphQL', color: '#E10098' },
    { name: 'Kubernetes', color: '#326CE5' },
];

export default function TechStackSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                itemsRef.current.filter(Boolean),
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0,
                    duration: 0.4, stagger: 0.04, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="zy-section" style={{ background: 'var(--zy-black)', borderTop: '1px solid var(--zy-gray-border)' }}>
            <div className="zy-section-header" style={{ textAlign: 'center' }}>
                <span className="zy-section-label">Technology</span>
                <h2 className="zy-section-title">Our Tech Stack</h2>
                <p className="zy-section-subtitle" style={{ margin: '20px auto 0' }}>
                    We use modern, battle-tested technologies. No shortcuts, no legacy bloat.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: 12,
                maxWidth: 1000,
                margin: '0 auto',
            }}>
                {TECH.map((tech, i) => (
                    <div
                        key={i}
                        ref={(el) => { itemsRef.current[i] = el; }}
                        style={{
                            padding: '20px 16px',
                            background: '#111',
                            border: '1px solid var(--zy-gray-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 10,
                            transition: 'all 0.3s var(--zy-ease)',
                            opacity: 0,
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = tech.color;
                            el.style.transform = 'translateY(-4px)';
                            el.style.boxShadow = `0 8px 24px ${tech.color}15`;
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = '#1a1a1a';
                            el.style.transform = 'translateY(0)';
                            el.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            width: 40, height: 40, borderRadius: '50%',
                            background: `${tech.color}15`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 18, fontWeight: 700, color: tech.color,
                            fontFamily: 'var(--font-heading)',
                        }}>
                            {tech.name.charAt(0)}
                        </div>
                        <span style={{ fontSize: 12, color: 'var(--zy-gray-light)', fontWeight: 500 }}>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
