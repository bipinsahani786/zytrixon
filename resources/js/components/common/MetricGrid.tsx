export interface MetricItem {
    value: string | number;
    suffix?: string;
    label: string;
    description?: string;
}

export interface MetricGridProps {
    metrics: MetricItem[];
    columns?: 2 | 3 | 4;
    className?: string;
}

/**
 * MetricGrid: Reusable stat/metrics strip used across Case Studies, About, and Service stats.
 */
export default function MetricGrid({
    metrics,
    columns = 4,
    className = '',
}: MetricGridProps) {
    const colClasses = {
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-3',
        4: 'grid-cols-2 lg:grid-cols-4',
    }[columns];

    return (
        <div
            className={`grid ${colClasses} gap-6 rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm backdrop-blur-md sm:p-8 ${className}`}
        >
            {metrics.map((item, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center p-2 text-center"
                >
                    <div className="flex items-baseline font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        <span>{item.value}</span>
                        {item.suffix && (
                            <span className="ml-0.5 text-primary">
                                {item.suffix}
                            </span>
                        )}
                    </div>
                    <div className="mt-2 font-heading text-xs font-semibold tracking-wider text-muted-foreground uppercase sm:text-sm">
                        {item.label}
                    </div>
                    {item.description && (
                        <p className="mt-1 max-w-[200px] text-xs text-muted-foreground">
                            {item.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
