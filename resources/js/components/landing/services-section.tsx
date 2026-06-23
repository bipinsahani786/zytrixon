import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlaygroundIoT from './playground-iot';
import PlaygroundWebApp from './playground-webapp';
import PlaygroundMobile from './playground-mobile';
import PlaygroundMarketing from './playground-marketing';
import PlaygroundAI from './playground-ai';
import PlaygroundCustom from './playground-custom';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        id: 'web',
        title: 'Web Development',
        desc: 'Full-stack web apps with React, Next.js, Laravel — blazing fast, secure, and scalable.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="2" y1="7" x2="22" y2="7" />
                <circle cx="5" cy="5" r="0.5" fill="currentColor" /><circle cx="7.5" cy="5" r="0.5" fill="currentColor" />
                <circle cx="10" cy="5" r="0.5" fill="currentColor" />
                <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        playground: <PlaygroundWebApp />,
    },
    {
        id: 'mobile',
        title: 'App Development',
        desc: 'Native & cross-platform mobile apps with React Native and Flutter — iOS & Android.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        playground: <PlaygroundMobile />,
    },
    {
        id: 'iot',
        title: 'IoT Solutions',
        desc: 'Smart devices, sensor networks, real-time dashboards — connecting the physical and digital world.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M4.93 4.93a10 10 0 0114.14 0" /><path d="M7.76 7.76a6 6 0 018.48 0" />
                <path d="M4.93 19.07a10 10 0 010-14.14" /><path d="M19.07 4.93a10 10 0 010 14.14" />
            </svg>
        ),
        playground: <PlaygroundIoT />,
    },
    {
        id: 'ai',
        title: 'AI & Automation',
        desc: 'Custom AI models, workflow automation, and smart analytics to streamline your business operations.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                <path d="M19 12a7 7 0 0 0-14 0" />
            </svg>
        ),
        playground: <PlaygroundAI />,
    },
    {
        id: 'custom',
        title: 'Custom Software',
        desc: 'Tailor-made enterprise software, CRM, and ERP systems designed precisely for your needs.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        playground: <PlaygroundCustom />,
    },
    {
        id: 'marketing',
        title: 'Digital Marketing',
        desc: 'SEO, PPC, Social Media Marketing, and Analytics — data-driven strategies for growth.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
            </svg>
        ),
        playground: <PlaygroundMarketing />,
    },
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeService, setActiveService] = useState<string | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.service-card-new').forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 85%', once: true },
                        delay: i * 0.1,
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="services" className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div className="zy-section-header" style={{ textAlign: 'center' }}>
                <span className="zy-section-label">What We Build</span>
                <h2 className="zy-section-title">Our Services</h2>
                <p className="zy-section-subtitle" style={{ margin: '20px auto 0' }}>
                    Click on any service to try an interactive demo — experience what we build.
                </p>
            </div>

            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                {/* Service Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 16,
                    marginBottom: 32,
                }}>
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="service-card-new"
                            style={{
                                position: 'relative',
                                borderRadius: 8,
                                overflow: 'hidden',
                                opacity: 0,
                                padding: 1, // acts as border width
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {/* Animated Electric Border */}
                            <div style={{
                                position: 'absolute',
                                top: '50%', left: '50%', width: '250%', height: '250%',
                                background: 'conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.4) 95%, #ffffff 100%)',
                                animation: 'spinGradientCentered 4s linear infinite',
                                zIndex: 0,
                                opacity: activeService === service.id ? 1 : 0.4,
                                transition: 'opacity 0.3s'
                            }} />

                            <button
                                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                                style={{
                                    position: 'relative',
                                    borderRadius: 7,
                                    background: activeService === service.id ? 'var(--zy-gray-dark)' : 'var(--zy-gray-card)',
                                    padding: '28px 24px',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    color: 'var(--zy-white)',
                                    transition: 'background 0.3s var(--zy-ease)',
                                    zIndex: 1,
                                    flex: 1,
                                    border: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                }}
                            >
                                <div style={{ color: 'var(--zy-white)', marginBottom: 16, opacity: 0.7 }}>
                                    {service.icon}
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 18,
                                    fontWeight: 700,
                                    marginBottom: 8,
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{ fontSize: 13, color: 'var(--zy-gray-text)', lineHeight: 1.5, marginBottom: 24 }}>
                                    {service.desc}
                                </p>
                                
                                <div style={{ marginTop: 'auto' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        padding: '4px 12px',
                                        background: activeService === service.id ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 30,
                                        transition: 'all 0.3s',
                                    }}>
                                        <span style={{
                                            width: 6, height: 6, borderRadius: '50%',
                                            background: activeService === service.id ? '#888' : '#fff',
                                            boxShadow: activeService === service.id ? 'none' : '0 0 10px #fff',
                                            animation: activeService === service.id ? 'none' : 'pulseScale 1.5s infinite'
                                        }} />
                                        <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                                            {activeService === service.id ? 'Close Demo' : 'Interactive Demo'}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Active Playground */}
                {activeService && (
                    <div style={{ animation: 'fadeInUp 0.4s ease' }}>
                        {SERVICES.find(s => s.id === activeService)?.playground}
                    </div>
                )}
            </div>
            
            <style>{`
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
                @keyframes pulseScale { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }
            `}</style>
        </section>
    );
}
