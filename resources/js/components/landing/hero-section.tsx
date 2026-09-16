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
import {
    useEffect,
    useRef,
    useState,
} from 'react';
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
            } pt-2 sm:pt-4 lg:pt-5 pb-10 sm:pb-14 px-4 sm:px-6 md:px-10 lg:px-12`}
        >
            {/* Lightweight Ambient Background Orbs */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[70px] pointer-events-none transform-gpu" />
            <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-600/10 dark:bg-purple-600/10 rounded-full blur-[70px] pointer-events-none transform-gpu" />

            {/* Subtle Grid Pattern */}
            <div
                className={`absolute inset-0 pointer-events-none ${
                    isDark
                        ? 'bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]'
                        : 'bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]'
                } bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,#000_70%,transparent_100%)]`}
            />

            {/* Grid Container */}
            <div className="relative z-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Copy & Actions */}
                <div
                    ref={leftColRef}
                    className="lg:col-span-7 flex flex-col justify-between opacity-100"
                >
                    <div>
                        {/* Live Status / Location Badge */}
                        <div
                            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border transition-all duration-300 mb-4 text-xs font-mono tracking-wide ${
                                isDark
                                    ? 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.18)]'
                                    : 'border-sky-500/40 bg-sky-50 text-sky-900 shadow-xs'
                            }`}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="font-bold uppercase tracking-wider">
                                Top Rated Software Company in Bihar
                            </span>
                            <span className="text-zinc-400 dark:text-zinc-500">•</span>
                            <span className="hidden sm:inline text-zinc-600 dark:text-zinc-400 font-medium">
                                Global Delivery
                            </span>
                        </div>

                        {/* Master Headline */}
                        <h1
                            className={`font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-black leading-[1.08] tracking-tight mb-4 ${
                                isDark ? 'text-white' : 'text-zinc-950'
                            }`}
                        >
                            We Engineer <br />
                            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.25)]">
                                Digital Excellence &amp;
                            </span>
                            <br />
                            <span>Smart IoT Solutions.</span>
                        </h1>

                        {/* Subtitle Paragraph */}
                        <p
                            className={`text-base sm:text-lg md:text-xl max-w-xl mb-6 leading-relaxed font-normal ${
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
                            — Zytrixon Tech builds enterprise-grade Web, Mobile, and
                            IoT solutions that transform ambitious businesses into
                            global market leaders.
                        </p>

                        {/* Action Buttons Cluster: Start Your Project & See Our Work */}
                        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-6">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-heading text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_45px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                            >
                                <span>Start Your Project</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>

                            <Link
                                href="/portfolio"
                                className={`group inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full border text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                                    isDark
                                        ? 'border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-cyan-400/40 text-white'
                                        : 'border-zinc-300 bg-white hover:bg-zinc-100 hover:border-zinc-400 text-zinc-900 shadow-sm'
                                }`}
                            >
                                <div className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center transition-transform group-hover:scale-110">
                                    <svg
                                        className="w-2.5 h-2.5 fill-cyan-400 text-cyan-400 ml-0.5"
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
                            className={`flex flex-wrap items-center gap-3 text-xs font-mono mb-6 ${
                                isDark ? 'text-zinc-400' : 'text-zinc-600'
                            }`}
                        >
                            <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400 font-bold">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <span>4.9/5 Rating</span>
                            </div>
                            <span>•</span>
                            <span className={`font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                                50+ Enterprise Shipments
                            </span>
                            <span>•</span>
                            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Zero-Trust
                            </span>
                        </div>
                    </div>

                    {/* Trust & Architecture Metrics Cards Strip */}
                    <div
                        className={`pt-5 border-t w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5 ${
                            isDark ? 'border-white/10' : 'border-zinc-200'
                        }`}
                    >
                        <div
                            className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                                isDark
                                    ? 'bg-white/[0.02] border-white/8 hover:border-cyan-500/40 hover:bg-white/[0.04]'
                                    : 'bg-white border-zinc-200 hover:border-sky-400 shadow-xs'
                            }`}
                        >
                            <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                                <Zap className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="font-heading font-extrabold text-sm flex items-center gap-1">
                                    <span className={isDark ? 'text-white' : 'text-zinc-950'}>
                                        &lt;20ms
                                    </span>
                                    <span className="text-cyan-600 dark:text-cyan-400 text-xs font-mono">
                                        Edge
                                    </span>
                                </div>
                                <div className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                    Ultra-Fast Networks
                                </div>
                            </div>
                        </div>

                        <div
                            className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                                isDark
                                    ? 'bg-white/[0.02] border-white/8 hover:border-emerald-500/40 hover:bg-white/[0.04]'
                                    : 'bg-white border-zinc-200 hover:border-emerald-400 shadow-xs'
                            }`}
                        >
                            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                                <Globe2 className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="font-heading font-extrabold text-sm flex items-center gap-1">
                                    <span className={isDark ? 'text-white' : 'text-zinc-950'}>
                                        50+
                                    </span>
                                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                                        Shipped
                                    </span>
                                </div>
                                <div className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                    Global Deployments
                                </div>
                            </div>
                        </div>

                        <div
                            className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                                isDark
                                    ? 'bg-white/[0.02] border-white/8 hover:border-purple-500/40 hover:bg-white/[0.04]'
                                    : 'bg-white border-zinc-200 hover:border-purple-400 shadow-xs'
                            }`}
                        >
                            <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="font-heading font-extrabold text-sm flex items-center gap-1">
                                    <span className={isDark ? 'text-white' : 'text-zinc-950'}>
                                        100%
                                    </span>
                                    <span className="text-purple-600 dark:text-purple-400 text-xs font-mono">
                                        NDA
                                    </span>
                                </div>
                                <div className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                    Zero-Trust Security
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Pure Company Logo (Lifted slightly up and made bigger) */}
                <div
                    ref={rightColRef}
                    className="lg:col-span-5 flex items-center justify-center lg:justify-center w-full lg:pr-12 xl:pr-20 2xl:pr-28 opacity-100 -translate-y-4 sm:-translate-y-6 lg:-translate-y-10"
                >
                    <div className="relative flex items-center justify-center w-full max-w-[580px] p-4">
                        {/* Ambient Radial Aura behind Logo */}
                        <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-purple-600/15 blur-[75px] pointer-events-none transform-gpu" />

                        {/* Extra Large Standalone Logo */}
                        <Logo
                            className={`relative z-10 w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[580px] h-auto transition-transform duration-300 hover:scale-105 ${
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
