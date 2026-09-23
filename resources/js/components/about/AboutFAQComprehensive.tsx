import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

interface FAQItem {
    question: string;
    category: string;
    answer: string;
}

export default function AboutFAQComprehensive() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question:
                'Who owns the codebase, Git history, and database architecture?',
            category: 'LEGAL & IP RIGHTS',
            answer: 'You own 100% of everything unconditionally. From the first sprint, code is authored directly in your organization’s private GitHub or GitLab repository. All copyright, design tokens, CI/CD pipelines, and database schemas are transferred to your corporate entity upon milestone delivery. We never hold intellectual property hostage or install proprietary runtime locks.',
        },
        {
            question:
                'How do you handle zero-downtime migrations for fragile legacy databases with millions of rows?',
            category: 'DATABASE MIGRATION',
            answer: 'We employ a dual-write and asynchronous shadow replication strategy. We establish Change Data Capture (CDC) workers that mirror production mutations in real-time into the optimized target schema without locking original tables. After automated checksum reconciliation confirms 100.00% cryptographic parity, we shift DNS traffic instantly with an automated rollback escape hatch.',
        },
        {
            question:
                'Can your architectures withstand viral flash sales with 50,000+ simultaneous checkouts?',
            category: 'CONCURRENCY & SCALE',
            answer: 'Yes. We circumvent naive relational row-locking—the primary culprit of database deadlocks during viral promotions. By leveraging Redis atomic memory buffers, Lua reservation scripts, and asynchronous queue workers (RabbitMQ/Redis Stream), your checkout pipeline completes in sub-100ms regardless of server volume surges.',
        },
        {
            question:
                'What does post-launch knowledge transfer look like for our internal developers?',
            category: 'TEAM HANDOFF',
            answer: 'Clean code is code that any senior developer can read like an open book. Every repository is delivered with comprehensive OpenAPI 3.0 specs, strict TypeScript type definitions, >85% automated test coverage, and pre-recorded architectural video walkthroughs. We also conduct dedicated pair-programming sessions with your engineers before exiting.',
        },
        {
            question:
                'How do you ensure compliance for sensitive healthcare (HIPAA) or financial (PII) data?',
            category: 'SECURITY & COMPLIANCE',
            answer: 'We design zero-trust data segregation from day one. Sensitive patient records or financial ledgers receive field-level AES-256 GCM encryption at rest, strict TLS 1.3 transit pinning, and immutable audit logs that cannot be altered even by database administrators. Systems comply with HIPAA, HL7, and Indian DPDP guidelines.',
        },
        {
            question:
                'Why choose Zytrixon over a traditional multi-thousand-person IT consultancy?',
            category: 'VALUE PROPOSITION',
            answer: 'Giant consultancies bill you for bloated management layers while assigning your codebase to rotating junior subcontractors. At Zytrixon, you work directly with principal architects and seasoned product engineers who write code daily. We ship tested, high-converting production software in 6 to 12 weeks what legacy agencies spend a year theorizing.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq-comprehensive"
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '64px', maxWidth: '820px' }}>
                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, "Space Grotesk", sans-serif)',
                            fontSize: 'clamp(30px, 4vw, 52px)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: '-0.03em',
                            color: 'var(--zy-text-primary)',
                            marginBottom: '20px',
                        }}
                    >
                        Clear answers to the hard technical questions CTOs ask
                        us.
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        Enterprise engineering decisions carry immense strategic
                        risk. Here are candid answers regarding our intellectual
                        property terms, legacy migration procedures, and
                        high-concurrency protocols.
                    </p>
                </div>

                {/* FAQ List */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={faq.question}
                                style={{
                                    borderRadius: '14px',
                                    border: isOpen
                                        ? isLight
                                            ? '1px solid #111111'
                                            : '1px solid #ffffff'
                                        : '1px solid var(--zy-border-subtle)',
                                    background: isLight
                                        ? '#ffffff'
                                        : 'var(--zy-surface-1)',
                                    overflow: 'hidden',
                                    transition:
                                        'border-color 0.2s ease, background 0.2s ease',
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        toggleFAQ(index);
                                    }}
                                    style={{
                                        width: '100%',
                                        padding: '24px 28px',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        textAlign: 'left',
                                        gap: '20px',
                                    }}
                                >
                                    <div>
                                        <span
                                            style={{
                                                fontSize: '10px',
                                                fontFamily: 'monospace',
                                                fontWeight: 700,
                                                letterSpacing: '0.12em',
                                                color: 'var(--zy-text-muted)',
                                                display: 'block',
                                                marginBottom: '6px',
                                            }}
                                        >
                                            {faq.category}
                                        </span>
                                        <div
                                            style={{
                                                fontFamily:
                                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                                fontSize: '18px',
                                                fontWeight: 700,
                                                color: 'var(--zy-text-primary)',
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {faq.question}
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            border: '1px solid var(--zy-border-subtle)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            fontFamily: 'monospace',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            color: 'var(--zy-text-primary)',
                                            background: isLight
                                                ? '#f4f4f5'
                                                : 'var(--zy-surface-2)',
                                        }}
                                    >
                                        {isOpen ? '−' : '+'}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div
                                        style={{
                                            padding: '0 28px 24px 28px',
                                            borderTop:
                                                '1px solid var(--zy-border-subtle)',
                                            paddingTop: '20px',
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: '15px',
                                                lineHeight: 1.75,
                                                color: 'var(--zy-text-secondary)',
                                                margin: 0,
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
