import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        document.body.classList.add('loading');

        const tl = gsap.timeline({
            onComplete: () => {
                setVisible(false);
                document.body.classList.remove('loading');
            },
        });

        // Dots scatter from random positions → converge to grid
        dotsRef.current.forEach((dot, i) => {
            if (!dot) return;
            gsap.set(dot, {
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                opacity: 0,
                scale: 0,
            });
        });

        tl.to(dotsRef.current, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: { each: 0.03, from: 'random' },
            ease: 'power3.out',
        });

        // Brief hold
        tl.to({}, { duration: 0.2 });

        // Flash accent color on all dots
        tl.to(dotsRef.current, {
            backgroundColor: 'var(--zy-white)',
            duration: 0.15,
            stagger: { each: 0.02, from: 'center' },
            ease: 'power2.inOut',
        });

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

    // Create a "Z" shape from a 5x5 dot grid
    const zPattern = [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ];

    let dotIndex = 0;

    return (
        <div ref={containerRef} className="loading-screen">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 12px)', gap: '8px' }}>
                {zPattern.flat().map((active, i) => {
                    if (!active) {
                        return <div key={i} style={{ width: 12, height: 12 }} />;
                    }
                    const idx = dotIndex++;
                    return (
                        <div
                            key={i}
                            ref={(el) => { dotsRef.current[idx] = el; }}
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: 'var(--zy-white)',
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
