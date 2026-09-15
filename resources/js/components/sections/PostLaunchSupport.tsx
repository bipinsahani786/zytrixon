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

export default function PostLaunchSupport({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const config = getServiceConfig(service?.slug);
    const themeColor = config.themeColor;
    const supportFeatures = config.support;

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
                    style={{ color: themeColor, opacity: 1 }}
                >
                    Long-Term Partnership
                </span>
                <h2
                    className="zy-section-title"
                    style={{ color: isLight ? '#000' : 'var(--zy-white)' }}
                >
                    Post-Launch Support SLAs
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
                    Our relationship doesn't end at deployment. We provide
                    enterprise-grade support to ensure your product remains
                    secure, fast, and scalable.
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 32,
                    }}
                >
                    {supportFeatures.map((feature, i) => {
                        const Icon = IconMap[feature.icon] || Zap;

                        // We stagger colors for visual interest, defaulting to themeColor
                        const colors = [
                            themeColor,
                            '#3b82f6',
                            '#10b981',
                            '#f59e0b',
                            '#ec4899',
                        ];
                        const featureColor = colors[i % colors.length];

                        return (
                            <div
                                key={i}
                                className="support-card-wrapper"
                                style={{ transition: 'transform 0.3s' }}
                            >
                                <GradientCard
                                    themeColor={featureColor}
                                    style={{
                                        height: '100%',
                                        background: isLight
                                            ? '#fdfdfd'
                                            : 'var(--zy-gray-card)',
                                        boxShadow: isLight
                                            ? '0 10px 30px rgba(0,0,0,0.03)'
                                            : '0 10px 30px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: '40px 32px',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 72,
                                                height: 72,
                                                borderRadius: '50%',
                                                background: `color-mix(in srgb, ${featureColor} 15%, transparent)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: featureColor,
                                                marginBottom: 24,
                                                border: `1px solid ${featureColor}40`,
                                                boxShadow: `0 0 20px color-mix(in srgb, ${featureColor} 20%, transparent)`,
                                            }}
                                        >
                                            <Icon size={28} strokeWidth={2} />
                                        </div>
                                        <h3
                                            style={{
                                                fontSize: 22,
                                                color: isLight
                                                    ? '#000'
                                                    : 'var(--zy-white)',
                                                fontWeight: 800,
                                                marginBottom: 16,
                                                fontFamily:
                                                    'var(--font-heading)',
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
                .support-card-wrapper:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </section>
    );
}
