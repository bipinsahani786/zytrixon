<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Service;
use App\Models\Location;

class SeoDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Seed Core Services
        $services = [
            ['title' => 'Web Development', 'slug' => 'web-development', 'description' => 'Full-stack web apps with React, Next.js, Laravel — blazing fast, secure, and scalable.', 'icon' => 'globe'],
            ['title' => 'App Development', 'slug' => 'app-development', 'description' => 'Native & cross-platform mobile apps with React Native and Flutter — iOS & Android.', 'icon' => 'smartphone'],
            ['title' => 'IoT Solutions', 'slug' => 'iot-solutions', 'description' => 'Smart devices, sensor networks, real-time dashboards — connecting the physical and digital world.', 'icon' => 'cpu'],
            ['title' => 'AI & Automation', 'slug' => 'ai-automation', 'description' => 'Custom AI models, workflow automation, and smart analytics to streamline your business operations.', 'icon' => 'bot'],
            ['title' => 'Custom Software', 'slug' => 'custom-software', 'description' => 'Tailor-made enterprise software, CRM, and ERP systems designed precisely for your needs.', 'icon' => 'monitor'],
            ['title' => 'Digital Marketing', 'slug' => 'digital-marketing', 'description' => 'SEO, PPC, Social Media Marketing, and Analytics — data-driven strategies for growth.', 'icon' => 'trending-up'],
        ];

        $slugs = [];
        foreach ($services as $service) {
            Service::updateOrCreate(['slug' => $service['slug']], $service);
            $slugs[] = $service['slug'];
        }

        // Clean up old services
        Service::whereNotIn('slug', $slugs)->delete();

        // 2. Seed Locations
        $locations = [];

        // All 38 Districts of Bihar
        $biharDistricts = [
            'Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar',
            'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar',
            'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda',
            'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura',
            'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'
        ];

        foreach ($biharDistricts as $district) {
            $locations[] = [
                'name' => $district,
                'slug' => Str::slug($district),
                'type' => 'district',
                'state' => 'Bihar',
                'country' => 'India'
            ];
        }

        // Major Top Tier Cities of India
        $indianCities = [
            'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat',
            'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Visakhapatnam',
            'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi',
            'Noida', 'Gurugram', 'Chandigarh'
        ];

        foreach ($indianCities as $city) {
            $locations[] = [
                'name' => $city,
                'slug' => Str::slug($city),
                'type' => 'city',
                'state' => null, // Can map exactly if needed, but generic is fine for SEO
                'country' => 'India'
            ];
        }

        // Major Global Cities for Global SEO
        $globalCities = [
            'New York', 'London', 'Dubai', 'Singapore', 'Sydney', 'Toronto', 'Berlin', 'Tokyo',
            'San Francisco', 'Chicago', 'Melbourne', 'Amsterdam', 'Paris'
        ];

        foreach ($globalCities as $city) {
            $locations[] = [
                'name' => $city,
                'slug' => Str::slug($city),
                'type' => 'city',
                'state' => null,
                'country' => 'Global' // Just generic string for global tracking
            ];
        }

        // Insert Locations
        foreach ($locations as $loc) {
            Location::updateOrCreate(['slug' => $loc['slug']], $loc);
        }
    }
}
