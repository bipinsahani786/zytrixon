<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

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

        <link rel="icon" href="/favicon.ico?v=2" sizes="any">
        <link rel="icon" href="data:image/svg+xml;base64,{{ base64_encode(file_get_contents(public_path('favicon.svg'))) }}" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2">

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @php
            $seo = $page['props']['seo'] ?? null;
            $title = $seo['title'] ?? 'Zytrixon Tech | Top Web Development Agency in Patna';
            $description = $seo['description'] ?? 'Zytrixon Tech provides premium web development, app development, and SEO services in Patna, Bihar and across India. We deliver scalable and high-performance digital solutions.';
            $keywords = $seo['keywords'] ?? 'web development patna, software company in patna, app development bihar, zytrixon tech, best it company patna';
            $canonical = $seo['canonical'] ?? url()->current();
            $image = $seo['image'] ?? url('/favicon.svg');
            $schema = $seo['schema'] ?? null;
        @endphp

        <title>{{ $title }}</title>
        <meta name="description" content="{{ $description }}">
        <meta name="keywords" content="{{ $keywords }}">
        <link rel="canonical" href="{{ $canonical }}">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ $canonical }}">
        <meta property="og:title" content="{{ $title }}">
        <meta property="og:description" content="{{ $description }}">
        <meta property="og:image" content="{{ $image }}">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ $canonical }}">
        <meta property="twitter:title" content="{{ $title }}">
        <meta property="twitter:description" content="{{ $description }}">
        <meta property="twitter:image" content="{{ $image }}">

        @if($schema)
        <script type="application/ld+json">
            {!! json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}
        </script>
        @endif

        <x-inertia::head />
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
