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
