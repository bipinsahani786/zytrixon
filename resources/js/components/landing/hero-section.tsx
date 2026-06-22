import { useEffect, useRef, useState, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useIsLowPower } from '@/hooks/use-media-query';
import IoTDeviceMesh from './iot-device-mesh';

// ---- Magnetic Button Component ----
function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
    const btnRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;

        gsap.to(btnRef.current, {
            x: distX * 0.3,
            y: distY * 0.3,
            duration: 0.3,
            ease: 'power2.out',
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!btnRef.current) return;
        gsap.to(btnRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.4)',
        });
    }, []);

    return (
        <a
            ref={btnRef}
            href={href}
            className="magnetic-btn"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </a>
    );
}

// ---- Split Text Animation ----
function AnimatedHeadline({ text, delay = 0 }: { text: string; delay?: number }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const chars = containerRef.current.querySelectorAll('.split-char');

        gsap.set(chars, { opacity: 0, filter: 'blur(12px)', y: 20 });

        gsap.to(chars, {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power3.out',
            delay: delay + 1.3, // Wait for loading screen
        });
    }, [delay]);

    // Split text into words, then characters
    const words = text.split(' ');

    return (
        <div ref={containerRef} aria-label={text}>
            {words.map((word, wi) => (
                <span key={wi} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {word.split('').map((char, ci) => (
                        <span
                            key={ci}
                            className="split-char"
                            style={{
                                display: 'inline-block',
                                willChange: 'transform, opacity, filter',
                            }}
                        >
                            {char}
                        </span>
                    ))}
                    {wi < words.length - 1 && (
                        <span className="split-char" style={{ display: 'inline-block' }}>
                            &nbsp;
                        </span>
                    )}
                </span>
            ))}
        </div>
    );
}

// ---- Mobile Fallback (CSS-only) ----
function HeroFallback() {
    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
            }}
        >
            {/* Animated gradient orb */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '500px',
                    height: '500px',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,245,212,0.12) 0%, transparent 70%)',
                    animation: 'pulse-glow 4s ease-in-out infinite alternate',
                }}
            />
            {/* Grid pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(rgba(0,245,212,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,245,212,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
                }}
            />
            <style>{`
                @keyframes pulse-glow {
                    0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
                    100% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
                }
            `}</style>
        </div>
    );
}

// ---- Main Hero Section ----
export default function HeroSection() {
    const isLowPower = useIsLowPower();
    const [mouseNorm, setMouseNorm] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouseNorm({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Subheadline fade-in
    useEffect(() => {
        if (!subRef.current) return;
        gsap.fromTo(
            subRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 2.2 }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                minHeight: '600px',
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {/* 3D Scene or Fallback */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                }}
            >
                {isLowPower ? (
                    <HeroFallback />
                ) : (
                    <Suspense fallback={<HeroFallback />}>
                        <Canvas
                            camera={{ position: [0, 0, 5], fov: 45 }}
                            style={{ background: 'transparent' }}
                            gl={{ antialias: true, alpha: true }}
                        >
                            <ambientLight intensity={0.3} />
                            <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
                            <pointLight position={[-3, -2, 3]} intensity={0.5} color="#00F5D4" />
                            <pointLight position={[0, 0, 4]} intensity={0.3} color="#00F5D4" />
                            <IoTDeviceMesh mouseX={mouseNorm.x} mouseY={mouseNorm.y} />
                        </Canvas>
                    </Suspense>
                )}
            </div>

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    maxWidth: '900px',
                    padding: '0 24px',
                }}
            >
                <AnimatedHeadline text="We Build the Future of Connected Technology" />

                <p
                    ref={subRef}
                    style={{
                        fontSize: 'clamp(16px, 2.2vw, 20px)',
                        color: '#888',
                        marginTop: '24px',
                        lineHeight: 1.7,
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        opacity: 0,
                    }}
                >
                    IoT solutions, web platforms & digital products crafted with precision
                    from Patna, India — for the world.
                </p>

                <div style={{ marginTop: '48px', opacity: 0 }} ref={(el) => {
                    if (el) {
                        gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 2.5 });
                        gsap.set(el, { y: 20 });
                    }
                }}>
                    <MagneticButton href="/contact">
                        Start a Project
                        <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </MagneticButton>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0,
                }}
                ref={(el) => {
                    if (el) {
                        gsap.to(el, { opacity: 0.5, duration: 0.6, delay: 3.0 });
                    }
                }}
            >
                <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666' }}>
                    Scroll
                </span>
                <div
                    style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, #00F5D4, transparent)',
                        animation: 'scroll-pulse 2s ease-in-out infinite',
                    }}
                />
                <style>{`
                    @keyframes scroll-pulse {
                        0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
                        50% { opacity: 1; transform: scaleY(1); }
                    }
                `}</style>
            </div>
        </section>
    );
}
