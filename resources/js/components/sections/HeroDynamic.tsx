import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { getServiceConfig } from '@/lib/service-data';

function Abstract3D({ color }: { color: string }) {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0.4, 0]} scale={2.2}>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <meshStandardMaterial
                color={color}
                wireframe={true}
                transparent={true}
                opacity={0.28}
            />
        </mesh>
    );
}

export default function HeroDynamic({
    service,
    location,
    h1,
    contentOverrides,
}: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;

    return (
        <section
            style={{
                paddingTop: '16px',
                paddingBottom: '50px',
                paddingLeft: '24px',
                paddingRight: '24px',
                background: isLight ? '#f9fafb' : 'var(--zy-black)',
                borderBottom: `1px solid ${isLight ? '#e5e7eb' : 'rgba(255,255,255,0.05)'}`,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            {/* 3D Background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    opacity: isLight ? 0.35 : 1,
                }}
            >
                <Canvas
                    camera={{ position: [0, 0, 4.2], fov: 45 }}
                    dpr={[1, 1.5]}
                >
                    <ambientLight intensity={1} />
                    <Abstract3D color={themeColor} />
                </Canvas>
            </div>

            {/* Overlay Gradient for Readability */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: isLight
                        ? 'radial-gradient(circle at center, transparent 0%, #f9fafb 80%)'
                        : 'radial-gradient(circle at center, transparent 0%, var(--zy-black) 80%)',
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    maxWidth: 1000,
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 12,
                        marginBottom: 16,
                    }}
                >
                    <span
                        style={{
                            padding: '6px 16px',
                            background: `${themeColor}1a`,
                            color: themeColor,
                            borderRadius: 50,
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            border: `1px solid ${themeColor}33`,
                            backdropFilter: 'blur(5px)',
                        }}
                    >
                        {config.hero.badge.toUpperCase()}
                    </span>
                    {location && (
                        <span
                            style={{
                                padding: '6px 16px',
                                background: 'rgba(34, 197, 94, 0.1)',
                                color: '#22c55e',
                                borderRadius: 50,
                                fontSize: 13,
                                fontWeight: 700,
                                letterSpacing: '0.05em',
                                border: '1px solid rgba(34, 197, 94, 0.2)',
                                backdropFilter: 'blur(5px)',
                            }}
                        >
                            AVAILABLE IN {location.name.toUpperCase()}
                        </span>
                    )}
                </div>

                <h1
                    style={{
                        fontSize: 'clamp(48px, 7vw, 84px)',
                        fontWeight: 800,
                        color: isLight ? '#000' : 'var(--zy-white)',
                        lineHeight: 1.1,
                        marginBottom: 32,
                        fontFamily: 'var(--font-heading)',
                        textShadow: isLight
                            ? 'none'
                            : '0 10px 30px rgba(0,0,0,0.5)',
                    }}
                >
                    {h1}
                </h1>

                <p
                    style={{
                        fontSize: 'clamp(18px, 2vw, 24px)',
                        color: isLight ? '#555' : 'var(--zy-gray-text)',
                        maxWidth: 800,
                        margin: '0 auto 48px',
                        lineHeight: 1.6,
                    }}
                >
                    {contentOverrides?.hero_description ||
                        `${service.description} We build high-performance systems designed to scale and dominate the market.`}
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: 16,
                        justifyContent: 'center',
                        pointerEvents: 'auto',
                        flexWrap: 'wrap',
                    }}
                >
                    <button
                        className="zy-btn-primary"
                        style={{
                            background: themeColor,
                            borderColor: themeColor,
                            color: '#fff',
                            boxShadow: `0 10px 25px ${themeColor}40`,
                            padding: '16px 32px',
                            fontSize: 18,
                        }}
                    >
                        Start a Project
                    </button>
                    <button
                        className="zy-btn-outline"
                        style={{
                            borderColor: isLight
                                ? 'rgba(0,0,0,0.2)'
                                : 'rgba(255,255,255,0.2)',
                            color: isLight ? '#000' : 'var(--zy-white)',
                            padding: '16px 32px',
                            fontSize: 18,
                            background: isLight
                                ? '#fff'
                                : 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(5px)',
                        }}
                    >
                        View Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}
