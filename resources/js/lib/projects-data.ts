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
    playStoreUrl?: string;
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
        id: 'hostel-erp',
        slug: 'hostel-erp',
        title: 'HostelERP — Campus & Hostel Facility Management Software',
        shortTitle: 'HostelERP',
        category:
            'Campus & Hostel ERP • Room Allocation, Billing & Student Portals',
        tagline:
            'Hostel ERP software made simple! Easily manage rooms, students, and facilities in one place. Save time, reduce errors, and run your hostel efficiently.',
        client: 'HostelERP (HostelMate)',
        industry: 'Education Technology & Hostel Management Software',
        year: '2025 - 2026',
        duration: '1 Month',
        architecture: 'Cloud ERP Architecture with Student & Admin Portals',
        accentColor: '#4338CA',
        secondaryColor: '#EAB308',
        heroImage: '/assets/projects/hostel-erp/hostel-hero-landscape.png',
        mobileImage: '/assets/projects/hostel-erp/hostel-mobile.png',
        liveUrl: 'https://hostelerp.zytrixontech.com/',
        videoUrl: '',
        videoPoster: '/assets/projects/hostel-erp/hostel-hero-landscape.png',
        summary:
            'HostelERP is a comprehensive campus and hostel management software suite engineered to automate resident room allocation, student records, fee collection, and maintenance workflows. Serving universities, colleges, and private student residencies, it centralizes resident check-ins, automated billing cycles, room occupancy analytics, and digital grievance resolution into an intuitive unified dashboard.',
        challenge:
            'Hostel wardens and campus administrators struggle with manual register books, lost paper complaints, delayed fee reconciliations, double-allocated rooms during semester intakes, and zero real-time visibility into bed occupancy or maintenance turnaround.',
        challengePoints: [
            'Manual Room Allocation Delays: Paper-based room assignments during peak admission intake causing confusion, double-bookings, and long student wait times.',
            'Fee Collection Bottlenecks: Unreconciled manual fee slips leading to recurring payment delays and administrative accounting overhead.',
            'Untracked Maintenance Complaints: Paper maintenance registers resulting in unresolved room repairs, plumbing issues, and frustrated residents.',
            'Absence of Unified Occupancy Metrics: Wardens lacking instant digital visibility into current vacancy, revenue per block, and student check-ins.',
        ],
        solution:
            'Zytrixon developed an all-in-one cloud ERP system featuring an automated room allocation matrix, digital student profiles with attendance logs, automated fee billing with instant invoice generation, and a responsive student ticketing portal.',
        solutionPoints: [
            'Automated Room & Bed Matrix: Visual room occupancy dashboard with real-time status tracking across single, double, and dorm rooms.',
            'Digital Student Portals & Attendance: Comprehensive resident profiles, attendance tracking, and automated guardian notifications.',
            'Automated Fee Billing & Invoicing: Scheduled monthly and semester billing cycles reducing collection delays by 70% with online payment tracking.',
            'Maintenance Request Routing: Real-time ticket dispatch for room repairs, electrician/plumber logs, and SLA resolution tracking.',
        ],
        metrics: [
            {
                value: '70%',
                label: 'Fewer Payment Delays',
                desc: 'Automated billing system and payment reminders cut payment delays drastically.',
            },
            {
                value: '85%',
                label: 'Room Occupancy',
                desc: 'Optimized bed utilization and live vacancy tracking across all wings.',
            },
            {
                value: '92%',
                label: 'Maintenance Efficiency',
                desc: 'Rapid resolution of student complaints and facility repair tickets.',
            },
            {
                value: '24/7',
                label: 'Student Portal Access',
                desc: 'Dedicated self-service portal for check-ins, fee dues, and service requests.',
            },
        ],
        techStack: [
            { name: 'PHP / Laravel', category: 'Backend Engine' },
            { name: 'TailwindCSS', category: 'Design System & UI' },
            { name: 'MySQL', category: 'Database & Records' },
            { name: 'REST APIs', category: 'Student Portal Integration' },
        ],
        screenshots: [
            {
                title: 'HostelERP Full Platform Architecture & Management Suite',
                category: 'Dashboard',
                image: '/assets/projects/hostel-erp/screencapture-hostelerp-zytrixontech-2026-09-25-14_39_44.png',
                description:
                    'High-resolution full-page overview of the HostelERP platform, covering operational dashboard statistics, room and student management modules, automated fee billing, client feedback, and flexible pricing tiers.',
            },
        ],
        features: [
            {
                title: 'Room & Bed Management',
                desc: 'Efficiently manage room allocations, track live vacancies, and schedule maintenance with real-time updates.',
                icon: '🏢',
            },
            {
                title: 'Student Management & Profiles',
                desc: 'Maintain comprehensive digital student profiles, track attendance, and manage student complaints all in one place.',
                icon: '🎓',
            },
            {
                title: 'Automated Billing & Invoices',
                desc: 'Automate recurring hostel billing cycles, track pending fee balances, and generate printable receipts instantly.',
                icon: '💳',
            },
            {
                title: 'Maintenance Ticket Dispatch',
                desc: 'Students log room repairs online while facility staff track resolution progress and maintenance efficiency.',
                icon: '🔧',
            },
            {
                title: 'Reports & Revenue Analytics',
                desc: 'Detailed occupancy analytics, monthly collection breakdown, and warden administrative dashboards.',
                icon: '📊',
            },
            {
                title: 'Multi-Tier Pricing & Scaling',
                desc: 'Flexible plans supporting Basic (up to 50 residents), Professional (150 residents), and Enterprise (unlimited).',
                icon: '⚡',
            },
        ],
        demoCredentials: {
            email: 'warden@hostelmate.com',
            pass: 'Hostel#Admin2026',
            role: 'Chief Hostel Warden / Administrator',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Student Admission & KYC',
                tech: 'Student Registry Engine',
                detail: 'Admin registers resident, uploads student ID & documents, and verifies hostel eligibility.',
            },
            {
                step: '02',
                title: 'Visual Room Allocation',
                tech: 'Bed Allocation Matrix',
                detail: 'One-click assignment of room and bed numbers with automatic vacancy index updates.',
            },
            {
                step: '03',
                title: 'Automated Invoicing & Dues',
                tech: 'Billing Automation',
                detail: 'System generates scheduled hostel fee dues, meal charges, and sends payment reminders.',
            },
            {
                step: '04',
                title: 'Facility & Attendance Ops',
                tech: 'Maintenance & Attendance Tracker',
                detail: 'Real-time daily roll-call check-in and instantaneous routing of maintenance repair tickets.',
            },
        ],
    },
    {
        id: 'glowsuite',
        slug: 'glowsuite',
        title: 'GlowSuite — Luxury Salon, Spa, Token-Based Booking & Bridal Rentals',
        shortTitle: 'GlowSuite',
        category:
            'Luxury Salon & Spa SaaS • Token Booking, Rentals & E-Commerce',
        tagline:
            'Where Beauty Meets Luxury — Experience luxury treatments, expert styling, and our seamless token-based booking system designed for your convenience.',
        client: 'GlowSuite Luxury Salon & Spa',
        industry: 'Beauty, Wellness, Salon Management & Bridal Rentals',
        year: '2025 - 2026',
        duration: '1 Month',
        architecture: 'Laravel 11 & Alpine.js Architecture',
        accentColor: '#2D6A4F',
        secondaryColor: '#95D5B2',
        heroImage: '/assets/projects/glowsuite/glowsuite-hero-landscape.png',
        mobileImage: '/assets/projects/glowsuite/glowsuite-mobile.png',
        liveUrl: 'https://beauty.zytrixontech.com/',
        videoUrl: '',
        videoPoster: '/assets/projects/glowsuite/glowsuite-hero-landscape.png',
        summary:
            'GlowSuite is an integrated luxury salon and wellness web suite operating across 5 flagship branches with over 2,800 happy clients. Engineered to eliminate physical waiting lines, GlowSuite combines a real-time token-based appointment queue with signature hair and skin services, pre-curated bridal packages, an online beauty cosmeceuticals shop, designer Kundan & Polki jewellery rentals, and multi-day outstation event crew dispatch.',
        challenge:
            'Premium salons face major operational friction: chaotic weekend queues with frustrated walk-ins, untracked appointment cancellations, manual bridal consultation follow-ups, fragmented retail product checkout, and complex deposit/return management for high-value bridal jewellery rentals.',
        challengePoints: [
            'Waiting Room Bottlenecks & No-Shows: Lack of live queue visibility leading to crowded waiting areas and unpredictable service turnaround.',
            'Complex Multi-Day Wedding & Bridal Bookings: Difficulty managing crew travel, outstation destination dates, and 30% advance deposit collections.',
            'High-Value Jewellery Rental Tracking: Handling authentic Polki and Kundan bridal jewelry rentals with refundable security deposits and condition audits.',
            "Siloed Retail & In-Salon Treatments: Inability for clients to seamlessly purchase aftercare products (e.g. L'Oréal Keratin shampoo, Moroccan Argan oil) alongside appointment bookings.",
        ],
        solution:
            'Zytrixon engineered an all-in-one salon experience platform powered by Laravel 11 and Alpine.js. The solution introduces a transparent 4-step token queue ("Book Slot -> Get Token -> Track Live -> Arrive"), an e-commerce cart for professional hair and skincare lines, a designer jewellery rental vault with automated deposit calculations, and an interactive outstation event quote calculator.',
        solutionPoints: [
            'Live Token-Based Booking Engine: Clients pick their desired service, receive an instant digital token number, and track live salon queue status before arriving.',
            'Curated Bridal & Signature Packages: Instant discovery and booking for packages like Bridal Bliss (₹25,999), Glow Up Weekend (₹4,999), and Party Ready (₹6,999).',
            'Designer Jewellery Rental Vault: Browse authentic Kundan, Polki, and Temple gold sets with transparent daily rental rates and automated refundable security deposits.',
            'Multi-Day Outstation Crew Dispatch: Dynamic calculator for wedding gala events with date spanning, venue address capture, and upfront 30% advance reservations.',
            'Integrated Beauty Store: Full cart and checkout experience for premium salon products including keratin treatments, Moroccan argan oil, and vitamin C serums.',
        ],
        metrics: [
            {
                value: '2,800+',
                label: 'Happy Clients',
                desc: 'Satisfied clients served across 5 flagship salon & spa branches.',
            },
            {
                value: '4.9★',
                label: 'Client Rating',
                desc: 'Exceptional client satisfaction across hair, makeup & bridal care.',
            },
            {
                value: 'Zero',
                label: 'Wait-Time Friction',
                desc: 'Transparent 4-step digital token booking eliminating lobby congestion.',
            },
            {
                value: '100%',
                label: 'Security Refund',
                desc: 'Guaranteed refundable deposit processing for designer bridal jewellery.',
            },
        ],
        techStack: [
            { name: 'Laravel 11', category: 'Backend Engine' },
            { name: 'Alpine.js', category: 'Reactive UI & State' },
            { name: 'TailwindCSS', category: 'Design System & Theming' },
            { name: 'MySQL', category: 'Database & Relational Ledgers' },
        ],
        screenshots: [
            {
                title: 'GlowSuite Full Luxury Platform & Live Token Booking Architecture',
                category: 'Dashboard',
                image: '/assets/projects/glowsuite/screencapture-beauty-zytrixontech-2026-09-25-14_23_31.png',
                description:
                    'High-resolution full-page capture of the GlowSuite luxury salon suite, showcasing live token booking, signature salon services, bridal packages, designer jewellery rentals, and beauty shop.',
            },
        ],
        features: [
            {
                title: 'Live Token System',
                desc: 'No more waiting in salon lobbies. Book a slot, receive a digital token, and track live queue progress before arriving.',
                icon: '🎫',
            },
            {
                title: 'Signature Treatments',
                desc: "Precision haircuts (₹599), Global Hair Color (₹3,999), and Brazilian Keratin Smoothening (₹5,999) with premium L'Oréal & Schwarzkopf products.",
                icon: '💇‍♀️',
            },
            {
                title: 'Bridal & Party Packages',
                desc: 'Comprehensive beauty bundles including Bridal Bliss (₹25,999), Party Ready (₹6,999), and Glow Up Weekend (₹4,999).',
                icon: '✨',
            },
            {
                title: 'Designer Jewellery Rentals',
                desc: 'Rent authentic Kundan, Polki diamond choker, and Temple gold sets for weddings with full refundable security deposit protection.',
                icon: '💎',
            },
            {
                title: 'Multi-Day Event Crew Dispatch',
                desc: 'Book traveling squads of master artists for weddings and outstation destination galas with custom multi-day quote estimation.',
                icon: '👑',
            },
            {
                title: 'Curated Beauty Store',
                desc: 'Shop favorite in-salon hair and skincare essentials like Moroccan Argan Oil and Vitamin C Serum with seamless cart checkout.',
                icon: '🛍️',
            },
        ],
        demoCredentials: {
            email: 'guest@glowsuite.com',
            pass: 'Glow#Luxury2026',
            role: 'Salon Client / Appointment Admin',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Service & Slot Selection',
                tech: 'Alpine.js Reactive UI',
                detail: 'Client selects treatment (hair, spa, bridal), picks branch, and chooses preferred timing.',
            },
            {
                step: '02',
                title: 'Token Queue Allocation',
                tech: 'Laravel Booking Engine',
                detail: 'System assigns a real-time digital token number linked to the salon stylist roster.',
            },
            {
                step: '03',
                title: 'Live Queue Tracking',
                tech: 'Dynamic Status Polling',
                detail: 'Client tracks queue position in real-time, arriving at the branch precisely when their turn is up.',
            },
            {
                step: '04',
                title: 'Checkout & Aftercare Shop',
                tech: 'E-Commerce Cart',
                detail: 'Integrated settlement with service receipt, loyalty points accrual, and home care product dispatch.',
            },
        ],
    },
    {
        id: 'jmd-trucks',
        slug: 'jmd-trucks',
        title: 'JMD Truck Management — Fleet Intelligence & Logistics Billing Platform',
        shortTitle: 'JMD Truck Management',
        category: 'Fleet Logistics • Dispatch, Driver Wallets & Bilty Billing',
        tagline:
            'Fleet Intelligence — Smart Logistics. Automate dispatch, driver fuel/toll wallets, and multi-party bilty billing to maximize your fleet profit.',
        client: 'JMD Truck Management',
        industry: 'Fleet Logistics & Transport Network Management',
        year: '2025 - 2026',
        duration: '20 Days',
        architecture: 'Laravel 11 High-Speed Architecture',
        accentColor: '#4F46E5',
        secondaryColor: '#06B6D4',
        heroImage: '/assets/projects/jmd-trucks/jmd-hero-landscape.png',
        mobileImage: '/assets/projects/jmd-trucks/jmd-mobile.png',
        liveUrl: 'https://truckdriving.zytrixontech.com/',
        videoUrl: '',
        videoPoster: '/assets/projects/jmd-trucks/jmd-hero-landscape.png',
        summary:
            'JMD Truck Management is a next-generation logistics and fleet intelligence platform engineered for transport business owners. Built to eliminate paper bilty friction, it unifies live trip dispatch, digital driver fuel/toll wallets, automated LR generation, multi-party ledger settlements, and real-time per-trip profit margin analytics into a streamlined command center.',
        challenge:
            'Transport fleet owners face heavy operational chaos: late-night cash advance calls from drivers for fuel and tolls, lost paper receipts, dispute-prone multi-broker bilty invoicing, delayed POD verification, and zero clear visibility into actual trip-wise profit margins.',
        challengePoints: [
            'Driver Cash Requests & Toll Leakage: Constant 2 AM calls for fuel advances, lack of expense tracking, and missing cash receipts.',
            'Complex Multi-Party Bilty Billing: Handling trips with multiple brokers, consignors, and automated ledger entries without invoice delays.',
            'POD & Settlement Bottlenecks: Delayed proof-of-delivery submissions dragging out freight payment recovery by weeks.',
            'Hidden Route Losses: Fleet owners unable to compare vehicle mileage, route tolls, and driver efficiency to identify true trip profitability.',
        ],
        solution:
            'Zytrixon architected a comprehensive Laravel-powered fleet intelligence portal enabling one-click trip creation, instant digital driver wallet disbursements, real-time receipt uploads, automated POD multi-party bilty generation, and live dispatch command visibility.',
        solutionPoints: [
            'Digital Driver Wallets: Issue initial advances directly to driver wallets for fuel, tolls, and maintenance with instant balance & expense tracking.',
            'Multi-Party Bilty Billing: Automated generation of accurate, GST-compliant invoices and ledger entries across multiple brokers upon delivery.',
            'Live Dispatch Command Center: Complete operational visibility over active trips, delay alerts, vehicle telematics, and status tracking.',
            'Trip Profit Analytics: Granular margin calculation factoring driver advances, fuel receipts, toll logs, and broker commissions.',
        ],
        metrics: [
            {
                value: '10k+',
                label: 'Active Trucks',
                desc: 'Powering fleet operations across high-density Indian transport corridors.',
            },
            {
                value: '₹50Cr+',
                label: 'Processed Monthly',
                desc: 'Secure monthly logistics freight and driver wallet transactions.',
            },
            {
                value: '99.9%',
                label: 'Data Accuracy',
                desc: 'Zero bilty error rate with automated multi-party ledger generation.',
            },
            {
                value: '20 Days',
                label: 'Rapid Delivery',
                desc: 'Engineered and deployed in record time using Laravel architecture.',
            },
        ],
        techStack: [
            { name: 'Laravel 11', category: 'Backend Engine' },
            { name: 'MySQL Enterprise', category: 'Database & Ledgers' },
            { name: 'Blade & TailwindCSS', category: 'Frontend UI' },
            { name: 'Redis Cache', category: 'High-Concurrency Queue' },
        ],
        screenshots: [
            {
                title: 'Fleet Intelligence & Smart Logistics Full Platform',
                category: 'Dashboard',
                image: '/assets/projects/jmd-trucks/long1.png',
                description:
                    'Complete high-resolution layout of the JMD Truck Management platform from trip dispatch and digital driver wallets to multi-party bilty settlement.',
            },
        ],
        features: [
            {
                title: 'Digital Driver Wallets',
                desc: 'Give drivers a digital wallet for fuels, tolls, and maintenance. Track balances & expenses instantly with zero late-night friction.',
                icon: '💳',
            },
            {
                title: 'Trip Profit Center',
                desc: 'Deep analytics for every trip. Compare routes, drivers, and vehicles to find your true net profit margins.',
                icon: '📈',
            },
            {
                title: 'Multi-Party Bilty Billing',
                desc: 'Complex bilty handling made easy. Manage multiple parties and brokers with automated ledger entries per trip.',
                icon: '📑',
            },
            {
                title: 'Live Command Center',
                desc: 'Complete visibility over active trips, delay warnings, pending invoices, and system status across your entire fleet.',
                icon: '🚚',
            },
        ],
        demoCredentials: {
            email: 'support@jmdtrucks.com',
            pass: 'JMD#Fleet2026',
            role: 'Fleet Operations Director',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Trip Creation & LR',
                tech: 'Laravel Core',
                detail: 'Enter LR details, assign truck & driver, and issue initial advance to driver wallet.',
            },
            {
                step: '02',
                title: 'On-Route Expense Tracking',
                tech: 'REST Webhook API',
                detail: 'Drivers upload fuel and toll receipts in real-time, deducting directly from digital balance.',
            },
            {
                step: '03',
                title: 'POD Verification & Bilty',
                tech: 'Automated Billing Engine',
                detail: 'Proof-of-delivery instant capture triggers multi-party invoice generation.',
            },
            {
                step: '04',
                title: 'Ledger Settlement & Profit',
                tech: 'Financial Analytics',
                detail: 'Automatic ledger balance reconciliation and per-trip net margin calculation.',
            },
        ],
    },
    {
        id: 'billixa-bill',
        slug: 'billixa-bill',
        title: 'BillixaBill Restaurant POS Software & Android App — QR Menu, KOT & Cloud Billing',
        shortTitle: 'BillixaBill',
        category: 'Restaurant POS & Android App • QR Menus, KOT & Billing',
        tagline:
            "Take Control of Your Restaurant — India's simple restaurant POS software with contactless QR code menus, KOT, table management, billing, and Razorpay/Stripe payment integration.",
        client: 'BillixaBill',
        industry: 'Restaurant POS Software & Android Mobile Solutions',
        year: '2025 - 2026',
        duration: '1.5 Months',
        architecture: 'Laravel 11, Livewire & Android Cloud POS',
        accentColor: '#2563EB',
        secondaryColor: '#10B981',
        heroImage: '/assets/projects/billixa-bill/billixa-hero-landscape.png',
        mobileImage: '/assets/projects/billixa-bill/billixa-mobile.png',
        liveUrl: 'https://billixabill.com/',
        playStoreUrl:
            'https://play.google.com/store/apps/details?id=com.rajan1.billixabill',
        videoUrl: '',
        videoPoster: '/assets/projects/billixa-bill/billixa-hero-landscape.png',
        summary:
            'BillixaBill is an all-in-one restaurant POS software and Android mobile application engineered for food outlets, cafes, and multi-table dining establishments. Powered by a robust Laravel cloud backend and native Android app on Google Play, BillixaBill unifies contactless QR menu ordering, kitchen order tickets (KOT), interactive floor plans, staff role management, inventory tracking, and payment gateways into a high-speed operating system.',
        challenge:
            'Restaurant and cafe owners face daily operational bottlenecks: misplaced handwritten paper KOTs, delayed table turnover during peak rush hours, cashier billing confusion, untracked inventory spoilage, and lack of unified mobile visibility into daily sales.',
        challengePoints: [
            'Lost & Delayed KOTs: Paper slips getting lost between waitstaff and kitchen stations leading to customer order complaints.',
            'Table & Floor Plan Chaos: Inability to track table availability, active dining orders, and reservations across multiple dining floors.',
            'Manual Invoicing & Checkout Queues: Slow bill calculation and manual payment handling creating cashier counter delays.',
            'Ingredient & Inventory Spoilage: Lack of automated stock deductions leading to unexpected item shortages during rush hours.',
        ],
        solution:
            'Zytrixon developed a full-stack Laravel-powered POS ecosystem integrated with a native Android mobile application. It features automated digital KOT dispatch, contactless table QR code ordering, interactive floor plan grids, integrated Razorpay/Stripe payments, and cloud inventory synchronization.',
        solutionPoints: [
            'Android Mobile POS: Waitstaff take table orders on mobile with sub-second KOT generation dispatched directly to the kitchen.',
            'Customer QR Ordering: Guests scan table QR codes to view live menus, place orders, and pay without waiting for physical menus.',
            'Multi-Role Portal Access: Dedicated interfaces for Restaurant Admin, Waitstaff Floor App, and Customer Ordering.',
            'Automated Tax & Receipt Printing: Instant GST-compliant bill generation with thermal printer support and UPI payment QR codes.',
        ],
        metrics: [
            {
                value: 'Laravel 11',
                label: 'Cloud Engine',
                desc: 'High-speed Laravel backend powering real-time web & mobile sync.',
            },
            {
                value: 'Android App',
                label: 'Play Store Live',
                desc: 'Native Android application available on Google Play Store.',
            },
            {
                value: '7 Days',
                label: 'Free Trial',
                desc: 'Zero-risk trial onboarding for restaurants and food businesses.',
            },
            {
                value: '< 2 Sec',
                label: 'KOT Dispatch',
                desc: 'Real-time kitchen order ticket transmission from mobile to kitchen.',
            },
        ],
        techStack: [
            { name: 'Laravel 11', category: 'Backend Engine' },
            { name: 'Livewire 3', category: 'Reactive UI Components' },
            { name: 'Android Native', category: 'Mobile App / Google Play' },
            {
                name: 'Blade & TailwindCSS',
                category: 'Restaurant Admin Portal',
            },
            { name: 'Razorpay & Stripe', category: 'Payment Integration' },
            { name: 'MySQL Enterprise', category: 'Database & Orders' },
        ],
        screenshots: [
            {
                title: 'Orders, Menus & Table Management',
                category: 'Mobile App',
                image: '/assets/projects/billixa-bill/Screenshot 2026-09-25 134758.png',
                description:
                    'Easily manage orders, menus, and tables in one centralized mobile dashboard.',
            },
            {
                title: 'Food Catalog & Waiter Order Taking',
                category: 'Mobile App',
                image: '/assets/projects/billixa-bill/Screenshot 2026-09-25 134827.png',
                description:
                    'Search food items, veg/non-veg filtering, instant order additions and call-waiter assistance.',
            },
            {
                title: 'Menu Categories & QR Bill Payment',
                category: 'Mobile App',
                image: '/assets/projects/billixa-bill/Screenshot 2026-09-25 132700.png',
                description:
                    'Structured menu categories (Breakfast, Drinks, Lunch, Dinner) with dynamic QR code bill payment.',
            },
            {
                title: 'Digital Receipts & Contactless Payment',
                category: 'Mobile App',
                image: '/assets/projects/billixa-bill/Screenshot 2026-09-25 134834.png',
                description:
                    'Generate digital itemized receipts with instant UPI QR scans for contactless customer settlements.',
            },
            {
                title: 'Sales Analytics & Restaurant Settings',
                category: 'Mobile App',
                image: '/assets/projects/billixa-bill/Screenshot 2026-09-25 134843.png',
                description:
                    'Track real-time restaurant revenue, tax breakdown, cash vs digital payment splits from anywhere.',
            },
            {
                title: 'Quick Onboarding & Revenue Dashboard',
                category: 'Mobile App',
                image: '/assets/projects/billixa-bill/Screenshot 2026-09-25 134807.png',
                description:
                    'Simple restaurant account setup with live daily sales tracking and dark mode toggle.',
            },
            {
                title: 'Mobile Navigation & POS Modules',
                category: 'Mobile App',
                image: '/assets/projects/billixa-bill/Screenshot 2026-09-25 134817.png',
                description:
                    'Full sidebar access to KOT, Tables, Reservations, Staff management, Reports, and Settings.',
            },
            {
                title: 'Restaurant POS Software Overview',
                category: 'Mobile App',
                image: '/assets/projects/billixa-bill/Screenshot 2026-09-25 132728.png',
                description:
                    'Complete overview of the Billixa Bill POS ecosystem designed for simplicity and speed.',
            },
        ],
        features: [
            {
                title: 'QR Code Menu Ordering',
                desc: 'Contactless ordering made easy. Customers scan table QR to browse dishes and place orders without waiting.',
                icon: '📱',
            },
            {
                title: 'Digital KOT System',
                desc: 'Efficient kitchen workflow routing orders instantly from tables to kitchen display screens and printers.',
                icon: '🍳',
            },
            {
                title: 'POS Billing & Thermal Print',
                desc: 'Complete billing solution with automated GST tax calculation, split bills, and thermal receipt printing.',
                icon: '🧾',
            },
            {
                title: 'Interactive Floor Plans',
                desc: 'Design custom restaurant floor layouts and monitor occupied, vacant, or reserved tables in real time.',
                icon: '🪑',
            },
            {
                title: 'Staff & Waiter Management',
                desc: 'Separate logins with granular access permissions for cashiers, waitstaff, managers, and admins.',
                icon: '👥',
            },
            {
                title: 'Inventory & Stock Control',
                desc: 'Track ingredients smartly, monitor stock levels in real time, and eliminate kitchen waste.',
                icon: '📦',
            },
            {
                title: 'Payment Gateway Integration',
                desc: 'Integrated Stripe, Razorpay, and instant UPI QR payments for frictionless customer settlements.',
                icon: '💳',
            },
            {
                title: 'Reports & Business Analytics',
                desc: 'Data-driven business decisions with live daily sales, payment splits, and tax performance reports.',
                icon: '📈',
            },
        ],
        demoCredentials: {
            email: 'app.billixabill@gmail.com',
            pass: '123456',
            role: 'Restaurant Admin (Live Demo)',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Order Capture',
                tech: 'Android POS & QR Web',
                detail: 'Guests scan table QR code or waitstaff enters order via handheld Android POS application.',
            },
            {
                step: '02',
                title: 'Laravel Real-Time KOT Dispatch',
                tech: 'Laravel 11 & Livewire',
                detail: 'Order instantly syncs to kitchen display systems and thermal printers in under 2 seconds.',
            },
            {
                step: '03',
                title: 'Floor Grid & Stock Ledger',
                tech: 'MySQL Database',
                detail: 'Live table status updates automatically while ingredient inventory auto-deducts in real time.',
            },
            {
                step: '04',
                title: 'Billing & Digital Settlement',
                tech: 'Razorpay & Stripe API',
                detail: 'GST-compliant bill generated with instant UPI/card payment confirmation and sales ledger update.',
            },
        ],
    },
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
            "Zytrixon engineered a high-speed direct-inventory portal supporting S.K. Infratech's Direct Investment Model: direct owner property showcases, in-house triple-check legal verification, instant buy-back liquidity workflows, and automated site-visit dispatch.",
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
