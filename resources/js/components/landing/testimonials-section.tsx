import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
    quote: string;
    author: string;
    company: string;
    accentColor: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'Zytrixon engineered a secure, confidential digital portal and encrypted client management system for our agency. Their zero-trust architecture and flawless execution ensured absolute data security and discretion. Outstanding technology partners.',
        author: 'Pawan Tyagi',
        company: 'Smart India Detective',
        accentColor: '#D4AF37', // Gold
    },
    {
        quote: 'Scaling our infrastructure operations required enterprise-level precision. Zytrixon delivered an end-to-end digital tracking and project management platform that streamlined our site workflows by 150%. Unmatched reliability and technical excellence.',
        author: 'Sandeep Tyagi',
        company: 'S.K. Infratech',
        accentColor: '#F97316', // Orange
    },
    {
        quote: 'From brand presence to high-concurrency commerce architecture, Zytrixon transformed Thread Ax into a modern digital powerhouse. Their team builds with speed, aesthetic perfection, and rock-solid performance.',
        author: 'Prince Chaudhary',
        company: 'Thread Ax',
        accentColor: '#00F0FF', // Cyan
    },
    {
        quote: 'Our retail and hyper-local delivery operations reached new heights with the fast, intuitive online ordering system Zytrixon created. Daily customer orders grew exponentially with zero downtime. Truly the best software team.',
        author: '',
        company: 'Mithila Grocery',
        accentColor: '#10B981', // Emerald green
    },
];

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const quoteRef = useRef<HTMLParagraphElement>(null);
    const authorRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const activeIsLight = mounted && isLight;

    useEffect(() => {
        if (!sectionRef.current) {
            return;
        }

        const ctx = gsap.context(() => {
            const headerEl =
                sectionRef.current?.querySelector('.zy-section-header');

            if (headerEl) {
                gsap.fromTo(
                    headerEl,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 70%',
                            once: true,
                        },
                    },
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Auto-play interval
    useEffect(() => {
        const interval = setInterval(() => {
            handleSlideChange((activeIndex + 1) % TESTIMONIALS.length);
        }, 6500);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleSlideChange = (newIndex: number) => {
        if (newIndex === activeIndex) {
            return;
        }

        // Fade out
        gsap.to([quoteRef.current, authorRef.current], {
            opacity: 0,
            y: 12,
            duration: 0.25,
            ease: 'power2.in',
            onComplete: () => {
                setActiveIndex(newIndex);
                // Fade in
                gsap.fromTo(
                    [quoteRef.current, authorRef.current],
                    { opacity: 0, y: -12 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                        ease: 'power2.out',
                        stagger: 0.08,
                    },
                );
            },
        });
    };

    const current = TESTIMONIALS[activeIndex];

    return (
        <section
            ref={sectionRef}
            className="zy-section"
            style={{
                background: activeIsLight ? '#f8fafc' : 'var(--zy-black)',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '80px',
                paddingBottom: '80px',
                transition: 'background-color 0.3s ease',
            }}
        >
            <div
                className="zy-section-header"
                style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <span className="zy-section-label">Testimonials</span>
                <h2
                    className="zy-section-title"
                    style={{
                        color: activeIsLight ? '#0f172a' : 'var(--zy-white)',
                    }}
                >
                    What Our Clients Say
                </h2>
                <p
                    className="zy-section-subtitle"
                    style={{
                        margin: '12px auto 0',
                        fontSize: '15px',
                        color: activeIsLight ? '#64748b' : 'var(--zy-gray-text)',
                    }}
                >
                    Real feedback from leaders driving business growth with Zytrixon Tech.
                </p>
            </div>

            <div
                style={{
                    maxWidth: '920px',
                    margin: '0 auto',
                    textAlign: 'center',
                    position: 'relative',
                    padding: '0 24px',
                    width: '100%',
                }}
            >
                {/* Huge stylized quote mark */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-70px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '200px',
                        lineHeight: 1,
                        fontFamily: 'serif',
                        color: activeIsLight
                            ? 'rgba(0, 0, 0, 0.04)'
                            : 'rgba(255, 255, 255, 0.03)',
                        zIndex: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                    }}
                >
                    &ldquo;
                </div>

                <div
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        minHeight: '220px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    {/* Testimonial Quote */}
                    <p
                        ref={quoteRef}
                        style={{
                            fontSize: 'clamp(16px, 2.2vw, 21px)',
                            lineHeight: 1.75,
                            color: activeIsLight ? '#334155' : 'rgba(255, 255, 255, 0.92)',
                            fontWeight: 400,
                            maxWidth: '820px',
                            margin: '0 auto 32px',
                            fontFamily: 'var(--font-sans)',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        &ldquo;{current.quote}&rdquo;
                    </p>

                    {/* Author & Company Meta */}
                    <div
                        ref={authorRef}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '6px',
                            marginTop: '4px',
                        }}
                    >
                        {/* Person Name in stylish italic font */}
                        {current.author ? (
                            <div
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(22px, 3vw, 28px)',
                                    fontWeight: 800,
                                    fontStyle: 'italic',
                                    letterSpacing: '-0.01em',
                                    color: activeIsLight ? '#0f172a' : '#ffffff',
                                    textTransform: 'capitalize',
                                }}
                            >
                                {current.author}
                            </div>
                        ) : null}

                        {/* Company Name in stylish italic font with color accent */}
                        <div
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: current.author
                                    ? 'clamp(15px, 2vw, 18px)'
                                    : 'clamp(24px, 3.5vw, 30px)',
                                fontWeight: 700,
                                fontStyle: 'italic',
                                letterSpacing: '0.04em',
                                textTransform: current.author ? 'none' : 'capitalize',
                                color: current.accentColor,
                                textShadow: activeIsLight
                                    ? 'none'
                                    : `0 0 25px ${current.accentColor}44`,
                            }}
                        >
                            {current.company}
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '12px',
                        marginTop: '50px',
                    }}
                >
                    {TESTIMONIALS.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => handleSlideChange(i)}
                            aria-label={`Go to testimonial for ${t.company}`}
                            style={{
                                width: activeIndex === i ? '36px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                background:
                                    activeIndex === i
                                        ? t.accentColor
                                        : activeIsLight
                                          ? 'rgba(0,0,0,0.15)'
                                          : 'rgba(255,255,255,0.2)',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0,
                                transition: 'all 0.35s var(--zy-ease)',
                                boxShadow:
                                    activeIndex === i && !activeIsLight
                                        ? `0 0 12px ${t.accentColor}66`
                                        : 'none',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
