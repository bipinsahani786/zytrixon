import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

export interface BlogPostItem {
    slug: string;
    title: string;
    category?: string;
    date?: string;
    readTime?: string;
    excerpt?: string;
    image?: string;
}

export interface BlogCardProps {
    post: BlogPostItem;
    featured?: boolean;
    className?: string;
}

/**
 * BlogCard: Reusable blog article card with featured and standard grid variants.
 * Handles category chips, read-time meta, and animated arrow links.
 */
export default function BlogCard({
    post,
    featured = false,
    className = '',
}: BlogCardProps) {
    if (featured) {
        return (
            <article
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 bg-card text-card-foreground border border-border rounded-3xl p-6 sm:p-10 shadow-lg hover:border-primary/40 hover:shadow-[0_0_35px_var(--accent-cyan-dim)] transition-all duration-300 ${className}`}
            >
                {/* Visual / Image */}
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[260px] rounded-2xl overflow-hidden bg-muted/40 border border-border/50">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary flex items-center justify-center">
                            <span className="font-heading font-extrabold text-6xl sm:text-7xl text-foreground/10 select-none">
                                ZYTRIXON
                            </span>
                        </div>
                    )}
                    <span className="absolute top-4 left-4 bg-background/85 backdrop-blur-md text-primary font-heading text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-border shadow-sm">
                        Featured Insight
                    </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-4">
                        {post.category && (
                            <span className="text-primary font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                        )}
                        {post.category && post.date && <span>•</span>}
                        {post.date && <span>{post.date}</span>}
                        {post.readTime && <span>• {post.readTime}</span>}
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug mb-4">
                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                            {post.title}
                        </Link>
                    </h3>

                    {post.excerpt && (
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                            {post.excerpt}
                        </p>
                    )}

                    <div className="mt-auto pt-2">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 font-heading text-sm font-bold text-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
                        >
                            <span>Read Full Article</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article
            className={`group flex flex-col bg-card text-card-foreground border border-border rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 ${className}`}
        >
            {/* Post Image */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-muted/40 border-b border-border/50">
                {post.image ? (
                    <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 via-card to-secondary flex items-center justify-center">
                        <span className="font-heading font-bold text-3xl text-foreground/15">
                            ZYTRIXON
                        </span>
                    </div>
                )}

                {post.category && (
                    <span className="absolute top-3.5 left-3.5 bg-background/85 backdrop-blur-md text-primary font-heading text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-border shadow-xs">
                        {post.category}
                    </span>
                )}
            </div>

            {/* Post Body */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    {post.date && <span>{post.date}</span>}
                    {post.readTime && <span>• {post.readTime}</span>}
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                {post.excerpt && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5">
                        {post.excerpt}
                    </p>
                )}

                <div className="mt-auto pt-2 flex items-center justify-between border-t border-border/40">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-150"
                    >
                        <span>Read Article</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
