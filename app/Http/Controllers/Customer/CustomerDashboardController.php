<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class CustomerDashboardController extends Controller
{
    /**
     * Display the authenticated client portal dashboard.
     */
    public function index(): Response
    {
        $user = Auth::user();

        $services = [
            [
                'title' => 'Web & Cloud Development',
                'status' => 'Available',
                'description' => 'Enterprise web architecture, API integration, and cloud scaling.',
            ],
            [
                'title' => 'Mobile Applications',
                'status' => 'Available',
                'description' => 'Native iOS & Android and React Native quick-commerce platforms.',
            ],
            [
                'title' => 'AI Reputation & Review Systems',
                'status' => 'Active',
                'description' => 'ReviewBooster counter standees and context-aware review automation.',
            ],
        ];

        return Inertia::render('Customer/Dashboard', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
                'created_at' => $user->created_at,
            ],
            'services' => $services,
            'supportPhone' => '+91 7049711475',
            'supportEmail' => 'zytrixon@gmail.com',
        ]);
    }
}
