<?php

namespace App\Http\Controllers;

use App\Models\CaseStudy;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class CaseStudyController extends Controller
{
    public function index(): RedirectResponse
    {
        return redirect()->route('portfolio');
    }

    public function show(string $slug): Response
    {
        // Try finding from database or fallback gracefully to dummy project slug
        $caseStudy = CaseStudy::where('slug', $slug)->first();

        $title = $caseStudy->title ?? match ($slug) {
            'hostel-erp' => 'HostelERP — Campus & Hostel Facility Management Software',
            'glowsuite' => 'GlowSuite — Luxury Salon, Spa, Token-Based Booking & Bridal Rentals',
            'jmd-trucks' => 'JMD Truck Management — Fleet Intelligence & Logistics Billing Platform',
            'billixa-bill' => 'BillixaBill Restaurant POS Software & Android App — QR Menu, KOT & Cloud Billing',
            'sk-infratech' => 'S.K. Infratech — Real Estate & Infrastructure Portal',
            'smart-india-detective' => 'Smart India Detective — Corporate Intelligence & Investigation Portal',
            'thread-ax' => 'Thread Ax — D2C Fashion & Apparel Platform',
            'zytrixon-labs' => 'ZytrixonLabs Pathology — Next-Gen Cloud LIS & Lab Platform',
            default => ucwords(str_replace('-', ' ', $slug)),
        };

        $description = $caseStudy->solution ?? match ($slug) {
            'hostel-erp' => 'Hostel ERP software made simple: automate room allocation, digital student records, fee collection, and maintenance ticketing in one place.',
            'glowsuite' => 'Luxury salon and spa management suite featuring live token appointment booking, bridal packages, jewellery rentals, and beauty shop.',
            'jmd-trucks' => 'Smart logistics and fleet intelligence platform for automating dispatch, driver wallets, and multi-party bilty billing.',
            'billixa-bill' => 'India\'s simple restaurant POS software and Android app powered by Laravel with QR menus, KOT, table management, and Razorpay/Stripe payments.',
            'sk-infratech' => 'Direct-to-buyer property inventory, RERA-verified land acquisition, and transparent property trading with ₹0 brokerage.',
            'smart-india-detective' => 'Encrypted client reporting, tamper-proof forensic evidence logging, and military-grade confidential client portals.',
            'thread-ax' => 'Modern headless storefront delivering sub-second checkout, automated warehouse fulfillment, and dynamic inventory sync.',
            'zytrixon-labs' => 'The all-in-one cloud LIS platform. Connect analyzers, manage partners, and automate reporting with zero paper friction.',
            default => 'Explore our enterprise software case study and live demo delivered by Zytrixon Tech.',
        };

        return Inertia::render('ProjectDetails', [
            'slug' => $slug,
            'caseStudy' => $caseStudy,
            'seo' => [
                'title' => $title.' | Zytrixon Tech Portfolio',
                'description' => $description,
            ],
        ]);
    }
}
