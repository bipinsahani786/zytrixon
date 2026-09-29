<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AdminBlogController extends Controller
{
    /**
     * Display a listing of blog posts with server-side pagination, search & filters.
     */
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));
        $status = (string) $request->query('status', 'all');
        $category = (string) $request->query('category', 'all');
        $perPage = (int) $request->query('per_page', 10);

        if (! in_array($perPage, [5, 10, 25, 50, 100], true)) {
            $perPage = 10;
        }

        $query = Blog::query();

        // 1. Search filter
        if ($search !== '') {
            $query->search($search);
        }

        // 2. Status filter
        if ($status !== 'all' && in_array($status, [Blog::STATUS_PUBLISHED, Blog::STATUS_DRAFT], true)) {
            $query->where('status', $status);
        }

        // 3. Category filter
        if ($category !== 'all') {
            $query->where('category', $category);
        }

        // Order by featured, then publication/creation date
        $blogs = $query
            ->orderByDesc('is_featured')
            ->orderByDesc('published_at')
            ->orderByDesc('created_at')
            ->paginate($perPage)
            ->withQueryString();

        // High-level KPI metrics
        $kpis = [
            'total' => Blog::count(),
            'published' => Blog::where('status', Blog::STATUS_PUBLISHED)->count(),
            'draft' => Blog::where('status', Blog::STATUS_DRAFT)->count(),
            'featured' => Blog::where('is_featured', true)->count(),
        ];

        return Inertia::render('Admin/Blogs', [
            'blogs' => $blogs,
            'filters' => [
                'search' => $search,
                'status' => $status,
                'category' => $category,
                'per_page' => $perPage,
            ],
            'kpis' => $kpis,
            'categories' => Blog::CATEGORIES,
        ]);
    }

    /**
     * Store a newly created blog post in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blogs,slug',
            'category' => 'required|string|max:100',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:1000',
            'author_name' => 'nullable|string|max:255',
            'read_time' => 'nullable|string|max:50',
            'status' => 'required|in:published,draft',
            'is_featured' => 'boolean',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'featured_image' => 'nullable|string|max:2000',
            'image_file' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg|max:5120',
        ]);

        // Handle direct image file upload if provided
        if ($request->hasFile('image_file')) {
            $file = $request->file('image_file');
            $uploadPath = public_path('uploads/blogs');

            if (! File::isDirectory($uploadPath)) {
                File::makeDirectory($uploadPath, 0755, true, true);
            }

            $filename = time().'_'.Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)).'.'.$file->getClientOriginalExtension();
            $file->move($uploadPath, $filename);

            $validated['featured_image'] = '/uploads/blogs/'.$filename;
        }

        unset($validated['image_file']);

        // Default author if not provided
        if (empty($validated['author_name'])) {
            $validated['author_name'] = auth()->user()->name ?? 'Zytrixon Team';
        }

        if ($validated['status'] === Blog::STATUS_PUBLISHED) {
            $validated['published_at'] = Carbon::now();
        }

        $blog = Blog::create($validated);

        return back()->with('success', "Blog article '{$blog->title}' created successfully.");
    }

    /**
     * Update the specified blog post in storage.
     */
    public function update(Request $request, Blog $blog): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blogs,slug,'.$blog->id,
            'category' => 'required|string|max:100',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:1000',
            'author_name' => 'nullable|string|max:255',
            'read_time' => 'nullable|string|max:50',
            'status' => 'required|in:published,draft',
            'is_featured' => 'boolean',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'featured_image' => 'nullable|string|max:2000',
            'image_file' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg|max:5120',
        ]);

        // Handle file replacement if new image uploaded
        if ($request->hasFile('image_file')) {
            $file = $request->file('image_file');
            $uploadPath = public_path('uploads/blogs');

            if (! File::isDirectory($uploadPath)) {
                File::makeDirectory($uploadPath, 0755, true, true);
            }

            $filename = time().'_'.Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)).'.'.$file->getClientOriginalExtension();
            $file->move($uploadPath, $filename);

            $validated['featured_image'] = '/uploads/blogs/'.$filename;
        }

        unset($validated['image_file']);

        // Auto set published_at if transitioning to published
        if ($validated['status'] === Blog::STATUS_PUBLISHED && empty($blog->published_at)) {
            $validated['published_at'] = Carbon::now();
        }

        $blog->update($validated);

        return back()->with('success', "Blog article '{$blog->title}' updated successfully.");
    }

    /**
     * Remove the specified blog post from storage.
     */
    public function destroy(Blog $blog): RedirectResponse
    {
        $title = $blog->title;

        // If local uploaded image, clean it up
        if ($blog->featured_image && Str::startsWith($blog->featured_image, '/uploads/blogs/')) {
            $localFile = public_path($blog->featured_image);
            if (File::exists($localFile)) {
                File::delete($localFile);
            }
        }

        $blog->delete();

        return back()->with('success', "Blog article '{$title}' deleted successfully.");
    }

    /**
     * Bulk delete multiple blog articles.
     */
    public function bulkDestroy(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'ids' => 'required|array|min:1',
            'ids.*' => 'integer|exists:blogs,id',
        ]);

        $blogs = Blog::whereIn('id', $validated['ids'])->get();

        foreach ($blogs as $blog) {
            if ($blog->featured_image && Str::startsWith($blog->featured_image, '/uploads/blogs/')) {
                $localFile = public_path($blog->featured_image);
                if (File::exists($localFile)) {
                    File::delete($localFile);
                }
            }
            $blog->delete();
        }

        $count = count($validated['ids']);

        return back()->with('success', "{$count} blog articles deleted successfully.");
    }

    /**
     * Toggle featured status of a blog.
     */
    public function toggleFeatured(Blog $blog): RedirectResponse
    {
        $blog->update(['is_featured' => ! $blog->is_featured]);

        $statusMsg = $blog->is_featured ? 'marked as Featured' : 'removed from Featured';

        return back()->with('success', "Blog article '{$blog->title}' {$statusMsg}.");
    }

    /**
     * Upload an inline image from rich text editor.
     */
    public function uploadImage(Request $request): JsonResponse
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,webp,svg,gif|max:5120',
        ]);

        $file = $request->file('image');
        $uploadPath = public_path('uploads/blog-content');

        if (! File::isDirectory($uploadPath)) {
            File::makeDirectory($uploadPath, 0755, true, true);
        }

        $filename = time().'_'.Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)).'.'.$file->getClientOriginalExtension();
        $file->move($uploadPath, $filename);

        $url = asset('uploads/blog-content/'.$filename);

        return response()->json([
            'url' => $url,
            'uploaded' => true,
        ]);
    }
}
