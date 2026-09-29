import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface BlogShareBarProps {
    title: string;
    isLight: boolean;
}

export default function BlogShareBar({ title, isLight }: BlogShareBarProps) {
    const [copied, setCopied] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleCopyLink = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
            }}
        >
            {/* Copy Link Button */}
            <button
                type="button"
                onClick={handleCopyLink}
                title="Copy article link"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 14px',
                    borderRadius: 8,
                    background: isLight
                        ? '#F1F5F9'
                        : 'rgba(255, 255, 255, 0.06)',
                    border: isLight
                        ? '1px solid #CBD5E1'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                    color: copied ? '#10B981' : isLight ? '#334155' : '#E4E4E7',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                }}
            >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? 'Link Copied!' : 'Copy Link'}
            </button>

            {/* Share on X/Twitter */}
            <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    title,
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on X"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: isLight
                        ? '#F1F5F9'
                        : 'rgba(255, 255, 255, 0.06)',
                    border: isLight
                        ? '1px solid #CBD5E1'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                    color: isLight ? '#334155' : '#E4E4E7',
                    textDecoration: 'none',
                }}
            >
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>

            {/* Share on LinkedIn */}
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: isLight
                        ? '#F1F5F9'
                        : 'rgba(255, 255, 255, 0.06)',
                    border: isLight
                        ? '1px solid #CBD5E1'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                    color: isLight ? '#334155' : '#E4E4E7',
                    textDecoration: 'none',
                }}
            >
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28M7.86 18.5V9.93H5.06V18.5h2.8z" />
                </svg>
            </a>

            {/* Share on WhatsApp */}
            <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    title + ' ' + shareUrl,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on WhatsApp"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: isLight
                        ? '#F1F5F9'
                        : 'rgba(255, 255, 255, 0.06)',
                    border: isLight
                        ? '1px solid #CBD5E1'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                    color: isLight ? '#334155' : '#E4E4E7',
                    textDecoration: 'none',
                }}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32" />
                </svg>
            </a>
        </div>
    );
}
