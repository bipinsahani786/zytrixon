export interface ProjectScreenshot {
    title: string;
    category: 'Dashboard' | 'Mobile App' | 'Analytics' | 'Workflow' | string;
    image: string;
    fullImage?: string;
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
    architecture?: string;
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
            'Not Just Brokers. We Are Partners — "Trust is our Capital." Direct property owners & investors across Raj Nagar Extension & West UP with ₹0 brokerage and verified registry-ready titles.',
        client: 'S.K. Infratech (Sandeep Tyagi - Founder & CEO)',
        industry: 'Real Estate & Construction Infrastructure',
        year: '2025 - 2026',
        duration: '2 Months',
        architecture: 'Laravel & Cloudflare CDN',
        accentColor: '#F97316',
        secondaryColor: '#D4AF37',
        heroImage: '/assets/projects/sk-infratech/hero-invest-right.jpg',
        mobileImage: '/assets/projects/sk-infratech/sk-infratech-mobile.png',
        liveUrl: 'https://skinfrareal.com/',
        githubUrl: 'https://github.com/zytrixontech/sk-infratech-preview',
        videoUrl: '/assets/videos/sk-infratech-video.mp4',
        videoPoster: '/assets/projects/sk-infratech/hero-invest-right.jpg',
        summary:
            'S.K. Infratech is a premier real estate development and direct investment firm operating primarily in Ghaziabad (specifically Raj Nagar Extension) and West UP. Differentiating themselves as direct property owners and capital investors rather than traditional brokers, they purchase properties using their own capital, eliminate middlemen, verify 30-year chain of title via an in-house legal team, and provide 100% "Registry-Ready" inventory with zero commission.',
        challenge:
            'The real estate market across Ghaziabad and West UP was plagued by unlicensed middlemen, title disputes on unverified lands, high broker markups, and an acute lack of liquidity for landowners looking for urgent capital.',
        challengePoints: [
            'Middleman Markups & Brokerage Fees: Traditional brokers inflating property costs without taking title accountability.',
            'Unverified Land Titles & Legal Exposure: Buyers frequently trapped in litigation or incomplete registry chains.',
            'Lack of Liquidity for Property Owners: Sellers struggling for months to liquidate land assets or obtain fair token advances.',
            'Fragmented Inquiries & Slow Site Visits: Absence of immediate digital booking, RERA documentation, and direct director connect.',
        ],
        solution:
            'Zytrixon engineered a high-speed direct-inventory portal supporting S.K. Infratech\'s Direct Investment Model: direct owner property showcases, in-house triple-check legal verification, instant buy-back liquidity workflows, and automated site-visit dispatch.',
        solutionPoints: [
            'Direct Ownership Model: Properties acquired with internal capital before listing, guaranteeing ₹0 commission and direct developer savings.',
            'Triple-Check Legal System: 3-lawyer in-house verification of 30-year title chains and immediate direct registry.',
            'Instant Buy-Back & Liquidity: Plot owners receive same-day site inspections and instant token payouts directly from company capital.',
            'Multi-Category Asset Portfolio: Streamlined catalog across Residential Plots & Flats, Agricultural Land, Farmhouses, and Industrial Assets.',
        ],
        metrics: [
            {
                value: '12+ Yrs',
                label: 'Market Experience',
                desc: 'Over a decade of leadership and ethical land development in West UP.',
            },
            {
                value: '5,000+',
                label: 'Units Delivered',
                desc: 'Residential plots, luxury apartments, and farmhouses delivered with 100% registry.',
            },
            {
                value: '₹0',
                label: 'Brokerage Charged',
                desc: 'Direct-to-owner transactions ensuring zero middleman commissions.',
            },
            {
                value: '100%',
                label: 'Legal Approval Rate',
                desc: 'Triple-check title scrutiny ensuring zero litigation across all holdings.',
            },
        ],
        techStack: [
            { name: 'React 19 & Next.js', category: 'Frontend UI' },
            { name: 'TypeScript', category: 'Type Safety' },
            { name: 'TailwindCSS', category: 'Design System' },
            { name: 'Laravel API', category: 'Backend Engine' },
            { name: 'MySQL Enterprise', category: 'Database' },
        ],
        screenshots: [
            {
                title: 'Hero & Direct Inventory Showcase',
                category: 'Dashboard',
                image: '/assets/projects/sk-infratech/hero-invest-right.jpg',
                description:
                    'Modern real estate showcase featuring verified prime properties in Raj Nagar Extension with direct owner inventory and ₹0 brokerage.',
            },
            {
                title: 'The Minds of Trust — Leadership Team',
                category: 'Workflow',
                image: '/assets/projects/sk-infratech/team-pillars-trust.jpg',
                description:
                    'Core leadership team: Sandeep Tyagi (Founder & CEO), Rajeev Tyagi (Acquisition Manager), Pawan Tyagi (Sales & ROI Specialist), and Neha Gupta (Customer Success).',
            },
            {
                title: 'Prime Deals & Registry-Ready Portfolio',
                category: 'Dashboard',
                image: '/assets/projects/sk-infratech/property-deals.jpg',
                description:
                    'Verified Residential Plots, 3BHK Luxury Flats, Farmhouses, and High-ROI Agricultural & Industrial Lands with full registry status.',
            },
            {
                title: 'Dominance Across West UP Hubs',
                category: 'Analytics',
                image: '/assets/projects/sk-infratech/portfolio-stats.jpg',
                description:
                    'Strategic market dominance across RRTS Corridor (Duhai-Ghaziabad), Raj Nagar Extension, and Delhi-NCR Expressway Hubs with 500+ unit footprint.',
            },
            {
                title: 'Director Message & Client Verification',
                category: 'Workflow',
                image: '/assets/projects/sk-infratech/client-testimonials.jpg',
                description:
                    '"Trust is our Capital" — Authentic client testimonials and director commitment to complete transparency in West UP real estate.',
            },
        ],
        features: [
            {
                title: 'Direct Ownership & Zero Commission',
                desc: 'We purchase properties with our own capital before listing. Buyers deal directly with the owners with ₹0 brokerage fees.',
                icon: '🏢',
            },
            {
                title: 'Triple-Check Legal Assurance',
                desc: 'In-house legal team verifies the 30-year chain of title and handles paperwork for complete direct registry readiness.',
                icon: '⚖️',
            },
            {
                title: 'Instant Buy-Back & Liquidity',
                desc: 'Immediate liquidity for property owners with same-day site visits and instant token advance directly from company reserves.',
                icon: '⚡',
            },
            {
                title: 'Multi-Category Asset Portfolio',
                desc: 'Diverse prime holdings across Residential Plots & Flats, Agricultural Land, Farmhouses, and Industrial Properties in Raj Nagar Ext & RRTS Corridor.',
                icon: '🗺️',
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
                title: 'Edge Property CDN',
                tech: 'Cloudflare Edge',
                detail: 'Sub-second catalog browsing and ultra-fast plot blueprint rendering for buyers on 4G/5G mobile networks.',
            },
            {
                step: '02',
                title: 'Direct Inventory Catalog UI',
                tech: 'Next.js & React',
                detail: 'Real-time filtering across Residential Plots, Flats, Farmhouses, and Agri Lands with instant inquiry modal.',
            },
            {
                step: '03',
                title: 'Buy-Back & Site Visit Dispatch',
                tech: 'Laravel Core Engine',
                detail: 'Automated lead dispatch routing inspection requests and token payouts directly to Sandeep Tyagi & Rajeev Tyagi.',
            },
            {
                step: '04',
                title: 'Triple-Check Legal Safe',
                tech: 'AWS S3 Encrypted',
                detail: 'Secure digital vault storing 30-year chain documentation, government approvals, and mutation certificates.',
            },
        ],
    },
    {
        id: 'smart-india-detective',
        slug: 'smart-india-detective',
        title: 'Smart India Detective — Confidential Corporate Intelligence & Case Portal',
        shortTitle: 'Smart India Detective',
        category: 'Cybersecurity & Web App • Zero-Trace Case Portal',
        tagline:
            'All Types of Secret & Private Investigation In India & Abroad — Surveillance, Matrimonial, Corporate Fraud, Cyber Inquiry, and Court-Admissible Evidence with 100% Discretion.',
        client: 'Smart India Detective (Pawan Tyagi)',
        industry: 'Corporate Security & Private Investigation',
        year: '2025 - 2026',
        duration: '1 Month',
        architecture: 'Laravel 11 Enterprise Architecture',
        accentColor: '#D4AF37',
        secondaryColor: '#EAB308',
        heroImage:
            '/assets/projects/smart-india-detective/hero-secret-investigation.png',
        mobileImage:
            '/assets/projects/smart-india-detective/smart-india-mobile.png',
        liveUrl: 'https://smartindiadetective.in/',
        githubUrl: 'https://github.com/zytrixontech/smart-india-preview',
        videoUrl: '',
        videoPoster:
            '/assets/projects/smart-india-detective/hero-secret-investigation.png',
        summary:
            'Smart India Detective is an elite private investigation agency operating Pan-India and internationally since 2008. Specializing in personal, matrimonial (pre/post), business fraud, cyber inquiries, surveillance, undercover operations, and sting missions, they gather legally valid court evidence with 100% confidentiality, advanced spy technology, and encrypted communication channels.',
        challenge:
            'Individuals and corporations face high-stakes threats ranging from matrimonial infidelity and asset disputes to corporate fraud, extortion, and cyber blackmailing, where traditional reporting risks leaks, fabricated claims, or inadmissible evidence.',
        challengePoints: [
            'High-Stakes Confidentiality: Sensitive personal, matrimonial, and corporate inquiries requiring zero digital trace and strict non-disclosure.',
            'Court-Admissible Legal Evidence: Gathering high-resolution photo/video proofs and document verifications that stand up in court and divorce proceedings.',
            'Pan-India & Cross-Border Coordination: Orchestrating surveillance and shadowing across multiple state borders without compromising operative identities.',
            '24/7 Crisis Dispatch: Immediate urgent handling for missing person tracing, corporate theft, and digital extortion cases.',
        ],
        solution:
            'Zytrixon developed an end-to-end encrypted investigation management portal built exclusively on Laravel, featuring zero-trace inquiry routing, 24/7 emergency hotline bridges, tamper-proof client consultation booking, and discreet case intake.',
        solutionPoints: [
            'Encrypted Zero-Trace Inquiry Line: Secure intake portal with automated identity scrubbing and confidential 24/7 emergency dispatch.',
            'Comprehensive Multi-Domain Workflows: Structured inquiry pipelines for Matrimonial (Pre/Post), Corporate Fraud, Surveillance, Cyber Crime, and Asset Verification.',
            'Advanced Tech & Spy Gadget Integration: Supporting digital footprint tracking, high-resolution evidence uploads, and GPS-verified operative logs.',
            'Strict Legal & Ethical Compliance: Operating strictly within Indian evidence frameworks to deliver 100% court-admissible dossiers.',
        ],
        metrics: [
            {
                value: '15+ Yrs',
                label: 'Field Experience',
                desc: 'Trusted since 2008 solving complex personal, matrimonial, and corporate cases.',
            },
            {
                value: '2,000+',
                label: 'Cases Solved',
                desc: 'Pan-India and international operations with successful court-valid closures.',
            },
            {
                value: '50+',
                label: 'Expert Operatives',
                desc: 'Vetted field agents, undercover specialists, and cyber forensic analysts.',
            },
            {
                value: '100%',
                label: 'Confidentiality',
                desc: 'Strict non-disclosure policy with zero digital trace and total client anonymity.',
            },
        ],
        techStack: [
            { name: 'Laravel 11', category: 'Core Backend Engine' },
            { name: 'Blade & TailwindCSS', category: 'Zero-Trace Frontend' },
            { name: 'MySQL Enterprise', category: 'Encrypted Database' },
            { name: 'Laravel Sanctum', category: 'Secure Session Shield' },
        ],
        screenshots: [
            {
                title: 'Secret Investigation Agency Portal',
                category: 'Dashboard',
                image: '/assets/projects/smart-india-detective/hero-secret-investigation.png',
                description:
                    'Official homepage and confidential investigation request portal for Smart India Detective delivering complete detective services personal & business.',
            },
            {
                title: 'Mobile Case Intake & Rapid Response',
                category: 'Mobile App',
                image: '/assets/projects/smart-india-detective/smart-india-mobile.png',
                description:
                    'Mobile-first responsive investigation interface enabling 24/7 emergency hotline connect, encrypted evidence submission, and immediate WhatsApp dispatch.',
            },
        ],
        features: [
            {
                title: 'Personal & Matrimonial Checks',
                desc: 'Pre/post marriage verification, extra-marital affairs proof, character checks, and loyalty testing with 100% secrecy.',
                icon: '💍',
            },
            {
                title: 'Surveillance & Undercover Ops',
                desc: 'Physical shadowing, undercover missions, and sting operations gathering high-resolution video and photographic evidence.',
                icon: '🕵️',
            },
            {
                title: 'Corporate Fraud & Asset Verification',
                desc: 'Internal theft detection, employment screening, financial asset checks, and debtor tracing across India and abroad.',
                icon: '🏢',
            },
            {
                title: 'Cyber Inquiry & Anti-Blackmailing',
                desc: 'Social site investigation, digital footprint tracking, online extortion containment, and cyber forensic inquiry.',
                icon: '💻',
            },
        ],
        demoCredentials: {
            email: 'indiasmart89@gmail.com',
            pass: 'SmartIndia#Secure2026',
            role: 'Chief Investigative Officer',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Tor-Friendly Web Gateway',
                tech: 'Hardened Nginx & Cloudflare',
                detail: 'Zero-log request proxy stripping IP addresses and headers for maximum client discretion.',
            },
            {
                step: '02',
                title: 'Client Intake Shield',
                tech: 'Laravel Blade + CSP Headers',
                detail: 'Strict Content-Security-Policy and zero-trace session handling preventing XSS and metadata leakage.',
            },
            {
                step: '03',
                title: 'Encrypted API Core',
                tech: 'Laravel 11 + AES-256',
                detail: 'Per-case key generation encrypting payloads before writing to secure disk storage.',
            },
            {
                step: '04',
                title: '24/7 Hotline & Case Routing',
                tech: 'Laravel Queue & WhatsApp API',
                detail: 'Immediate dispatch to senior operatives and Pan-India field teams across Delhi, Ghaziabad, and nationwide.',
            },
        ],
    },
    {
        id: 'thread-ax',
        slug: 'thread-ax',
        title: 'ThreadAX — High-Concurrency D2C Streetwear & Apparel Platform',
        shortTitle: 'ThreadAX',
        category: 'Full-Stack Commerce • Laravel & Edge Fulfillment',
        tagline:
            'Premium 280GSM+ heavyweight oversized streetwear with sub-second checkout, automated warehouse dispatch, and Pan-India delivery.',
        client: 'ThreadAX (Prince Chaudhary)',
        industry: 'Streetwear, Apparel & D2C E-Commerce',
        year: '2025 - 2026',
        duration: '15 Days',
        architecture: 'Laravel 11 Architecture',
        accentColor: '#00F0FF',
        secondaryColor: '#8B5CF6',
        heroImage: '/assets/projects/threadax/hero-new-drop.png',
        mobileImage: '/assets/projects/threadax/threadax-mobile.png',
        liveUrl: 'https://threadax.co.in/',
        githubUrl: 'https://github.com/zytrixontech/threadax-preview',
        videoUrl: '',
        videoPoster: '',
        summary:
            "ThreadAX is India's fastest-growing premium streetwear brand, crafting bold oversized apparel, hoodies, and heavyweight 280GSM cotton essentials. Zytrixon engineered a high-velocity Laravel D2C commerce platform featuring sub-second edge rendering, Redis atomic cart reservation, Razorpay payments, and automated Pan-India shipping.",
        challenge:
            'Viral TikTok & Instagram drop spikes caused database lock contention, cart abandonments, and inventory overselling across limited-edition hoodies and graphic oversized tees. ThreadAX needed an ultra-fast storefront with automated 7-day returns and real-time courier tracking.',
        challengePoints: [
            'Spikes of 20,000+ simultaneous shoppers during limited-edition streetwear drops causing server congestion.',
            'Inventory race conditions causing overselling of popular 280GSM oversized tees and hoodies.',
            'Mobile drop-off and friction during multi-step checkout, reducing impulse purchase conversions.',
            'Fragmented logistics coordination for Pan-India delivery and 7-day no-questions-asked return management.',
        ],
        solution:
            'Zytrixon re-engineered the complete commerce engine using Laravel 11, Redis atomic locks, optimized Next.js/Blade storefront caching, Razorpay instant checkout, and automated Shiprocket/Delhivery logistics dispatch.',
        solutionPoints: [
            'Sub-second catalog browsing and instant mobile rendering across Unisex, Men, Women, Oversized, and Hoodies collections.',
            'Atomic Redis inventory reservation preventing overselling during viral high-traffic drop moments.',
            'Seamless Razorpay checkout with instant UPI deep-linking, cards, and automated WhatsApp order confirmation (+91 8757184136).',
            'Automated Pan-India courier dispatch for orders above ₹999 and a self-service 7-day hassle-free return portal.',
        ],
        metrics: [
            {
                value: '280+ GSM',
                label: 'Heavyweight Cotton',
                desc: 'Bio-washed premium fabric crafted for supreme structure, drape, and long-lasting durability.',
            },
            {
                value: '₹999+',
                label: 'Free Shipping Threshold',
                desc: 'Automated free Pan-India delivery with fast tracked dispatch and live order alerts.',
            },
            {
                value: '7 Days',
                label: 'No-Questions Returns',
                desc: 'Hassle-free automated return & exchange portal ensuring 100% buyer trust and confidence.',
            },
            {
                value: '4.9 / 5',
                label: 'Community Rating',
                desc: 'Verified buyer reviews from fashion bloggers, stylists, and streetwear enthusiasts nationwide.',
            },
        ],
        techStack: [
            { name: 'Laravel 11', category: 'Core Backend Framework' },
            { name: 'React 19 & Next.js', category: 'Storefront UI' },
            { name: 'TypeScript', category: 'Type Safety' },
            { name: 'TailwindCSS', category: 'Styling' },
            {
                name: 'Laravel Horizon & Redis',
                category: 'Queue & Cache Engine',
            },
            { name: 'MySQL Enterprise', category: 'Transactional DB' },
            { name: 'Razorpay Payment Gateway', category: 'Instant Checkout' },
        ],
        screenshots: [
            {
                title: 'ThreadAX — Complete Storefront & Product Ecosystem',
                category: 'Full Storefront',
                image: '/assets/projects/threadax/long.png',
                fullImage: '/assets/projects/threadax/long.png',
                description:
                    'Explore the complete ThreadAX D2C storefront — 280GSM+ heavyweight oversized essentials, Menswear & Womenswear collections, Dodge Velocity drops, verified buyer reviews, and Razorpay checkout.',
            },
        ],
        features: [
            {
                title: '280GSM+ Heavyweight Cotton',
                desc: 'Thick enough to hold a crisp oversized structure, bio-washed with double-stitched seams and ribbed anti-sag collars.',
                icon: '✨',
            },
            {
                title: 'Free Pan-India Delivery & 7-Day Returns',
                desc: 'Free shipping on orders above ₹999 and easy 7-day no-questions-asked return workflows.',
                icon: '📦',
            },
            {
                title: 'Razorpay Instant UPI & Card Checkout',
                desc: 'SSL-encrypted, sub-second checkout with instant payment verification and automated WhatsApp dispatch alerts.',
                icon: '🔒',
            },
            {
                title: 'High-Concurrency Drop Architecture',
                desc: 'Redis atomic locking handles viral influencer drop surges of 20,000+ RPS with zero overselling.',
                icon: '⚡',
            },
        ],
        demoCredentials: {
            email: 'support@threadax.co.in',
            pass: 'ThreadAx#Streetwear26',
            role: 'Brand Operations & Store Admin',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Edge CDN & Asset Delivery',
                tech: 'Cloudflare Edge CDN',
                detail: 'High-speed edge routing and image compression for ultra-fast mobile catalog browsing and lookbook rendering.',
            },
            {
                step: '02',
                title: 'High-Concurrency Core API',
                tech: 'Laravel 11 Enterprise API',
                detail: 'Modular Laravel architecture managing product variants, session carts, Razorpay webhooks, and customer auth.',
            },
            {
                step: '03',
                title: 'Cart & Inventory Reservation',
                tech: 'Laravel Horizon + Redis',
                detail: 'Atomic operations guarantee inventory integrity during viral 20,000+ shopper drops.',
            },
            {
                step: '04',
                title: 'Automated Logistics Webhooks',
                tech: 'Laravel Queues + Shiprocket',
                detail: 'Automated dispatch notifications via WhatsApp (+91 8757184136), invoice generation, and courier tracking.',
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
        duration: '2 Months',
        architecture: 'Laravel, Blade & Inertia Architecture',
        accentColor: '#6366F1',
        secondaryColor: '#10B981',
        heroImage: '/assets/projects/zytrixon-labs/hero-pathology-lis.png',
        mobileImage: '/assets/projects/zytrixon-labs/zytrixon-labs-mobile.png',
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
            { name: 'Laravel 11', category: 'Core Backend Framework' },
            { name: 'React 19', category: 'Frontend UI' },
            {
                name: 'Blade & Inertia.js',
                category: 'Full-Stack UI Architecture',
            },
            { name: 'TypeScript', category: 'Strict Type System' },
            { name: 'TailwindCSS', category: 'Modern Design System' },
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
