import CaseStudyCard from '@/components/common/CaseStudyCard';
import type {CaseStudyItem} from '@/components/common/CaseStudyCard';
import SectionHeader from '@/components/common/SectionHeader';

export interface CaseStudiesListProps {
    service?: any;
    caseStudies?: CaseStudyItem[];
}

export default function CaseStudiesList({
    caseStudies = [],
}: CaseStudiesListProps) {
    if (!caseStudies || caseStudies.length === 0) {
        return null;
    }

    return (
        <section className="zy-section border-t border-border/50 bg-background px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    badge="PROVEN RESULTS"
                    title="Case Studies & Success Stories"
                    subtitle="Real-world digital platforms, mobile applications, and IoT systems engineered for high impact."
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {caseStudies.map((study) => (
                        <CaseStudyCard
                            key={study.id || study.slug}
                            study={study}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
