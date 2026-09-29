import React from 'react';
import { Link } from '@inertiajs/react';
import { Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPostItem } from '@/pages/Blog';
import { formatBlogDate } from './BlogCard';

interface BlogFeaturedHeroProps {
    post: BlogPostItem;
    isLight: boolean;
}

export default function BlogFeaturedHero({
    post,
    isLight,
}: BlogFeaturedHeroProps) {
    return (
        <section
            style={{
                padding: '16px 24px 48px',
                maxWidth: 1240,
                margin: '0 auto',
            }}
        >
            <Link
                href={`/blog/${post.slug}`}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        background: isLight ? '#FFFFFF' : '#0F0F14',
                        borderRadius: 24,
                        overflow: 'hidden',
                        border: isLight
                            ? '1px solid #E2E8F0'
                            : '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: isLight
                            ? '0 12px 36px -12px rgba(0, 0, 0, 0.07)'
                            : '0 16px 40px -12px rgba(0, 0, 0, 0.6)',
                        transition:
                            'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = isLight
                            ? '#CBD5E1'
                            : 'rgba(255, 255, 255, 0.22)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = isLight
                            ? '#E2E8F0'
                            : 'rgba(255, 255, 255, 0.08)';
                    }}
                >
                    {/* Media / Banner Thumbnail */}
                    <div
                        style={{
                            minHeight: 340,
                            position: 'relative',
                            background: post.featured_image
                                ? `url(${post.featured_image}) center / cover no-repeat`
                                : isLight
                                  ? 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)'
                                  : 'linear-gradient(135deg, #09090b 0%, #18181b 50%, #27272a 100%)',
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 60%)',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 24,
                                left: 24,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                padding: '6px 14px',
                                borderRadius: 9999,
                                background: 'rgba(0, 0, 0, 0.65)',
                                backdropFilter: 'blur(12px)',
                                color: '#60A5FA',
                                fontSize: 12,
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <Sparkles size={13} />
                            Featured Spotlight
                        </div>
                    </div>

                    {/* Details Column */}
                    <div
                        style={{
                            padding: '44px 40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                marginBottom: 16,
                                flexWrap: 'wrap',
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
                                {post.category}
                            </span>

                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 5,
                                    color: isLight ? '#64748B' : '#71717A',
                                    fontSize: 13,
                                }}
                            >
                                <Calendar size={13} />
                                {formatBlogDate(
                                    post.published_at || post.created_at,
                                )}
                            </span>

                            {post.read_time && (
                                <span
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 5,
                                        color: isLight ? '#64748B' : '#71717A',
                                        fontSize: 13,
                                    }}
                                >
                                    <Clock size={13} />
                                    {post.read_time}
                                </span>
                            )}
                        </div>

                        <h2
                            style={{
                                fontSize: 'clamp(24px, 3.2vw, 36px)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 800,
                                color: isLight ? '#0F172A' : '#FFFFFF',
                                lineHeight: 1.25,
                                marginBottom: 16,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {post.title}
                        </h2>

                        <p
                            style={{
                                fontSize: 15,
                                lineHeight: 1.65,
                                color: isLight ? '#475569' : '#A1A1AA',
                                marginBottom: 28,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}
                        >
                            {post.excerpt ||
                                post.content
                                    .replace(/<[^>]*>/g, '')
                                    .slice(0, 180) + '...'}
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 'auto',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                }}
                            >
                                <div
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: '50%',
                                        background: isLight
                                            ? 'linear-gradient(135deg, #4F46E5, #06B6D4)'
                                            : 'linear-gradient(135deg, #3B82F6, #10B981)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#FFFFFF',
                                        fontSize: 12,
                                        fontWeight: 700,
                                    }}
                                >
                                    {(post.author_name || 'Z')[0].toUpperCase()}
                                </div>
                                <span
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: isLight ? '#334155' : '#D4D4D8',
                                    }}
                                >
                                    {post.author_name}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: isLight ? '#4F46E5' : '#60A5FA',
                                }}
                            >
                                Read Article
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}
