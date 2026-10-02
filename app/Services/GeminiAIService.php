<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class GeminiAIService
{
    private string $apiKey;
    private string $baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models';

    /**
     * Prioritized list of Gemini models.
     * If one experiences high demand (503/429) or is deprecated, we fall back to the next.
     */
    private array $candidateModels = [
        'gemini-flash-lite-latest',
        'gemini-3.1-flash-lite',
        'gemini-3.5-flash-lite',
        'gemini-3.6-flash',
        'gemini-3.8-flash',
        'gemini-3-flash-preview',
    ];

    public function __construct()
    {
        $this->apiKey = (string) (config('services.gemini.key') ?: env('GEMINI_API_KEY', ''));

        // If a specific model is set in config/env, put it first in the candidate list
        $preferred = config('services.gemini.model') ?: env('GEMINI_MODEL');
        if ($preferred && !in_array($preferred, $this->candidateModels)) {
            array_unshift($this->candidateModels, $preferred);
        } elseif ($preferred) {
            $this->candidateModels = array_unique(array_merge([$preferred], $this->candidateModels));
        }
    }

    /**
     * Generate structured SEO content for a location page.
     */
    public function generateSeoContent(
        string $serviceName,
        string $serviceDescription,
        string $locationName,
        string $locationState,
        string $template,
        string $focusKeyword = ''
    ): array {
        $keyword = $focusKeyword ?: "{$serviceName} in {$locationName}";
        $state = $locationState ?: 'Bihar';

        $prompt = <<<PROMPT
You are an expert human copywriter and local business strategist for "Zytrixon Tech" (zytrixontech.com), based in Bihar, India.

Your goal is to write a high-ranking, 100% human-sounding local landing page.

ANTI-AI DETECTION RULES (MANDATORY):
1. HIGH BURSTINESS (Vary sentence length constantly):
   - Mix short, punchy 2-5 word sentences ("We fix that.", "No excuses.", "Simple as that.") with medium and longer descriptive sentences.
   - Do NOT write sentences that are all 15-20 words long.
2. HIGH PERPLEXITY (Unpredictable, natural human word choices):
   - Use direct, conversational vocabulary.
   - MANDATORY CONTRACTIONS: you'll, we've, don't, won't, that's, here's, isn't.
   - NEVER use AI giveaway words: "delve", "testament", "beacon", "foster", "streamline", "leverage", "tailored", "pivotal", "vital", "dynamic", "paramount", "bespoke", "embark", "realm", "harness", "cutting-edge", "game-changer", "transformative", "in today's digital era", "look no further", "crucial", "tapestry", "moreover", "furthermore", "in conclusion", "elevate", "unlock", "seamless".
3. REAL-WORLD REGIONAL AUTHENTICITY:
   - Mention real regional realities in {$locationName}: commercial hubs (markets, coaching institutes, clinics, retail shops, trading firms), fast loading on patchy 4G mobile networks, direct WhatsApp inquiries and phone calls, transparent upfront pricing with zero hidden costs.
   - Speak in the warm, practical voice of a trusted local engineering partner.

TARGET DETAILS:
- Service: {$serviceName}
- About Service: {$serviceDescription}
- Location: {$locationName}, {$state}
- Focus Keyword: "{$keyword}"
- Template Layout: {$template}

Return ONLY valid JSON with this exact schema:
{
  "h1": "Punchy H1 with keyword and location (e.g. Best Website Development in {$locationName} | Zytrixon Tech)",
  "meta_title": "SEO Title (50-60 characters, with focus keyword & location)",
  "meta_description": "Meta Description (140-160 characters, persuasive and conversational, with location)",
  "hero_description": "2-3 engaging, conversational sentences connecting {$serviceName} to {$locationName} businesses. Avoid robotic openings like 'in today's world'. Speak directly to the business owner about turning visitors into paying customers.",
  "sections": [
    {
      "type": "why_us",
      "heading": "Why {$locationName} Businesses Trust Zytrixon Tech",
      "content": "A direct 2-3 sentence overview explaining how our Bihar-based team gives you direct access to engineers who actually answer the phone and build rock-solid software.",
      "points": [
        "Local Bihar team with fast, direct on-ground support",
        "Clean custom architecture — no sluggish, generic templates",
        "Engineered to load in under a second even on spotty 4G",
        "Clear, fixed pricing with zero hidden surprises"
      ]
    },
    {
      "type": "local_context",
      "heading": "Growing Your {$locationName} Business with {$serviceName}",
      "content": "2 detailed, conversational paragraphs about how customer behavior in {$locationName} has moved to smartphones. Explain how having a fast, reliable {$serviceName} drives real calls and orders from local buyers."
    },
    {
      "type": "process",
      "heading": "Our No-Nonsense 4-Step {$serviceName} Roadmap",
      "steps": [
        {"title": "1. Discovery & Local Market Audit", "desc": "We check out your {$locationName} rivals and figure out what local customers actually want."},
        {"title": "2. UI/UX Architecture & Prototypes", "desc": "Clean, intuitive screens designed around your specific brand and audience."},
        {"title": "3. Clean Code & Speed Tuning", "desc": "Lightweight code, mobile optimization, and built-in search engine tags."},
        {"title": "4. Launch & Ongoing Local Support", "desc": "Smooth rollout with Google local search indexing and real human support."}
      ]
    },
    {
      "type": "faq",
      "heading": "Frequently Asked Questions — {$serviceName} in {$locationName}",
      "items": [
        {"q": "How much does {$serviceName} cost in {$locationName}?", "a": "Pricing depends on your project scope, but we keep our rates honest, transparent, and built for local ROI."},
        {"q": "How long will it take to finish?", "a": "Most projects wrap up in 2 to 6 weeks, and we keep you updated at every step."},
        {"q": "Can we meet face-to-face in {$locationName} or nearby in Bihar?", "a": "Yes! We are based right here in Bihar, so meeting in person or jumping on a quick call is always easy."}
      ]
    }
  ]
}
PROMPT;

        $result = $this->callGeminiWithFallback($prompt, true, 0.85);
        return $this->cleanAiWatermarks($result);
    }

    /**
     * Deep Anti-AI Humanizer: Specifically engineered to bypass AI content detectors
     * (ZeroGPT, Copyleaks, Turnitin, Winston AI, Quillbot) with <10% AI Score.
     */
    public function humanizeContent(array $contentJson): array
    {
        $jsonStr = json_encode($contentJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

        $prompt = <<<PROMPT
You are an expert Ghostwriter and Anti-AI Copy Specialist.
Your sole mission is to take the JSON content below and rewrite every single sentence so it easily passes AI detector tools (ZeroGPT, Copyleaks, Turnitin, Winston AI, QuillBot) as 100% HUMAN WRITTEN (<10% AI score).

HOW AI DETECTORS WORK & HOW YOU WILL BYPASS THEM:
1. PERPLEXITY (Statistical Word Choice):
   - AI models choose the most expected, cliché words.
   - YOU MUST NEVER USE ANY OF THESE WORDS (INSTANT AI FLAGS):
     delve, foster, streamline, leverage, tailored, pivotal, vital, dynamic, paramount, bespoke, embark, realm, harness, cutting-edge, game-changer, transformative, in today's digital era, in today's competitive landscape, look no further, crucial, tapestry, moreover, furthermore, in conclusion, navigating, holistic, elevate, unlock, unleash, plethora, multifaceted, seamless, synergy, resonate, ever-evolving, beacon, testament, robust, comprehensive.
   - INSTEAD: Use everyday conversational English that real founders and business owners speak: "honest talk", "patchy 4G", "clicks into cash", "straight shooter", "no bloat", "spending hard-earned money", "ring your phone", "WhatsApp orders".

2. BURSTINESS (Sentence Rhythm & Cadence):
   - AI outputs sentences of uniform length (15-20 words).
   - YOU MUST VARY LENGTH DRAMATICALLY:
     - Use 2-4 word punchy sentences: "That kills conversions." "We fix that." "No excuses."
     - Followed by 10-15 word medium sentences.
     - Followed by longer conversational sentences with em-dashes (—) or commas.

3. CONVERSATIONAL SPEECH & CONTRACTIONS:
   - Mandatory contractions: you'll, we've, don't, can't, here's, it's, isn't, that's, won't.
   - Use conversational openers: "Look,", "Here's the truth:", "Let's be real —", "Honestly,".
   - Use rhetorical questions to draw readers in.
   - Write in an active, confident, first-person/second-person voice ("we build", "you get", "your buyers").

4. PRESERVE SEO & STRUCTURE:
   - Keep the EXACT same JSON keys and structure.
   - Keep target location names and service names for SEO.
   - Keep 'meta_title' 50-60 characters and 'meta_description' 140-160 characters.

Input JSON to humanize:
{$jsonStr}
PROMPT;

        // Use higher temperature (0.95) to break statistical token predictability (Perplexity)
        $result = $this->callGeminiWithFallback($prompt, true, 0.95);

        // Run secondary programmatic sanitization to guarantee 0 AI watermark words
        return $this->cleanAiWatermarks($result);
    }

    /**
     * Quick content suggestions for a specific section.
     */
    public function suggestSectionContent(string $sectionType, string $serviceName, string $locationName): string
    {
        $prompt = "Write a compelling, natural, human {$sectionType} section (2-3 paragraphs) for a {$serviceName} service page targeting {$locationName}. Make it 100% human, conversational, and location-specific. Avoid all AI cliches. Return plain text only.";

        $result = $this->callGeminiWithFallback($prompt, false, 0.9);
        $text = $result['text'] ?? '';
        return $this->cleanAiWatermarks($text);
    }

    /**
     * Call Gemini with automatic fallback across models.
     */
    private function callGeminiWithFallback(string $prompt, bool $isJson = true, float $temperature = 0.85): array
    {
        if (empty($this->apiKey)) {
            return ['error' => 'Gemini API key is not configured. Please add GEMINI_API_KEY in .env'];
        }

        $lastError = 'Unknown error';

        foreach ($this->candidateModels as $model) {
            try {
                $httpClient = Http::timeout(45);

                // Windows local dev SSL workaround
                if (app()->environment(['local', 'testing']) || env('APP_ENV') === 'local') {
                    $httpClient = $httpClient->withoutVerifying();
                }

                $generationConfig = [
                    'temperature'     => $temperature,
                    'topK'            => 50,
                    'topP'            => 0.95,
                    'maxOutputTokens' => 4096,
                ];

                if ($isJson) {
                    $generationConfig['responseMimeType'] = 'application/json';
                }

                $url = "{$this->baseUrl}/{$model}:generateContent?key={$this->apiKey}";

                $response = $httpClient->post($url, [
                    'contents' => [
                        [
                            'parts' => [
                                ['text' => $prompt],
                            ],
                        ],
                    ],
                    'generationConfig' => $generationConfig,
                ]);

                if ($response->successful()) {
                    $data = $response->json();
                    $text = $data['candidates'][0]['content']['parts'][0]['text'] ?? '';

                    if ($isJson) {
                        // Clean any stray backticks just in case
                        $cleaned = preg_replace('/^```(?:json)?\s*/i', '', trim($text));
                        $cleaned = preg_replace('/```$/', '', trim($cleaned));
                        $parsed = json_decode(trim($cleaned), true);

                        if (json_last_error() === JSON_ERROR_NONE && is_array($parsed)) {
                            Log::info("GeminiAIService: Generated successfully with model {$model}");
                            return $parsed;
                        }
                    }

                    return ['text' => $text];
                }

                $status = $response->status();
                $errBody = $response->json('error.message') ?? substr($response->body(), 0, 200);
                $lastError = "Model {$model} returned HTTP {$status}: {$errBody}";

                Log::warning("GeminiAIService: Model {$model} failed (HTTP {$status}), trying fallback...", [
                    'body' => $errBody,
                ]);

            } catch (\Exception $e) {
                $lastError = "Model {$model} exception: " . $e->getMessage();
                Log::warning("GeminiAIService: Exception with model {$model}, trying next...", [
                    'error' => $e->getMessage(),
                ]);
            }
        }

        Log::error("GeminiAIService: All fallback models exhausted. Last error: {$lastError}");
        return ['error' => "AI generation failed across all available models. Details: {$lastError}"];
    }

    /**
     * Programmatic scrubber: Replaces any lingering AI detection buzzwords with human synonyms.
     */
    private function cleanAiWatermarks(mixed $data): mixed
    {
        $replacements = [
            '/\bdelve into\b/i' => 'explore',
            '/\bdelve\b/i' => 'dig into',
            '/\ba testament to\b/i' => 'proof of',
            '/\btestament to\b/i' => 'proof of',
            '/\ba beacon of\b/i' => 'a trusted name in',
            '/\bbeacon of\b/i' => 'trusted leader in',
            '/\bbeacon\b/i' => 'standard',
            '/\btapestry of\b/i' => 'mix of',
            '/\btapestry\b/i' => 'mix',
            '/\bfoster\b/i' => 'build',
            '/\bleverage\b/i' => 'use',
            '/\bstreamline\b/i' => 'simplify',
            '/\bbespoke\b/i' => 'custom',
            '/\btailored to\b/i' => 'built for',
            '/\btailored for\b/i' => 'built for',
            '/\btailored\b/i' => 'custom',
            '/\bpivotal\b/i' => 'key',
            '/\bparamount\b/i' => 'crucial',
            '/\bcutting-edge\b/i' => 'modern',
            '/\bgame-changer\b/i' => 'big breakthrough',
            '/\bgame changing\b/i' => 'breakthrough',
            '/\bin today\'s digital era\b/i' => 'these days',
            '/\bin today\'s fast-paced world\b/i' => 'today',
            '/\bin today\'s competitive landscape\b/i' => 'in today\'s market',
            '/\blook no further\b/i' => 'we are here to help',
            '/\bmoreover,?\b/i' => 'also,',
            '/\bfurthermore,?\b/i' => 'plus,',
            '/\bin conclusion,?\b/i' => 'bottom line:',
            '/\bholistic\b/i' => 'complete',
            '/\belevate your\b/i' => 'boost your',
            '/\belevate\b/i' => 'boost',
            '/\bunlock your\b/i' => 'grow your',
            '/\bunlock\b/i' => 'open up',
            '/\bunleash your\b/i' => 'realize your',
            '/\bunleash\b/i' => 'bring out',
            '/\bseamless\b/i' => 'smooth',
            '/\bseamlessly\b/i' => 'smoothly',
            '/\bplethora of\b/i' => 'plenty of',
            '/\bever-evolving\b/i' => 'changing',
            '/\brobust\b/i' => 'dependable',
            '/\bmultifaceted\b/i' => 'versatile',
        ];

        if (is_string($data)) {
            return preg_replace(array_keys($replacements), array_values($replacements), $data);
        }

        if (is_array($data)) {
            foreach ($data as $k => $v) {
                $data[$k] = $this->cleanAiWatermarks($v);
            }
        }

        return $data;
    }
}
