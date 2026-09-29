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
            className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden font-sans transition-colors duration-300 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black"
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
                className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none"
                style={{
                    backgroundImage: `url('/assets/aura-liquid-silk.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center',
                }}
            >
                {/* Deep obsidian contrast overlays for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-black/20" />
            </div>

            {/* ========================================================
                DIAGONAL WAVE SEPARATOR: Organic Wave with Gentle, Lower Tides
               ======================================================== */}
            {/* Desktop Diagonal Wave Separator (Lower Tides) */}
            <svg
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full fill-current lg:block"
                style={{ color: 'var(--zy-bg, #ffffff)' }}
            >
                <path d="M 780,0 C 790,90 730,170 680,270 C 630,370 570,440 550,540 C 530,640 600,720 570,820 C 540,900 460,950 420,1000 L 1000,1000 L 1000,0 Z" />
            </svg>

            {/* Mobile Adaptive Wave Separator (Lower Tides) */}
            <svg
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full fill-current lg:hidden"
                style={{ color: 'var(--zy-bg, #ffffff)' }}
            >
                <path d="M 0,220 C 260,245 480,195 720,230 C 850,245 940,215 1000,220 L 1000,600 L 0,600 Z" />
            </svg>

            {/* ========================================================
                UNIFIED TOP HEADER: Logo beside ZYTRIXON & Theme Toggle
               ======================================================== */}
            <header className="relative z-30 flex w-full shrink-0 items-center justify-between px-6 pt-7 pb-4 sm:px-12 sm:pt-9 lg:px-16">
                {/* Brand Logo & Name side-by-side */}
                <a
                    href="/"
                    className="group inline-flex items-center gap-3 transition-opacity hover:opacity-90 sm:gap-3.5"
                    title="Return to Zytrixon"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-md transition-transform group-hover:scale-105 sm:h-11 sm:w-11 sm:p-2.5">
                        <Logo className="h-full w-full fill-current text-white" />
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-sm sm:text-3xl">
                        ZYTRIXON
                    </span>
                </a>

                {/* Theme Toggle Button */}
                <div className="flex items-center gap-2">
                    <AdminThemeToggle className="border border-white/25 bg-white/15 text-white shadow-md backdrop-blur-md hover:bg-white/25 dark:border-white/10 dark:bg-white/5 dark:text-white" />
                </div>
            </header>

            {/* ========================================================
                MAIN CONTENT: Welcome Back on Left, Form on Right
                Directly on the same surface with NO two-halves separation!
               ======================================================== */}
            <main className="relative z-20 mx-auto my-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-between gap-10 px-6 py-6 sm:px-12 sm:py-10 lg:flex-row lg:gap-14 lg:px-16">
                {/* Left Side: "Welcome Back. Access your dashboard." over the wave */}
                <div className="w-full pt-4 text-white select-none lg:max-w-md lg:pt-0 xl:max-w-lg">
                    <h1 className="font-serif text-4xl leading-[1.08] font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl xl:text-7xl">
                        Welcome Back.
                    </h1>
                    <p className="mt-3 font-sans text-base font-normal tracking-wide text-neutral-300 drop-shadow-sm sm:text-lg lg:text-xl">
                        Access your dashboard.
                    </p>
                </div>

                {/* Right Side: Inputs directly on the surface (shifted slightly right) */}
                <div className="w-full max-w-sm sm:max-w-md lg:ml-auto lg:translate-x-4 xl:translate-x-6">
                    {/* "Sign In" Title (Right-aligned) */}
                    <div className="mb-6">
                        <h2
                            className="text-right font-sans text-3xl font-bold tracking-tight sm:text-4xl"
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
            <footer className="relative z-20 w-full shrink-0 px-6 py-6 font-sans text-xs tracking-wide text-neutral-400 sm:px-12 lg:px-16">
                &copy; {new Date().getFullYear()} Zytrixon Tech. All rights
                reserved.
            </footer>
        </div>
    );
}

// CRITICAL: Explicitly set layout to pass-through so Inertia NEVER injects any sidebar wrapper!
Login.layout = (page: React.ReactNode) => page;
