import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
    children: React.ReactNode;
    minHeight?: string | number;
    threshold?: number;
    rootMargin?: string;
}

export default function LazySection({ 
    children, 
    minHeight = '50vh',
    threshold = 0,
    rootMargin = '800px 0px' 
}: LazySectionProps) {
    const isSSR = typeof window === 'undefined';
    const [isVisible, setIsVisible] = useState(isSSR); // true on server, false on client
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If already visible, no need to observe
        if (isVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                }
            },
            {
                root: null,
                rootMargin,
                threshold
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible, rootMargin, threshold]);

    return (
        <div ref={sectionRef} style={{ minHeight: isVisible ? 'auto' : minHeight, width: '100%' }}>
            {isVisible && children}
        </div>
    );
}
