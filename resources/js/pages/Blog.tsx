import { useState } from 'react';
import BlogCard from '@/components/common/BlogCard';
import FilterTabs from '@/components/common/FilterTabs';
import NewsletterBox from '@/components/common/NewsletterBox';
import InnerPageHero from '@/components/landing/inner-page-hero';
import PublicLayout from '@/components/layouts/PublicLayout';

const FEATURED_POST = {
    slug: 'the-future-of-enterprise-architecture',
    title: 'The Future of Enterprise Architecture: Serverless Meets Edge Computing',
    category: 'Engineering',
    date: 'May 24, 2026',
    readTime: '8 min read',
    excerpt:
        'Discover how modern enterprises are leveraging edge computing and serverless architectures to reduce latency, cut cloud costs, and scale globally without DevOps friction.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
};

const CATEGORIES = [
    'All Articles',
    'Engineering',
    'AI & Automation',
    'Design UI/UX',
    'Cybersecurity',
];

const BLOG_POSTS = [
    {
        slug: 'mastering-gsap-for-modern-react-applications',
        title: 'Mastering GSAP for Modern React Applications',
        category: 'Engineering',
        date: 'May 18, 2026',
        readTime: '6 min read',
        excerpt:
            'A comprehensive guide to buttery-smooth scrolling, timelines, and micro-interactions in modern React apps.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    },
    {
        slug: 'how-to-implement-zero-trust-security-in-saas',
        title: 'How to Implement Zero-Trust Security in SaaS',
        category: 'Cybersecurity',
        date: 'May 12, 2026',
        readTime: '10 min read',
        excerpt:
            'Why perimeter security is dead and how modern cloud architectures enforce cryptographic least-privilege access.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
        slug: 'designing-for-the-dark-mode-best-practices',
        title: 'Designing for Dark Mode: Contrast, Gradients & Visual Hierarchy',
        category: 'Design UI/UX',
        date: 'May 05, 2026',
        readTime: '5 min read',
        excerpt:
            'Best practices for rich, high-contrast dark mode interfaces that avoid pure black and reduce eye fatigue.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    },
    {
        slug: 'why-next-js-15-is-a-game-changer-for-seo',
        title: 'Why Server-Side Rendering & Inertia are Crucial for Technical SEO',
        category: 'Engineering',
        date: 'Apr 28, 2026',
        readTime: '7 min read',
        excerpt:
            'How full HTML pre-rendering ensures instantaneous crawler indexing and superior Core Web Vitals rankings.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
        slug: 'automating-customer-support-with-custom-llms',
        title: 'Automating Customer Support with Autonomous LLM Agents',
        category: 'AI & Automation',
        date: 'Apr 21, 2026',
        readTime: '9 min read',
        excerpt:
            'Deploying RAG pipelines and autonomous tool-using agents for 99% first-contact resolution in enterprise SaaS.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    },
    {
        slug: 'migrating-from-monolith-to-microservices',
        title: 'Migrating from Monolith to Event-Driven Microservices',
        category: 'Engineering',
        date: 'Apr 15, 2026',
        readTime: '11 min read',
        excerpt:
            'Step-by-step architectural blueprint to break down monolithic bottlenecks without downtime or data corruption.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('All Articles');

    const filteredPosts =
        activeCategory === 'All Articles'
            ? BLOG_POSTS
            : BLOG_POSTS.filter((p) => p.category === activeCategory);

    return (
        <PublicLayout
            seo={{
                title: 'Engineering Insights & Tech Blog | Zytrixon Tech',
                description:
                    'Explore deep dives into AI, cloud architecture, modern design, and enterprise digital transformation from Zytrixon Tech.',
            }}
            showContactSection={true}
        >
            <InnerPageHero
                title="Engineering Insights"
                subtitle="Deep dives into AI, cloud architecture, modern design, and enterprise digital transformation."
            />

            {/* Featured Article */}
            <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
                <BlogCard post={FEATURED_POST} featured={true} />
            </section>

            {/* Interactive Category Filter Pills */}
            <section className="max-w-7xl mx-auto px-6 sm:px-10 py-4">
                <FilterTabs
                    tabs={CATEGORIES}
                    activeTab={activeCategory}
                    onTabChange={setActiveCategory}
                />
            </section>

            {/* Blog Post Grid */}
            <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </section>

            {/* Reusable Newsletter Callout */}
            <section className="border-t border-border/50 py-16 sm:py-24 px-6 sm:px-10 bg-card/20">
                <NewsletterBox />
            </section>
        </PublicLayout>
    );
}
