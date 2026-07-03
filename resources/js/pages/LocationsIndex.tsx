import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import CustomCursor from '@/components/landing/custom-cursor';
import InnerPageHero from '@/components/landing/inner-page-hero';
import FooterCTA from '@/components/landing/footer-cta';
import ContactSection from '@/components/landing/contact-section';
import GradientCard from '@/components/ui/GradientCard';

export default function LocationsIndex({ locations }: { locations: any[] }) {
    return (
        <ThemeProvider>
            <Head>
                <title>Locations We Serve - Zytrixon Tech</title>
                <meta name="description" content="Discover the global cities where Zytrixon Tech provides enterprise software development, SEO, and digital marketing services." />
            </Head>
            <CustomCursor />
            <Navbar />

            <main style={{ minHeight: '100vh', background: 'var(--zy-black)', color: 'var(--zy-white)' }}>
                <InnerPageHero 
                    title="Locations We Serve"
                    subtitle="We deliver enterprise-grade digital solutions to clients across the globe."
                />

                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
                        {locations?.map((location) => (
                            <Link 
                                key={location.id} 
                                href={`/locations/${location.slug}`}
                                style={{ textDecoration: 'none', display: 'block' }}
                                className="group"
                            >
                                <GradientCard themeColor="#3b82f6" style={{ height: '100%' }}>
                                    <div style={{ 
                                        padding: 32, 
                                        height: '100%', 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ 
                                            width: 48, height: 48, borderRadius: 12, background: '#3b82f620',
                                            color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginBottom: 24, border: '1px solid #3b82f640',
                                            transition: 'transform 0.3s var(--zy-ease)',
                                        }} className="icon-container">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                        </div>
                                        
                                        <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--zy-white)', marginBottom: 8, fontFamily: 'var(--font-heading)' }}>
                                            {location.name}
                                        </h3>
                                        
                                        <p style={{ color: 'var(--zy-gray-text)', fontSize: 15, marginBottom: 24 }}>
                                            {location.state ? `${location.state}, ` : ''}{location.country || 'India'}
                                        </p>
                                        
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#3b82f6', fontWeight: 600, fontSize: 14, marginTop: 'auto' }}>
                                            View Services &rarr;
                                        </div>
                                    </div>
                                </GradientCard>
                            </Link>
                        ))}
                    </div>
                </div>

                <style>{`
                    .group:hover .icon-container {
                        transform: scale(1.1) translateY(-5px);
                    }
                `}</style>

                <FooterCTA />
                <ContactSection />
            </main>

            <Footer />
        </ThemeProvider>
    );
}
