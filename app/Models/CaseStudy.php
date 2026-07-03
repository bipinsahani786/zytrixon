<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseStudy extends Model
{
    /** @use HasFactory<\Database\Factories\CaseStudyFactory> */
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'client_name', 'industry', 'challenge', 
        'solution', 'results', 'image', 'service_id'
    ];

    protected $casts = [
        'results' => 'array',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
