import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: -100, y: -100 });

    const onMouseMove = useCallback((e: MouseEvent) => {
        mousePos.current = { x: e.clientX, y: e.clientY };

        if (dotRef.current) {
            gsap.to(dotRef.current, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out', force3D: true });
        }
        if (ringRef.current) {
            gsap.to(ringRef.current, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out', force3D: true });
        }
    }, []);

    const onMouseEnterInteractive = useCallback((e: Event) => {
        const target = e.currentTarget as HTMLElement;
        ringRef.current?.classList.add('hovering');
        dotRef.current?.classList.add('hovering');
        
        if (ringRef.current) {
            gsap.to(ringRef.current, { scale: 1.5, duration: 0.2, ease: 'power2.out' });
        }

        const label = target.getAttribute('data-cursor');
        if (label && labelRef.current) {
            labelRef.current.textContent = label;
            labelRef.current.classList.add('visible');
        }
    }, []);

    const onMouseLeaveInteractive = useCallback(() => {
        ringRef.current?.classList.remove('hovering');
        dotRef.current?.classList.remove('hovering');
        
        if (ringRef.current) {
            gsap.to(ringRef.current, { scale: 1, duration: 0.2, ease: 'power2.out' });
        }

        if (labelRef.current) {
            labelRef.current.classList.remove('visible');
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && ('ontouchstart' in window || window.innerWidth < 1024)) {
            return;
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        document.body.classList.add('custom-cursor-active');
        window.addEventListener('mousemove', onMouseMove);

        const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor]');
        interactives.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnterInteractive);
            el.addEventListener('mouseleave', onMouseLeaveInteractive);
        });

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
    }, [mounted, onMouseMove, onMouseEnterInteractive, onMouseLeaveInteractive]);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div
                ref={dotRef}
                className="cursor-dot"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    marginTop: '-4px',
                    marginLeft: '-4px',
                }}
            />
            <div
                ref={ringRef}
                className="cursor-ring"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '32px',
                    height: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '50%',
                    marginTop: '-16px',
                    marginLeft: '-16px',
                    pointerEvents: 'none',
                    // Removed 'transform' from transition since GSAP handles it
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                    willChange: 'transform',
                    zIndex: 9998,
                }}
            >
                <div
                    ref={labelRef}
                    className="cursor-label"
                    style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'white',
                        color: 'black',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        opacity: 0,
                        transition: 'opacity 0.2s ease, transform 0.2s ease',
                        pointerEvents: 'none',
                    }}
                />
            </div>
            
            <style>{`
                body {
                    cursor: none;
                }
                a, button, input, textarea, select, [role="button"], [data-cursor] {
                    cursor: none;
                }
                .hovering {
                    background: rgba(255, 255, 255, 0.1) !important;
                    border-color: white !important;
                }
                html.light .hovering {
                    background: rgba(0, 0, 0, 0.05) !important;
                    border-color: black !important;
                }
                .cursor-label.visible {
                    opacity: 1 !important;
                    transform: translateX(-50%) translateY(-5px) !important;
                }
            `}</style>
        </>
    );
}
