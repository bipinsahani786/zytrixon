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
            className={`grid ${colClasses} gap-6 bg-card text-card-foreground border border-border rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-md ${className}`}
        >
            {metrics.map((item, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center text-center p-2"
                >
                    <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground flex items-baseline">
                        <span>{item.value}</span>
                        {item.suffix && (
                            <span className="text-primary ml-0.5">{item.suffix}</span>
                        )}
                    </div>
                    <div className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                        {item.label}
                    </div>
                    {item.description && (
                        <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">
                            {item.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
