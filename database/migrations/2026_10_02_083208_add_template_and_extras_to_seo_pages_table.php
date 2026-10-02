<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('seo_pages', function (Blueprint $table) {
            $table->enum('template', ['grid', 'timeline', 'card', 'split'])->default('grid')->after('content_json');
            $table->enum('status', ['draft', 'published'])->default('draft')->after('template');
            $table->unsignedTinyInteger('seo_score')->default(0)->after('status');
            $table->text('hero_description')->nullable()->after('seo_score');
            $table->json('sections')->nullable()->after('hero_description'); // flexible content blocks
            $table->string('focus_keyword')->nullable()->after('sections');
            $table->timestamp('published_at')->nullable()->after('focus_keyword');
        });
    }

    public function down(): void
    {
        Schema::table('seo_pages', function (Blueprint $table) {
            $table->dropColumn(['template', 'status', 'seo_score', 'hero_description', 'sections', 'focus_keyword', 'published_at']);
        });
    }
};
