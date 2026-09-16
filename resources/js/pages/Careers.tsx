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
            <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
                <SectionHeader
                    badge="JOIN OUR TEAM"
                    title="Open Positions"
                    subtitle="Explore our current engineering, design, and AI openings and find where you fit in."
                />

                <div className="flex flex-col gap-5 max-w-4xl mx-auto">
                    {JOBS.map((job) => (
                        <div
                            key={job.id}
                            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div>
                                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-3">
                                    {job.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Briefcase className="w-4 h-4 text-primary" />
                                        {job.department}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        {job.location}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-primary" />
                                        {job.type}
                                    </span>
                                </div>
                            </div>

                            <a
                                href={`mailto:zytrixon@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-[0_0_20px_var(--accent-cyan-glow)] hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 self-start sm:self-center"
                            >
                                <span>Apply Now</span>
                                <ArrowUpRight className="w-4 h-4" />
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
