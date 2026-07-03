<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Google Analytics (Delayed for PageSpeed) -->
        <script>
          setTimeout(function() {
            var script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YZVZQPPQ27';
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YZVZQPPQ27');
          }, 3500);
        </script>

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color --}}
        <style>
            html {
                background-color: #000000;
            }
        </style>

        {{-- Google Fonts: Space Grotesk + Inter --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

        {{-- Favicon: Google needs a crawlable URL, not base64 --}}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @php
            $seo = $page['props']['seo'] ?? null;
            $title = $seo['title'] ?? 'Zytrixon Tech | Top Web Development Agency in Patna';
            $description = $seo['description'] ?? 'Zytrixon Tech offers premium web & app development, and SEO services in Patna & across India. We deliver scalable, high-performance digital solutions.';
            $keywords = $seo['keywords'] ?? 'web development patna, software company in patna, app development bihar, zytrixon tech, best it company patna';
            $canonical = $seo['canonical'] ?? url()->current();
            $image = $seo['image'] ?? url('/favicon.svg');
            $schema = $seo['schema'] ?? [
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'Organization',
                    'name' => 'Zytrixon Tech',
                    'alternateName' => 'Zytrixon',
                    'url' => url('/'),
                    'logo' => url('/favicon.svg'),
                    'image' => url('/favicon.svg'),
                    'description' => $description,
                    'foundingDate' => '2024',
                    'address' => [
                        '@type' => 'PostalAddress',
                        'streetAddress' => 'Kankarbagh',
                        'addressLocality' => 'Patna',
                        'addressRegion' => 'Bihar',
                        'postalCode' => '800020',
                        'addressCountry' => 'IN'
                    ],
                    'contactPoint' => [
                        '@type' => 'ContactPoint',
                        'telephone' => '+91-7049711475',
                        'contactType' => 'customer service',
                        'areaServed' => ['IN', 'US', 'GB', 'AE'],
                        'availableLanguage' => ['English', 'Hindi']
                    ],
                    'sameAs' => [
                        'https://www.facebook.com/zytrixon',
                        'https://www.instagram.com/zytrixon',
                        'https://www.linkedin.com/company/zytrixon',
                        'https://twitter.com/zytrixon'
                    ],
                    'priceRange' => '$$',
                    'telephone' => '+91-7049711475'
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'WebSite',
                    'name' => 'Zytrixon Tech',
                    'url' => url('/'),
                    'potentialAction' => [
                        '@type' => 'SearchAction',
                        'target' => url('/services') . '?q={search_term_string}',
                        'query-input' => 'required name=search_term_string'
                    ]
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'LocalBusiness',
                    'name' => 'Zytrixon Tech',
                    'image' => url('/favicon.svg'),
                    'url' => url('/'),
                    'description' => $description,
                    'address' => [
                        '@type' => 'PostalAddress',
                        'streetAddress' => 'Kankarbagh',
                        'addressLocality' => 'Patna',
                        'addressRegion' => 'Bihar',
                        'postalCode' => '800020',
                        'addressCountry' => 'IN'
                    ],
                    'priceRange' => '$$',
                    'telephone' => '+91-7049711475',
                    'openingHoursSpecification' => [
                        '@type' => 'OpeningHoursSpecification',
                        'dayOfWeek' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        'opens' => '09:30',
                        'closes' => '19:00'
                    ],
                    'aggregateRating' => [
                        '@type' => 'AggregateRating',
                        'ratingValue' => '4.9',
                        'reviewCount' => '50',
                        'bestRating' => '5'
                    ]
                ]
            ];
        @endphp

        <title inertia>{{ $title }}</title>
        <meta inertia name="description" content="{{ $description }}">
        <meta inertia name="keywords" content="{{ $keywords }}">
        <link inertia rel="canonical" href="{{ $canonical }}">

        <!-- Open Graph / Facebook -->
        <meta inertia property="og:type" content="website">
        <meta inertia property="og:url" content="{{ $canonical }}">
        <meta inertia property="og:title" content="{{ $title }}">
        <meta inertia property="og:description" content="{{ $description }}">
        <meta inertia property="og:image" content="{{ $image }}">
        <meta inertia property="og:updated_time" content="{{ now()->toIso8601String() }}">

        <!-- Twitter -->
        <meta inertia property="twitter:card" content="summary_large_image">
        <meta inertia property="twitter:url" content="{{ $canonical }}">
        <meta inertia property="twitter:title" content="{{ $title }}">
        <meta inertia property="twitter:description" content="{{ $description }}">
        <meta inertia property="twitter:image" content="{{ $image }}">

        @if($schema)
        <script type="application/ld+json" inertia>
            {!! json_encode(isset($schema[0]) ? $schema : [$schema], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}
        </script>
        @endif

        <x-inertia::head />
    </head>
    <body class="font-sans antialiased">
        <!-- Instant LCP Skeleton -->
        <div id="ssr-fallback" style="position: absolute; top: 0; left: 0; width: 100%; min-height: 100vh; background: #000000; padding: 120px 20px; z-index: 9999; box-sizing: border-box; display: flex; align-items: center;">
            <div style="max-width: 1200px; margin: 0 auto; width: 100%;">
                <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(36px, 10vw, 78px); font-weight: 800; color: #FFFFFF; line-height: 1.05; letter-spacing: -0.03em; margin: 0;">
                    We Engineer<br/>Digital Dominance
                </h1>
            </div>
        </div>
        <x-inertia::app />
    </body>
</html>
