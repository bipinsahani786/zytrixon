import React from 'react';

interface BlogProseStylesProps {
    isLight: boolean;
}

export default function BlogProseStyles({ isLight }: BlogProseStylesProps) {
    return (
        <style>{`
            .zytrixon-article-content {
                font-size: 17px;
                line-height: 1.85;
                color: ${isLight ? '#334155' : '#D4D4D8'};
            }

            .zytrixon-article-content h1,
            .zytrixon-article-content h2,
            .zytrixon-article-content h3,
            .zytrixon-article-content h4 {
                font-family: var(--font-heading);
                color: ${isLight ? '#0F172A' : '#FFFFFF'};
                font-weight: 800;
                letter-spacing: -0.02em;
                margin-top: 2.2em;
                margin-bottom: 0.8em;
                line-height: 1.3;
            }

            .zytrixon-article-content h2 {
                font-size: 28px;
                border-bottom: 1px solid ${isLight ? '#E2E8F0' : 'rgba(255, 255, 255, 0.08)'};
                padding-bottom: 12px;
            }

            .zytrixon-article-content h3 {
                font-size: 22px;
            }

            .zytrixon-article-content p {
                margin-bottom: 1.6em;
            }

            .zytrixon-article-content strong,
            .zytrixon-article-content b {
                color: ${isLight ? '#0F172A' : '#FFFFFF'};
                font-weight: 700;
            }

            .zytrixon-article-content a {
                color: ${isLight ? '#4F46E5' : '#60A5FA'};
                text-decoration: underline;
                text-underline-offset: 4px;
                font-weight: 600;
                transition: opacity 0.2s;
            }

            .zytrixon-article-content a:hover {
                opacity: 0.8;
            }

            .zytrixon-article-content blockquote {
                border-left: 4px solid ${isLight ? '#4F46E5' : '#60A5FA'};
                background: ${isLight ? '#EEF2FF' : 'rgba(59, 130, 246, 0.06)'};
                margin: 2em 0;
                padding: 18px 24px;
                border-radius: 0 12px 12px 0;
                font-style: italic;
                color: ${isLight ? '#1E1B4B' : '#E0E7FF'};
            }

            .zytrixon-article-content ul,
            .zytrixon-article-content ol {
                margin: 1.5em 0;
                padding-left: 28px;
            }

            .zytrixon-article-content li {
                margin-bottom: 0.8em;
            }

            .zytrixon-article-content code {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                font-size: 0.9em;
                padding: 3px 6px;
                border-radius: 6px;
                background: ${isLight ? '#F1F5F9' : 'rgba(255, 255, 255, 0.08)'};
                color: ${isLight ? '#D946EF' : '#F472B6'};
                border: 1px solid ${isLight ? '#E2E8F0' : 'rgba(255, 255, 255, 0.1)'};
            }

            .zytrixon-article-content pre {
                background: ${isLight ? '#0F172A' : '#0B0B0F'};
                color: #F8FAFC;
                padding: 20px 24px;
                border-radius: 14px;
                overflow-x: auto;
                margin: 2em 0;
                font-size: 14px;
                line-height: 1.6;
                border: 1px solid ${isLight ? '#1E293B' : 'rgba(255, 255, 255, 0.12)'};
            }

            .zytrixon-article-content pre code {
                background: transparent;
                color: inherit;
                padding: 0;
                border: none;
                font-size: inherit;
            }

            .zytrixon-article-content img {
                max-width: 100%;
                height: auto;
                border-radius: 14px;
                margin: 2.2em 0;
                border: 1px solid ${isLight ? '#E2E8F0' : 'rgba(255, 255, 255, 0.1)'};
                box-shadow: ${isLight ? '0 10px 25px rgba(0,0,0,0.06)' : '0 12px 30px rgba(0,0,0,0.5)'};
            }

            .zytrixon-article-content hr {
                border: none;
                border-top: 1px solid ${isLight ? '#E2E8F0' : 'rgba(255, 255, 255, 0.1)'};
                margin: 3em 0;
            }
        `}</style>
    );
}
