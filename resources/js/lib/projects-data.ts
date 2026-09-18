export interface ProjectScreenshot {
    title: string;
    category: 'Dashboard' | 'Mobile App' | 'Analytics' | 'Workflow';
    image: string;
    description: string;
}

export interface ProjectMetric {
    label: string;
    value: string;
    desc: string;
}

export interface ProjectTechItem {
    name: string;
    category: string;
}

export interface ProjectFeature {
    title: string;
    desc: string;
    icon: string;
}

export interface ProjectArchitectureNode {
    step: string;
    title: string;
    tech: string;
    detail: string;
}

export interface ProjectItem {
    id: string;
    slug: string;
    title: string;
    shortTitle: string;
    category: string;
    tagline: string;
    client: string;
    industry: string;
    year: string;
    duration: string;
    accentColor: string;
    secondaryColor: string;
    heroImage: string;
    mobileImage: string;
    liveUrl: string;
    githubUrl?: string;
    videoUrl: string;
    videoPoster: string;
    summary: string;
    challenge: string;
    challengePoints: string[];
    solution: string;
    solutionPoints: string[];
    metrics: ProjectMetric[];
    techStack: ProjectTechItem[];
    screenshots: ProjectScreenshot[];
    features: ProjectFeature[];
    demoCredentials?: {
        email: string;
        pass: string;
        role: string;
    };
    architectureFlow: ProjectArchitectureNode[];
}

export const DUMMY_PROJECTS: ProjectItem[] = [
    {
        id: 'cloudscale-lms',
        slug: 'cloudscale-lms',
        title: 'CloudScale LMS — Enterprise School & Campus Management System',
        shortTitle: 'CloudScale LMS',
        category: 'Web Application • Next.js & Cloud Architecture',
        tagline: 'Transforming academic administration with real-time analytics, automated fees, and smart student portals.',
        client: 'EduCorp Global Systems',
        industry: 'Education & EdTech SaaS',
        year: '2025 - 2026',
        duration: '4 Months',
        accentColor: '#4ecdc4',
        secondaryColor: '#00F0FF',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85',
        mobileImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80',
        liveUrl: 'https://cloudscale-lms-demo.zytrixontech.com',
        githubUrl: 'https://github.com/zytrixontech/cloudscale-lms-preview',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        videoPoster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85',
        summary: 'CloudScale LMS is a comprehensive, multi-tenant academic ERP designed for schools, colleges, and university networks. It seamlessly consolidates student lifecycles, automated fee collection, biometric attendance tracking, and parent communication into one blazing-fast, unified cloud interface.',
        challenge: 'The institution was burdened by legacy on-premise software that suffered from severe downtime during peak examination periods. Manual fee reconciliation led to accounting errors, and parents lacked real-time visibility into student attendance and performance metrics.',
        challengePoints: [
            'Frequent server crashes during semester report card rollouts and admissions.',
            'Manual cash and cheque fee collection resulting in delayed financial auditing.',
            'Disjointed third-party SMS gateways causing high drop-off in parent engagement.',
            'Zero centralized data synchronization across 12 branch campuses.'
        ],
        solution: 'Zytrixon engineered a modern cloud-native architecture using Next.js 15, high-performance Laravel APIs, and PostgreSQL with database sharding. We integrated direct UPI/card payment webhooks, automated WhatsApp notification queues, and an encrypted parent-teacher portal.',
        solutionPoints: [
            'Next.js 15 server-side rendered dashboard with sub-second page loads.',
            'Automated payment gateway reconciliation with instant PDF fee receipts.',
            'Biometric & QR-based attendance tracking synced directly to parent smartphones.',
            'Role-based granular access control (Super Admin, Principal, Teacher, Student, Parent).'
        ],
        metrics: [
            {
                value: '99.98%',
                label: 'System Uptime',
                desc: 'Zero downtime achieved during peak semester exam result publishing.'
            },
            {
                value: '150k+',
                label: 'Active Daily Users',
                desc: 'Students, faculty, and administrators actively connected daily.'
            },
            {
                value: '3.5x',
                label: 'Faster Fee Collection',
                desc: 'Automated digital reminders boosted online collection efficiency.'
            },
            {
                value: '4.9 / 5',
                label: 'Parent Rating',
                desc: 'Overwhelmingly positive adoption of the modern responsive mobile app.'
            }
        ],
        techStack: [
            { name: 'Next.js 15', category: 'Frontend Framework' },
            { name: 'React 19', category: 'Core Library' },
            { name: 'TypeScript', category: 'Type Safety' },
            { name: 'TailwindCSS', category: 'Styling' },
            { name: 'Laravel 12 API', category: 'Backend Engine' },
            { name: 'PostgreSQL', category: 'Relational Database' },
            { name: 'Redis Cache', category: 'In-Memory Caching' },
            { name: 'AWS S3 & CloudFront', category: 'Cloud Infrastructure' },
            { name: 'Docker & Kubernetes', category: 'DevOps & Scaling' },
            { name: 'Stripe & Razorpay', category: 'Payment Gateway' }
        ],
        screenshots: [
            {
                title: 'Executive Admin Dashboard',
                category: 'Dashboard',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
                description: 'Real-time overview of total enrollment, revenue collection, campus attendance rate, and upcoming academic milestones.'
            },
            {
                title: 'Financial & Fee Management Engine',
                category: 'Analytics',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
                description: 'Automated batch invoice generation, pending installment alerts, online checkout portals, and instant ledger auditing.'
            },
            {
                title: 'Examinations & Grading Matrix',
                category: 'Workflow',
                image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&q=80',
                description: 'Customizable grading rubrics, automated GPA computation, report card generation, and student performance analytics.'
            },
            {
                title: 'Parent & Student Mobile Experience',
                category: 'Mobile App',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
                description: 'Responsive mobile portal allowing parents to track homework, view live bus GPS tracking, and chat directly with teachers.'
            }
        ],
        features: [
            {
                title: 'Real-Time Biometric & QR Attendance',
                desc: 'Students and staff check in with smart cards or biometrics, automatically sending SMS/WhatsApp updates to parents in seconds.',
                icon: 'Fingerprint'
            },
            {
                title: 'Smart Fee & Installment Automation',
                desc: 'Zero-friction online fee payments with automated SMS payment links, flexible installments, and instant tax-compliant receipts.',
                icon: 'CreditCard'
            },
            {
                title: 'Automated Timetable & Exam Scheduler',
                desc: 'AI-assisted conflict resolution schedules faculty hours, room allocations, and exam timetables without overlapping slots.',
                icon: 'Calendar'
            },
            {
                title: 'Parent-Teacher Communication Hub',
                desc: 'Encrypted communication channel for announcements, digital permission slips, assignment reviews, and performance feedback.',
                icon: 'MessageSquare'
            },
            {
                title: 'Live GPS School Bus Tracking',
                desc: 'Integrated IoT telematics on campus buses giving parents live vehicle location, ETA notifications, and speed alerts.',
                icon: 'Navigation'
            },
            {
                title: 'Multi-Campus Enterprise Scalability',
                desc: 'Super-admin dashboard to govern multiple branch campuses, unified staff payroll, and centralized compliance reporting.',
                icon: 'ShieldCheck'
            }
        ],
        demoCredentials: {
            email: 'admin@cloudscale-demo.com',
            pass: 'EduScale#2026',
            role: 'Super Administrator'
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Global Edge Ingress',
                tech: 'Cloudflare Enterprise',
                detail: 'SSL termination, edge caching, DDoS mitigation, and global CDN asset delivery.'
            },
            {
                step: '02',
                title: 'High-Speed Web Client',
                tech: 'Next.js 15 & React 19',
                detail: 'Server-side rendering, streaming suspense, and zero-layout-shift UI.'
            },
            {
                step: '03',
                title: 'Microservices & Core API',
                tech: 'Laravel 12 API Engine',
                detail: 'Sanctum JWT auth, role-based access gates, and transactional fee controllers.'
            },
            {
                step: '04',
                title: 'Real-Time Telemetry & Queues',
                tech: 'Redis + WebSockets',
                detail: 'Sub-second event dispatching for attendance notifications and instant alerts.'
            },
            {
                step: '05',
                title: 'Encrypted Data Persistence',
                tech: 'PostgreSQL 16 Multi-Tenant',
                detail: 'Automated daily snapshots, sharded tables, and AES-256 student data encryption.'
            }
        ]
    },
    {
        id: 'nexustrack-iot',
        slug: 'nexustrack-iot',
        title: 'NexusTrack IoT — Real-Time Fleet Telematics & Command Center',
        shortTitle: 'NexusTrack IoT',
        category: 'IoT & AI • Industrial Telematics & Cloud Dashboard',
        tagline: 'Next-generation industrial IoT hub streaming millisecond vehicle telematics, fuel analytics, and predictive maintenance.',
        client: 'Apex Global Logistics',
        industry: 'Logistics, Supply Chain & Smart Hardware',
        year: '2025 - 2026',
        duration: '6 Months',
        accentColor: '#ff6b6b',
        secondaryColor: '#FFB800',
        heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85',
        mobileImage: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=900&q=80',
        liveUrl: 'https://nexustrack-demo.zytrixontech.com',
        githubUrl: 'https://github.com/zytrixontech/nexustrack-iot-preview',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        videoPoster: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85',
        summary: 'NexusTrack IoT is an industrial-grade telematics and fleet intelligence command center. It continuously streams telemetry data from thousands of connected vehicles, heavy construction equipment, and smart factory sensors, detecting anomalies and route delays in real time.',
        challenge: 'The logistics operator faced mounting fuel theft, frequent highway mechanical breakdowns, and delayed client delivery updates due to fragmented 2G GPS trackers and laggy tracking software.',
        challengePoints: [
            'Severe data ingestion bottlenecks handling 5,000+ simultaneous sensor streams.',
            'Undetected engine overheating leading to costly catastrophic failures on long-haul routes.',
            'Fuel discrepancies and unauthorized detours causing high recurring expenses.',
            'Delayed dispatch communication causing 45+ minute delivery turnaround delays.'
        ],
        solution: 'Zytrixon developed an ultra-scalable MQTT and WebSocket telemetry pipeline capable of processing 25,000 events/second. Paired with a reactive Mapbox dashboard, automated geofence triggers, and machine-learning anomaly detection for predictive maintenance.',
        solutionPoints: [
            'High-throughput Go & Node.js MQTT broker pipeline streaming sub-200ms telemetry.',
            'TimescaleDB time-series database optimized for lightning-fast historical playback.',
            'AI-powered driver safety scoring (harsh braking, speeding, idle time detection).',
            'Cross-platform driver mobile app for digital bill of lading (e-BOL) and route navigation.'
        ],
        metrics: [
            {
                value: '< 200ms',
                label: 'Telemetry Latency',
                desc: 'Real-time vehicle status and GPS positions rendered instantly on live maps.'
            },
            {
                value: '32%',
                label: 'Fuel Savings',
                desc: 'Eliminated unauthorized idling, route deviations, and fuel siphoning.'
            },
            {
                value: '10,000+',
                label: 'Connected Devices',
                desc: 'Simultaneously streaming IoT telemetry nodes across 4 countries.'
            },
            {
                value: '0%',
                label: 'Unplanned Downtime',
                desc: 'Predictive diagnostic alerts prevented roadside engine breakdowns.'
            }
        ],
        techStack: [
            { name: 'React 19 & Vite', category: 'Frontend UI' },
            { name: 'TypeScript', category: 'Type Safety' },
            { name: 'Mapbox GL & Deck.gl', category: 'Geospatial Maps' },
            { name: 'TailwindCSS', category: 'Modern Styling' },
            { name: 'Go & Node.js', category: 'MQTT Telemetry Engine' },
            { name: 'Laravel API', category: 'Core Business Logic' },
            { name: 'TimescaleDB', category: 'Time-Series DB' },
            { name: 'Redis Pub/Sub', category: 'Real-Time Streaming' },
            { name: 'AWS IoT Core', category: 'Hardware Cloud Gateway' },
            { name: 'WebSockets', category: 'Live Bi-directional Sync' }
        ],
        screenshots: [
            {
                title: 'Live Fleet Command Center',
                category: 'Dashboard',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
                description: 'Real-time interactive geospatial map tracking fleet positions, active speed, cargo temperature, and transit ETA.'
            },
            {
                title: 'Engine Diagnostics & Predictive Alert Matrix',
                category: 'Analytics',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
                description: 'Telemetry readings for engine oil temperature, RPM, tire pressure, and battery voltage with automatic threshold alarms.'
            },
            {
                title: 'Fuel Telematics & Siphoning Prevention',
                category: 'Workflow',
                image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1200&q=80',
                description: 'Ultrasonic fuel sensor analytics revealing fuel consumption trends, refueling events, and sudden drop alarms.'
            },
            {
                title: 'Driver Companion & Inspection Mobile App',
                category: 'Mobile App',
                image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80',
                description: 'Mobile workflow app for vehicle pre-trip checklists, digital proof of delivery, and turn-by-turn commercial route guidance.'
            }
        ],
        features: [
            {
                title: 'Sub-Second GPS & Sensor Streaming',
                desc: 'MQTT protocols stream live longitude, latitude, speed, and heading every 500ms with zero server memory degradation.',
                icon: 'Radio'
            },
            {
                title: 'Smart Dynamic Geofencing',
                desc: 'Set custom polygonal geo-zones around depots, terminals, and client locations with instant entry/exit push alerts.',
                icon: 'MapPin'
            },
            {
                title: 'Predictive Maintenance Engine',
                desc: 'Machine learning algorithms detect irregular vibration patterns and temperature spikes before mechanical failure occurs.',
                icon: 'Cpu'
            },
            {
                title: 'Driver Behavior & Safety Scorecard',
                desc: 'Tracks aggressive acceleration, sudden braking, sharp turns, and excessive idling to boost driver safety and lower insurance rates.',
                icon: 'Award'
            },
            {
                title: 'Cold-Chain Temperature Monitoring',
                desc: 'Continuous refrigeration sensor tracking for perishable pharmaceutical and food freight with automated threshold breach alerts.',
                icon: 'Thermometer'
            },
            {
                title: 'Automated Regulatory Compliance (e-Log)',
                desc: 'Digital Hours of Service (HOS) logs, vehicle inspection reports, and automated maintenance records ready for audits.',
                icon: 'FileCheck'
            }
        ],
        demoCredentials: {
            email: 'command@nexustrack-demo.com',
            pass: 'Telemetry#Live99',
            role: 'Fleet Command Director'
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Hardware Telematics Beacons',
                tech: 'CAN-Bus OBD-II & BLE 5.0',
                detail: 'Edge sensors measuring engine RPM, oil temp, fuel flow, and GPS every 500ms.'
            },
            {
                step: '02',
                title: 'MQTT Telemetry Broker',
                tech: 'EMQX Cluster',
                detail: 'Processes 25,000 packets/sec over TLS with automated device handshake.'
            },
            {
                step: '03',
                title: 'Stream Computing Engine',
                tech: 'Go & Kafka Queue',
                detail: 'Real-time geofence violation checks, fuel drop anomalies, and SOS alerts.'
            },
            {
                step: '04',
                title: 'Time-Series Data Store',
                tech: 'TimescaleDB & ClickHouse',
                detail: 'Hypertable chunking allowing instant historical breadcrumb playback of 10M points.'
            },
            {
                step: '05',
                title: 'Live Geospatial Command Dashboard',
                tech: 'React 19 + Mapbox GL',
                detail: 'Hardware-accelerated WebGL map rendering thousands of moving vehicle markers.'
            }
        ]
    }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
    return DUMMY_PROJECTS.find((p) => p.slug === slug || p.id === slug);
}
