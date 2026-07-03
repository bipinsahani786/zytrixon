import React from 'react';
import GradientCard from '@/components/ui/GradientCard';
import { Link } from '@inertiajs/react';

export default function BlogPreviewSection({ service }: any) {
    const isSEO = service?.slug === 'seo-digital-marketing';

    const dummyBlogs = [
        {
            title: isSEO ? 'Top 10 SEO Strategies for 2026' : `The Future of ${service?.title || 'Tech'}`,
            excerpt: `Discover the latest trends and architectural patterns shaping the future of ${service?.title || 'the industry'}.`,
            date: 'July 2, 2026',
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: `Why Enterprise ${service?.title || 'Solutions'} are Critical`,
            excerpt: 'Scaling your business requires robust infrastructure and a dedicated technical approach.',
            date: 'June 28, 2026',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Maximizing ROI with Zytrixon Tech',
            excerpt: 'Learn how our clients achieve 10x ROI within the first year of partnership.',
            date: 'June 15, 2026',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <section className="zy-section" style={{ background: 'var(--zy-black)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span className="zy-section-label">LATEST INSIGHTS</span>
                    <h2 className="zy-section-title">Industry News & Blogs</h2>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
                    {dummyBlogs.map((blog, i) => (
                        <GradientCard key={i} style={{ textAlign: 'left', height: '100%' }}>
                            <div style={{ height: 200, overflow: 'hidden' }}>
                                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                            </div>
                            <div style={{ padding: '24px 32px 32px' }}>
                                <div style={{ color: 'var(--zy-blue)', fontSize: 13, fontWeight: 700, marginBottom: 12 }}>{blog.date}</div>
                                <h3 style={{ fontSize: 20, color: 'var(--zy-white)', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 12, lineHeight: 1.3 }}>
                                    {blog.title}
                                </h3>
                                <p style={{ color: 'var(--zy-gray-text)', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                                    {blog.excerpt}
                                </p>
                                <Link href="#" style={{ color: 'var(--zy-white)', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </Link>
                            </div>
                        </GradientCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
