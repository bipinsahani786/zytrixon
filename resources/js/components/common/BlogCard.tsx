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
                className={`group grid grid-cols-1 gap-8 rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_35px_var(--accent-cyan-dim)] sm:gap-12 sm:p-10 lg:grid-cols-2 ${className}`}
            >
                {/* Visual / Image */}
                <div className="relative h-64 min-h-[260px] overflow-hidden rounded-2xl border border-border/50 bg-muted/40 sm:h-80 lg:h-full">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary">
                            <span className="font-heading text-6xl font-extrabold text-foreground/10 select-none sm:text-7xl">
                                ZYTRIXON
                            </span>
                        </div>
                    )}
                    <span className="absolute top-4 left-4 rounded-full border border-border bg-background/85 px-3.5 py-1.5 font-heading text-xs font-bold tracking-wider text-primary uppercase shadow-sm backdrop-blur-md">
                        Featured Insight
                    </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                    <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground sm:text-sm">
                        {post.category && (
                            <span className="font-bold tracking-wider text-primary uppercase">
                                {post.category}
                            </span>
                        )}
                        {post.category && post.date && <span>•</span>}
                        {post.date && <span>{post.date}</span>}
                        {post.readTime && <span>• {post.readTime}</span>}
                    </div>

                    <h3 className="mb-4 font-heading text-2xl leading-snug font-extrabold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-3xl md:text-4xl">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="hover:underline"
                        >
                            {post.title}
                        </Link>
                    </h3>

                    {post.excerpt && (
                        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {post.excerpt}
                        </p>
                    )}

                    <div className="mt-auto pt-2">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 font-heading text-sm font-bold text-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary"
                        >
                            <span>Read Full Article</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article
            className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl ${className}`}
        >
            {/* Post Image */}
            <div className="relative h-48 w-full overflow-hidden border-b border-border/50 bg-muted/40 sm:h-52">
                {post.image ? (
                    <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-card to-secondary">
                        <span className="font-heading text-3xl font-bold text-foreground/15">
                            ZYTRIXON
                        </span>
                    </div>
                )}

                {post.category && (
                    <span className="absolute top-3.5 left-3.5 rounded-full border border-border bg-background/85 px-2.5 py-1 font-heading text-[11px] font-bold tracking-wider text-primary uppercase shadow-xs backdrop-blur-md">
                        {post.category}
                    </span>
                )}
            </div>

            {/* Post Body */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    {post.date && <span>{post.date}</span>}
                    {post.readTime && <span>• {post.readTime}</span>}
                </div>

                <h3 className="mb-3 font-heading text-lg leading-snug font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-xl">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {post.excerpt && (
                    <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                    </p>
                )}

                <div className="mt-auto flex items-center justify-between border-t border-border/40 pt-2">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-foreground transition-colors duration-150 group-hover:text-primary"
                    >
                        <span>Read Article</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
