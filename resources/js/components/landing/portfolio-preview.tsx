import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        title: 'School Management System',
        category: 'Web Application • Next.js',
        description: 'Complete ERP for schools — student management, attendance, fees, exams, and parent portal. Built with Next.js and real-time notifications.',
        image: null,
        gradient: 'linear-gradient(135deg, #0a1a2e 0%, #000 50%, #0a2a22 100%)',
        slug: 'school-management',
    },
    {
        title: 'Affiliate Marketing App',
        category: 'Mobile App • React Native',
        description: 'Cross-platform affiliate platform with real-time commission tracking, referral chains, and integrated payment gateways.',
        image: null,
        gradient: 'linear-gradient(135deg, #2a0a1a 0%, #000 50%, #1a0a2e 100%)',
        slug: 'affiliate-marketing',
    },
    {
        title: 'IoT Smart Factory Dashboard',
        category: 'IoT • Real-time Analytics',
        description: 'Live monitoring dashboard for industrial automation — sensor data visualization, alerts, and predictive maintenance.',
        image: null,
        gradient: 'linear-gradient(135deg, #0a2a1f 0%, #000 50%, #1a1a0a 100%)',
        slug: 'iot-dashboard',
    },
];

export default function PortfolioPreview() {
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            itemsRef.current.filter(Boolean).forEach((item, i) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 80, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            once: true,
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="work" className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div className="zy-section-header" style={{ textAlign: 'center' }}>
                <span className="zy-section-label">Selected Work</span>
                <h2 className="zy-section-title">Projects We're Proud Of</h2>
                <p className="zy-section-subtitle" style={{ margin: '20px auto 0' }}>
                    Real results for real businesses — from concept to launch and beyond.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '24px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {PROJECTS.map((project, i) => (
                    <a
                        key={i}
                        ref={(el) => { itemsRef.current[i] = el; }}
                        href={`/work/${project.slug}`}
                        className="portfolio-item"
                        data-cursor="View"
                        style={{
                            display: 'block',
                            textDecoration: 'none',
                            height: '400px',
                            background: project.gradient,
                            border: '1px solid #222',
                            transition: 'border-color 0.4s var(--zy-ease)',
                            opacity: 0,
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = '#222';
                        }}
                    >
                        {/* Mesh/grid pattern background */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `
                                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px',
                            }}
                        />

                        {/* Content overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '32px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--zy-white)',
                                    marginBottom: '8px',
                                }}
                            >
                                {project.category}
                            </div>
                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '22px',
                                    fontWeight: 700,
                                    color: 'var(--zy-white)',
                                    marginBottom: '8px',
                                }}
                            >
                                {project.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '14px',
                                    color: 'var(--zy-gray-text)',
                                    lineHeight: 1.5,
                                }}
                            >
                                {project.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {/* View All Button */}
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <a
                    href="/work"
                    className="svg-underline"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '14px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'var(--zy-white)',
                        textDecoration: 'none',
                    }}
                >
                    View All Projects
                </a>
            </div>
        </section>
    );
}
