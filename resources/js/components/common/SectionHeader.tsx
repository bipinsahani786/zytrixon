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
        <div className={`flex flex-col mb-12 sm:mb-16 ${alignmentClasses} ${className}`}>
            {badge && (
                <span className="inline-block font-heading text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    {badge}
                </span>
            )}

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-3xl">
                {title}
            </h2>

            {subtitle && (
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mt-4 leading-relaxed font-normal">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
