import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { Star, Sparkles, Award } from 'lucide-react';

interface FoundersHeroVisualProps {
    className?: string;
}

export default function FoundersHeroVisual({ className = '' }: FoundersHeroVisualProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        // Subtle tilt for depth parallax without raster distortion
        setTilt({ x: x * 6, y: -y * 6 });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <div
            className={`founders-hero-container relative flex items-center justify-center select-none w-full ${className}`}
            style={{
                perspective: '1400px',
                minHeight: '560px',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Luminous Ambient Glow Behind Cutout */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                style={{
                    background: isLight
                        ? 'radial-gradient(ellipse at 50% 45%, rgba(16, 185, 129, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 72%)'
                        : 'radial-gradient(ellipse at 50% 42%, rgba(16, 185, 129, 0.16) 0%, rgba(59, 130, 246, 0.08) 40%, rgba(255, 255, 255, 0.02) 65%, transparent 80%)',
                    filter: 'blur(45px)',
                    zIndex: 0,
                    transform: 'translate3d(0, 0, 0)',
                }}
            />

            {/* Subtle Tech Cybernetic Rings */}
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    width: '480px',
                    height: '480px',
                    border: isLight
                        ? '1px dashed rgba(0, 0, 0, 0.07)'
                        : '1px dashed rgba(255, 255, 255, 0.09)',
                    animation: 'spinSlow 75s linear infinite',
                    zIndex: 0,
                }}
            />
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    width: '360px',
                    height: '360px',
                    border: isLight
                        ? '1px solid rgba(16, 185, 129, 0.15)'
                        : '1px solid rgba(16, 185, 129, 0.14)',
                    zIndex: 0,
                }}
            />

            {/* Interactive Tilt Stage */}
            <div
                className="relative flex items-center justify-center w-full h-full transition-transform duration-300 ease-out"
                style={{
                    transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateZ(0)`,
                    transformStyle: 'preserve-3d',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    zIndex: 1,
                }}
            >
                {/* Completely Transparent Frameless Cutout Container (No Black Box) */}
                <div
                    className="relative flex items-end justify-center w-full max-w-[540px] md:max-w-[580px] lg:max-w-[620px] h-[540px] sm:h-[580px] md:h-[620px] lg:h-[650px] transition-all duration-300"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        overflow: 'visible',
                    }}
                >
                    {/* Transparent Cutout Image with High-Res 2x Retina & Silky Shadow */}
                    <picture className="w-full h-full flex items-end justify-center">
                        <source
                            type="image/webp"
                            srcSet="/assets/founders-transparent@2x.webp 2x, /assets/founders-transparent.webp 1x"
                        />
                        <source
                            type="image/png"
                            srcSet="/assets/founders-transparent@2x.png 2x, /assets/founders-transparent.png 1x"
                        />
                        <img
                            src="/assets/founders-transparent@2x.png"
                            alt="Bipin Sahani & Saurav - Co-Founders, Zytrixon Tech"
                            className="w-full h-full object-contain object-bottom select-none pointer-events-none transition-transform duration-500"
                            style={{
                                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                                imageRendering: 'auto',
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                                filter: isLight
                                    ? 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.12)) contrast(1.03) brightness(1.01)'
                                    : 'drop-shadow(0 25px 40px rgba(0, 0, 0, 0.85)) contrast(1.04) brightness(1.02)',
                                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                            }}
                            loading="eager"
                            decoding="async"
                        />
                    </picture>
                </div>

                {/* =================================================== */}
                {/* FLOATING GLASSMORPHIC BADGE 1: Top Right            */}
                {/* =================================================== */}
                <div
                    className="absolute -top-3 right-0 sm:right-2 lg:right-4 z-20 backdrop-blur-2xl rounded-2xl px-4 py-2.5 transition-transform duration-300"
                    style={{
                        background: isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(11, 13, 19, 0.82)',
                        border: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.14)',
                        boxShadow: isLight
                            ? '0 16px 36px rgba(0, 0, 0, 0.08), 0 0 20px rgba(16, 185, 129, 0.08)'
                            : '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.08)',
                        transform: `translate3d(${tilt.x * 1.5}px, ${-tilt.y * 1.5}px, 35px)`,
                    }}
                >
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        <div>
                            <div className={`text-[11px] font-bold tracking-wider uppercase font-['Space_Grotesk'] flex items-center gap-1 ${
                                isLight ? 'text-slate-900' : 'text-white'
                            }`}>
                                Founders & Architects
                            </div>
                            <div className={`text-[10px] font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                                Patna HQ → Global Enterprise Delivery
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================== */}
                {/* FLOATING GLASSMORPHIC BADGE 2: Bottom Left          */}
                {/* =================================================== */}
                <div
                    className="absolute bottom-4 -left-2 sm:left-1 lg:left-2 z-20 backdrop-blur-2xl rounded-2xl p-3.5 sm:p-4 transition-transform duration-300 max-w-[240px]"
                    style={{
                        background: isLight ? 'rgba(255, 255, 255, 0.94)' : 'rgba(12, 14, 20, 0.85)',
                        border: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: isLight
                            ? '0 20px 40px rgba(0, 0, 0, 0.1)'
                            : '0 28px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.04)',
                        transform: `translate3d(${-tilt.x * 1.2}px, ${tilt.y * 1.2}px, 45px)`,
                    }}
                >
                    <div className="flex items-center gap-2 mb-1">
                        <Award size={16} className="text-emerald-500 shrink-0" />
                        <span className={`text-xs font-bold font-['Space_Grotesk'] tracking-tight ${
                            isLight ? 'text-slate-900' : 'text-white'
                        }`}>
                            Bipin Sahani & Saurav
                        </span>
                    </div>
                    <p className={`text-[11px] font-medium leading-tight mb-2 ${
                        isLight ? 'text-slate-600' : 'text-slate-300'
                    }`}>
                        Co-Founders, Zytrixon Tech
                    </p>
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-200 dark:border-white/10 text-[10px] font-semibold text-amber-500">
                        <Star size={11} className="fill-amber-500 text-amber-500" />
                        <span>4.9/5 · 100+ Systems Built</span>
                    </div>
                </div>

                {/* =================================================== */}
                {/* FLOATING GLASSMORPHIC BADGE 3: Bottom Right Pill    */}
                {/* =================================================== */}
                <div
                    className="hidden sm:flex absolute bottom-8 -right-1 sm:right-2 lg:right-4 z-20 backdrop-blur-2xl rounded-full px-4 py-1.5 items-center gap-1.5 transition-transform duration-300"
                    style={{
                        background: isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(15, 17, 24, 0.82)',
                        border: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.14)',
                        boxShadow: isLight ? '0 10px 24px rgba(0,0,0,0.06)' : '0 14px 32px rgba(0,0,0,0.5)',
                        transform: `translate3d(${tilt.x * 0.9}px, ${tilt.y * 0.9}px, 30px)`,
                    }}
                >
                    <Sparkles size={12} className="text-amber-500" />
                    <span className={`text-[11px] font-semibold tracking-wide ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                        Web · Mobile · AI · IoT
                    </span>
                </div>
            </div>

            <style>{`
                @keyframes spinSlow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 768px) {
                    .founders-hero-container {
                        min-height: 440px !important;
                    }
                }
            `}</style>
        </div>
    );
}
