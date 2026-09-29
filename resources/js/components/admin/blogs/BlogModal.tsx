import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Pencil, Plus } from 'lucide-react';
import type { BlogFormData } from './types';
import BlogRichEditor from './BlogRichEditor';
import BlogMediaSection from './BlogMediaSection';
import BlogSeoSection from './BlogSeoSection';

interface BlogModalProps {
    isOpen: boolean;
    mode: 'create' | 'edit';
    formData: BlogFormData;
    categories: string[];
    onChange: (
        field: keyof BlogFormData,
        value: string | boolean | File | null,
    ) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
}

export default function BlogModal({
    isOpen,
    mode,
    formData,
    categories,
    onChange,
    onSubmit,
    onClose,
}: BlogModalProps) {
    const [editorView, setEditorView] = useState<'edit' | 'preview' | 'split'>(
        'edit',
    );
    const [imagePreview, setImagePreview] = useState<string>('');

    useEffect(() => {
        if (formData.featured_image && !imagePreview) {
            setImagePreview(formData.featured_image);
        }
        if (!isOpen) {
            setImagePreview('');
        }
    }, [isOpen, formData.featured_image]);

    if (!isOpen) {
return null;
}
    if (typeof document === 'undefined') {
return null;
}

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
            style={{
                backgroundColor:
                    'var(--admin-modal-overlay, rgba(0, 0, 0, 0.85))',
            }}
        >
            <div
                className="flex max-h-[92vh] w-full max-w-4xl animate-in flex-col overflow-hidden rounded-2xl border shadow-2xl duration-200 zoom-in-95 fade-in"
                style={{
                    backgroundColor: 'var(--admin-modal-bg, #0e0e15)',
                    borderColor:
                        'var(--admin-border, rgba(255, 255, 255, 0.12))',
                }}
            >
                {/* Modal Header */}
                <div
                    className="flex flex-shrink-0 items-center justify-between border-b px-6 py-4"
                    style={{
                        borderColor:
                            'var(--admin-border, rgba(255, 255, 255, 0.08))',
                        backgroundColor: 'var(--admin-card-subtle, #14141d)',
                    }}
                >
                    <div className="flex items-center gap-2.5">
                        <div
                            className="rounded-xl p-2"
                            style={{
                                backgroundColor:
                                    'var(--admin-button-secondary-bg, rgba(255, 255, 255, 0.06))',
                                color: 'var(--admin-accent, #10b981)',
                            }}
                        >
                            {mode === 'create' ? (
                                <Plus size={18} />
                            ) : (
                                <Pencil size={18} />
                            )}
                        </div>
                        <div>
                            <h2
                                className="font-heading text-base font-semibold"
                                style={{
                                    color: 'var(--admin-text-primary, #ffffff)',
                                }}
                            >
                                {mode === 'create'
                                    ? 'Create New Article'
                                    : 'Edit Article'}
                            </h2>
                            <p
                                className="text-xs"
                                style={{
                                    color: 'var(--admin-text-muted, #71717a)',
                                }}
                            >
                                {mode === 'create'
                                    ? 'Compose and publish a technical post to the public blog.'
                                    : `Updating article: "${formData.title || 'Untitled'}"`}
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg p-1.5 transition-colors"
                        style={{ color: 'var(--admin-text-muted, #71717a)' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                                'var(--admin-button-secondary-bg, rgba(255, 255, 255, 0.08))';
                            e.currentTarget.style.color =
                                'var(--admin-text-primary, #ffffff)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                'transparent';
                            e.currentTarget.style.color =
                                'var(--admin-text-muted, #71717a)';
                        }}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Modal Scrollable Body */}
                <form
                    onSubmit={onSubmit}
                    className="flex-1 space-y-5 overflow-y-auto p-6"
                    style={{
                        backgroundColor: 'var(--admin-modal-bg, #0e0e15)',
                    }}
                >
                    {/* 1. Primary Title & Category */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <label
                                className="mb-1 block text-xs font-semibold tracking-wider uppercase"
                                style={{
                                    color: 'var(--admin-text-secondary, #a1a1aa)',
                                }}
                            >
                                Article Title{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) =>
                                    onChange('title', e.target.value)
                                }
                                required
                                placeholder="e.g. Architecting High-Throughput Microservices on AWS"
                                className="w-full rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors outline-none"
                                style={{
                                    backgroundColor:
                                        'var(--admin-input-bg, #14141d)',
                                    borderColor:
                                        'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                                    color: 'var(--admin-text-primary, #ffffff)',
                                }}
                            />
                        </div>

                        <div>
                            <label
                                className="mb-1 block text-xs font-semibold tracking-wider uppercase"
                                style={{
                                    color: 'var(--admin-text-secondary, #a1a1aa)',
                                }}
                            >
                                Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) =>
                                    onChange('category', e.target.value)
                                }
                                className="w-full rounded-lg border px-3.5 py-2 text-sm transition-colors outline-none"
                                style={{
                                    backgroundColor:
                                        'var(--admin-input-bg, #14141d)',
                                    borderColor:
                                        'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                                    color: 'var(--admin-text-primary, #ffffff)',
                                }}
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* 2. Excerpt Subtitle */}
                    <div>
                        <label
                            className="mb-1 block text-xs font-semibold tracking-wider uppercase"
                            style={{
                                color: 'var(--admin-text-secondary, #a1a1aa)',
                            }}
                        >
                            Short Summary / Excerpt
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) =>
                                onChange('excerpt', e.target.value)
                            }
                            rows={2}
                            placeholder="A concise synopsis to display in article cards, RSS feeds, and social share cards..."
                            className="w-full resize-none rounded-lg border px-3.5 py-2 text-xs transition-colors outline-none"
                            style={{
                                backgroundColor:
                                    'var(--admin-input-bg, #14141d)',
                                borderColor:
                                    'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                                color: 'var(--admin-text-primary, #ffffff)',
                            }}
                        />
                    </div>

                    {/* 3. Modular Rich Text Editor */}
                    <BlogRichEditor
                        value={formData.content}
                        onChange={(val) => onChange('content', val)}
                        editorView={editorView}
                        onViewChange={setEditorView}
                    />

                    {/* 4. Modular Media Cover Image Section */}
                    <BlogMediaSection
                        imageUrl={formData.featured_image}
                        onUrlChange={(url) => onChange('featured_image', url)}
                        onFileSelect={(file) => onChange('image_file', file)}
                        previewUrl={imagePreview}
                        onPreviewChange={setImagePreview}
                    />

                    {/* 5. Author, Status & Settings Strip */}
                    <div
                        className="grid grid-cols-1 gap-4 rounded-xl border p-4 sm:grid-cols-3"
                        style={{
                            backgroundColor:
                                'var(--admin-card-subtle, #14141d)',
                            borderColor:
                                'var(--admin-border, rgba(255, 255, 255, 0.08))',
                        }}
                    >
                        <div>
                            <label
                                className="mb-1 block text-xs font-medium"
                                style={{
                                    color: 'var(--admin-text-secondary, #a1a1aa)',
                                }}
                            >
                                Author Name
                            </label>
                            <input
                                type="text"
                                value={formData.author_name}
                                onChange={(e) =>
                                    onChange('author_name', e.target.value)
                                }
                                placeholder="Zytrixon Team"
                                className="w-full rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none"
                                style={{
                                    backgroundColor:
                                        'var(--admin-input-bg, #14141d)',
                                    borderColor:
                                        'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                                    color: 'var(--admin-text-primary, #ffffff)',
                                }}
                            />
                        </div>

                        <div>
                            <label
                                className="mb-1 block text-xs font-medium"
                                style={{
                                    color: 'var(--admin-text-secondary, #a1a1aa)',
                                }}
                            >
                                Publication Status
                            </label>
                            <select
                                value={formData.status}
                                onChange={(e) =>
                                    onChange(
                                        'status',
                                        e.target.value as 'published' | 'draft',
                                    )
                                }
                                className="w-full rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none"
                                style={{
                                    backgroundColor:
                                        'var(--admin-input-bg, #14141d)',
                                    borderColor:
                                        'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                                    color: 'var(--admin-text-primary, #ffffff)',
                                }}
                            >
                                <option value="published">
                                    Published (Live immediately)
                                </option>
                                <option value="draft">
                                    Draft (Saved privately)
                                </option>
                            </select>
                        </div>

                        <div className="flex items-center pt-5">
                            <label className="flex cursor-pointer items-center gap-2 select-none">
                                <input
                                    type="checkbox"
                                    checked={formData.is_featured}
                                    onChange={(e) =>
                                        onChange(
                                            'is_featured',
                                            e.target.checked,
                                        )
                                    }
                                    className="h-4 w-4 cursor-pointer rounded border"
                                />
                                <span
                                    className="text-xs font-medium"
                                    style={{
                                        color: 'var(--admin-text-primary, #ffffff)',
                                    }}
                                >
                                    Highlight as Featured Article
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* 6. Modular SEO Section */}
                    <BlogSeoSection
                        metaTitle={formData.meta_title}
                        onMetaTitleChange={(val) => onChange('meta_title', val)}
                        metaDescription={formData.meta_description}
                        onMetaDescriptionChange={(val) =>
                            onChange('meta_description', val)
                        }
                        slug={formData.slug}
                        onSlugChange={(val) => onChange('slug', val)}
                        title={formData.title}
                    />

                    {/* Modal Footer Actions */}
                    <div
                        className="flex flex-shrink-0 items-center justify-end gap-3 border-t pt-4"
                        style={{
                            borderColor:
                                'var(--admin-border, rgba(255, 255, 255, 0.08))',
                            backgroundColor: 'var(--admin-modal-bg, #0e0e15)',
                        }}
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border px-4 py-2 text-xs font-medium transition-colors"
                            style={{
                                borderColor:
                                    'var(--admin-border, rgba(255, 255, 255, 0.12))',
                                color: 'var(--admin-text-secondary, #a1a1aa)',
                                backgroundColor:
                                    'var(--admin-card-subtle, #14141d)',
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg px-5 py-2 text-xs font-semibold text-white shadow-sm transition-opacity"
                            style={{
                                backgroundColor: 'var(--admin-accent, #10b981)',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.opacity = '0.9')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.opacity = '1')
                            }
                        >
                            {mode === 'create'
                                ? 'Publish Article'
                                : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body,
    );
}
