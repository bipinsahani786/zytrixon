import React, { useState } from 'react';
import { useTheme } from '@/components/landing/theme-provider';

interface LabProject {
    id: string;
    tag: string;
    title: string;
    status:
        | 'PRODUCTION READY'
        | 'ACTIVE ALPHA'
        | 'STABLE LABS'
        | 'INTERNAL EXPERIMENT';
    cycle: string;
    description: string;
    specifications: string[];
    benchmark: {
        metric: string;
        value: string;
    };
}

export default function AboutInnovationLab() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [activeLabId, setActiveLabId] = useState<string>('edge-ai');

    const labProjects: LabProject[] = [
        {
            id: 'edge-ai',
            tag: 'MACHINE INTELLIGENCE',
            title: 'Local Edge Agent Runtimes & SLM Orchestration',
            status: 'ACTIVE ALPHA',
            cycle: 'Q1-Q2 2026',
            description:
                'Prototyping on-device Small Language Model (SLM) execution utilizing WebAssembly and WebGPU kernels. Bypasses third-party cloud API roundtrips for zero-latency localized reasoning, medical triage classification, and offline-first edge workflows.',
            specifications: [
                'WASM + WebGPU client-side execution pipeline',
                'Zero-data leakage on sensitive client premises',
                'Quantized 4-bit weights with memory footprint < 1.2GB',
            ],
            benchmark: {
                metric: 'Time to First Token (TTFT)',
                value: '14ms on consumer M-series & RTX chips',
            },
        },
        {
            id: 'ws-fabric',
            tag: 'REAL-TIME SYSTEMS',
            title: 'High-Density Distributed WebSocket Fabric',
            status: 'STABLE LABS',
            cycle: 'CONTINUOUS R&D',
            description:
                'An ultra-low overhead binary messaging broker designed for sub-millisecond telemetry propagation across 500,000+ concurrent state subscriptions. Engineered specifically for high-frequency auction bids, live medical monitors, and logistics tracking.',
            specifications: [
                'MessagePack binary serialization over JSON',
                'Shared Redis Cluster backplane with geo-aware cluster routing',
                'Automatic packet deduplication and reconnection backoff',
            ],
            benchmark: {
                metric: 'Internal broker propagation',
                value: '< 4.2ms end-to-end latency',
            },
        },
        {
            id: 'webgl-shader',
            tag: 'SPATIAL & GRAPH GRAPHICS',
            title: 'Hardware-Accelerated WebGL & Canvas Graph Shaders',
            status: 'PRODUCTION READY',
            cycle: 'DEPLOYED TO CLIENTS',
            description:
                'Custom GLSL fragment and vertex shaders engineered to render 50,000+ node relationship graphs and architectural 3D master plans at a locked 60 frames per second without locking the main browser thread.',
            specifications: [
                'Instanced mesh drawing reducing CPU draw calls to 1',
                'Spatial quadtree partitioning for instantaneous raycast picking',
                'Sub-pixel anti-aliasing with dynamic resolution scaling',
            ],
            benchmark: {
                metric: 'Sustained UI frame rate',
                value: '60.0 FPS with 50,000 nodes',
            },
        },
        {
            id: 'codemod-cli',
            tag: 'DEVELOPER INFRASTRUCTURE',
            title: 'Autonomous AST Modernization & Codemod Engines',
            status: 'INTERNAL EXPERIMENT',
            cycle: 'DEV TOOLS',
            description:
                'Internal syntax tree manipulation tools that parse legacy monolithic SQL queries and aging controllers, converting them into type-safe TypeScript schemas and normalized database migrations with minimal human intervention.',
            specifications: [
                'Babel and SWC AST parsing with semantic scope analysis',
                'Automated unit test stub generation for every rewritten routine',
                'Diff generation with zero hallucinated type signatures',
            ],
            benchmark: {
                metric: 'Syntactic migration accuracy',
                value: '99.4% zero-error code output',
            },
        },
    ];

    const activeProject =
        labProjects.find((p) => p.id === activeLabId) || labProjects[0];

    return (
        <section
            id="innovation-lab"
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
                        Prototyping tomorrow&apos;s infrastructure before the
                        industry realizes it is needed.
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'var(--zy-text-secondary)',
                        }}
                    >
                        We invest 15% of our engineering bandwidth into an
                        internal R&amp;D incubator. When our enterprise partners
                        encounter exponential load or emerging AI paradigms, we
                        don&apos;t scramble to research—we deploy tested
                        internal prototypes into battle.
                    </p>
                </div>

                {/* Lab Grid Layout: Left selector, Right deep dive */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '32px',
                        alignItems: 'start',
                    }}
                >
                    {/* Left: Project Selector List */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}
                    >
                        {labProjects.map((project, idx) => {
                            const isSelected = project.id === activeLabId;
                            return (
                                <button
                                    key={project.id}
                                    type="button"
                                    onClick={() => {
                                        setActiveLabId(project.id);
                                    }}
                                    style={{
                                        textAlign: 'left',
                                        padding: '20px 24px',
                                        borderRadius: '12px',
                                        border: isSelected
                                            ? isLight
                                                ? '1px solid #111111'
                                                : '1px solid #ffffff'
                                            : '1px solid var(--zy-border-subtle)',
                                        background: isSelected
                                            ? isLight
                                                ? '#f4f4f5'
                                                : 'var(--zy-surface-2)'
                                            : isLight
                                              ? '#ffffff'
                                              : 'var(--zy-surface-1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '10px',
                                                fontFamily: 'monospace',
                                                fontWeight: 700,
                                                letterSpacing: '0.1em',
                                                color: 'var(--zy-text-muted)',
                                            }}
                                        >
                                            EXP-0{idx + 1} // {project.tag}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '9px',
                                                fontFamily: 'monospace',
                                                fontWeight: 700,
                                                padding: '2px 8px',
                                                borderRadius: '4px',
                                                border: '1px solid var(--zy-border-subtle)',
                                                color: 'var(--zy-text-secondary)',
                                                background: isLight
                                                    ? 'rgba(0,0,0,0.03)'
                                                    : 'rgba(255,255,255,0.04)',
                                            }}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            fontFamily:
                                                'var(--font-heading, "Space Grotesk", sans-serif)',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            color: 'var(--zy-text-primary)',
                                            lineHeight: 1.35,
                                        }}
                                    >
                                        {project.title}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Detailed Dossier Panel */}
                    <div
                        style={{
                            padding: '36px',
                            borderRadius: '16px',
                            border: '1px solid var(--zy-border-subtle)',
                            background: isLight
                                ? '#fcfcfd'
                                : 'var(--zy-surface-1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '12px',
                                paddingBottom: '18px',
                                borderBottom:
                                    '1px solid var(--zy-border-subtle)',
                            }}
                        >
                            <div>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        color: 'var(--zy-text-muted)',
                                    }}
                                >
                                    R&amp;D SPRINT CYCLE: {activeProject.cycle}
                                </span>
                                <h3
                                    style={{
                                        fontFamily:
                                            'var(--font-heading, "Space Grotesk", sans-serif)',
                                        fontSize: '22px',
                                        fontWeight: 800,
                                        color: 'var(--zy-text-primary)',
                                        marginTop: '4px',
                                    }}
                                >
                                    {activeProject.title}
                                </h3>
                            </div>
                            <div
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    padding: '6px 12px',
                                    borderRadius: '6px',
                                    background: isLight ? '#111111' : '#ffffff',
                                    color: isLight ? '#ffffff' : '#000000',
                                }}
                            >
                                {activeProject.status}
                            </div>
                        </div>

                        <p
                            style={{
                                fontSize: '15px',
                                lineHeight: 1.75,
                                color: 'var(--zy-text-secondary)',
                            }}
                        >
                            {activeProject.description}
                        </p>

                        <div>
                            <div
                                style={{
                                    fontSize: '11px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: 'var(--zy-text-muted)',
                                    marginBottom: '12px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Engineering Specifications
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                }}
                            >
                                {activeProject.specifications.map((spec, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            gap: '12px',
                                            fontSize: '13px',
                                            color: 'var(--zy-text-primary)',
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'monospace',
                                                fontSize: '11px',
                                                color: 'var(--zy-text-muted)',
                                                fontWeight: 700,
                                            }}
                                        >
                                            0{i + 1}.
                                        </span>
                                        <span>{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benchmark Metric Box */}
                        <div
                            style={{
                                marginTop: '12px',
                                padding: '20px 24px',
                                borderRadius: '10px',
                                border: '1px solid var(--zy-border-subtle)',
                                background: isLight
                                    ? '#ffffff'
                                    : 'var(--zy-surface-2)',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    color: 'var(--zy-text-muted)',
                                    textTransform: 'uppercase',
                                    marginBottom: '4px',
                                }}
                            >
                                Verified Benchmark Metric —{' '}
                                {activeProject.benchmark.metric}
                            </div>
                            <div
                                style={{
                                    fontFamily:
                                        'var(--font-heading, "Space Grotesk", sans-serif)',
                                    fontSize: '18px',
                                    fontWeight: 800,
                                    color: 'var(--zy-text-primary)',
                                }}
                            >
                                {activeProject.benchmark.value}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Open Source Contribution Banner */}
                <div
                    style={{
                        marginTop: '48px',
                        padding: '24px 32px',
                        borderRadius: '12px',
                        border: '1px dashed var(--zy-border-subtle)',
                        background: isLight
                            ? 'rgba(0,0,0,0.015)'
                            : 'rgba(255,255,255,0.02)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '16px',
                    }}
                >
                    <div style={{ maxWidth: '720px' }}>
                        <div
                            style={{
                                fontSize: '14px',
                                fontWeight: 700,
                                color: 'var(--zy-text-primary)',
                                marginBottom: '4px',
                            }}
                        >
                            Open Source &amp; Upstream Responsibility
                        </div>
                        <div
                            style={{
                                fontSize: '13px',
                                color: 'var(--zy-text-secondary)',
                                lineHeight: 1.6,
                            }}
                        >
                            We actively publish bug reproductions, open pull
                            requests, and contribute utilities back to the
                            React, Laravel, and PostgreSQL ecosystems that form
                            the bedrock of global software.
                        </div>
                    </div>
                    <a
                        href="https://github.com/bipinsahani786"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            fontFamily: 'monospace',
                            fontSize: '12px',
                            fontWeight: 700,
                            padding: '10px 18px',
                            borderRadius: '8px',
                            border: '1px solid var(--zy-border-subtle)',
                            color: 'var(--zy-text-primary)',
                            textDecoration: 'none',
                            background: isLight
                                ? '#ffffff'
                                : 'var(--zy-surface-1)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        GITHUB / BIPINSAHANI786 &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
