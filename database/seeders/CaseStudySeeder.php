<?php

namespace Database\Seeders;

use App\Models\CaseStudy;
use Illuminate\Database\Seeder;

class CaseStudySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $caseStudies = [
            [
                'title' => 'HostelERP — Campus & Hostel Facility Management Software',
                'slug' => 'hostel-erp',
                'client_name' => 'HostelERP (HostelMate)',
                'industry' => 'Education Technology & Hostel Management Software',
                'challenge' => 'Hostel wardens and campus administrators struggle with manual register books, lost paper complaints, delayed fee reconciliations, double-allocated rooms during semester intakes, and zero real-time visibility into bed occupancy or maintenance turnaround.',
                'solution' => 'Zytrixon developed an all-in-one cloud ERP system featuring an automated room allocation matrix, digital student profiles with attendance logs, automated fee billing with instant invoice generation, and a responsive student ticketing portal.',
                'results' => ['70% Faster Collections', '85% Occupancy Rate', '92% Maintenance SLA', '24/7 Student Portal'],
                'image' => '/assets/projects/hostel-erp/hostel-hero-landscape.png',
            ],
            [
                'title' => 'GlowSuite — Luxury Salon, Spa, Token-Based Booking & Bridal Rentals',
                'slug' => 'glowsuite',
                'client_name' => 'GlowSuite Luxury Salon & Spa',
                'industry' => 'Beauty, Wellness, Salon Management & Bridal Rentals',
                'challenge' => 'Premium salons face major operational friction: chaotic weekend queues with frustrated walk-ins, untracked appointment cancellations, manual bridal consultation follow-ups, fragmented retail product checkout, and complex deposit/return management for high-value bridal jewellery rentals.',
                'solution' => 'Zytrixon engineered an all-in-one salon experience platform powered by Laravel 11 and Alpine.js featuring a 4-step live token appointment queue, e-commerce beauty store, bridal packages, and designer jewellery rental vault.',
                'results' => ['2,800+ Happy Clients', '4.9★ Client Rating', 'Zero Wait Friction', '100% Security Refund'],
                'image' => '/assets/projects/glowsuite/glowsuite-hero-landscape.png',
            ],
            [
                'title' => 'JMD Truck Management — Fleet Intelligence & Logistics Billing Platform',
                'slug' => 'jmd-trucks',
                'client_name' => 'JMD Truck Management',
                'industry' => 'Fleet Logistics & Transport Network Management',
                'challenge' => 'Transport fleet owners face heavy operational chaos: late-night cash advance calls from drivers for fuel and tolls, lost paper receipts, dispute-prone multi-broker bilty invoicing, delayed POD verification, and zero clear visibility into actual trip-wise profit margins.',
                'solution' => 'Zytrixon architected a comprehensive Laravel-powered fleet intelligence portal enabling one-click trip creation, instant digital driver wallet disbursements, real-time receipt uploads, automated POD multi-party bilty generation, and live dispatch command visibility.',
                'results' => ['10k+ Active Trucks', '₹50Cr+ Processed Monthly', '99.9% Data Accuracy', '20 Days Delivery'],
                'image' => '/assets/projects/jmd-trucks/jmd-hero-landscape.png',
            ],
            [
                'title' => 'BillixaBill Restaurant POS Software & Android App — QR Menu, KOT & Cloud Billing',
                'slug' => 'billixa-bill',
                'client_name' => 'BillixaBill',
                'industry' => 'Restaurant POS Software & Android Mobile Solutions',
                'challenge' => 'Restaurant and cafe owners face daily operational bottlenecks: misplaced handwritten paper KOTs, delayed table turnover during peak rush hours, cashier billing confusion, untracked inventory spoilage, and lack of unified mobile visibility into daily sales.',
                'solution' => 'Zytrixon developed a full-stack Laravel-powered POS ecosystem integrated with a native Android mobile application. It features automated digital KOT dispatch, contactless table QR code ordering, interactive floor plan grids, integrated Razorpay/Stripe payments, and cloud inventory synchronization.',
                'results' => ['Laravel 11 Cloud Engine', 'Android App on Google Play', '7 Days Free Trial', '< 2 Sec KOT Dispatch'],
                'image' => '/assets/projects/billixa-bill/billixa-hero-landscape.png',
            ],
            [
                'title' => 'S.K. Infratech — Real Estate, Land Acquisition & Infrastructure Portal',
                'slug' => 'sk-infratech',
                'client_name' => 'S.K. Infratech (Sandeep Tyagi - Founder & CEO)',
                'industry' => 'Real Estate & Construction Infrastructure',
                'challenge' => 'The real estate market across Ghaziabad and West UP was plagued by unlicensed middlemen, title disputes on unverified lands, high broker markups, and an acute lack of liquidity for landowners looking for urgent capital.',
                'solution' => 'Zytrixon engineered a high-speed direct-inventory portal supporting S.K. Infratech\'s Direct Investment Model: direct owner property showcases, in-house triple-check legal verification, instant buy-back liquidity workflows, and automated site-visit dispatch.',
                'results' => ['12+ Yrs Market Experience', '5,000+ Units Delivered', '₹0 Brokerage Charged', '100% Legal Approval Rate'],
                'image' => '/assets/projects/sk-infratech/hero-invest-right.jpg',
            ],
            [
                'title' => 'Smart India Detective — Confidential Corporate Intelligence & Case Portal',
                'slug' => 'smart-india-detective',
                'client_name' => 'Smart India Detective (Pawan Tyagi)',
                'industry' => 'Corporate Security & Private Investigation',
                'challenge' => 'Individuals and corporations face high-stakes threats ranging from matrimonial infidelity and asset disputes to corporate fraud, extortion, and cyber blackmailing, where traditional reporting risks leaks, fabricated claims, or inadmissible evidence.',
                'solution' => 'Zytrixon developed an end-to-end encrypted investigation management portal built exclusively on Laravel, featuring zero-trace inquiry routing, 24/7 emergency hotline bridges, tamper-proof client consultation booking, and discreet case intake.',
                'results' => ['15+ Yrs Field Experience', '2,000+ Cases Solved', '50+ Expert Operatives', '100% Confidentiality'],
                'image' => '/assets/projects/smart-india-detective/hero-secret-investigation.png',
            ],
            [
                'title' => 'ThreadAX — High-Concurrency D2C Streetwear & Apparel Platform',
                'slug' => 'thread-ax',
                'client_name' => 'ThreadAX (Prince Chaudhary)',
                'industry' => 'Streetwear, Apparel & D2C E-Commerce',
                'challenge' => 'Viral TikTok & Instagram drop spikes caused database lock contention, cart abandonments, and inventory overselling across limited-edition hoodies and graphic oversized tees.',
                'solution' => 'Zytrixon engineered a high-velocity Laravel D2C platform featuring sub-second edge rendering, Redis atomic cart locks, Razorpay payments, and automated Pan-India shipping.',
                'results' => ['280+ GSM Heavy Cotton', '₹999+ Free Shipping', '7 Days No-Questions Returns', '4.9/5 Community Rating'],
                'image' => '/assets/projects/threadax/hero-new-drop.png',
            ],
            [
                'title' => 'ZytrixonLabs Pathology — Next-Gen Cloud LIS & Lab Intelligence Platform',
                'slug' => 'zytrixon-labs',
                'client_name' => 'ZytrixonLabs Pathology',
                'industry' => 'HealthTech, Clinical Diagnostics & Laboratory Software',
                'challenge' => 'Traditional pathology and diagnostic labs struggle with disjointed manual report generation, analyzer data silos, error-prone barcode entry, and delayed test result dispatch to patients.',
                'solution' => 'Zytrixon architected an integrated cloud LIS with automated bidirectional ASTM/HL7 analyzer interfacing, digital signature approval queues, and instant WhatsApp report delivery.',
                'results' => ['99.9% Result Accuracy', '65% Faster TAT', '100% Paperless Flow', '500k+ Reports Processed'],
                'image' => '/assets/projects/zytrixon-labs/hero-pathology-lis.png',
            ],
        ];

        foreach ($caseStudies as $study) {
            CaseStudy::updateOrCreate(['slug' => $study['slug']], $study);
        }
    }
}
