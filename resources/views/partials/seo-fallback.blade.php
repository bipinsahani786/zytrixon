@php
    $component = $page['component'] ?? '';
    $props = $page['props'] ?? [];
    $seo = $props['seo'] ?? [];
    $service = $props['service'] ?? null;
    $location = $props['location'] ?? null;
    $heroDescription = $props['hero_description'] ?? ($service['description'] ?? '');
    $sections = $props['sections'] ?? [];
    $locName = $location['name'] ?? 'Patna';
    $locState = $location['state'] ?? 'Bihar';
    $serviceTitle = $service['title'] ?? 'Software Development';
    $h1 = $seo['h1'] ?? ($service ? "{$serviceTitle} in {$locName}" : 'Zytrixon Tech | Software Development Company in Patna, Bihar');
    $h1Desc = $seo['description'] ?? 'Zytrixon Tech is a top-rated software company delivering enterprise web, mobile apps, AI, and IoT solutions.';
@endphp

<div id="ssr-seo-wrapper" class="zy-ssr-content">
    {{-- Semantic Header & Navigation for Search Bots --}}
    <header style="padding: 20px 24px; border-bottom: 1px solid #222; display: flex; justify-content: space-between; align-items: center; background: #060608; color: #fff;">
        <div>
            <a href="/" style="color: #fff; text-decoration: none; font-size: 20px; font-weight: 800; letter-spacing: -0.02em;">
                ZYTRIXON TECH
            </a>
        </div>
        <nav style="display: flex; gap: 20px; font-size: 14px;">
            <a href="/" style="color: #ccc; text-decoration: none;">Home</a>
            <a href="/services" style="color: #ccc; text-decoration: none;">Services</a>
            <a href="/portfolio" style="color: #ccc; text-decoration: none;">Portfolio</a>
            <a href="/about" style="color: #ccc; text-decoration: none;">About</a>
            <a href="/blog" style="color: #ccc; text-decoration: none;">Blog</a>
            <a href="/contact" style="color: #ccc; text-decoration: none;">Contact</a>
        </nav>
    </header>

    @if ($component === 'ServiceSeoPage')
        {{-- ========================================================== --}}
        {{-- SERVICE + LOCATION SEO LANDING PAGE                        --}}
        {{-- ========================================================== --}}
        <main style="max-width: 1100px; margin: 0 auto; padding: 48px 24px; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            {{-- Breadcrumbs --}}
            <nav aria-label="Breadcrumb" style="font-size: 13px; color: #888; margin-bottom: 24px;">
                <a href="/" style="color: #aaa; text-decoration: none;">Home</a> /
                <a href="/services" style="color: #aaa; text-decoration: none;">Services</a> /
                @if ($service)
                    <a href="/services/{{ $service['slug'] }}" style="color: #aaa; text-decoration: none;">{{ $serviceTitle }}</a> /
                @endif
                <span style="color: #fff; font-weight: 600;">{{ $locName }}</span>
            </nav>

            {{-- Location Badge --}}
            <div style="display: inline-block; padding: 6px 16px; border: 1px solid rgba(255,255,255,0.15); border-radius: 9999px; font-size: 12px; font-weight: 600; color: #10b981; margin-bottom: 16px; background: rgba(16,185,129,0.08);">
                📍 Serving Businesses in {{ $locName }}, {{ $locState }}
            </div>

            {{-- Main H1 Heading --}}
            <h1 style="font-size: 42px; line-height: 1.15; font-weight: 800; color: #ffffff; margin-bottom: 20px;">
                {{ $h1 }}
            </h1>

            {{-- Hero Description --}}
            <p style="font-size: 18px; line-height: 1.6; color: #cbd5e1; max-width: 800px; margin-bottom: 32px;">
                {{ $heroDescription ?: "Looking for top-rated {$serviceTitle} in {$locName}, {$locState}? Zytrixon Tech engineers blazing-fast, mobile-first web architectures, custom enterprise systems, and high-conversion software tailored for your business." }}
            </p>

            {{-- Quick CTA buttons --}}
            <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px;">
                <a href="#contact" style="display: inline-block; padding: 14px 28px; background: #ffffff; color: #000000; font-weight: 700; border-radius: 8px; text-decoration: none; font-size: 14px; text-transform: uppercase;">
                    Get Free Architecture Proposal &rarr;
                </a>
                <a href="https://wa.me/917049711475" style="display: inline-block; padding: 14px 24px; background: #10b981; color: #ffffff; font-weight: 600; border-radius: 8px; text-decoration: none; font-size: 14px;">
                    Chat on WhatsApp: +91 70497 11475
                </a>
                <a href="tel:+917049711475" style="display: inline-block; padding: 14px 24px; border: 1px solid rgba(255,255,255,0.2); color: #ffffff; font-weight: 500; border-radius: 8px; text-decoration: none; font-size: 14px;">
                    Call Directly: +91 70497 11475
                </a>
            </div>

            {{-- Trust Metrics --}}
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 56px;">
                <div>
                    <div style="font-size: 20px; font-weight: 800; color: #f59e0b;">★ 4.9 / 5.0</div>
                    <div style="font-size: 12px; color: #94a3b8;">Google & Clutch Reviews</div>
                </div>
                <div>
                    <div style="font-size: 20px; font-weight: 800; color: #ffffff;">100+ Delivered</div>
                    <div style="font-size: 12px; color: #94a3b8;">Web, Apps & Systems</div>
                </div>
                <div>
                    <div style="font-size: 20px; font-weight: 800; color: #ffffff;">Bihar On-Ground</div>
                    <div style="font-size: 12px; color: #94a3b8;">Direct In-Person Support</div>
                </div>
                <div>
                    <div style="font-size: 20px; font-weight: 800; color: #ffffff;">99.9% Uptime</div>
                    <div style="font-size: 12px; color: #94a3b8;">Cloud Architecture SLA</div>
                </div>
            </div>

            {{-- Dynamic Sections (Why Us, Local Context, Process, FAQs) --}}
            @if (!empty($sections))
                @foreach ($sections as $section)
                    @php
                        $type = $section['type'] ?? 'custom';
                        $heading = $section['heading'] ?? '';
                        $content = $section['content'] ?? '';
                        $points = $section['points'] ?? [];
                        $steps = $section['steps'] ?? [];
                        $items = $section['items'] ?? [];
                    @endphp

                    <section style="margin-bottom: 48px; padding-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                        @if ($heading)
                            <h2 style="font-size: 28px; font-weight: 700; color: #ffffff; margin-bottom: 16px;">
                                {{ $heading }}
                            </h2>
                        @endif

                        @if ($content)
                            <div style="font-size: 15px; line-height: 1.7; color: #cbd5e1; margin-bottom: 20px; white-space: pre-line;">
                                {!! nl2br(e($content)) !!}
                            </div>
                        @endif

                        {{-- Section Points --}}
                        @if (!empty($points))
                            <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
                                @foreach ($points as $point)
                                    <li style="padding: 12px 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; font-size: 14px; color: #e2e8f0;">
                                        &check; {{ $point }}
                                    </li>
                                @endforeach
                            </ul>
                        @endif

                        {{-- Process Steps --}}
                        @if (!empty($steps))
                            <ol style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
                                @foreach ($steps as $idx => $step)
                                    <li style="padding: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
                                        <div style="font-size: 12px; font-weight: 800; color: #10b981; margin-bottom: 8px;">PHASE 0{{ $idx + 1 }}</div>
                                        <h3 style="font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 6px;">{{ $step['title'] ?? '' }}</h3>
                                        <p style="font-size: 13px; color: #94a3b8; line-height: 1.5;">{{ $step['desc'] ?? '' }}</p>
                                    </li>
                                @endforeach
                            </ol>
                        @endif

                        {{-- FAQ Items --}}
                        @if (!empty($items) || $type === 'faq')
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                @foreach ($items as $faq)
                                    <div style="padding: 16px 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
                                        <h3 style="font-size: 16px; font-weight: 600; color: #ffffff; margin-bottom: 8px;">
                                            Q: {{ $faq['q'] ?? '' }}
                                        </h3>
                                        <p style="font-size: 14px; color: #cbd5e1; line-height: 1.6; margin: 0;">
                                            {{ $faq['a'] ?? '' }}
                                        </p>
                                    </div>
                                @endforeach
                            </div>
                        @endif
                    </section>
                @endforeach
            @else
                {{-- Fallback default sections if no custom DB sections --}}
                <section style="margin-bottom: 48px;">
                    <h2 style="font-size: 28px; font-weight: 700; color: #ffffff; margin-bottom: 16px;">
                        Why {{ $locName }} Businesses Choose Zytrixon Tech
                    </h2>
                    <p style="font-size: 15px; line-height: 1.7; color: #cbd5e1; margin-bottom: 20px;">
                        We work directly with founders, directors, and managers across {{ $locName }}, {{ $locState }}. No outsourced middle-men, no broken promises. From rapid MVP development to enterprise-grade cloud systems, our team delivers software with direct accountability.
                    </p>
                    <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
                        <li style="padding: 12px 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; font-size: 14px; color: #e2e8f0;">&check; Local presence with Bihar on-ground engineers</li>
                        <li style="padding: 12px 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; font-size: 14px; color: #e2e8f0;">&check; Modern tech stack (React, Next.js, Laravel, Flutter, AWS)</li>
                        <li style="padding: 12px 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; font-size: 14px; color: #e2e8f0;">&check; Complete source code handover with 100% intellectual property ownership</li>
                        <li style="padding: 12px 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; font-size: 14px; color: #e2e8f0;">&check; Dedicated post-launch maintenance and 24/7 server monitoring</li>
                    </ul>
                </section>
            @endif

            {{-- Closing CTA & Lead Form Anchor --}}
            <section id="contact" style="padding: 40px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; text-align: center; margin-top: 56px;">
                <h2 style="font-size: 28px; font-weight: 800; color: #ffffff; margin-bottom: 12px;">
                    Ready to Scale Your Business in {{ $locName }}?
                </h2>
                <p style="font-size: 15px; color: #cbd5e1; max-width: 600px; margin: 0 auto 24px; line-height: 1.6;">
                    Contact Zytrixon Tech today for a free architecture review, competitive audit, and transparent project quote.
                </p>
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                    <a href="tel:+917049711475" style="display: inline-block; padding: 14px 28px; background: #ffffff; color: #000; font-weight: 700; border-radius: 8px; text-decoration: none; font-size: 14px;">
                        Call: +91 70497 11475
                    </a>
                    <a href="mailto:contact@zytrixontech.com" style="display: inline-block; padding: 14px 28px; border: 1px solid rgba(255,255,255,0.2); color: #fff; font-weight: 600; border-radius: 8px; text-decoration: none; font-size: 14px;">
                        Email: contact@zytrixontech.com
                    </a>
                </div>
            </section>
        </main>

    @elseif ($component === 'welcome')
        {{-- ========================================================== --}}
        {{-- HOMEPAGE SEO CONTENT                                       --}}
        {{-- ========================================================== --}}
        <main style="max-width: 1100px; margin: 0 auto; padding: 48px 24px; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <h1 style="font-size: 44px; line-height: 1.15; font-weight: 900; color: #ffffff; margin-bottom: 20px;">
                Zytrixon Tech | Best Software & IT Company in Patna, Bihar
            </h1>
            <p style="font-size: 18px; line-height: 1.6; color: #cbd5e1; max-width: 850px; margin-bottom: 36px;">
                Zytrixon Tech delivers cutting-edge Web Development, Mobile Apps (iOS & Android), Enterprise ERP / CRM Solutions, AI Automations, and IoT Device Engineering for businesses in Patna, Bihar, India and across the globe.
            </p>

            <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px;">
                <a href="/contact" style="display: inline-block; padding: 14px 28px; background: #ffffff; color: #000; font-weight: 700; border-radius: 8px; text-decoration: none; font-size: 14px; text-transform: uppercase;">
                    Start Your Project &rarr;
                </a>
                <a href="/services" style="display: inline-block; padding: 14px 28px; border: 1px solid rgba(255,255,255,0.2); color: #fff; font-weight: 600; border-radius: 8px; text-decoration: none; font-size: 14px;">
                    Explore Services
                </a>
            </div>

            <section style="margin-bottom: 48px;">
                <h2 style="font-size: 28px; font-weight: 700; color: #ffffff; margin-bottom: 16px;">Our Core Engineering Services</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                    <div style="padding: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
                        <h3 style="font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 8px;"><a href="/services/web-development" style="color: #fff; text-decoration: none;">Custom Web Development</a></h3>
                        <p style="font-size: 14px; color: #94a3b8; line-height: 1.6;">Full-stack web applications using React, Next.js, and Laravel. Blazing fast, SEO-ready, and ultra-secure.</p>
                    </div>
                    <div style="padding: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
                        <h3 style="font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 8px;"><a href="/services/mobile-apps" style="color: #fff; text-decoration: none;">Mobile App Development</a></h3>
                        <p style="font-size: 14px; color: #94a3b8; line-height: 1.6;">Native and cross-platform Flutter/React Native mobile applications for iOS & Android with seamless UX.</p>
                    </div>
                    <div style="padding: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
                        <h3 style="font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 8px;"><a href="/services/ai-automation" style="color: #fff; text-decoration: none;">AI & Automation Systems</a></h3>
                        <p style="font-size: 14px; color: #94a3b8; line-height: 1.6;">Automate repetitive business workflows with custom LLMs, Gemini AI pipelines, and intelligent chatbots.</p>
                    </div>
                    <div style="padding: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
                        <h3 style="font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 8px;"><a href="/services/cloud-devops" style="color: #fff; text-decoration: none;">Cloud Architecture & DevOps</a></h3>
                        <p style="font-size: 14px; color: #94a3b8; line-height: 1.6;">Scalable AWS and Docker cloud infrastructures with automated CI/CD and 99.9% uptime reliability.</p>
                    </div>
                </div>
            </section>
        </main>

    @elseif ($component === 'BlogDetails')
        {{-- ========================================================== --}}
        {{-- BLOG POST ARTICLE                                          --}}
        {{-- ========================================================== --}}
        @php
            $post = $props['post'] ?? null;
        @endphp
        <main style="max-width: 800px; margin: 0 auto; padding: 48px 24px; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <article>
                <h1 style="font-size: 38px; line-height: 1.2; font-weight: 800; color: #ffffff; margin-bottom: 16px;">
                    {{ $post['title'] ?? $h1 }}
                </h1>
                <div style="font-size: 13px; color: #94a3b8; margin-bottom: 24px;">
                    Published by Zytrixon Tech on {{ isset($post['created_at']) ? date('M d, Y', strtotime($post['created_at'])) : date('M d, Y') }}
                </div>
                <div style="font-size: 16px; line-height: 1.8; color: #cbd5e1;">
                    {!! $post['content'] ?? ($post['excerpt'] ?? $h1Desc) !!}
                </div>
            </article>
        </main>

    @else
        {{-- ========================================================== --}}
        {{-- GENERIC INNER PAGE FALLBACK                                --}}
        {{-- ========================================================== --}}
        <main style="max-width: 1000px; margin: 0 auto; padding: 48px 24px; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <h1 style="font-size: 38px; line-height: 1.2; font-weight: 800; color: #ffffff; margin-bottom: 20px;">
                {{ $h1 }}
            </h1>
            <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1; max-width: 800px; margin-bottom: 32px;">
                {{ $h1Desc }}
            </p>
        </main>
    @endif

    {{-- Semantic Footer for Crawlers & Bot Indexation --}}
    <footer style="padding: 40px 24px; background: #020204; border-top: 1px solid #1a1a20; color: #94a3b8; font-size: 13px; font-family: sans-serif;">
        <div style="max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; margin-bottom: 32px;">
            <div>
                <div style="font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 12px;">ZYTRIXON TECH</div>
                <p style="line-height: 1.6; margin: 0;">Enterprise IT, Custom Web Applications, Mobile Apps & AI Software Engineering Company.</p>
            </div>
            <div>
                <div style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 12px;">Headquarters</div>
                <p style="line-height: 1.6; margin: 0;">Patna, Bihar 800001, India<br>Phone: <a href="tel:+917049711475" style="color: #cbd5e1;">+91 70497 11475</a><br>Email: <a href="mailto:contact@zytrixontech.com" style="color: #cbd5e1;">contact@zytrixontech.com</a></p>
            </div>
            <div>
                <div style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 12px;">Quick Links</div>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8;">
                    <li><a href="/services" style="color: #94a3b8; text-decoration: none;">All Services</a></li>
                    <li><a href="/portfolio" style="color: #94a3b8; text-decoration: none;">Selected Portfolio</a></li>
                    <li><a href="/case-studies" style="color: #94a3b8; text-decoration: none;">Case Studies</a></li>
                    <li><a href="/about" style="color: #94a3b8; text-decoration: none;">About Company</a></li>
                    <li><a href="/contact" style="color: #94a3b8; text-decoration: none;">Get a Quote</a></li>
                </ul>
            </div>
        </div>
        <div style="max-width: 1100px; margin: 0 auto; padding-top: 20px; border-top: 1px solid #111; text-align: center; font-size: 12px; color: #666;">
            &copy; {{ date('Y') }} Zytrixon Tech. All rights reserved. Registered software development agency in Bihar, India.
        </div>
    </footer>
</div>
