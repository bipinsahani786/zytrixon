import type { ReactNode } from 'react';

export interface SectionHeaderProps {
    badge?: string;
    title: ReactNode;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
}

/**
 * SectionHeader: Universal section title & subtitle component.
 * Standardizes typography, spacing, and accent badges across all website sections.
 */
export default function SectionHeader({
    badge,
    title,
    subtitle,
    align = 'center',
    className = '',
}: SectionHeaderProps) {
    const alignmentClasses = {
        left: 'text-left items-start',
        center: 'text-center items-center mx-auto',
        right: 'text-right items-end ml-auto',
    }[align];

    return (
        <div
            className={`mb-12 flex flex-col sm:mb-16 ${alignmentClasses} ${className}`}
        >
            {badge && (
                <span className="mb-3.5 inline-block w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-heading text-xs font-bold tracking-[0.2em] text-primary uppercase">
                    {badge}
                </span>
            )}

            <h2 className="max-w-3xl font-heading text-3xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 max-w-2xl text-base leading-relaxed font-normal text-muted-foreground sm:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
