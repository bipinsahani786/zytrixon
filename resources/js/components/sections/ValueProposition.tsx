import {
    Bot,
    Brain,
    Clock,
    Search,
    DollarSign,
    Shield,
    Smartphone,
    Layers,
    WifiOff,
    Fingerprint,
    Bell,
    Link,
    Target,
    TrendingUp,
    PieChart,
    Globe,
    Split,
    Repeat,
    Activity,
    Cpu,
    Wifi,
    Battery,
    Share2,
    HardDrive,
    Box,
    Maximize,
    Users,
    GitCommit,
    Database,
    Zap,
    Monitor,
    Edit,
    Eye,
    Server,
} from 'lucide-react';
import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import GradientCard from '@/components/ui/GradientCard';
import { getServiceConfig } from '@/lib/service-data';

const IconMap: any = {
    robot: Bot,
    brain: Brain,
    clock: Clock,
    search: Search,
    'dollar-sign': DollarSign,
    shield: Shield,
    smartphone: Smartphone,
    layers: Layers,
    'wifi-off': WifiOff,
    fingerprint: Fingerprint,
    bell: Bell,
    link: Link,
    target: Target,
    'trending-up': TrendingUp,
    'pie-chart': PieChart,
    globe: Globe,
    split: Split,
    repeat: Repeat,
    activity: Activity,
    cpu: Cpu,
    wifi: Wifi,
    battery: Battery,
    'share-2': Share2,
    'hard-drive': HardDrive,
    box: Box,
    maximize: Maximize,
    users: Users,
    'git-commit': GitCommit,
    database: Database,
    zap: Zap,
    monitor: Monitor,
    edit: Edit,
    eye: Eye,
    server: Server,
};

export default function ValueProposition({
    service,
    location,
    contentOverrides,
}: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const features = config.valueProps.map((f, index) => ({
        ...f,
        color: [
            config.themeColor,
            '#10b981',
            '#eab308',
            '#ec4899',
            '#8b5cf6',
            '#06b6d4',
        ][index % 6],
    }));

    return (
        <section
            className="zy-section"
            style={{ background: isLight ? '#FFFFFF' : 'var(--zy-black)' }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    textAlign: 'center',
                }}
            >
                <span
                    className="zy-section-label"
                    style={{ color: '#3b82f6', opacity: 1 }}
                >
                    WHY CHOOSE US
                </span>
                <h2
                    className="zy-section-title"
                    style={{
                        color: isLight ? '#000' : 'var(--zy-white)',
                        marginBottom: 24,
                    }}
                >
                    {contentOverrides?.value_prop_h2 ||
                        `Unmatched Quality in ${service?.title || 'Web Development'}`}
                </h2>
                <p
                    style={{
                        color: isLight ? '#555' : 'var(--zy-gray-text)',
                        fontSize: 18,
                        maxWidth: 700,
                        margin: '0 auto 64px',
                        lineHeight: 1.6,
                    }}
                >
                    {contentOverrides?.value_prop_desc ||
                        `We don't just write code. We architect scalable, secure, and beautiful digital experiences that drive real business growth.`}
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 32,
                    }}
                >
                    {features.map((feature, i) => {
                        const Icon = IconMap[feature.icon] || Zap;

                        return (
                            <div
                                key={i}
                                className="value-prop-card"
                                style={{ transition: 'transform 0.3s' }}
                            >
                                <GradientCard
                                    themeColor={feature.color}
                                    style={{
                                        textAlign: 'left',
                                        height: '100%',
                                        background: isLight
                                            ? '#fdfdfd'
                                            : 'var(--zy-gray-card)',
                                        boxShadow: isLight
                                            ? '0 10px 30px rgba(0,0,0,0.03)'
                                            : 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: '32px 32px 40px',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: feature.color,
                                                marginBottom: 24,
                                                width: 48,
                                                height: 48,
                                                borderRadius: '50%',
                                                background: `color-mix(in srgb, ${feature.color} 15%, transparent)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Icon size={24} strokeWidth={2.5} />
                                        </div>
                                        <h3
                                            style={{
                                                fontFamily:
                                                    'var(--font-heading)',
                                                color: isLight
                                                    ? '#000'
                                                    : 'var(--zy-white)',
                                                fontSize: 20,
                                                fontWeight: 800,
                                                marginBottom: 12,
                                            }}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p
                                            style={{
                                                color: isLight
                                                    ? '#666'
                                                    : 'var(--zy-gray-text)',
                                                fontSize: 15,
                                                lineHeight: 1.6,
                                                fontWeight: 500,
                                                margin: 0,
                                            }}
                                        >
                                            {feature.desc}
                                        </p>
                                    </div>
                                </GradientCard>
                            </div>
                        );
                    })}
                </div>
            </div>
            <style>{`
                .value-prop-card:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </section>
    );
}
