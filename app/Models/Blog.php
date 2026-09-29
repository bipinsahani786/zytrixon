<?php

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
    public const STATUS_PUBLISHED = 'published';

    public const STATUS_DRAFT = 'draft';

    public const CATEGORIES = [
        'Engineering',
        'AI & Automation',
        'Design UI/UX',
        'Cloud & DevOps',
        'Business Strategy',
        'Case Studies',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'category',
        'featured_image',
        'author_name',
        'read_time',
        'status',
        'is_featured',
        'published_at',
        'views_count',
        'meta_title',
        'meta_description',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_featured' => 'boolean',
        'published_at' => 'datetime',
        'views_count' => 'integer',
    ];

    /**
     * Boot model events for automatic slug generation and read time estimation.
     */
    protected static function booted(): void
    {
        static::saving(function (Blog $blog) {
            // Auto generate slug if empty
            if (empty($blog->slug) && ! empty($blog->title)) {
                $baseSlug = Str::slug($blog->title);
                $slug = $baseSlug;
                $counter = 1;

                while (static::where('slug', $slug)->where('id', '!=', $blog->id ?? 0)->exists()) {
                    $slug = $baseSlug.'-'.$counter;
                    $counter++;
                }

                $blog->slug = $slug;
            }

            // Auto calculate read time if empty
            if (empty($blog->read_time) && ! empty($blog->content)) {
                $plainText = strip_tags($blog->content);
                $words = str_word_count($plainText);
                $minutes = max(1, (int) ceil($words / 200));
                $blog->read_time = "{$minutes} min read";
            }

            // Auto populate excerpt if empty
            if (empty($blog->excerpt) && ! empty($blog->content)) {
                $plainText = strip_tags($blog->content);
                $blog->excerpt = Str::limit($plainText, 160);
            }

            // Auto set published_at when published
            if ($blog->status === self::STATUS_PUBLISHED && empty($blog->published_at)) {
                $blog->published_at = CarbonImmutable::now();
            }
        });
    }

    /**
     * Scope for published articles.
     *
     * @param  Builder<Blog>  $query
     * @return Builder<Blog>
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PUBLISHED);
    }

    /**
     * Scope for featured articles.
     *
     * @param  Builder<Blog>  $query
     * @return Builder<Blog>
     */
    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope for search filters.
     *
     * @param  Builder<Blog>  $query
     * @return Builder<Blog>
     */
    public function scopeSearch(Builder $query, ?string $term): Builder
    {
        if (empty($term)) {
            return $query;
        }

        return $query->where(function (Builder $q) use ($term) {
            $q->where('title', 'like', "%{$term}%")
                ->orWhere('excerpt', 'like', "%{$term}%")
                ->orWhere('author_name', 'like', "%{$term}%")
                ->orWhere('category', 'like', "%{$term}%");
        });
    }
}
