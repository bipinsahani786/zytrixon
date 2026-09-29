<?php

namespace Database\Seeders;

use App\Models\ContactEnquiry;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ContactEnquirySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $enquiries = [
            [
                'name' => 'Aarav Sharma',
                'email' => 'aarav.sharma@innovatetech.in',
                'phone' => '+91 98765 43210',
                'service' => 'Web Development',
                'budget' => '₹1,00,000 - ₹2,50,000',
                'message' => 'Looking for a high-performance Next.js & Laravel web platform for our B2B tech consulting firm. Need custom animations, interactive portfolio, and CMS.',
                'status' => ContactEnquiry::STATUS_NEW,
                'admin_notes' => 'Hot lead from direct search. Needs immediate callback.',
                'ip_address' => '103.21.244.12',
                'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0.0.0 Safari/537.36',
                'created_at' => Carbon::now()->subMinutes(25),
                'updated_at' => Carbon::now()->subMinutes(25),
            ],
            [
                'name' => 'Priya Patel',
                'email' => 'priya@patelagroindustries.com',
                'phone' => '+91 91234 56789',
                'service' => 'Grain SaaS Custom ERP',
                'budget' => '₹2,50,000+',
                'message' => 'We operate 4 grain mandi processing units in Gujarat and require custom inventory management with lot-wise tracking, broker commission calculator, and invoice generation.',
                'status' => ContactEnquiry::STATUS_NEW,
                'admin_notes' => null,
                'ip_address' => '49.36.128.90',
                'user_agent' => 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1',
                'created_at' => Carbon::now()->subHours(2),
                'updated_at' => Carbon::now()->subHours(2),
            ],
            [
                'name' => 'Vikram Malhotra',
                'email' => 'vikram@malhotrahospitality.com',
                'phone' => '+91 99887 76655',
                'service' => 'ReviewBooster AI Integration',
                'budget' => '₹50,000 - ₹1,00,000',
                'message' => 'Interested in setting up ReviewBooster QR standees across our 6 restaurant outlets in Delhi NCR to improve our Google Maps ranking and collect genuine 5-star reviews.',
                'status' => ContactEnquiry::STATUS_CONTACTED,
                'admin_notes' => 'Spoke with Vikram on phone. Sent sample QR standee demo kit and quotation. Follow-up scheduled for tomorrow 4 PM.',
                'ip_address' => '115.111.230.14',
                'user_agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/127.0.0.0 Safari/537.36',
                'created_at' => Carbon::now()->subHours(5),
                'updated_at' => Carbon::now()->subHours(3),
            ],
            [
                'name' => 'Sneha Kulkarni',
                'email' => 'sneha.k@finverge.io',
                'phone' => '+91 97654 32190',
                'service' => 'Mobile App Development',
                'budget' => '₹2,50,000+',
                'message' => 'We need a cross-platform React Native / Flutter mobile app for iOS and Android with secure biometric authentication, UPI payments, and push notifications.',
                'status' => ContactEnquiry::STATUS_IN_PROGRESS,
                'admin_notes' => 'Technical discovery call completed. Wireframes shared on Figma. Scope document approved; drafting formal agreement.',
                'ip_address' => '14.139.122.5',
                'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0',
                'created_at' => Carbon::now()->subDays(1),
                'updated_at' => Carbon::now()->subHours(6),
            ],
            [
                'name' => 'Rahul Verma',
                'email' => 'rahul@vermarealty.in',
                'phone' => '+91 98112 23344',
                'service' => 'SEO & Digital Marketing',
                'budget' => '₹50,000 - ₹1,00,000',
                'message' => 'Need monthly SEO and local search ranking optimization for our luxury real estate agency in Gurugram. Want to rank #1 on Google for high-intent property keywords.',
                'status' => ContactEnquiry::STATUS_CONTACTED,
                'admin_notes' => 'Audit report sent. Client reviewing budget proposal with partners.',
                'ip_address' => '182.72.68.10',
                'user_agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/605.1.15',
                'created_at' => Carbon::now()->subDays(2),
                'updated_at' => Carbon::now()->subDays(1),
            ],
            [
                'name' => 'Rohan Mehta',
                'email' => 'rohan@mehtaecommerce.com',
                'phone' => '+91 98220 11223',
                'service' => 'Web Development',
                'budget' => '₹1,00,000 - ₹2,50,000',
                'message' => 'Redesigning our Shopify/headless storefront with custom checkout and Razorpay integration. Previous agency left bugs in inventory sync.',
                'status' => ContactEnquiry::STATUS_RESOLVED,
                'admin_notes' => 'Project successfully completed and launched. Client gave a 5-star testimonial.',
                'ip_address' => '117.211.89.54',
                'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'created_at' => Carbon::now()->subDays(5),
                'updated_at' => Carbon::now()->subDays(1),
            ],
            [
                'name' => 'Ananya Singhania',
                'email' => 'ananya@designstudio.org',
                'phone' => '+91 99334 45566',
                'service' => 'UI/UX Design',
                'budget' => '₹25,000 - ₹50,000',
                'message' => 'Design audit and complete UI/UX revamp for our SaaS dashboard. We need a dark mode design system in Figma with Tailwind-ready tokens.',
                'status' => ContactEnquiry::STATUS_NEW,
                'admin_notes' => null,
                'ip_address' => '103.47.15.22',
                'user_agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128.0.0.0',
                'created_at' => Carbon::now()->subHours(12),
                'updated_at' => Carbon::now()->subHours(12),
            ],
            [
                'name' => 'Marcus Vance',
                'email' => 'marcus@vancetech.co',
                'phone' => '+1 (415) 890-1234',
                'service' => 'Custom Software Solutions',
                'budget' => '₹2,50,000+',
                'message' => 'Looking for a dedicated offshore engineering team to build our AI workflow orchestration backend with Python and Laravel.',
                'status' => ContactEnquiry::STATUS_IN_PROGRESS,
                'admin_notes' => 'Client is in California (PST). Zoom call held with founder. NDA signed. Sprint planning starts Monday.',
                'ip_address' => '64.233.160.1',
                'user_agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 Safari/605.1.15',
                'created_at' => Carbon::now()->subDays(3),
                'updated_at' => Carbon::now()->subHours(18),
            ],
        ];

        foreach ($enquiries as $data) {
            ContactEnquiry::updateOrCreate(
                ['email' => $data['email']],
                $data
            );
        }
    }
}
