import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useCallback } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function FooterCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!btnRef.current) {
            return;
        }

        const rect = btnRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;

        gsap.to(btnRef.current, {
            x: distX * 0.25,
            y: distY * 0.25,
            duration: 0.3,
            ease: 'power2.out',
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
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

    useEffect(() => {
        if (!sectionRef.current) {
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                headlineRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
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
            className="border-t border-border bg-background px-6 py-28 text-center text-foreground transition-colors duration-300 sm:px-12 sm:py-36"
        >
            <h2
                ref={headlineRef}
                className="mx-auto max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
                Let's Build Something{' '}
                <span className="text-primary">Extraordinary</span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Ready to transform your idea into reality? Let's start the
                conversation.
            </p>

            <div
                className="mt-10 inline-block"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <Link
                    ref={btnRef}
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-heading text-sm font-bold tracking-wider text-primary-foreground uppercase shadow-[0_0_30px_var(--accent-cyan-glow)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_var(--accent-cyan-glow)] active:scale-95 sm:px-12 sm:py-5 sm:text-base"
                >
                    <span>Start a Project</span>
                    <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
