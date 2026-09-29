<?php

use App\Models\ContactEnquiry;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('visitors can submit contact enquiries', function () {
    $response = $this->post(route('contact.store'), [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '+91 98765 43210',
        'service' => 'Web Development',
        'budget' => '₹50,000 - ₹1,00,000',
        'message' => 'Need an enterprise website built with Laravel & React.',
    ], [
        'Accept' => 'application/json',
    ]);

    $response->assertCreated();
    $response->assertJson([
        'success' => true,
    ]);

    $this->assertDatabaseHas('contact_enquiries', [
        'email' => 'john@example.com',
        'name' => 'John Doe',
        'status' => 'new',
    ]);
});

test('admins can view enquiries in admin console', function () {
    $admin = User::factory()->create(['role' => 'admin']);
    ContactEnquiry::create([
        'name' => 'Lead One',
        'email' => 'lead1@example.com',
        'phone' => '1234567890',
        'service' => 'Web Development',
        'budget' => '₹50,000 - ₹1,00,000',
        'message' => 'Inquiry details from DB',
        'status' => 'new',
    ]);

    $response = $this->actingAs($admin)->get(route('admin.contacts.index'));

    $response->assertOk();
    $response->assertInertia(fn (AssertableInertia $page) => $page
        ->component('Admin/Contacts')
        ->has('enquiries.data', 1)
        ->where('enquiries.data.0.name', 'Lead One')
        ->where('enquiries.data.0.email', 'lead1@example.com')
        ->where('enquiries.data.0.service', 'Web Development')
        ->where('enquiries.data.0.budget', '₹50,000 - ₹1,00,000')
        ->where('kpis.total', 1)
        ->where('kpis.new', 1)
    );
});

test('non-admin users cannot access admin enquiries', function () {
    $customer = User::factory()->create(['role' => 'customer']);

    $response = $this->actingAs($customer)->get(route('admin.contacts.index'));

    $response->assertRedirect(route('customer.dashboard'));
});

test('admins can update enquiry status and notes', function () {
    $admin = User::factory()->create(['role' => 'admin']);
    $enquiry = ContactEnquiry::create([
        'name' => 'Lead Two',
        'email' => 'lead2@example.com',
        'phone' => '1234567890',
        'status' => 'new',
    ]);

    $response = $this->actingAs($admin)->put(route('admin.contacts.update', $enquiry), [
        'status' => 'in_progress',
        'admin_notes' => 'Client called back on Monday.',
    ]);

    $response->assertSessionHas('success');
    $this->assertDatabaseHas('contact_enquiries', [
        'id' => $enquiry->id,
        'status' => 'in_progress',
        'admin_notes' => 'Client called back on Monday.',
    ]);
});

test('admins can bulk delete enquiries', function () {
    $admin = User::factory()->create(['role' => 'admin']);
    $enquiry1 = ContactEnquiry::create([
        'name' => 'Spam 1',
        'email' => 'spam1@example.com',
        'phone' => '111',
    ]);
    $enquiry2 = ContactEnquiry::create([
        'name' => 'Spam 2',
        'email' => 'spam2@example.com',
        'phone' => '222',
    ]);

    $response = $this->actingAs($admin)->post(route('admin.contacts.bulk-delete'), [
        'ids' => [$enquiry1->id, $enquiry2->id],
    ]);

    $response->assertSessionHas('success');
    $this->assertDatabaseMissing('contact_enquiries', ['id' => $enquiry1->id]);
    $this->assertDatabaseMissing('contact_enquiries', ['id' => $enquiry2->id]);
});
