import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import Logo from '@/components/ui/logo';
import LoginFormCard from '@/components/admin/LoginFormCard';
import AdminThemeToggle from '@/components/admin/AdminThemeToggle';

interface LoginProps {
    status?: string;
    error?: string;
}

export default function Login({ status, error }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/z-admin/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div
            className="min-h-screen w-full relative overflow-hidden font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300 flex flex-col justify-between"
            style={{
                backgroundColor: 'var(--zy-bg, #ffffff)',
                color: 'var(--zy-text-primary, #111111)',
            }}
        >
            <Head title="Sign In | Zytrixon" />

            {/* ========================================================
                BACKGROUND LAYER: Liquid Silk Image over full surface
               ======================================================== */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                style={{
                    backgroundImage: `url('/assets/aura-liquid-silk.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center',
                }}
            >
                {/* Deep obsidian contrast overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* ========================================================
                DIAGONAL WAVE SEPARATOR: Organic Wave with Gentle, Lower Tides
               ======================================================== */}
            {/* Desktop Diagonal Wave Separator (Lower Tides) */}
            <svg
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none fill-current z-10 hidden lg:block"
                style={{ color: 'var(--zy-bg, #ffffff)' }}
            >
                <path d="M 780,0 C 790,90 730,170 680,270 C 630,370 570,440 550,540 C 530,640 600,720 570,820 C 540,900 460,950 420,1000 L 1000,1000 L 1000,0 Z" />
            </svg>

            {/* Mobile Adaptive Wave Separator (Lower Tides) */}
            <svg
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none fill-current z-10 lg:hidden"
                style={{ color: 'var(--zy-bg, #ffffff)' }}
            >
                <path d="M 0,220 C 260,245 480,195 720,230 C 850,245 940,215 1000,220 L 1000,600 L 0,600 Z" />
            </svg>

            {/* ========================================================
                UNIFIED TOP HEADER: Logo beside ZYTRIXON & Theme Toggle
               ======================================================== */}
            <header className="relative z-30 w-full px-6 sm:px-12 lg:px-16 pt-7 sm:pt-9 pb-4 flex items-center justify-between shrink-0">
                {/* Brand Logo & Name side-by-side */}
                <a
                    href="/"
                    className="inline-flex items-center gap-3 sm:gap-3.5 group transition-opacity hover:opacity-90"
                    title="Return to Zytrixon"
                >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-2 sm:p-2.5 shadow-lg transition-transform group-hover:scale-105">
                        <Logo className="w-full h-full fill-current text-white" />
                    </div>
                    <span className="font-serif font-bold text-2xl sm:text-3xl tracking-[0.2em] text-white uppercase drop-shadow-sm">
                        ZYTRIXON
                    </span>
                </a>

                {/* Theme Toggle Button */}
                <div className="flex items-center gap-2">
                    <AdminThemeToggle className="bg-white/15 dark:bg-white/5 border border-white/25 dark:border-white/10 text-white dark:text-white backdrop-blur-md shadow-md hover:bg-white/25" />
                </div>
            </header>

            {/* ========================================================
                MAIN CONTENT: Welcome Back on Left, Form on Right
                Directly on the same surface with NO two-halves separation!
               ======================================================== */}
            <main className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 py-6 sm:py-10 my-auto">
                {/* Left Side: "Welcome Back. Access your dashboard." over the wave */}
                <div className="w-full lg:max-w-md xl:max-w-lg text-white select-none pt-4 lg:pt-0">
                    <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.08] text-white drop-shadow-sm">
                        Welcome Back.
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-sans mt-3 font-normal tracking-wide drop-shadow-sm">
                        Access your dashboard.
                    </p>
                </div>

                {/* Right Side: Inputs directly on the surface (shifted slightly right) */}
                <div className="w-full max-w-sm sm:max-w-md lg:ml-auto lg:translate-x-4 xl:translate-x-6">
                    {/* "Sign In" Title (Right-aligned) */}
                    <div className="mb-6">
                        <h2
                            className="text-3xl sm:text-4xl font-bold tracking-tight font-sans text-right"
                            style={{ color: 'var(--zy-text-primary, #111111)' }}
                        >
                            Sign In
                        </h2>
                    </div>

                    {/* Inputs Card: Email with Mail icon, Password with Lock/Eye, Sign In button */}
                    <LoginFormCard
                        data={data}
                        setData={setData}
                        errors={errors}
                        processing={processing}
                        onSubmit={handleSubmit}
                        sessionError={error || status}
                    />
                </div>
            </main>

            {/* ========================================================
                PAGE FOOTER: Clean single copyright at bottom
               ======================================================== */}
            <footer className="relative z-20 w-full px-6 sm:px-12 lg:px-16 py-6 text-xs text-neutral-400 font-sans tracking-wide shrink-0">
                &copy; {new Date().getFullYear()} Zytrixon Tech. All rights reserved.
            </footer>
        </div>
    );
}

// CRITICAL: Explicitly set layout to pass-through so Inertia NEVER injects any sidebar wrapper!
Login.layout = (page: React.ReactNode) => page;
