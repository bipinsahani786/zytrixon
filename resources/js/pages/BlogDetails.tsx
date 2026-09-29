import React from 'react';
import { Head, Link } from '@inertiajs/react';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import Navbar from '@/components/landing/navbar';
import { ThemeProvider, useTheme } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import type { BlogPostItem } from '@/pages/Blog';
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    Eye,
    Sparkles,
    Tag,
} from 'lucide-react';
import { formatBlogDate } from '@/components/landing/blog/BlogCard';
import BlogShareBar from '@/components/landing/blog/BlogShareBar';
import BlogAuthorBox from '@/components/landing/blog/BlogAuthorBox';
import BlogProseStyles from '@/components/landing/blog/BlogProseStyles';
import BlogCard from '@/components/landing/blog/BlogCard';

interface BlogDetailsProps {
    blog: BlogPostItem;
    relatedBlogs: BlogPostItem[];
    seo?: {
        title: string;
        description: string;
    };
}

function BlogDetailsContent({ blog, relatedBlogs = [] }: BlogDetailsProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

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

            <main style={{ paddingTop: 100 }}>
                {/* 1. Breadcrumbs Navigation */}
                <div
                    style={{
                        maxWidth: 960,
                        margin: '0 auto',
                        padding: '24px 24px 0',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: 16,
                            marginBottom: 28,
                        }}
                    >
                        <Link
                            href="/blog"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                color: isLight ? '#475569' : '#A1A1AA',
                                textDecoration: 'none',
                                fontSize: 14,
                                fontWeight: 600,
                                padding: '8px 14px',
                                borderRadius: 8,
                                background: isLight
                                    ? '#F1F5F9'
                                    : 'rgba(255, 255, 255, 0.05)',
                                border: isLight
                                    ? '1px solid #E2E8F0'
                                    : '1px solid rgba(255, 255, 255, 0.08)',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <ArrowLeft size={16} />
                            Back to Articles
                        </Link>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                fontSize: 13,
                                color: isLight ? '#64748B' : '#71717A',
                            }}
                        >
                            <Link
                                href="/"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Home
                            </Link>
                            <span>/</span>
                            <Link
                                href="/blog"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Blog
                            </Link>
                            <span>/</span>
                            <span
                                style={{
                                    color: isLight ? '#4F46E5' : '#60A5FA',
                                    fontWeight: 600,
                                }}
                            >
                                {blog.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* 2. Article Header */}
                <header
                    style={{
                        padding: '16px 24px 32px',
                        maxWidth: 960,
                        margin: '0 auto',
                    }}
                >
                    {/* Category + Date + Read Time Chips */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            flexWrap: 'wrap',
                            marginBottom: 20,
                        }}
                    >
                        <span
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                padding: '4px 12px',
                                borderRadius: 6,
                                background: isLight
                                    ? '#EEF2FF'
                                    : 'rgba(59, 130, 246, 0.12)',
                                color: isLight ? '#4F46E5' : '#60A5FA',
                                border: isLight
                                    ? '1px solid rgba(79, 70, 229, 0.15)'
                                    : '1px solid rgba(59, 130, 246, 0.25)',
                            }}
                        >
                            {blog.category}
                        </span>

                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                fontSize: 14,
                                color: isLight ? '#64748B' : '#A1A1AA',
                            }}
                        >
                            <Calendar size={14} />
                            {formatBlogDate(
                                blog.published_at || blog.created_at,
                            )}
                        </span>

                        {blog.read_time && (
                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    fontSize: 14,
                                    color: isLight ? '#64748B' : '#A1A1AA',
                                }}
                            >
                                <Clock size={14} />
                                {blog.read_time}
                            </span>
                        )}

                        {blog.views_count > 0 && (
                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    fontSize: 14,
                                    color: isLight ? '#64748B' : '#A1A1AA',
                                }}
                            >
                                <Eye size={14} />
                                {blog.views_count.toLocaleString()} views
                            </span>
                        )}
                    </div>

                    {/* Article Title */}
                    <h1
                        style={{
                            fontSize: 'clamp(32px, 5vw, 54px)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 800,
                            color: isLight ? '#0F172A' : '#FFFFFF',
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            marginBottom: 24,
                        }}
                    >
                        {blog.title}
                    </h1>

                    {/* Excerpt */}
                    {blog.excerpt && (
                        <p
                            style={{
                                fontSize: 'clamp(16px, 2vw, 20px)',
                                lineHeight: 1.6,
                                color: isLight ? '#475569' : '#A1A1AA',
                                marginBottom: 32,
                            }}
                        >
                            {blog.excerpt}
                        </p>
                    )}

                    {/* Author & Share Bar */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: 20,
                            paddingTop: 20,
                            paddingBottom: 24,
                            borderTop: isLight
                                ? '1px solid #E2E8F0'
                                : '1px solid rgba(255, 255, 255, 0.08)',
                            borderBottom: isLight
                                ? '1px solid #E2E8F0'
                                : '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                            }}
                        >
                            <div
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: '50%',
                                    background: isLight
                                        ? 'linear-gradient(135deg, #4F46E5, #06B6D4)'
                                        : 'linear-gradient(135deg, #3B82F6, #10B981)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    fontSize: 16,
                                    fontWeight: 700,
                                }}
                            >
                                {(blog.author_name || 'Z')[0].toUpperCase()}
                            </div>
                            <div>
                                <div
                                    style={{
                                        color: isLight ? '#0F172A' : '#FFFFFF',
                                        fontWeight: 700,
                                        fontSize: 15,
                                    }}
                                >
                                    {blog.author_name}
                                </div>
                                <div
                                    style={{
                                        color: isLight ? '#64748B' : '#71717A',
                                        fontSize: 13,
                                    }}
                                >
                                    Engineering & Architecture Team
                                </div>
                            </div>
                        </div>

                        {/* Social Share Bar */}
                        <BlogShareBar title={blog.title} isLight={isLight} />
                    </div>
                </header>

                {/* 3. Cover Media Banner */}
                {blog.featured_image ? (
                    <div
                        style={{
                            maxWidth: 1040,
                            margin: '0 auto 48px',
                            padding: '0 24px',
                        }}
                    >
                        <div
                            style={{
                                width: '100%',
                                maxHeight: 520,
                                borderRadius: 20,
                                overflow: 'hidden',
                                border: isLight
                                    ? '1px solid #E2E8F0'
                                    : '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: isLight
                                    ? '0 16px 40px -16px rgba(0, 0, 0, 0.08)'
                                    : '0 20px 48px -16px rgba(0, 0, 0, 0.6)',
                            }}
                        >
                            <img
                                src={blog.featured_image}
                                alt={blog.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: 520,
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        style={{
                            maxWidth: 1040,
                            margin: '0 auto 48px',
                            padding: '0 24px',
                        }}
                    >
                        <div
                            style={{
                                height: 240,
                                borderRadius: 20,
                                background: isLight
                                    ? 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)'
                                    : 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
                                border: isLight
                                    ? '1px solid #E2E8F0'
                                    : '1px solid rgba(255, 255, 255, 0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: isLight ? '#4F46E5' : '#60A5FA',
                            }}
                        >
                            <Sparkles size={40} style={{ opacity: 0.6 }} />
                        </div>
                    </div>
                )}

                {/* 4. Article Content Prose Body */}
                <article
                    style={{
                        maxWidth: 820,
                        margin: '0 auto',
                        padding: '0 24px 80px',
                    }}
                >
                    <div
                        className="zytrixon-article-content"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Article Tags Footer */}
                    <div
                        style={{
                            marginTop: 64,
                            paddingTop: 32,
                            borderTop: isLight
                                ? '1px solid #E2E8F0'
                                : '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: 16,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                flexWrap: 'wrap',
                            }}
                        >
                            <Tag
                                size={16}
                                color={isLight ? '#64748B' : '#71717A'}
                            />
                            <span
                                style={{
                                    fontSize: 13,
                                    padding: '5px 12px',
                                    borderRadius: 6,
                                    background: isLight
                                        ? '#F1F5F9'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    color: isLight ? '#475569' : '#A1A1AA',
                                    border: isLight
                                        ? '1px solid #E2E8F0'
                                        : '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                #
                                {blog.category
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')}
                            </span>
                            <span
                                style={{
                                    fontSize: 13,
                                    padding: '5px 12px',
                                    borderRadius: 6,
                                    background: isLight
                                        ? '#F1F5F9'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    color: isLight ? '#475569' : '#A1A1AA',
                                    border: isLight
                                        ? '1px solid #E2E8F0'
                                        : '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                #engineering
                            </span>
                            <span
                                style={{
                                    fontSize: 13,
                                    padding: '5px 12px',
                                    borderRadius: 6,
                                    background: isLight
                                        ? '#F1F5F9'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    color: isLight ? '#475569' : '#A1A1AA',
                                    border: isLight
                                        ? '1px solid #E2E8F0'
                                        : '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                #zytrixon
                            </span>
                        </div>

                        <BlogShareBar title={blog.title} isLight={isLight} />
                    </div>

                    {/* Author Box */}
                    <BlogAuthorBox
                        authorName={blog.author_name}
                        isLight={isLight}
                    />
                </article>

                {/* 5. Related Articles Section */}
                {relatedBlogs.length > 0 && (
                    <section
                        style={{
                            padding: '80px 24px',
                            background: isLight ? '#FFFFFF' : '#0B0B0F',
                            borderTop: isLight
                                ? '1px solid #E2E8F0'
                                : '1px solid rgba(255, 255, 255, 0.06)',
                        }}
                    >
                        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 40,
                                    flexWrap: 'wrap',
                                    gap: 16,
                                }}
                            >
                                <div>
                                    <h2
                                        style={{
                                            fontSize:
                                                'clamp(24px, 3.5vw, 36px)',
                                            fontFamily: 'var(--font-heading)',
                                            fontWeight: 800,
                                            color: isLight
                                                ? '#0F172A'
                                                : '#FFFFFF',
                                            letterSpacing: '-0.02em',
                                            marginBottom: 6,
                                        }}
                                    >
                                        Related Articles in {blog.category}
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: isLight
                                                ? '#64748B'
                                                : '#A1A1AA',
                                            margin: 0,
                                        }}
                                    >
                                        Continue exploring technical insights
                                        from our engineering knowledge base.
                                    </p>
                                </div>

                                <Link
                                    href="/blog"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        color: isLight ? '#4F46E5' : '#60A5FA',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                    }}
                                >
                                    View All Articles
                                    <ArrowRight size={15} />
                                </Link>
                            </div>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(auto-fill, minmax(320px, 1fr))',
                                    gap: 32,
                                }}
                            >
                                {relatedBlogs.map((rel) => (
                                    <BlogCard
                                        key={rel.id}
                                        post={rel}
                                        isLight={isLight}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 6. Footer Call-to-Action */}
                <FooterCTA />
            </main>

            <Footer />

            {/* Prose HTML Content Styling for Light & Dark Themes */}
            <BlogProseStyles isLight={isLight} />
        </div>
    );
}

export default function BlogDetails(props: BlogDetailsProps) {
    return (
        <ThemeProvider>
            <Head>
                <title>
                    {props.seo?.title ||
                        `${props.blog.title} | Zytrixon Tech Blog`}
                </title>
                <meta
                    name="description"
                    content={
                        props.seo?.description ||
                        props.blog.excerpt ||
                        'Read this in-depth engineering article on the Zytrixon Tech Blog.'
                    }
                />
            </Head>
            <BlogDetailsContent {...props} />
        </ThemeProvider>
    );
}

BlogDetails.layout = null;
