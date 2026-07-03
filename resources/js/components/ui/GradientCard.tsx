import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

interface GradientCardProps {
    children: React.ReactNode;
    themeColor?: string;
    style?: React.CSSProperties;
    className?: string;
}

export default function GradientCard({ children, themeColor, style = {}, className = '' }: GradientCardProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <div className={className} style={{ 
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            padding: 1, // acts as border width
            display: 'flex',
            flexDirection: 'column',
            ...style
        }}>
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%', width: '250%', height: '250%',
                background: themeColor 
                    ? `conic-gradient(from 0deg, transparent 75%, ${themeColor} 95%, ${themeColor} 100%)`
                    : isLight 
                        ? 'conic-gradient(from 0deg, transparent 75%, rgba(0,0,0,0.4) 95%, #000000 100%)'
                        : 'conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.4) 95%, #ffffff 100%)',
                animation: 'spinGradientCentered 4s linear infinite',
                zIndex: 0,
                opacity: themeColor ? 0.6 : 0.4
            }} />
            <div style={{
                position: 'relative',
                background: 'var(--zy-gray-card)',
                borderRadius: 15,
                zIndex: 1,
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {children}
            </div>
            
            <style>{`
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
            `}</style>
        </div>
    );
}
