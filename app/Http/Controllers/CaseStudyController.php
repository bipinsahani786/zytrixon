<?php

namespace App\Http\Controllers;

use App\Models\CaseStudy;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CaseStudyController extends Controller
{
    public function index(): Response
    {
        $caseStudies = CaseStudy::with('service')->latest()->get();

        return Inertia::render('CaseStudiesIndex', [
            'caseStudies' => $caseStudies,
            'seo' => [
                'title' => 'Case Studies & Client Success Stories | Zytrixon Tech',
                'description' => 'Explore proven case studies in web development, mobile apps, IoT, and digital transformation delivered by Zytrixon Tech.',
            ],
        ]);
    }

    public function show(string $slug): Response
    {
        $caseStudy = CaseStudy::with('service')->where('slug', $slug)->firstOrFail();

        $relatedCaseStudies = CaseStudy::with('service')
            ->where('id', '!=', $caseStudy->id)
            ->when($caseStudy->service_id, function ($query) use ($caseStudy) {
                $query->where('service_id', $caseStudy->service_id);
            })
            ->take(3)
            ->get();

        // If not enough related in same service, fill from latest
        if ($relatedCaseStudies->count() < 3) {
            $additional = CaseStudy::with('service')
                ->where('id', '!=', $caseStudy->id)
                ->whereNotIn('id', $relatedCaseStudies->pluck('id'))
                ->take(3 - $relatedCaseStudies->count())
                ->get();
            $relatedCaseStudies = $relatedCaseStudies->merge($additional);
        }

        $metaDesc = Str::limit(strip_tags($caseStudy->challenge.' '.$caseStudy->solution), 155);

        return Inertia::render('CaseStudyDetails', [
            'caseStudy' => $caseStudy,
            'relatedCaseStudies' => $relatedCaseStudies,
            'seo' => [
                'title' => $caseStudy->title.' | Case Study - Zytrixon Tech',
                'description' => $metaDesc ?: 'Case study for '.$caseStudy->client_name.' delivered by Zytrixon Tech.',
            ],
        ]);
    }
}
