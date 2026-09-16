import { Head } from '@inertiajs/react';
import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import CaseStudyCard, { type CaseStudyItem } from '@/components/common/CaseStudyCard';
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
            if (cs.industry) set.add(cs.industry);
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
                (cs.client_name && cs.client_name.toLowerCase().includes(query)) ||
                (cs.challenge && cs.challenge.toLowerCase().includes(query)) ||
                (cs.service?.title && cs.service.title.toLowerCase().includes(query));
            return matchesIndustry && matchesSearch;
        });
    }, [caseStudies, selectedIndustry, searchQuery]);

    const pageSeo = {
        title: seo?.title || 'Case Studies & Enterprise Results | Zytrixon Tech',
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
            <section className="max-w-7xl mx-auto px-6 sm:px-10 -mt-8 sm:-mt-12 relative z-20 mb-12">
                <MetricGrid metrics={HIGHLIGHT_METRICS} columns={4} />
            </section>

            {/* 3. Controls: Search + Industry Filters */}
            <section className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex flex-col items-center gap-6">
                {/* Search Bar */}
                <div className="relative w-full max-w-md">
                    <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search by keyword, client, or industry..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-10 py-3 rounded-full bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 shadow-xs"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery('')}
                            aria-label="Clear search"
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                        >
                            <X className="w-4 h-4" />
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
            <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24">
                {filteredStudies.length === 0 ? (
                    <div className="text-center py-20 px-6 bg-card/40 border border-border rounded-3xl max-w-lg mx-auto">
                        <p className="text-lg font-heading font-semibold text-foreground mb-2">
                            No case studies found
                        </p>
                        <p className="text-sm text-muted-foreground mb-6">
                            Try searching for another keyword or select a different industry filter.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedIndustry('All');
                            }}
                            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
