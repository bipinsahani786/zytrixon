<?php

namespace App\Http\Controllers;

use App\Models\CaseStudy;
use Inertia\Inertia;
use Inertia\Response;

class CaseStudyController extends Controller
{
    public function index(): Response
    {
        $caseStudies = CaseStudy::latest()->get();

        return Inertia::render('CaseStudiesIndex', [
            'caseStudies' => $caseStudies,
        ]);
    }

    public function show(string $slug): Response
    {
        $caseStudy = CaseStudy::where('slug', $slug)->firstOrFail();

        return Inertia::render('CaseStudyDetails', [
            'caseStudy' => $caseStudy,
        ]);
    }
}
