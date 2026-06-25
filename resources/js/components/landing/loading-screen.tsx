import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Logo from '@/components/ui/logo';

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const zRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        document.body.classList.add('loading');

        const tl = gsap.timeline({
            onComplete: () => {
                setVisible(false);
                document.body.classList.remove('loading');
            },
        });

        // Setup and animate the Z logo smoothly
        if (zRef.current) {
            tl.fromTo(zRef.current,
                { opacity: 0, scale: 0.5, y: 50 },
                { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: 'expo.out' }
            );
        }

        // Smooth scattered flying letters
        tl.fromTo(lettersRef.current,
            {
                x: () => (Math.random() - 0.5) * window.innerWidth * 0.7,
                y: () => (Math.random() - 0.5) * window.innerHeight * 0.7,
                opacity: 0,
                scale: () => Math.random() * 2 + 1,
                rotationZ: () => (Math.random() - 0.5) * 90,
                filter: 'blur(12px)',
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotationZ: 0,
                filter: 'blur(0px)',
                duration: 1.8,
                stagger: { each: 0.04, from: 'random' },
                ease: 'expo.out',
                force3D: true,
            },
            "-=1.0" // Start while logo is still animating
        );

        // Brief hold and pulse both together
        tl.to([zRef.current, ...lettersRef.current], {
            scale: 1.05,
            duration: 0.8,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: 1,
        }, "+=0.2");

        // Fade out the entire screen smoothly
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
        }, "-=0.3");

        // Allow skip on click
        const handleClick = () => {
            tl.progress(1);
        };

        containerRef.current?.addEventListener('click', handleClick);

        return () => {
            containerRef.current?.removeEventListener('click', handleClick);
            tl.kill();
            document.body.classList.remove('loading');
        };
    }, []);

    if (!visible) return null;

    const word = "ZYTRIXON".split('');

    return (
        <div ref={containerRef} className="loading-screen" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div ref={zRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-24px' }}>
                <Logo style={{ height: '140px', width: 'auto', color: 'var(--zy-white)', clipPath: 'inset(0 0 16% 0)', transform: 'translateY(8%)' }} />
            </div>
            <div style={{ display: 'flex', gap: '6px', zIndex: 2 }}>
                {word.map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => { lettersRef.current[i] = el; }}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '42px',
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            color: 'var(--zy-white)',
                            display: 'inline-block',
                            textTransform: 'uppercase',
                            opacity: 0, // Prevents the initial glitchy flash
                            willChange: 'transform, opacity, filter',
                        }}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
}
