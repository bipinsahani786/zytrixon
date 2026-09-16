import { Briefcase, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import CoreValuesSection from '@/components/landing/core-values-section';
import FAQSection from '@/components/landing/faq-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import InnerPageHero from '@/components/landing/inner-page-hero';
import TeamSection from '@/components/landing/team-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PublicLayout from '@/components/layouts/PublicLayout';

const JOBS = [
    {
        id: 1,
        title: 'Senior React & TypeScript Engineer',
        department: 'Engineering',
        location: 'Samastipur, IN (Hybrid)',
        type: 'Full-time',
    },
    {
        id: 2,
        title: 'Backend Systems Lead (Laravel / PHP)',
        department: 'Engineering',
        location: 'Remote (India)',
        type: 'Full-time',
    },
    {
        id: 3,
        title: 'Senior UI/UX Product Designer',
        department: 'Design',
        location: 'Samastipur, IN (On-site)',
        type: 'Full-time',
    },
    {
        id: 4,
        title: 'AI & Automation Solutions Specialist',
        department: 'Data & AI',
        location: 'Remote',
        type: 'Contract / Full-time',
    },
];

export default function Careers() {
    return (
        <PublicLayout
            seo={{
                title: 'Careers & Opportunities | Zytrixon Tech',
                description:
                    'Join our team at Zytrixon Tech and build the future of software development in Samastipur, Bihar.',
            }}
            showContactSection={true}
        >
            <InnerPageHero
                title="Build the Future With Us"
                subtitle="We are looking for passionate, driven individuals who want to solve complex problems and build scalable enterprise solutions."
            />

            {/* Job Openings Section */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
                <SectionHeader
                    badge="JOIN OUR TEAM"
                    title="Open Positions"
                    subtitle="Explore our current engineering, design, and AI openings and find where you fit in."
                />

                <div className="mx-auto flex max-w-4xl flex-col gap-5">
                    {JOBS.map((job) => (
                        <div
                            key={job.id}
                            className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:flex-row sm:items-center sm:p-8"
                        >
                            <div>
                                <h3 className="mb-3 font-heading text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-2xl">
                                    {job.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:text-sm">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Briefcase className="h-4 w-4 text-primary" />
                                        {job.department}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        {job.location}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <Clock className="h-4 w-4 text-primary" />
                                        {job.type}
                                    </span>
                                </div>
                            </div>

                            <a
                                href={`mailto:zytrixon@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-primary px-6 py-3 font-heading text-xs font-bold tracking-wider text-primary-foreground uppercase shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_var(--accent-cyan-glow)] active:scale-95 sm:self-center sm:text-sm"
                            >
                                <span>Apply Now</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <CoreValuesSection />
            <GlobalFootprint />
            <TeamSection />
            <TestimonialsSection />
            <FAQSection />
        </PublicLayout>
    );
}
