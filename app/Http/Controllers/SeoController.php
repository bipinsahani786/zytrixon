<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Location;
use App\Models\SeoPage;
use App\Models\CaseStudy;
use Inertia\Inertia;
use Illuminate\Http\Request;

class SeoController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return Inertia::render('ServicesIndex', [
            'services' => $services
        ]);
    }

    public function locationsIndex()
    {
        $locations = Location::orderBy('name')->get();
        return Inertia::render('LocationsIndex', [
            'locations' => $locations
        ]);
    }

    public function showLocation($location_slug)
    {
        $location = Location::where('slug', $location_slug)->firstOrFail();
        $services = Service::all();
        
        return Inertia::render('LocationDetails', [
            'location' => $location,
            'services' => $services
        ]);
    }

    public function showServiceLocation($service_slug, $location_slug = null)
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
        $h1 = $seoOverride->h1 ?? ($service->title . ($location ? ' in ' . $location->name : ''));
        $metaTitle = $seoOverride->meta_title ?? ("Best " . $service->title . " Company " . ($location ? 'in ' . $location->name : '') . " | Zytrixon Tech");
        $metaDescription = $seoOverride->meta_description ?? ("Looking for top-tier " . $service->title . " services " . ($location ? 'in ' . $location->name : '') . "? Zytrixon Tech delivers scalable, enterprise-grade solutions.");

        $caseStudies = CaseStudy::latest()->take(3)->get();

        return Inertia::render('ServiceSeoPage', [
            'service' => $service,
            'location' => $location,
            'seo' => [
                'h1' => $h1,
                'title' => $metaTitle,
                'description' => $metaDescription,
            ],
            'content_overrides' => $seoOverride->content_json ?? null,
            'caseStudies' => $caseStudies,
        ]);
    }
}
