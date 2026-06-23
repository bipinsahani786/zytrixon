import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
    {
        quote: 'Zytrixon understands business logic, not just code. The best software team in Patna. They delivered our School Management System ahead of schedule.',
        author: 'Rahul Kumar',
        role: 'CEO, TechEdu',
        company: 'TechEdu',
    },
    {
        quote: 'Our sales increased by 200% after they revamped our e-commerce site. The team was professional, responsive, and truly cared about our success.',
        author: 'Sneha Singh',
        role: 'Founder, DressUp',
        company: 'DressUp',
    },
    {
        quote: 'Professional, Timely, and Creative. The IoT dashboard is working flawlessly. Their engineering team handles complexity with ease.',
        author: 'Amit Raj',
        role: 'Manager, SmartFactory',
        company: 'SmartFactory',
    },
    {
        quote: 'From concept to deployment, Zytrixon was a true technology partner. The affiliate marketing app they built exceeded every expectation.',
        author: 'Vikash Gupta',
        role: 'Founder, EarnMax',
        company: 'EarnMax',
    },
];

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Animate slide change
    useEffect(() => {
        if (!trackRef.current) return;
        const cardWidth = trackRef.current.children[0]?.getBoundingClientRect().width || 400;
        const gap = 24;
        gsap.to(trackRef.current, {
            x: -(cardWidth + gap) * activeIndex,
            duration: 0.6,
            ease: 'power3.out',
        });
    }, [activeIndex]);

    return (
        <section ref={sectionRef} className="zy-section" style={{ background: 'var(--zy-black)', overflow: 'hidden' }}>
            <div className="zy-section-header" style={{ textAlign: 'center' }}>
                <span className="zy-section-label">Testimonials</span>
                <h2 className="zy-section-title">What Our Clients Say</h2>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                {/* Track */}
                <div style={{ overflow: 'hidden' }}>
                    <div
                        ref={trackRef}
                        style={{
                            display: 'flex',
                            gap: '24px',
                        }}
                    >
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                {/* Quote icon */}
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="#FFFFFF"
                                    style={{ marginBottom: '20px', opacity: 0.4 }}
                                >
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.7 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.29 0-2.53-.66-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.7 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.29 0-2.53-.66-2.917-1.179z" />
                                </svg>

                                <p className="testimonial-quote">"{t.quote}"</p>

                                <div>
                                    <div className="testimonial-author">{t.author}</div>
                                    <div className="testimonial-role">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots navigation */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        marginTop: '40px',
                    }}
                >
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            style={{
                                width: activeIndex === i ? '32px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                border: 'none',
                                background: activeIndex === i ? '#FFFFFF' : '#333',
                                transition: 'all 0.3s var(--zy-ease)',
                                padding: 0,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
