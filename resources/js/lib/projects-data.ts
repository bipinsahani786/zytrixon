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
    videoUrl?: string;
    videoPoster?: string;
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
        id: 'sk-infratech',
        slug: 'sk-infratech',
        title: 'S.K. Infratech — Real Estate, Land Acquisition & Infrastructure Portal',
        shortTitle: 'S.K. Infratech',
        category: 'Web Architecture • Real Estate & Land Acquisition',
        tagline:
            'Direct-to-buyer property inventory, RERA-verified land acquisition, and transparent property trading with ₹0 brokerage.',
        client: 'S.K. Infratech (Sandeep Tyagi - Founder & CEO)',
        industry: 'Real Estate & Construction Infrastructure',
        year: '2025 - 2026',
        duration: '3 Months',
        accentColor: '#F97316',
        secondaryColor: '#D4AF37',
        heroImage: '/assets/projects/sk-infratech/hero-invest-right.jpg',
        mobileImage: '/assets/projects/sk-infratech/property-deals.jpg',
        liveUrl: 'https://skinfrareal.com/',
        githubUrl: 'https://github.com/zytrixontech/sk-infratech-preview',
        videoUrl: '/assets/videos/sk-infratech-video.mp4',
        videoPoster: '/assets/projects/sk-infratech/hero-invest-right.jpg',
        summary:
            'S.K. Infratech is an enterprise property trading, land acquisition, and direct investor portal built for prime real estate across Raj Nagar Extension and NCR. We engineered a direct-inventory digital platform eliminating middleman brokerage, verifying RERA legal titles, and accelerating property transactions with complete transparency.',
        challenge:
            'The real estate market in NCR and West UP was overwhelmed with unlicensed middlemen, opaque pricing, legal documentation disputes, and lack of real-time inventory for prime residential and agricultural plots.',
        challengePoints: [
            'Opaque property pricing and high middleman brokerage fees eroding buyer trust.',
            'Complex manual registry and land title verification causing prolonged deal cycles.',
            'Disjointed inquiries and lack of automated lead-to-site-visit scheduling.',
            'Inability to showcase high-resolution plot layouts and infrastructure progress digitally.',
        ],
        solution:
            'Zytrixon engineered a high-speed, mobile-first real estate portal with instant inquiry routing, interactive plot catalogs, RERA verification documentation badges, and direct WhatsApp / telephony connect with acquisition heads.',
        solutionPoints: [
            'Direct inventory showcase with ₹0 brokerage and transparent price-per-yard modeling.',
            'Interactive catalog for residential plots, 3BHK luxury apartments, and agricultural lands.',
            'Automated site-visit lead dispatch connecting buyers directly with founders & acquisition team.',
            'Legal safety vault explaining 30-year chain documentation and mutation approvals.',
        ],
        metrics: [
            {
                value: '5,000+',
                label: 'Units Delivered',
                desc: 'Prime plots and luxury units delivered across Raj Nagar Extension & West UP.',
            },
            {
                value: '12+ Yrs',
                label: 'Market Dominance',
                desc: 'Over a decade of leadership in verified land development.',
            },
            {
                value: '₹0',
                label: 'Brokerage Charged',
                desc: 'Direct-to-owner transactions ensuring maximum transparency.',
            },
            {
                value: '100%',
                label: 'Legal Approval Rate',
                desc: 'RERA-verified and litigation-free property titles.',
            },
        ],
        techStack: [
            { name: 'React 19 & Next.js', category: 'Frontend UI' },
            { name: 'TypeScript', category: 'Type Safety' },
            { name: 'TailwindCSS', category: 'Design System' },
            { name: 'Laravel API', category: 'Backend Engine' },
            { name: 'MySQL Enterprise', category: 'Database' },
            { name: 'WhatsApp Business API', category: 'Instant Inquiries' },
            { name: 'AWS S3 & CloudFront', category: 'Asset Delivery' },
        ],
        screenshots: [
            {
                title: 'Hero & Direct Inventory Showcase',
                category: 'Dashboard',
                image: '/assets/projects/sk-infratech/hero-invest-right.jpg',
                description:
                    'Modern dark aesthetic hero section showcasing verified prime properties in Raj Nagar Extension with direct owner inventory.',
            },
            {
                title: 'The Pillars of Trust — Leadership Team',
                category: 'Workflow',
                image: '/assets/projects/sk-infratech/team-pillars-trust.jpg',
                description:
                    'Executive team profiles highlighting Sandeep Tyagi (Founder & CEO), Rajeev Tyagi (Acquisition Manager), and Pawan Tyagi (Sales & ROI Specialist).',
            },
            {
                title: 'Premium Hot Deals Catalog',
                category: 'Dashboard',
                image: '/assets/projects/sk-infratech/property-deals.jpg',
                description:
                    'Curated residential plots, luxury 3BHK apartments, and high-ROI commercial opportunities with verified registration statuses.',
            },
            {
                title: 'Diverse Property Portfolio Matrix',
                category: 'Analytics',
                image: '/assets/projects/sk-infratech/portfolio-stats.jpg',
                description:
                    'Interactive categorization of plots, flats, agri land, farmhouses, and industrial projects with transparent key performance stats.',
            },
            {
                title: 'Client Testimonials & Verification',
                category: 'Workflow',
                image: '/assets/projects/sk-infratech/client-testimonials.jpg',
                description:
                    'Authentic buyer reviews and testimonials from verified clients and families highlighting hassle-free paperwork.',
            },
        ],
        features: [
            {
                title: 'Direct Inventory With Zero Brokerage',
                desc: 'Buyers purchase directly from developers with 100% price transparency and zero agent commissions.',
                icon: '🏢',
            },
            {
                title: 'Interactive Plot & Deal Showcase',
                desc: 'Filter properties by square yards, registry readiness, ROI bracket, and exact location.',
                icon: '📑',
            },
            {
                title: 'Instant Lead & WhatsApp Bridge',
                desc: 'Connect directly with acquisition managers within seconds via automated routing.',
                icon: '💬',
            },
            {
                title: 'RERA & Legal Document Safe',
                desc: 'Complete transparent chain documentation, mutation checks, and verified land registry records.',
                icon: '⚖️',
            },
        ],
        demoCredentials: {
            email: 'invest@skinfrareal.com',
            pass: 'SKInfra#2026',
            role: 'Client Acquisition Director',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Edge CDN Caching',
                tech: 'Cloudflare Edge',
                detail: 'Rapid response times across mobile networks for property hunters on 4G/5G.',
            },
            {
                step: '02',
                title: 'Dynamic Catalog UI',
                tech: 'Next.js & React',
                detail: 'Lightning-fast property filtering, image gallery lightbox, and instant inquiry triggers.',
            },
            {
                step: '03',
                title: 'Lead Routing Engine',
                tech: 'Laravel Core',
                detail: 'Real-time SMS, Email, and WhatsApp dispatch to property sales representatives.',
            },
            {
                step: '04',
                title: 'Document & Vault Store',
                tech: 'AWS S3 Encrypted',
                detail: 'High-res site blueprints, RERA certificates, and master plot layout maps.',
            },
        ],
    },
    {
        id: 'smart-india-detective',
        slug: 'smart-india-detective',
        title: 'Smart India Detective — Confidential Corporate Intelligence & Case Portal',
        shortTitle: 'Smart India Detective',
        category: 'Cybersecurity & Web App • Zero-Trust Client Portal',
        tagline:
            'Encrypted client reporting, tamper-proof forensic evidence logging, and military-grade confidential client portals.',
        client: 'Smart India Detective (Pawan Tyagi)',
        industry: 'Corporate Security & Private Investigation',
        year: '2025 - 2026',
        duration: '3 Months',
        accentColor: '#D4AF37',
        secondaryColor: '#00F0FF',
        heroImage:
            '/assets/projects/smart-india-detective/hero-secret-investigation.png',
        mobileImage:
            '/assets/projects/smart-india-detective/hero-secret-investigation.png',
        liveUrl: 'http://smartindiadetective.in/',
        githubUrl: 'https://github.com/zytrixontech/smart-india-preview',
        videoUrl: '/assets/videos/smart-india-video.mp4',
        videoPoster:
            '/assets/projects/smart-india-detective/hero-secret-investigation.png',
        summary:
            'Smart India Detective is a leading private investigation agency with pan-India operations. Zytrixon architected an end-to-end zero-trust digital infrastructure, offering encrypted evidence submission, confidential inquiry routing, and secure client reporting with automated tamper-proofing.',
        challenge:
            'Client confidentiality is paramount in corporate investigation. Traditional communication channels carried severe risks of data intercept, eavesdropping, and unauthorized leakage of sensitive legal or matrimonial evidence.',
        challengePoints: [
            'High-stakes confidentiality requirements prohibiting open web form storage.',
            'Need for time-stamped, watermarked evidence logs that cannot be manipulated or disputed.',
            'Secure anonymous consultation booking for corporate fraud and forensic audits.',
            'Pan-India field investigator dispatch and encrypted evidence sync.',
        ],
        solution:
            'Zytrixon developed an end-to-end encrypted investigation management suite with client consultation routing, zero-knowledge evidence encryption, and automated NDA sign-offs.',
        solutionPoints: [
            'Zero-knowledge encrypted client inquiry vault protecting corporate anonymity.',
            'Digital forensic watermarking on evidence dossiers and investigative summaries.',
            'Pan-India field operative dispatch with GPS-verified milestone reporting.',
            '256-bit AES database encryption adhering to international security standards.',
        ],
        metrics: [
            {
                value: '100%',
                label: 'Confidentiality Rate',
                desc: 'Zero data breaches or leaks across confidential client dossiers.',
            },
            {
                value: '256-Bit',
                label: 'Military Encryption',
                desc: 'End-to-end encrypted storage for case notes, media, and forensic logs.',
            },
            {
                value: '15+ Yrs',
                label: 'Field Experience',
                desc: 'Corporate investigations, matrimonial checks, and cyber fraud forensics.',
            },
            {
                value: '< 2 Hrs',
                label: 'Urgent Dispatch',
                desc: 'Rapid case assignment to field teams across all major Indian metros.',
            },
        ],
        techStack: [
            { name: 'React 19', category: 'Frontend Interface' },
            { name: 'TypeScript', category: 'Strict Type System' },
            { name: 'Laravel Security Core', category: 'Backend Engine' },
            { name: 'AES-256 GCM', category: 'Cryptographic Layer' },
            { name: 'PostgreSQL', category: 'Encrypted Persistence' },
            { name: 'AWS KMS', category: 'Hardware Security Module' },
        ],
        screenshots: [
            {
                title: 'Secret Investigation Agency Portal',
                category: 'Dashboard',
                image: '/assets/projects/smart-india-detective/hero-secret-investigation.png',
                description:
                    'Official homepage and confidential investigation request portal for Smart India Detective.',
            },
        ],
        features: [
            {
                title: 'Zero-Trace Confidential Inquiry',
                desc: 'Clients submit sensitive requirements without cookies, tracking scripts, or unencrypted storage.',
                icon: '🔒',
            },
            {
                title: 'Tamper-Proof Evidence Watermarking',
                desc: 'Automated cryptographic timestamps and dynamic watermarks prevent evidence unauthorized distribution.',
                icon: '🛡️',
            },
            {
                title: 'Corporate Background & Fraud Audit',
                desc: 'Comprehensive financial, criminal, and employment credential verification engine.',
                icon: '🔍',
            },
            {
                title: 'Pan-India Field Coordination',
                desc: 'Centralized command and control assigning tasks to vetted field operatives across India.',
                icon: '📍',
            },
        ],
        demoCredentials: {
            email: 'portal@smartindiadetective.in',
            pass: 'ZeroTrust#Secret',
            role: 'Senior Intelligence Agent',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Tor-Friendly Web Gateway',
                tech: 'Hardened Nginx',
                detail: 'Zero-log request proxy stripping IP addresses and headers for maximum discretion.',
            },
            {
                step: '02',
                title: 'Client Vault UI',
                tech: 'Next.js + CSP Headers',
                detail: 'Strict Content-Security-Policy preventing XSS and third-party script execution.',
            },
            {
                step: '03',
                title: 'Encrypted API Core',
                tech: 'Laravel Sanctum + AES',
                detail: 'Per-case key generation encrypting payloads before writing to disk.',
            },
            {
                step: '04',
                title: 'Hardware Security Keys',
                tech: 'AWS KMS Multi-Region',
                detail: 'Master keys rotated automatically with strict IAM role segregation.',
            },
        ],
    },
    {
        id: 'thread-ax',
        slug: 'thread-ax',
        title: 'Thread Ax — High-Concurrency D2C Fashion & Apparel Platform',
        shortTitle: 'Thread Ax',
        category: 'Headless Commerce • Next.js & Edge Fulfillment',
        tagline:
            'Modern headless storefront delivering sub-second checkout, automated warehouse fulfillment, and dynamic inventory sync.',
        client: 'Thread Ax (Prince Chaudhary)',
        industry: 'Fashion, Apparel & D2C E-Commerce',
        year: '2025 - 2026',
        duration: '4 Months',
        accentColor: '#00F0FF',
        secondaryColor: '#8B5CF6',
        heroImage: '/assets/projects/threadax/hero-new-drop.png',
        mobileImage: '/assets/projects/threadax/hero-new-drop.png',
        liveUrl: 'https://threadax.co.in/',
        githubUrl: 'https://github.com/zytrixontech/threadax-preview',
        videoUrl: '/assets/videos/threadax-video.mp4',
        videoPoster: '/assets/projects/threadax/hero-new-drop.png',
        summary:
            'Thread Ax is a fast-growing contemporary fashion and streetwear label. Zytrixon built a high-performance headless e-commerce ecosystem capable of handling viral flash sales, automated warehouse dispatch, and sub-second checkout experiences.',
        challenge:
            'During festive flash drops and Instagram influencer campaigns, Thread Ax suffered from cart abandonments, database lock contention, and inventory overselling.',
        challengePoints: [
            'Storefront crashes during viral drops with 20,000+ simultaneous checkouts.',
            'Inventory race conditions causing overselling of limited-edition apparel.',
            'Sluggish mobile browsing leading to a 68% cart abandonment rate.',
            'Fragmented courier integration resulting in manual tracking updates.',
        ],
        solution:
            'Zytrixon re-engineered the platform using Next.js 15 App Router, Redis atomic inventory locks, and automated Shiprocket / Delhivery fulfillment webhooks.',
        solutionPoints: [
            'Sub-second page rendering with static product page ISR at edge nodes.',
            'Atomic Redis inventory reservation preventing race conditions and overselling.',
            'One-click UPI and card checkout with instant SMS order tracking updates.',
            'Automated returns, exchange portals, and warehouse barcode scanning integration.',
        ],
        metrics: [
            {
                value: '300%',
                label: 'Sales Velocity Growth',
                desc: 'Revenue surged 3x within 90 days of launching the headless storefront.',
            },
            {
                value: '0.8s',
                label: 'Edge Page Speed',
                desc: 'Sub-second mobile loading speed boosting organic conversion by 45%.',
            },
            {
                value: '99.99%',
                label: 'Drop Uptime',
                desc: 'Zero downtime achieved during peak viral merchandise drops.',
            },
            {
                value: '4.8 / 5',
                label: 'Buyer Satisfaction',
                desc: 'High customer retention with automated order updates via WhatsApp.',
            },
        ],
        techStack: [
            { name: 'Next.js 15', category: 'Headless Storefront' },
            { name: 'React 19', category: 'Dynamic UI' },
            { name: 'TypeScript', category: 'Type Safety' },
            { name: 'TailwindCSS', category: 'Styling' },
            { name: 'Laravel Commerce API', category: 'Cart & Order Engine' },
            { name: 'Redis Cache & Queues', category: 'Flash Sale Locks' },
            { name: 'Razorpay & Cashfree', category: 'Instant Checkout' },
            { name: 'Shiprocket API', category: 'Logistics Sync' },
        ],
        screenshots: [
            {
                title: 'Thread Ax — Streetwear & New Drop Storefront',
                category: 'Dashboard',
                image: '/assets/projects/threadax/hero-new-drop.png',
                description:
                    'Live storefront showcasing unisex oversized hoodies, Dodge Charger drops, and rapid checkout.',
            },
        ],
        features: [
            {
                title: 'High-Concurrency Drop Architecture',
                desc: 'Handles tens of thousands of simultaneous shoppers with zero database locks or slowdowns.',
                icon: '⚡',
            },
            {
                title: 'Atomic Inventory Reservation',
                desc: 'Reserves cart items during payment processing so items never oversell.',
                icon: '📦',
            },
            {
                title: 'One-Click Fast Checkout',
                desc: 'Pre-filled addresses and instant UPI deep-linking reduce cart abandonment significantly.',
                icon: '💳',
            },
            {
                title: 'Automated Logistics Webhooks',
                desc: 'Prints shipping labels, assigns AWB tracking numbers, and pings customer on dispatch.',
                icon: '🚚',
            },
        ],
        demoCredentials: {
            email: 'admin@threadax.co.in',
            pass: 'ThreadAx#Style26',
            role: 'E-Commerce Operations Lead',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Edge CDN & Image Optimization',
                tech: 'Vercel & Cloudflare',
                detail: 'Next-gen AVIF/WebP image compression served directly from nearest edge locations.',
            },
            {
                step: '02',
                title: 'Headless Storefront',
                tech: 'Next.js 15 Server Components',
                detail: 'Instant navigation and server-rendered SEO metadata for fashion catalogs.',
            },
            {
                step: '03',
                title: 'Cart & Inventory Engine',
                tech: 'Redis Clusters',
                detail: 'Atomic operations guarantee inventory integrity during 10,000+ RPS drops.',
            },
            {
                step: '04',
                title: 'Order & Warehouse Pipeline',
                tech: 'Laravel + Shiprocket API',
                detail: 'Automated dispatch notifications, invoice generation, and courier tracking.',
            },
        ],
    },
    {
        id: 'zytrixon-labs',
        slug: 'zytrixon-labs',
        title: 'ZytrixonLabs Pathology — Next-Gen Cloud LIS & Lab Intelligence Platform',
        shortTitle: 'ZytrixonLabs Pathology',
        category: 'HealthTech & Cloud LIS • Diagnostic Lab Intelligence',
        tagline:
            'The all-in-one cloud LIS platform. Connect analyzers, manage partners, and automate reporting with zero paper friction.',
        client: 'ZytrixonLabs Pathology (Diagnostic Networks & Labs)',
        industry: 'HealthTech, Clinical Diagnostics & Laboratory Software',
        year: '2025 - 2026',
        duration: '6 Months',
        accentColor: '#6366F1',
        secondaryColor: '#10B981',
        heroImage: '/assets/projects/zytrixon-labs/hero-pathology-lis.png',
        mobileImage: '/assets/projects/zytrixon-labs/hero-pathology-lis.png',
        liveUrl: 'https://zytrixonlabs.com/',
        githubUrl: 'https://github.com/zytrixontech/zytrixonlabs-pathology',
        videoUrl: '',
        videoPoster: '',
        summary:
            'ZytrixonLabs Pathology is an enterprise, next-generation cloud Laboratory Information System (LIS 2.0). Engineered for modern pathology networks and clinical diagnostic centres, it seamlessly bridges medical laboratory analyzers, automates smart barcode accessioning, and delivers tamper-proof digital test reports directly to doctors and patients with zero paper friction.',
        challenge:
            'Traditional pathology and diagnostic labs struggle with disjointed manual report generation, analyzer data silos, error-prone barcode entry, and delayed test result dispatch to patients.',
        challengePoints: [
            'Manual transcription errors from diagnostic analyzers into paper report templates.',
            'Fragmented B2B partner center billing and sample collection tracking.',
            'Delayed patient turnaround times (TAT) due to manual pathologist signature workflows.',
            'Lack of real-time operational analytics on sample load, bounce rates, and analyzer uptime.',
        ],
        solution:
            'Zytrixon architected an integrated cloud LIS with automated bidirectional ASTM/HL7 analyzer interfacing, digital signature approval queues, and instant WhatsApp/SMS report delivery.',
        solutionPoints: [
            'Direct bidirectional analyzer interfacing syncing sample results in real-time.',
            'Automated QR-coded, tamper-proof pathology reports with digital doctor sign-offs.',
            'Integrated B2B collection center ledger and sample accessioning workflows.',
            'Instant patient report delivery via WhatsApp API and self-service download portal.',
        ],
        metrics: [
            {
                value: '99.9%',
                label: 'Result Accuracy',
                desc: 'Automated analyzer bidirectional data sync eliminates manual transcription errors.',
            },
            {
                value: '65%',
                label: 'Faster TAT',
                desc: 'Turnaround time reduced from hours to minutes with automated doctor digital signatures.',
            },
            {
                value: '100%',
                label: 'Paperless Flow',
                desc: 'Zero paper friction from patient sample collection to WhatsApp report delivery.',
            },
            {
                value: '500k+',
                label: 'Reports Processed',
                desc: 'High-throughput cloud architecture serving diagnostic chains across India.',
            },
        ],
        techStack: [
            { name: 'React 19 & Next.js', category: 'Modern Web UI' },
            { name: 'TypeScript', category: 'Strict Type System' },
            { name: 'TailwindCSS', category: 'Modern Design System' },
            { name: 'Laravel API', category: 'Core LIS Engine' },
            { name: 'HL7 & ASTM Protocols', category: 'Analyzer Interfacing' },
            {
                name: 'WhatsApp Business API',
                category: 'Automated Report Delivery',
            },
            {
                name: 'PostgreSQL Enterprise',
                category: 'Encrypted Health Data',
            },
        ],
        screenshots: [
            {
                title: 'ZytrixonLabs Pathology — Cloud LIS 2.0 Platform',
                category: 'Dashboard',
                image: '/assets/projects/zytrixon-labs/hero-pathology-lis.png',
                description:
                    'Live modern laboratory management portal showing Next-Gen LIS 2.0, lab telemetry, and diagnostic analytics.',
            },
        ],
        features: [
            {
                title: 'Bidirectional Analyzer Connectivity',
                desc: 'Direct integration with hematology, biochemistry, and immunoassay machines using HL7 and ASTM standards.',
                icon: '🔬',
            },
            {
                title: 'Zero Paper Friction & Smart Accessioning',
                desc: 'Automated barcode sample accessioning with real-time tracking across collection centers.',
                icon: '📋',
            },
            {
                title: 'Instant WhatsApp & SMS Report Dispatch',
                desc: 'Patients and referring physicians receive secure, tamper-proof PDF reports the moment they are approved.',
                icon: '📱',
            },
            {
                title: 'B2B Partner & Franchise Management',
                desc: 'Multi-branch ledgers, doctor commission calculations, and collection center performance dashboards.',
                icon: '🏥',
            },
        ],
        demoCredentials: {
            email: 'demo@zytrixonlabs.com',
            pass: 'Pathology#LIS2026',
            role: 'Chief Lab Director',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Sample Collection & Barcode Scan',
                tech: 'Smart Accessioning PWA',
                detail: 'Samples tagged with encrypted barcodes at B2B collection centers and primary clinics.',
            },
            {
                step: '02',
                title: 'Direct Analyzer Interfacing',
                tech: 'HL7 / ASTM Gateway',
                detail: 'Bi-directional communication passing test parameters and pulling raw numerical findings.',
            },
            {
                step: '03',
                title: 'Digital Pathologist Review',
                tech: 'Cloud LIS Engine',
                detail: 'Delta checks, automated critical value alerts, and one-click cryptographic doctor signatures.',
            },
            {
                step: '04',
                title: 'Omnichannel Report Delivery',
                tech: 'WhatsApp API + AWS S3',
                detail: 'Signed PDF reports instantly dispatched with patient notification and verification QR codes.',
            },
        ],
    },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
    return DUMMY_PROJECTS.find((p) => p.slug === slug || p.id === slug);
}
