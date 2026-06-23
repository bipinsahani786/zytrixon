import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
    {
        name: 'Bipin Kumar',
        role: 'Founder & CEO',
        bio: 'Full-stack architect with a vision to put Patna on the global tech map.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
        color: '#6366f1',
    },
    {
        name: 'Rahul Verma',
        role: 'Lead Developer',
        bio: 'React, Node.js, and IoT specialist — turns complex problems into elegant solutions.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80',
        color: '#ec4899',
    },
    {
        name: 'Sneha Gupta',
        role: 'UI/UX Design Head',
        bio: 'Crafts pixel-perfect interfaces that users love. Design thinking evangelist.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
        color: '#f59e0b',
    },
    {
        name: 'Amit Raj',
        role: 'Digital Marketing Head',
        bio: 'SEO, paid ads, and growth hacking expert — data-driven results for every client.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&q=80',
        color: '#10b981',
    },
    {
        name: 'Priya Singh',
        role: 'Mobile App Lead',
        bio: 'React Native & Flutter expert delivering cross-platform experiences.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
        color: '#8b5cf6',
    },
    {
        name: 'Vikash Kumar',
        role: 'IoT Engineer',
        bio: 'Embedded systems and cloud IoT platforms — connecting the physical and digital.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80',
        color: '#06b6d4',
    },
];

export default function TeamSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.team-card').forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 85%', once: true },
                        delay: i * 0.08,
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="team" className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div className="zy-section-header" style={{ textAlign: 'center' }}>
                <span className="zy-section-label">Our People</span>
                <h2 className="zy-section-title">Meet The Team</h2>
                <p className="zy-section-subtitle" style={{ margin: '20px auto 0' }}>
                    A dedicated team of engineers, designers, and strategists building the future.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 20,
                maxWidth: 1000,
                margin: '0 auto',
            }}>
                {TEAM.map((member) => (
                    <div
                        key={member.name}
                        className="team-card"
                        style={{
                            background: 'var(--zy-gray-card)',
                            border: '1px solid var(--zy-gray-border)',
                            padding: 28,
                            textAlign: 'center',
                            transition: 'all 0.4s var(--zy-ease)',
                            cursor: 'default',
                            opacity: 0,
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget).style.borderColor = 'rgba(255,255,255,0.2)';
                            (e.currentTarget).style.transform = 'translateY(-6px)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget).style.borderColor = 'var(--zy-gray-border)';
                            (e.currentTarget).style.transform = 'translateY(0)';
                        }}
                    >
                        {/* Image Avatar */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '1',
                            borderRadius: '8px',
                            margin: '0 auto 20px',
                            overflow: 'hidden',
                            position: 'relative',
                            background: 'var(--zy-gray-dark)',
                        }}>
                            <img
                                src={`https://i.pravatar.cc/300?u=${member.name}`}
                                alt={member.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.5s var(--zy-ease), transform 0.5s var(--zy-ease)',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget).style.filter = 'grayscale(0%)';
                                    (e.currentTarget).style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget).style.filter = 'grayscale(100%)';
                                    (e.currentTarget).style.transform = 'scale(1)';
                                }}
                            />
                            {/* Accent line */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: 4,
                                background: member.color,
                            }} />
                        </div>

                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 15,
                            fontWeight: 700,
                            color: 'var(--zy-white)',
                            marginBottom: 4,
                        }}>
                            {member.name}
                        </h4>

                        <div style={{
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: member.color,
                            marginBottom: 10,
                        }}>
                            {member.role}
                        </div>

                        <p style={{
                            fontSize: 12,
                            color: 'var(--zy-gray-text)',
                            lineHeight: 1.5,
                        }}>
                            {member.bio}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
