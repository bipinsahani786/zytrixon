import React from 'react';

interface BlogAuthorBoxProps {
    authorName: string;
    isLight: boolean;
}

export default function BlogAuthorBox({
    authorName,
    isLight,
}: BlogAuthorBoxProps) {
    return (
        <div
            style={{
                marginTop: 48,
                padding: '36px',
                borderRadius: 20,
                background: isLight ? '#FFFFFF' : '#0F0F14',
                border: isLight
                    ? '1px solid #E2E8F0'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isLight
                    ? '0 10px 30px rgba(0, 0, 0, 0.04)'
                    : '0 12px 36px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                gap: 24,
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            <div
                style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: isLight
                        ? 'linear-gradient(135deg, #4F46E5, #06B6D4)'
                        : 'linear-gradient(135deg, #3B82F6, #10B981)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: 24,
                    fontWeight: 800,
                    flexShrink: 0,
                }}
            >
                {(authorName || 'Z')[0].toUpperCase()}
            </div>

            <div style={{ flex: 1, minWidth: 260 }}>
                <div
                    style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: isLight ? '#0F172A' : '#FFFFFF',
                        marginBottom: 6,
                    }}
                >
                    Written by {authorName}
                </div>
                <p
                    style={{
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: isLight ? '#475569' : '#A1A1AA',
                        margin: 0,
                    }}
                >
                    Software architect and engineering researcher at Zytrixon
                    Tech, passionate about modern distributed web systems, AI
                    agent integrations, and scalable product architecture.
                </p>
            </div>
        </div>
    );
}
