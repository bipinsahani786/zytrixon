import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { value: 25, suffix: '+', label: 'Projects Done' },
    { value: 98, suffix: '%', label: 'Success Rate' },
    { value: 10, suffix: '+', label: 'Expert Engineers' },
    { value: 5, suffix: '+', label: 'Countries Served' },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) {
            return;
        }

        const ctx = gsap.context(() => {
            // Count up animation
            STATS.forEach((stat, i) => {
                const el = numbersRef.current[i];

                if (!el) {
                    return;
                }

                const obj = { val: 0 };

                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                    onEnter: () => {
                        gsap.to(obj, {
                            val: stat.value,
                            duration: 2,
                            ease: 'power2.out',
                            onUpdate: () => {
                                el.textContent = Math.round(obj.val).toString();
                            },
                        });
                    },
                });
            });

            // Section entrance
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
                        start: 'top 85%',
                        once: true,
                    },
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="zy-section"
            style={{
                background: 'var(--zy-black)',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '48px',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    textAlign: 'center',
                }}
            >
                {STATS.map((stat, i) => (
                    <div key={i}>
                        <div className="stat-number">
                            <span
                                ref={(el) => {
                                    numbersRef.current[i] = el;
                                }}
                            >
                                0
                            </span>
                            <span className="stat-suffix">{stat.suffix}</span>
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
