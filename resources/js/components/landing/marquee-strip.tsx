const KEYWORDS = [
    'IoT Solutions',
    'React',
    'Laravel',
    'Cloud Infrastructure',
    'AI & ML',
    'Embedded Systems',
    'TypeScript',
    'Digital Twins',
    'Edge Computing',
    'Full Stack',
    'UI/UX Design',
    'DevOps',
    'Smart Devices',
    'Blockchain',
    'APIs',
    'Mobile Apps',
];

export default function MarqueeStrip() {
    const separator = (
        <span
            style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                backgroundColor: 'var(--zy-white)',
                borderRadius: '50%',
                margin: '0 32px',
                flexShrink: 0,
            }}
        />
    );

    const items = KEYWORDS.map((kw, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--zy-gray-text)',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#666'; }}
            >
                {kw}
            </span>
            {separator}
        </span>
    ));

    return (
        <div
            style={{
                width: '100%',
                overflow: 'hidden',
                borderTop: '1px solid var(--zy-gray-border)',
                borderBottom: '1px solid #1a1a1a',
                padding: '20px 0',
                background: 'var(--zy-black)',
            }}
        >
            <div className="marquee-track">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {items}
                </div>
                {/* Duplicate for seamless loop */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {items}
                </div>
            </div>
        </div>
    );
}
