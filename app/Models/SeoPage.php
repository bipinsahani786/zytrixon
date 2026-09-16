<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeoPage extends Model
{
    protected $fillable = [
        'service_id',
        'location_id',
        'h1',
        'meta_title',
        'meta_description',
        'content_json',
    ];

    protected $casts = [
        'content_json' => 'array',
    ];
}
