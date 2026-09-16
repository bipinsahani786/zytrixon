import { Link, usePage } from '@inertiajs/react';
import gsap from 'gsap';
import {
    type LucideIcon,
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
    Mail,
} from 'lucide-react';
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
    const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

                    const progressBar = document.getElementById('zy-scroll-progress');
                    if (progressBar) {
                        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                        if (docHeight > 0) {
                            const ratio = Math.min(Math.max(y / docHeight, 0), 1);
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
                { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 0.1 },
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
                className={`sticky top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-500 ease-out ${
                    scrolled ? 'pt-3.5 px-4' : 'pt-0 px-0'
                }`}
            >
                <div
                    className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-500 ease-out ${
                        scrolled
                            ? isDark
                                ? 'max-w-[1240px] h-[58px] px-5 rounded-full bg-[#080b13]/90 border border-cyan-400/25 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75),0_0_35px_-10px_rgba(0,240,255,0.18)] backdrop-blur-xl'
                                : 'max-w-[1240px] h-[58px] px-5 rounded-full bg-white/95 border border-sky-400/25 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] backdrop-blur-xl'
                            : isDark
                                ? 'max-w-full h-[76px] px-6 md:px-12 lg:px-16 rounded-none bg-[#0a0e17]/80 border-b border-white/10 shadow-sm backdrop-blur-xl'
                                : 'max-w-full h-[76px] px-6 md:px-12 lg:px-16 rounded-none bg-white/90 border-b border-zinc-200 shadow-sm backdrop-blur-xl'
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
                    <nav className="hidden lg:flex items-center justify-center" aria-label="Main Navigation">
                        <ul
                            className={`flex items-center gap-1 p-1 rounded-full border transition-colors duration-300 ${
                                isDark
                                    ? 'bg-white/[0.03] border-white/[0.06]'
                                    : 'bg-zinc-100/90 border-zinc-200'
                            }`}
                        >
                            {/* Home */}
                            <li>
                                <Link
                                    href="/"
                                    className={`relative inline-flex items-center px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                                        url === '/'
                                            ? isDark
                                                ? 'text-white bg-cyan-400/15 shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]'
                                                : 'text-sky-700 bg-sky-100'
                                            : isDark
                                                ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                                                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
                                    }`}
                                >
                                    <span>HOME</span>
                                    {url === '/' && (
                                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
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
                                    className={`relative group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                                        isServicesActive
                                            ? isDark
                                                ? 'text-white bg-cyan-400/15 shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]'
                                                : 'text-sky-700 bg-sky-100'
                                            : isDark
                                                ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                                                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
                                    }`}
                                    aria-expanded={servicesDropdownOpen}
                                    onClick={(e) => {
                                        if (window.matchMedia('(hover: none)').matches) {
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
                                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                                    )}
                                </Link>

                                {/* Bento-Grid Mega Dropdown */}
                                <div
                                    ref={dropdownRef}
                                    className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[630px] p-4 rounded-2xl border transition-all duration-300 z-50 backdrop-blur-2xl ${
                                        isDark
                                            ? 'bg-[#0c101a]/95 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(0,240,255,0.15)]'
                                            : 'bg-white/98 border-zinc-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]'
                                    } ${
                                        servicesDropdownOpen
                                            ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto'
                                            : 'opacity-0 invisible translate-y-2 scale-95 pointer-events-none'
                                    }`}
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        {SERVICES.map((svc) => {
                                            const Icon = svc.icon;
                                            const isActiveService = url === `/services/${svc.slug}`;

                                            return (
                                                <Link
                                                    key={svc.slug}
                                                    href={`/services/${svc.slug}`}
                                                    className={`group flex items-start gap-3 p-2.5 rounded-xl border transition-all duration-200 ${
                                                        isActiveService
                                                            ? isDark
                                                                ? 'bg-cyan-500/10 border-cyan-500/30'
                                                                : 'bg-sky-50 border-sky-200'
                                                            : isDark
                                                                ? 'bg-white/[0.02] border-transparent hover:bg-white/[0.06] hover:border-cyan-500/25 hover:-translate-y-0.5'
                                                                : 'bg-zinc-50 border-transparent hover:bg-zinc-100 hover:border-sky-300 hover:-translate-y-0.5'
                                                    }`}
                                                    onClick={() => setServicesDropdownOpen(false)}
                                                >
                                                    <div
                                                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/10 bg-gradient-to-br ${svc.gradient}`}
                                                    >
                                                        <Icon className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                                                    </div>
                                                    <div className="flex flex-col min-w-0">
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
                                                                <span className="text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-cyan-400/15 text-cyan-400 border border-cyan-400/25 tracking-wide">
                                                                    {svc.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p
                                                            className={`text-[11px] leading-tight mt-0.5 ${
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
                                        className={`mt-3 pt-3 flex items-center justify-between border-t text-[11.5px] ${
                                            isDark
                                                ? 'border-white/10 text-zinc-400'
                                                : 'border-zinc-200 text-zinc-600'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Shield className="h-4 w-4 text-cyan-400" />
                                            <span>Need tailored enterprise architecture or NDA?</span>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 hover:translate-x-0.5 transition-all"
                                            onClick={() => setServicesDropdownOpen(false)}
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
                                    (link.href !== '/' && url.startsWith(link.href));

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`relative inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                                                isActive
                                                    ? isDark
                                                        ? 'text-white bg-cyan-400/15 shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]'
                                                        : 'text-sky-700 bg-sky-100'
                                                    : isDark
                                                        ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                                                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
                                            }`}
                                        >
                                            <span>{link.label}</span>
                                            {link.badge && (
                                                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                                                    {link.badge}
                                                </span>
                                            )}
                                            {isActive && (
                                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
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
                            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105 cursor-pointer ${
                                isDark
                                    ? 'bg-white/[0.04] border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/30'
                                    : 'bg-zinc-100 border-zinc-300 text-zinc-900 hover:bg-zinc-200 hover:border-sky-400/30'
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
                            className={`hidden sm:inline-flex w-9 h-9 rounded-full items-center justify-center border transition-all duration-200 hover:scale-105 ${
                                isDark
                                    ? 'bg-white/[0.04] border-white/10 hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                                    : 'bg-zinc-100 border-zinc-300 hover:bg-zinc-200 hover:border-sky-400/40'
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
                            className={`hidden sm:inline-flex w-9 h-9 rounded-full items-center justify-center border transition-all duration-200 hover:scale-105 ${
                                isDark
                                    ? 'bg-white/[0.04] border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:shadow-[0_0_16px_rgba(37,211,102,0.3)]'
                                    : 'bg-zinc-100 border-zinc-300 hover:bg-emerald-50 hover:border-emerald-500/40'
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
                            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                                isDark
                                    ? 'bg-white/[0.06] border-white/10 text-white'
                                    : 'bg-zinc-100 border-zinc-300 text-zinc-900'
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
                className={`fixed inset-0 z-[1005] lg:hidden flex transition-opacity duration-300 ${
                    mobileOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
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
                    className={`relative ml-auto w-full max-w-[380px] h-full h-dvh flex flex-col p-6 overflow-y-auto border-l transition-transform duration-300 ease-out ${
                        isDark
                            ? 'bg-[#0a0e17] border-white/10 text-white'
                            : 'bg-white border-zinc-200 text-zinc-900'
                    } ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {/* Drawer Header with Logo & Close */}
                    <div
                        className={`flex items-center justify-between pb-4 border-b ${
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
                                className={`w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer ${
                                    isDark
                                        ? 'bg-white/[0.04] border-white/10 text-white'
                                        : 'bg-zinc-100 border-zinc-300 text-zinc-900'
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
                                className={`w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer ${
                                    isDark
                                        ? 'bg-white/[0.04] border-white/10 text-white'
                                        : 'bg-zinc-100 border-zinc-300 text-zinc-900'
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
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${
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
                            <span className="font-mono text-xs text-zinc-500">01</span>
                            <span>Home</span>
                        </Link>

                        {/* Expandable Services Accordion */}
                        <div className="flex flex-col">
                            <button
                                className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all cursor-pointer ${
                                    isServicesActive
                                        ? isDark
                                            ? 'bg-white/[0.06] text-cyan-400'
                                            : 'bg-zinc-100 text-sky-600'
                                        : isDark
                                            ? 'text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400'
                                            : 'text-zinc-800 hover:bg-zinc-100 hover:text-sky-600'
                                }`}
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
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
                                        className="flex items-center gap-2.5 p-2 rounded-lg border border-dashed border-cyan-400/40 text-cyan-400 font-semibold text-xs transition-colors hover:bg-cyan-400/10"
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
                                                className={`flex items-start gap-2.5 p-2 rounded-lg transition-colors ${
                                                    isDark
                                                        ? 'bg-white/[0.02] hover:bg-cyan-400/10'
                                                        : 'bg-zinc-50 hover:bg-sky-50'
                                                }`}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                <Icon className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                                                <div className="flex flex-col min-w-0">
                                                    <span
                                                        className={`text-xs font-semibold ${
                                                            isDark
                                                                ? 'text-white'
                                                                : 'text-zinc-900'
                                                        }`}
                                                    >
                                                        {svc.title}
                                                    </span>
                                                    <span className="text-[11px] text-zinc-400 leading-tight">
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
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${
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
                            <span className="font-mono text-xs text-zinc-500">03</span>
                            <span>Work</span>
                        </Link>

                        <Link
                            href="/case-studies"
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${
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
                                <span className="font-mono text-xs text-zinc-500">04</span>
                                <span>Case Studies</span>
                            </div>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-400/15 text-cyan-400 border border-cyan-400/25">
                                NEW
                            </span>
                        </Link>

                        <Link
                            href="/about"
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${
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
                            <span className="font-mono text-xs text-zinc-500">05</span>
                            <span>About</span>
                        </Link>

                        <Link
                            href="/team"
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${
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
                            <span className="font-mono text-xs text-zinc-500">06</span>
                            <span>Team</span>
                        </Link>

                        <Link
                            href="/blog"
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${
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
                            <span className="font-mono text-xs text-zinc-500">07</span>
                            <span>Blog</span>
                        </Link>

                        <Link
                            href="/contact"
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${
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
                            <span className="font-mono text-xs text-zinc-500">08</span>
                            <span>Contact</span>
                        </Link>
                    </div>

                    {/* Mobile Drawer Bottom Actions */}
                    <div
                        className={`mt-auto flex flex-col gap-3 pt-4 border-t ${
                            isDark ? 'border-white/10' : 'border-zinc-200'
                        }`}
                    >
                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(0,240,255,0.3)] hover:opacity-95 transition-opacity"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span>Start a Project</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>

                        <div className="grid grid-cols-2 gap-2.5">
                            <a
                                href="tel:+917049711475"
                                className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-semibold ${
                                    isDark
                                        ? 'bg-white/[0.04] border-white/10 text-white'
                                        : 'bg-zinc-100 border-zinc-200 text-zinc-900'
                                }`}
                            >
                                <Phone className="h-4 w-4 text-cyan-400" />
                                <span>+91 70497 11475</span>
                            </a>
                            <a
                                href="https://wa.me/917049711475"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-semibold ${
                                    isDark
                                        ? 'bg-white/[0.04] border-white/10 text-white'
                                        : 'bg-zinc-100 border-zinc-200 text-zinc-900'
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
                                className="hover:text-cyan-400 transition-colors"
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
