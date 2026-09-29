import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import ContactSection from '@/components/landing/contact-section';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import InnerPageHero from '@/components/landing/inner-page-hero';
import Navbar from '@/components/landing/navbar';
import { ThemeProvider, useTheme } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import { Search } from 'lucide-react';
import BlogFeaturedHero from '@/components/landing/blog/BlogFeaturedHero';
import BlogFilterBar from '@/components/landing/blog/BlogFilterBar';
import BlogCard from '@/components/landing/blog/BlogCard';
import BlogNewsletter from '@/components/landing/blog/BlogNewsletter';

export interface BlogPostItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    category: string;
    featured_image: string | null;
    author_name: string;
    read_time: string | null;
    status: 'published' | 'draft';
    is_featured: boolean;
    published_at: string | null;
    views_count: number;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginatedBlogResponse {
    data: BlogPostItem[];
    current_page: number;
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

interface BlogProps {
    blogs: PaginatedBlogResponse;
    featured: BlogPostItem | null;
    selectedCategory?: string;
    categories: string[];
    seo?: {
        title: string;
        description: string;
    };
}

function BlogContent({
    blogs,
    featured,
    selectedCategory = 'all',
    categories,
}: BlogProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [searchQuery, setSearchQuery] = useState('');

    const displayFeatured =
        featured || (blogs?.data?.length > 0 ? blogs.data[0] : null);
    const gridPosts = blogs?.data || [];

    const handleCategoryChange = (cat: string) => {
        router.visit(
            cat === 'all'
                ? '/blog'
                : `/blog?category=${encodeURIComponent(cat)}`,
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = searchQuery.trim();
        const params = new URLSearchParams();
        if (selectedCategory && selectedCategory !== 'all') {
            params.set('category', selectedCategory);
        }
        if (trimmed) {
            params.set('search', trimmed);
        }
        router.visit(`/blog?${params.toString()}`, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <div
            style={{
                background: isLight ? '#FAFAFA' : 'var(--zy-black)',
                color: isLight ? '#0F172A' : '#FFFFFF',
                minHeight: '100vh',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
        >
            <CustomCursor />
            <TopBar />
            <Navbar />

            <main>
                {/* 1. Page Hero Banner */}
                <InnerPageHero
                    title="Engineering & Product Insights"
                    subtitle="Deep dives into AI systems, enterprise cloud architecture, design systems, and digital engineering transformation."
                />

                {/* 2. Search & Category Filters */}
                <BlogFilterBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onSearchSubmit={handleSearchSubmit}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                    isLight={isLight}
                />

                {/* 3. Featured Article Hero Spotlight */}
                {displayFeatured && (
                    <BlogFeaturedHero
                        post={displayFeatured}
                        isLight={isLight}
                    />
                )}

                {/* 4. Article Grid Section */}
                <section
                    style={{
                        padding: '24px 24px 80px',
                        maxWidth: 1240,
                        margin: '0 auto',
                    }}
                >
                    {gridPosts.length === 0 ? (
                        <div
                            style={{
                                textAlign: 'center',
                                padding: '80px 24px',
                                background: isLight ? '#FFFFFF' : '#0F0F14',
                                borderRadius: 20,
                                border: isLight
                                    ? '1px solid #E2E8F0'
                                    : '1px solid rgba(255, 255, 255, 0.08)',
                                maxWidth: 580,
                                margin: '0 auto',
                            }}
                        >
                            <div
                                style={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: '50%',
                                    background: isLight
                                        ? '#F1F5F9'
                                        : 'rgba(255, 255, 255, 0.06)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                    color: isLight ? '#64748B' : '#71717A',
                                }}
                            >
                                <Search size={28} />
                            </div>
                            <h3
                                style={{
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: isLight ? '#0F172A' : '#FFFFFF',
                                    marginBottom: 10,
                                }}
                            >
                                No articles found
                            </h3>
                            <p
                                style={{
                                    fontSize: 14,
                                    color: isLight ? '#64748B' : '#A1A1AA',
                                    marginBottom: 24,
                                    lineHeight: 1.6,
                                }}
                            >
                                We couldn't find any articles matching your
                                search criteria or category filter.
                            </p>
                            <button
                                onClick={() => router.visit('/blog')}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: 9999,
                                    background: isLight ? '#0F172A' : '#FFFFFF',
                                    color: isLight ? '#FFFFFF' : '#000000',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Reset All Filters
                            </button>
                        </div>
                    ) : (
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fill, minmax(340px, 1fr))',
                                gap: 32,
                            }}
                        >
                            {gridPosts.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    post={post}
                                    isLight={isLight}
                                />
                            ))}
                        </div>
                    )}

                    {/* Pagination Bar */}
                    {blogs?.links && blogs.links.length > 3 && (
                        <div
                            style={{
                                marginTop: 60,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 8,
                                flexWrap: 'wrap',
                            }}
                        >
                            {blogs.links.map((link, idx) => {
                                if (!link.url && !link.active) {
                                    return (
                                        <span
                                            key={idx}
                                            style={{
                                                padding: '8px 14px',
                                                borderRadius: 8,
                                                fontSize: 13,
                                                color: isLight
                                                    ? '#94A3B8'
                                                    : '#52525B',
                                                cursor: 'not-allowed',
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    );
                                }

                                return (
                                    <Link
                                        key={idx}
                                        href={link.url || '#'}
                                        preserveScroll
                                        preserveState
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: 8,
                                            fontSize: 13,
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            background: link.active
                                                ? isLight
                                                    ? '#0F172A'
                                                    : '#FFFFFF'
                                                : isLight
                                                  ? '#FFFFFF'
                                                  : '#18181B',
                                            color: link.active
                                                ? isLight
                                                    ? '#FFFFFF'
                                                    : '#000000'
                                                : isLight
                                                  ? '#334155'
                                                  : '#E4E4E7',
                                            border: link.active
                                                ? 'none'
                                                : isLight
                                                  ? '1px solid #E2E8F0'
                                                  : '1px solid rgba(255, 255, 255, 0.1)',
                                            boxShadow: link.active
                                                ? isLight
                                                    ? '0 2px 8px rgba(0, 0, 0, 0.15)'
                                                    : '0 2px 10px rgba(0, 0, 0, 0.5)'
                                                : 'none',
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    )}
                </section>

                {/* 5. Newsletter Subscription */}
                <BlogNewsletter isLight={isLight} />

                {/* 6. Footer CTA & Contact */}
                <FooterCTA />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}

export default function Blog(props: BlogProps) {
    return (
        <ThemeProvider>
            <Head>
                <title>
                    {props.seo?.title ||
                        'Engineering Insights & Tech Blog | Zytrixon Tech'}
                </title>
                <meta
                    name="description"
                    content={
                        props.seo?.description ||
                        'Read the latest insights, architecture deep-dives, and tutorials from the engineering team at Zytrixon Tech.'
                    }
                />
            </Head>
            <BlogContent {...props} />
        </ThemeProvider>
    );
}

Blog.layout = null;
