import type { ProjectItem } from '@/lib/projects-data';

export type ProductDetailItem = ProjectItem;

export const PRODUCTS_DATA: ProjectItem[] = [
    {
        id: 'mobile-crm',
        slug: 'mobile-crm',
        title: 'Mobile CRM — Complete Operating System for Mobile & Electronics Retailers',
        shortTitle: 'Mobile CRM',
        category: 'Proprietary IP • Next-Gen Retail ERP & POS',
        tagline:
            'From IMEI-level serial tracking and one-tap GST billing to supplier credit ledgers and automated staff payroll — run your entire single or multi-outlet retail business effortlessly.',
        client: 'Zytrixon Proprietary Suite',
        industry: 'Mobile & Electronics Retailers, Single & Multi-Outlet Stores',
        year: '2026',
        duration: 'Enterprise Ready',
        architecture:
            'Multi-Tenant Laravel 12 API, React 19 & Row-Level Isolated Ledger Architecture',
        accentColor: '#0EA5E9',
        secondaryColor: '#38BDF8',
        heroImage: '/assets/products/mobile-crm/Screenshot 2026-09-26 162520.png',
        mobileImage: '/assets/products/mobile-crm/Screenshot 2026-09-26 181933.png',
        liveUrl:
            'https://wa.me/917049711475?text=Hi%20Zytrixon%2C%20I%20would%20like%20to%20schedule%20an%20enterprise%20demo%20for%20Mobile%20CRM.',
        videoUrl: '',
        videoPoster:
            '/assets/products/mobile-crm/Screenshot 2026-09-26 162520.png',
        summary:
            'Mobile CRM is an end-to-end retail operating system engineered specifically for mobile phone and electronics retailers. Built with React 19, TypeScript, and a robust Laravel 12 REST API, it unifies dual-track inventory (unique IMEI tracking for smartphones & batch quantities for accessories), 3-second counter POS billing with dynamic on-receipt UPI QR, distributor udhar ledgers, customer EMI finance tracking, and automated staff attendance & sales commission payroll.',
        challenge:
            'Mobile and electronics retailers deal with unique operational bottlenecks: tracking high-value phones by individual IMEI vs bulk accessories, managing supplier credit (udhar) with delayed balance reconciliations, tracking customer EMI installments across third-party financiers, and calculating staff sales commissions manually.',
        challengePoints: [
            'IMEI vs Bulk Tracking Chaos: Losing track of unique smartphone serial numbers and warranty replacements while mixing them up with bulk accessories.',
            'Unreconciled Supplier Udhar: Distributor and supplier balances drifting apart due to paper ledger entries and missing invoice references.',
            'Consumer EMI & Loan Disputes: Difficulty tracking customer installment schedules, down payments, and overdue payouts from third-party financiers (Bajaj, Home Credit, TVS).',
            'Manual Staff Payroll & Commissions: Complex spreadsheet calculations for shop floor sales incentives and attendance deductions leading to payroll errors.',
        ],
        solution:
            'Zytrixon architected Mobile CRM as a unified operating system featuring dual-track inventory, 3-second counter POS checkout with dynamic UPI QR, live supplier credit ledgers, an integrated EMI finance engine, and automated staff commission payroll.',
        solutionPoints: [
            'Dual-Track Inventory (IMEI & Quantity): Serialized smartphone tracking by unique IMEI paired with batch and quantity tracking for accessories and spare parts.',
            '3-Second POS & GST Invoicing: Rapid barcode/IMEI scan counter checkout supporting Cash, Dynamic UPI QR, Cards, and Split Payments.',
            'Supplier & Udhar Ledger: Real-time running debit/credit ledgers for every distributor with one-tap payment entries and balance recalculations.',
            'EMI & Consumer Finance Engine: Integrated financier tracking (Bajaj Finserv, Home Credit, TVS Credit) with automated tenure schedules and overdue recovery alerts.',
            'Automated Staff Payroll & Incentives: Daily attendance tracking, per-sale incentive calculation, and one-click salary slip generation.',
            'Quotations, Pre-Bookings & Repair Jobs: Collect token advances for upcoming flagship launches and manage device repair status workflows.',
        ],
        metrics: [
            {
                value: 'Sub-150ms',
                label: 'API Response Latency',
                desc: 'Ultra-fast API queries via optimized database indexes for smooth rush-hour checkouts.',
            },
            {
                value: '100%',
                label: 'IMEI Traceability',
                desc: 'Dual-entry inventory movements ledger preventing internal shop shrinkage.',
            },
            {
                value: 'Multi-Tenant',
                label: 'Global Data Isolation',
                desc: 'Row-level tenant isolation with global scoping ensuring bank-grade business security.',
            },
            {
                value: '3-Second',
                label: 'Counter Checkout',
                desc: 'Instant barcode/IMEI scan, split payments, and dynamic UPI QR on thermal receipts.',
            },
        ],
        features: [
            {
                title: 'Dual-Track Inventory (IMEI & Quantity)',
                desc: 'Track high-value smartphones by unique IMEI & Serial Number while managing accessories, cables, and parts by Batch & Quantity with live stock movement logs.',
                icon: '📱',
            },
            {
                title: 'High-Speed POS & GST Invoicing',
                desc: '3-second counter checkout with barcode/IMEI scanning, split payments, dynamic UPI QR on receipts, and instant thermal (58mm/80mm) or A4 PDF invoices.',
                icon: '⚡',
            },
            {
                title: 'Supplier & Udhar (Credit) Ledger',
                desc: 'Real-time running debit/credit statements for every distributor, purchase bill attachment logs, and one-tap partial or full payment reconciliations.',
                icon: '📒',
            },
            {
                title: 'EMI & Consumer Finance Engine',
                desc: 'Track in-store and third-party finance (Bajaj Finserv, Home Credit, TVS Credit) with automated tenure schedules, down payments, and overdue recovery.',
                icon: '💳',
            },
            {
                title: 'Staff Attendance & Automated Payroll',
                desc: 'Track daily attendance, calculate per-sale commissions on top of base salary automatically, and generate one-click detailed salary vouchers.',
                icon: '👥',
            },
            {
                title: 'Quotations, Pre-Bookings & Repair Jobs',
                desc: 'Convert price inquiries into sales with instant quotes, collect token advances for upcoming flagship launches, and track device repair jobs.',
                icon: '🛠️',
            },
        ],
        techStack: [
            {
                name: 'React 19 & TypeScript',
                category: 'Client Core & Vite Bundling',
            },
            {
                name: 'Laravel 12 API',
                category: 'Backend RESTful Architecture',
            },
            {
                name: 'MySQL / PostgreSQL',
                category: 'Multi-Tenant ACID Relational DB',
            },
            {
                name: 'Prisma ORM',
                category: 'Type-Safe Data Modeling & Schema',
            },
            {
                name: 'TanStack Query v5',
                category: 'Server Cache & Optimistic UI',
            },
            {
                name: 'Tailwind CSS v4',
                category: 'Design System & Responsive POS UI',
            },
            {
                name: 'Docker',
                category: 'Containerization & Microservices Deployment',
            },
        ],
        screenshots: [
            {
                title: 'Mobile CRM Retail Operations Dashboard',
                category: 'Command Center',
                image: '/assets/products/mobile-crm/Screenshot 2026-09-26 162520.png',
                description:
                    'Comprehensive store management overview featuring business overview, sales velocity, revenue, profit & loss statements, and multi-counter audit tracking.',
            },
            {
                title: 'High-Speed Cloud POS & Direct Counter Billing',
                category: 'POS Terminal',
                image: '/assets/products/mobile-crm/Screenshot 2026-09-26 234003.png',
                description:
                    'Rapid retail checkout interface with live barcode scanning, direct catalog lookup, instant cart calculations, and sub-second payment finalization.',
            },
            {
                title: 'Live Invoices Registry & Sales Revenue Ledger',
                category: 'Invoicing & Audit',
                image: '/assets/products/mobile-crm/Screenshot 2026-09-26 234043.png',
                description:
                    'Audit sales registry tracking invoice status, payment modes (UPI, Cash), item profit margins, guarantor downpayments, and instant WhatsApp bill sharing.',
            },
            {
                title: 'Device Advance Bookings & Pre-Orders',
                category: 'Pre-Orders & Booking',
                image: '/assets/products/mobile-crm/Screenshot 2026-09-26 234105.png',
                description:
                    'Customer advance booking tracking with target fulfillment dates, downpayment receipts, and one-click conversion to finalized GST tax invoices.',
            },
            {
                title: 'Staff Management, Permissions & Payroll Matrix',
                category: 'Staff & HR Operations',
                image: '/assets/products/mobile-crm/Screenshot 2026-09-26 234121.png',
                description:
                    'Multi-tier staff administration configuring monthly compensation, commission structures, role permissions, and active operational status.',
            },
            {
                title: 'Staff Attendance & Geofenced Self Check-In',
                category: 'Attendance & Operations',
                image: '/assets/products/mobile-crm/Screenshot 2026-09-26 234146.png',
                description:
                    'Monthly staff attendance grid with location geofence boundary validation, shift presence records, pending approval queues, and manual status overrides.',
            },
        ],
        architectureFlow: [
            {
                step: '01',
                title: 'Edge Terminal Input',
                tech: 'React POS Web App & Scanner',
                detail:
                    'Rapid item scan and customer lookup on web, desktop, and mobile devices.',
            },
            {
                step: '02',
                title: 'Ledger Engine Verification',
                tech: 'Prisma ORM & PostgreSQL Core',
                detail:
                    'Validates credit limits, tax items, and ACID double-entry ledger records.',
            },
            {
                step: '03',
                title: 'Payment Settlement',
                tech: 'Multi-Tender Cash & UPI Engine',
                detail:
                    'Reconciles payment tender with sub-second receipt generation.',
            },
            {
                step: '04',
                title: 'Encrypted Cloud Sync',
                tech: 'Docker Containerized Cloud Sync',
                detail:
                    'Containerized deployment ensuring high-availability sync and encrypted backups.',
            },
        ],
    },
    {
        id: 'grocery-mart',
        slug: 'grocery-mart',
        title: 'Grocery Mart — Multi-Platform Quick-Commerce & Supermarket OS',
        shortTitle: 'Grocery Mart',
        category: 'Proprietary IP • Multi-Platform Quick-Commerce OS',
        tagline:
            'Customer Mobile App (10-15 Min Delivery), Dark-Store Picker & Rider App, Super Admin Master Catalog & Store Manager Margin Engine.',
        client: 'Zytrixon Proprietary Suite',
        industry: 'Quick-Commerce, Dark Stores, Supermarkets & Omnichannel FMCG',
        year: '2026',
        duration: 'Enterprise Ready',
        architecture:
            'Node.js + Prisma + PostgreSQL + Redis with Multi-Platform Expo & React 19 Clients',
        accentColor: '#207393',
        secondaryColor: '#38BDF8',
        heroImage: '/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png',
        mobileImage: '/assets/products/grocery-mart/image.png',
        secondMobileImage:
            '/assets/products/grocery-mart/WhatsApp Image 2026-09-27 at 1.42.06 AM.jpeg',
        liveUrl:
            'https://wa.me/917049711475?text=Hi%20Zytrixon%2C%20I%20would%20like%20to%20schedule%20an%20enterprise%20demo%20for%20Grocery%20Mart.',
        videoUrl: '',
        videoPoster: '',
        summary:
            'Grocery Mart is an enterprise multi-platform quick-commerce and retail grocery ecosystem designed for sub-15 minute hyperlocal delivery, dark-store warehouse picking, and supermarket store management. Architected across a high-conversion React Native Customer App (Expo SDK 57), an ultra-fast Dark-Store Picker & Delivery Partner App with camera barcode scanning and FEFO validation, and a React 19 Web Management Suite with Super Admin Master Catalog and Store Manager Inventory & Margin Engine backed by Node.js, Prisma, PostgreSQL, and Redis.',
        challenge:
            'Quick-commerce and modern supermarket operations struggle with multi-channel friction: picking errors in dark stores without rack routing, expired batch dispatches, blind spot profit margins between cost price (CP) and selling price (SP), cart abandonment during checkout rushes, and manual barcode label printing.',
        challengePoints: [
            'Dark-Store Picking Inaccuracies: Pickers searching through hundreds of bins manually without digital aisle/rack/shelf coordinates, leading to delayed 10-minute dispatch SLAs.',
            'FEFO Expiry & Batch Losses: Dispatching newer stock while older perishable batches expire on dark-store shelves due to missing First-Expiry-First-Out batch enforcement.',
            'Gross Margin & Pricing Blindspots: Store managers struggling to compute real-time gross margins across thousands of SKUs with volatile supplier cost prices and GST rates.',
            'Cart Drop-off & Variant Confusion: Customers abandoning carts due to unclear pack sizes (500ml vs 1L), missing nutritional info, or lack of hyperlocal delivery ETAs.',
        ],
        solution:
            'Zytrixon architected an end-to-end unified quick-commerce operating system comprising a high-conversion Customer Mobile App, a high-speed Dark-Store Picker App with continuous camera scanning, and a React 19 Web Management Suite featuring Master Catalog taxation, dynamic margin calculations, and thermal barcode label printing.',
        solutionPoints: [
            'Customer Mobile App (10-15 Min Hyperlocal Delivery): Multi-angle image carousels, dietary badges (🟢 Veg/🔴 Non-Veg), transparent unit economics, instant pack variant selector, and dynamic quantity stepper.',
            'Delivery Partner & Dark-Store Picker App: Digital warehouse rack/bin routing (Aisle, Rack, Shelf), camera barcode & SKU verification, chilled storage alerts, and FEFO expiry checks.',
            'Super Admin Master Catalog: Centralized HSN tax codes (GST 5% CGST/SGST split), category taxonomy, image uploads, and omnichannel switches (App, POS, 10-min delivery).',
            'Store Pricing & Gross Margin Calculator: Real-time gross margin indicator ((SP - CP) / SP * 100), store-level price overrides, and 7-day sales velocity replenishment forecasting.',
            'Multi-Batch & Inventory Tracking: Live available vs reserved stock, low-stock threshold alerts, and batch table linking expiry dates with supplier purchase orders.',
            'Thermal Barcode Label Printing: Built-in JsBarcode engine supporting standard 50x25mm and 38x25mm thermal sticker printing for pre-packed produce and staples.',
        ],
        metrics: [
            {
                value: '10-15 Min',
                label: 'Hyperlocal Delivery',
                desc: 'Real-time dark-store routing and instant dispatch SLA.',
            },
            {
                value: '99.9%',
                label: 'Picking Accuracy',
                desc: 'Camera barcode verification preventing wrong SKU packaging.',
            },
            {
                value: '100% FEFO',
                label: 'Batch Compliance',
                desc: 'Mandatory older batch validation eliminating dark-store spillage.',
            },
            {
                value: 'Real-Time',
                label: 'Gross Margin Telemetry',
                desc: 'Automatic profit margin calculations across all omnichannel channels.',
            },
        ],
        features: [
            {
                title: '🛒 Customer Mobile App (/app)',
                desc: 'React Native (v0.86) & Expo SDK 57 with high-conversion PDP, dietary indicators, live 10-15 min ETA pill, pack variants, and sticky cart stepper.',
                icon: '🛒',
            },
            {
                title: '🛵 Delivery Partner & Picker App (/partner-app)',
                desc: 'Warehouse Aisle/Rack/Shelf routing, continuous camera barcode scanning, FEFO expiry checklist, and temperature handling alerts.',
                icon: '🛵',
            },
            {
                title: '🖥️ Super Admin Master Catalog',
                desc: 'Centralized taxonomy, HSN codes, GST 5% automatic tax splitting, image management, and omnichannel visibility toggles.',
                icon: '🖥️',
            },
            {
                title: '📈 Store Margin & Batch Calculator',
                desc: 'Cost price (CP), selling price (SP), gross margin percentage calculator, store overrides, and replenishment runway forecasting.',
                icon: '📊',
            },
            {
                title: '🖨️ Thermal Barcode Label Printing',
                desc: 'Integrated JsBarcode engine generating thermal barcode labels (50x25mm / 38x25mm) for pre-packed staples and fresh produce.',
                icon: '🖨️',
            },
            {
                title: '🗄️ Node.js + Prisma + PostgreSQL + Redis',
                desc: 'Sub-millisecond REST APIs (/api/v1/catalog & /api/v1/store/inventory) with Redis cache and ACID relational integrity.',
                icon: '⚡',
            },
        ],
        techStack: [
            {
                name: 'React Native (v0.86) & Expo SDK 57',
                category: 'Customer & Picker Mobile Apps',
            },
            {
                name: 'React 19 & Vite 8',
                category: 'Web Management Suite',
            },
            {
                name: 'Tailwind CSS v4 & twrnc',
                category: 'Omnichannel Design System',
            },
            {
                name: 'Node.js & Express REST Core',
                category: 'Backend Microservices',
            },
            {
                name: 'PostgreSQL & Prisma ORM',
                category: 'ACID Relational Core',
            },
            {
                name: 'Redis Cache',
                category: 'Sub-Millisecond Barcode Lookups',
            },
            {
                name: 'TanStack React Query v5 & Zustand',
                category: 'Server Sync & Client State',
            },
            {
                name: 'Recharts & JsBarcode',
                category: 'Velocity Analytics & Thermal Labels',
            },
            {
                name: 'Docker & Socket.IO',
                category: 'Containerization & Live Pick Events',
            },
        ],
        screenshots: [
            {
                title: 'Grocery Mart Customer Mobile App',
                category: 'Customer App',
                image: '/assets/products/grocery-mart/image.png',
                description:
                    'High-conversion customer ordering mobile app interface featuring fresh grocery catalog, sub-15 minute hyperlocal delivery, and seamless checkout.',
            },
            {
                title: 'Grocery Mart Delivery Partner & Rider App',
                category: 'Partner App',
                image: '/assets/products/grocery-mart/WhatsApp Image 2026-09-27 at 1.42.06 AM.jpeg',
                description:
                    'Dedicated delivery partner and rider portal for order pickup, dark-store bin navigation, and fast doorstep delivery routing.',
            },
            {
                title: 'Operational Terminal & Command Center Dashboard',
                category: 'Store Command',
                image: '/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png',
                description:
                    'Live operational terminal for Sahil Grocery Shop (Sector 62, Noida) showing POS billing, live orders queue, TV kiosk screen, revenue tracking (₹5,98,900), and 99.8% SLA dispatch metrics.',
            },
            {
                title: 'Real-Time Store Analytics & Staff KPI Matrix',
                category: 'Analytics & KPIs',
                image: '/assets/products/grocery-mart/Screenshot 2026-09-26 182946.png',
                description:
                    'Store analytics intelligence showcasing average cart size (₹482), gross margin telemetry (18.4%), staff handling speeds, and associate performance radar.',
            },
        ],
        architectureFlow: [
            {
                step: '01',
                title: 'Catalog & Store Sync',
                tech: 'Node.js + Prisma ORM',
                detail:
                    'Centralized master catalog with HSN codes, GST rates, and multi-store inventory mapping.',
            },
            {
                step: '02',
                title: 'In-Memory Cache & Stock Lock',
                tech: 'Redis Distributed Cache',
                detail:
                    'Sub-millisecond inventory reservation when customer adds items to cart.',
            },
            {
                step: '03',
                title: 'Dark-Store Bin Navigation',
                tech: 'Picker App + Socket.IO',
                detail:
                    'Real-time order routing with Aisle/Rack/Shelf coordinates and camera barcode verification.',
            },
            {
                step: '04',
                title: 'Hyperlocal Rider Dispatch',
                tech: 'Delivery App + GPS Telemetry',
                detail:
                    'Continuous FEFO batch validation and automated 10-15 minute doorstep delivery.',
            },
        ],
    },
    {
        id: 'grain-saas',
        slug: 'grain-saas',
        title: 'Grain SaaS — Premium Grain Trading, Lot-wise Inventory & Mandi Management Platform',
        shortTitle: 'Grain SaaS',
        category: 'Proprietary IP • Agricultural Commodity & Mandi Trading OS',
        tagline:
            'The future of grain trading. Manage lot-wise inventory, automate broker commissions, and handle integrated party ledgers built specifically for agricultural merchants.',
        client: 'Zytrixon Proprietary Suite',
        industry: 'Agricultural Wholesale, Mandi Merchants & Grain Trading',
        year: '2025 - 2026',
        duration: 'Enterprise Ready',
        architecture:
            'Multi-Tenant Grain Ledger & Distributed Lot Inventory Architecture',
        accentColor: '#D4A373',
        secondaryColor: '#2A9D8F',
        heroImage: '/assets/products/grain-saas/grain-saas-hero-pc.png',
        mobileImage: '/assets/products/grain-saas/grain-saas-hero-mobile.png',
        liveUrl: 'https://grain.zytrixon.com/',
        videoUrl: '',
        videoPoster: '/assets/products/grain-saas/grain-saas-hero-pc.png',
        summary:
            'Grain SaaS is an enterprise agricultural commodity and Mandi trading platform engineered for grain merchants, commission agents (Kachha & Pucca Arhtiya), and warehouse operators. Built to replace fragmented paper bahi-khata and complex spreadsheets, Grain SaaS unifies lot-wise stock control, automated broker commission calculations, live double-entry party ledgers, and multi-godown transfers into a high-speed cloud workspace.',
        challenge:
            'Agricultural wholesale trading involves complex calculations: fluctuating quintal-to-ton conversion rates, stock spillage and moisture shrinkage, multi-tier broker commission rules, and dispute-prone paper ledgers between farmers, buyers, and commission agents across Mandis.',
        challengePoints: [
            'Lot-Level Shrinkage & Loss: Inability to track individual purchase lots leading to untracked warehouse shrinkage, spillage, and stock degradation.',
            'Manual Broker Commission Errors: Complex commission calculations (Fixed, Percentage, and Per Quintal) creating payout disputes and delayed settlements.',
            'Double-Entry Ledger Mismatches: Manual bahi-khata entries leading to reconciliation discrepancies between buyer credit accounts and seller advances.',
            'Multi-Godown Tracking Chaos: Stock distributed across multiple cold storages and warehouses with zero real-time visibility into lot locations.',
        ],
        solution:
            'Zytrixon architected an end-to-end grain trading operating system featuring automated purchase lot generation, dynamic broker commission engines, real-time double-entry party accounting, and one-click GST invoice printing.',
        solutionPoints: [
            'Lot-Wise Inventory Control: Track exact quintals, bags, and moisture grade per purchase lot with automated stock deduction during sales.',
            'Automated Broker Commission Engine: Configure rules per broker (Fixed, %, or Per Quintal) with dedicated commission ledgers and one-click payouts.',
            'Integrated Party Ledgers: Every purchase, sale, receipt, and payment automatically updates ledger balances with instant PDF/Excel exports.',
            'Multi-Godown & Storage Management: Real-time stock visibility across distributed warehouses and cold storages with instant inter-godown transfers.',
            'Multi-Unit Trade Engine: Native trade conversion across Quintals, Tons, and custom Bag Weights (50kg, 100kg).',
        ],
        metrics: [
            {
                value: '500+',
                label: 'Mandi Traders',
                desc: 'Trusted by agricultural merchants, commission agents, and wholesale grain traders.',
            },
            {
                value: '₹5B+',
                label: 'Volume Managed',
                desc: 'Handling massive commodity trade volumes with zero ledger mismatch.',
            },
            {
                value: '50k+',
                label: 'Invoices Generated',
                desc: 'Instant GST-compliant tax invoices and customized Mandi bills of supply.',
            },
            {
                value: '100%',
                label: 'Lot Visibility',
                desc: 'Real-time lot-level tracking across all godowns, eliminating inventory shrinkage.',
            },
        ],
        features: [
            {
                title: 'Lot-Wise Inventory Control',
                desc: 'Track individual purchase lots with exact bags and quintal weight. Deduct stock from specific lots during sales to prevent shrinkage.',
                icon: '🌾',
            },
            {
                title: 'Automated Broker Commissions',
                desc: 'Support for Fixed, Percentage, and Per Quintal commission rules with dedicated broker ledgers and instant payout tracking.',
                icon: '🤝',
            },
            {
                title: 'Live Party Ledgers',
                desc: 'Automatic double-entry bookkeeping for purchases, sales, receipts, and payments with opening/closing balances and PDF statements.',
                icon: '📒',
            },
            {
                title: 'Multi-Godown Management',
                desc: 'Track stock across multiple warehouses or cold storages with seamless stock transfers and location-wise inventory reports.',
                icon: '🏢',
            },
            {
                title: 'Professional GST Invoicing',
                desc: 'Generate compliant tax invoices and bills of supply instantly with customizable letterhead graphics for pre-printed stationery.',
                icon: '🧾',
            },
            {
                title: 'Multi-Unit Trade Conversion',
                desc: 'Purchase in Tons, sell in Quintals. Native unit conversions with custom bag weight definitions (50kg, 100kg) globally.',
                icon: '⚖️',
            },
        ],
        techStack: [
            {
                name: 'Laravel 11 Core',
                category: 'Backend Engine & Multi-Tenancy',
            },
            {
                name: 'MySQL Enterprise',
                category: 'ACID Relational Ledger Database',
            },
            {
                name: 'Bootstrap & Duralux Admin',
                category: 'Enterprise Dashboard UI',
            },
            {
                name: 'Redis Cache',
                category: 'Sub-Millisecond Ledger Queries',
            },
            {
                name: 'AES-256 Encryption',
                category: 'Financial Security & Data Shield',
            },
        ],
        screenshots: [
            {
                title: 'Grain SaaS Trading Command Center & Live Analytics',
                category: 'Trading Dashboard',
                image: '/assets/products/grain-saas/grain-saas-dashboard.png',
                description:
                    'Unified merchant workspace monitoring live purchases, sales dispatch logs, current stock units, total payables (₹101,300), sales vs purchases velocity graph, and grain-wise inventory distribution.',
            },
            {
                title: 'Grain SaaS Official Web Platform & Merchant Portal',
                category: 'Platform Architecture',
                image: '/assets/products/grain-saas/grain-saas-hero-pc.png',
                description:
                    'Cloud-based grain trading operating system engineered for commission agents, Mandi merchants, and agricultural wholesale enterprises.',
            },
        ],
        demoCredentials: {
            email: 'trader@grainsaas.com',
            pass: 'Grain#Trader2026',
            role: 'Mandi Merchant / Commission Agent',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Arrival & Lot Creation',
                tech: 'Procurement Engine',
                detail:
                    'Log incoming grain arrivals, deduct shortage/wastage, and generate purchase lots.',
            },
            {
                step: '02',
                title: 'Godown Stock Allocation',
                tech: 'Multi-Warehouse Mesh',
                detail:
                    'Assign lot to specific godown and track bag count and quintal weight in real-time.',
            },
            {
                step: '03',
                title: 'Sales Dispatch & Broker Rules',
                tech: 'Commission Automation',
                detail:
                    'Sell from designated lots while system automatically calculates broker commissions.',
            },
            {
                step: '04',
                title: 'Ledger Reconciliation & Invoicing',
                tech: 'Double-Entry Core',
                detail:
                    'Instant ledger balance update, payment receipt generation, and GST tax invoice print.',
            },
        ],
    },
    {
        id: 'review-booster',
        slug: 'review-booster',
        title: 'ReviewBooster — Turn Walk-in Customers into 5-Star Google Reviews with Smart AI & QR',
        shortTitle: 'ReviewBooster',
        category: 'Proprietary IP • AI Reputation Engine & Smart QR Hardware',
        tagline:
            'Turn walk-in customers into genuine 5-star Google reviews in 15 seconds. Physical QR counter standees + smart context-aware AI review assistant. 100% Google policy compliant.',
        client: 'Zytrixon Proprietary Suite',
        industry: 'Restaurants, Clinics, Salons, Retail & Multi-Location Franchises',
        year: '2026',
        duration: 'Enterprise Ready',
        architecture:
            'Context-Aware Natural Language Review Engine, Multi-Tenant Laravel 12 & Physical NFC/QR Touchpoints',
        accentColor: '#059669',
        secondaryColor: '#10B981',
        heroImage: '/assets/products/review-booster/review-booster-hero.png',
        mobileImage: '/assets/products/review-booster/review-booster-mobile.png',
        liveUrl: 'https://aireview.zytrixon.com/',
        videoUrl: '',
        videoPoster: '/assets/products/review-booster/review-booster-hero.png',
        summary:
            'ReviewBooster is an omnichannel reputation growth platform engineered to turn physical walk-in customers into genuine 5-star Google Maps reviews in under 15 seconds. By pairing acrylic QR/NFC counter standees with an intelligent, context-aware AI review assistant, customers select their experience tags without facing blank text box paralysis. The platform features an automated Reputation Protection Shield that routes ratings under 4 stars to private management channels, native Hinglish and English dialect generation, and a multi-tenant franchise dashboard with real-time scan-to-review analytics.',
        challenge:
            'Over 93% of satisfied walk-in customers intend to leave a positive review, but abandon the process due to keyboard typing friction, awkward staff requests, and blank text box paralysis. Meanwhile, disgruntled customers go out of their way to post negative reviews on Google Maps, skewing public merchant ratings.',
        challengePoints: [
            'Blank Text Box Paralysis: Customers want to help, but do not know what to write on a phone keyboard while rushing out of a store.',
            'Friction of App Downloads: Requiring logins, downloads, or SMS links causes massive drop-offs once customers leave premises.',
            'Spam Filter & Bot Penalties: Using bot services or canned repetitive templates violates Google Business Profile policies and risks listing suspensions.',
            'Unfiltered Public Negative Outbursts: Dissatisfied customers post 1-star reviews directly to Google before managers have any opportunity to resolve the issue internally.',
        ],
        solution:
            'ReviewBooster creates an instant, zero-friction review funnel directly at checkout counters through physical QR/NFC touchpoints, browser-native AI draft assistance in Hinglish & English, and a private feedback filter.',
        solutionPoints: [
            'Physical QR & NFC Counter Standees: Premium acrylic table tents and POS counter plaques placed at the peak customer satisfaction moment.',
            'Zero-App Browser Flow: Native mobile browser experience opens in under 0.8 seconds on any iOS or Android camera scan without downloads or account creation.',
            'Context-Aware Smart AI Assistant: Customers tap 2–3 experience tags, and the AI crafts a unique, natural 2-sentence review in conversational Hinglish or English.',
            'Reputation Protection Shield: Dissatisfied ratings (1–3 stars) are privately routed to the manager WhatsApp or email for internal resolution, keeping public Google ratings protected.',
            '100% Google Safe Architecture: Every submission is customer-initiated, edited, and posted directly from their personal device and Google account.',
            'Multi-Tenant Franchise & Agency Control: Centralized administration for single outlets or 500+ franchise locations with per-location review tags and reseller capabilities.',
        ],
        metrics: [
            {
                label: 'Review Volume Increase',
                value: '5.4×',
                desc: 'Average increase in monthly customer Google reviews within 60 days of counter standee deployment.',
            },
            {
                label: 'Average Merchant Rating',
                value: '4.86★',
                desc: 'Maintained across 1,200+ active retail, dining, healthcare, and salon merchants.',
            },
            {
                label: 'Scan-to-Post Speed',
                value: '14 Sec',
                desc: 'Ultra-fast customer flow from camera scan to Google Maps submission.',
            },
            {
                label: 'Google Policy Compliance',
                value: '100%',
                desc: 'Strict white-hat architecture with customer-driven posting and zero bot injections.',
            },
        ],
        features: [
            {
                title: 'Zero Customer Friction (4-Step Flow)',
                desc: 'Scan counter QR -> Tap stars & experience tags -> AI crafts personalized draft -> 1-tap copy and deep link to Google Maps.',
                icon: '⚡',
            },
            {
                title: 'Context-Aware Smart AI Review Engine',
                desc: 'Generates natural, human-sounding reviews with dynamic variations in English and conversational Hinglish tailored for Indian local businesses.',
                icon: '🤖',
            },
            {
                title: 'Private Feedback Reputation Shield',
                desc: 'Ratings of 1 to 3 stars route gracefully to internal management feedback forms, giving you time to resolve issues before they reach Google.',
                icon: '🛡️',
            },
            {
                title: 'Physical QR & NFC Counter Standees',
                desc: 'A6 clear acrylic table tents, NFC + QR counter plaques, and 10-table restaurant bundles engineered for high-footfall durability.',
                icon: '🪧',
            },
            {
                title: 'Multi-Tenant Franchise & Agency Suite',
                desc: 'Manage 1 outlet or 500+ franchise branches with custom tags, outlet-level analytics, and white-label reseller controls.',
                icon: '🏢',
            },
            {
                title: 'Real-Time CTR & Scan Analytics',
                desc: 'Track QR scan conversion rates, staff performance, customer sentiment trends, and monthly review velocity from a centralized dashboard.',
                icon: '📊',
            },
        ],
        techStack: [
            {
                name: 'Laravel 12 API',
                category: 'Multi-Tenant Core & Backend Services',
            },
            {
                name: 'Natural Language Processing Engine',
                category: 'Proprietary Context-Aware AI Generation',
            },
            {
                name: 'Alpine.js & Livewire',
                category: 'High-Speed Client Reactive Interface',
            },
            {
                name: 'NFC (NTAG213/215) & Dynamic QR',
                category: 'Physical Counter Standee Hardware',
            },
            {
                name: 'Google Places API',
                category: 'Verified Listing Deep-Linking',
            },
            {
                name: 'Tailwind CSS v4',
                category: 'Emerald Design System & Mobile Tokens',
            },
            {
                name: 'MySQL Multi-Tenant DB',
                category: 'Row-Level Scoped Data Storage',
            },
        ],
        screenshots: [
            {
                title: 'ReviewBooster Hero & Live AI Review Preview',
                category: 'Dashboard',
                image: '/assets/products/review-booster/review-booster-hero.png',
                description:
                    'Interactive AI review assistant showcase with 15-second customer scan-to-post flow and live Hinglish generation.',
            },
            {
                title: 'Native Mobile Scan Experience & Tap Tags',
                category: 'Mobile App',
                image: '/assets/products/review-booster/review-booster-mobile.png',
                description:
                    'Zero-app browser flow for customers featuring star rating selection, tag chips, and 1-tap clipboard copying.',
            },
            {
                title: 'System Architecture & Core Capabilities',
                category: 'Workflow',
                image: '/assets/products/review-booster/review-booster-features.png',
                description:
                    'Comprehensive breakdown of context-aware AI engine, anti-spam protections, and multi-tenant capabilities.',
            },
            {
                title: 'Zero-Friction 4-Step Customer Journey',
                category: 'Workflow',
                image: '/assets/products/review-booster/review-booster-workflow.png',
                description:
                    'Visual blueprint showing camera scan, tag selection, AI generation, and instant Google Maps submission.',
            },
            {
                title: 'Subscription Plans & Acrylic Hardware Packages',
                category: 'Analytics',
                image: '/assets/products/review-booster/review-booster-pricing.png',
                description:
                    'Transparent pricing tiers for single outlets, growing multi-location chains, and digital marketing agencies.',
            },
        ],
        testimonial: {
            quote:
                'We jumped from 82 to 460 reviews in 60 days. Now #1 for biryani near me in Indiranagar. The Hinglish text is unbelievably natural!',
            author: 'Sameer Khan',
            role: 'Founder & Head Chef · The Biryani Court (Bangalore)',
        },
        architectureFlow: [
            {
                step: '01',
                title: 'Counter Touchpoint Scan',
                tech: 'NFC / Dynamic QR Code',
                detail:
                    'Customer scans acrylic standee or taps NFC plaque at checkout, loading the lightweight mobile page in <0.8s without app download.',
            },
            {
                step: '02',
                title: 'Sentiment & Tag Capture',
                tech: 'Interactive Micro-UI',
                detail:
                    'Customer taps 5 stars and 2–3 specific service tags (e.g., Great Food, Quick Billing, Polite Staff).',
            },
            {
                step: '03',
                title: 'Contextual AI Generation',
                tech: 'Proprietary NLP Engine',
                detail:
                    'System weaves selected tags into an authentic, human-sounding 2-sentence review in conversational English or Hinglish.',
            },
            {
                step: '04',
                title: '1-Tap Google Maps Submission',
                tech: 'Universal Deep-Linking',
                detail:
                    'Draft copies to clipboard and automatically opens the merchant Google Maps review dialog for instant submission.',
            },
        ],
    },
];

export function getProductBySlug(slug: string): ProjectItem | undefined {
    return PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug || (slug === 'ai-review' && (p.slug === 'review-booster' || p.id === 'review-booster')));
}
