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
                'title' => 'CloudScale LMS — Enterprise School & Campus Management System',
                'slug' => 'cloudscale-lms',
                'client_name' => 'EduCorp Global Systems',
                'industry' => 'Education & EdTech SaaS',
                'challenge' => 'The institution was burdened by legacy on-premise software that suffered from severe downtime during peak examination periods. Manual fee reconciliation led to accounting errors, and parents lacked real-time visibility.',
                'solution' => 'Zytrixon engineered a modern cloud-native architecture using Next.js 15, high-performance Laravel APIs, and PostgreSQL. Integrated direct UPI/card payment webhooks and automated WhatsApp notifications.',
                'results' => ['99.98% System Uptime', '150k+ Daily Students', '3.5x Faster Fee Collection', '4.9/5 Parent Rating'],
                'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85',
            ],
            [
                'title' => 'NexusTrack IoT — Real-Time Fleet Telematics & Command Center',
                'slug' => 'nexustrack-iot',
                'client_name' => 'Apex Global Logistics',
                'industry' => 'Logistics, Supply Chain & Smart Hardware',
                'challenge' => 'The logistics operator faced mounting fuel theft, frequent highway mechanical breakdowns, and delayed client delivery updates due to fragmented 2G GPS trackers and laggy tracking software.',
                'solution' => 'Zytrixon developed an ultra-scalable MQTT and WebSocket telemetry pipeline capable of processing 25,000 events/second with TimescaleDB, predictive alerts, and reactive Mapbox dashboards.',
                'results' => ['< 200ms Telemetry Latency', '32% Fuel Savings', '10,000+ Connected Devices', '0% Unplanned Downtime'],
                'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85',
            ],
        ];

        foreach ($caseStudies as $study) {
            CaseStudy::updateOrCreate(['slug' => $study['slug']], $study);
        }
    }
}
