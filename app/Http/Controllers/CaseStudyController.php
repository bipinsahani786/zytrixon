<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CaseStudy;
use Inertia\Inertia;

class CaseStudyController extends Controller
{
    public function index()
    {
        $caseStudies = CaseStudy::latest()->get();
        return Inertia::render('CaseStudiesIndex', [
            'caseStudies' => $caseStudies
        ]);
    }

    public function show($slug)
    {
        $caseStudy = CaseStudy::where('slug', $slug)->firstOrFail();
        return Inertia::render('CaseStudyDetails', [
            'caseStudy' => $caseStudy
        ]);
    }
}
