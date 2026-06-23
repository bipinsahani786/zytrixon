import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '@/components/landing/theme-provider';

gsap.registerPlugin(ScrollTrigger);

const SERVICE_OPTIONS = [
    'Web Development',
    'App Development',
    'IoT Solutions',
    'Digital Marketing',
    'UI/UX Design',
    'Cloud & DevOps',
    'Other',
];

const BUDGET_OPTIONS = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000+',
    'Not Sure',
];

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        budget: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, redirect to WhatsApp with form data
        const text = `Hi! I'm ${formData.name}.\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
        window.open(`https://wa.me/917049711475?text=${encodeURIComponent(text)}`, '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        background: 'transparent',
        border: 'none',
        padding: '12px 16px',
        color: 'var(--zy-white)',
        fontSize: 14,
        fontFamily: 'var(--font-sans)',
        outline: 'none',
        boxSizing: 'border-box',
    };

    const FieldWrapper = ({ children }: { children: React.ReactNode }) => (
        <div className="zy-card" style={{ padding: '2px', borderRadius: '8px' }}>
            <div style={{ background: isLight ? '#ffffff' : '#111', borderRadius: '6px' }}>
                {children}
            </div>
        </div>
    );

    return (
        <section ref={sectionRef} id="contact" className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <div className="zy-section-header" style={{ textAlign: 'center' }}>
                <span className="zy-section-label">Let's Talk</span>
                <h2 className="zy-section-title">Get a Free Quote</h2>
                <p className="zy-section-subtitle" style={{ margin: '20px auto 0' }}>
                    Tell us about your project. We reply within 2 hours.
                </p>
            </div>

            <div className="contact-grid" style={{
                maxWidth: 1100,
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: 48,
                alignItems: 'start',
            }}>
                {/* Left — Contact Info + Map */}
                <div>
                    {/* Contact cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                        {/* Phone */}
                        <a href="tel:+917049711475" className="zy-card" style={{
                            display: 'flex', alignItems: 'center', gap: 16,
                            padding: '16px 20px', textDecoration: 'none', color: 'var(--zy-white)',
                        }}>
                            <div style={{
                                width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)', flexShrink: 0, borderRadius: '8px'
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: 10, color: 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Phone</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>+91 70497 11475</div>
                            </div>
                        </a>

                        {/* Email */}
                        <a href="mailto:zytrixon@gmail.com" className="zy-card" style={{
                            display: 'flex', alignItems: 'center', gap: 16,
                            padding: '16px 20px', textDecoration: 'none', color: 'var(--zy-white)',
                        }}>
                            <div style={{
                                width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)', flexShrink: 0, borderRadius: '8px'
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: 10, color: 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Email</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>zytrixon@gmail.com</div>
                            </div>
                        </a>

                        {/* Address */}
                        <div className="zy-card" style={{
                            display: 'flex', alignItems: 'center', gap: 16,
                            padding: '16px 20px',
                        }}>
                            <div style={{
                                width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)', flexShrink: 0, borderRadius: '8px'
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: 10, color: 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Office</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Kankarbagh, Patna, Bihar - 800020</div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="zy-card" style={{
                        height: 220,
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.5s ease',
                        padding: 0,
                    }}
                    onMouseEnter={e => { (e.currentTarget).style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={e => { (e.currentTarget).style.filter = 'grayscale(100%)'; }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.123456789!2d85.1!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58!2sKankarbagh%2C+Patna!5e0!3m2!1sen!2sin!4v1"
                            width="100%"
                            height="220"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Zytrixon Office Location"
                        />
                    </div>

                    {/* Trust badge */}
                    <div style={{
                        marginTop: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: 12,
                        color: 'var(--zy-gray-text)',
                    }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ecdc4" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                        We reply within 2 hours · 100% confidential
                    </div>
                </div>

                {/* Right — Form */}
                <div className="zy-card" style={{ padding: 32 }}>
                    {submitted ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 20px',
                            animation: 'fadeInUp 0.4s ease',
                        }}>
                            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--zy-white)', marginBottom: 8 }}>
                                Message Sent!
                            </h3>
                            <p style={{ color: 'var(--zy-gray-text)', fontSize: 14 }}>
                                We'll get back to you within 2 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: 'var(--zy-gray-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Full Name *
                                    </label>
                                    <FieldWrapper>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                            placeholder="Your Name"
                                            style={inputStyle}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: 'var(--zy-gray-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Phone *
                                    </label>
                                    <FieldWrapper>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                                            placeholder="+91 XXXXX XXXXX"
                                            style={inputStyle}
                                        />
                                    </FieldWrapper>
                                </div>
                            </div>

                            <div style={{ marginBottom: 16 }}>
                                <label style={{ display: 'block', fontSize: 11, color: 'var(--zy-gray-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Email *
                                </label>
                                <FieldWrapper>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                        placeholder="you@company.com"
                                        style={inputStyle}
                                    />
                                </FieldWrapper>
                            </div>

                            <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: 'var(--zy-gray-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Service Needed
                                    </label>
                                    <FieldWrapper>
                                        <select
                                            value={formData.service}
                                            onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                                            style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                                        >
                                            <option value="">Select Service</option>
                                            {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </FieldWrapper>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: 'var(--zy-gray-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Budget Range
                                    </label>
                                    <FieldWrapper>
                                        <select
                                            value={formData.budget}
                                            onChange={e => setFormData(p => ({ ...p, budget: e.target.value }))}
                                            style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                                        >
                                            <option value="">Select Budget</option>
                                            {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                    </FieldWrapper>
                                </div>
                            </div>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontSize: 11, color: 'var(--zy-gray-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Project Details
                                </label>
                                <FieldWrapper>
                                    <textarea
                                        value={formData.message}
                                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                        placeholder="Tell us about your project requirements..."
                                        rows={4}
                                        style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                                    />
                                </FieldWrapper>
                            </div>

                            <button
                                type="submit"
                                className="magnetic-btn"
                                style={{ width: '100%', padding: '16px', fontSize: 14, justifyContent: 'center' }}
                            >
                                Send Message
                                <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .contact-form-row {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
