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
                'client_name' => 'S.K. Infratech (Sandeep Tyagi)',
                'industry' => 'Real Estate & Construction Infrastructure',
                'challenge' => 'The real estate market in NCR and West UP was overwhelmed with unlicensed middlemen, opaque pricing, legal documentation disputes, and lack of real-time inventory for prime residential and agricultural plots.',
                'solution' => 'Zytrixon engineered a high-speed, mobile-first real estate portal with instant inquiry routing, interactive plot catalogs, RERA verification documentation badges, and direct WhatsApp connect.',
                'results' => ['5,000+ Units Delivered', '12+ Yrs Market Dominance', '₹0 Brokerage Charged', '100% Legal Approval Rate'],
                'image' => '/assets/projects/sk-infratech/hero-invest-right.jpg',
            ],
            [
                'title' => 'Smart India Detective — Confidential Corporate Intelligence & Case Portal',
                'slug' => 'smart-india-detective',
                'client_name' => 'Smart India Detective (Pawan Tyagi)',
                'industry' => 'Corporate Security & Private Investigation',
                'challenge' => 'Client confidentiality is paramount in corporate investigation. Traditional communication channels carried severe risks of data intercept, eavesdropping, and unauthorized leakage.',
                'solution' => 'Zytrixon developed an end-to-end encrypted investigation management suite with client consultation routing, zero-knowledge evidence encryption, and automated tamper-proofing.',
                'results' => ['100% Confidentiality Rate', '256-Bit Military Encryption', '15+ Yrs Field Experience', '< 2 Hrs Urgent Dispatch'],
                'image' => '/assets/projects/smart-india-detective/hero-secret-investigation.png',
            ],
            [
                'title' => 'Thread Ax — High-Concurrency D2C Fashion & Apparel Platform',
                'slug' => 'thread-ax',
                'client_name' => 'Thread Ax (Prince Chaudhary)',
                'industry' => 'Fashion, Apparel & D2C E-Commerce',
                'challenge' => 'During festive flash drops and Instagram influencer campaigns, Thread Ax suffered from cart abandonments, database lock contention, and inventory overselling.',
                'solution' => 'Zytrixon re-engineered the platform using Next.js 15 App Router, Redis atomic inventory locks, and automated Shiprocket fulfillment webhooks.',
                'results' => ['300% Sales Velocity Growth', '0.8s Edge Page Speed', '99.99% Drop Uptime', '4.8/5 Buyer Satisfaction'],
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
