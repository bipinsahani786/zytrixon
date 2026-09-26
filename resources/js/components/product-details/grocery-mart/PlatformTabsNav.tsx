import React from 'react';
import type { PlatformTab } from './types';
import { platformsData } from './data';

interface PlatformTabsNavProps {
    activePlatform: PlatformTab;
    onSelectPlatform: (tab: PlatformTab) => void;
}

export default function PlatformTabsNav({
    activePlatform,
    onSelectPlatform,
}: PlatformTabsNavProps) {
    const tabs: PlatformTab[] = ['web', 'customer', 'delivery'];

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '14px',
                maxWidth: '960px',
                margin: '0 auto 36px',
            }}
        >
            {tabs.map((tabKey) => {
                const tab = platformsData[tabKey];
                const isActive = activePlatform === tabKey;
                return (
                    <button
                        key={tabKey}
                        type="button"
                        onClick={() => onSelectPlatform(tabKey)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            padding: '16px 20px',
                            borderRadius: '18px',
                            background: isActive
                                ? `linear-gradient(135deg, ${tab.color}22, var(--zy-surface-2))`
                                : 'var(--zy-surface-1)',
                            border: isActive
                                ? `2px solid ${tab.color}`
                                : '1px solid var(--zy-border-subtle)',
                            color: isActive
                                ? 'var(--zy-text-primary)'
                                : 'var(--zy-text-secondary)',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease',
                            boxShadow: isActive
                                ? `0 8px 30px ${tab.accentGlow}`
                                : 'none',
                            textAlign: 'left',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '26px',
                                width: '46px',
                                height: '46px',
                                borderRadius: '12px',
                                background: isActive
                                    ? `${tab.color}25`
                                    : 'var(--zy-surface-2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifySelf: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                border: `1px solid ${isActive ? tab.color : 'transparent'}`,
                            }}
                        >
                            {tab.icon}
                        </span>
                        <div>
                            <div
                                style={{
                                    fontSize: '15px',
                                    fontWeight: 800,
                                    color: 'var(--zy-text-primary)',
                                }}
                            >
                                {tab.name}
                            </div>
                            <div
                                style={{
                                    fontSize: '11.5px',
                                    color: isActive
                                        ? tab.color
                                        : 'var(--zy-text-muted)',
                                    fontWeight: 600,
                                    marginTop: '3px',
                                }}
                            >
                                {tab.videos.length > 0
                                    ? `${tab.images.length} Screens • ${tab.videos.length} Videos`
                                    : `${tab.images.length} Screen • UI Specification`}
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
