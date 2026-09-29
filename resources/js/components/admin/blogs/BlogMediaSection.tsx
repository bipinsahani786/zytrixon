import React, { useRef } from 'react';
import { ImagePlus, Trash2 } from 'lucide-react';

interface BlogMediaSectionProps {
    imageUrl: string;
    onUrlChange: (url: string) => void;
    onFileSelect: (file: File | null) => void;
    previewUrl: string;
    onPreviewChange: (preview: string) => void;
}

export default function BlogMediaSection({
    imageUrl,
    onUrlChange,
    onFileSelect,
    previewUrl,
    onPreviewChange,
}: BlogMediaSectionProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onFileSelect(file);
            const objectUrl = URL.createObjectURL(file);
            onPreviewChange(objectUrl);
        }
    };

    const handleRemoveImage = () => {
        onFileSelect(null);
        onUrlChange('');
        onPreviewChange('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-3">
            <label
                className="block text-xs font-semibold tracking-wider uppercase"
                style={{ color: 'var(--admin-text-secondary, #a1a1aa)' }}
            >
                Cover / Featured Image
            </label>

            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />

            {/* Preview Banner */}
            {previewUrl ? (
                <div
                    className="group relative overflow-hidden rounded-xl border"
                    style={{
                        borderColor:
                            'var(--admin-border, rgba(255, 255, 255, 0.12))',
                        maxHeight: 180,
                    }}
                >
                    <img
                        src={previewUrl}
                        alt="Featured Preview"
                        className="h-44 w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black shadow transition-colors hover:bg-slate-100"
                        >
                            Change Image
                        </button>
                        <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="rounded-lg bg-red-600/90 p-2 text-white shadow transition-colors hover:bg-red-600"
                            title="Remove image"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                </div>
            ) : (
                /* Upload Trigger Button */
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors"
                    style={{
                        borderColor:
                            'var(--admin-border, rgba(255, 255, 255, 0.12))',
                        backgroundColor: 'var(--admin-card-subtle, #14141d)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                            'var(--admin-accent, #10b981)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                            'var(--admin-border, rgba(255, 255, 255, 0.12))';
                    }}
                >
                    <ImagePlus
                        size={28}
                        className="mx-auto mb-2 opacity-60"
                        style={{ color: 'var(--admin-text-muted, #71717a)' }}
                    />
                    <p
                        className="text-xs font-semibold"
                        style={{ color: 'var(--admin-text-primary, #ffffff)' }}
                    >
                        Click to upload featured cover image
                    </p>
                    <p
                        className="mt-0.5 text-[11px]"
                        style={{ color: 'var(--admin-text-muted, #71717a)' }}
                    >
                        PNG, JPG, WEBP up to 5MB (16:9 aspect recommended)
                    </p>
                </div>
            )}

            {/* Direct Image URL fallback */}
            <div className="flex items-center gap-2">
                <span
                    className="text-[11px] whitespace-nowrap"
                    style={{ color: 'var(--admin-text-muted, #71717a)' }}
                >
                    Or paste direct image URL:
                </span>
                <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => {
                        onUrlChange(e.target.value);
                        if (e.target.value) {
                            onPreviewChange(e.target.value);
                        }
                    }}
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none"
                    style={{
                        backgroundColor: 'var(--admin-input-bg, #14141d)',
                        borderColor:
                            'var(--admin-input-border, rgba(255, 255, 255, 0.12))',
                        color: 'var(--admin-text-primary, #ffffff)',
                    }}
                />
            </div>
        </div>
    );
}
