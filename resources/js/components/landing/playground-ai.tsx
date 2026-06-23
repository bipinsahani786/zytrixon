import { useState, useEffect } from 'react';

export default function PlaygroundAI() {
    const [status, setStatus] = useState<'idle' | 'analyzing' | 'done'>('idle');
    const [progress, setProgress] = useState(0);
    const [output, setOutput] = useState('');

    useEffect(() => {
        if (status === 'analyzing') {
            const interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) {
                        clearInterval(interval);
                        setStatus('done');
                        return 100;
                    }
                    return p + Math.floor(Math.random() * 15) + 5;
                });
            }, 300);
            return () => clearInterval(interval);
        }
    }, [status]);

    useEffect(() => {
        if (status === 'done') {
            const fullText = "Analysis complete. Detected 3 optimization opportunities in workflow. Automated script generated to reduce manual entry by 85%.";
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i <= fullText.length) {
                    setOutput(fullText.substring(0, i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 30);
            return () => clearInterval(typingInterval);
        } else if (status === 'idle') {
            setOutput('');
            setProgress(0);
        }
    }, [status]);

    return (
        <div style={{
            background: 'var(--zy-black)',
            border: '1px solid var(--zy-gray-border)',
            borderRadius: 12,
            padding: 32,
            color: 'var(--zy-white)',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, marginBottom: 4 }}>AI & Automation Engine</h4>
                    <p style={{ fontSize: 13, color: 'var(--zy-gray-text)' }}>Simulate an automated workflow analysis</p>
                </div>
                <button
                    onClick={() => setStatus('analyzing')}
                    disabled={status === 'analyzing'}
                    style={{
                        padding: '10px 20px',
                        background: status === 'analyzing' ? '#333' : '#4ecdc4',
                        color: status === 'analyzing' ? '#888' : '#000',
                        border: 'none',
                        borderRadius: 6,
                        fontWeight: 600,
                        cursor: status === 'analyzing' ? 'not-allowed' : 'pointer',
                        fontSize: 13,
                        transition: 'all 0.3s',
                    }}
                >
                    {status === 'analyzing' ? 'Processing...' : status === 'done' ? 'Run Again' : 'Start Analysis'}
                </button>
            </div>

            <div style={{
                background: 'var(--zy-gray-card)',
                border: '1px solid var(--zy-gray-border)',
                borderRadius: 8,
                padding: 20,
                minHeight: 120,
                position: 'relative',
                overflow: 'hidden',
            }}>
                {status === 'idle' && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--zy-gray-text)', fontSize: 13 }}>
                        Waiting for input...
                    </div>
                )}
                
                {status === 'analyzing' && (
                    <div style={{ padding: '20px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12, color: 'var(--zy-white)' }}>
                            <span>Analyzing data streams...</span>
                            <span>{progress}%</span>
                        </div>
                        <div style={{ height: 4, background: '#222', borderRadius: 2, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${progress}%`, background: '#4ecdc4', transition: 'width 0.3s' }} />
                        </div>
                    </div>
                )}

                {status === 'done' && (
                    <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#4ecdc4', lineHeight: 1.6 }}>
                        <span style={{ color: '#888' }}>&gt; </span>
                        {output}
                        <span style={{ animation: 'cursorBlink 1s step-end infinite' }}>_</span>
                    </div>
                )}
            </div>
        </div>
    );
}
