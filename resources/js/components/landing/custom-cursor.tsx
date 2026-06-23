import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

interface Particle {
    x: number;
    y: number;
    alpha: number;
    size: number;
}

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mousePos = useRef({ x: -100, y: -100 });
    const animFrame = useRef<number>(0);

    const onMouseMove = useCallback((e: MouseEvent) => {
        mousePos.current = { x: e.clientX, y: e.clientY };

        if (dotRef.current) {
            gsap.to(dotRef.current, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
        }
        if (ringRef.current) {
            gsap.to(ringRef.current, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
        }

        // Add particle
        particles.current.push({
            x: e.clientX,
            y: e.clientY,
            alpha: 0.8,
            size: Math.random() * 4 + 2,
        });
        if (particles.current.length > 40) {
            particles.current.shift();
        }
    }, []);

    const onMouseEnterInteractive = useCallback((e: Event) => {
        const target = e.currentTarget as HTMLElement;
        ringRef.current?.classList.add('hovering');
        dotRef.current?.classList.add('hovering');

        const label = target.getAttribute('data-cursor');
        if (label && labelRef.current) {
            labelRef.current.textContent = label;
            labelRef.current.classList.add('visible');
        }
    }, []);

    const onMouseLeaveInteractive = useCallback(() => {
        ringRef.current?.classList.remove('hovering');
        dotRef.current?.classList.remove('hovering');
        if (labelRef.current) {
            labelRef.current.classList.remove('visible');
        }
    }, []);

    // Canvas particle animation loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isLight = document.body.classList.contains('light');

            particles.current.forEach((p, i) => {
                p.alpha -= 0.015;
                p.size *= 0.98;

                if (p.alpha <= 0) {
                    particles.current.splice(i, 1);
                    return;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = isLight
                    ? `rgba(0, 0, 0, ${p.alpha * 0.3})`
                    : `rgba(255, 255, 255, ${p.alpha * 0.3})`;
                ctx.fill();
            });

            animFrame.current = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            cancelAnimationFrame(animFrame.current);
            window.removeEventListener('resize', resize);
        };
    }, []);

    useEffect(() => {
        document.body.classList.add('custom-cursor-active');
        window.addEventListener('mousemove', onMouseMove);

        const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor]');
        interactives.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnterInteractive);
            el.addEventListener('mouseleave', onMouseLeaveInteractive);
        });

        // Re-register on DOM changes
        const observer = new MutationObserver(() => {
            const newInteractives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor]');
            newInteractives.forEach((el) => {
                el.addEventListener('mouseenter', onMouseEnterInteractive);
                el.addEventListener('mouseleave', onMouseLeaveInteractive);
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.body.classList.remove('custom-cursor-active');
            window.removeEventListener('mousemove', onMouseMove);
            observer.disconnect();
            interactives.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnterInteractive);
                el.removeEventListener('mouseleave', onMouseLeaveInteractive);
            });
        };
    }, [onMouseMove, onMouseEnterInteractive, onMouseLeaveInteractive]);

    // Detect touch device
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    pointerEvents: 'none',
                }}
            />
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
            <div ref={labelRef} className="cursor-label" />
        </>
    );
}
