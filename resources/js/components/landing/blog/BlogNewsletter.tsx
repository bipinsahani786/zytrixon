import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface BlogNewsletterProps {
    isLight: boolean;
}

export default function BlogNewsletter({ isLight }: BlogNewsletterProps) {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterDone, setNewsletterDone] = useState(false);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newsletterEmail) {
            setNewsletterDone(true);
            setNewsletterEmail('');
        }
    };

    return (
        <section
            style={{
                padding: '80px 24px',
                background: isLight ? '#FFFFFF' : '#0B0B0F',
                borderTop: isLight
                    ? '1px solid #E2E8F0'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                borderBottom: isLight
                    ? '1px solid #E2E8F0'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                textAlign: 'center',
            }}
        >
            <div style={{ maxWidth: 640, margin: '0 auto' }}>
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '6px 14px',
                        borderRadius: 9999,
                        background: isLight
                            ? '#EEF2FF'
                            : 'rgba(59, 130, 246, 0.1)',
                        color: isLight ? '#4F46E5' : '#60A5FA',
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: 20,
                    }}
                >
                    <Sparkles size={13} />
                    Weekly Tech Dispatch
                </div>

                <h2
                    style={{
                        fontSize: 'clamp(28px, 4vw, 40px)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        color: isLight ? '#0F172A' : '#FFFFFF',
                        marginBottom: 16,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                    }}
                >
                    Stay Ahead of Technical Innovations
                </h2>

                <p
                    style={{
                        color: isLight ? '#475569' : '#A1A1AA',
                        marginBottom: 32,
                        fontSize: 15,
                        lineHeight: 1.6,
                    }}
                >
                    Curated blueprints on AI models, scalable
                    micro-architectures, fullstack engineering, and cloud
                    security delivered straight to your inbox. No fluff, no
                    spam.
                </p>

                {newsletterDone ? (
                    <div
                        style={{
                            padding: '16px 24px',
                            borderRadius: 12,
                            background: isLight
                                ? '#ECFDF5'
                                : 'rgba(16, 185, 129, 0.12)',
                            border: isLight
                                ? '1px solid #A7F3D0'
                                : '1px solid rgba(16, 185, 129, 0.3)',
                            color: isLight ? '#065F46' : '#34D399',
                            fontSize: 14,
                            fontWeight: 600,
                            maxWidth: 480,
                            margin: '0 auto',
                        }}
                    >
                        🎉 You're subscribed! Keep an eye on your inbox for our
                        next dispatch.
                    </div>
                ) : (
                    <form
                        onSubmit={handleNewsletterSubmit}
                        style={{
                            display: 'flex',
                            gap: 10,
                            maxWidth: 480,
                            margin: '0 auto',
                            flexWrap: 'wrap',
                        }}
                    >
                        <input
                            type="email"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            placeholder="Enter your professional email"
                            required
                            style={{
                                flex: '1 1 260px',
                                padding: '14px 20px',
                                borderRadius: 9999,
                                border: isLight
                                    ? '1px solid #CBD5E1'
                                    : '1px solid rgba(255, 255, 255, 0.15)',
                                background: isLight ? '#F8FAFC' : '#141419',
                                color: isLight ? '#0F172A' : '#FFFFFF',
                                fontSize: 14,
                                outline: 'none',
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '14px 28px',
                                borderRadius: 9999,
                                background: isLight ? '#0F172A' : '#FFFFFF',
                                color: isLight ? '#FFFFFF' : '#000000',
                                fontSize: 14,
                                fontWeight: 700,
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            Subscribe Free
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
