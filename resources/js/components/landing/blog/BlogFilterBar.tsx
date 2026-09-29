import React from 'react';
import { Search, X } from 'lucide-react';

interface BlogFilterBarProps {
    searchQuery: string;
    onSearchChange: (q: string) => void;
    onSearchSubmit: (e: React.FormEvent) => void;
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (cat: string) => void;
    isLight: boolean;
}

export default function BlogFilterBar({
    searchQuery,
    onSearchChange,
    onSearchSubmit,
    categories,
    selectedCategory,
    onCategoryChange,
    isLight,
}: BlogFilterBarProps) {
    return (
        <section
            style={{
                padding: '16px 24px 32px',
                maxWidth: 1240,
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    alignItems: 'center',
                }}
            >
                {/* Search Box */}
                <form
                    onSubmit={onSearchSubmit}
                    style={{
                        width: '100%',
                        maxWidth: 540,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Search
                        size={18}
                        style={{
                            position: 'absolute',
                            left: 18,
                            color: isLight ? '#64748B' : '#71717A',
                            pointerEvents: 'none',
                        }}
                    />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search articles, architectures, tutorials..."
                        style={{
                            width: '100%',
                            padding: '13px 44px 13px 48px',
                            borderRadius: 9999,
                            fontSize: 14,
                            background: isLight ? '#FFFFFF' : '#121217',
                            color: isLight ? '#0F172A' : '#FFFFFF',
                            border: isLight
                                ? '1px solid #E2E8F0'
                                : '1px solid rgba(255, 255, 255, 0.12)',
                            boxShadow: isLight
                                ? '0 4px 14px rgba(0, 0, 0, 0.04)'
                                : '0 4px 20px rgba(0, 0, 0, 0.4)',
                            outline: 'none',
                            transition:
                                'border-color 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onFocus={(e) => {
                            e.currentTarget.style.borderColor = isLight
                                ? '#6366F1'
                                : 'rgba(255, 255, 255, 0.35)';
                        }}
                        onBlur={(e) => {
                            e.currentTarget.style.borderColor = isLight
                                ? '#E2E8F0'
                                : 'rgba(255, 255, 255, 0.12)';
                        }}
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => onSearchChange('')}
                            style={{
                                position: 'absolute',
                                right: 16,
                                background: 'transparent',
                                border: 'none',
                                color: isLight ? '#94A3B8' : '#71717A',
                                cursor: 'pointer',
                                padding: 4,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <X size={16} />
                        </button>
                    )}
                </form>

                {/* Category Pills */}
                <div
                    style={{
                        display: 'flex',
                        gap: 10,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <button
                        onClick={() => onCategoryChange('all')}
                        style={{
                            padding: '8px 18px',
                            borderRadius: 9999,
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            background:
                                selectedCategory === 'all' || !selectedCategory
                                    ? isLight
                                        ? '#0F172A'
                                        : '#FFFFFF'
                                    : isLight
                                      ? '#F1F5F9'
                                      : 'rgba(255, 255, 255, 0.05)',
                            color:
                                selectedCategory === 'all' || !selectedCategory
                                    ? isLight
                                        ? '#FFFFFF'
                                        : '#000000'
                                    : isLight
                                      ? '#475569'
                                      : '#A1A1AA',
                            border:
                                selectedCategory === 'all' || !selectedCategory
                                    ? 'none'
                                    : isLight
                                      ? '1px solid #E2E8F0'
                                      : '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        All Articles
                    </button>

                    {(categories || []).map((cat) => {
                        const isActive = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => onCategoryChange(cat)}
                                style={{
                                    padding: '8px 18px',
                                    borderRadius: 9999,
                                    fontSize: 13,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    background: isActive
                                        ? isLight
                                            ? '#0F172A'
                                            : '#FFFFFF'
                                        : isLight
                                          ? '#F1F5F9'
                                          : 'rgba(255, 255, 255, 0.05)',
                                    color: isActive
                                        ? isLight
                                            ? '#FFFFFF'
                                            : '#000000'
                                        : isLight
                                          ? '#475569'
                                          : '#A1A1AA',
                                    border: isActive
                                        ? 'none'
                                        : isLight
                                          ? '1px solid #E2E8F0'
                                          : '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
