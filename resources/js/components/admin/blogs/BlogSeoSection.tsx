import React from 'react';
import { Globe } from 'lucide-react';

interface BlogSeoSectionProps {
    metaTitle: string;
    onMetaTitleChange: (val: string) => void;
    metaDescription: string;
    onMetaDescriptionChange: (val: string) => void;
    slug: string;
    onSlugChange: (val: string) => void;
    title: string;
}

export default function BlogSeoSection({
    metaTitle,
    onMetaTitleChange,
    metaDescription,
    onMetaDescriptionChange,
    slug,
    onSlugChange,
    title,
}: BlogSeoSectionProps) {
    const effectiveTitle = metaTitle || title || 'Article Title';
    const effectiveSlug = slug || 'article-slug';

    return (
        <div
            className="space-y-3 rounded-xl border p-4"
            style={{
                backgroundColor: 'var(--admin-card-subtle, #14141d)',
                borderColor: 'var(--admin-border, rgba(255, 255, 255, 0.08))',
            }}
        >
            <div className="flex items-center gap-2">
                <Globe
                    size={15}
                    style={{ color: 'var(--admin-accent, #10b981)' }}
                />
                <h4
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: 'var(--admin-text-secondary, #a1a1aa)' }}
                >
                    Search Engine Optimization (SEO) & URL
                </h4>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {/* Custom Slug */}
                <div>
                    <label
                        className="mb-1 block text-xs font-medium"
                        style={{
                            color: 'var(--admin-text-secondary, #a1a1aa)',
                        }}
                    >
                        Custom URL Slug (auto-generated if empty)
                    </label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => onSlugChange(e.target.value)}
                        placeholder="e.g. mastering-edge-computing"
                        className="w-full rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors outline-none"
                        style={{
                            backgroundColor: 'var(--admin-input-bg, #0e0e15)',
                            borderColor:
                                'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                            color: 'var(--admin-text-primary, #ffffff)',
                        }}
                    />
                </div>

                {/* Meta Title */}
                <div>
                    <label
                        className="mb-1 block text-xs font-medium"
                        style={{
                            color: 'var(--admin-text-secondary, #a1a1aa)',
                        }}
                    >
                        Meta Title (max 60 chars)
                    </label>
                    <input
                        type="text"
                        value={metaTitle}
                        onChange={(e) => onMetaTitleChange(e.target.value)}
                        placeholder={title || 'SEO Title'}
                        maxLength={70}
                        className="w-full rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none"
                        style={{
                            backgroundColor: 'var(--admin-input-bg, #0e0e15)',
                            borderColor:
                                'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                            color: 'var(--admin-text-primary, #ffffff)',
                        }}
                    />
                </div>
            </div>

            {/* Meta Description */}
            <div>
                <label
                    className="mb-1 block text-xs font-medium"
                    style={{ color: 'var(--admin-text-secondary, #a1a1aa)' }}
                >
                    Meta Description (max 160 chars)
                </label>
                <textarea
                    value={metaDescription}
                    onChange={(e) => onMetaDescriptionChange(e.target.value)}
                    placeholder="Brief description that search engine crawlers will display in search results..."
                    rows={2}
                    maxLength={165}
                    className="w-full resize-none rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none"
                    style={{
                        backgroundColor: 'var(--admin-input-bg, #0e0e15)',
                        borderColor:
                            'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                        color: 'var(--admin-text-primary, #ffffff)',
                    }}
                />
            </div>

            {/* Search Engine SERP Preview */}
            <div
                className="rounded-lg border p-3 text-left"
                style={{
                    backgroundColor: 'var(--admin-modal-bg, #0e0e15)',
                    borderColor:
                        'var(--admin-border, rgba(255, 255, 255, 0.08))',
                }}
            >
                <p className="truncate font-mono text-[10px] text-emerald-500">
                    https://zytrixon.com/blog/{effectiveSlug}
                </p>
                <p className="mt-0.5 cursor-pointer truncate text-xs font-semibold text-blue-400 hover:underline">
                    {effectiveTitle} | Zytrixon Tech Blog
                </p>
                <p
                    className="mt-0.5 line-clamp-2 text-[11px]"
                    style={{ color: 'var(--admin-text-muted, #71717a)' }}
                >
                    {metaDescription ||
                        'Read this in-depth engineering article and technical blueprint on Zytrixon Tech.'}
                </p>
            </div>
        </div>
    );
}
