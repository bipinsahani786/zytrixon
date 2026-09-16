import { Link } from '@inertiajs/react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export interface CaseStudyItem {
    id?: number;
    title: string;
    slug: string;
    client_name?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    results?: string[] | string | null;
    image?: string | null;
    service?: {
        title: string;
        slug: string;
    };
}

export interface CaseStudyCardProps {
    study: CaseStudyItem;
    className?: string;
}

/**
 * CaseStudyCard: Reusable project case study card with metrics, industry badges, and deep dive links.
 */
export default function CaseStudyCard({
    study,
    className = '',
}: CaseStudyCardProps) {
    const parseResults = (results: string[] | string | null | undefined): string[] => {
        if (!results) return [];
        if (Array.isArray(results)) return results;
        try {
            return JSON.parse(results);
        } catch {
            return [];
        }
    };

    const resultsList = parseResults(study.results);

    return (
        <article
            className={`group flex flex-col bg-card text-card-foreground border border-border rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 ${className}`}
        >
            {/* Visual Cover */}
            <div className="relative h-52 w-full overflow-hidden bg-muted/40 border-b border-border/50">
                {study.image ? (
                    <img
                        src={study.image}
                        alt={study.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 via-card to-secondary flex items-center justify-center">
                        <span className="font-heading font-extrabold text-3xl text-foreground/15">
                            CASE STUDY
                        </span>
                    </div>
                )}

                {study.industry && (
                    <span className="absolute top-3.5 left-3.5 bg-background/90 backdrop-blur-md text-primary font-heading text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-border shadow-xs">
                        {study.industry}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1">
                {study.client_name && (
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        {study.client_name} {study.service?.title ? `• ${study.service.title}` : ''}
                    </div>
                )}

                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug mb-3">
                    <Link href={`/case-studies/${study.slug}`}>
                        {study.title}
                    </Link>
                </h3>

                {study.challenge && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                        {study.challenge}
                    </p>
                )}

                {/* Key Results / Metrics Tags */}
                {resultsList.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                        {resultsList.slice(0, 2).map((res, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20"
                            >
                                <TrendingUp className="w-3 h-3" />
                                {res}
                            </span>
                        ))}
                    </div>
                )}

                <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-150"
                    >
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
