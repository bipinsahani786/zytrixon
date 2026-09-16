import React, { useRef } from 'react';

interface LazySectionProps {
    children: React.ReactNode;
    minHeight?: string | number;
    className?: string;
}

export default function LazySection({
    children,
    minHeight = 'auto',
    className = '',
}: LazySectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={sectionRef}
            className={className}
            style={{
                contentVisibility: 'auto',
                containIntrinsicSize:
                    typeof minHeight === 'number'
                        ? `${minHeight}px`
                        : minHeight !== 'auto'
                          ? minHeight
                          : '600px',
                width: '100%',
            }}
        >
            {children}
        </div>
    );
}
