<?php

namespace App\Http\Controllers;

use App\Models\CaseStudy;
use App\Models\Location;
use App\Models\SeoPage;
use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class SeoController extends Controller
{
    public function index(): Response
    {
        $services = Service::all();

        return Inertia::render('ServicesIndex', [
            'services' => $services,
        ]);
    }

    public function locationsIndex(): Response
    {
        $locations = Location::orderBy('name')->get();

        return Inertia::render('LocationsIndex', [
            'locations' => $locations,
        ]);
    }

    public function showLocation(string $location_slug): Response
    {
        $location = Location::where('slug', $location_slug)->firstOrFail();
        $services = Service::all();

        return Inertia::render('LocationDetails', [
            'location' => $location,
            'services' => $services,
        ]);
    }

    public function showServiceLocation(string $service_slug, ?string $location_slug = null): Response
    {
        $service = Service::where('slug', $service_slug)->firstOrFail();

        $location = null;
        if ($location_slug) {
            $location = Location::where('slug', $location_slug)->firstOrFail();
        }

        // Fetch optional SEO overrides
        $seoOverride = null;
        if ($location) {
            $seoOverride = SeoPage::where('service_id', $service->id)
                ->where('location_id', $location->id)
                ->first();
        }

        // Construct dynamic H1 and Meta Data
        $h1 = $seoOverride ? $seoOverride->h1 : ($service->title.($location ? ' in '.$location->name : ''));
        $metaTitle = $seoOverride ? $seoOverride->meta_title : ('Best '.$service->title.' Company '.($location ? 'in '.$location->name : '').' | Zytrixon Tech');
        $metaDescription = $seoOverride ? $seoOverride->meta_description : ('Looking for top-tier '.$service->title.' services '.($location ? 'in '.$location->name : '').'? Zytrixon Tech delivers scalable, enterprise-grade solutions.');

        $caseStudies = CaseStudy::latest()->take(3)->get();

        return Inertia::render('ServiceSeoPage', [
            'service' => $service,
            'location' => $location,
            'seo' => [
                'h1' => $h1,
                'title' => $metaTitle,
                'description' => $metaDescription,
            ],
            'content_overrides' => $seoOverride ? $seoOverride->content_json : null,
            'caseStudies' => $caseStudies,
        ]);
    }
}
