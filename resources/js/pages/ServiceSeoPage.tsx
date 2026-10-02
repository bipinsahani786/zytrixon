import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    MapPin, Sparkles, CheckCircle2, ArrowRight, ShieldCheck,
    Zap, Phone, MessageCircle, Star, Clock, Trophy, ChevronDown,
    ChevronUp, Code2, Layers, Users, ExternalLink, HelpCircle,
    Building2, Smartphone, TrendingUp, Check
} from 'lucide-react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import CustomCursor from '@/components/landing/custom-cursor';
import { ThemeProvider, useTheme } from '@/components/landing/theme-provider';
import SeoHead from '@/components/seo/SeoHead';
import ContactSection from '@/components/landing/contact-section';

interface SeoSection {
    type: 'why_us' | 'local_context' | 'process' | 'faq' | 'custom';
    heading?: string;
    content?: string;
    points?: string[];
    steps?: Array<{ title: string; desc: string }>;
    items?: Array<{ q: string; a: string }>;
}

interface ServiceSeoPageProps {
    service: {
        id: number;
        title: string;
        slug: string;
        description: string;
        icon?: string;
    };
    location?: {
        id: number;
        name: string;
        slug: string;
        state: string;
    } | null;
    seo: {
        h1: string;
        title: string;
        description: string;
    };
    hero_description?: string;
    sections?: SeoSection[];
    template?: 'grid' | 'timeline' | 'card' | 'split';
    caseStudies?: Array<{
        id: number;
        title: string;
        slug: string;
        client?: string;
        description?: string;
        metrics?: string;
        image?: string;
    }>;
}

const TECH_STACK = [
    { name: 'React', category: 'Frontend', color: '#61dafb' },
    { name: 'Next.js', category: 'Fullstack', color: '#3b82f6' },
    { name: 'TypeScript', category: 'Language', color: '#3178c6' },
    { name: 'Laravel', category: 'Backend', color: '#ff2d20' },
    { name: 'Node.js', category: 'Backend', color: '#68a063' },
    { name: 'Tailwind CSS', category: 'Styling', color: '#38bdf8' },
    { name: 'Flutter', category: 'Mobile', color: '#02569b' },
    { name: 'PostgreSQL', category: 'Database', color: '#336791' },
    { name: 'AWS Cloud', category: 'DevOps', color: '#ff9900' },
    { name: 'Docker', category: 'Container', color: '#2496ed' },
];

export default function ServiceSeoPage(props: ServiceSeoPageProps) {
    return (
        <ThemeProvider>
            <ServiceSeoPageContent {...props} />
        </ThemeProvider>
    );
}

function ServiceSeoPageContent({
    service,
    location,
    seo,
    hero_description,
    sections = [],
    template = 'grid',
    caseStudies = [],
}: ServiceSeoPageProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const locName = location?.name || 'Patna';
    const locState = location?.state || 'Bihar';
    const serviceTitle = service?.title || 'Web & Software Development';

    // Parse Sections from Database (or fallbacks)
    const whyUs = sections.find((s) => s.type === 'why_us');
    const localContext = sections.find((s) => s.type === 'local_context');
    const processSection = sections.find((s) => s.type === 'process');
    const faqSection = sections.find((s) => s.type === 'faq');
    const customSections = sections.filter(
        (s) => !['why_us', 'local_context', 'process', 'faq'].includes(s.type)
    );

    // Default Fallback Data if sections are empty
    const defaultWhyPoints = [
        `Local ${locName} & Bihar Engineering Team — Speak directly with developers, not call centers.`,
        'High-Performance Architecture — Fast loading on local 4G/5G mobile connections.',
        'Custom Code & Clean Standards — Zero bloated templates or sluggish pre-made themes.',
        'Transparent Fixed Pricing — Clear milestone deliverables with no surprise bills.',
    ];

    const whyPoints = (whyUs?.points && whyUs.points.length > 0)
        ? whyUs.points
        : defaultWhyPoints;

    const defaultSteps = [
        { title: '1. Discovery & Local Audit', desc: `We analyze your ${locName} competitors, target customers, and business workflows.` },
        { title: '2. Prototyping & Modern UI', desc: 'Crafting responsive, intuitive screens that reflect your brand identity.' },
        { title: '3. Agile Engineering & QA', desc: 'Lightweight code, mobile speed optimization, and search engine readiness.' },
        { title: '4. Launch & Ongoing Support', desc: 'Deployment with local Google indexing, analytics setup, and continuous support.' },
    ];

    const processSteps = (processSection?.steps && processSection.steps.length > 0)
        ? processSection.steps
        : defaultSteps;

    const defaultFaqs = [
        {
            q: `What is the cost of ${serviceTitle} in ${locName}?`,
            a: `Our pricing is customized to your project scope. For local businesses in ${locName}, we offer transparent, fixed-price milestone billing with zero hidden costs.`,
        },
        {
            q: `How long does it take to deliver a project?`,
            a: `Most standard projects are completed within 2 to 6 weeks, with regular milestone previews so you can test progress in real-time.`,
        },
        {
            q: `Can we meet in-person or get direct support in ${locName}?`,
            a: `Yes! Our core team is based right here in Bihar. We are readily available for in-person meetings in ${locName} as well as instant phone and WhatsApp consultations.`,
        },
        {
            q: `Do you provide post-launch maintenance and SEO?`,
            a: `Absolutely. Every project includes post-launch testing, local Google search indexing, and ongoing maintenance SLA options to keep your platform fast and secure.`,
        },
    ];

    const faqs = (faqSection?.items && faqSection.items.length > 0)
        ? faqSection.items
        : defaultFaqs;

    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const whatsappUrl = `https://wa.me/917049711475?text=${encodeURIComponent(
        `Hi Zytrixon team! I am interested in ${serviceTitle} services in ${locName}. Can we discuss details?`
    )}`;

    return (
        <>
            <SeoHead seo={seo} service={service} location={location} />
            <CustomCursor />
            <Navbar />

            <div
                className={`min-h-screen transition-colors duration-300 ${
                    isLight
                        ? 'bg-[#ffffff] text-[#0f172a] selection:bg-slate-900 selection:text-white'
                        : 'bg-[#060608] text-[#e2e8f0] selection:bg-white selection:text-black'
                }`}
            >
                {/* Subtle Neutral Ambient Background */}
                <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                    <div
                        className={`absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[140px] transition-opacity duration-300 ${
                            isLight
                                ? 'bg-gradient-to-b from-slate-200/60 to-transparent'
                                : 'bg-gradient-to-b from-white/[0.03] to-transparent'
                        }`}
                    />
                    <div
                        className={`absolute top-[40%] right-[-10%] h-[400px] w-[500px] rounded-full blur-[120px] ${
                            isLight ? 'bg-slate-200/40' : 'bg-white/[0.02]'
                        }`}
                    />
                    <div
                        className={`absolute bottom-[20%] left-[-10%] h-[400px] w-[500px] rounded-full blur-[120px] ${
                            isLight ? 'bg-slate-100/50' : 'bg-white/[0.01]'
                        }`}
                    />
                </div>

                <div className="relative z-10">
                    {/* BREADCRUMB */}
                    <div
                        className={`border-b backdrop-blur-md transition-colors ${
                            isLight
                                ? 'border-slate-200/80 bg-slate-50/80 text-slate-500'
                                : 'border-white/[0.06] bg-black/40 text-white/50'
                        }`}
                    >
                        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-xs">
                            <Link href="/" className={`transition-colors ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>Home</Link>
                            <span>/</span>
                            <Link href="/services" className={`transition-colors ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>Services</Link>
                            <span>/</span>
                            <span className={isLight ? 'text-slate-800 font-medium' : 'text-white/80'}>{serviceTitle}</span>
                            {location && (
                                <>
                                    <span>/</span>
                                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>{locName}</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* HERO SECTION */}
                    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
                        <div className="mx-auto max-w-5xl px-6 text-center">
                            {/* Location Badge */}
                            <div
                                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md transition-colors mb-6 ${
                                    isLight
                                        ? 'border-slate-300 bg-white/95 text-slate-800 shadow-sm'
                                        : 'border-white/15 bg-white/[0.05] text-slate-200'
                                }`}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                </span>
                                <MapPin size={13} className="text-emerald-500" />
                                <span>Serving Businesses in {locName}, {locState}</span>
                            </div>

                            {/* H1 Heading */}
                            <h1
                                className={`text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk'] leading-[1.12] transition-colors ${
                                    isLight ? 'text-slate-900' : 'text-white'
                                }`}
                            >
                                {seo.h1 || `${serviceTitle} in ${locName}`}
                            </h1>

                            {/* Hero Narrative */}
                            <p
                                className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed md:text-lg transition-colors ${
                                    isLight ? 'text-slate-600' : 'text-slate-300'
                                }`}
                            >
                                {hero_description || (
                                    <>
                                        Tired of slow websites and agencies that disappear after delivery? At <strong>Zytrixon Tech</strong>, we engineer blazing-fast, mobile-optimized digital platforms specifically built for how businesses and customers browse across <strong>{locName}</strong>.
                                    </>
                                )}
                            </p>

                            {/* Primary Action Buttons */}
                            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
                                <a
                                    href="#contact"
                                    className={`group flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all active:scale-95 ${
                                        isLight
                                            ? 'bg-[#0a0a0a] text-white hover:bg-black/85 shadow-lg shadow-black/10'
                                            : 'bg-white text-black hover:bg-slate-200 shadow-xl shadow-white/10'
                                    }`}
                                >
                                    <span>Get Free Architecture Proposal</span>
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </a>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all active:scale-95 ${
                                        isLight
                                            ? 'border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 shadow-sm'
                                            : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'
                                    }`}
                                >
                                    <MessageCircle size={16} className={isLight ? 'text-emerald-600' : 'text-emerald-400'} />
                                    <span>Chat on WhatsApp</span>
                                </a>

                                <a
                                    href="tel:+917049711475"
                                    className={`flex items-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-medium transition-all ${
                                        isLight
                                            ? 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm'
                                            : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.08]'
                                    }`}
                                >
                                    <Phone size={15} className={isLight ? 'text-slate-600' : 'text-slate-400'} />
                                    <span>Call: +91 70497 11475</span>
                                </a>
                            </div>

                            {/* Trust Row Metrics */}
                            <div
                                className={`mt-14 grid grid-cols-2 gap-4 border-t pt-8 sm:grid-cols-4 transition-colors ${
                                    isLight ? 'border-slate-200' : 'border-white/[0.08]'
                                }`}
                            >
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-1 text-amber-500 text-sm font-bold">
                                        <Star size={15} className="fill-amber-500" />
                                        <span>4.9 / 5.0</span>
                                    </div>
                                    <p className={`mt-1 text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Google & Clutch Reviews</p>
                                </div>
                                <div className="text-center">
                                    <div className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>100+ Delivered</div>
                                    <p className={`mt-1 text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Web, Apps & Systems</p>
                                </div>
                                <div className="text-center">
                                    <div className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Bihar On-Ground</div>
                                    <p className={`mt-1 text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Direct In-Person Support</p>
                                </div>
                                <div className="text-center">
                                    <div className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>99.9% Uptime</div>
                                    <p className={`mt-1 text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Cloud Architecture SLA</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* DYNAMIC TEMPLATE LAYOUT (Grid / Timeline / Card / Split) */}
                    <section
                        className={`py-12 border-t transition-colors ${
                            isLight
                                ? 'border-slate-200/80 bg-slate-50/60'
                                : 'border-white/[0.06] bg-black/30'
                        }`}
                    >
                        <div className="mx-auto max-w-7xl px-6">
                            {/* TEMPLATE A: GRID (Bento Architecture) */}
                            {template === 'grid' && (
                                <div className="space-y-6">
                                    <div className="text-center max-w-2xl mx-auto mb-10">
                                        <span className={`text-xs uppercase tracking-widest font-bold ${
                                            isLight ? 'text-slate-600' : 'text-slate-400'
                                        }`}>
                                            Engineered for {locName}
                                        </span>
                                        <h2 className={`mt-2 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] ${
                                            isLight ? 'text-slate-900' : 'text-white'
                                        }`}>
                                            Comprehensive {serviceTitle} Architecture
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        {/* Card 1: Why Choose Us (Large 2-col) */}
                                        <div
                                            className={`md:col-span-2 rounded-2xl border p-7 backdrop-blur-sm transition-all ${
                                                isLight
                                                    ? 'border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md'
                                                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                                                    isLight ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'
                                                }`}>
                                                    <Trophy size={20} />
                                                </div>
                                                <div>
                                                    <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                                                        {whyUs?.heading || `Why ${locName} Businesses Choose Zytrixon Tech`}
                                                    </h3>
                                                    <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                                                        Local accountability meets international engineering standards
                                                    </p>
                                                </div>
                                            </div>
                                            <p className={`text-sm leading-relaxed mb-6 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                                                {whyUs?.content || `We work directly with founders, directors, and managers in ${locName}. No outsourced middle-men, no broken promises.`}
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {whyPoints.map((pt, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs ${
                                                            isLight
                                                                ? 'border-slate-200 bg-slate-50/80 text-slate-700'
                                                                : 'border-white/[0.05] bg-white/[0.02] text-slate-300'
                                                        }`}
                                                    >
                                                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                        <span>{pt}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Card 2: Local Reality */}
                                        <div
                                            className={`rounded-2xl border p-7 backdrop-blur-sm transition-all ${
                                                isLight
                                                    ? 'border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md'
                                                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20'
                                            }`}
                                        >
                                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${
                                                isLight ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'
                                            }`}>
                                                <TrendingUp size={20} />
                                            </div>
                                            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                                                The {locName} Opportunity
                                            </h3>
                                            <p className={`text-xs leading-relaxed line-clamp-6 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                                                {localContext?.content || `Customers across ${locName} check online reviews and mobile pages before making buying decisions. If your platform isn't fast and credible, you lose market share to competitors.`}
                                            </p>
                                            <a
                                                href="#contact"
                                                className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold hover:underline ${
                                                    isLight ? 'text-slate-900 hover:text-black' : 'text-white hover:text-slate-200'
                                                }`}
                                            >
                                                <span>Audit your local standing</span>
                                                <ArrowRight size={13} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TEMPLATE B: TIMELINE (Milestone Roadmap) */}
                            {template === 'timeline' && (
                                <div className="space-y-8">
                                    <div className="text-center max-w-2xl mx-auto mb-10">
                                        <span className={`text-xs uppercase tracking-widest font-bold ${
                                            isLight ? 'text-slate-600' : 'text-slate-400'
                                        }`}>
                                            Milestone Execution
                                        </span>
                                        <h2 className={`mt-2 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] ${
                                            isLight ? 'text-slate-900' : 'text-white'
                                        }`}>
                                            Our 4-Step Roadmap for {locName} Clients
                                        </h2>
                                    </div>

                                    <div className="relative mx-auto max-w-4xl">
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                            {processSteps.map((step, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`relative rounded-2xl border p-6 backdrop-blur-sm transition-all hover:-translate-y-1 ${
                                                        isLight
                                                            ? 'border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md'
                                                            : 'border-white/[0.08] bg-white/[0.03] hover:border-white/30'
                                                    }`}
                                                >
                                                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl font-bold text-sm mb-4 ${
                                                        isLight
                                                            ? 'bg-slate-900 text-white'
                                                            : 'bg-white text-black'
                                                    }`}>
                                                        0{idx + 1}
                                                    </div>
                                                    <h4 className={`text-sm font-bold mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>{step.title}</h4>
                                                    <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{step.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TEMPLATE C: CARD (3D Floating Stack) */}
                            {template === 'card' && (
                                <div>
                                    <div className="text-center max-w-2xl mx-auto mb-10">
                                        <span className={`text-xs uppercase tracking-widest font-bold ${
                                            isLight ? 'text-slate-600' : 'text-slate-400'
                                        }`}>
                                            High-Impact Standards
                                        </span>
                                        <h2 className={`mt-2 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] ${
                                            isLight ? 'text-slate-900' : 'text-white'
                                        }`}>
                                            Why Our Solutions Excel in {locName}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {whyPoints.slice(0, 3).map((pt, idx) => {
                                            const icons = [Zap, ShieldCheck, MapPin];
                                            const IconComp = icons[idx % icons.length];
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`rounded-2xl border p-6 shadow-xl backdrop-blur-sm transition-all hover:-translate-y-1 ${
                                                        isLight
                                                            ? 'border-slate-200 bg-white shadow-slate-200/50 hover:border-slate-400'
                                                            : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                                                    }`}
                                                >
                                                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl mb-4 ${
                                                        isLight ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'
                                                    }`}>
                                                        <IconComp size={22} />
                                                    </div>
                                                    <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>Advantage 0{idx + 1}</h3>
                                                    <p className={`text-xs leading-relaxed font-medium ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                                                        {pt}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* TEMPLATE D: SPLIT (Asymmetric Executive View) */}
                            {template === 'split' && (
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                    {/* Left Sticky Column */}
                                    <div
                                        className={`lg:col-span-5 lg:sticky lg:top-24 rounded-2xl border p-7 backdrop-blur-md transition-colors ${
                                            isLight
                                                ? 'border-slate-200 bg-white shadow-md'
                                                : 'border-white/[0.08] bg-white/[0.03]'
                                        }`}
                                    >
                                        <span className={`text-xs font-semibold uppercase tracking-wider ${
                                            isLight ? 'text-slate-600' : 'text-slate-400'
                                        }`}>
                                            Executive Overview
                                        </span>
                                        <h3 className={`mt-2 text-2xl font-bold font-['Space_Grotesk'] ${isLight ? 'text-slate-900' : 'text-white'}`}>
                                            {serviceTitle} for {locName}
                                        </h3>
                                        <p className={`mt-3 text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                                            {hero_description || service.description}
                                        </p>

                                        <div className={`mt-6 space-y-3 border-t pt-6 ${isLight ? 'border-slate-200' : 'border-white/[0.08]'}`}>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Location Served</span>
                                                <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>{locName}, {locState}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Standard Delivery</span>
                                                <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>2 - 6 Weeks</span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Support Mode</span>
                                                <span className="font-semibold text-emerald-600 dark:text-emerald-400">On-Ground / Remote 24/7</span>
                                            </div>
                                        </div>

                                        <a
                                            href="#contact"
                                            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all active:scale-95 ${
                                                isLight
                                                    ? 'bg-[#0a0a0a] text-white hover:bg-black/85 shadow-md'
                                                    : 'bg-white text-black hover:bg-slate-200 shadow-md'
                                            }`}
                                        >
                                            <span>Request Consultation</span>
                                            <ArrowRight size={14} />
                                        </a>
                                    </div>

                                    {/* Right Content Column */}
                                    <div className="lg:col-span-7 space-y-6">
                                        <div
                                            className={`rounded-2xl border p-7 ${
                                                isLight
                                                    ? 'border-slate-200 bg-white shadow-sm'
                                                    : 'border-white/[0.08] bg-white/[0.02]'
                                            }`}
                                        >
                                            <h4 className={`text-base font-bold mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                                                {whyUs?.heading || `Why Choose Us in ${locName}`}
                                            </h4>
                                            <p className={`text-xs leading-relaxed mb-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                                                {whyUs?.content}
                                            </p>
                                            <ul className="space-y-2">
                                                {whyPoints.map((pt, i) => (
                                                    <li key={i} className={`flex items-start gap-2 text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                                                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div
                                            className={`rounded-2xl border p-7 ${
                                                isLight
                                                    ? 'border-slate-200 bg-white shadow-sm'
                                                    : 'border-white/[0.08] bg-white/[0.02]'
                                            }`}
                                        >
                                            <h4 className={`text-base font-bold mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                                                The Local Landscape
                                            </h4>
                                            <p className={`text-xs leading-relaxed whitespace-pre-line ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                                                {localContext?.content || `Growing businesses in ${locName} need reliable digital infrastructure. We turn your ideas into high-converting products.`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* SECTION: WHY CHOOSE US DEEP DIVE */}
                    <section className={`py-20 border-t ${isLight ? 'border-slate-200' : 'border-white/[0.06]'}`}>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center max-w-2xl mx-auto mb-14">
                                <span className={`text-xs uppercase tracking-widest font-bold ${
                                    isLight ? 'text-slate-600' : 'text-slate-400'
                                }`}>
                                    Local Advantage
                                </span>
                                <h2 className={`mt-2 text-3xl font-extrabold font-['Space_Grotesk'] ${
                                    isLight ? 'text-slate-900' : 'text-white'
                                }`}>
                                    {whyUs?.heading || `Why ${locName} Businesses Choose Zytrixon Tech`}
                                </h2>
                                <p className={`mt-3 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                                    {whyUs?.content || `We provide high-touch engineering and reliable support built specifically for Bihar enterprises.`}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                {whyPoints.map((point, idx) => {
                                    const icons = [ShieldCheck, Zap, Users, Trophy];
                                    const IconComp = icons[idx % icons.length];
                                    return (
                                        <div
                                            key={idx}
                                            className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                                                isLight
                                                    ? 'border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md'
                                                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]'
                                            }`}
                                        >
                                            <div
                                                className={`flex h-11 w-11 items-center justify-center rounded-xl mb-4 transition-colors ${
                                                    isLight
                                                        ? 'bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white'
                                                        : 'bg-white/10 text-white group-hover:bg-white group-hover:text-black'
                                                }`}
                                            >
                                                <IconComp size={20} />
                                            </div>
                                            <p className={`text-sm font-medium leading-snug ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                                                {point}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* SECTION: LOCAL MARKET CONTEXT SPOTLIGHT */}
                    {localContext?.content && (
                        <section
                            className={`py-16 border-t ${
                                isLight
                                    ? 'border-slate-200 bg-gradient-to-b from-slate-50/50 to-white'
                                    : 'border-white/[0.06] bg-gradient-to-b from-transparent via-white/[0.01] to-transparent'
                            }`}
                        >
                            <div className="mx-auto max-w-5xl px-6">
                                <div
                                    className={`rounded-3xl border p-8 md:p-12 shadow-2xl backdrop-blur-md transition-colors ${
                                        isLight
                                            ? 'border-slate-200 bg-white shadow-slate-200/50'
                                            : 'border-white/[0.1] bg-gradient-to-br from-white/[0.04] to-white/[0.01]'
                                    }`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                                                isLight ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-500/20 text-emerald-400'
                                            }`}
                                        >
                                            <Building2 size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                                Local Business Insight
                                            </span>
                                            <h3 className={`text-xl md:text-2xl font-bold font-['Space_Grotesk'] ${
                                                isLight ? 'text-slate-900' : 'text-white'
                                            }`}>
                                                {localContext.heading || `Digital Growth in ${locName}`}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className={`mt-4 text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4 ${
                                        isLight ? 'text-slate-700' : 'text-slate-300'
                                    }`}>
                                        {localContext.content}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* SECTION: 4-STEP PROCESS ROADMAP */}
                    <section className={`py-20 border-t ${isLight ? 'border-slate-200' : 'border-white/[0.06]'}`}>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center max-w-2xl mx-auto mb-14">
                                <span className={`text-xs uppercase tracking-widest font-bold ${
                                    isLight ? 'text-slate-600' : 'text-slate-400'
                                }`}>
                                    Agile Methodology
                                </span>
                                <h2 className={`mt-2 text-3xl font-extrabold font-['Space_Grotesk'] ${
                                    isLight ? 'text-slate-900' : 'text-white'
                                }`}>
                                    {processSection?.heading || `Our Proven Process for ${locName} Clients`}
                                </h2>
                                <p className={`mt-3 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                                    From kickoff to deployment, every phase is transparent and milestone-tracked.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                {processSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-2xl border p-6 backdrop-blur-sm transition-all ${
                                            isLight
                                                ? 'border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md'
                                                : 'border-white/[0.08] bg-white/[0.02] hover:border-white/30'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold font-mono ${
                                                isLight ? 'bg-slate-900 text-white' : 'bg-white text-black'
                                            }`}>
                                                0{idx + 1}
                                            </span>
                                            <span className={`text-[11px] font-semibold uppercase tracking-wider ${
                                                isLight ? 'text-slate-400' : 'text-slate-500'
                                            }`}>
                                                Phase {idx + 1}
                                            </span>
                                        </div>
                                        <h4 className={`text-base font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>{step.title}</h4>
                                        <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SECTION: TECH STACK PILLS */}
                    <section
                        className={`py-16 border-t transition-colors ${
                            isLight ? 'border-slate-200/80 bg-slate-50/60' : 'border-white/[0.06] bg-black/40'
                        }`}
                    >
                        <div className="mx-auto max-w-7xl px-6 text-center">
                            <span className={`text-xs uppercase tracking-widest font-bold ${
                                isLight ? 'text-slate-600' : 'text-slate-400'
                            }`}>
                                Enterprise Engineering Stack
                            </span>
                            <h2 className={`mt-2 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] ${
                                isLight ? 'text-slate-900' : 'text-white'
                            }`}>
                                Modern Frameworks We Build With
                            </h2>
                            <p className={`mt-2 text-xs max-w-xl mx-auto ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                                Clean architectures built with battle-tested technologies for maximum speed and security.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                {TECH_STACK.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition-all ${
                                            isLight
                                                ? 'border-slate-200 bg-white text-slate-800 shadow-sm hover:border-slate-400'
                                                : 'border-white/[0.08] bg-white/[0.03] text-slate-200 hover:border-white/30 hover:bg-white/[0.06]'
                                        }`}
                                    >
                                        <span
                                            className="h-2 w-2 rounded-full"
                                            style={{ backgroundColor: tech.color }}
                                        />
                                        <span>{tech.name}</span>
                                        <span className={`text-[10px] ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>· {tech.category}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
                    <section className={`py-20 border-t ${isLight ? 'border-slate-200' : 'border-white/[0.06]'}`}>
                        <div className="mx-auto max-w-4xl px-6">
                            <div className="text-center mb-12">
                                <span className={`text-xs uppercase tracking-widest font-bold ${
                                    isLight ? 'text-slate-600' : 'text-slate-400'
                                }`}>
                                    Got Questions?
                                </span>
                                <h2 className={`mt-2 text-3xl font-extrabold font-['Space_Grotesk'] ${
                                    isLight ? 'text-slate-900' : 'text-white'
                                }`}>
                                    {faqSection?.heading || `Frequently Asked Questions — ${serviceTitle} in ${locName}`}
                                </h2>
                                <p className={`mt-3 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                                    Clear answers about pricing, timeline, and how we work with local clients.
                                </p>
                            </div>

                            <div className="space-y-3">
                                {faqs.map((faq, idx) => {
                                    const isOpen = openFaq === idx;
                                    return (
                                        <div
                                            key={idx}
                                            className={`rounded-2xl border overflow-hidden transition-colors ${
                                                isLight
                                                    ? 'border-slate-200 bg-white shadow-sm hover:border-slate-300'
                                                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]'
                                            }`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setOpenFaq(isOpen ? null : idx)}
                                                className={`flex w-full items-center justify-between p-5 text-left text-sm font-semibold transition-colors ${
                                                    isLight ? 'text-slate-900' : 'text-white'
                                                }`}
                                            >
                                                <span className="flex items-center gap-2.5">
                                                    <HelpCircle size={16} className={isLight ? 'text-slate-700' : 'text-slate-300'} />
                                                    <span>{faq.q}</span>
                                                </span>
                                                {isOpen ? (
                                                    <ChevronUp size={16} className={isLight ? 'text-slate-500' : 'text-slate-400'} />
                                                ) : (
                                                    <ChevronDown size={16} className={isLight ? 'text-slate-500' : 'text-slate-400'} />
                                                )}
                                            </button>
                                            {isOpen && (
                                                <div
                                                    className={`border-t p-5 pt-3 text-xs leading-relaxed ${
                                                        isLight
                                                            ? 'border-slate-100 bg-slate-50/70 text-slate-600'
                                                            : 'border-white/[0.05] bg-white/[0.01] text-slate-300'
                                                    }`}
                                                >
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* CUSTOM SECTIONS (If created in Admin) */}
                    {customSections.length > 0 && (
                        <div className="space-y-12">
                            {customSections.map((sec, idx) => (
                                <section key={idx} className={`py-16 border-t ${isLight ? 'border-slate-200' : 'border-white/[0.06]'}`}>
                                    <div className="mx-auto max-w-5xl px-6">
                                        <div
                                            className={`rounded-3xl border p-8 md:p-12 shadow-xl backdrop-blur-md ${
                                                isLight ? 'border-slate-200 bg-white' : 'border-white/[0.08] bg-white/[0.02]'
                                            }`}
                                        >
                                            <h3 className={`text-2xl font-bold font-['Space_Grotesk'] mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                                                {sec.heading}
                                            </h3>
                                            {sec.content && (
                                                <div className={`text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4 ${
                                                    isLight ? 'text-slate-700' : 'text-slate-300'
                                                }`}>
                                                    {sec.content}
                                                </div>
                                            )}
                                            {sec.points && sec.points.length > 0 && (
                                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {sec.points.map((pt, pIdx) => (
                                                        <div
                                                            key={pIdx}
                                                            className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs ${
                                                                isLight ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-white/[0.05] bg-white/[0.02] text-slate-300'
                                                            }`}
                                                        >
                                                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                            <span>{pt}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>
                    )}

                    {/* CLOSING HIGH-CONVERSION CTA */}
                    <section
                        className={`py-20 border-t transition-colors ${
                            isLight
                                ? 'border-slate-200 bg-gradient-to-b from-transparent via-slate-50 to-white'
                                : 'border-white/[0.06] bg-gradient-to-b from-transparent via-white/[0.02] to-black'
                        }`}
                    >
                        <div className="mx-auto max-w-4xl px-6 text-center">
                            <div
                                className={`rounded-3xl border p-10 md:p-14 shadow-2xl backdrop-blur-md transition-colors ${
                                    isLight
                                        ? 'border-slate-300 bg-gradient-to-b from-slate-50 to-white shadow-slate-200/70'
                                        : 'border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent'
                                }`}
                            >
                                <span
                                    className={`inline-block rounded-full px-3.5 py-1 text-xs font-semibold mb-4 border ${
                                        isLight
                                            ? 'border-slate-300 bg-white text-slate-800 shadow-sm'
                                            : 'border-white/15 bg-white/10 text-white'
                                    }`}
                                >
                                    Let's Get Started
                                </span>
                                <h2
                                    className={`text-3xl md:text-4xl font-extrabold font-['Space_Grotesk'] ${
                                        isLight ? 'text-slate-900' : 'text-white'
                                    }`}
                                >
                                    Ready to Build Your Project in {locName}?
                                </h2>
                                <p className={`mx-auto mt-4 max-w-2xl text-sm md:text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                                    Schedule a direct consultation with our engineering team. We'll analyze your requirements, review competitor gaps, and deliver a detailed scope of work.
                                </p>
                                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                    <a
                                        href="#contact"
                                        className={`rounded-xl px-8 py-3.5 text-sm font-semibold transition-all active:scale-95 ${
                                            isLight
                                                ? 'bg-[#0a0a0a] text-white hover:bg-black/85 shadow-lg shadow-black/10'
                                                : 'bg-white text-black hover:bg-slate-200 shadow-xl shadow-white/10'
                                        }`}
                                    >
                                        Request Free Quote
                                    </a>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all active:scale-95 ${
                                            isLight
                                                ? 'border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 shadow-sm'
                                                : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'
                                        }`}
                                    >
                                        <MessageCircle size={16} className={isLight ? 'text-emerald-600' : 'text-emerald-400'} />
                                        <span>Instant WhatsApp Chat</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CONTACT SECTION (Integrated for lead capture) */}
                    <div id="contact">
                        <ContactSection />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
