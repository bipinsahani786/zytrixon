import { useState, useEffect, useRef } from 'react';

interface Sensor {
    id: string;
    label: string;
    icon: string;
    unit: string;
    min: number;
    max: number;
    value: number;
    active: boolean;
    color: string;
}

const INITIAL_SENSORS: Sensor[] = [
    { id: 'temp', label: 'Temperature', icon: '🌡️', unit: '°C', min: 18, max: 45, value: 27, active: true, color: '#ff6b6b' },
    { id: 'humid', label: 'Humidity', icon: '💧', unit: '%', min: 20, max: 95, value: 65, active: true, color: '#4ecdc4' },
    { id: 'motion', label: 'Motion', icon: '📡', unit: '', min: 0, max: 1, value: 1, active: true, color: '#ffe66d' },
    { id: 'light', label: 'Light', icon: '☀️', unit: 'lux', min: 0, max: 1000, value: 450, active: false, color: '#a8e6cf' },
    { id: 'pressure', label: 'Pressure', icon: '🔵', unit: 'hPa', min: 980, max: 1040, value: 1013, active: true, color: '#7c5ce0' },
    { id: 'gas', label: 'Gas', icon: '🌫️', unit: 'ppm', min: 0, max: 500, value: 42, active: false, color: '#ff8a5c' },
];

export default function PlaygroundIoT() {
    const [sensors, setSensors] = useState(INITIAL_SENSORS);
    const [logs, setLogs] = useState<string[]>(['[System] IoT Dashboard initialized...']);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Animate sensor data
    useEffect(() => {
        const interval = setInterval(() => {
            setSensors(prev => prev.map(s => {
                if (!s.active) return s;
                const delta = (Math.random() - 0.5) * (s.max - s.min) * 0.05;
                const newVal = Math.max(s.min, Math.min(s.max, s.value + delta));
                return { ...s, value: Math.round(newVal * 10) / 10 };
            }));
        }, 800);

        return () => clearInterval(interval);
    }, []);

    // Draw connection lines
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const w = canvas.width = canvas.offsetWidth;
        const h = canvas.height = canvas.offsetHeight;

        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 1;

        // Draw circuit-like connection lines
        const activeSensors = sensors.filter(s => s.active);
        const centerX = w / 2;
        const centerY = h / 2;

        activeSensors.forEach((_, i) => {
            const angle = (i / activeSensors.length) * Math.PI * 2 - Math.PI / 2;
            const x = centerX + Math.cos(angle) * 60;
            const y = centerY + Math.sin(angle) * 40;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();

            // Pulse dot
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.fill();
        });

        // Central hub
        ctx.beginPath();
        ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.stroke();
    }, [sensors]);

    const toggleSensor = (id: string) => {
        setSensors(prev => prev.map(s => {
            if (s.id !== id) return s;
            const next = { ...s, active: !s.active };
            setLogs(l => [`[${new Date().toLocaleTimeString()}] ${s.label} ${next.active ? 'ACTIVATED' : 'DEACTIVATED'}`, ...l.slice(0, 6)]);
            return next;
        }));
    };

    return (
        <div style={{
            background: 'var(--zy-gray-card)',
            border: '1px solid var(--zy-gray-border)',
            padding: 24,
            position: 'relative',
        }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--zy-gray-text)', marginBottom: 16 }}>
                ⚡ LIVE IoT DASHBOARD — Click sensors to toggle
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 16 }}>
                {sensors.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => toggleSensor(s.id)}
                        style={{
                            background: s.active ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)',
                            border: `1px solid ${s.active ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)'}`,
                            padding: '12px 10px',
                            cursor: 'pointer',
                            textAlign: 'left',
                            color: 'var(--zy-white)',
                            opacity: s.active ? 1 : 0.4,
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <div style={{ fontSize: 16, marginBottom: 4 }}>{s.icon}</div>
                        <div style={{ fontSize: 10, color: 'var(--zy-gray-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginTop: 4 }}>
                            {s.active ? `${s.value}${s.unit}` : 'OFF'}
                        </div>
                        {/* Mini bar */}
                        {s.active && (
                            <div style={{ height: 2, background: 'rgba(255,255,255,0.1)', marginTop: 8 }}>
                                <div style={{
                                    height: '100%',
                                    width: `${((s.value - s.min) / (s.max - s.min)) * 100}%`,
                                    background: s.color,
                                    transition: 'width 0.5s ease',
                                }} />
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Connection canvas */}
            <canvas ref={canvasRef} style={{ width: '100%', height: 80, display: 'block', marginBottom: 12 }} />

            {/* Live log */}
            <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '8px 12px',
                fontFamily: 'monospace',
                fontSize: 10,
                color: 'var(--zy-gray-text)',
                maxHeight: 80,
                overflow: 'hidden',
                lineHeight: 1.8,
            }}>
                {logs.map((log, i) => (
                    <div key={i} style={{ opacity: 1 - i * 0.12 }}>{log}</div>
                ))}
            </div>
        </div>
    );
}
