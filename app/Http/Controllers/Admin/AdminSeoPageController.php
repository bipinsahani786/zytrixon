<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Location;
use App\Models\SeoPage;
use App\Models\Service;
use App\Services\GeminiAIService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AdminSeoPageController extends Controller
{
    public function __construct(private GeminiAIService $gemini) {}

    /**
     * List all SEO pages with filters.
     */
    public function index(Request $request): Response
    {
        $search     = trim((string) $request->query('search', ''));
        $service    = (string) $request->query('service', 'all');
        $status     = (string) $request->query('status', 'all');
        $template   = (string) $request->query('template', 'all');
        $perPage    = (int) $request->query('per_page', 15);

        $query = SeoPage::with(['service', 'location'])
            ->select('seo_pages.*');

        if ($search !== '') {
            $query->whereHas('location', fn ($q) => $q->where('name', 'like', "%{$search}%"))
                  ->orWhereHas('service', fn ($q) => $q->where('title', 'like', "%{$search}%"))
                  ->orWhere('h1', 'like', "%{$search}%");
        }

        if ($service !== 'all') {
            $query->where('service_id', $service);
        }

        if ($status !== 'all') {
            $query->where('status', $status);
        }

        if ($template !== 'all') {
            $query->where('template', $template);
        }

        $pages = $query->orderByDesc('updated_at')->paginate($perPage)->withQueryString();

        // KPIs
        $kpis = [
            'total'     => SeoPage::count(),
            'published' => SeoPage::where('status', 'published')->count(),
            'draft'     => SeoPage::where('status', 'draft')->count(),
            'avg_score' => (int) round(SeoPage::avg('seo_score') ?? 0),
        ];

        return Inertia::render('Admin/SeoPages', [
            'pages'     => $pages,
            'kpis'      => $kpis,
            'services'  => Service::select('id', 'title', 'slug')->orderBy('title')->get(),
            'locations' => Location::select('id', 'name', 'slug', 'state', 'type')->where('is_active', true)->orderBy('name')->get(),
            'filters'   => compact('search', 'service', 'status', 'template', 'perPage'),
        ]);
    }

    /**
     * Store a new SEO page.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'service_id'       => 'required|exists:services,id',
            'location_id'      => 'required|exists:locations,id',
            'template'         => 'required|in:grid,timeline,card,split',
            'status'           => 'required|in:draft,published',
            'h1'               => 'nullable|string|max:255',
            'meta_title'       => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'hero_description' => 'nullable|string',
            'focus_keyword'    => 'nullable|string|max:255',
            'sections'         => 'nullable|array',
            'content_json'     => 'nullable|array',
            'seo_score'        => 'nullable|integer|min:0|max:100',
        ]);

        if ($validated['status'] === 'published') {
            $validated['published_at'] = now();
        }

        SeoPage::updateOrCreate(
            [
                'service_id'  => $validated['service_id'],
                'location_id' => $validated['location_id'],
            ],
            $validated
        );

        return back()->with('flash', ['type' => 'success', 'message' => 'SEO Page saved successfully!']);
    }

    /**
     * Update an existing SEO page.
     */
    public function update(Request $request, SeoPage $seoPage): RedirectResponse
    {
        $validated = $request->validate([
            'template'         => 'required|in:grid,timeline,card,split',
            'status'           => 'required|in:draft,published',
            'h1'               => 'nullable|string|max:255',
            'meta_title'       => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'hero_description' => 'nullable|string',
            'focus_keyword'    => 'nullable|string|max:255',
            'sections'         => 'nullable|array',
            'content_json'     => 'nullable|array',
            'seo_score'        => 'nullable|integer|min:0|max:100',
        ]);

        if ($validated['status'] === 'published' && $seoPage->status !== 'published') {
            $validated['published_at'] = now();
        }

        $seoPage->update($validated);

        return back()->with('flash', ['type' => 'success', 'message' => 'SEO Page updated successfully!']);
    }

    /**
     * Delete an SEO page.
     */
    public function destroy(SeoPage $seoPage): RedirectResponse
    {
        $seoPage->delete();
        return back()->with('flash', ['type' => 'success', 'message' => 'SEO Page deleted.']);
    }

    /**
     * Bulk delete.
     */
    public function bulkDestroy(Request $request): RedirectResponse
    {
        $ids = $request->validate(['ids' => 'required|array', 'ids.*' => 'integer'])['ids'];
        SeoPage::whereIn('id', $ids)->delete();
        return back()->with('flash', ['type' => 'success', 'message' => count($ids) . ' pages deleted.']);
    }

    /**
     * AI Generate content for a location page.
     */
    public function aiGenerate(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'service_id'    => 'required|exists:services,id',
            'location_id'   => 'required|exists:locations,id',
            'template'      => 'required|in:grid,timeline,card,split',
            'focus_keyword' => 'nullable|string|max:255',
        ]);

        $service  = Service::findOrFail($validated['service_id']);
        $location = Location::findOrFail($validated['location_id']);

        $result = $this->gemini->generateSeoContent(
            serviceName:        $service->title,
            serviceDescription: (string) ($service->description ?? $service->title),
            locationName:       $location->name,
            locationState:      (string) ($location->state ?? 'Bihar'),
            template:           $validated['template'],
            focusKeyword:       $validated['focus_keyword'] ?? ''
        );

        if (isset($result['error'])) {
            return response()->json([
                'success' => false,
                'error'   => $result['error'],
                'message' => $result['error'],
            ], 422);
        }

        return response()->json(['success' => true, 'data' => $result]);
    }

    /**
     * Humanize generated content.
     */
    public function humanize(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'content' => 'required|array',
        ]);

        $result = $this->gemini->humanizeContent($validated['content']);

        if (isset($result['error'])) {
            return response()->json([
                'success' => false,
                'error'   => $result['error'],
                'message' => $result['error'],
            ], 422);
        }

        return response()->json(['success' => true, 'data' => $result]);
    }

    /**
     * Bulk Generate: create SEO pages for multiple service+location combos.
     */
    public function bulkGenerate(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'service_id'   => 'required|exists:services,id',
            'location_ids' => 'required|array|min:1|max:20',
            'location_ids.*' => 'exists:locations,id',
            'template'     => 'required|in:grid,timeline,card,split',
        ]);

        $service   = Service::findOrFail($validated['service_id']);
        $locations = Location::whereIn('id', $validated['location_ids'])->get();
        $created   = 0;
        $errors    = [];

        foreach ($locations as $location) {
            try {
                $result = $this->gemini->generateSeoContent(
                    serviceName:        $service->title,
                    serviceDescription: (string) ($service->description ?? $service->title),
                    locationName:       $location->name,
                    locationState:      (string) ($location->state ?? 'Bihar'),
                    template:           $validated['template'],
                );

                if (isset($result['error'])) {
                    $errors[] = "Failed for {$location->name}: " . $result['error'];
                    continue;
                }

                SeoPage::updateOrCreate(
                    ['service_id' => $service->id, 'location_id' => $location->id],
                    [
                        'h1'               => $result['h1'] ?? null,
                        'meta_title'       => $result['meta_title'] ?? null,
                        'meta_description' => $result['meta_description'] ?? null,
                        'hero_description' => $result['hero_description'] ?? null,
                        'sections'         => $result['sections'] ?? null,
                        'template'         => $validated['template'],
                        'status'           => 'published',
                        'published_at'     => now(),
                        'seo_score'        => $this->calculateSeoScore($result, $location->name),
                    ]
                );

                $created++;

                // Small delay to avoid rate limiting
                if ($created < count($locations)) {
                    usleep(500000); // 0.5 second
                }

            } catch (\Exception $e) {
                $errors[] = "Error for {$location->name}: " . $e->getMessage();
            }
        }

        return response()->json([
            'success' => true,
            'created' => $created,
            'errors'  => $errors,
            'message' => "Generated {$created} pages" . (count($errors) ? ' with ' . count($errors) . ' errors' : ''),
        ]);
    }

    /**
     * Calculate SEO score from content data.
     */
    private function calculateSeoScore(array $content, string $locationName): int
    {
        $score = 0;

        $h1    = $content['h1'] ?? '';
        $title = $content['meta_title'] ?? '';
        $desc  = $content['meta_description'] ?? '';
        $hero  = $content['hero_description'] ?? '';

        // H1 present → 15pts
        if (!empty($h1)) $score += 15;

        // Meta title 50-60 chars → 15pts
        $titleLen = strlen($title);
        if ($titleLen >= 50 && $titleLen <= 60) $score += 15;
        elseif ($titleLen >= 40 && $titleLen <= 70) $score += 8;

        // Meta description 140-160 chars → 20pts
        $descLen = strlen($desc);
        if ($descLen >= 140 && $descLen <= 160) $score += 20;
        elseif ($descLen >= 120 && $descLen <= 180) $score += 10;

        // Location in H1 → 15pts
        if (str_contains(strtolower($h1), strtolower($locationName))) $score += 15;

        // Hero description > 50 words → 10pts
        if (str_word_count($hero) > 50) $score += 10;

        // Sections present → 15pts
        if (!empty($content['sections']) && count($content['sections']) >= 2) $score += 15;

        // Location in meta description → 10pts
        if (str_contains(strtolower($desc), strtolower($locationName))) $score += 10;

        return min(100, $score);
    }
}
