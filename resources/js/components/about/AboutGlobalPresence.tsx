import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

interface TimeZoneClock {
    city: string;
    region: string;
    tz: string;
    utcOffset: string;
    primary?: boolean;
}

export default function AboutGlobalPresence() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const [times, setTimes] = useState<Record<string, string>>({});

    const timezones: TimeZoneClock[] = [
        {
            city: 'Patna',
            region: 'India HQ',
            tz: 'Asia/Kolkata',
            utcOffset: 'UTC+5:30',
            primary: true,
        },
        {
            city: 'New Delhi',
            region: 'NCR Hub',
            tz: 'Asia/Kolkata',
            utcOffset: 'UTC+5:30',
        },
        {
            city: 'Dubai',
            region: 'Gulf / EMEA',
            tz: 'Asia/Dubai',
            utcOffset: 'UTC+4:00',
        },
        {
            city: 'London',
            region: 'Western Europe',
            tz: 'Europe/London',
            utcOffset: 'UTC+1:00',
        },
        {
            city: 'New York',
            region: 'North America',
            tz: 'America/New_York',
            utcOffset: 'UTC-4:00',
        },
    ];

    useEffect(() => {
        const updateClocks = () => {
            const now = new Date();
            const formatted: Record<string, string> = {};
            timezones.forEach((t) => {
                try {
                    formatted[t.city] = now.toLocaleTimeString('en-US', {
                        timeZone: t.tz,
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                    });
                } catch {
                    formatted[t.city] = '12:00:00';
                }
            });
            setTimes(formatted);
        };

        updateClocks();
        const interval = setInterval(updateClocks, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section
            id="global-presence"
            style={{
                padding: '110px var(--zy-section-pad-x, 24px)',
                background: 'var(--zy-bg)',
                borderBottom: '1px solid var(--zy-border-subtle)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '64px', maxWidth: '820px' }}>
                    <h2
                        style={{
                            fontFamily:
                                'var(--font-heading, "Space Grotesk", sans-serif)',
                            fontSize: 'clamp(30px, 4vw, 52px)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: '-0.03em',
                            color: 'var(--zy-text-primary)',
                            marginBottom: '20px',
                        }}
                    >
                        Rooted in Bihar. Synchronized across global enterprise
                        timezones.
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        We dismantled the outdated myth that mission-critical
                        engineering requires expensive tier-1 metro overheads.
                        By establishing our core engineering sanctuary in Patna
                        and maintaining an NCR connectivity hub, we achieve
                        relentless focus, superior talent retention, and 24/7
                        global operational agility.
                    </p>
                </div>

                {/* Live Clocks Bar */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(190px, 1fr))',
                        gap: '16px',
                        marginBottom: '48px',
                    }}
                >
                    {timezones.map((tz) => (
                        <div
                            key={tz.city}
                            style={{
                                padding: '18px 20px',
                                borderRadius: '12px',
                                border: tz.primary
                                    ? isLight
                                        ? '1px solid #111111'
                                        : '1px solid #ffffff'
                                    : '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily:
                                            'var(--font-heading, "Space Grotesk", sans-serif)',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        color: 'var(--zy-text-primary)',
                                    }}
                                >
                                    {tz.city}
                                </span>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        fontFamily: 'monospace',
                                        color: 'var(--zy-text-muted)',
                                    }}
                                >
                                    {tz.utcOffset}
                                </span>
                            </div>
                            <div
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    letterSpacing: '0.05em',
                                    color: 'var(--zy-text-primary)',
                                }}
                            >
                                {times[tz.city] || '--:--:--'}
                            </div>
                            <div
                                style={{
                                    fontSize: '11px',
                                    color: 'var(--zy-text-muted)',
                                }}
                            >
                                {tz.region}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hub Cards: Patna & NCR */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                        marginBottom: '48px',
                    }}
                >
                    {/* Patna HQ Card */}
                    <div
                        style={{
                            padding: '36px',
                            borderRadius: '16px',
                            border: '1px solid var(--zy-border-subtle)',
                            background: isLight
                                ? '#ffffff'
                                : 'var(--zy-surface-1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '11px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: 'var(--zy-text-muted)',
                                }}
                            >
                                PRIMARY ENGINEERING SANCTUARY
                            </span>
                            <span
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '10px',
                                    padding: '3px 8px',
                                    borderRadius: '4px',
                                    background: isLight ? '#111111' : '#ffffff',
                                    color: isLight ? '#ffffff' : '#000000',
                                    fontWeight: 700,
                                }}
                            >
                                GLOBAL HQ
                            </span>
                        </div>
                        <h3
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '24px',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                            }}
                        >
                            Patna, Bihar
                        </h3>
                        <div
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '12px',
                                color: 'var(--zy-text-muted)',
                            }}
                        >
                            COORDINATES: 25.5941° N, 85.1376° E
                        </div>
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: 1.7,
                                color: 'var(--zy-text-secondary)',
                            }}
                        >
                            Our primary engineering citadel where architecture
                            decisions, core codebase authoring, database
                            optimizations, and algorithmic R&amp;D take place.
                            Isolated from urban noise to enable uninterrupted
                            multi-hour deep focus.
                        </p>
                        <div
                            style={{
                                borderTop: '1px solid var(--zy-border-subtle)',
                                paddingTop: '16px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: '12px',
                                color: 'var(--zy-text-muted)',
                                fontFamily: 'monospace',
                            }}
                        >
                            <span>BANDWIDTH: DUAL REDUNDANT FIBER</span>
                            <span>BACKUP: 100% SOLAR + UPS</span>
                        </div>
                    </div>

                    {/* NCR Strategic Hub */}
                    <div
                        style={{
                            padding: '36px',
                            borderRadius: '16px',
                            border: '1px solid var(--zy-border-subtle)',
                            background: isLight
                                ? '#ffffff'
                                : 'var(--zy-surface-1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '11px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: 'var(--zy-text-muted)',
                                }}
                            >
                                STRATEGIC CONNECTIVITY NODE
                            </span>
                            <span
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '10px',
                                    padding: '3px 8px',
                                    borderRadius: '4px',
                                    border: '1px solid var(--zy-border-subtle)',
                                    color: 'var(--zy-text-secondary)',
                                    fontWeight: 700,
                                }}
                            >
                                EXPANSION HUB
                            </span>
                        </div>
                        <h3
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '24px',
                                fontWeight: 800,
                                color: 'var(--zy-text-primary)',
                            }}
                        >
                            Delhi-NCR Network
                        </h3>
                        <div
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '12px',
                                color: 'var(--zy-text-muted)',
                            }}
                        >
                            COORDINATES: 28.6139° N, 77.2090° E
                        </div>
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: 1.7,
                                color: 'var(--zy-text-secondary)',
                            }}
                        >
                            Our metropolitan bridge for enterprise executive
                            briefings, high-touch institutional client
                            onboarding, international logistics coordination,
                            and direct proximity to national digital
                            infrastructure regulators.
                        </p>
                        <div
                            style={{
                                borderTop: '1px solid var(--zy-border-subtle)',
                                paddingTop: '16px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: '12px',
                                color: 'var(--zy-text-muted)',
                                fontFamily: 'monospace',
                            }}
                        >
                            <span>AIRPORT ACCESS: 25 MIN</span>
                            <span>MEETING STUDIOS: ACTIVATED</span>
                        </div>
                    </div>
                </div>

                {/* Operating Protocol Pillars */}
                <div
                    style={{
                        padding: '28px 32px',
                        borderRadius: '14px',
                        background: isLight
                            ? 'rgba(0,0,0,0.02)'
                            : 'rgba(255,255,255,0.02)',
                        border: '1px solid var(--zy-border-subtle)',
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px',
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '15px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '6px',
                            }}
                        >
                            Async-First Engineering
                        </div>
                        <p
                            style={{
                                fontSize: '13px',
                                lineHeight: 1.6,
                                color: 'var(--zy-text-secondary)',
                                margin: 0,
                            }}
                        >
                            All architecture decisions, PR RFCs, and API
                            blueprints are documented in searchable Git records
                            so no knowledge is trapped in unrecorded verbal
                            meetings.
                        </p>
                    </div>

                    <div>
                        <div
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '15px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '6px',
                            }}
                        >
                            Global 4-Hour Golden Window
                        </div>
                        <p
                            style={{
                                fontSize: '13px',
                                lineHeight: 1.6,
                                color: 'var(--zy-text-secondary)',
                                margin: 0,
                            }}
                        >
                            Daily dedicated overlap windows scheduled with North
                            American and European stakeholders for instant
                            architectural reviews and blocker clearing.
                        </p>
                    </div>

                    <div>
                        <div
                            style={{
                                fontFamily:
                                    'var(--font-heading, "Space Grotesk", sans-serif)',
                                fontSize: '15px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '6px',
                            }}
                        >
                            24/7 Severity-1 Incident Mesh
                        </div>
                        <p
                            style={{
                                fontSize: '13px',
                                lineHeight: 1.6,
                                color: 'var(--zy-text-secondary)',
                                margin: 0,
                            }}
                        >
                            Automated PagerDuty rotations routed to senior
                            engineers with guaranteed 15-minute response times
                            for mission-critical infrastructure emergencies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
