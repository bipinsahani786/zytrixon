import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '@/components/landing/theme-provider';

interface InnerPageHeroProps {
    title: string;
    subtitle: string;
}

export default function InnerPageHero({ title, subtitle }: InnerPageHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const isLight = theme === 'light';

    useEffect(() => {
        if (!sectionRef.current || !textRef.current) return;

        const tl = gsap.timeline({ delay: 0.2 });
        
        tl.fromTo(textRef.current.children,
            { opacity: 0, y: 30, filter: 'blur(10px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );

        return () => tl.kill();
    }, []);

    return (
        <section ref={sectionRef} style={{
            position: 'relative',
            padding: '180px var(--zy-section-pad-x) 80px',
            background: isLight ? '#FFFFFF' : 'var(--zy-black)',
            color: isLight ? '#000' : 'var(--zy-white)',
            textAlign: 'center',
            overflow: 'hidden',
        }}>
            {/* Background pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: isLight 
                    ? 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)'
                    : 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* 3D Abstract Glows */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                <div style={{
                    position: 'absolute',
                    top: '-20%', left: '-10%',
                    width: '60vw', height: '60vw',
                    background: isLight 
                        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%)'
                        : 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    animation: 'floatGlow1 15s infinite alternate ease-in-out',
                    mixBlendMode: isLight ? 'multiply' : 'screen'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-30%', right: '-10%',
                    width: '70vw', height: '70vw',
                    background: isLight
                        ? 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 60%)'
                        : 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    animation: 'floatGlow2 20s infinite alternate-reverse ease-in-out',
                    mixBlendMode: isLight ? 'multiply' : 'screen'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '20%', left: '30%',
                    width: '50vw', height: '50vw',
                    background: isLight
                        ? 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 60%)'
                        : 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 60%)',
                    filter: 'blur(90px)',
                    animation: 'floatGlow3 18s infinite alternate ease-in-out',
                    mixBlendMode: isLight ? 'multiply' : 'screen'
                }} />
            </div>

            <div ref={textRef} style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(40px, 6vw, 72px)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    marginBottom: 24,
                    lineHeight: 1.1
                }}>
                    {title}
                </h1>
                <p style={{
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    color: isLight ? '#666' : 'var(--zy-gray-text)',
                    lineHeight: 1.6,
                }}>
                    {subtitle}
                </p>
            </div>
            
            <style>{`
                @keyframes floatGlow1 {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(5%, 10%) scale(1.1); }
                }
                @keyframes floatGlow2 {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(-10%, -5%) scale(1.05); }
                }
                @keyframes floatGlow3 {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(8%, -15%) scale(1.15); }
                }
            `}</style>
        </section>
    );
}
