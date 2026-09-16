import BlogCard from '@/components/common/BlogCard';
import SectionHeader from '@/components/common/SectionHeader';

export default function BlogPreviewSection({ service }: any) {
    const isSEO =
        service?.slug === 'digital-marketing' ||
        service?.slug === 'seo-digital-marketing';

    const dummyBlogs = [
        {
            slug: isSEO
                ? 'top-10-seo-strategies-for-2026'
                : 'the-future-of-enterprise-architecture',
            title: isSEO
                ? 'Top 10 SEO Strategies for 2026'
                : `The Future of ${service?.title || 'Enterprise Technology'}`,
            excerpt: `Discover the latest architectural patterns, AI capabilities, and scalable practices shaping ${service?.title || 'modern digital engineering'}.`,
            date: 'July 2, 2026',
            category: isSEO ? 'Digital Marketing' : 'Engineering',
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80',
        },
        {
            slug: 'mastering-gsap-for-modern-react-applications',
            title: `Why Enterprise ${service?.title || 'Solutions'} are Critical`,
            excerpt:
                'Scaling your business requires resilient distributed architecture, enterprise security, and high performance.',
            date: 'June 28, 2026',
            category: 'Architecture',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        },
        {
            slug: 'how-to-implement-zero-trust-security-in-saas',
            title: 'Maximizing ROI with Zytrixon Tech',
            excerpt:
                'Learn how our clients achieve 10x ROI and 99.99% reliability within the first year of production partnership.',
            date: 'June 15, 2026',
            category: 'Business',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <section className="zy-section border-t border-border/50 bg-background px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    badge="LATEST INSIGHTS"
                    title="Industry News & Blogs"
                    subtitle="Expert perspectives, architectural guides, and digital engineering updates from our tech leads."
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {dummyBlogs.map((blog, i) => (
                        <BlogCard key={i} post={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
