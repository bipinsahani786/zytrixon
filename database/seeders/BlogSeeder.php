<?php

namespace Database\Seeders;

use App\Models\Blog;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
                'title' => 'The Future of Enterprise Architecture: Serverless Meets Edge Computing',
                'slug' => 'enterprise-architecture-serverless-edge-computing',
                'excerpt' => 'Discover how modern enterprises leverage edge computing and serverless architectures to reduce latency, cut cloud costs, and scale globally without operational friction.',
                'content' => '<h2>The Paradigm Shift in Cloud Computing</h2>
<p>Traditional monolithic cloud deployments often struggle with global latency and rigid infrastructure scaling costs. As digital experiences demand sub-100ms response times, enterprise architecture is undergoing a foundational transition: uniting <strong>stateless serverless microservices</strong> with <strong>distributed edge compute runtimes</strong>.</p>

<h3>Why Edge + Serverless Matters</h3>
<ul>
    <li><strong>Zero Cold Starts:</strong> V8 isolate-based edge runtimes spin up in under 5 milliseconds.</li>
    <li><strong>Geographic Proximity:</strong> Compute executes in over 300 points of presence globally, terminating TLS and running logic closest to the end user.</li>
    <li><strong>Substantial Cost Efficiency:</strong> Pay solely for microsecond CPU cycles rather than idle container clusters.</li>
</ul>

<blockquote>"Architecture is not about making decisions easily; it is about deferring decisions until you have the exact runtime telemetry required." — Martin Fowler</blockquote>

<h3>Enterprise Implementation Blueprint</h3>
<p>At Zytrixon Tech, our typical deployment combines a unified API gateway running on Cloudflare Workers or AWS CloudFront Functions with high-throughput Laravel/Postgres transactional core backends.</p>

<pre><code class="language-typescript">// Example: Edge authentication and routing middleware
export default {
    async fetch(request: Request, env: Env): Promise&lt;Response&gt; {
        const token = request.headers.get("Authorization");
        if (!token) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }
        return await proxyToOrigin(request, env);
    }
};</code></pre>

<h3>Conclusion</h3>
<p>By delegating static asset delivery, bot filtering, and cryptographic signature validation to the edge, engineering teams ensure their core databases only process validated, high-value transactional payloads.</p>',
                'category' => 'Engineering',
                'featured_image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
                'author_name' => 'Bipin Sahani',
                'read_time' => '7 min read',
                'status' => Blog::STATUS_PUBLISHED,
                'is_featured' => true,
                'published_at' => Carbon::now()->subDays(2),
                'views_count' => 1420,
                'meta_title' => 'Serverless & Edge Computing Enterprise Architecture | Zytrixon',
                'meta_description' => 'Explore how enterprise organizations scale globally with serverless and edge computing architectures.',
            ],
            [
                'title' => 'Building Resilient AI Microservices with Python and Laravel',
                'slug' => 'building-resilient-ai-microservices-python-laravel',
                'excerpt' => 'A practical guide to bridging high-performance Python inference engines with enterprise Laravel APIs using asynchronous event queues and Redis.',
                'content' => '<h2>Bridging the Python & PHP Ecosystems</h2>
<p>While Python reigns supreme for machine learning tensor computations and Hugging Face transformer models, Laravel provides the world’s most developer-friendly framework for enterprise authentication, database migrations, and transactional data integrity.</p>

<h3>The Architecture Pattern</h3>
<p>Instead of exposing synchronous HTTP endpoints between Laravel and FastAPI, the recommended architecture utilizes <strong>Redis Streams</strong> or <strong>RabbitMQ</strong> with asynchronous webhook completion callbacks.</p>

<ol>
    <li>User requests AI synthesis from the React/Inertia dashboard.</li>
    <li>Laravel validates the payload, generates an idempotent UUID job token, and dispatches a job to the Redis queue.</li>
    <li>Python Celery workers poll the queue, perform GPU tensor inference, and publish the results back.</li>
    <li>Laravel dispatches a realtime WebSocket event via Laravel Reverb to instantly refresh the user interface.</li>
</ol>

<pre><code class="language-php">// Dispatching inference job asynchronously in Laravel
public function generateReport(Request $request): JsonResponse
{
    $validated = $request->validate([\'prompt\' => \'required|string|max:1000\']);
    
    $job = AiSynthesisJob::dispatch($validated[\'prompt\'], auth()->id());
    
    return response()->json([
        \'status\' => \'queued\',
        \'job_id\' => $job->getJobId(),
    ]);
}</code></pre>

<h3>Observability & Error Handling</h3>
<p>When dealing with LLM latency and rate limits, circuit breakers and exponential backoff mechanisms prevent cascading failures across your application cluster.</p>',
                'category' => 'AI & Automation',
                'featured_image' => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
                'author_name' => 'Sahil Kumar',
                'read_time' => '6 min read',
                'status' => Blog::STATUS_PUBLISHED,
                'is_featured' => true,
                'published_at' => Carbon::now()->subDays(5),
                'views_count' => 985,
                'meta_title' => 'AI Microservices with Python & Laravel | Zytrixon Engineering',
                'meta_description' => 'How to build production-grade AI microservices using Python FastAPI, Laravel, and Redis queues.',
            ],
            [
                'title' => 'Mastering Modern UI/UX: Design Systems that Scale Across Web & Mobile',
                'slug' => 'mastering-modern-ui-ux-design-systems-scale',
                'excerpt' => 'How to craft design tokens, accessible components, and consistent dark/light themes that empower engineering teams to ship faster.',
                'content' => '<h2>Why Most Design Systems Break Down</h2>
<p>Design systems frequently falter not because of a lack of visual creativity, but because of rigid component coupling and poor translation between Figma design tokens and production CSS variables.</p>

<h3>The Tokenized Approach</h3>
<p>By declaring semantic tokens in CSS variables—such as <code>--admin-accent</code>, <code>--admin-card-bg</code>, and <code>--admin-text-primary</code>—both web applications and mobile shells maintain pixel-perfect harmony across multiple brand themes.</p>

<h3>Core Principles of High-Performance Interfaces</h3>
<ul>
    <li><strong>Subtle Micro-Interactions:</strong> Spring physics and 150ms transitions make software feel instantaneous.</li>
    <li><strong>Strict Accessibility (a11y):</strong> Focus states, aria-labels, and contrast ratios of at least 4.5:1.</li>
    <li><strong>Zero Layout Shifts:</strong> Explicit container dimensioning ensures no jumpy UI renders.</li>
</ul>

<p>Investing in a cohesive component library pays exponential dividends as feature velocity increases.</p>',
                'category' => 'Design UI/UX',
                'featured_image' => 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
                'author_name' => 'Bipin Sahani',
                'read_time' => '5 min read',
                'status' => Blog::STATUS_PUBLISHED,
                'is_featured' => false,
                'published_at' => Carbon::now()->subDays(8),
                'views_count' => 640,
                'meta_title' => 'Scalable UI/UX Design Systems | Zytrixon Design',
                'meta_description' => 'Learn how to architect design systems that scale seamlessly across enterprise web and mobile apps.',
            ],
            [
                'title' => 'Securing Multi-Tenant SaaS Databases with Row-Level Security',
                'slug' => 'securing-multi-tenant-saas-databases-row-level-security',
                'excerpt' => 'A deep dive into PostgreSQL row-level security (RLS), tenant isolation guarantees, and preventing data leakage in high-compliance SaaS applications.',
                'content' => '<h2>The Multi-Tenancy Challenge</h2>
<p>In multi-tenant software, ensuring that Customer A can never query Customer B’s data is the number one engineering priority. While application-level scopes (like Laravel global scopes) provide a layer of protection, true database-level RLS provides unbreachable isolation.</p>

<h3>Configuring PostgreSQL RLS</h3>
<p>By binding the database session connection to the active tenant ID, Postgres rejects any SQL query attempting to read or write rows outside the tenant boundary, even if application logic is accidentally bypassed.</p>

<pre><code class="language-sql">-- Enable Row-Level Security
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON organizations
    FOR ALL
    USING (tenant_id = current_setting(\'app.current_tenant_id\')::uuid);</code></pre>

<h3>Conclusion</h3>
<p>Security at depth means combining database RLS policies with automated integration test suites for peace of mind in production environments.</p>',
                'category' => 'Cloud & DevOps',
                'featured_image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
                'author_name' => 'Zytrixon Security Team',
                'read_time' => '8 min read',
                'status' => Blog::STATUS_PUBLISHED,
                'is_featured' => false,
                'published_at' => Carbon::now()->subDays(12),
                'views_count' => 820,
                'meta_title' => 'Multi-Tenant SaaS Security & PostgreSQL RLS | Zytrixon',
                'meta_description' => 'How to implement enterprise database row-level security in multi-tenant SaaS platforms.',
            ],
            [
                'title' => 'Navigating Product-Market Fit for B2B Enterprise Software',
                'slug' => 'navigating-product-market-fit-b2b-enterprise-software',
                'excerpt' => 'Key metrics, customer discovery playbooks, and strategic pricing models for scaling SaaS solutions in complex enterprise markets.',
                'content' => '<h2>The Enterprise Discovery Phase</h2>
<p>Unlike consumer applications driven by viral loops, B2B software success hinges upon solving expensive operational bottlenecks for business stakeholders.</p>

<h3>Key Discovery Questions</h3>
<ul>
    <li>What manual spreadsheet process costs your operations team more than 10 hours per week?</li>
    <li>What compliance or security penalty keeps your executive leadership awake at night?</li>
    <li>How will adopting this solution directly drive revenue or reduce operational headcount?</li>
</ul>

<p>Validate your value proposition with working interactive prototypes before writing a single line of backend architecture.</p>',
                'category' => 'Business Strategy',
                'featured_image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
                'author_name' => 'Bipin Sahani',
                'read_time' => '4 min read',
                'status' => Blog::STATUS_PUBLISHED,
                'is_featured' => false,
                'published_at' => Carbon::now()->subDays(15),
                'views_count' => 490,
                'meta_title' => 'B2B Enterprise SaaS Product-Market Fit | Zytrixon',
                'meta_description' => 'Strategic guide to finding product-market fit and closing enterprise B2B software deals.',
            ],
            [
                'title' => 'Draft: Next-Gen Micro-Frontend Architectures with Vite and Module Federation',
                'slug' => 'next-gen-micro-frontend-vite-module-federation',
                'excerpt' => 'An upcoming technical preview exploring module federation, independent team deployments, and shared dependency management in modern SPAs.',
                'content' => '<h2>Upcoming Technical Preview</h2>
<p>This draft article explores the pros and cons of decomposing massive frontend single-page applications into isolated, independently deployable micro-frontends.</p>
<p>Topics covered will include shared React runtime trees, sub-second HMR with Vite, and cross-team CI/CD release cadences.</p>',
                'category' => 'Engineering',
                'featured_image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
                'author_name' => 'Sahil Kumar',
                'read_time' => '3 min read',
                'status' => Blog::STATUS_DRAFT,
                'is_featured' => false,
                'published_at' => null,
                'views_count' => 12,
                'meta_title' => 'Micro-Frontends with Vite | Zytrixon',
                'meta_description' => 'Preview of next-generation micro-frontend patterns with Vite and Module Federation.',
            ],
        ];

        foreach ($posts as $postData) {
            Blog::updateOrCreate(
                ['slug' => $postData['slug']],
                $postData
            );
        }
    }
}
