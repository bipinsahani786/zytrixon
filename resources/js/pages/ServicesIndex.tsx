import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import CustomCursor from '@/components/landing/custom-cursor';

export default function ServicesIndex({ services }: { services: any[] }) {
    return (
        <ThemeProvider>
            <Head>
                <title>Our Services - Zytrixon Tech</title>
                <meta name="description" content="Explore our enterprise-grade services including Web Development, App Development, AI & Automation, and more." />
            </Head>
            <CustomCursor />
            <Navbar />

            <main style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--zy-black)', color: 'var(--zy-white)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: 60 }}>
                    <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>What We Build</h1>
                    <p style={{ fontSize: 20, color: 'var(--zy-gray-text)', maxWidth: 600, margin: '0 auto' }}>
                        Enterprise-grade digital solutions designed to scale and dominate the market.
                    </p>
                </div>

                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
                    {services.map((service) => (
                        <Link 
                            key={service.id} 
                            href={`/services/${service.slug}`}
                            style={{ 
                                display: 'block', 
                                background: 'var(--zy-gray-card)', 
                                borderRadius: 12, 
                                padding: 40,
                                textDecoration: 'none',
                                border: '1px solid rgba(255,255,255,0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s var(--zy-ease)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.background = 'var(--zy-gray-dark)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'var(--zy-gray-card)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--zy-white)', marginBottom: 16, fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--zy-gray-text)', lineHeight: 1.6, marginBottom: 32, fontSize: 14 }}>{service.description}</p>
                            
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--zy-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 13 }}>
                                Explore Service
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
