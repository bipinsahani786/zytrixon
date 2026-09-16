import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import {
    ArrowUpRight,
    Zap,
    Globe2,
    ShieldCheck,
    CheckCircle2,
    Star,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import Logo from '@/components/ui/logo';

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = !mounted || theme === 'dark';

    // GSAP entrance animation
    useEffect(() => {
        if (!sectionRef.current) {
            return;
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.05 });

            if (leftColRef.current) {
                tl.fromTo(
                    leftColRef.current,
                    { opacity: 0, y: 15 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                    },
                    0,
                );
            }

            if (rightColRef.current) {
                tl.fromTo(
                    rightColRef.current,
                    { opacity: 0, scale: 0.95, y: 15 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                    },
                    0.1,
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative overflow-hidden transition-colors duration-300 ${
                isDark ? 'bg-[#04060b] text-white' : 'bg-slate-50 text-zinc-950'
            } px-4 pt-2 pb-10 sm:px-6 sm:pt-4 sm:pb-14 md:px-10 lg:px-12 lg:pt-5`}
        >
            {/* Lightweight Ambient Background Orbs */}
            <div className="pointer-events-none absolute top-0 right-1/4 h-[400px] w-[400px] transform-gpu rounded-full bg-cyan-500/10 blur-[70px] dark:bg-cyan-500/15" />
            <div className="pointer-events-none absolute top-1/3 left-10 h-[350px] w-[350px] transform-gpu rounded-full bg-indigo-600/10 blur-[70px] dark:bg-purple-600/10" />

            {/* Subtle Grid Pattern */}
            <div
                className={`pointer-events-none absolute inset-0 ${
                    isDark
                        ? 'bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]'
                        : 'bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]'
                } [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,#000_70%,transparent_100%)] bg-[size:3.5rem_3.5rem]`}
            />

            {/* Grid Container */}
            <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Left Column: Copy & Actions */}
                <div
                    ref={leftColRef}
                    className="flex flex-col justify-between opacity-100 lg:col-span-7"
                >
                    <div>
                        {/* Live Status / Location Badge */}
                        <div
                            className={`mb-4 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition-all duration-300 ${
                                isDark
                                    ? 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.18)]'
                                    : 'border-sky-500/40 bg-sky-50 text-sky-900 shadow-xs'
                            }`}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            <span className="font-bold tracking-wider uppercase">
                                Top Rated Software Company in Bihar
                            </span>
                            <span className="text-zinc-400 dark:text-zinc-500">
                                •
                            </span>
                            <span className="hidden font-medium text-zinc-600 sm:inline dark:text-zinc-400">
                                Global Delivery
                            </span>
                        </div>

                        {/* Master Headline */}
                        <h1
                            className={`mb-4 font-heading text-3xl leading-[1.08] font-black tracking-tight sm:text-5xl md:text-6xl lg:text-[66px] ${
                                isDark ? 'text-white' : 'text-zinc-950'
                            }`}
                        >
                            We Engineer <br />
                            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.25)] dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-300">
                                Digital Excellence &amp;
                            </span>
                            <br />
                            <span>Smart IoT Solutions.</span>
                        </h1>

                        {/* Subtitle Paragraph */}
                        <p
                            className={`mb-6 max-w-xl text-base leading-relaxed font-normal sm:text-lg md:text-xl ${
                                isDark ? 'text-zinc-300' : 'text-zinc-700'
                            }`}
                        >
                            From{' '}
                            <strong
                                className={`font-semibold underline decoration-cyan-500/60 decoration-2 underline-offset-4 ${
                                    isDark ? 'text-white' : 'text-zinc-950'
                                }`}
                            >
                                Samastipur to the World
                            </strong>{' '}
                            — Zytrixon Tech builds enterprise-grade Web, Mobile,
                            and IoT solutions that transform ambitious
                            businesses into global market leaders.
                        </p>

                        {/* Action Buttons Cluster: Start Your Project & See Our Work */}
                        <div className="mb-6 flex flex-wrap items-center gap-3.5 sm:gap-4">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-7 py-3.5 font-heading text-xs font-bold tracking-wider text-white uppercase shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(0,240,255,0.6)] active:scale-[0.98] sm:px-8 sm:py-4 sm:text-sm"
                            >
                                <span>Start Your Project</span>
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>

                            <Link
                                href="/portfolio"
                                className={`group inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 font-heading text-xs font-semibold tracking-wider uppercase backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] sm:px-7 sm:py-4 sm:text-sm ${
                                    isDark
                                        ? 'border-white/15 bg-white/[0.04] text-white hover:border-cyan-400/40 hover:bg-white/[0.09]'
                                        : 'border-zinc-300 bg-white text-zinc-900 shadow-sm hover:border-zinc-400 hover:bg-zinc-100'
                                }`}
                            >
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 transition-transform group-hover:scale-110">
                                    <svg
                                        className="ml-0.5 h-2.5 w-2.5 fill-cyan-400 text-cyan-400"
                                        viewBox="0 0 24 24"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                </div>
                                <span>See Our Work</span>
                            </Link>
                        </div>

                        {/* Social Proof & Security Line */}
                        <div
                            className={`mb-6 flex flex-wrap items-center gap-3 font-mono text-xs ${
                                isDark ? 'text-zinc-400' : 'text-zinc-600'
                            }`}
                        >
                            <div className="flex items-center gap-1 font-bold text-amber-500 dark:text-amber-400">
                                <Star className="h-3.5 w-3.5 fill-current" />
                                <span>4.9/5 Rating</span>
                            </div>
                            <span>•</span>
                            <span
                                className={`font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}
                            >
                                50+ Enterprise Shipments
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                                <CheckCircle2 className="h-3.5 w-3.5" /> 100%
                                Zero-Trust
                            </span>
                        </div>
                    </div>

                    {/* Trust & Architecture Metrics Cards Strip */}
                    <div
                        className={`grid w-full grid-cols-1 gap-3.5 border-t pt-5 sm:grid-cols-3 ${
                            isDark ? 'border-white/10' : 'border-zinc-200'
                        }`}
                    >
                        <div
                            className={`flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200 ${
                                isDark
                                    ? 'border-white/8 bg-white/[0.02] hover:border-cyan-500/40 hover:bg-white/[0.04]'
                                    : 'border-zinc-200 bg-white shadow-xs hover:border-sky-400'
                            }`}
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                                <Zap className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1 font-heading text-sm font-extrabold">
                                    <span
                                        className={
                                            isDark
                                                ? 'text-white'
                                                : 'text-zinc-950'
                                        }
                                    >
                                        &lt;20ms
                                    </span>
                                    <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                                        Edge
                                    </span>
                                </div>
                                <div
                                    className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
                                >
                                    Ultra-Fast Networks
                                </div>
                            </div>
                        </div>

                        <div
                            className={`flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200 ${
                                isDark
                                    ? 'border-white/8 bg-white/[0.02] hover:border-emerald-500/40 hover:bg-white/[0.04]'
                                    : 'border-zinc-200 bg-white shadow-xs hover:border-emerald-400'
                            }`}
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                <Globe2 className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1 font-heading text-sm font-extrabold">
                                    <span
                                        className={
                                            isDark
                                                ? 'text-white'
                                                : 'text-zinc-950'
                                        }
                                    >
                                        50+
                                    </span>
                                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                                        Shipped
                                    </span>
                                </div>
                                <div
                                    className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
                                >
                                    Global Deployments
                                </div>
                            </div>
                        </div>

                        <div
                            className={`flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200 ${
                                isDark
                                    ? 'border-white/8 bg-white/[0.02] hover:border-purple-500/40 hover:bg-white/[0.04]'
                                    : 'border-zinc-200 bg-white shadow-xs hover:border-purple-400'
                            }`}
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400">
                                <ShieldCheck className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1 font-heading text-sm font-extrabold">
                                    <span
                                        className={
                                            isDark
                                                ? 'text-white'
                                                : 'text-zinc-950'
                                        }
                                    >
                                        100%
                                    </span>
                                    <span className="font-mono text-xs text-purple-600 dark:text-purple-400">
                                        NDA
                                    </span>
                                </div>
                                <div
                                    className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
                                >
                                    Zero-Trust Security
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Pure Company Logo (Lifted slightly up and made bigger) */}
                <div
                    ref={rightColRef}
                    className="flex w-full -translate-y-4 items-center justify-center opacity-100 sm:-translate-y-6 lg:col-span-5 lg:-translate-y-10 lg:justify-center lg:pr-12 xl:pr-20 2xl:pr-28"
                >
                    <div className="relative flex w-full max-w-[580px] items-center justify-center p-4">
                        {/* Ambient Radial Aura behind Logo */}
                        <div className="pointer-events-none absolute h-80 w-80 transform-gpu rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-purple-600/15 blur-[75px] sm:h-[420px] sm:w-[420px]" />

                        {/* Extra Large Standalone Logo */}
                        <Logo
                            className={`relative z-10 h-auto w-full max-w-[360px] transition-transform duration-300 hover:scale-105 sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[580px] ${
                                isDark
                                    ? 'text-white drop-shadow-[0_15px_45px_rgba(0,240,255,0.3)]'
                                    : 'text-zinc-950 drop-shadow-[0_15px_35px_rgba(0,0,0,0.14)]'
                            }`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
