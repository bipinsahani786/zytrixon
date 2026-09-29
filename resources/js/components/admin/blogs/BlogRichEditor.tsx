import React, { useRef } from 'react';
import {
    Bold,
    Italic,
    Heading2,
    List,
    ListOrdered,
    Link2,
    Code2,
    Quote,
    Eye,
    Columns2,
    PenLine,
} from 'lucide-react';

interface BlogRichEditorProps {
    value: string;
    onChange: (val: string) => void;
    editorView: 'edit' | 'preview' | 'split';
    onViewChange: (view: 'edit' | 'preview' | 'split') => void;
}

const TOOLBAR_BUTTONS = [
    { icon: Bold, label: 'Bold', action: 'bold', syntax: '**$SEL**' },
    { icon: Italic, label: 'Italic', action: 'italic', syntax: '*$SEL*' },
    {
        icon: Heading2,
        label: 'Heading 2',
        action: 'h2',
        syntax: '<h2>$SEL</h2>',
    },
    {
        icon: List,
        label: 'Bullet List',
        action: 'ul',
        syntax: '<ul>\n    <li>$SEL</li>\n</ul>',
    },
    {
        icon: ListOrdered,
        label: 'Ordered List',
        action: 'ol',
        syntax: '<ol>\n    <li>$SEL</li>\n</ol>',
    },
    {
        icon: Link2,
        label: 'Link',
        action: 'link',
        syntax: '<a href="URL">$SEL</a>',
    },
    {
        icon: Code2,
        label: 'Code Block',
        action: 'code',
        syntax: '<pre><code>$SEL</code></pre>',
    },
    {
        icon: Quote,
        label: 'Blockquote',
        action: 'blockquote',
        syntax: '<blockquote>$SEL</blockquote>',
    },
];

export default function BlogRichEditor({
    value,
    onChange,
    editorView,
    onViewChange,
}: BlogRichEditorProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleToolbarAction = (syntax: string) => {
        const textarea = textareaRef.current;
        if (!textarea) {
return;
}

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = value.substring(start, end) || 'text';

        const replacement = syntax.replace('$SEL', selectedText);
        const newValue =
            value.substring(0, start) + replacement + value.substring(end);
        onChange(newValue);

        setTimeout(() => {
            textarea.focus();
            const newCursorPos = start + replacement.length;
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 10);
    };

    return (
        <div>
            {/* Editor Toolbar & View Switcher */}
            <div
                className="flex flex-wrap items-center justify-between gap-2 rounded-t-xl border border-b-0 px-3 py-2"
                style={{
                    backgroundColor: 'var(--admin-card-subtle, #14141d)',
                    borderColor:
                        'var(--admin-border, rgba(255, 255, 255, 0.08))',
                }}
            >
                {/* Formatting Buttons */}
                <div className="flex flex-wrap items-center gap-1">
                    {TOOLBAR_BUTTONS.map((btn) => {
                        const Icon = btn.icon;
                        return (
                            <button
                                key={btn.action}
                                type="button"
                                title={btn.label}
                                onClick={() => handleToolbarAction(btn.syntax)}
                                className="rounded-lg p-1.5 transition-colors"
                                style={{
                                    color: 'var(--admin-text-secondary, #a1a1aa)',
                                }}
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
                                        'var(--admin-text-secondary, #a1a1aa)';
                                }}
                            >
                                <Icon size={14} />
                            </button>
                        );
                    })}
                </div>

                {/* View Switcher: Edit | Split | Preview */}
                <div
                    className="flex items-center rounded-lg border p-0.5"
                    style={{
                        backgroundColor:
                            'var(--admin-button-secondary-bg, rgba(255, 255, 255, 0.06))',
                        borderColor:
                            'var(--admin-border, rgba(255, 255, 255, 0.08))',
                    }}
                >
                    <button
                        type="button"
                        onClick={() => onViewChange('edit')}
                        className="flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                        style={{
                            backgroundColor:
                                editorView === 'edit'
                                    ? 'var(--admin-modal-bg, #0e0e15)'
                                    : 'transparent',
                            color:
                                editorView === 'edit'
                                    ? 'var(--admin-text-primary, #ffffff)'
                                    : 'var(--admin-text-muted, #71717a)',
                        }}
                    >
                        <PenLine size={12} />
                        Edit
                    </button>
                    <button
                        type="button"
                        onClick={() => onViewChange('split')}
                        className="flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                        style={{
                            backgroundColor:
                                editorView === 'split'
                                    ? 'var(--admin-modal-bg, #0e0e15)'
                                    : 'transparent',
                            color:
                                editorView === 'split'
                                    ? 'var(--admin-text-primary, #ffffff)'
                                    : 'var(--admin-text-muted, #71717a)',
                        }}
                    >
                        <Columns2 size={12} />
                        Split
                    </button>
                    <button
                        type="button"
                        onClick={() => onViewChange('preview')}
                        className="flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                        style={{
                            backgroundColor:
                                editorView === 'preview'
                                    ? 'var(--admin-modal-bg, #0e0e15)'
                                    : 'transparent',
                            color:
                                editorView === 'preview'
                                    ? 'var(--admin-text-primary, #ffffff)'
                                    : 'var(--admin-text-muted, #71717a)',
                        }}
                    >
                        <Eye size={12} />
                        Preview
                    </button>
                </div>
            </div>

            {/* Editor Textarea / Preview Pane */}
            <div
                className={`grid ${
                    editorView === 'split'
                        ? 'grid-cols-2 divide-x'
                        : 'grid-cols-1'
                } overflow-hidden rounded-b-xl border`}
                style={{
                    borderColor:
                        'var(--admin-border, rgba(255, 255, 255, 0.08))',
                    minHeight: 280,
                }}
            >
                {/* Code/HTML input textarea */}
                {(editorView === 'edit' || editorView === 'split') && (
                    <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        required
                        placeholder="Write article content in HTML (use <h2>, <p>, <ul>, <code>, <blockquote>, etc.)..."
                        rows={12}
                        className="w-full resize-y p-4 font-mono text-xs leading-relaxed transition-colors outline-none"
                        style={{
                            backgroundColor: 'var(--admin-input-bg, #14141d)',
                            color: 'var(--admin-text-primary, #ffffff)',
                        }}
                    />
                )}

                {/* Live rendered HTML preview */}
                {(editorView === 'preview' || editorView === 'split') && (
                    <div
                        className="prose prose-invert prose-sm max-h-[380px] overflow-y-auto p-5"
                        style={{
                            backgroundColor:
                                'var(--admin-card-subtle, #14141d)',
                            color: 'var(--admin-text-primary, #ffffff)',
                        }}
                    >
                        {value ? (
                            <div
                                dangerouslySetInnerHTML={{ __html: value }}
                                className="blog-admin-preview space-y-3 text-xs leading-relaxed"
                            />
                        ) : (
                            <p
                                className="text-xs italic"
                                style={{
                                    color: 'var(--admin-text-muted, #71717a)',
                                }}
                            >
                                Live HTML preview will appear here as you
                                type...
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
