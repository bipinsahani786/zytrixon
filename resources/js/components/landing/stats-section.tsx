import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { value: 50, suffix: '+', label: 'Projects Done' },
    { value: 98, suffix: '%', label: 'Success Rate' },
    { value: 20, suffix: '+', label: 'Expert Engineers' },
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
            className="zy-section bg-background transition-colors duration-300"
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-5xl mx-auto text-center">
                {STATS.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground flex items-baseline justify-center">
                            <span
                                ref={(el) => {
                                    numbersRef.current[i] = el;
                                }}
                            >
                                0
                            </span>
                            <span className="text-primary ml-1">{stat.suffix}</span>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-3">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
