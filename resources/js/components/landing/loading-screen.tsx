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

        // Setup scatter positions for letters
        lettersRef.current.forEach((letter) => {
            if (!letter) return;
            gsap.set(letter, {
                x: () => (Math.random() - 0.5) * window.innerWidth * 0.8,
                y: () => (Math.random() - 0.5) * window.innerHeight * 0.8,
                opacity: 0,
                scale: Math.random() * 2 + 1,
                rotationZ: (Math.random() - 0.5) * 180,
                force3D: true,
            });
        });

        // Setup and animate the Z logo
        if (zRef.current) {
            gsap.set(zRef.current, {
                opacity: 0,
                scale: 0.5,
                y: 50,
            });

            tl.to(zRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                ease: 'power4.out',
            });
        }

        // Animate letters flying in to form the word
        tl.to(lettersRef.current, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            duration: 1.2,
            stagger: { each: 0.05, from: 'random' },
            ease: 'expo.out',
            force3D: true,
        }, "-=0.6");

        // Brief hold and pulse both together
        tl.to([zRef.current, ...lettersRef.current], {
            scale: 1.03,
            duration: 0.3,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: 1,
        }, "+=0.2");

        // Fade out the entire screen
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.inOut',
        });

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
            <div ref={zRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-16px' }}>
                <Logo style={{ height: '90px', width: 'auto', color: 'var(--zy-white)', clipPath: 'inset(0 0 16% 0)', transform: 'translateY(8%)' }} />
            </div>
            <div style={{ display: 'flex', gap: '4px', zIndex: 2 }}>
                {word.map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => { lettersRef.current[i] = el; }}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '26px',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            color: 'var(--zy-white)',
                            display: 'inline-block',
                            textTransform: 'uppercase',
                            willChange: 'transform, opacity',
                        }}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
}
