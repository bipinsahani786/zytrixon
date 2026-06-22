import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-media-query';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const [isHovering, setIsHovering] = useState(false);
    const [cursorLabel, setCursorLabel] = useState('');
    const mousePos = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (isMobile) {
            document.body.classList.remove('custom-cursor-active');
            return;
        }

        document.body.classList.add('custom-cursor-active');

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');

            if (interactive) {
                setIsHovering(true);
                const label = interactive.getAttribute('data-cursor');
                setCursorLabel(label || '');
            } else {
                setIsHovering(false);
                setCursorLabel('');
            }
        };

        let rafId: number;

        const animate = () => {
            // Dot follows immediately
            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.8;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.8;

            // Ring follows with lag
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

            if (dotRef.current) {
                dotRef.current.style.left = `${dotPos.current.x}px`;
                dotRef.current.style.top = `${dotPos.current.y}px`;
            }

            if (ringRef.current) {
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }

            if (labelRef.current) {
                labelRef.current.style.left = `${ringPos.current.x}px`;
                labelRef.current.style.top = `${ringPos.current.y + 40}px`;
            }

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(rafId);
            document.body.classList.remove('custom-cursor-active');
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            <div
                ref={dotRef}
                className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
            />
            <div
                ref={ringRef}
                className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
            />
            <div
                ref={labelRef}
                className={`cursor-label ${cursorLabel ? 'visible' : ''}`}
            >
                {cursorLabel}
            </div>
        </>
    );
}
