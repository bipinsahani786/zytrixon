import { useState, useRef } from 'react';

interface AppElement {
    id: string;
    type: 'header' | 'button' | 'text' | 'image' | 'input' | 'card';
    label: string;
    y: number;
}

const PALETTE = [
    { type: 'header' as const, label: 'Header', icon: '📝' },
    { type: 'button' as const, label: 'Button', icon: '🔲' },
    { type: 'text' as const, label: 'Text', icon: '📄' },
    { type: 'image' as const, label: 'Image', icon: '🖼️' },
    { type: 'input' as const, label: 'Input', icon: '⌨️' },
    { type: 'card' as const, label: 'Card', icon: '📦' },
];

export default function PlaygroundMobile() {
    const [elements, setElements] = useState<AppElement[]>([
        { id: '1', type: 'header', label: 'My App', y: 0 },
        { id: '2', type: 'text', label: 'Welcome to the app!', y: 1 },
        { id: '3', type: 'button', label: 'Get Started', y: 2 },
    ]);
    const nextId = useRef(4);

    const addElement = (type: AppElement['type']) => {
        setElements((prev) => [
            ...prev,
            {
                id: String(nextId.current++),
                type,
                label:
                    type === 'header'
                        ? 'New Header'
                        : type === 'button'
                          ? 'Click Me'
                          : type === 'text'
                            ? 'Some text here'
                            : type === 'input'
                              ? 'Enter value...'
                              : type === 'card'
                                ? 'Card Title'
                                : 'Image',
                y: prev.length,
            },
        ]);
    };

    const removeElement = (id: string) => {
        setElements((prev) => prev.filter((e) => e.id !== id));
    };

    const renderElement = (el: AppElement) => {
        const common = {
            width: '100%',
            fontFamily: 'sans-serif',
            boxSizing: 'border-box' as const,
        };

        switch (el.type) {
            case 'header':
                return (
                    <div
                        style={{
                            ...common,
                            fontSize: 16,
                            fontWeight: 700,
                            color: 'var(--zy-white)',
                            padding: '8px 0',
                            borderBottom: '1px solid #222',
                        }}
                    >
                        {el.label}
                    </div>
                );
            case 'button':
                return (
                    <div
                        style={{
                            ...common,
                            background: '#fff',
                            color: '#000',
                            textAlign: 'center',
                            padding: '10px',
                            fontSize: 12,
                            fontWeight: 700,
                        }}
                    >
                        {el.label}
                    </div>
                );
            case 'text':
                return (
                    <div
                        style={{
                            ...common,
                            fontSize: 12,
                            color: '#999',
                            padding: '6px 0',
                            lineHeight: 1.5,
                        }}
                    >
                        {el.label}
                    </div>
                );
            case 'image':
                return (
                    <div
                        style={{
                            ...common,
                            height: 60,
                            background:
                                'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#333',
                            fontSize: 20,
                        }}
                    >
                        🖼️
                    </div>
                );
            case 'input':
                return (
                    <div
                        style={{
                            ...common,
                            background: '#111',
                            border: '1px solid #333',
                            padding: '8px',
                            fontSize: 11,
                            color: 'var(--zy-gray-text)',
                        }}
                    >
                        {el.label}
                    </div>
                );
            case 'card':
                return (
                    <div
                        style={{
                            ...common,
                            background: '#111',
                            border: '1px solid #222',
                            padding: 12,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 12,
                                fontWeight: 600,
                                color: 'var(--zy-white)',
                            }}
                        >
                            {el.label}
                        </div>
                        <div
                            style={{
                                fontSize: 10,
                                color: 'var(--zy-gray-text)',
                                marginTop: 4,
                            }}
                        >
                            Card content goes here
                        </div>
                    </div>
                );
            default:
                return null;
        }
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
                📱 APP UI BUILDER — Click components to add to the phone
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 180px',
                    minHeight: 340,
                }}
            >
                {/* Phone Frame */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '20px 16px',
                    }}
                >
                    <div
                        style={{
                            width: 200,
                            height: 380,
                            border: '3px solid #333',
                            borderRadius: 24,
                            background: 'var(--zy-black)',
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        {/* Status bar */}
                        <div
                            style={{
                                height: 24,
                                background: 'var(--zy-black)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 9,
                                color: 'var(--zy-gray-text)',
                            }}
                        >
                            9:41 AM
                        </div>

                        {/* Notch */}
                        <div
                            style={{
                                width: 80,
                                height: 20,
                                background: 'var(--zy-black)',
                                borderRadius: '0 0 12px 12px',
                                margin: '-20px auto 0',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        />

                        {/* Content */}
                        <div
                            style={{
                                padding: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 8,
                                maxHeight: 320,
                                overflowY: 'auto',
                            }}
                        >
                            {elements.map((el) => (
                                <div
                                    key={el.id}
                                    style={{
                                        position: 'relative',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => removeElement(el.id)}
                                >
                                    {renderElement(el)}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: -4,
                                            right: -4,
                                            width: 14,
                                            height: 14,
                                            borderRadius: '50%',
                                            background: '#333',
                                            color: '#999',
                                            fontSize: 8,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: 0.6,
                                        }}
                                    >
                                        ✕
                                    </div>
                                </div>
                            ))}
                            {elements.length === 0 && (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        color: '#333',
                                        fontSize: 11,
                                        padding: '40px 0',
                                    }}
                                >
                                    Add components →
                                </div>
                            )}
                        </div>

                        {/* Bottom bar */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 6,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 60,
                                height: 4,
                                background: '#333',
                                borderRadius: 2,
                            }}
                        />
                    </div>
                </div>

                {/* Component Palette */}
                <div
                    style={{
                        borderLeft: '1px solid var(--zy-gray-border)',
                        padding: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                    }}
                >
                    <div
                        style={{
                            fontSize: 10,
                            color: 'var(--zy-gray-text)',
                            marginBottom: 4,
                            fontWeight: 600,
                        }}
                    >
                        COMPONENTS
                    </div>
                    {PALETTE.map((p) => (
                        <button
                            key={p.type}
                            onClick={() => addElement(p.type)}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--zy-gray-border)',
                                padding: '8px 10px',
                                color: 'var(--zy-white)',
                                cursor: 'pointer',
                                fontSize: 11,
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.borderColor =
                                    'rgba(255,255,255,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.borderColor =
                                    'var(--zy-gray-border)';
                            }}
                        >
                            <span>{p.icon}</span>
                            <span>{p.label}</span>
                        </button>
                    ))}
                    <button
                        onClick={() => setElements([])}
                        style={{
                            marginTop: 8,
                            background: 'transparent',
                            border: '1px solid rgba(255,100,100,0.3)',
                            padding: '6px',
                            color: '#ff6b6b',
                            cursor: 'pointer',
                            fontSize: 10,
                        }}
                    >
                        🗑️ Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}
