<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AuthController as AdminAuthController;
use App\Http\Controllers\Customer\CustomerDashboardController;
use App\Http\Controllers\CaseStudyController;
use App\Http\Controllers\SeoController;
use App\Models\CaseStudy;
use App\Models\Location;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome', [
    'seo' => [
        'title' => 'Zytrixon Tech | Best Software Company in Patna, Bihar & Global IT Solutions',
        'description' => 'Zytrixon Tech is a top-rated software company in Patna, Bihar delivering enterprise Web Development, Mobile Apps, AI, and IoT solutions globally.',
        'keywords' => 'software company in patna, web development patna, best it company patna, app development bihar, zytrixon tech, it company bihar',
    ],
])->name('home');

// Programmatic SEO Routes
Route::get('/services', [SeoController::class, 'index'])->name('services.index');
Route::get('/locations', [SeoController::class, 'locationsIndex'])->name('locations.index');
Route::get('/locations/{location_slug}', [SeoController::class, 'showLocation'])->name('locations.show');
Route::get('/services/{service_slug}', [SeoController::class, 'showServiceLocation'])->name('service.show');
Route::get('/services/{service_slug}/in/{location_slug}', [SeoController::class, 'showServiceLocation'])->name('service.location.show');

// New Static Pages
Route::inertia('/about', 'About', [
    'seo' => ['title' => 'About Us | Zytrixon Tech', 'description' => 'Learn about Zytrixon Tech, our mission, vision, and the team driving digital innovation in web and app development.'],
])->name('about');

Route::inertia('/portfolio', 'Portfolio', [
    'seo' => ['title' => 'Our Portfolio & Case Studies | Zytrixon Tech', 'description' => 'Explore our portfolio of successful web development, app development, and SEO projects at Zytrixon Tech.'],
])->name('portfolio');

Route::get('/portfolio/{slug}', function (string $slug) {
    if (in_array($slug, ['mobile-crm', 'grocery-mart', 'grain-saas', 'review-booster', 'ai-review'])) {
        return redirect()->route('products.show', ['slug' => $slug === 'ai-review' ? 'review-booster' : $slug]);
    }

    return app(CaseStudyController::class)->show($slug);
})->name('portfolio.show');

Route::get('/projects/{slug}', function ($slug) {
    if (in_array($slug, ['mobile-crm', 'grocery-mart', 'grain-saas', 'review-booster', 'ai-review'])) {
        return redirect()->route('products.show', ['slug' => $slug === 'ai-review' ? 'review-booster' : $slug]);
    }

    return redirect()->route('portfolio.show', ['slug' => $slug]);
});

Route::get('/products/{slug}', function (string $slug) {
    $canonicalSlug = $slug === 'ai-review' ? 'review-booster' : $slug;

    $product = match ($canonicalSlug) {
        'mobile-crm' => [
            'title' => 'Mobile CRM — Complete Operating System for Mobile & Electronics Retailers',
            'desc' => 'From IMEI-level serial tracking and one-tap GST billing to supplier credit ledgers and automated staff payroll — run your entire single or multi-outlet retail business effortlessly.',
            'image' => '/assets/products/mobile-crm/Screenshot 2026-09-26 162520.png',
        ],
        'grocery-mart' => [
            'title' => 'Grocery Mart — Multi-Platform Quick-Commerce & Supermarket OS',
            'desc' => 'Unified Quick-Commerce Ecosystem: React Native Customer App (10-15 min delivery), Dark-Store Picker & Rider App, Super Admin Master Catalog, and Store Manager Inventory & Margin Engine.',
            'image' => '/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png',
        ],
        'grain-saas' => [
            'title' => 'Grain SaaS — Premium Grain Trading, Lot-wise Inventory & Mandi Management Platform',
            'desc' => 'Manage lot-wise inventory, track purchase lots, automate broker commissions, and handle integrated party ledgers seamlessly in one platform built specifically for agricultural merchants.',
            'image' => '/assets/products/grain-saas/grain-saas-dashboard.png',
        ],
        'review-booster' => [
            'title' => 'ReviewBooster — Turn Walk-in Customers into 5-Star Google Reviews with Smart AI & QR',
            'desc' => 'Collect genuine 5-star Google reviews in 15 seconds. Physical QR counter standees + smart context-aware AI review assistant. 100% Google policy compliant.',
            'image' => '/assets/products/review-booster/review-booster-hero.png',
        ],
        default => [
            'title' => ucwords(str_replace('-', ' ', $canonicalSlug)),
            'desc' => 'Explore our enterprise proprietary products delivered by Zytrixon Tech.',
            'image' => '/favicon.svg',
        ],
    };

    return inertia('ProductDetails', [
        'slug' => $canonicalSlug,
        'seo' => [
            'title' => $product['title'].' | Zytrixon Tech Products',
            'description' => $product['desc'],
            'image' => url($product['image']),
        ],
    ]);
})->name('products.show');

Route::get('/mobile-crm', function () {
    return redirect()->route('products.show', ['slug' => 'mobile-crm']);
});

Route::get('/grocery-mart', function () {
    return redirect()->route('products.show', ['slug' => 'grocery-mart']);
});

Route::get('/grain-saas', function () {
    return redirect()->route('products.show', ['slug' => 'grain-saas']);
});

Route::get('/review-booster', function () {
    return redirect()->route('products.show', ['slug' => 'review-booster']);
});

Route::get('/ai-review', function () {
    return redirect()->route('products.show', ['slug' => 'review-booster']);
});

Route::inertia('/contact', 'Contact', [
    'seo' => ['title' => 'Contact Us | Zytrixon Tech', 'description' => 'Get in touch with Zytrixon Tech for premium web development, app development, and digital marketing services.'],
])->name('contact');

Route::get('/work', function () {
    return redirect()->route('portfolio');
});

Route::inertia('/team', 'Team', [
    'seo' => ['title' => 'Our Team | Zytrixon Tech', 'description' => 'Meet the expert team of developers, designers, and strategists at Zytrixon Tech.'],
])->name('team');

Route::inertia('/blog', 'Blog', [
    'seo' => ['title' => 'Blog & Insights | Zytrixon Tech', 'description' => 'Read the latest insights on web development, software engineering, and digital marketing from Zytrixon Tech.'],
])->name('blog');

Route::get('/blog/{slug}', function ($slug) {
    $title = ucwords(str_replace('-', ' ', $slug));

    return inertia('BlogDetails', [
        'slug' => $slug,
        'seo' => [
            'title' => $title.' | Zytrixon Tech Blog',
            'description' => 'Read our latest blog post about '.$title.' at Zytrixon Tech.',
        ],
    ]);
})->name('blog.details');

Route::inertia('/careers', 'Careers', [
    'seo' => ['title' => 'Careers | Zytrixon Tech', 'description' => 'Join the Zytrixon Tech team. We are looking for passionate developers, designers, and marketers.'],
])->name('careers');

Route::inertia('/process', 'Process', [
    'seo' => ['title' => 'Our Development Process | Zytrixon Tech', 'description' => 'Discover our agile and results-driven development process for building scalable web and mobile applications.'],
])->name('process');

Route::inertia('/privacy-policy', 'PrivacyPolicy', [
    'seo' => ['title' => 'Privacy Policy | Zytrixon Tech', 'description' => 'Read the privacy policy of Zytrixon Tech to understand how we handle and protect your data.'],
])->name('privacy');

Route::inertia('/terms-and-conditions', 'TermsConditions', [
    'seo' => ['title' => 'Terms and Conditions | Zytrixon Tech', 'description' => 'Read our terms and conditions for using Zytrixon Tech services and website.'],
])->name('terms');

Route::get('/case-studies', [CaseStudyController::class, 'index'])->name('case-studies.index');
Route::get('/case-studies/{slug}', [CaseStudyController::class, 'show'])->name('case-studies.show');

Route::get('/sitemap.xml', function () {
    $urls = [
        '/', '/services', '/portfolio', '/team', '/about', '/blog', '/contact', '/process', '/careers', '/privacy-policy', '/terms-and-conditions', '/case-studies',
        '/products/mobile-crm', '/products/grocery-mart', '/products/grain-saas', '/products/review-booster',
    ];

    try {
        $services = Service::all();
        $locations = Location::all();

        foreach ($services as $service) {
            $urls[] = '/services/'.$service->slug;
            foreach ($locations as $location) {
                $urls[] = '/services/'.$service->slug.'/in/'.$location->slug;
            }
        }

        $caseStudies = CaseStudy::all();
        foreach ($caseStudies as $cs) {
            $urls[] = '/case-studies/'.$cs->slug;
        }
    } catch (Exception $e) {
        // Fallback if db isn't migrated yet
    }

    $xml = '<?xml version="1.0" encoding="UTF-8"?>';
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    foreach ($urls as $url) {
        $xml .= '<url>';
        $xml .= '<loc>'.url($url).'</loc>';
        $xml .= '<changefreq>weekly</changefreq>';
        $xml .= '<priority>'.($url == '/' ? '1.0' : '0.8').'</priority>';
        $xml .= '</url>';
    }

    $xml .= '</urlset>';

    return response($xml)->header('Content-Type', 'text/xml');
});

// ============================================
// ADMIN & PORTAL AUTHENTICATION
// ============================================
Route::get('/z-admin', [AdminAuthController::class, 'showLogin'])->name('admin.login');
Route::post('/z-admin/login', [AdminAuthController::class, 'login'])->name('admin.login.store');
Route::post('/z-admin/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');

// Override default login/register
Route::get('/login', function () {
    return redirect()->route('admin.login');
})->name('login');

Route::get('/register', function () {
    return redirect()->route('admin.login')->with('error', 'Public registration is disabled. Please contact the administrator.');
});

// Dynamic role-based dispatcher for /dashboard
Route::get('/dashboard', function () {
    if (! Auth::check()) {
        return redirect()->route('admin.login');
    }

    return Auth::user()->role === 'admin'
        ? redirect()->route('admin.dashboard')
        : redirect()->route('customer.dashboard');
})->middleware(['auth'])->name('dashboard');

// Protected Admin Panel
Route::middleware(['auth', 'admin'])->prefix('z-admin')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
});

// Protected Customer Portal
Route::middleware(['auth'])->prefix('customer')->group(function () {
    Route::get('/dashboard', [CustomerDashboardController::class, 'index'])->name('customer.dashboard');
});

require __DIR__.'/settings.php';

// Shared Hosting Fallback for Vite Assets
Route::get('/build/assets/{file}', function ($file) {
    $path = public_path('build/assets/'.$file);
    if (file_exists($path)) {
        $extension = pathinfo($path, PATHINFO_EXTENSION);
        $mime = match ($extension) {
            'js' => 'application/javascript',
            'css' => 'text/css',
            'svg' => 'image/svg+xml',
            'png' => 'image/png',
            'jpg', 'jpeg' => 'image/jpeg',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            default => mime_content_type($path) ?: 'application/octet-stream',
        };

        return response()->file($path, [
            'Content-Type' => $mime,
            'Cache-Control' => 'public, max-age=31536000, immutable',
        ]);
    }
    abort(404);
})->where('file', '.*');
