<?php

namespace App\Http\Controllers;

use App\Models\ContactEnquiry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    /**
     * Store an incoming public contact enquiry.
     */
    public function store(Request $request): JsonResponse|RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'service' => ['nullable', 'string', 'max:255'],
            'budget' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:5000'],
        ]);

        try {
            $enquiry = ContactEnquiry::create([
                'name' => trim($validated['name']),
                'email' => strtolower(trim($validated['email'])),
                'phone' => trim($validated['phone']),
                'service' => $validated['service'] ?? null,
                'budget' => $validated['budget'] ?? null,
                'message' => $validated['message'] ?? null,
                'status' => ContactEnquiry::STATUS_NEW,
                'ip_address' => $request->ip(),
                'user_agent' => substr((string) $request->userAgent(), 0, 500),
            ]);

            if ($request->wantsJson() || $request->ajax() || $request->isJson()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Thank you for reaching out! We have received your project details and will contact you within 2 hours.',
                    'id' => $enquiry->id,
                ], 201);
            }

            return back()->with('success', 'Thank you! Your enquiry has been received.');
        } catch (\Throwable $e) {
            Log::error('Failed to store contact enquiry: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
            ]);

            if ($request->wantsJson() || $request->ajax() || $request->isJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'An error occurred while submitting your enquiry. Please try again or reach us directly via WhatsApp/Phone.',
                ], 500);
            }

            return back()->with('error', 'Unable to submit enquiry at this time.');
        }
    }
}
