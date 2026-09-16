<?php

use App\Models\CaseStudy;
use App\Models\Location;
use App\Models\Service;
use Database\Seeders\SeoDataSeeder;

test('public pages return a successful 200 response', function () {
    $routes = [
        '/',
        '/about',
        '/portfolio',
        '/contact',
        '/team',
        '/blog',
        '/blog/the-future-of-enterprise-architecture',
        '/careers',
        '/process',
        '/privacy-policy',
        '/terms-and-conditions',
        '/case-studies',
        '/services',
        '/locations',
        '/sitemap.xml',
    ];

    foreach ($routes as $route) {
        $response = $this->get($route);
        $response->assertOk();
    }
});

test('programmatic seo services and locations return 200 response', function () {
    $this->seed(SeoDataSeeder::class);

    // Test core service
    $this->get('/services/web-development')->assertOk();

    // Test service in Samastipur
    $this->get('/services/web-development/in/samastipur')->assertOk();

    // Test location details
    $this->get('/locations/samastipur')->assertOk();

    // Test state-level location in footer
    $this->get('/services/custom-software/in/bihar')->assertOk();

    // Test digital marketing alias and direct route
    $this->get('/services/seo-digital-marketing')->assertOk();
    $this->get('/services/digital-marketing')->assertOk();
});

test('case study detail page returns 200 response', function () {
    $caseStudy = CaseStudy::firstOrCreate(
        ['slug' => 'ecommerce-platform-scaling'],
        [
            'title' => 'E-Commerce Platform Scaling to 10M+ Monthly Users',
            'client_name' => 'FashionNova India',
            'industry' => 'Retail & E-Commerce',
            'challenge' => 'Handling 10M users during flash sales.',
            'solution' => 'Laravel microservices with Redis caching.',
            'results' => ['99.99% Uptime', '3x Faster Checkout'],
        ]
    );

    $this->get('/case-studies/'.$caseStudy->slug)->assertOk();
});
