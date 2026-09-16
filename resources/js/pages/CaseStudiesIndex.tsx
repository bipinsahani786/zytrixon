import { Head } from '@inertiajs/react';
import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import CaseStudyCard from '@/components/common/CaseStudyCard';
import type {CaseStudyItem} from '@/components/common/CaseStudyCard';
import FilterTabs from '@/components/common/FilterTabs';
import MetricGrid from '@/components/common/MetricGrid';
import InnerPageHero from '@/components/landing/inner-page-hero';
import PublicLayout from '@/components/layouts/PublicLayout';

export interface CaseStudiesIndexProps {
    caseStudies: CaseStudyItem[];
    seo?: {
        title?: string;
        description?: string;
    };
}

const HIGHLIGHT_METRICS = [
    { value: '99.99%', suffix: '', label: 'System Uptime Delivered' },
    { value: '10M+', suffix: '', label: 'Active Users Scaled' },
    { value: '40%+', suffix: '', label: 'Efficiency Boost' },
    { value: '100%', suffix: '', label: 'On-Time Project Delivery' },
];

export default function CaseStudiesIndex({
    caseStudies = [],
    seo,
}: CaseStudiesIndexProps) {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Extract unique industries for filter tabs
    const industries = useMemo(() => {
        const set = new Set<string>();
        caseStudies.forEach((cs) => {
            if (cs.industry) {
set.add(cs.industry);
}
        });
        return ['All', ...Array.from(set)];
    }, [caseStudies]);

    // Filter case studies by industry & search query
    const filteredStudies = useMemo(() => {
        return caseStudies.filter((cs) => {
            const matchesIndustry =
                selectedIndustry === 'All' || cs.industry === selectedIndustry;
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                cs.title.toLowerCase().includes(query) ||
                (cs.client_name &&
                    cs.client_name.toLowerCase().includes(query)) ||
                (cs.challenge && cs.challenge.toLowerCase().includes(query)) ||
                (cs.service?.title &&
                    cs.service.title.toLowerCase().includes(query));
            return matchesIndustry && matchesSearch;
        });
    }, [caseStudies, selectedIndustry, searchQuery]);

    const pageSeo = {
        title:
            seo?.title || 'Case Studies & Enterprise Results | Zytrixon Tech',
        description:
            seo?.description ||
            'Explore proven case studies in web development, mobile apps, IoT, and AI automation delivered by Zytrixon Tech.',
    };

    // Schema.org CollectionPage markup
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: pageSeo.title,
        description: pageSeo.description,
        publisher: {
            '@type': 'Organization',
            name: 'Zytrixon Tech',
            url: 'https://zytrixon.com',
        },
        hasPart: caseStudies.map((cs) => ({
            '@type': 'Article',
            headline: cs.title,
            about: cs.industry,
            author: {
                '@type': 'Organization',
                name: 'Zytrixon Tech',
            },
            url: `https://zytrixon.com/case-studies/${cs.slug}`,
        })),
    };

    return (
        <PublicLayout seo={pageSeo} showContactSection={true}>
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>

            {/* 1. Hero */}
            <InnerPageHero
                title="Proven Impact & Case Studies"
                subtitle="Real engineering solutions solving mission-critical business challenges. From Samastipur, Bihar to clients worldwide."
            />

            {/* 2. Highlight Metrics Strip */}
            <section className="relative z-20 mx-auto -mt-8 mb-12 max-w-7xl px-6 sm:-mt-12 sm:px-10">
                <MetricGrid metrics={HIGHLIGHT_METRICS} columns={4} />
            </section>

            {/* 3. Controls: Search + Industry Filters */}
            <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-6 px-6 sm:px-10">
                {/* Search Bar */}
                <div className="relative w-full max-w-md">
                    <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by keyword, client, or industry..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-full border border-border bg-card py-3 pr-10 pl-11 text-sm text-foreground shadow-xs transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery('')}
                            aria-label="Clear search"
                            className="absolute top-1/2 right-3.5 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {/* Filter Tabs */}
                <FilterTabs
                    tabs={industries}
                    activeTab={selectedIndustry}
                    onTabChange={setSelectedIndustry}
                />
            </section>

            {/* 4. Case Studies Grid */}
            <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10">
                {filteredStudies.length === 0 ? (
                    <div className="mx-auto max-w-lg rounded-3xl border border-border bg-card/40 px-6 py-20 text-center">
                        <p className="mb-2 font-heading text-lg font-semibold text-foreground">
                            No case studies found
                        </p>
                        <p className="mb-6 text-sm text-muted-foreground">
                            Try searching for another keyword or select a
                            different industry filter.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedIndustry('All');
                            }}
                            className="rounded-full bg-primary px-5 py-2.5 font-heading text-xs font-bold tracking-wider text-primary-foreground uppercase transition-opacity hover:opacity-90"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredStudies.map((study) => (
                            <CaseStudyCard
                                key={study.id || study.slug}
                                study={study}
                            />
                        ))}
                    </div>
                )}
            </section>
        </PublicLayout>
    );
}
