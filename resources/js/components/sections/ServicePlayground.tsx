import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

// Mini Playgrounds
const WebDevPlayground = () => {
    const [code, setCode] = useState('');
    const fullCode = `function App() {\n  return (\n    <div className="zy-hero">\n      <h1>Next-Gen Web</h1>\n      <p>Blazing fast performance.</p>\n    </div>\n  );\n}`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(fullCode.substring(0, i));
            i++;

            if (i > fullCode.length) {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{ display: 'flex', gap: 24, height: 400, flexWrap: 'wrap' }}
        >
            {/* Editor */}
            <div
                style={{
                    flex: 1,
                    minWidth: 300,
                    background: '#1e1e1e',
                    borderRadius: 12,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <div
                    style={{
                        padding: '12px 16px',
                        background: '#252526',
                        display: 'flex',
                        gap: 8,
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            background: '#ff5f56',
                        }}
                    />
                    <div
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            background: '#ffbd2e',
                        }}
                    />
                    <div
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            background: '#27c93f',
                        }}
                    />
                    <span
                        style={{
                            marginLeft: 16,
                            color: '#858585',
                            fontSize: 13,
                            fontFamily: 'monospace',
                        }}
                    >
                        App.tsx
                    </span>
                </div>
                <pre
                    style={{
                        padding: 24,
                        color: '#d4d4d4',
                        fontFamily: 'monospace',
                        fontSize: 14,
                        margin: 0,
                        overflow: 'auto',
                    }}
                >
                    <code>
                        <span style={{ color: '#569cd6' }}>function</span>{' '}
                        <span style={{ color: '#dcdcaa' }}>App</span>() {'{\n'}
                        <span style={{ color: '#c586c0' }}> return</span> (\n
                        <span style={{ color: '#808080' }}>
                            {' '}
                            // Real-time preview rendering
                        </span>
                        \n
                        {code.substring(21)}
                        <span
                            style={{
                                borderRight: '2px solid #007acc',
                                animation: 'blink 1s infinite',
                            }}
                        />
                    </code>
                </pre>
            </div>
            {/* Preview */}
            <div
                style={{
                    flex: 1,
                    minWidth: 300,
                    background: '#ffffff',
                    borderRadius: 12,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        padding: '12px 16px',
                        background: '#f3f4f6',
                        borderBottom: '1px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            padding: '4px 12px',
                            background: '#fff',
                            borderRadius: 4,
                            fontSize: 12,
                            color: '#6b7280',
                            flex: 1,
                        }}
                    >
                        localhost:3000
                    </div>
                </div>
                <div
                    style={{
                        flex: 1,
                        padding: 40,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#000',
                    }}
                >
                    <div
                        style={{
                            opacity: code.length > 50 ? 1 : 0,
                            transform: `translateY(${code.length > 50 ? 0 : 20}px)`,
                            transition: 'all 0.5s ease',
                            textAlign: 'center',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: 36,
                                fontWeight: 800,
                                marginBottom: 16,
                            }}
                        >
                            Next-Gen Web
                        </h1>
                        <p style={{ fontSize: 18, color: '#4b5563' }}>
                            Blazing fast performance.
                        </p>
                        <button
                            style={{
                                marginTop: 24,
                                padding: '12px 24px',
                                background: '#000',
                                color: '#fff',
                                borderRadius: 8,
                                fontWeight: 600,
                                border: 'none',
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
        </div>
    );
};

const AiPlayground = () => {
    const [messages, setMessages] = useState<{ role: string; text: string }[]>(
        [],
    );
    const [input, setInput] = useState('');

    useEffect(() => {
        setMessages([
            {
                role: 'ai',
                text: 'Hello! I am Zytrixon AI. Try asking me to "Analyze Q3 sales data".',
            },
        ]);
    }, []);

    const handleSend = () => {
        if (!input) {
            return;
        }

        setMessages((p) => [...p, { role: 'user', text: input }]);
        const currentInput = input;
        setInput('');

        setTimeout(() => {
            setMessages((p) => [
                ...p,
                { role: 'ai', text: 'Analyzing database...' },
            ]);

            setTimeout(() => {
                if (currentInput.toLowerCase().includes('sales')) {
                    setMessages((p) => {
                        const newMsg = [...p];
                        newMsg[newMsg.length - 1] = {
                            role: 'ai',
                            text: 'Q3 Sales up by 24%. Predicted Q4 growth: 15% based on current pipeline. Key driver: Enterprise division.',
                        };

                        return newMsg;
                    });
                } else {
                    setMessages((p) => {
                        const newMsg = [...p];
                        newMsg[newMsg.length - 1] = {
                            role: 'ai',
                            text: 'Action completed securely. System optimized.',
                        };

                        return newMsg;
                    });
                }
            }, 1500);
        }, 500);
    };

    return (
        <div
            style={{
                height: 400,
                background: '#111827',
                borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    padding: 20,
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.02)',
                }}
            >
                <h3
                    style={{
                        margin: 0,
                        color: '#fff',
                        fontSize: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            width: 24,
                            height: 24,
                            background: '#6366f1',
                            borderRadius: '50%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                        >
                            <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                            <path d="M12 8v14" />
                            <path d="M8 12h8" />
                        </svg>
                    </span>
                    Zytrixon Enterprise AI
                </h3>
            </div>
            <div
                style={{
                    flex: 1,
                    padding: 20,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                }}
            >
                {messages.map((m, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'flex',
                            justifyContent:
                                m.role === 'user' ? 'flex-end' : 'flex-start',
                        }}
                    >
                        <div
                            style={{
                                maxWidth: '80%',
                                padding: '12px 16px',
                                borderRadius: 12,
                                background:
                                    m.role === 'user'
                                        ? '#6366f1'
                                        : 'rgba(255,255,255,0.05)',
                                color: '#fff',
                                fontSize: 14,
                                lineHeight: 1.5,
                                borderTopRightRadius:
                                    m.role === 'user' ? 4 : 12,
                                borderTopLeftRadius: m.role === 'ai' ? 4 : 12,
                            }}
                        >
                            {m.text}
                        </div>
                    </div>
                ))}
            </div>
            <div
                style={{
                    padding: 20,
                    background: 'rgba(255,255,255,0.02)',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                }}
            >
                <div style={{ display: 'flex', gap: 12 }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a command..."
                        style={{
                            flex: 1,
                            background: 'rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '12px 16px',
                            borderRadius: 8,
                            color: '#fff',
                            outline: 'none',
                        }}
                    />
                    <button
                        onClick={handleSend}
                        style={{
                            background: '#6366f1',
                            color: '#fff',
                            border: 'none',
                            padding: '0 24px',
                            borderRadius: 8,
                            fontWeight: 600,
                            cursor: 'pointer',
                        }}
                    >
                        Run
                    </button>
                </div>
            </div>
        </div>
    );
};

const AppPlayground = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div
            style={{
                height: 500,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--zy-black)',
                borderRadius: 16,
            }}
        >
            {/* Mobile Device Frame */}
            <div
                style={{
                    width: 300,
                    height: 600,
                    border: '8px solid var(--zy-gray-dark)',
                    borderRadius: 40,
                    background: '#000',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        width: 100,
                        height: 24,
                        background: 'var(--zy-gray-dark)',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        zIndex: 10,
                    }}
                />
                <div
                    style={{
                        flex: 1,
                        padding: 24,
                        paddingTop: 60,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            color: 'var(--zy-white)',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 20,
                                fontWeight: 700,
                                fontFamily: 'var(--font-heading)',
                            }}
                        >
                            Good Morning
                        </div>
                        <div
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: '50%',
                                background: 'var(--zy-blue)',
                            }}
                        />
                    </div>
                    {activeTab === 'home' && (
                        <>
                            <div
                                style={{
                                    padding: 20,
                                    background: 'var(--zy-blue)',
                                    borderRadius: 16,
                                    color: '#fff',
                                }}
                            >
                                <div style={{ fontSize: 14, opacity: 0.8 }}>
                                    Total Balance
                                </div>
                                <div style={{ fontSize: 32, fontWeight: 800 }}>
                                    $12,450.00
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: 12,
                                }}
                            >
                                <div
                                    style={{
                                        background: 'var(--zy-gray-card)',
                                        padding: 16,
                                        borderRadius: 12,
                                        color: 'var(--zy-white)',
                                        textAlign: 'center',
                                    }}
                                >
                                    Send
                                </div>
                                <div
                                    style={{
                                        background: 'var(--zy-gray-card)',
                                        padding: 16,
                                        borderRadius: 12,
                                        color: 'var(--zy-white)',
                                        textAlign: 'center',
                                    }}
                                >
                                    Receive
                                </div>
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    background: 'var(--zy-gray-card)',
                                    borderRadius: 16,
                                    padding: 16,
                                    color: 'var(--zy-white)',
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 600,
                                        marginBottom: 12,
                                    }}
                                >
                                    Recent Activity
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: 12,
                                        alignItems: 'center',
                                        marginBottom: 12,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 8,
                                            background: '#22c55e',
                                        }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <div
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                            }}
                                        >
                                            Starbucks
                                        </div>
                                        <div
                                            style={{
                                                fontSize: 12,
                                                color: 'var(--zy-gray-text)',
                                            }}
                                        >
                                            Today, 9:41 AM
                                        </div>
                                    </div>
                                    <div style={{ fontWeight: 600 }}>
                                        -$4.50
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab === 'stats' && (
                        <div
                            style={{
                                flex: 1,
                                background: 'var(--zy-gray-card)',
                                borderRadius: 16,
                                padding: 16,
                                color: 'var(--zy-white)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <svg
                                    width="64"
                                    height="64"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--zy-blue)"
                                    strokeWidth="2"
                                >
                                    <path d="M18 20V10M12 20V4M6 20v-6" />
                                </svg>
                                <div style={{ marginTop: 16, fontWeight: 600 }}>
                                    Analytics Overview
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Bottom Nav */}
                <div
                    style={{
                        height: 60,
                        background: 'var(--zy-gray-dark)',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingBottom: 12,
                    }}
                >
                    <div
                        onClick={() => setActiveTab('home')}
                        style={{
                            cursor: 'pointer',
                            color:
                                activeTab === 'home'
                                    ? 'var(--zy-blue)'
                                    : 'var(--zy-gray-text)',
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                    </div>
                    <div
                        onClick={() => setActiveTab('stats')}
                        style={{
                            cursor: 'pointer',
                            color:
                                activeTab === 'stats'
                                    ? 'var(--zy-blue)'
                                    : 'var(--zy-gray-text)',
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M18 20V10M12 20V4M6 20v-6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

const IotPlayground = () => {
    const [temp, setTemp] = useState(72);
    const [hum, setHum] = useState(45);
    useEffect(() => {
        const t = setInterval(() => {
            setTemp((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
            setHum((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
        }, 1000);

        return () => clearInterval(t);
    }, []);

    return (
        <div
            style={{
                height: 400,
                padding: 32,
                background: 'var(--zy-black)',
                borderRadius: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
            }}
        >
            <div
                style={{
                    color: 'var(--zy-white)',
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                }}
            >
                IoT Control Center
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <div
                    style={{
                        flex: 1,
                        minWidth: 200,
                        background: 'var(--zy-gray-card)',
                        padding: 24,
                        borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.05)',
                    }}
                >
                    <div
                        style={{
                            color: 'var(--zy-gray-text)',
                            fontSize: 14,
                            marginBottom: 8,
                        }}
                    >
                        Core Temperature
                    </div>
                    <div
                        style={{
                            color: 'var(--zy-blue)',
                            fontSize: 48,
                            fontWeight: 900,
                        }}
                    >
                        {temp}°F
                    </div>
                    <div
                        style={{ color: '#22c55e', fontSize: 12, marginTop: 8 }}
                    >
                        ● Online
                    </div>
                </div>
                <div
                    style={{
                        flex: 1,
                        minWidth: 200,
                        background: 'var(--zy-gray-card)',
                        padding: 24,
                        borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.05)',
                    }}
                >
                    <div
                        style={{
                            color: 'var(--zy-gray-text)',
                            fontSize: 14,
                            marginBottom: 8,
                        }}
                    >
                        Ambient Humidity
                    </div>
                    <div
                        style={{
                            color: 'var(--zy-blue)',
                            fontSize: 48,
                            fontWeight: 900,
                        }}
                    >
                        {hum}%
                    </div>
                    <div
                        style={{ color: '#22c55e', fontSize: 12, marginTop: 8 }}
                    >
                        ● Online
                    </div>
                </div>
                <div
                    style={{
                        flex: 1,
                        minWidth: 200,
                        background: 'var(--zy-gray-card)',
                        padding: 24,
                        borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        style={{
                            padding: 16,
                            background: 'rgba(239, 68, 68, 0.1)',
                            color: '#ef4444',
                            border: '1px solid #ef4444',
                            borderRadius: 8,
                            fontWeight: 700,
                            cursor: 'pointer',
                        }}
                    >
                        EMERGENCY SHUTOFF
                    </button>
                </div>
            </div>
        </div>
    );
};

const CustomSoftwarePlayground = () => {
    return (
        <div
            style={{
                height: 400,
                padding: 32,
                background: 'var(--zy-black)',
                borderRadius: 16,
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 24,
            }}
        >
            {/* Sidebar */}
            <div
                style={{
                    background: 'var(--zy-gray-card)',
                    borderRadius: 12,
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                }}
            >
                <div
                    style={{
                        color: 'var(--zy-white)',
                        fontWeight: 700,
                        marginBottom: 16,
                        fontFamily: 'var(--font-heading)',
                    }}
                >
                    Enterprise ERP
                </div>
                {[
                    'Dashboard',
                    'Analytics',
                    'Inventory',
                    'Customers',
                    'Settings',
                ].map((item) => (
                    <div
                        key={item}
                        style={{
                            padding: '8px 12px',
                            background:
                                item === 'Dashboard'
                                    ? 'var(--zy-blue)'
                                    : 'transparent',
                            color:
                                item === 'Dashboard'
                                    ? '#fff'
                                    : 'var(--zy-gray-text)',
                            borderRadius: 6,
                            fontSize: 14,
                            cursor: 'pointer',
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            {/* Main */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 16,
                    }}
                >
                    {['Total Revenue', 'Active Users', 'Open Tickets'].map(
                        (stat, i) => (
                            <div
                                key={stat}
                                style={{
                                    background: 'var(--zy-gray-card)',
                                    padding: 16,
                                    borderRadius: 12,
                                }}
                            >
                                <div
                                    style={{
                                        color: 'var(--zy-gray-text)',
                                        fontSize: 12,
                                    }}
                                >
                                    {stat}
                                </div>
                                <div
                                    style={{
                                        color: 'var(--zy-white)',
                                        fontSize: 24,
                                        fontWeight: 700,
                                        marginTop: 8,
                                    }}
                                >
                                    {i === 0
                                        ? '$1.2M'
                                        : i === 1
                                          ? '45.2K'
                                          : '12'}
                                </div>
                            </div>
                        ),
                    )}
                </div>
                <div
                    style={{
                        flex: 1,
                        background: 'var(--zy-gray-card)',
                        borderRadius: 12,
                        padding: 16,
                    }}
                >
                    <div
                        style={{
                            color: 'var(--zy-white)',
                            fontWeight: 600,
                            marginBottom: 16,
                        }}
                    >
                        Revenue Growth
                    </div>
                    {/* Fake Chart */}
                    <div
                        style={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: 8,
                        }}
                    >
                        {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: 1,
                                    height: `${h}%`,
                                    background: 'var(--zy-blue)',
                                    borderRadius: '4px 4px 0 0',
                                    opacity: 0.8,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const DigitalMarketingPlayground = () => {
    const [traffic, setTraffic] = useState(12400);
    useEffect(() => {
        const t = setInterval(
            () => setTraffic((p) => p + Math.floor(Math.random() * 50)),
            1000,
        );

        return () => clearInterval(t);
    }, []);

    return (
        <div
            style={{
                height: 400,
                padding: 32,
                background: 'var(--zy-black)',
                borderRadius: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    color: 'var(--zy-blue)',
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 8,
                }}
            >
                Live Traffic Monitor
            </div>
            <div
                style={{
                    color: 'var(--zy-white)',
                    fontSize: 72,
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                }}
            >
                {traffic.toLocaleString()}
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    style={{ transform: 'translateY(-8px)' }}
                >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
            </div>
            <p style={{ color: 'var(--zy-gray-text)', marginTop: 16 }}>
                Our SEO strategies consistently drive high-quality inbound
                traffic.
            </p>
        </div>
    );
};

export default function ServicePlayground({
    serviceSlug,
}: {
    serviceSlug: string;
}) {
    return (
        <section
            className="zy-section"
            style={{ background: 'var(--zy-black)' }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <span className="zy-section-label">Interactive Demo</span>
                    <h2 className="zy-section-title">Experience It Yourself</h2>
                    <p
                        style={{
                            fontSize: 18,
                            color: 'var(--zy-gray-text)',
                            maxWidth: 600,
                            margin: '0 auto',
                        }}
                    >
                        See our capabilities in action through this live
                        simulation.
                    </p>
                </div>

                <div
                    style={{
                        padding: 8,
                        background: 'var(--zy-black)',
                        borderRadius: 24,
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    }}
                >
                    {serviceSlug === 'web-development' && <WebDevPlayground />}
                    {serviceSlug === 'ai-automation' && <AiPlayground />}
                    {serviceSlug === 'app-development' && <AppPlayground />}
                    {serviceSlug === 'iot-solutions' && <IotPlayground />}
                    {serviceSlug === 'custom-software' && (
                        <CustomSoftwarePlayground />
                    )}
                    {serviceSlug === 'digital-marketing' && (
                        <DigitalMarketingPlayground />
                    )}
                </div>
            </div>
        </section>
    );
}
