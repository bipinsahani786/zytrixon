import type { ProjectItem } from '@/lib/projects-data';

export type ProductDetailItem = ProjectItem;

export const PRODUCTS_DATA: ProjectItem[] = [
    {
        id: 'mobile-crm',
        slug: 'mobile-crm',
        title: 'Mobile CRM — Intelligent Retail Store Billing & Party Ledger Platform',
        shortTitle: 'Mobile CRM',
        category: 'Proprietary IP • Billing, Retail CRM & Party Ledger',
        tagline:
            'Manage Your Retail Store Intelligently — Unified party billing, custom GST invoicing, party ledger payments, and customer accounts.',
        client: 'Zytrixon Proprietary Suite',
        industry: 'Retail Technology & Enterprise Ledger Management',
        year: '2025 - 2026',
        duration: 'Enterprise Ready',
        architecture: 'Cloud Retail Ledger & Edge POS Terminal Architecture',
        accentColor: '#0EA5E9',
        secondaryColor: '#38BDF8',
        heroImage: '/assets/products/mobile-crm-landscape.png',
        mobileImage: '/assets/products/mobile-crm-mobile.png',
        liveUrl:
            'https://wa.me/917049711475?text=Hi%20Zytrixon%2C%20I%20would%20like%20to%20schedule%20an%20enterprise%20demo%20for%20Mobile%20CRM.',
        videoUrl: '',
        videoPoster: '/assets/products/mobile-crm-landscape.png',
        summary:
            'Mobile CRM is an intelligent retail management platform designed to unify daily business collections, custom billing invoices, party ledger payments, and customer credit accounts inside a clean, modern ecosystem. Engineered with secure cloud access, real-time transaction reconciliation, and offline-first mobile readiness.',
        challenge:
            'Retailers and distributors frequently face fragmented bookkeeping, uncollected party debts, chaotic manual invoicing during rush hours, and lack of real-time visibility into daily profit margins and cash flow balances.',
        challengePoints: [
            'Fragmented Party Ledgers: Suppliers and buyers credit balance tracking split between paper bahi-khata notebooks and disconnected spreadsheets.',
            'Peak Hour Invoice Delays: Slow billing queues causing lost sales and frustrated walk-in customers.',
            'Delayed Payment Recovery: No automated ledger statements or WhatsApp balance reminders to overdue credit accounts.',
            'Reconciliation Gaps: Daily cash drawer, UPI, and bank collections drifting apart with zero automated audit trails.',
        ],
        solution:
            'Zytrixon engineered a unified cloud retail OS with sub-second invoice calculations, double-entry automated party ledgers, automated WhatsApp payment statements, and live multi-counter cash flow telemetry.',
        solutionPoints: [
            'Unified Party Ledger Engine: Real-time debit/credit reconciliation for all parties and suppliers with instant receipt logs.',
            'Sub-Second GST Invoicing: Fast barcode scanning, custom tax configurations, and one-tap thermal Bluetooth receipt printing.',
            'Customer Accounts & Credit Alerts: Customer purchase logs, credit limits, and automated WhatsApp payment reminders.',
            'Live Business Collections Telemetry: Real-time daily dashboard tracking cash, UPI, bank splits, and profit margins.',
        ],
        metrics: [
            {
                value: '100%',
                label: 'GST Ledger Compliant',
                desc: 'Automated tax reports, party wise credit ledger & input tax reconciliation.',
            },
            {
                value: '< 1.2s',
                label: 'Invoice Speed',
                desc: 'Sub-second invoice calculation, barcode item additions & thermal receipt generation.',
            },
            {
                value: '256-Bit',
                label: 'SSL Encrypted',
                desc: 'Bank-grade encrypted database safeguarding retailer financials and party balances.',
            },
            {
                value: 'Zero',
                label: 'Accounting Drift',
                desc: 'Double-entry auto ledger balancing with zero manual calculation errors.',
            },
        ],
        features: [
            {
                title: 'Unified Party Ledger',
                desc: 'Track debit/credit balances, payments received, and pending balances across all suppliers and parties in real time.',
                icon: '📒',
            },
            {
                title: 'Custom Retail Invoicing',
                desc: 'Generate professional GST invoices with itemized tax calculations, barcode scanning, and instant thermal printing.',
                icon: '🧾',
            },
            {
                title: 'Customer Account Records',
                desc: 'Manage customer purchasing histories, credit limits, contact profiles, and automatic payment reminders via WhatsApp.',
                icon: '👥',
            },
            {
                title: 'Real-Time Business Collections',
                desc: 'Instant daily collections overview with cash vs UPI breakdowns, profit margin tracking, and bank deposit reconciliations.',
                icon: '💳',
            },
        ],
        techStack: [
            { name: 'React Native', category: 'Handheld Mobile Terminal' },
            { name: 'Laravel 11', category: 'Cloud API & Ledger Engine' },
            {
                name: 'MySQL Enterprise',
                category: 'Financial Records & ACID Transactions',
            },
            { name: 'WebSockets', category: 'Real-Time Multi-Counter Sync' },
            { name: 'Dynamic UPI QR', category: 'Instant Payment Settlement' },
            {
                name: 'Thermal Bluetooth API',
                category: 'Hardware Printing Bridge',
            },
        ],
        screenshots: [
            {
                title: 'Mobile CRM Retail Operations Dashboard',
                category: 'Dashboard',
                image: '/assets/products/mobile-crm-landscape.png',
                description:
                    'Comprehensive store management overview featuring business overview, sales, revenue, profit & loss, and supplier accounting.',
            },
            {
                title: 'Mobile CRM Handheld POS View',
                category: 'Mobile App',
                image: '/assets/products/mobile-crm-mobile.png',
                description:
                    'Responsive mobile POS interface for rapid on-the-floor billing, invoices, and real-time ledger sync.',
            },
        ],
        architectureFlow: [
            {
                step: '01',
                title: 'Edge Terminal Input',
                tech: 'Handheld POS & Barcode',
                detail: 'Rapid item scan and customer lookup on mobile or tablet.',
            },
            {
                step: '02',
                title: 'Ledger Engine Verification',
                tech: 'ACID Double-Entry Core',
                detail: 'Validates credit limits, tax items, and party ledger entries.',
            },
            {
                step: '03',
                title: 'Payment Settlement',
                tech: 'Dynamic UPI & Cash Drawer',
                detail: 'Reconciles payment tender with sub-second receipt generation.',
            },
            {
                step: '04',
                title: 'Encrypted Cloud Sync',
                tech: 'Secure WebSocket Bridge',
                detail: 'Multi-device real-time sync with encrypted cloud backups.',
            },
        ],
    },
    {
        id: 'grocery-mart',
        slug: 'grocery-mart',
        title: 'Grocery Mart — Intelligent Retail Dashboard & Supermarket Cloud POS',
        shortTitle: 'Grocery Mart',
        category: 'Proprietary IP • Retail & Supermarket Operating System',
        tagline:
            'The intelligent retail dashboard. Access real-time billing logs, analytics, and stock records with SSL encryption and high-speed checkout.',
        client: 'Zytrixon Proprietary Suite',
        industry: 'Supermarkets, Department Stores & FMCG Retail',
        year: '2025 - 2026',
        duration: 'Enterprise Ready',
        architecture:
            'Distributed Hybrid POS & Multi-Lane Cloud Supermarket Core',
        accentColor: '#207393',
        secondaryColor: '#38BDF8',
        heroImage: '/assets/products/grocery-mart-landscape.png',
        mobileImage: '/assets/products/grocery-mart-mobile.png',
        liveUrl:
            'https://wa.me/917049711475?text=Hi%20Zytrixon%2C%20I%20would%20like%20to%20schedule%20an%20enterprise%20demo%20for%20Grocery%20Mart.',
        videoUrl: '',
        videoPoster: '/assets/products/grocery-mart-landscape.png',
        summary:
            'Grocery Mart is a high-velocity retail and supermarket operating system engineered for rapid barcode checkout, real-time inventory tracking, multi-counter cash registers, and deep analytics. Built for grocery chains, department stores, and supermarkets with instant invoice printing and stock telemetry.',
        challenge:
            'Supermarkets and grocery chains face long customer checkout queues during peak rush hours, frequent barcode scanning hiccups, stock-out discrepancies between shelves and warehouse inventory, and cashier discrepancy tracking.',
        challengePoints: [
            'Checkout Queue Bottlenecks: Slow POS billing software creating long lines and cart abandonment during evening rushes.',
            'Stock Out Inaccuracies: Manual inventory counts leading to out-of-stock items on supermarket shelves.',
            'Multi-Lane Counter Desync: Inability to track individual cashier registers, cash drawers, and split tenders in real time.',
            'Internet Outage Vulnerability: Traditional cloud-only POS systems halting all checkout registers when connectivity flickers.',
        ],
        solution:
            'Zytrixon engineered a hybrid offline-first supermarket POS with millisecond barcode lookups, automated batch inventory deductions, live multi-lane telemetry, and thermal receipt printing.',
        solutionPoints: [
            'High-Velocity Barcode Checkout: Sub-second item scanning reducing queue times by 65% with weight-scale integrations.',
            'Automated Inventory Telemetry: Live stock deductions with low-threshold alerts and batch expiry reminders.',
            'Multi-Counter Cashier Audit: Granular role permissions, split tender support, and cashier shift balance reconciliation.',
            'Resilient Hybrid Offline POS: Local SQLite caching ensuring registers run smoothly even during internet drops.',
        ],
        metrics: [
            {
                value: '< 1.5s',
                label: 'Barcode Checkout',
                desc: 'Ultra-fast barcode scanning and checkout reducing queue wait times by 65%.',
            },
            {
                value: '99.9%',
                label: 'Stock Accuracy',
                desc: 'Real-time automated inventory deduction upon barcode scan with zero shelf discrepancies.',
            },
            {
                value: 'High Speed',
                label: 'Cloud & Offline POS',
                desc: 'Hybrid local caching ensuring counters never halt during internet outages.',
            },
            {
                value: 'SSL Encrypted',
                label: 'Secure Cloud Core',
                desc: 'Protected cashier logins, role-based auditing, and tamper-proof billing records.',
            },
        ],
        features: [
            {
                title: 'Real-Time Billing Logs',
                desc: 'Live transaction logging with cashier audit trails, split tenders, discounts, and instant thermal receipt printing.',
                icon: '🧾',
            },
            {
                title: 'Intelligent Stock Records',
                desc: 'Automated inventory deduction upon barcode scan, low stock alert thresholds, and batch expiry tracking.',
                icon: '📦',
            },
            {
                title: 'Sales & Profit Analytics',
                desc: 'Live telemetry dashboard covering top-selling SKUs, category profit margins, peak hour footfall, and tax summaries.',
                icon: '📈',
            },
            {
                title: 'High-Speed POS Terminal',
                desc: 'Lightweight, responsive terminal interface compatible with touch screens, barcode guns, weighing scales, and cash drawers.',
                icon: '⚡',
            },
        ],
        techStack: [
            {
                name: 'Next.js 15 & React',
                category: 'High-Velocity Cashier Terminal',
            },
            {
                name: 'Laravel 11 / Node Engine',
                category: 'Enterprise Retail Engine',
            },
            {
                name: 'MySQL Enterprise',
                category: 'High-Throughput Inventory Core',
            },
            {
                name: 'Redis Cache',
                category: 'Sub-Millisecond Barcode Lookups',
            },
            {
                name: 'Thermal ESC/POS Bridge',
                category: 'Hardware Receipt Integration',
            },
            { name: 'Dynamic UPI QR', category: 'Countertop Instant Payments' },
        ],
        screenshots: [
            {
                title: 'Grocery Mart Command Center & Terminal',
                category: 'Dashboard',
                image: '/assets/products/grocery-mart-landscape.png',
                description:
                    'Intelligent supermarket dashboard showing operational terminal, POS shortcuts, revenue velocity, and live activity logs.',
            },
            {
                title: 'Supermarket Analytics & Staff KPI Matrix',
                category: 'Analytics',
                image: '/assets/products/grocery-mart-analytics.png',
                description:
                    'Real-time gross margins, average cart size, checkout void rates, and associate speed efficiency radar comparisons.',
            },
            {
                title: 'Grocery Mart Mobile POS Interface',
                category: 'Mobile App',
                image: '/assets/products/grocery-mart-mobile.png',
                description:
                    'Handheld barcode scanning, live order queue, and mobile cashier checkout terminal.',
            },
        ],
        architectureFlow: [
            {
                step: '01',
                title: 'Barcode & Scale Sensing',
                tech: 'Optical Scanner & Scale',
                detail: 'Item barcode capture and automated weight computation in 200ms.',
            },
            {
                step: '02',
                title: 'In-Memory Cache Lookup',
                tech: 'Redis Distributed Cache',
                detail: 'Sub-millisecond SKU price calculation, batch verification, and promotion rules.',
            },
            {
                step: '03',
                title: 'Split Tender Settlement',
                tech: 'UPI, Card & Cash Reconcile',
                detail: 'Instant payment authorization and physical thermal receipt dispensing.',
            },
            {
                step: '04',
                title: 'Real-time Stock Deduction',
                tech: 'Event-Driven Message Queue',
                detail: 'Warehouse and shelf inventory counts update globally across all branches.',
            },
        ],
    },
];

export function getProductBySlug(slug: string): ProjectItem | undefined {
    return PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug);
}
