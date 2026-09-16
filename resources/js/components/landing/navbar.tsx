import { Link, usePage } from '@inertiajs/react';
import gsap from 'gsap';
import {
    
    Globe,
    Smartphone,
    Sparkles,
    Radio,
    Layers,
    TrendingUp,
    Sun,
    Moon,
    Phone,
    ArrowUpRight,
    ChevronDown,
    Menu,
    X,
    CheckCircle2,
    Shield,
    Mail
} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Logo from '@/components/ui/logo';
import { useTheme } from './theme-provider';

interface ServiceItem {
    title: string;
    slug: string;
    desc: string;
    icon: LucideIcon;
    badge?: string;
    gradient: string;
}

const SERVICES: ServiceItem[] = [
    {
        title: 'Web Development',
        slug: 'web-development',
        desc: 'Custom React, Next.js & ultra-fast scalable platforms',
        icon: Globe,
        badge: 'POPULAR',
        gradient: 'from-cyan-500/20 to-blue-500/10',
    },
    {
        title: 'App Development',
        slug: 'app-development',
        desc: 'Native iOS, Android & Flutter cross-platform mobile apps',
        icon: Smartphone,
        badge: 'HIGH DEMAND',
        gradient: 'from-blue-500/20 to-indigo-500/10',
    },
    {
        title: 'AI & Automation',
        slug: 'ai-automation',
        desc: 'Autonomous LLM agents, workflow bots & custom AI models',
        icon: Sparkles,
        badge: 'AI-FIRST',
        gradient: 'from-purple-500/20 to-pink-500/10',
    },
    {
        title: 'IoT Solutions',
        slug: 'iot-solutions',
        desc: 'Smart connected hardware, embedded sensors & firmware',
        icon: Radio,
        badge: 'HARDWARE',
        gradient: 'from-emerald-500/20 to-teal-500/10',
    },
    {
        title: 'Custom Software',
        slug: 'custom-software',
        desc: 'Enterprise ERP, CRM & mission-critical cloud microservices',
        icon: Layers,
        badge: 'ENTERPRISE',
        gradient: 'from-amber-500/20 to-orange-500/10',
    },
    {
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        desc: 'Data-driven SEO, ROI performance campaigns & global scale',
        icon: TrendingUp,
        badge: 'GROWTH',
        gradient: 'from-rose-500/20 to-red-500/10',
    },
];

const MAIN_LINKS = [
    { label: 'HOME', href: '/' },
    { label: 'WORK', href: '/portfolio' },
    { label: 'CASE STUDIES', href: '/case-studies', badge: 'NEW' },
    { label: 'ABOUT', href: '/about' },
    { label: 'TEAM', href: '/team' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );

    const { theme, toggleTheme } = useTheme();
    const { url } = usePage();
    const isDark = !mounted || theme === 'dark';

    useEffect(() => {
        setMounted(true);
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const y = window.scrollY;
                    setScrolled(y > 40);

                    const progressBar =
                        document.getElementById('zy-scroll-progress');
                    if (progressBar) {
                        const docHeight =
                            document.documentElement.scrollHeight -
                            window.innerHeight;
                        if (docHeight > 0) {
                            const ratio = Math.min(
                                Math.max(y / docHeight, 0),
                                1,
                            );
                            progressBar.style.transform = `scaleX(${ratio})`;
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        if (navRef.current) {
            gsap.fromTo(
                navRef.current,
                { y: -60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power4.out',
                    delay: 0.1,
                },
            );
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent background scrolling on mobile drawer
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    // Handle dropdown open with debounce
    const handleMouseEnterDropdown = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setServicesDropdownOpen(true);
    };

    const handleMouseLeaveDropdown = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setServicesDropdownOpen(false);
        }, 180);
    };

    const isServicesActive = url.startsWith('/services');

    return (
        <>
            {/* Ambient Top Laser Reading Progress Bar */}
            <div
                id="zy-scroll-progress"
                className="zy-scroll-progress-line"
                aria-hidden="true"
            />

            {/* Top Floating Navbar Shell */}
            <header
                ref={navRef}
                className={`pointer-events-none sticky top-0 right-0 left-0 z-50 flex w-full justify-center transition-all duration-500 ease-out ${
                    scrolled ? 'px-4 pt-3.5' : 'px-0 pt-0'
                }`}
            >
                <div
                    className={`pointer-events-auto flex w-full items-center justify-between transition-all duration-500 ease-out ${
                        scrolled
                            ? isDark
                                ? 'h-[58px] max-w-[1240px] rounded-full border border-cyan-400/25 bg-[#080b13]/90 px-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75),0_0_35px_-10px_rgba(0,240,255,0.18)] backdrop-blur-xl'
                                : 'h-[58px] max-w-[1240px] rounded-full border border-sky-400/25 bg-white/95 px-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] backdrop-blur-xl'
                            : isDark
                              ? 'h-[76px] max-w-full rounded-none border-b border-white/10 bg-[#0a0e17]/80 px-6 shadow-sm backdrop-blur-xl md:px-12 lg:px-16'
                              : 'h-[76px] max-w-full rounded-none border-b border-zinc-200 bg-white/90 px-6 shadow-sm backdrop-blur-xl md:px-12 lg:px-16'
                    }`}
                >
                    {/* Left: Brand Logo */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="flex items-center transition-transform duration-300 hover:scale-105"
                            aria-label="Zytrixon Tech Homepage"
                            onClick={() => setMobileOpen(false)}
                        >
                            <Logo
                                className={`w-auto transition-all duration-500 ${
                                    scrolled ? 'h-[34px]' : 'h-[46px]'
                                } ${isDark ? 'text-white' : 'text-zinc-900'}`}
                            />
                        </Link>
                    </div>

                    {/* Center: Gliding Capsule Navigation Links (Desktop) */}
                    <nav
                        className="hidden items-center justify-center lg:flex"
                        aria-label="Main Navigation"
                    >
                        <ul
                            className={`flex items-center gap-1 rounded-full border p-1 transition-colors duration-300 ${
                                isDark
                                    ? 'border-white/[0.06] bg-white/[0.03]'
                                    : 'border-zinc-200 bg-zinc-100/90'
                            }`}
                        >
                            {/* Home */}
                            <li>
                                <Link
                                    href="/"
                                    className={`relative inline-flex items-center rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold tracking-wider whitespace-nowrap uppercase transition-all duration-200 ${
                                        url === '/'
                                            ? isDark
                                                ? 'bg-cyan-400/15 text-white shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]'
                                                : 'bg-sky-100 text-sky-700'
                                            : isDark
                                              ? 'text-zinc-400 hover:bg-white/10 hover:text-white'
                                              : 'text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900'
                                    }`}
                                >
                                    <span>HOME</span>
                                    {url === '/' && (
                                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                                    )}
                                </Link>
                            </li>

                            {/* Services Mega Dropdown Trigger */}
                            <li
                                className="relative"
                                onMouseEnter={handleMouseEnterDropdown}
                                onMouseLeave={handleMouseLeaveDropdown}
                            >
                                <Link
                                    href="/services"
                                    className={`group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold tracking-wider whitespace-nowrap uppercase transition-all duration-200 ${
                                        isServicesActive
                                            ? isDark
                                                ? 'bg-cyan-400/15 text-white shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]'
                                                : 'bg-sky-100 text-sky-700'
                                            : isDark
                                              ? 'text-zinc-400 hover:bg-white/10 hover:text-white'
                                              : 'text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900'
                                    }`}
                                    aria-expanded={servicesDropdownOpen}
                                    onClick={(e) => {
                                        if (
                                            window.matchMedia('(hover: none)')
                                                .matches
                                        ) {
                                            if (!servicesDropdownOpen) {
                                                e.preventDefault();
                                                setServicesDropdownOpen(true);
                                            }
                                        }
                                    }}
                                >
                                    <span>SERVICES</span>
                                    <ChevronDown
                                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                                            servicesDropdownOpen
                                                ? 'rotate-180 text-cyan-400'
                                                : 'text-zinc-400 group-hover:text-white'
                                        }`}
                                    />
                                    {isServicesActive && (
                                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                                    )}
                                </Link>

                                {/* Bento-Grid Mega Dropdown */}
                                <div
                                    ref={dropdownRef}
                                    className={`absolute top-[calc(100%+14px)] left-1/2 z-50 w-[630px] -translate-x-1/2 rounded-2xl border p-4 backdrop-blur-2xl transition-all duration-300 ${
                                        isDark
                                            ? 'border-white/10 bg-[#0c101a]/95 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(0,240,255,0.15)]'
                                            : 'border-zinc-200 bg-white/98 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]'
                                    } ${
                                        servicesDropdownOpen
                                            ? 'pointer-events-auto visible translate-y-0 scale-100 opacity-100'
                                            : 'pointer-events-none invisible translate-y-2 scale-95 opacity-0'
                                    }`}
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        {SERVICES.map((svc) => {
                                            const Icon = svc.icon;
                                            const isActiveService =
                                                url === `/services/${svc.slug}`;

                                            return (
                                                <Link
                                                    key={svc.slug}
                                                    href={`/services/${svc.slug}`}
                                                    className={`group flex items-start gap-3 rounded-xl border p-2.5 transition-all duration-200 ${
                                                        isActiveService
                                                            ? isDark
                                                                ? 'border-cyan-500/30 bg-cyan-500/10'
                                                                : 'border-sky-200 bg-sky-50'
                                                            : isDark
                                                              ? 'border-transparent bg-white/[0.02] hover:-translate-y-0.5 hover:border-cyan-500/25 hover:bg-white/[0.06]'
                                                              : 'border-transparent bg-zinc-50 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-zinc-100'
                                                    }`}
                                                    onClick={() =>
                                                        setServicesDropdownOpen(
                                                            false,
                                                        )
                                                    }
                                                >
                                                    <div
                                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br ${svc.gradient}`}
                                                    >
                                                        <Icon className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                                                    </div>
                                                    <div className="flex min-w-0 flex-col">
                                                        <div className="flex items-center gap-1.5">
                                                            <span
                                                                className={`text-[13px] font-semibold transition-colors ${
                                                                    isDark
                                                                        ? 'text-white group-hover:text-cyan-400'
                                                                        : 'text-zinc-900 group-hover:text-sky-600'
                                                                }`}
                                                            >
                                                                {svc.title}
                                                            </span>
                                                            {svc.badge && (
                                                                <span className="rounded border border-cyan-400/25 bg-cyan-400/15 px-1.5 py-0.5 text-[8.5px] font-bold tracking-wide text-cyan-400">
                                                                    {svc.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p
                                                            className={`mt-0.5 text-[11px] leading-tight ${
                                                                isDark
                                                                    ? 'text-zinc-400'
                                                                    : 'text-zinc-500'
                                                            }`}
                                                        >
                                                            {svc.desc}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    {/* Mega Dropdown Footer Banner */}
                                    <div
                                        className={`mt-3 flex items-center justify-between border-t pt-3 text-[11.5px] ${
                                            isDark
                                                ? 'border-white/10 text-zinc-400'
                                                : 'border-zinc-200 text-zinc-600'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Shield className="h-4 w-4 text-cyan-400" />
                                            <span>
                                                Need tailored enterprise
                                                architecture or NDA?
                                            </span>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-1 font-semibold text-cyan-400 transition-all hover:translate-x-0.5 hover:text-cyan-300"
                                            onClick={() =>
                                                setServicesDropdownOpen(false)
                                            }
                                        >
                                            <span>Consult with CTO</span>
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            {/* Remaining Main Links */}
                            {MAIN_LINKS.slice(1).map((link) => {
                                const isActive =
                                    url === link.href ||
                                    (link.href !== '/' &&
                                        url.startsWith(link.href));

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`relative inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold tracking-wider whitespace-nowrap uppercase transition-all duration-200 ${
                                                isActive
                                                    ? isDark
                                                        ? 'bg-cyan-400/15 text-white shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]'
                                                        : 'bg-sky-100 text-sky-700'
                                                    : isDark
                                                      ? 'text-zinc-400 hover:bg-white/10 hover:text-white'
                                                      : 'text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900'
                                            }`}
                                        >
                                            <span>{link.label}</span>
                                            {link.badge && (
                                                <span className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-1.5 py-0.5 text-[8px] font-bold text-white">
                                                    {link.badge}
                                                </span>
                                            )}
                                            {isActive && (
                                                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Right: Quick Connect & Action Pod */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Switch visual mode"
                            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 ${
                                isDark
                                    ? 'border-white/10 bg-white/[0.04] text-white hover:border-cyan-400/30 hover:bg-white/10'
                                    : 'border-zinc-300 bg-zinc-100 text-zinc-900 hover:border-sky-400/30 hover:bg-zinc-200'
                            }`}
                            title="Toggle Light / Dark Mode"
                        >
                            {isDark ? (
                                <Sun className="h-4 w-4 text-amber-300 transition-transform duration-500 hover:rotate-90" />
                            ) : (
                                <Moon className="h-4 w-4 text-cyan-600 transition-transform duration-500 hover:-rotate-12" />
                            )}
                        </button>

                        {/* Mail Icon Button */}
                        <a
                            href="mailto:zytrixon@gmail.com"
                            className={`hidden h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 sm:inline-flex ${
                                isDark
                                    ? 'border-white/10 bg-white/[0.04] hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                                    : 'border-zinc-300 bg-zinc-100 hover:border-sky-400/40 hover:bg-zinc-200'
                            }`}
                            aria-label="Send email"
                            title="Email: zytrixon@gmail.com"
                        >
                            <Mail className="h-4 w-4 text-cyan-400 transition-transform duration-300 hover:scale-110" />
                        </a>

                        {/* WhatsApp Icon Button (Official WhatsApp Brand Icon) */}
                        <a
                            href="https://wa.me/917049711475"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hidden h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 sm:inline-flex ${
                                isDark
                                    ? 'border-white/10 bg-white/[0.04] hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_16px_rgba(37,211,102,0.3)]'
                                    : 'border-zinc-300 bg-zinc-100 hover:border-emerald-500/40 hover:bg-emerald-50'
                            }`}
                            aria-label="Chat on WhatsApp"
                            title="WhatsApp: +91 70497 11475"
                        >
                            <svg
                                className="h-4 w-4 fill-[#25D366] transition-transform duration-300 hover:scale-110"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>

                        {/* Mobile Menu Trigger (strictly lg:hidden) */}
                        <button
                            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 lg:hidden ${
                                isDark
                                    ? 'border-white/10 bg-white/[0.06] text-white'
                                    : 'border-zinc-300 bg-zinc-100 text-zinc-900'
                            }`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle navigation drawer"
                        >
                            {mobileOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Futuristic Fullscreen Mobile Navigation Drawer (strictly lg:hidden) */}
            <div
                className={`fixed inset-0 z-[1005] flex transition-opacity duration-300 lg:hidden ${
                    mobileOpen
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
                aria-hidden={!mobileOpen}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/75 backdrop-blur-md"
                    onClick={() => setMobileOpen(false)}
                />

                {/* Drawer Content */}
                <div
                    className={`relative ml-auto flex h-dvh h-full w-full max-w-[380px] flex-col overflow-y-auto border-l p-6 transition-transform duration-300 ease-out ${
                        isDark
                            ? 'border-white/10 bg-[#0a0e17] text-white'
                            : 'border-zinc-200 bg-white text-zinc-900'
                    } ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {/* Drawer Header with Logo & Close */}
                    <div
                        className={`flex items-center justify-between border-b pb-4 ${
                            isDark ? 'border-white/10' : 'border-zinc-200'
                        }`}
                    >
                        <Link href="/" onClick={() => setMobileOpen(false)}>
                            <Logo
                                className={`h-10 w-auto ${
                                    isDark ? 'text-white' : 'text-zinc-900'
                                }`}
                            />
                        </Link>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border ${
                                    isDark
                                        ? 'border-white/10 bg-white/[0.04] text-white'
                                        : 'border-zinc-300 bg-zinc-100 text-zinc-900'
                                }`}
                                aria-label="Toggle Theme"
                            >
                                {isDark ? (
                                    <Sun className="h-4 w-4 text-amber-300" />
                                ) : (
                                    <Moon className="h-4 w-4 text-cyan-600" />
                                )}
                            </button>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border ${
                                    isDark
                                        ? 'border-white/10 bg-white/[0.04] text-white'
                                        : 'border-zinc-300 bg-zinc-100 text-zinc-900'
                                }`}
                                aria-label="Close menu"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Staggered Links List */}
                    <div className="flex flex-col gap-1.5 py-5">
                        <Link
                            href="/"
                            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-heading text-base font-bold transition-all ${
                                url === '/'
                                    ? isDark
                                        ? 'bg-white/[0.06] text-cyan-400'
                                        : 'bg-zinc-100 text-sky-600'
                                    : isDark
                                      ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="font-mono text-xs text-zinc-500">
                                01
                            </span>
                            <span>Home</span>
                        </Link>

                        {/* Expandable Services Accordion */}
                        <div className="flex flex-col">
                            <button
                                className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 font-heading text-base font-bold transition-all ${
                                    isServicesActive
                                        ? isDark
                                            ? 'bg-white/[0.06] text-cyan-400'
                                            : 'bg-zinc-100 text-sky-600'
                                        : isDark
                                          ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                          : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                                }`}
                                onClick={() =>
                                    setMobileServicesOpen(!mobileServicesOpen)
                                }
                            >
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs text-zinc-500">
                                        02
                                    </span>
                                    <span>Services</span>
                                </div>
                                <ChevronDown
                                    className={`h-5 w-5 transition-transform duration-300 ${
                                        mobileServicesOpen
                                            ? 'rotate-180 text-cyan-400'
                                            : 'text-zinc-500'
                                    }`}
                                />
                            </button>

                            {/* Submenu for services */}
                            {mobileServicesOpen && (
                                <div className="flex flex-col gap-1.5 py-2 pl-7">
                                    <Link
                                        href="/services"
                                        className="flex items-center gap-2.5 rounded-lg border border-dashed border-cyan-400/40 p-2 text-xs font-semibold text-cyan-400 transition-colors hover:bg-cyan-400/10"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <Layers className="h-4 w-4" />
                                        <span>All Services Overview</span>
                                    </Link>
                                    {SERVICES.map((svc) => {
                                        const Icon = svc.icon;
                                        return (
                                            <Link
                                                key={svc.slug}
                                                href={`/services/${svc.slug}`}
                                                className={`flex items-start gap-2.5 rounded-lg p-2 transition-colors ${
                                                    isDark
                                                        ? 'bg-white/[0.02] hover:bg-cyan-400/10'
                                                        : 'bg-zinc-50 hover:bg-sky-50'
                                                }`}
                                                onClick={() =>
                                                    setMobileOpen(false)
                                                }
                                            >
                                                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                                <div className="flex min-w-0 flex-col">
                                                    <span
                                                        className={`text-xs font-semibold ${
                                                            isDark
                                                                ? 'text-white'
                                                                : 'text-zinc-900'
                                                        }`}
                                                    >
                                                        {svc.title}
                                                    </span>
                                                    <span className="text-[11px] leading-tight text-zinc-400">
                                                        {svc.desc}
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/portfolio"
                            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-heading text-base font-bold transition-all ${
                                url.startsWith('/portfolio')
                                    ? isDark
                                        ? 'bg-white/[0.06] text-cyan-400'
                                        : 'bg-zinc-100 text-sky-600'
                                    : isDark
                                      ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="font-mono text-xs text-zinc-500">
                                03
                            </span>
                            <span>Work</span>
                        </Link>

                        <Link
                            href="/case-studies"
                            className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 font-heading text-base font-bold transition-all ${
                                url.startsWith('/case-studies')
                                    ? isDark
                                        ? 'bg-white/[0.06] text-cyan-400'
                                        : 'bg-zinc-100 text-sky-600'
                                    : isDark
                                      ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-xs text-zinc-500">
                                    04
                                </span>
                                <span>Case Studies</span>
                            </div>
                            <span className="rounded border border-cyan-400/25 bg-cyan-400/15 px-1.5 py-0.5 text-[9px] font-bold text-cyan-400">
                                NEW
                            </span>
                        </Link>

                        <Link
                            href="/about"
                            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-heading text-base font-bold transition-all ${
                                url.startsWith('/about')
                                    ? isDark
                                        ? 'bg-white/[0.06] text-cyan-400'
                                        : 'bg-zinc-100 text-sky-600'
                                    : isDark
                                      ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="font-mono text-xs text-zinc-500">
                                05
                            </span>
                            <span>About</span>
                        </Link>

                        <Link
                            href="/team"
                            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-heading text-base font-bold transition-all ${
                                url.startsWith('/team')
                                    ? isDark
                                        ? 'bg-white/[0.06] text-cyan-400'
                                        : 'bg-zinc-100 text-sky-600'
                                    : isDark
                                      ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="font-mono text-xs text-zinc-500">
                                06
                            </span>
                            <span>Team</span>
                        </Link>

                        <Link
                            href="/blog"
                            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-heading text-base font-bold transition-all ${
                                url.startsWith('/blog')
                                    ? isDark
                                        ? 'bg-white/[0.06] text-cyan-400'
                                        : 'bg-zinc-100 text-sky-600'
                                    : isDark
                                      ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="font-mono text-xs text-zinc-500">
                                07
                            </span>
                            <span>Blog</span>
                        </Link>

                        <Link
                            href="/contact"
                            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-heading text-base font-bold transition-all ${
                                url.startsWith('/contact')
                                    ? isDark
                                        ? 'bg-white/[0.06] text-cyan-400'
                                        : 'bg-zinc-100 text-sky-600'
                                    : isDark
                                      ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="font-mono text-xs text-zinc-500">
                                08
                            </span>
                            <span>Contact</span>
                        </Link>
                    </div>

                    {/* Mobile Drawer Bottom Actions */}
                    <div
                        className={`mt-auto flex flex-col gap-3 border-t pt-4 ${
                            isDark ? 'border-white/10' : 'border-zinc-200'
                        }`}
                    >
                        <Link
                            href="/contact"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-[0_10px_25px_-5px_rgba(0,240,255,0.3)] transition-opacity hover:opacity-95"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span>Start a Project</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>

                        <div className="grid grid-cols-2 gap-2.5">
                            <a
                                href="tel:+917049711475"
                                className={`flex items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-semibold ${
                                    isDark
                                        ? 'border-white/10 bg-white/[0.04] text-white'
                                        : 'border-zinc-200 bg-zinc-100 text-zinc-900'
                                }`}
                            >
                                <Phone className="h-4 w-4 text-cyan-400" />
                                <span>+91 70497 11475</span>
                            </a>
                            <a
                                href="https://wa.me/917049711475"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-semibold ${
                                    isDark
                                        ? 'border-white/10 bg-white/[0.04] text-white'
                                        : 'border-zinc-200 bg-zinc-100 text-zinc-900'
                                }`}
                            >
                                <svg
                                    className="h-4 w-4 fill-[#25D366]"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                            <span>Samastipur, Bihar, India</span>
                            <span>•</span>
                            <a
                                href="mailto:zytrixon@gmail.com"
                                className="transition-colors hover:text-cyan-400"
                            >
                                zytrixon@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
