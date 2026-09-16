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
            <section className="px-6 py-24 text-center sm:px-10">
                <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 shadow-lg sm:p-14">
                    <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-heading text-xs font-bold tracking-widest text-primary uppercase">
                        WE ARE HIRING
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Join Our Mission
                    </h2>
                    <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        We are always looking for exceptional talent. If you are
                        passionate about building world-class software, we want
                        to hear from you.
                    </p>
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-heading text-sm font-bold tracking-wider text-primary-foreground uppercase shadow-[0_0_25px_var(--accent-cyan-glow)] transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        <span>View Open Positions</span>
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* 6. Testimonials */}
            <TestimonialsSection />
        </PublicLayout>
    );
}
