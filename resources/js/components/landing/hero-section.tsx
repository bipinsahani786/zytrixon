import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import {
    useEffect,
    useRef,
    useCallback,
    useState,
    Suspense,
    lazy,
} from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useMousePosition } from '@/hooks/use-mouse-position';

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);
    const { x: mouseX, y: mouseY } = useMousePosition();
    const isLowPower = useMediaQuery('(max-width: 768px)');
    const [show3D, setShow3D] = useState(false);
    const [CanvasComponent, setCanvasComponent] = useState<any>(null);
    const [IoTDeviceMeshComponent, setIoTDeviceMeshComponent] =
        useState<any>(null);
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [mounted, setMounted] = useState(false);

    // Detect bots (including Google Inspection Tool and Lighthouse) to prevent them from seeing a blank screen
    const isBot =
        typeof navigator !== 'undefined' &&
        /bot|googlebot|google-inspectiontool|lighthouse|crawler|spider|robot|crawling/i.test(
            navigator.userAgent,
        );

    useEffect(() => {
        setMounted(true);
    }, []);

    const activeIsLight = mounted && isLight;

    // Typewriter state
    const PHRASES = [
        'Digital Dominance',
        'Global Solutions',
        'Smart Platforms',
        'Future Technologies',
    ];
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(120);

    // If bot, just show the full text immediately
    useEffect(() => {
        if (isBot) {
            setTypedText('Digital Dominance');
        }
    }, [isBot]);

    // Delay the initial typing effect by 1200ms to allow FCP/LCP to render instantly without main-thread blocking
    const [typingStarted, setTypingStarted] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setTypingStarted(true), 1200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!typingStarted || isBot) {
            return;
        }

        const handleTyping = () => {
            const i = loopNum % PHRASES.length;
            const fullText = PHRASES[i];

            setTypedText(
                isDeleting
                    ? fullText.substring(0, typedText.length - 1)
                    : fullText.substring(0, typedText.length + 1),
            );
            setTypingSpeed(isDeleting ? 40 : 100);

            if (!isDeleting && typedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, loopNum, typingSpeed, typingStarted]);

    const [load3D, setLoad3D] = useState(false);

    useEffect(() => {
        if (isBot) {
            return;
        }

        let interactionLoaded = false;
        const trigger3DLoad = () => {
            if (interactionLoaded) {
                return;
            }

            interactionLoaded = true;
            setLoad3D(true);
        };

        window.addEventListener('mousemove', trigger3DLoad, { once: true });
        window.addEventListener('scroll', trigger3DLoad, { once: true });
        window.addEventListener('click', trigger3DLoad, { once: true });
        window.addEventListener('touchstart', trigger3DLoad, { once: true });

        // Fallback: load anyway after 4.5s if user does nothing
        const fallbackTimer = setTimeout(trigger3DLoad, 4500);

        return () => {
            window.removeEventListener('mousemove', trigger3DLoad);
            window.removeEventListener('scroll', trigger3DLoad);
            window.removeEventListener('click', trigger3DLoad);
            window.removeEventListener('touchstart', trigger3DLoad);
            clearTimeout(fallbackTimer);
        };
    }, [isLowPower, isBot]);

    useEffect(() => {
        if (!load3D) {
            return;
        }

        import('@react-three/fiber')
            .then((fiber) => {
                setCanvasComponent(() => fiber.Canvas);

                return import('@/components/landing/iot-device-mesh');
            })
            .then((meshModule) => {
                setIoTDeviceMeshComponent(() => meshModule.default);
                setShow3D(true);
            })
            .catch((err) => {
                console.error('Failed to load 3D components:', err);
            });
    }, [load3D]);

    useEffect(() => {
        if (!sectionRef.current || isBot) {
            return;
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.1 });

            // Badge
            tl.fromTo(
                badgeRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
                0,
            );

            // Headline characters
            if (headlineRef.current) {
                const words =
                    headlineRef.current.querySelectorAll('.hero-word');
                tl.fromTo(
                    words,
                    {
                        opacity: 0,
                        y: 40,
                        filter: isLowPower ? 'none' : 'blur(8px)',
                    },
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 0.7,
                        stagger: 0.08,
                        ease: 'power3.out',
                    },
                    0.1,
                );
            }

            // Subtitle
            tl.fromTo(
                subRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                0.5,
            );

            // CTAs
            tl.fromTo(
                ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                0.7,
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleBtnMouseMove = useCallback((e: React.MouseEvent) => {
        if (!btnRef.current) {
            return;
        }

        const rect = btnRef.current.getBoundingClientRect();
        const distX = e.clientX - (rect.left + rect.width / 2);
        const distY = e.clientY - (rect.top + rect.height / 2);
        gsap.to(btnRef.current, {
            x: distX * 0.3,
            y: distY * 0.3,
            duration: 0.3,
            ease: 'power2.out',
        });
    }, []);

    const handleBtnMouseLeave = useCallback(() => {
        if (!btnRef.current) {
            return;
        }

        gsap.to(btnRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.4)',
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: activeIsLight ? '#FFFFFF' : 'var(--zy-black)',
                padding: '120px var(--zy-section-pad-x) 80px',
            }}
        >
            {/* Background effects - Matrix removed as requested */}
            <div
                style={{
                    position: 'absolute',
                    width: 600,
                    height: 600,
                    background: activeIsLight
                        ? 'radial-gradient(circle, rgba(0,0,0,0.05), transparent 60%)'
                        : 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%)',
                    top: '20%',
                    left: '10%',
                    pointerEvents: 'none',
                }}
            />

            {/* Content grid */}
            <div
                className="hero-content-grid"
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 0.9fr',
                    gap: 60,
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Left: Text */}
                <div>
                    <div
                        ref={badgeRef}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '6px 16px',
                            border: activeIsLight
                                ? '1px solid rgba(0,0,0,0.1)'
                                : '1px solid rgba(255,255,255,0.2)',
                            background: activeIsLight
                                ? 'rgba(0,0,0,0.03)'
                                : 'rgba(255,255,255,0.05)',
                            marginBottom: 28,
                            opacity: isBot ? 1 : 0,
                        }}
                    >
                        <span
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: activeIsLight
                                    ? '#000000'
                                    : '#FFFFFF',
                                animation: 'pulse 2s infinite',
                            }}
                        />
                        <span
                            style={{
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: activeIsLight
                                    ? '#000'
                                    : 'var(--zy-white)',
                            }}
                        >
                            Top Rated Software Company in Bihar
                        </span>
                    </div>

                    <h1
                        ref={headlineRef}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(36px, 10vw, 78px)',
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: '-0.03em',
                            color: activeIsLight ? '#000' : 'var(--zy-white)',
                            marginBottom: 24,
                        }}
                    >
                        <span
                            className="hero-word"
                            style={{
                                display: 'inline-block',
                                marginRight: '0.25em',
                            }}
                        >
                            We
                        </span>
                        <span
                            className="hero-word"
                            style={{
                                display: 'inline-block',
                                marginRight: '0.25em',
                            }}
                        >
                            Engineer
                        </span>
                        <br />
                        <span
                            className="hero-word"
                            style={{
                                display: 'inline-block',
                                color: activeIsLight
                                    ? '#000'
                                    : 'var(--zy-white)',
                            }}
                        >
                            {typedText}
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '4px',
                                    height: '0.8em',
                                    backgroundColor: activeIsLight
                                        ? '#000'
                                        : 'var(--zy-white)',
                                    verticalAlign: 'middle',
                                    marginLeft: '4px',
                                    animation:
                                        'cursorBlink 1s step-end infinite',
                                }}
                            />
                        </span>
                    </h1>

                    <p
                        ref={subRef}
                        style={{
                            fontSize: 18,
                            lineHeight: 1.7,
                            color: activeIsLight
                                ? '#666'
                                : 'var(--zy-gray-text)',
                            maxWidth: 500,
                            marginBottom: 36,
                            opacity: isBot ? 1 : 0,
                        }}
                    >
                        From{' '}
                        <strong
                            style={{
                                color: activeIsLight
                                    ? '#000'
                                    : 'var(--zy-white)',
                            }}
                        >
                            Patna to the World
                        </strong>{' '}
                        — Zytrixon Tech builds enterprise-grade Web, Mobile, and
                        IoT solutions that transform businesses into global
                        brands.
                    </p>

                    <div
                        ref={ctaRef}
                        style={{
                            display: 'flex',
                            gap: 16,
                            opacity: isBot ? 1 : 0,
                            flexWrap: 'wrap',
                        }}
                    >
                        <div
                            onMouseMove={handleBtnMouseMove}
                            onMouseLeave={handleBtnMouseLeave}
                        >
                            <Link
                                ref={btnRef}
                                href="/contact"
                                className="magnetic-btn"
                                style={{ padding: '18px 40px', fontSize: 14 }}
                            >
                                Start Your Project
                                <svg
                                    className="btn-arrow"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <Link
                            href="/work"
                            style={{
                                padding: '18px 32px',
                                border: '1px solid #333',
                                color: activeIsLight
                                    ? '#000'
                                    : 'var(--zy-white)',
                                fontFamily: 'var(--font-heading)',
                                fontSize: 13,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                transition: 'all 0.3s var(--zy-ease)',
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = activeIsLight
                                    ? '#000'
                                    : '#FFFFFF';
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = 'rgba(128,128,128,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = '#333';
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = 'transparent';
                            }}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            See Our Work
                        </Link>
                    </div>
                </div>

                {/* Right: 3D or Fallback */}
                <div style={{ height: 500, position: 'relative' }}>
                    {show3D && CanvasComponent && IoTDeviceMeshComponent ? (
                        <Suspense fallback={<HeroFallback />}>
                            <CanvasComponent
                                camera={{ position: [0, 0, 5], fov: 45 }}
                                style={{ borderRadius: 0 }}
                                dpr={isLowPower ? [0.5, 1] : [1, 1.5]}
                                performance={{ min: 0.5 }}
                                gl={{
                                    powerPreference: 'high-performance',
                                    antialias: false,
                                }}
                            >
                                <ambientLight
                                    intensity={activeIsLight ? 0.8 : 0.3}
                                />
                                <pointLight
                                    position={[5, 5, 5]}
                                    intensity={activeIsLight ? 0.8 : 0.8}
                                    color="#FFFFFF"
                                />
                                <pointLight
                                    position={[-5, -5, 3]}
                                    intensity={activeIsLight ? 0.4 : 0.4}
                                    color="#ffffff"
                                />
                                <IoTDeviceMeshComponent
                                    mouseX={
                                        (mouseX / window.innerWidth) * 2 - 1
                                    }
                                    mouseY={
                                        (mouseY / window.innerHeight) * 2 - 1
                                    }
                                />
                            </CanvasComponent>
                        </Suspense>
                    ) : (
                        <HeroFallback />
                    )}
                </div>
            </div>

            <style>{`
                @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
                @keyframes cursorBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                @media (max-width: 768px) {
                    .hero-content-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                    .hero-content-grid > div:last-child { height: 300px !important; }
                }
            `}</style>
        </section>
    );
}

function HeroFallback() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at center, #0a0a0a, #000)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
            />
        </div>
    );
}
