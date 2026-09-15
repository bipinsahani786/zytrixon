import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Logo from '@/components/ui/logo';

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const zRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        // Check session storage on client mount to avoid hydration mismatch
        const hasLoaded =
            typeof window !== 'undefined'
                ? sessionStorage.getItem('zytrixon_loaded')
                : null;

        if (hasLoaded) {
            setVisible(false);
            document.body.classList.remove('loading');

            return; // Prevent GSAP execution if already loaded
        }

        document.body.classList.add('loading');

        const tl = gsap.timeline({
            onComplete: () => {
                setVisible(false);
                document.body.classList.remove('loading');

                if (typeof window !== 'undefined') {
                    sessionStorage.setItem('zytrixon_loaded', 'true');
                }
            },
        });

        // Setup and animate the Z logo smoothly
        if (zRef.current) {
            tl.fromTo(
                zRef.current,
                { opacity: 0, scale: 0.8, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                },
            );
        }

        // Smooth scattered flying letters
        tl.fromTo(
            lettersRef.current,
            {
                x: () => (Math.random() - 0.5) * window.innerWidth * 0.3,
                y: () => (Math.random() - 0.5) * window.innerHeight * 0.3,
                opacity: 0,
                scale: () => Math.random() * 1.5 + 1,
                rotationZ: () => (Math.random() - 0.5) * 45,
                filter: 'blur(8px)',
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotationZ: 0,
                filter: 'blur(0px)',
                duration: 0.6,
                stagger: { each: 0.02, from: 'random' },
                ease: 'power2.out',
                force3D: true,
            },
            '-=0.3', // Start while logo is still animating
        );

        // Fade out the entire screen smoothly
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.inOut',
            delay: 0.1,
        });

        // Allow skip on click
        const handleClick = () => {
            tl.progress(1);
        };

        containerRef.current?.addEventListener('click', handleClick);

        return () => {
            containerRef.current?.removeEventListener('click', handleClick);

            if (tl) {
                tl.kill();
            }

            document.body.classList.remove('loading');
        };
    }, [visible]);

    if (!visible) {
        return null;
    }

    const word = 'ZYTRIXON'.split('');

    return (
        <div
            ref={containerRef}
            className="loading-screen"
            style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                ref={zRef}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '-24px',
                }}
            >
                <Logo
                    className="h-[140px] w-auto text-[var(--zy-white)]"
                    style={{
                        clipPath: 'inset(0 0 16% 0)',
                        transform: 'translateY(8%)',
                    }}
                />
            </div>
            <div style={{ display: 'flex', gap: '6px', zIndex: 2 }}>
                {word.map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => {
                            lettersRef.current[i] = el;
                        }}
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
