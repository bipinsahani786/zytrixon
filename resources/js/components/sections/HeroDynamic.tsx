import React, { useRef } from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { Canvas, useFrame } from '@react-three/fiber';

function Abstract3D({ color }: { color: string }) {
    const meshRef = useRef<any>(null);
    
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} scale={1.8}>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <meshStandardMaterial 
                color={color} 
                wireframe={true} 
                transparent={true} 
                opacity={0.15} 
            />
        </mesh>
    );
}

export default function HeroDynamic({ service, location, h1 }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    
    // Service specific color theme
    const themeColor = service?.slug === 'app-development' ? '#22c55e' 
                     : service?.slug === 'seo-digital-marketing' ? '#eab308' 
                     : '#6366f1'; // Default blueish

    return (
        <section style={{ 
            padding: '120px 24px 80px', 
            background: 'var(--zy-black)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* 3D Background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: isLight ? 0.4 : 1 }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
                    <ambientLight intensity={1} />
                    <Abstract3D color={themeColor} />
                </Canvas>
            </div>
            
            {/* Overlay Gradient for Readability */}
            <div style={{
                position: 'absolute', inset: 0,
                background: isLight 
                    ? 'radial-gradient(circle at center, transparent 0%, #FFFFFF 80%)'
                    : 'radial-gradient(circle at center, transparent 0%, var(--zy-black) 80%)',
                zIndex: 0
            }} />
            
            <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
                    <span style={{ padding: '6px 16px', background: `${themeColor}1a`, color: themeColor, borderRadius: 50, fontSize: 13, fontWeight: 700, letterSpacing: '0.05em' }}>
                        {service?.title ? service.title.toUpperCase() : 'ENTERPRISE GRADE'}
                    </span>
                    {location && (
                        <span style={{ padding: '6px 16px', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', borderRadius: 50, fontSize: 13, fontWeight: 700, letterSpacing: '0.05em' }}>
                            AVAILABLE IN {location.name.toUpperCase()}
                        </span>
                    )}
                </div>
                
                <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, color: 'var(--zy-white)', lineHeight: 1.1, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>
                    {h1}
                </h1>
                
                <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--zy-gray-text)', maxWidth: 800, margin: '0 auto 40px' }}>
                    {service.description} We build high-performance systems designed to scale and dominate the market.
                </p>
                
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', pointerEvents: 'auto' }}>
                    <button className="zy-btn-primary" style={{ background: themeColor, borderColor: themeColor }}>Start a Project</button>
                    <button className="zy-btn-outline" style={{ borderColor: isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)', color: isLight ? '#000' : 'var(--zy-white)' }}>
                        View Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}
