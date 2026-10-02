<?php

namespace App\Http\Controllers;

use App\Models\CaseStudy;
use App\Models\Location;
use App\Models\SeoPage;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
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

    public function showServiceLocation(string $service_slug, ?string $location_slug = null): Response|RedirectResponse
    {
        // 301 permanent redirect legacy 'digital-marketing' to canonical 'seo-digital-marketing'
        if ($service_slug === 'digital-marketing') {
            return $location_slug
                ? redirect()->route('service.location.show', ['service_slug' => 'seo-digital-marketing', 'location_slug' => $location_slug], 301)
                : redirect()->route('service.show', ['service_slug' => 'seo-digital-marketing'], 301);
        }

        $slugCandidates = match ($service_slug) {
            'seo-digital-marketing' => ['seo-digital-marketing', 'digital-marketing'],
            default => [$service_slug],
        };

        $service = Service::whereIn('slug', $slugCandidates)->firstOrFail();

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
        } else {
            $seoOverride = SeoPage::where('service_id', $service->id)
                ->where('status', 'published')
                ->first() ?? SeoPage::where('service_id', $service->id)->first();
        }

        // Construct dynamic H1 and Meta Data
        $h1 = ($seoOverride && !empty($seoOverride->h1) && $location)
            ? $seoOverride->h1
            : ($service->title . ($location ? ' in ' . $location->name : ''));

        $metaTitle = ($seoOverride && !empty($seoOverride->meta_title) && $location)
            ? $seoOverride->meta_title
            : ('Best ' . $service->title . ' Company ' . ($location ? 'in ' . $location->name : '') . ' | Zytrixon Tech');

        $metaDescription = ($seoOverride && !empty($seoOverride->meta_description))
            ? $seoOverride->meta_description
            : ('Looking for top-tier ' . $service->title . ' services ' . ($location ? 'in ' . $location->name : '') . '? Zytrixon Tech delivers scalable, enterprise-grade solutions.');

        $heroDescription = ($seoOverride && !empty($seoOverride->hero_description))
            ? $seoOverride->hero_description
            : ($service->description ?? 'We engineer high-performance digital products and scalable software architectures.');

        $caseStudies = CaseStudy::latest()->take(3)->get();

        return Inertia::render('ServiceSeoPage', [
            'service'          => $service,
            'location'         => $location,
            'seo'              => [
                'h1'          => $h1,
                'title'       => $metaTitle,
                'description' => $metaDescription,
            ],
            'hero_description' => $heroDescription,
            'sections'         => $seoOverride?->sections ?? [],
            'template'         => $seoOverride?->template ?? 'grid',
            'seoPage'          => $seoOverride,
            'caseStudies'      => $caseStudies,
        ]);
    }
}
