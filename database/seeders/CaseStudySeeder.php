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
                'title' => 'E-Commerce Platform Scaling to 10M+ Monthly Users',
                'slug' => 'ecommerce-platform-scaling',
                'client_name' => 'FashionNova India',
                'industry' => 'Retail & E-Commerce',
                'challenge' => 'The client was facing severe downtime during flash sales. Their legacy PHP monolith could not handle more than 5,000 concurrent users, leading to massive revenue loss during peak seasons.',
                'solution' => 'We completely re-architected their backend using Laravel Microservices and deployed a scalable frontend with Next.js and React. We implemented Redis caching for product catalogs and optimized database indexing.',
                'results' => ['99.99% Uptime', '3x Faster Checkout', '40% Increase in Conversions'],
                'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'Healthcare CRM for 50+ Clinics Nationwide',
                'slug' => 'healthcare-crm-development',
                'client_name' => 'MediCare Plus',
                'industry' => 'Healthcare',
                'challenge' => 'Patient records were scattered across multiple disjointed systems. Booking appointments was a manual, error-prone process leading to double bookings and patient dissatisfaction.',
                'solution' => 'Built a centralized Laravel-based CRM with HIPAA-compliant data encryption. Created a custom scheduling algorithm and integrated Twilio for automated SMS reminders.',
                'results' => ['60% Reduced Admin Time', '0 Double Bookings', '15k+ Monthly Bookings'],
                'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'AI-Powered Logistics Routing App',
                'slug' => 'ai-logistics-routing-app',
                'client_name' => 'SwiftDeliver Logistics',
                'industry' => 'Logistics & Supply Chain',
                'challenge' => 'Delivery drivers were wasting hours finding optimal routes in heavy traffic. Fuel costs were skyrocketing and delivery times were frequently missed.',
                'solution' => 'Developed a cross-platform React Native app with Google Maps API integration. Built a Python AI service that calculates real-time optimal routes based on traffic and weather data.',
                'results' => ['25% Fuel Cost Reduction', '98% On-Time Deliveries', '4.8 App Store Rating'],
                'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'EdTech Platform for 500k+ Students',
                'slug' => 'edtech-learning-management-system',
                'client_name' => 'LearnSmart Academy',
                'industry' => 'Education Technology',
                'challenge' => 'The existing platform crashed during live streaming sessions with more than 1,000 students. Video buffering and poor mobile responsiveness led to high dropout rates.',
                'solution' => 'Migrated their video infrastructure to AWS Interactive Video Service (IVS) and rebuilt the learning management system (LMS) using Laravel and React for seamless streaming and interaction.',
                'results' => ['500k Active Students', 'Zero Buffering Issues', '300% Growth in Subscriptions'],
                'image' => 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'Real Estate Property Portal SEO Overhaul',
                'slug' => 'real-estate-seo-overhaul',
                'client_name' => 'MetroHomes Realty',
                'industry' => 'Real Estate',
                'challenge' => 'Despite having thousands of property listings, organic traffic was stagnant. The website had a poor URL structure, duplicate content issues, and slow load times.',
                'solution' => 'Executed a comprehensive technical SEO audit. Implemented programmatic SEO for city-based property pages, optimized Core Web Vitals to score 95+, and added rich schema markup.',
                'results' => ['450% Organic Traffic Boost', '#1 Rank for 50+ Keywords', '2x Lead Generation'],
                'image' => 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'FinTech Wallet App with Crypto Support',
                'slug' => 'fintech-crypto-wallet-app',
                'client_name' => 'PayNova Finance',
                'industry' => 'Finance & Crypto',
                'challenge' => 'The client needed a highly secure mobile wallet that could support both fiat currency and major cryptocurrencies, with instant KYC verification.',
                'solution' => 'Developed a secure Flutter application utilizing biometric authentication. Integrated blockchain APIs for crypto transactions and a third-party AI provider for 2-minute KYC verification.',
                'results' => ['$5M+ Processed Monthly', '2-Min KYC Time', 'Zero Security Breaches'],
                'image' => 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'Restaurant Chain Online Ordering System',
                'slug' => 'restaurant-online-ordering-system',
                'client_name' => 'SpicyBite Foods',
                'industry' => 'Food & Beverage',
                'challenge' => 'Paying high commissions (up to 30%) to food delivery aggregators was eating into profit margins. They needed their own robust online ordering platform.',
                'solution' => 'Built a custom PWA (Progressive Web App) using React and Node.js. Integrated direct payment gateways and a real-time order tracking system for both customers and kitchen staff.',
                'results' => ['30% Commission Saved', '10k+ App Installs', 'Loyalty Program Success'],
                'image' => 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'title' => 'Manufacturing IoT Dashboard & Analytics',
                'slug' => 'manufacturing-iot-dashboard',
                'client_name' => 'SteelForge Industries',
                'industry' => 'Manufacturing',
                'challenge' => 'Factory machines were breaking down unexpectedly due to lack of predictive maintenance. Managers had no real-time visibility into production line efficiency.',
                'solution' => 'Deployed IoT sensors on factory machines and built a real-time Vue.js dashboard powered by a Laravel backend. Used WebSockets to stream machine temperature and vibration data instantly.',
                'results' => ['40% Less Machine Downtime', 'Real-time Alerts', '15% Production Boost'],
                'image' => 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
            ],
        ];

        foreach ($caseStudies as $study) {
            CaseStudy::create($study);
        }
    }
}
