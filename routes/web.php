<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SeoController;

Route::inertia('/', 'welcome')->name('home');

// Programmatic SEO Routes
Route::get('/services', [SeoController::class, 'index'])->name('services.index');
Route::get('/services/{service_slug}', [SeoController::class, 'showServiceLocation'])->name('service.show');
Route::get('/services/{service_slug}/in/{location_slug}', [SeoController::class, 'showServiceLocation'])->name('service.location.show');

// New Static Pages
Route::inertia('/about', 'About')->name('about');
Route::inertia('/portfolio', 'Portfolio')->name('portfolio');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/work', 'Portfolio'); // alias
Route::inertia('/team', 'Team')->name('team');
Route::inertia('/blog', 'Blog')->name('blog');
Route::inertia('/blog/{slug}', 'BlogDetails')->name('blog.details');
Route::inertia('/careers', 'Careers')->name('careers');
Route::inertia('/process', 'Process')->name('process');
Route::inertia('/privacy-policy', 'PrivacyPolicy')->name('privacy');
Route::inertia('/terms-and-conditions', 'TermsConditions')->name('terms');

Route::get('/sitemap.xml', function () {
    $urls = [
        '/', '/services', '/work', '/team', '/about', '/blog', '/contact', '/process', '/careers', '/privacy-policy', '/terms-and-conditions'
    ];

    try {
        $services = \App\Models\Service::all();
        $locations = \App\Models\Location::all();
        
        foreach ($services as $service) {
            $urls[] = '/services/' . $service->slug;
            foreach ($locations as $location) {
                $urls[] = '/services/' . $service->slug . '/in/' . $location->slug;
            }
        }
    } catch (\Exception $e) {
        // Fallback if db isn't migrated yet
    }
    
    $xml = '<?xml version="1.0" encoding="UTF-8"?>';
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    
    foreach ($urls as $url) {
        $xml .= '<url>';
        $xml .= '<loc>' . url($url) . '</loc>';
        $xml .= '<changefreq>weekly</changefreq>';
        $xml .= '<priority>' . ($url == '/' ? '1.0' : '0.8') . '</priority>';
        $xml .= '</url>';
    }
    
    $xml .= '</urlset>';
    
    return response($xml)->header('Content-Type', 'text/xml');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

// Shared Hosting Fallback for Vite Assets
Route::get('/build/assets/{file}', function ($file) {
    $path = public_path('build/assets/' . $file);
    if (file_exists($path)) {
        $extension = pathinfo($path, PATHINFO_EXTENSION);
        $mime = match($extension) {
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
            'Cache-Control' => 'public, max-age=31536000, immutable'
        ]);
    }
    abort(404);
})->where('file', '.*');
