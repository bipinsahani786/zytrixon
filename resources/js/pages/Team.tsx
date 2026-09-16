import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import CoreValuesSection from '@/components/landing/core-values-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import InnerPageHero from '@/components/landing/inner-page-hero';
import TeamSection from '@/components/landing/team-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PublicLayout from '@/components/layouts/PublicLayout';

export default function Team() {
    return (
        <PublicLayout
            seo={{
                title: 'Our Team | Zytrixon Tech',
                description:
                    'Meet the brilliant minds behind Zytrixon Tech – developers, designers, and strategists.',
            }}
            showContactSection={true}
        >
            {/* 1. Hero Section */}
            <InnerPageHero
                title="The Minds Behind The Magic"
                subtitle="We are a collective of engineers, designers, and strategists united by a single mission: delivering digital dominance."
            />

            {/* 2. Team Grid */}
            <div className="pt-12 sm:pt-16">
                <TeamSection />
            </div>

            {/* 3. Core Values */}
            <div className="-mt-8">
                <CoreValuesSection />
            </div>

            {/* 4. Global Footprint */}
            <GlobalFootprint />

            {/* 5. Custom Hiring Section */}
            <section className="py-24 px-6 sm:px-10 text-center">
                <div className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-10 sm:p-14 shadow-lg">
                    <span className="inline-block font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        WE ARE HIRING
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                        Join Our Mission
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                        We are always looking for exceptional talent. If you are passionate about building world-class software, we want to hear from you.
                    </p>
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_var(--accent-cyan-glow)] hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                        <span>View Open Positions</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* 6. Testimonials */}
            <TestimonialsSection />
        </PublicLayout>
    );
}
