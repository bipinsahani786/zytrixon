import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';

const INTEGRATIONS = [
    { name: 'Salesforce', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
    { name: 'SAP', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> },
    { name: 'Stripe', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
    { name: 'AWS Services', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19c-1.5-1-4-1.5-5.5-1.5s-4 .5-5.5 1.5"></path><path d="M12 17.5V11"></path><path d="M12 11l-3 3"></path><path d="M12 11l3 3"></path><circle cx="12" cy="5" r="2"></circle><circle cx="5" cy="11" r="2"></circle><circle cx="19" cy="11" r="2"></circle></svg> },
    { name: 'Twilio', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> },
    { name: 'HubSpot', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg> }
];

export default function IntegrationCapabilities({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    // Duplicate list to create seamless loop
    const marqueeItems = [...INTEGRATIONS, ...INTEGRATIONS];

    return (
        <section className="zy-section" style={{ background: isLight ? '#FFFFFF' : 'var(--zy-black)', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', marginBottom: 40 }}>
                <span className="zy-section-label" style={{ color: '#ec4899', opacity: 1 }}>Connected Ecosystem</span>
                <h2 className="zy-section-title" style={{ color: isLight ? '#000' : 'var(--zy-white)' }}>Integration Capabilities</h2>
                <p style={{ color: isLight ? '#555' : 'var(--zy-gray-text)', maxWidth: 600, margin: '24px auto 0', fontSize: 18, lineHeight: 1.6 }}>
                    We seamlessly connect your new {service?.title || 'system'} with your existing enterprise tools, creating a unified digital infrastructure.
                </p>
            </div>

            <div className="marquee-container" style={{ position: 'relative', width: '100%', padding: '20px 0' }}>
                <div className="marquee-track" style={{ display: 'flex', gap: 24, width: 'max-content', animation: 'marqueeScroll 25s linear infinite' }}>
                    {marqueeItems.map((tool, i) => (
                        <div key={i} style={{ 
                            display: 'flex', alignItems: 'center', gap: 16, 
                            padding: '24px 40px', minWidth: 250,
                            background: isLight ? '#fdfdfd' : 'var(--zy-gray-card)', 
                            borderRadius: 16, 
                            border: `1px solid ${isLight ? '#eaeaea' : 'rgba(255,255,255,0.05)'}`, 
                            color: isLight ? '#000' : 'var(--zy-white)', 
                            fontWeight: 700, fontSize: 18,
                            boxShadow: isLight ? '0 10px 30px rgba(0,0,0,0.02)' : '0 10px 30px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease'
                        }} className="integration-card">
                            <div style={{ color: '#ec4899' }}>
                                {tool.icon}
                            </div>
                            {tool.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade edges */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '15%', background: `linear-gradient(to right, ${isLight ? '#FFF' : 'var(--zy-black)'}, transparent)`, zIndex: 1, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '15%', background: `linear-gradient(to left, ${isLight ? '#FFF' : 'var(--zy-black)'}, transparent)`, zIndex: 1, pointerEvents: 'none' }} />

            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .integration-card:hover {
                    transform: translateY(-5px);
                    border-color: #ec4899 !important;
                    box-shadow: 0 10px 40px rgba(236, 72, 153, 0.15) !important;
                }
            `}</style>
        </section>
    );
}
