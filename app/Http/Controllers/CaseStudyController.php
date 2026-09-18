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

        return Inertia::render('ProjectDetails', [
            'slug' => $slug,
            'caseStudy' => $caseStudy,
            'seo' => [
                'title' => ($caseStudy->title ?? ucwords(str_replace('-', ' ', $slug))).' | Zytrixon Tech',
                'description' => $caseStudy->solution ?? 'Explore our enterprise software case study and live demo delivered by Zytrixon Tech.',
            ],
        ]);
    }
}
