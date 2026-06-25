import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

export default function FaqAccordion({ service, location }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: `What makes your ${service?.title} services unique?`, a: `We combine deep engineering expertise with a business-first approach. We don't just write code; we build scalable solutions that drive real ROI.` },
        { q: `Do you provide support after launch?`, a: `Absolutely. We offer 24/7 monitoring, maintenance, and support packages to ensure your application runs flawlessly at all times.` },
        { q: `How do you ensure security?`, a: `Security is built-in from day one. We use enterprise-grade encryption, conduct regular vulnerability assessments, and follow strict DevSecOps practices.` },
        { q: `What is the typical timeline?`, a: `It depends on the scope, but our agile process ensures you see working prototypes within weeks, not months. We deliver fast without compromising quality.` },
        { q: `Can you integrate with our existing systems?`, a: `Yes. We specialize in complex system integrations, API development, and migrating legacy systems to modern architectures seamlessly.` }
    ];

    // FAQ Schema for SEO
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.a
            }
        }))
    };

    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)' }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h2 className="zy-section-title">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ 
                            background: 'var(--zy-gray-card)', 
                            borderRadius: 12, 
                            border: '1px solid rgba(255,255,255,0.05)',
                            overflow: 'hidden'
                        }}>
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                style={{ 
                                    width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    background: 'transparent', border: 'none', color: 'var(--zy-white)', fontSize: 18, fontWeight: 700,
                                    cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-heading)'
                                }}
                            >
                                {faq.q}
                                <svg 
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--zy-blue)" strokeWidth="2"
                                    style={{ transform: openIndex === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </button>
                            <div style={{ 
                                padding: openIndex === i ? '0 24px 24px' : '0 24px 0', 
                                maxHeight: openIndex === i ? 200 : 0, 
                                opacity: openIndex === i ? 1 : 0,
                                transition: 'all 0.3s ease',
                                color: 'var(--zy-gray-text)',
                                lineHeight: 1.6
                            }}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
