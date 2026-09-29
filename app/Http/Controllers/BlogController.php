<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Display a listing of published blogs on the public site.
     */
    public function index(Request $request): Response
    {
        $category = (string) $request->query('category', 'all');

        $query = Blog::query()->published();

        if ($category !== 'all') {
            $query->where('category', $category);
        }

        $featured = (clone $query)->featured()->first();

        $blogs = $query
            ->orderByDesc('published_at')
            ->orderByDesc('created_at')
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('Blog', [
            'blogs' => $blogs,
            'featured' => $featured,
            'selectedCategory' => $category,
            'categories' => Blog::CATEGORIES,
            'seo' => [
                'title' => 'Engineering Insights & Tech Blog | Zytrixon Tech',
                'description' => 'Read our latest articles on cloud architecture, AI engineering, design systems, and digital product transformation.',
            ],
        ]);
    }

    /**
     * Display a single blog article by slug.
     */
    public function show(string $slug): Response
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();

        // Increment views count silently
        $blog->increment('views_count');

        $relatedBlogs = Blog::query()
            ->published()
            ->where('id', '!=', $blog->id)
            ->where('category', $blog->category)
            ->limit(3)
            ->get();

        return Inertia::render('BlogDetails', [
            'blog' => $blog,
            'relatedBlogs' => $relatedBlogs,
            'seo' => [
                'title' => ($blog->meta_title ?: $blog->title).' | Zytrixon Tech Blog',
                'description' => $blog->meta_description ?: $blog->excerpt,
            ],
        ]);
    }
}
