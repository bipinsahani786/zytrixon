import { useState, useCallback } from 'react';

const DEFAULT_HTML = `<div class="card">
  <h2>Hello World</h2>
  <p>Edit this code!</p>
  <button>Click Me</button>
</div>`;

const DEFAULT_CSS = `.card {
  padding: 24px;
  background: #111;
  border: 1px solid #333;
  color: #fff;
  font-family: sans-serif;
  text-align: center;
}
.card h2 { 
  margin: 0 0 8px;
  font-size: 20px;
}
.card button {
  margin-top: 12px;
  padding: 8px 20px;
  background: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  font-weight: 700;
}`;

export default function PlaygroundWebApp() {
    const [html, setHtml] = useState(DEFAULT_HTML);
    const [css, setCss] = useState(DEFAULT_CSS);
    const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');

    const getPreview = useCallback(() => {
        return `<!DOCTYPE html><html><head><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100%;background:#0a0a0a;}${css}</style></head><body>${html}</body></html>`;
    }, [html, css]);

    return (
        <div style={{
            background: 'var(--zy-gray-card)',
            border: '1px solid var(--zy-gray-border)',
            padding: 0,
            overflow: 'hidden',
        }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--zy-gray-text)', padding: '12px 16px', borderBottom: '1px solid var(--zy-gray-border)' }}>
                💻 LIVE CODE EDITOR — Edit and see changes instantly
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 280 }}>
                {/* Editor */}
                <div style={{ borderRight: '1px solid var(--zy-gray-border)', display: 'flex', flexDirection: 'column' }}>
                    {/* Tabs */}
                    <div style={{ display: 'flex', borderBottom: '1px solid var(--zy-gray-border)' }}>
                        {(['html', 'css'] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    flex: 1,
                                    padding: '8px 0',
                                    background: activeTab === tab ? 'rgba(255,255,255,0.04)' : 'transparent',
                                    border: 'none',
                                    borderBottom: activeTab === tab ? '2px solid var(--zy-white)' : '2px solid transparent',
                                    color: activeTab === tab ? 'var(--zy-white)' : 'var(--zy-gray-text)',
                                    fontSize: 11,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    cursor: 'pointer',
                                    fontFamily: 'monospace',
                                }}
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <textarea
                        value={activeTab === 'html' ? html : css}
                        onChange={(e) => activeTab === 'html' ? setHtml(e.target.value) : setCss(e.target.value)}
                        spellCheck={false}
                        style={{
                            flex: 1,
                            background: 'transparent',
                            color: 'var(--zy-white)',
                            border: 'none',
                            padding: 16,
                            fontFamily: 'monospace',
                            fontSize: 11,
                            lineHeight: 1.6,
                            resize: 'none',
                            outline: 'none',
                            minHeight: 200,
                        }}
                    />
                </div>

                {/* Preview */}
                <div style={{ position: 'relative', background: 'var(--zy-black)' }}>
                    <div style={{
                        position: 'absolute', top: 8, right: 8,
                        fontSize: 9, color: '#555', fontFamily: 'monospace',
                        textTransform: 'uppercase', letterSpacing: '0.1em',
                    }}>
                        PREVIEW
                    </div>
                    <iframe
                        srcDoc={getPreview()}
                        title="Preview"
                        sandbox="allow-scripts"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            minHeight: 250,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
