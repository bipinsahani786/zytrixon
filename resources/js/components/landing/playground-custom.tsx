import { useState } from 'react';

const STACKS = {
    frontend: ['React', 'Vue', 'Next.js', 'Angular'],
    backend: ['Node.js', 'Laravel', 'Python', 'Java'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
};

export default function PlaygroundCustom() {
    const [selections, setSelections] = useState({
        frontend: 'React',
        backend: 'Laravel',
        database: 'PostgreSQL'
    });

    const handleSelect = (category: keyof typeof STACKS, item: string) => {
        setSelections(prev => ({ ...prev, [category]: item }));
    };

    return (
        <div style={{
            background: 'var(--zy-black)',
            border: '1px solid var(--zy-gray-border)',
            borderRadius: 12,
            padding: 32,
            color: 'var(--zy-white)',
        }}>
            <div style={{ marginBottom: 24, textAlign: 'center' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, marginBottom: 4 }}>Stack Architect</h4>
                <p style={{ fontSize: 13, color: 'var(--zy-gray-text)' }}>Build your custom software architecture</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                {Object.entries(STACKS).map(([category, items]) => (
                    <div key={category}>
                        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: 'var(--zy-gray-text)', marginBottom: 12, letterSpacing: '0.05em' }}>
                            {category}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {items.map(item => (
                                <button
                                    key={item}
                                    onClick={() => handleSelect(category as keyof typeof STACKS, item)}
                                    style={{
                                        padding: '10px',
                                        background: selections[category as keyof typeof STACKS] === item ? 'rgba(255,255,255,0.1)' : 'var(--zy-gray-card)',
                                        border: `1px solid ${selections[category as keyof typeof STACKS] === item ? '#fff' : 'var(--zy-gray-border)'}`,
                                        borderRadius: 6,
                                        color: selections[category as keyof typeof STACKS] === item ? '#fff' : 'var(--zy-gray-text)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        textAlign: 'left',
                                        fontSize: 13,
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: 32,
                padding: 20,
                background: 'var(--zy-gray-card)',
                borderRadius: 8,
                border: '1px dashed var(--zy-gray-border)',
                textAlign: 'center'
            }}>
                <div style={{ fontSize: 12, color: 'var(--zy-gray-text)', marginBottom: 12 }}>YOUR ARCHITECTURE</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                    <div style={{ padding: '8px 16px', background: '#222', borderRadius: 4, fontSize: 13 }}>{selections.frontend}</div>
                    <div style={{ color: '#666' }}>⇄</div>
                    <div style={{ padding: '8px 16px', background: '#222', borderRadius: 4, fontSize: 13 }}>{selections.backend}</div>
                    <div style={{ color: '#666' }}>⇄</div>
                    <div style={{ padding: '8px 16px', background: '#222', borderRadius: 4, fontSize: 13 }}>{selections.database}</div>
                </div>
            </div>
        </div>
    );
}
