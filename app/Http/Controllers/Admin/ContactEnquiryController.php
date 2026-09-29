<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactEnquiry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactEnquiryController extends Controller
{
    /**
     * Display a listing of client contact enquiries.
     */
    public function index(Request $request): Response
    {
        $search = $request->query('search');
        $status = $request->query('status');
        $service = $request->query('service');
        $sort = $request->query('sort', 'latest');

        $query = ContactEnquiry::query();

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('phone', 'like', "%{$search}%")
                    ->orWhere('message', 'like', "%{$search}%")
                    ->orWhere('admin_notes', 'like', "%{$search}%");
            });
        }

        if ($status && in_array($status, [
            ContactEnquiry::STATUS_NEW,
            ContactEnquiry::STATUS_CONTACTED,
            ContactEnquiry::STATUS_IN_PROGRESS,
            ContactEnquiry::STATUS_RESOLVED,
            ContactEnquiry::STATUS_SPAM,
        ])) {
            $query->where('status', $status);
        }

        if ($service && $service !== 'all') {
            $query->where('service', $service);
        }

        if ($sort === 'oldest') {
            $query->oldest();
        } else {
            $query->latest();
        }

        $perPage = (int) $request->query('per_page', 10);
        if (! in_array($perPage, [5, 10, 25, 50, 100], true)) {
            $perPage = 10;
        }

        $enquiries = $query->paginate($perPage)->withQueryString();

        $kpis = [
            'total' => ContactEnquiry::count(),
            'new' => ContactEnquiry::where('status', ContactEnquiry::STATUS_NEW)->count(),
            'contacted' => ContactEnquiry::where('status', ContactEnquiry::STATUS_CONTACTED)->count(),
            'in_progress' => ContactEnquiry::where('status', ContactEnquiry::STATUS_IN_PROGRESS)->count(),
            'resolved' => ContactEnquiry::where('status', ContactEnquiry::STATUS_RESOLVED)->count(),
            'spam' => ContactEnquiry::where('status', ContactEnquiry::STATUS_SPAM)->count(),
        ];

        // Unique services list for filtering
        $availableServices = ContactEnquiry::whereNotNull('service')
            ->where('service', '!=', '')
            ->distinct()
            ->pluck('service');

        return Inertia::render('Admin/Contacts', [
            'enquiries' => $enquiries,
            'kpis' => $kpis,
            'filters' => [
                'search' => $search ?: '',
                'status' => $status ?: 'all',
                'service' => $service ?: 'all',
                'sort' => $sort,
                'per_page' => $perPage,
            ],
            'availableServices' => $availableServices,
        ]);
    }

    /**
     * Store a manually created enquiry (e.g. from an offline inquiry or direct call).
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'service' => ['nullable', 'string', 'max:255'],
            'budget' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:5000'],
            'status' => ['nullable', 'string', 'in:new,contacted,in_progress,resolved,spam'],
            'admin_notes' => ['nullable', 'string', 'max:5000'],
        ]);

        ContactEnquiry::create([
            'name' => trim($validated['name']),
            'email' => strtolower(trim($validated['email'])),
            'phone' => trim($validated['phone']),
            'service' => $validated['service'] ?? null,
            'budget' => $validated['budget'] ?? null,
            'message' => $validated['message'] ?? null,
            'status' => $validated['status'] ?? ContactEnquiry::STATUS_NEW,
            'admin_notes' => $validated['admin_notes'] ?? null,
            'ip_address' => $request->ip(),
            'user_agent' => 'Admin Manual Entry',
        ]);

        return back()->with('success', 'Enquiry recorded successfully.');
    }

    /**
     * Update status, admin notes, or details of a contact enquiry.
     */
    public function update(Request $request, ContactEnquiry $enquiry): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['sometimes', 'required', 'string', 'in:new,contacted,in_progress,resolved,spam'],
            'admin_notes' => ['nullable', 'string', 'max:5000'],
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'email' => ['sometimes', 'required', 'email', 'max:255'],
            'phone' => ['sometimes', 'required', 'string', 'max:30'],
            'service' => ['nullable', 'string', 'max:255'],
            'budget' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:5000'],
        ]);

        $enquiry->update($validated);

        return back()->with('success', 'Enquiry updated successfully.');
    }

    /**
     * Delete a single contact enquiry.
     */
    public function destroy(ContactEnquiry $enquiry): RedirectResponse
    {
        $enquiry->delete();

        return back()->with('success', 'Enquiry deleted successfully.');
    }

    /**
     * Delete multiple selected enquiries at once (Bulk Delete).
     */
    public function bulkDestroy(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'ids' => ['required', 'array', 'min:1'],
            'ids.*' => ['required', 'integer', 'exists:contact_enquiries,id'],
        ]);

        $deletedCount = ContactEnquiry::whereIn('id', $validated['ids'])->delete();

        return back()->with('success', "{$deletedCount} enquiries deleted successfully.");
    }
}
