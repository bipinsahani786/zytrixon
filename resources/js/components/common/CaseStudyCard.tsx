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
    const parseResults = (
        results: string[] | string | null | undefined,
    ): string[] => {
        if (!results) {
return [];
}
        if (Array.isArray(results)) {
return results;
}
        try {
            return JSON.parse(results);
        } catch {
            return [];
        }
    };

    const resultsList = parseResults(study.results);

    return (
        <article
            className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl ${className}`}
        >
            {/* Visual Cover */}
            <div className="relative h-52 w-full overflow-hidden border-b border-border/50 bg-muted/40">
                {study.image ? (
                    <img
                        src={study.image}
                        alt={study.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-card to-secondary">
                        <span className="font-heading text-3xl font-extrabold text-foreground/15">
                            CASE STUDY
                        </span>
                    </div>
                )}

                {study.industry && (
                    <span className="absolute top-3.5 left-3.5 rounded-full border border-border bg-background/90 px-2.5 py-1 font-heading text-[11px] font-bold tracking-wider text-primary uppercase shadow-xs backdrop-blur-md">
                        {study.industry}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
                {study.client_name && (
                    <div className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        {study.client_name}{' '}
                        {study.service?.title ? `• ${study.service.title}` : ''}
                    </div>
                )}

                <h3 className="mb-3 font-heading text-xl leading-snug font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                    <Link href={`/case-studies/${study.slug}`}>
                        {study.title}
                    </Link>
                </h3>

                {study.challenge && (
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {study.challenge}
                    </p>
                )}

                {/* Key Results / Metrics Tags */}
                {resultsList.length > 0 && (
                    <div className="mt-auto mb-5 flex flex-wrap gap-1.5">
                        {resultsList.slice(0, 2).map((res, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary"
                            >
                                <TrendingUp className="h-3 w-3" />
                                {res}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between border-t border-border/50 pt-3">
                    <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-foreground transition-colors duration-150 group-hover:text-primary"
                    >
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
