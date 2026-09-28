<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;
use App\Models\Location;
use App\Models\Service;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    /**
     * Display the enterprise administration panel overview.
     */
    public function index(): Response
    {
        $stats = [
            'servicesCount' => Service::count(),
            'locationsCount' => Location::count(),
            'caseStudiesCount' => CaseStudy::count(),
            'totalUsers' => User::count(),
            'adminCount' => User::where('role', 'admin')->count(),
            'customerCount' => User::where('role', 'customer')->count(),
            'dbDriver' => config('database.default'),
            'dbName' => DB::connection()->getDatabaseName(),
            'phpVersion' => PHP_VERSION,
            'laravelVersion' => app()->version(),
        ];

        $recentUsers = User::latest()->take(5)->get(['id', 'name', 'email', 'role', 'created_at']);

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentUsers' => $recentUsers,
        ]);
    }
}
