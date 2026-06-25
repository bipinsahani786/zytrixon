<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SeoController;

Route::inertia('/', 'welcome')->name('home');

// Programmatic SEO Routes
Route::get('/services', [SeoController::class, 'index'])->name('services.index');
Route::get('/services/{service_slug}', [SeoController::class, 'showServiceLocation'])->name('service.show');
Route::get('/services/{service_slug}/in/{location_slug}', [SeoController::class, 'showServiceLocation'])->name('service.location.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
