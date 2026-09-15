import { useState } from 'react';

interface ScoreResult {
    overall: number;
    speed: number;
    seo: number;
    accessibility: number;
    tips: string[];
}

function generateScore(): ScoreResult {
    const speed = Math.floor(Math.random() * 30) + 55;
    const seo = Math.floor(Math.random() * 25) + 65;
    const accessibility = Math.floor(Math.random() * 20) + 70;
    const overall = Math.round((speed + seo + accessibility) / 3);

    const allTips = [
        '🔴 Images are not optimized — use WebP format',
        '🟡 Missing meta description on 3 pages',
        '🟢 SSL certificate is valid',
        '🔴 Page load time is 4.2s — should be under 2s',
        '🟡 No sitemap.xml found',
        '🟢 Mobile responsive design detected',
        '🔴 No structured data (JSON-LD) found',
        '🟡 H1 tag missing on homepage',
        '🟢 HTTPS enabled',
        '🔴 Core Web Vitals: LCP = 3.8s (poor)',
    ];

    const tips = allTips.sort(() => Math.random() - 0.5).slice(0, 5);

    return { overall, speed, seo, accessibility, tips };
}

function ScoreCircle({
    value,
    label,
    size = 60,
}: {
    value: number;
    label: string;
    size?: number;
}) {
    const circumference = 2 * Math.PI * 22;
    const offset = circumference - (value / 100) * circumference;
    const color = value >= 80 ? '#4ecdc4' : value >= 60 ? '#ffe66d' : '#ff6b6b';

    return (
        <div style={{ textAlign: 'center' }}>
            <svg width={size} height={size} viewBox="0 0 50 50">
                <circle
                    cx="25"
                    cy="25"
                    r="22"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="3"
                />
                <circle
                    cx="25"
                    cy="25"
                    r="22"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 25 25)"
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                />
                <text
                    x="25"
                    y="28"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill={color}
                >
                    {value}
                </text>
            </svg>
            <div
                style={{
                    fontSize: 9,
                    color: 'var(--zy-gray-text)',
                    marginTop: 4,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                }}
            >
                {label}
            </div>
        </div>
    );
}

export default function PlaygroundMarketing() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ScoreResult | null>(null);

    const analyze = () => {
        if (!url.trim()) {
            return;
        }

        setLoading(true);
        setResult(null);
        // Simulated analysis
        setTimeout(() => {
            setResult(generateScore());
            setLoading(false);
        }, 1500);
    };

    return (
        <div
            style={{
                background: 'var(--zy-gray-card)',
                border: '1px solid var(--zy-gray-border)',
                padding: 0,
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--zy-gray-text)',
                    padding: '12px 16px',
                    borderBottom: '1px solid var(--zy-gray-border)',
                }}
            >
                📊 SEO SCORE ANALYZER — Enter any website URL
            </div>

            <div style={{ padding: 20 }}>
                {/* Input */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="example.com"
                        onKeyDown={(e) => e.key === 'Enter' && analyze()}
                        style={{
                            flex: 1,
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--zy-gray-border)',
                            padding: '10px 14px',
                            color: 'var(--zy-white)',
                            fontSize: 13,
                            fontFamily: 'monospace',
                            outline: 'none',
                        }}
                    />
                    <button
                        onClick={analyze}
                        disabled={loading}
                        style={{
                            background: 'var(--zy-white)',
                            color: 'var(--zy-black)',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: loading ? 'wait' : 'pointer',
                            fontFamily: 'var(--font-heading)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            opacity: loading ? 0.5 : 1,
                        }}
                    >
                        {loading ? 'Analyzing...' : 'Analyze'}
                    </button>
                </div>

                {/* Loading bar */}
                {loading && (
                    <div
                        style={{
                            height: 2,
                            background: 'var(--zy-gray-border)',
                            marginBottom: 16,
                        }}
                    >
                        <div
                            style={{
                                height: '100%',
                                background: '#fff',
                                animation: 'loading-bar 1.5s ease-in-out',
                                width: '100%',
                            }}
                        />
                        <style>{`@keyframes loading-bar { from { width: 0; } to { width: 100%; } }`}</style>
                    </div>
                )}

                {/* Results */}
                {result && (
                    <div style={{ animation: 'fadeInUp 0.4s ease' }}>
                        <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>

                        {/* Score circles */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                marginBottom: 20,
                            }}
                        >
                            <ScoreCircle
                                value={result.overall}
                                label="Overall"
                                size={70}
                            />
                            <ScoreCircle value={result.speed} label="Speed" />
                            <ScoreCircle value={result.seo} label="SEO" />
                            <ScoreCircle
                                value={result.accessibility}
                                label="A11y"
                            />
                        </div>

                        {/* Tips */}
                        <div
                            style={{
                                borderTop: '1px solid var(--zy-gray-border)',
                                paddingTop: 12,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 10,
                                    fontWeight: 600,
                                    color: 'var(--zy-gray-text)',
                                    marginBottom: 8,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                FINDINGS
                            </div>
                            {result.tips.map((tip, i) => (
                                <div
                                    key={i}
                                    style={{
                                        fontSize: 11,
                                        color: 'var(--zy-gray-light)',
                                        padding: '6px 0',
                                        borderBottom:
                                            '1px solid rgba(255,255,255,0.03)',
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {tip}
                                </div>
                            ))}
                        </div>

                        <div
                            style={{
                                marginTop: 12,
                                fontSize: 10,
                                color: 'var(--zy-gray-text)',
                                fontStyle: 'italic',
                            }}
                        >
                            💡 Want a real audit?{' '}
                            <a
                                href="#contact"
                                style={{
                                    color: 'var(--zy-white)',
                                    textDecoration: 'underline',
                                }}
                            >
                                Contact us
                            </a>{' '}
                            for a free detailed report.
                        </div>
                    </div>
                )}

                {!result && !loading && (
                    <div
                        style={{
                            textAlign: 'center',
                            color: '#333',
                            fontSize: 11,
                            padding: '30px 0',
                        }}
                    >
                        Enter a website URL and click Analyze to get an instant
                        score
                    </div>
                )}
            </div>
        </div>
    );
}
