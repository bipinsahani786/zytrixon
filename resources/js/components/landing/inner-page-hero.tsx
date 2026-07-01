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
                pointerEvents: 'none'
            }} />

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
        </section>
    );
}
