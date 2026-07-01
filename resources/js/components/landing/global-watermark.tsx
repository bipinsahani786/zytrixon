import { useTheme } from '@/components/landing/theme-provider';

export default function GlobalWatermark() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* The giant Z watermark */}
            <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(200px, 40vw, 800px)',
                fontWeight: 900,
                color: isLight ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)',
                lineHeight: 1,
                userSelect: 'none',
                transform: 'rotate(-5deg) scale(1.2)',
                whiteSpace: 'nowrap',
                position: 'absolute'
            }}>
                Z
            </div>
            {/* ZYTRIXON text watermark */}
            <div style={{
                position: 'absolute',
                left: '-10%',
                top: '50%',
                transform: 'translateY(-50%) rotate(-90deg)',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(80px, 15vw, 200px)',
                fontWeight: 900,
                color: isLight ? 'rgba(0,0,0,0.015)' : 'rgba(255,255,255,0.015)',
                lineHeight: 1,
                userSelect: 'none',
                letterSpacing: '0.2em'
            }}>
                ZYTRIXON
            </div>
            {/* Top Frequency Watermark */}
            <div style={{
                position: 'absolute',
                top: '5%',
                left: '-5%',
                width: '110%',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(40px, 8vw, 120px)',
                fontWeight: 900,
                color: isLight ? 'rgba(0,0,0,0.015)' : 'rgba(255,255,255,0.015)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
                letterSpacing: '0.2em',
                whiteSpace: 'nowrap',
                display: 'flex',
                justifyContent: 'space-between',
                transform: 'rotate(-2deg)'
            }}>
                <span>ZYTRIXON</span>
                <span>ZYTRIXON</span>
                <span>ZYTRIXON</span>
                <span>ZYTRIXON</span>
                <span>ZYTRIXON</span>
            </div>
        </div>
    );
}
